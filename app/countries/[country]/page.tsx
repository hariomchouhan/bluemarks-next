"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle, GraduationCap, DollarSign, Clock, Globe, Users } from "lucide-react";

export default function CountryPage() {
  const params = useParams();
  const countrySlug = params.country as string;
  const [country, setCountry] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (countrySlug) {
      fetchCountry();
    }
  }, [countrySlug]);

  const fetchCountry = async () => {
    try {
      const res = await fetch(`/api/countries/${countrySlug}`);
      if (res.status === 404) {
        setNotFound(true);
        return;
      }
      const data = await res.json();
      setCountry(data);
    } catch (error) {
      console.error("Error fetching country:", error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading country details...</p>
        </div>
      </div>
    );
  }

  if (notFound || !country) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">Country Not Found</h1>
          <p className="text-xl text-blue-100 mb-8">The country you're looking for doesn't exist.</p>
          <Link
            href="/countries"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Countries
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/countries"
            className="inline-flex items-center gap-2 mb-6 text-blue-100 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Countries</span>
          </Link>
          <div className="max-w-3xl">
            <div className="text-6xl mb-4">{country.flag}</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">MBBS in {country.name}</h1>
            <p className="text-xl text-blue-100">{country.fullDescription || country.description}</p>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
              <DollarSign className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Tuition Fees</h3>
              <p className="text-gray-600">{country.fees}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <Clock className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Duration</h3>
              <p className="text-gray-600">{country.duration}</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-xl">
              <GraduationCap className="w-8 h-8 text-pink-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Eligibility</h3>
              <p className="text-gray-600 text-sm">{country.eligibility}</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl">
              <Users className="w-8 h-8 text-cyan-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Universities</h3>
              <p className="text-gray-600">{country.universities?.length || 0}+ Options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Universities */}
      {country.universities && country.universities.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Top Universities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {country.universities.map((university: any) => (
                <Link
                  key={university.id}
                  href={`/universities/${university.slug}`}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">{university.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Rich Text Content */}
      {country.content && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full mx-auto">
              <div
                className="rich-content"
                dangerouslySetInnerHTML={{ __html: country.content }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Advantages */}
      {country.advantages && country.advantages.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Why Choose {country.name}?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {country.advantages.map((advantage: string, index: number) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white p-6 rounded-xl shadow-md"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Admission Process */}
      {country.process && country.process.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Admission Process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {country.process.map((step: string, index: number) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                      <p className="text-gray-700 text-lg">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in Studying in {country.name}?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get expert guidance and complete support for your admission process.
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
