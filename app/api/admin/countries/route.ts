import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Country from "@/models/Country";

export async function GET() {
  try {
    await connectDB();
    const countries = await Country.find({}).sort({ name: 1 });
    return NextResponse.json(countries);
  } catch (error) {
    console.error("Error fetching countries:", error);
    return NextResponse.json(
      { error: "Failed to fetch countries" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const country = new Country(body);
    await country.save();
    return NextResponse.json(country, { status: 201 });
  } catch (error: any) {
    console.error("Error creating country:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create country" },
      { status: 400 }
    );
  }
}

