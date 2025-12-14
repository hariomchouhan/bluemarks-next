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

    const formattedItems = galleryItems.map((item: any) => ({
      id: item._id.toString(),
      title: item.title,
      type: item.type,
      url: item.url,
      thumbnail: item.thumbnail || item.url,
      category: item.category,
      country: item.country,
      youtubeId: item.youtubeId,
    }));

    return NextResponse.json(formattedItems);
  } catch (error) {
    console.error("Error fetching gallery:", error);
    // Fallback to empty array if database is not connected
    return NextResponse.json([]);
  }
}
