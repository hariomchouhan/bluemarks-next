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
      // If image data is stored in DB (base64), use it; otherwise use URL
      // Base64 data URLs start with "data:image/"
      const isBase64 = item.url?.startsWith("data:image/") || item.imageData;
      const imageUrl = item.imageData || item.url;
      const thumbnailUrl = item.thumbnail || imageUrl;
      
      return {
        id: item._id.toString(),
        title: item.title,
        type: item.type,
        url: imageUrl, // Base64 data URL or regular URL
        thumbnail: thumbnailUrl,
        category: item.category,
        country: item.country,
        youtubeId: item.youtubeId,
        hasImageData: !!item.imageData || isBase64, // Flag to indicate if image is stored in DB
      };
    });

    return NextResponse.json(formattedItems);
  } catch (error) {
    console.error("Error fetching gallery:", error);
    // Fallback to empty array if database is not connected
    return NextResponse.json([]);
  }
}
