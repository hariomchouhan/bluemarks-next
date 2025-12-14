import { Star, Quote } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Rajesh Kumar",
    course: "MBBS in Georgia",
    university: "European University, Georgia",
    rating: 5,
    text: "Blue Marks made my dream of studying MBBS abroad come true. Their guidance was exceptional, and they helped me through every step of the process. I'm now studying at European University and couldn't be happier!",
    image: "👨‍⚕️",
  },
  {
    name: "Priya Sharma",
    course: "MBBS in Russia",
    university: "Kemerovo State Medical University",
    rating: 5,
    text: "The team at Blue Marks is very professional and supportive. They helped me with all documentation, visa processing, and even accommodation. The entire process was smooth and stress-free.",
    image: "👩‍⚕️",
  },
  {
    name: "Amit Patel",
    course: "MBBS in Vietnam",
    university: "Can Tho University",
    rating: 5,
    text: "I was skeptical at first, but Blue Marks proved to be trustworthy and reliable. They provided transparent information about fees and helped me choose the right university. Highly recommended!",
    image: "👨‍🎓",
  },
  {
    name: "Sneha Reddy",
    course: "MBBS in Kazakhstan",
    university: "Kazakh National Medical University",
    rating: 5,
    text: "Excellent service from start to finish! The counselors were patient and answered all my questions. They even helped with post-arrival support. Thank you, Blue Marks!",
    image: "👩‍🎓",
  },
  {
    name: "Vikram Singh",
    course: "MBBS in Belarus",
    university: "Belarusian State Medical University",
    rating: 5,
    text: "Blue Marks helped me get admission to one of the best medical universities in Belarus. Their expertise and support made all the difference. I'm grateful for their help!",
    image: "👨‍⚕️",
  },
  {
    name: "Ananya Das",
    course: "MBBS in Armenia",
    university: "Yerevan State Medical University",
    rating: 5,
    text: "The entire team is very knowledgeable and supportive. They guided me through every step, from choosing the right country to getting my visa. The process was seamless!",
    image: "👩‍⚕️",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Student Testimonials</h1>
            <p className="text-xl text-blue-100">
              Hear from students who achieved their dreams with Blue Marks
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 relative"
              >
                <Quote className="w-12 h-12 text-blue-200 absolute top-4 right-4" />
                <div className="mb-4">
                  <div className="text-4xl mb-3">{testimonial.image}</div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.course}</p>
                  <p className="text-sm text-blue-600">{testimonial.university}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Our Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "5000+", label: "Students Placed" },
              { number: "98%", label: "Success Rate" },
              { number: "50+", label: "Partner Universities" },
              { number: "8+", label: "Countries" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Success Stories</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Start your journey towards a successful medical career abroad with Blue Marks.
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

