import Link from "next/link";
import { ArrowRight, CheckCircle, Globe, GraduationCap, Users, Award, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-800 via-blue-400 to-indigo-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Study MBBS Abroad
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your Gateway to World-Class Medical Education
            </p>
            <p className="text-lg md:text-xl mb-10 text-blue-50">
              Expert guidance for admission into top medical universities in Georgia, Russia, Vietnam, Kazakhstan, and more
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
              >
                Get Free Counselling
              </Link>
              <Link
                href="/countries"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all transform hover:scale-105"
              >
                Explore Countries
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Why Choose Blue Marks?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide end-to-end support for your medical education journey abroad
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12" />,
                title: "Expert Counselling",
                description: "Personalized guidance from experienced education consultants",
              },
              {
                icon: <GraduationCap className="w-12 h-12" />,
                title: "Top Universities",
                description: "Partnerships with accredited medical universities worldwide",
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Multiple Countries",
                description: "Study options in Georgia, Russia, Vietnam, Kazakhstan, and more",
              },
              {
                icon: <CheckCircle className="w-12 h-12" />,
                title: "End-to-End Support",
                description: "From admission to visa, accommodation, and post-arrival assistance",
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Proven Track Record",
                description: "Thousands of successful students placed in top medical universities",
              },
              {
                icon: <BookOpen className="w-12 h-12" />,
                title: "Documentation Help",
                description: "Complete assistance with all required documents and paperwork",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive support for your study abroad journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "MBBS Admission Assistance",
              "Career Counselling",
              "Visa Guidance",
              "Document Preparation",
              "Accommodation Help",
              "Flight & Travel Support",
              "Financial Guidance",
              "Post-Study Support",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <h3 className="font-semibold text-gray-900">{service}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Countries */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Popular Study Destinations
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Explore top countries for MBBS education
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {[
              "Georgia",
              "Russia",
              "Vietnam",
              "Kazakhstan",
              "Belarus",
              "Armenia",
              "Uzbekistan",
              "Philippines",
            ].map((country, index) => (
              <Link
                key={index}
                href={`/countries/${country.toLowerCase()}`}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105 text-center"
              >
                <h3 className="font-semibold text-lg">{country}</h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/countries"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              View All Countries
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Medical Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Get free counselling and expert guidance from our experienced team
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Get Free Counselling Now
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}

