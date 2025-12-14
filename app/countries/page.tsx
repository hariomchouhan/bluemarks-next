"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, GraduationCap, DollarSign, Globe } from "lucide-react";

export default function CountriesPage() {
  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const res = await fetch("/api/countries");
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading countries...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Study MBBS Abroad</h1>
            <p className="text-xl text-blue-100">
              Explore top destinations for medical education
            </p>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country) => (
              <Link
                key={country.id}
                href={`/countries/${country.slug}`}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 group"
              >
                <div className="text-6xl mb-4">{country.flag}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {country.name}
                </h3>
                <p className="text-gray-600 mb-6">{country.description}</p>
                {country.universities && country.universities.length > 0 && (
                  <div className="flex items-center gap-2 text-gray-700 mb-4">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">{country.universities.length} Universities</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study Abroad */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Why Study MBBS Abroad?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Affordable Fees", desc: "Lower tuition costs compared to private medical colleges in India" },
              { title: "No Donation", desc: "Transparent admission process without capitation fees" },
              { title: "Global Recognition", desc: "Degrees recognized by WHO, MCI, and other international bodies" },
              { title: "Quality Education", desc: "World-class infrastructure and experienced faculty" },
            ].map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Help Choosing a Country?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Our expert counselors can help you select the best destination based on your preferences and budget.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-600 rounded-lg font-semibold text-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
