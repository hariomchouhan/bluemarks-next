import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Gallery from "@/models/Gallery";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const galleryItem = await Gallery.findById(params.id);
    if (!galleryItem) {
      return NextResponse.json(
        { error: "Gallery item not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(galleryItem);
  } catch (error) {
    console.error("Error fetching gallery item:", error);
    return NextResponse.json(
      { error: "Failed to fetch gallery item" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
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

    // For photos, store image data in database if provided
    if (body.type === "photo" && body.imageData) {
      // imageData, imageMimeType, fileName, fileSize are already in body
      // They will be saved to MongoDB
    }

    const galleryItem = await Gallery.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });
    if (!galleryItem) {
      return NextResponse.json(
        { error: "Gallery item not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(galleryItem);
  } catch (error: any) {
    console.error("Error updating gallery item:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update gallery item" },
      { status: 400 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const galleryItem = await Gallery.findByIdAndDelete(params.id);
    if (!galleryItem) {
      return NextResponse.json(
        { error: "Gallery item not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "Gallery item deleted successfully" });
  } catch (error) {
    console.error("Error deleting gallery item:", error);
    return NextResponse.json(
      { error: "Failed to delete gallery item" },
      { status: 500 }
    );
  }
}

function extractYouTubeId(url: string): string | null {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

