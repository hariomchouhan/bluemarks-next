import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Image from "@/models/image";

export async function GET(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    let query: any = {};
    if (type) {
      query.type = type;
    }

    const images = await Image.find(query).sort({ createdAt: -1 });

    const formattedImages = images.map((item: any) => {
      // If image data is stored in DB (base64), use it; otherwise use URL
      // Base64 data URLs start with "data:image/"
      const isBase64 = item.imageData?.startsWith("data:image/") || item.imageData;
      const imageUrl = item.imageData;
      
      return {
        id: item._id.toString(),
        title: item.title,
        imageData: imageUrl, // Base64 data URL or regular URL
        hasImageData: !!item.imageData || isBase64, // Flag to indicate if image is stored in DB
      };
    });

    return NextResponse.json(formattedImages);
  } catch (error) {
    console.error("Error fetching images:", error);
    // Fallback to empty array if database is not connected
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();

    const { title, imageData, imageMimeType, fileName, fileSize } = body;

    if (!title || !imageData) {
      return NextResponse.json(
        { error: "Title and image data are required" },
        { status: 400 }
      );
    }

    const image = new Image({
      title,
      imageData,
      imageMimeType,
      fileName,
      fileSize,
    });

    await image.save();

    return NextResponse.json(
      {
        id: image._id.toString(),
        title: image.title,
        imageData: image.imageData,
        imageMimeType: image.imageMimeType,
        fileName: image.fileName,
        fileSize: image.fileSize,
        createdAt: image.createdAt,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error saving image:", error);
    return NextResponse.json(
      { error: error.message || "Failed to save image" },
      { status: 500 }
    );
  }
}
