import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Country from "@/models/Country";
import University from "@/models/University";

export async function GET(
  request: Request,
  { params }: { params: { country: string } }
) {
  try {
    await connectDB();
    const country = await Country.findOne({ slug: params.country });
    
    if (!country) {
      return NextResponse.json({ error: "Country not found" }, { status: 404 });
    }

    const universities = await University.find({ country: country._id }).select("name slug");

    const countryData: any = country.toObject();
    return NextResponse.json({
      id: country._id.toString(),
      name: country.name,
      slug: country.slug,
      flag: country.flag,
      description: country.description,
      fullDescription: country.fullDescription,
      fees: country.fees,
      duration: country.duration,
      eligibility: country.eligibility,
      advantages: country.advantages,
      process: country.process,
      content: countryData.content || "",
      universities: universities.map((u) => ({
        id: u._id.toString(),
        name: u.name,
        slug: u.slug,
      })),
    });
  } catch (error) {
    console.error("Error fetching country:", error);
    return NextResponse.json(
      { error: "Failed to fetch country" },
      { status: 500 }
    );
  }
}
