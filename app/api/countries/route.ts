import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Country from "@/models/Country";
import University from "@/models/University";

export async function GET() {
  try {
    await connectDB();
    const countries = await Country.find({}).sort({ name: 1 });
    
    // Get universities for each country
    const countriesWithUniversities = await Promise.all(
      countries.map(async (country) => {
        const universities = await University.find({ country: country._id }).select("name slug");
        return {
          id: country._id.toString(),
          name: country.name,
          slug: country.slug,
          flag: country.flag,
          description: country.description,
          universities: universities.map((u) => ({
            id: u._id.toString(),
            name: u.name,
            slug: u.slug,
          })),
        };
      })
    );

    return NextResponse.json(countriesWithUniversities);
  } catch (error) {
    console.error("Error fetching countries:", error);
    // Fallback to empty array if database is not connected
    return NextResponse.json([]);
  }
}
