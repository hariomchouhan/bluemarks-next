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
    return NextResponse.json(galleryItems);
  } catch (error) {
    console.error("Error fetching gallery:", error);
    return NextResponse.json(
      { error: "Failed to fetch gallery" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();

    // For YouTube videos, extract video ID and create embed URL
    if (body.type === "video" && body.youtubeUrl) {
      const youtubeId = extractYouTubeId(body.youtubeUrl);
      if (youtubeId) {
        body.youtubeId = youtubeId;
        body.url = `https://www.youtube.com/embed/${youtubeId}`;
        body.thumbnail = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
      }
    }

    const galleryItem = new Gallery(body);
    await galleryItem.save();
    return NextResponse.json(galleryItem, { status: 201 });
  } catch (error: any) {
    console.error("Error creating gallery item:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create gallery item" },
      { status: 400 }
    );
  }
}

function extractYouTubeId(url: string): string | null {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

