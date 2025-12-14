"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, GraduationCap, DollarSign, Clock, CheckCircle, Globe, Users, Award } from "lucide-react";

export default function UniversityPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [university, setUniversity] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchUniversity();
    }
  }, [slug]);

  const fetchUniversity = async () => {
    try {
      const res = await fetch(`/api/universities?slug=${slug}`);
      if (res.status === 404) {
        setNotFound(true);
        return;
      }
      const data = await res.json();
      setUniversity(data);
    } catch (error) {
      console.error("Error fetching university:", error);
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
          <p className="mt-4 text-gray-600">Loading university details...</p>
        </div>
      </div>
    );
  }

  if (notFound || !university) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">University Not Found</h1>
          <p className="text-xl text-blue-100 mb-8">The university you're looking for doesn't exist.</p>
          <Link
            href="/universities"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Universities
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
            href={`/countries/${university.countrySlug}`}
            className="inline-flex items-center gap-2 mb-6 text-blue-100 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to {university.country}</span>
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{university.name}</h1>
            <p className="text-xl text-blue-100">{university.description}</p>
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
              <p className="text-gray-600">{university.fees}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <Clock className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Duration</h3>
              <p className="text-gray-600">{university.duration}</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-xl">
              <GraduationCap className="w-8 h-8 text-pink-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Eligibility</h3>
              <p className="text-gray-600 text-sm">{university.eligibility}</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl">
              <Award className="w-8 h-8 text-cyan-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Recognition</h3>
              <p className="text-gray-600 text-sm">{university.recognition}</p>
            </div>
          </div>

          {/* Additional Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Language of Instruction</h3>
              <p className="text-gray-600">{university.language}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Intake</h3>
              <p className="text-gray-600">{university.intake}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Application Deadline</h3>
              <p className="text-gray-600">{university.applicationDeadline}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Country</h3>
              <p className="text-gray-600">{university.country}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rich Text Content */}
      {university.content && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
              <div
                className="rich-content"
                dangerouslySetInnerHTML={{ __html: university.content }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Why Choose This University */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">
            Why Choose {university.name}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "World-class infrastructure",
              "Experienced faculty",
              "Modern laboratories",
              "Clinical training opportunities",
              "International recognition",
              "Affordable fees",
            ].map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-6 rounded-xl shadow-md"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in {university.name}?</h2>
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

