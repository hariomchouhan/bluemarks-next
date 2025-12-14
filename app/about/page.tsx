import { Award, Target, Users, Globe, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Blue Marks</h1>
            <p className="text-xl text-blue-100">
              Your trusted partner in achieving your dream of studying medicine abroad
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To empower Indian students with comprehensive guidance and support for pursuing medical education abroad, making quality healthcare education accessible and achievable.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <Globe className="w-12 h-12 text-purple-600 mb-4" />
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To become India's most trusted study-abroad consultancy, helping thousands of students realize their dreams of becoming doctors through world-class medical education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-gradient">Who We Are</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Blue Marks is a leading study-abroad consultancy specializing in medical education. We are a registered company based in Delhi, India, with years of experience helping students navigate the complex process of studying MBBS and other medical programs abroad.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our team of experienced counselors and education experts understands the challenges students face when planning to study abroad. We provide end-to-end support, from initial counseling to post-arrival assistance, ensuring a smooth and successful journey.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We have established strong partnerships with accredited medical universities across multiple countries, including Georgia, Russia, Vietnam, Kazakhstan, Belarus, Armenia, and Uzbekistan. Our commitment to excellence and student success has made us a trusted name in the study-abroad industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <Users className="w-12 h-12" />, number: "5000+", label: "Students Placed" },
              { icon: <Globe className="w-12 h-12" />, number: "8+", label: "Countries" },
              { icon: <Award className="w-12 h-12" />, number: "50+", label: "Partner Universities" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl"
              >
                <div className="text-blue-600 mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-xl text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Blue Marks?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Experienced team of education consultants",
              "Direct partnerships with accredited universities",
              "End-to-end support from admission to post-arrival",
              "Transparent fee structure with no hidden costs",
              "Personalized counseling for each student",
              "Strong track record of successful placements",
              "24/7 support for students and parents",
              "Comprehensive documentation assistance",
              "Visa guidance and processing support",
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Get in touch with our expert counselors today and take the first step towards your medical career abroad.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}

