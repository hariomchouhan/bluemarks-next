import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Gallery from "@/models/Gallery";

export async function GET(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    let query: any = {};
    if (type) {
      query.type = type;
    }

    const galleryItems = await Gallery.find(query).sort({ createdAt: -1 });

    const formattedItems = galleryItems.map((item: any) => {
      // If image data is stored in DB, use it; otherwise use URL
      const imageUrl = item.imageData 
        ? item.imageData // Base64 data URL
        : (item.thumbnail || item.url);
      
      return {
        id: item._id.toString(),
        title: item.title,
        type: item.type,
        url: item.imageData || item.url, // Use base64 if available, otherwise URL
        thumbnail: imageUrl,
        category: item.category,
        country: item.country,
        youtubeId: item.youtubeId,
        hasImageData: !!item.imageData, // Flag to indicate if image is stored in DB
      };
    });

    return NextResponse.json(formattedItems);
  } catch (error) {
    console.error("Error fetching gallery:", error);
    // Fallback to empty array if database is not connected
    return NextResponse.json([]);
  }
}
