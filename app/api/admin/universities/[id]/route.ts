import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import University from "@/models/University";
import Country from "@/models/Country";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const university = await University.findById(params.id).populate(
      "country",
      "name slug"
    );
    if (!university) {
      return NextResponse.json(
        { error: "University not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(university);
  } catch (error) {
    console.error("Error fetching university:", error);
    return NextResponse.json(
      { error: "Failed to fetch university" },
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

    // If country is being updated, verify it exists
    if (body.country) {
      const country = await Country.findById(body.country);
      if (!country) {
        return NextResponse.json(
          { error: "Country not found" },
          { status: 404 }
        );
      }
      body.countryName = country.name;
      body.countrySlug = country.slug;
    }

    const university = await University.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });
    if (!university) {
      return NextResponse.json(
        { error: "University not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(university);
  } catch (error: any) {
    console.error("Error updating university:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update university" },
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
    const university = await University.findByIdAndDelete(params.id);
    if (!university) {
      return NextResponse.json(
        { error: "University not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "University deleted successfully" });
  } catch (error) {
    console.error("Error deleting university:", error);
    return NextResponse.json(
      { error: "Failed to delete university" },
      { status: 500 }
    );
  }
}

