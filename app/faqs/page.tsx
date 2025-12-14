"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What is Blue Marks?",
        a: "Blue Marks is a leading study-abroad consultancy specializing in helping Indian students pursue MBBS and other medical programs abroad. We provide end-to-end support from counseling to post-arrival assistance.",
      },
      {
        q: "Which countries do you help with?",
        a: "We assist students with admission to medical universities in Georgia, Russia, Vietnam, Kazakhstan, Belarus, Armenia, Uzbekistan, Philippines, and more.",
      },
      {
        q: "Is the degree recognized in India?",
        a: "Yes, all our partner universities are recognized by the Medical Council of India (MCI) and World Health Organization (WHO), allowing you to practice medicine in India after completing the necessary licensing exams.",
      },
    ],
  },
  {
    category: "Eligibility & Admission",
    questions: [
      {
        q: "What are the eligibility criteria for MBBS abroad?",
        a: "Generally, you need to have completed 12th standard with Physics, Chemistry, and Biology (PCB) with at least 50% marks. You also need to qualify NEET (National Eligibility cum Entrance Test). Some countries may have additional requirements.",
      },
      {
        q: "Do I need to qualify NEET to study MBBS abroad?",
        a: "Yes, NEET qualification is mandatory for Indian students who want to study MBBS abroad and return to practice in India. It's required for the licensing process.",
      },
      {
        q: "What is the admission process?",
        a: "The process typically involves: 1) Profile assessment and counseling, 2) University selection, 3) Document preparation, 4) Application submission, 5) Admission letter, 6) Visa application, 7) Travel arrangements. We guide you through each step.",
      },
      {
        q: "When should I apply?",
        a: "Most universities have application deadlines between March and July for the academic year starting in September. It's best to start the process 6-8 months in advance to ensure smooth processing.",
      },
    ],
  },
  {
    category: "Fees & Costs",
    questions: [
      {
        q: "What is the total cost of studying MBBS abroad?",
        a: "The total cost varies by country and university. Tuition fees typically range from $3,000 to $8,000 per year. Additional costs include accommodation ($200-500/month), food, travel, visa, and other expenses. We provide detailed cost breakdowns during counseling.",
      },
      {
        q: "Are there any hidden charges?",
        a: "No, we maintain complete transparency. All fees and charges are clearly communicated upfront. There are no hidden costs or surprise charges.",
      },
      {
        q: "Are scholarships available?",
        a: "Some universities offer scholarships based on academic performance. We can help you explore scholarship opportunities during the application process.",
      },
      {
        q: "Can I get an education loan?",
        a: "Yes, many Indian banks provide education loans for studying abroad. We can guide you on the loan application process and required documents.",
      },
    ],
  },
  {
    category: "Visa & Documentation",
    questions: [
      {
        q: "What documents are required?",
        a: "Common documents include: 10th and 12th mark sheets, NEET scorecard, passport, birth certificate, medical certificates, passport-size photographs, and other country-specific documents. We provide a complete checklist.",
      },
      {
        q: "How long does visa processing take?",
        a: "Visa processing time varies by country, typically ranging from 2-8 weeks. We help expedite the process and ensure all documents are in order.",
      },
      {
        q: "Do you help with document attestation?",
        a: "Yes, we provide complete assistance with document attestation, including getting documents attested from the Ministry of External Affairs and respective embassies.",
      },
    ],
  },
  {
    category: "Life Abroad",
    questions: [
      {
        q: "Is the medium of instruction English?",
        a: "Yes, most of our partner universities offer English-medium MBBS programs, making it easier for Indian students to adapt.",
      },
      {
        q: "Will you help with accommodation?",
        a: "Absolutely! We assist in finding safe and affordable accommodation options, including university hostels, private apartments, and homestays based on your preference and budget.",
      },
      {
        q: "What about food and living expenses?",
        a: "Living expenses vary by country. We provide detailed information about average monthly costs for food, accommodation, transportation, and other expenses during counseling.",
      },
      {
        q: "Is it safe to study in these countries?",
        a: "Yes, all the countries we work with are safe for international students. We only partner with universities in countries with good safety records and student-friendly environments.",
      },
    ],
  },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let questionIndex = 0;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-blue-100">
              Find answers to common questions about studying MBBS abroad
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gradient">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq) => {
                    const currentIndex = questionIndex++;
                    const isOpen = openIndex === currentIndex;
                    return (
                      <div
                        key={currentIndex}
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                      >
                        <button
                          onClick={() => toggleQuestion(currentIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 py-4 bg-gray-50 border-t">
                            <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gradient">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Our expert counselors are here to help. Get in touch with us for personalized guidance.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

