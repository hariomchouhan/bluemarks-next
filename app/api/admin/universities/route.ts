import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import University from "@/models/University";
import Country from "@/models/Country";

export async function GET(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const countryId = searchParams.get("countryId");

    let query: any = {};
    if (countryId) {
      query.country = countryId;
    }

    const universities = await University.find(query)
      .populate("country", "name slug")
      .sort({ name: 1 });
    return NextResponse.json(universities);
  } catch (error) {
    console.error("Error fetching universities:", error);
    return NextResponse.json(
      { error: "Failed to fetch universities" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();

    // Verify country exists
    const country = await Country.findById(body.country);
    if (!country) {
      return NextResponse.json(
        { error: "Country not found" },
        { status: 404 }
      );
    }

    const university = new University({
      ...body,
      countryName: country.name,
      countrySlug: country.slug,
    });
    await university.save();
    return NextResponse.json(university, { status: 201 });
  } catch (error: any) {
    console.error("Error creating university:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create university" },
      { status: 400 }
    );
  }
}

