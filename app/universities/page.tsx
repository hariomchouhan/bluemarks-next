"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GraduationCap, MapPin, DollarSign, CheckCircle, ArrowRight } from "lucide-react";

export default function UniversitiesPage() {
  const [universities, setUniversities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    fetchUniversities();
  }, []);

  const fetchUniversities = async () => {
    try {
      const res = await fetch("/api/universities");
      const data = await res.json();
      setUniversities(data);
    } catch (error) {
      console.error("Error fetching universities:", error);
    } finally {
      setLoading(false);
    }
  };

  const countries = ["all", ...new Set(universities.map((u) => u.country))];
  const filteredUniversities =
    filter === "all" ? universities : universities.filter((u) => u.country === filter);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading universities...</p>
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Partner Universities</h1>
            <p className="text-xl text-blue-100">
              Explore our network of accredited medical universities worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => setFilter(country)}
                className={`px-4 py-2 rounded-lg font-medium transition-all capitalize ${
                  filter === country
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {country}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUniversities.map((university) => (
              <Link
                key={university.id}
                href={`/universities/${university.slug}`}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{university.name}</h3>
                    <p className="text-gray-600 text-sm flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {university.country}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">{university.description}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-700">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium">Tuition: {university.fees}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium">Duration: {university.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium">Recognition: {university.recognition}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all">
                  <span>View Details</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">University Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "WHO Recognition",
                desc: "All our partner universities are recognized by the World Health Organization",
              },
              {
                title: "MCI Recognition",
                desc: "Medical Council of India recognizes these universities for practice in India",
              },
              {
                title: "International Standards",
                desc: "Universities follow international medical education standards and curriculum",
              },
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get expert guidance on choosing the right university and complete admission support.
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
