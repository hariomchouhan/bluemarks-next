import { CheckCircle, GraduationCap, FileText, Plane, Home, DollarSign, Phone, Users } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "MBBS Abroad Consultancy",
      description: "Expert guidance for choosing the right medical university and program abroad. We help you understand admission requirements, eligibility criteria, and make informed decisions.",
      features: [
        "University selection based on your profile",
        "Admission process guidance",
        "Eligibility assessment",
        "Course structure explanation",
      ],
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Admission Assistance",
      description: "Complete support for the admission process, from application submission to acceptance letter. We handle all the paperwork and ensure timely submission.",
      features: [
        "Application form filling",
        "Document verification",
        "Application tracking",
        "Acceptance letter processing",
      ],
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Career Counselling",
      description: "Personalized career counseling to help you choose the right path. Our experienced counselors understand your aspirations and guide you accordingly.",
      features: [
        "One-on-one counseling sessions",
        "Career path assessment",
        "Country and university recommendations",
        "Future prospects discussion",
      ],
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Visa Guidance",
      description: "Comprehensive visa assistance for your study destination. We help you understand visa requirements, prepare documents, and guide you through the application process.",
      features: [
        "Visa requirement explanation",
        "Document preparation",
        "Application form assistance",
        "Interview preparation",
      ],
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Document Preparation",
      description: "Complete assistance with all required documents. We ensure all your documents are properly prepared, attested, and ready for submission.",
      features: [
        "Document checklist",
        "Attestation assistance",
        "Translation services",
        "Document verification",
      ],
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: "Accommodation Help",
      description: "Assistance in finding safe and comfortable accommodation near your university. We help you find hostels, apartments, or homestays that suit your budget.",
      features: [
        "Accommodation search",
        "Budget-friendly options",
        "Safety considerations",
        "Booking assistance",
      ],
    },
    {
      icon: <Plane className="w-12 h-12" />,
      title: "Flight & Travel Support",
      description: "Help with flight bookings and travel arrangements. We ensure you have a smooth journey to your study destination.",
      features: [
        "Flight booking assistance",
        "Travel itinerary planning",
        "Airport pickup arrangements",
        "Travel insurance guidance",
      ],
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Financial Guidance",
      description: "Expert advice on managing finances for your education abroad. We help you understand costs, scholarships, and financial planning.",
      features: [
        "Cost breakdown",
        "Scholarship information",
        "Education loan assistance",
        "Financial planning",
      ],
    },
    {
      icon: <Phone className="w-12 h-12" />,
      title: "Post-Study Support",
      description: "Continued support even after you arrive at your destination. We help you settle in and provide assistance whenever needed.",
      features: [
        "Airport pickup",
        "Orientation support",
        "Local guidance",
        "24/7 helpline",
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive support for your entire study abroad journey
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Our Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { step: "01", title: "Initial Consultation", desc: "Free counseling session to understand your goals and requirements" },
                { step: "02", title: "Profile Assessment", desc: "We assess your academic profile and recommend suitable options" },
                { step: "03", title: "University Selection", desc: "Choose from our partner universities based on your preferences" },
                { step: "04", title: "Application Process", desc: "We handle all documentation and application submissions" },
                { step: "05", title: "Visa Processing", desc: "Complete visa guidance and document preparation" },
                { step: "06", title: "Pre-Departure Support", desc: "Travel arrangements, accommodation, and orientation" },
                { step: "07", title: "Post-Arrival Assistance", desc: "Continued support after you reach your destination" },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us help you achieve your dream of studying medicine abroad.
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

