"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    country: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        country: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-sm font-semibold text-blue-100">Get in Touch</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
              Contact{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              Get in touch with our expert counselors for free consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="group relative bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                  <span className="text-sm font-semibold text-blue-600">Free Consultation</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gradient">Get Free Consultation</h2>
              {submitted ? (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center shadow-lg">
                  <div className="inline-flex p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-4 shadow-lg">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Thank You!</h3>
                  <p className="text-green-700 text-lg">
                    We've received your message. Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-2">
                      Interested Course
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white"
                    >
                      <option value="">Select a course</option>
                      <option value="MBBS">MBBS</option>
                      <option value="MD">MD</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white"
                    >
                      <option value="">Select a country</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Russia">Russia</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="group w-full px-6 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 relative overflow-hidden"
                  >
                    <span className="relative z-10">Submit Request</span>
                    <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                </form>
              )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="group relative bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
                    <span className="text-sm font-semibold text-purple-600">Contact Information</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gradient">Get in Touch</h2>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    Our expert counselors are available to help you with all your questions about studying MBBS abroad. Reach out to us through any of the following channels.
                  </p>
                  <div className="space-y-6">
                    {[
                      {
                        icon: Phone,
                        title: "Phone",
                        content: "+91 96699 86889",
                        subtext: "Mon-Sat, 9:00 AM - 7:00 PM",
                        link: "tel:+919669986889",
                        gradient: "from-blue-500 to-cyan-500",
                      },
                      {
                        icon: Mail,
                        title: "Email",
                        content: "contact@bluemarks.in",
                        subtext: "We'll respond within 24 hours",
                        link: "mailto:contact@bluemarks.in",
                        gradient: "from-purple-500 to-pink-500",
                      },
                      {
                        icon: MapPin,
                        title: "Office Address",
                        content: "305, Veda Business Park, Bhawarkua Square, Indore, India, Madhya Pradesh",
                        subtext: "Visit us for in-person counseling",
                        link: null,
                        gradient: "from-pink-500 to-red-500",
                      },
                    ].map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                          <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform`}>
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 mb-1 text-lg">{item.title}</h3>
                            {item.link ? (
                              <a href={item.link} className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors">
                                {item.content}
                              </a>
                            ) : (
                              <p className="text-gray-700 font-medium">{item.content}</p>
                            )}
                            <p className="text-sm text-gray-500 mt-1">{item.subtext}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-10 rounded-3xl border-2 border-blue-200 shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-6 text-gray-900">Why Contact Us?</h3>
                  <ul className="space-y-4">
                    {[
                      "Free personalized counseling",
                      "Expert guidance on country selection",
                      "Complete admission support",
                      "Visa and documentation help",
                      "Post-arrival assistance",
                    ].map((point, index) => (
                      <li key={index} className="flex items-start gap-3 group/item">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mt-0.5 group-hover/item:scale-125 transition-transform">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium text-lg group-hover/item:text-blue-600 transition-colors">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

