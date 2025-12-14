import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import University from "@/models/University";
import Country from "@/models/Country";

export async function GET(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const country = searchParams.get("country");
    const slug = searchParams.get("slug");

    let query: any = {};
    if (country) {
      const countryDoc = await Country.findOne({ slug: country });
      if (countryDoc) {
        query.country = countryDoc._id;
      }
    }
    if (slug) {
      query.slug = slug;
    }

    const universities = await University.find(query)
      .populate("country", "name slug")
      .sort({ name: 1 });

    const formattedUniversities = universities.map((u: any) => {
      const universityData = u.toObject ? u.toObject() : u;
      return {
        id: u._id.toString(),
        name: u.name,
        slug: u.slug,
        country: u.country?.name || u.countryName,
        countrySlug: u.country?.slug || u.countrySlug,
        description: u.description,
        fees: u.fees,
        duration: u.duration,
        eligibility: u.eligibility,
        recognition: u.recognition,
        language: u.language,
        intake: u.intake,
        applicationDeadline: u.applicationDeadline,
        content: universityData.content || "",
      };
    });

    if (slug && formattedUniversities.length > 0) {
      return NextResponse.json(formattedUniversities[0]);
    }

    return NextResponse.json(formattedUniversities);
  } catch (error) {
    console.error("Error fetching universities:", error);
    // Fallback to empty array if database is not connected
    return NextResponse.json([]);
  }
}
