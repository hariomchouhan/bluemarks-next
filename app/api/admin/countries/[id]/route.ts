import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Country from "@/models/Country";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const country = await Country.findById(params.id);
    if (!country) {
      return NextResponse.json({ error: "Country not found" }, { status: 404 });
    }
    return NextResponse.json(country);
  } catch (error) {
    console.error("Error fetching country:", error);
    return NextResponse.json(
      { error: "Failed to fetch country" },
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
    const country = await Country.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });
    if (!country) {
      return NextResponse.json({ error: "Country not found" }, { status: 404 });
    }
    return NextResponse.json(country);
  } catch (error: any) {
    console.error("Error updating country:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update country" },
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
    const country = await Country.findByIdAndDelete(params.id);
    if (!country) {
      return NextResponse.json({ error: "Country not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Country deleted successfully" });
  } catch (error) {
    console.error("Error deleting country:", error);
    return NextResponse.json(
      { error: "Failed to delete country" },
      { status: 500 }
    );
  }
}

