import Link from "next/link";
import { ArrowRight, CheckCircle, Globe, GraduationCap, Users, Award, BookOpen, Target, FileText, Plane, Home as HomeIcon, DollarSign, Phone, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-600 to-indigo-900 animate-gradient">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="animate-fade-in-up">
              <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <span className="text-sm font-semibold text-blue-100">🌟 Trusted by 5000+ Students</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                  BlueMarks
                </span>{" "}
                Education
            </h1>
              <p className="text-2xl md:text-3xl mb-6 text-blue-100 font-semibold">
                Your Trusted Partner for Pursuing MBBS Abroad
              </p>
              <p className="text-lg md:text-xl mb-8 text-blue-50/90 max-w-3xl mx-auto leading-relaxed">
                BlueMarks Education is your trusted partner for pursuing MBBS abroad, helping aspiring doctors secure admission to top, globally recognized medical universities. We believe that international education is more than just studying in another country—it's about gaining global exposure, experiencing diverse cultures, and learning through world-class academic systems.
              </p>
              <p className="text-base md:text-lg mb-10 text-blue-50/80 max-w-3xl mx-auto leading-relaxed">
                From choosing the right country and university to admissions, documentation, travel, and settlement, we guide you at every step of your MBBS abroad journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                  className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-110 shadow-2xl hover:shadow-blue-500/50 relative overflow-hidden"
              >
                  <span className="relative z-10 flex items-center gap-2">
                Get Free Counselling
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </Link>
              <Link
                href="/countries"
                  className="group px-8 py-4 bg-transparent border-2 border-white/50 text-white rounded-xl font-bold text-lg hover:bg-white/20 hover:border-white transition-all transform hover:scale-110 backdrop-blur-sm"
              >
                  <span className="flex items-center gap-2">
                Explore Countries
                    <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </span>
              </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
              <span className="text-sm font-semibold text-blue-600">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-gradient">
              Why Choose BlueMarks Education?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choosing the right country and university for MBBS abroad can be confusing without expert guidance. At BlueMarks Education, our experienced counsellors simplify the entire process and help you make informed decisions for a successful medical career.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: CheckCircle, text: "Expert counselling", color: "from-emerald-400 to-teal-500" },
              { icon: CheckCircle, text: "Transparent process", color: "from-blue-400 to-cyan-500" },
              { icon: CheckCircle, text: "Student-first approach", color: "from-purple-400 to-pink-500" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.color} mb-4 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.text}
                    </h3>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Book Your University Section */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/30 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                <span className="text-sm font-semibold text-blue-600">University Selection</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-gradient">
                Book Your University
              </h2>
              <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
                We are associated with multiple NMC-approved medical universities across leading MBBS destinations.
              </p>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Our team shortlists universities based on:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { 
                  title: "Global recognition & reputation", 
                  gradient: "from-blue-500 to-cyan-500",
                  icon: Award,
                  description: "World-renowned medical institutions"
                },
                { 
                  title: "Experienced faculty & modern infrastructure", 
                  gradient: "from-purple-500 to-pink-500",
                  icon: GraduationCap,
                  description: "State-of-the-art facilities"
                },
                { 
                  title: "Affordable fee structures", 
                  gradient: "from-pink-500 to-red-500",
                  icon: DollarSign,
                  description: "Budget-friendly education"
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border border-gray-100 overflow-hidden"
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}></div>
                    <div className="relative z-10">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} mb-4 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{item.description}</p>
                    </div>
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                  </div>
                );
              })}
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-8 font-medium">
                We ensure you get admission to the <span className="text-blue-600 font-bold">right university</span>, not just any university.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-110 relative overflow-hidden"
              >
                <span className="relative z-10">Book Your University</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Career Planning */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-xl">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                <span className="text-sm font-semibold text-blue-600">Career Guidance</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-gradient">
                Personalized Career Planning
              </h2>
              <p className="text-2xl text-gray-700 mb-4 font-semibold">
                Your journey doesn't end with MBBS.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                After completing your course, our mentors guide you for:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { 
                  title: "Post-Graduation (MD/MS) options",
                  gradient: "from-blue-500 to-cyan-500",
                  icon: GraduationCap,
                  bg: "from-blue-50 to-cyan-50"
                },
                { 
                  title: "FMGE / NEXT preparation roadmap",
                  gradient: "from-purple-500 to-pink-500",
                  icon: Target,
                  bg: "from-purple-50 to-pink-50"
                },
                { 
                  title: "Global career opportunities",
                  gradient: "from-pink-500 to-red-500",
                  icon: Globe,
                  bg: "from-pink-50 to-red-50"
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
              <div
                key={index}
                    className="group relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border border-gray-100 overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className="relative z-10">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                  </div>
                );
              })}
              </div>
            <p className="text-xl text-gray-700 text-center font-semibold">
              We help you plan your future with <span className="text-blue-600">clarity</span> and <span className="text-purple-600">confidence</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Customized Student Solutions */}
      <section className="py-24 bg-gradient-to-br from-white via-cyan-50/20 to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-indigo-50/30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-xl">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                <span className="text-sm font-semibold text-blue-600">Personalized Service</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-gradient">
                Customized Student Solutions
            </h2>
              <p className="text-2xl text-gray-700 mb-4 font-semibold">
                Every student is unique, and so is our guidance.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
                Our counsellors evaluate your academic background, eligibility, and budget to recommend the most suitable universities.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
                From admission to arrival, we stay with you throughout the journey.
            </p>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { text: "Academic Background Analysis", color: "from-blue-500 to-cyan-500" },
                { text: "Eligibility Assessment", color: "from-purple-500 to-pink-500" },
                { text: "Budget Planning", color: "from-pink-500 to-red-500" },
              ].map((item, index) => (
              <div
                key={index}
                  className="group relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2"
              >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color} group-hover:scale-150 transition-transform`}></div>
                    <span className="text-gray-700 font-semibold group-hover:text-blue-600 transition-colors">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Documentation Support */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-xl">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                <span className="text-sm font-semibold text-blue-600">Complete Support</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-gradient">
                Documentation Support
              </h2>
              <p className="text-xl text-gray-600 mb-4">
                Studying MBBS abroad involves multiple documents and approvals.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                BlueMarks Education provides complete assistance with:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { 
                  title: "Admission documents",
                  gradient: "from-blue-500 to-cyan-500",
                  icon: FileText,
                },
                { 
                  title: "Visa application & processing",
                  gradient: "from-purple-500 to-pink-500",
                  icon: CheckCircle,
                },
                { 
                  title: "University & country-specific requirements",
                  gradient: "from-pink-500 to-red-500",
                  icon: Award,
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border border-gray-100 overflow-hidden"
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
                    <div className="relative z-10">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                  </div>
                );
              })}
            </div>
            <p className="text-xl text-gray-700 text-center font-semibold">
              We ensure a <span className="text-blue-600">smooth</span> and <span className="text-purple-600">stress-free</span> documentation process.
            </p>
          </div>
        </div>
      </section>

      {/* Travel & Accommodation Assistance */}
      <section className="py-24 bg-gradient-to-br from-white via-purple-50/25 to-pink-50/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/25 via-transparent to-purple-50/30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-xl">
                <Plane className="w-10 h-10 text-white" />
              </div>
              <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                <span className="text-sm font-semibold text-blue-600">Travel Support</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-gradient">
                Travel & Accommodation Assistance
              </h2>
              <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
                We understand parents' and students' concerns regarding safety and stay abroad.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our team assists with:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { 
                  title: "Flight ticket booking",
                  gradient: "from-blue-500 to-cyan-500",
                  icon: Plane,
                },
                { 
                  title: "Safe and comfortable accommodation near the university",
                  gradient: "from-purple-500 to-pink-500",
                  icon: HomeIcon,
                },
                { 
                  title: "On-arrival support",
                  gradient: "from-pink-500 to-red-500",
                  icon: CheckCircle,
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border border-gray-100 overflow-hidden"
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
                    <div className="relative z-10">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                  </div>
                );
              })}
            </div>
            <p className="text-xl text-gray-700 text-center font-semibold">
              So you can focus on your studies <span className="text-blue-600">without worries</span>.
            </p>
          </div>
        </div>
      </section>

      {/* We Are BlueMarks Education */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-sm font-semibold text-blue-100">About Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
              We Are{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                BlueMarks Education
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-3xl mx-auto leading-relaxed">
              BlueMarks Education is a trusted overseas education consultancy known for transparent services and professional counselling.
            </p>
            <p className="text-lg md:text-xl text-blue-50/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              We are official partners with top-rated medical universities worldwide and are committed to shaping successful medical careers.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-110 shadow-2xl hover:shadow-blue-500/50"
            >
              <Phone className="w-5 h-5 group-hover:scale-125 transition-transform" />
              <span>Start your MBBS abroad journey with confidence—connect with BlueMarks Education today.</span>
            </Link>
          </div>
        </div>
      </section>

      {/* How BlueMarks Education Helps You */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-slate-50/50 to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gradient">
              How BlueMarks Education Helps You
            </h2>
            <p className="text-xl text-gray-600 mb-8 text-center">
              BlueMarks Education creates the right opportunities for students to pursue MBBS abroad with a smooth, transparent, and hassle-free process. From counselling to documentation and admissions, our expert team ensures complete support at every stage of your study abroad journey.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Study Abroad with BlueMarks Education */}
      <section className="py-24 bg-gradient-to-br from-white via-indigo-50/20 to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/25 via-transparent to-cyan-50/30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
              <span className="text-sm font-semibold text-blue-600">Benefits</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-gradient">
              Why Choose Study Abroad with BlueMarks Education?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              One of India's trusted education consultants for MBBS abroad, BlueMarks Education helps students turn global medical education dreams into reality with confidence and clarity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Easy & Hassle-Free Admission",
                description: "The admission process for MBBS abroad is simple and well-structured. Our counsellors guide you through each step, ensuring a smooth application process without unnecessary complications.",
                icon: CheckCircle,
                gradient: "from-emerald-400 to-teal-500",
              },
              {
                title: "World-Class Education",
                description: "International universities offer globally recognized medical education with modern infrastructure, advanced teaching methods, and experienced faculty, helping students receive quality education at top-ranked institutions.",
                icon: GraduationCap,
                gradient: "from-blue-400 to-cyan-500",
              },
              {
                title: "Exposure to Global Culture",
                description: "Studying abroad allows Indian students to interact with peers from different countries, experience multicultural environments, and develop a global mindset—an essential advantage for future medical professionals.",
                icon: Globe,
                gradient: "from-purple-400 to-pink-500",
              },
              {
                title: "Worldwide Recognition",
                description: "Medical degrees awarded by reputed international universities are recognized globally, opening doors to career opportunities across countries after completing MBBS and further studies.",
                icon: Award,
                gradient: "from-pink-400 to-rose-500",
              },
              {
                title: "No Entrance Exam & No Capitation",
                description: "Most MBBS abroad programs do not require entrance exams or donations. Admissions are merit-based, making quality medical education accessible and affordable for deserving students.",
                icon: BookOpen,
                gradient: "from-indigo-400 to-purple-500",
              },
              {
                title: "Affordable Study & Living Costs",
                description: "Students can choose from top medical universities with lower tuition fees and affordable living expenses, making MBBS abroad a cost-effective alternative to studying in India.",
                icon: DollarSign,
                gradient: "from-cyan-400 to-blue-500",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border border-gray-100 overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
                  <div className="relative z-10">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Popular Countries */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-sm font-semibold text-blue-100">Destinations</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              MBBS COUNTRIES WE OFFER SUPPORT
            </h2>
            <p className="text-2xl text-blue-100 max-w-2xl mx-auto mb-4 font-semibold">
              Most Popular Countries
            </p>
            <p className="text-lg text-blue-50/90 max-w-2xl mx-auto">
              Get MBBS admission with top medical universities with us
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-12">
            {[
              { name: "Georgia", flag: "🇬🇪" },
              { name: "Russia", flag: "🇷🇺" },
              { name: "Vietnam", flag: "🇻🇳" },
              { name: "Kazakhstan", flag: "🇰🇿" },
              { name: "Uzbekistan", flag: "🇺🇿" },
              { name: "Armenia", flag: "🇦🇲" },
              { name: "Moldova", flag: "🇲🇩" },
              { name: "Bosnia", flag: "🇧🇦" },
              { name: "Belarus", flag: "🇧🇾" },
            ].map((country, index) => (
              <Link
                key={index}
                href={`/countries/${country.name.toLowerCase()}`}
                className="group relative bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">{country.flag}</div>
                  <h3 className="font-bold text-lg group-hover:text-yellow-300 transition-colors">
                    MBBS in {country.name}
                  </h3>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/countries"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-110 shadow-2xl hover:shadow-blue-500/50"
            >
              <span>View All Countries</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-shimmer"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-sm font-semibold text-blue-200">Start Your Journey</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                Medical Journey
              </span>
              ?
          </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get free counselling and expert guidance from our experienced team
          </p>
          <Link
            href="/contact"
              className="group inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl font-bold text-xl hover:shadow-2xl transition-all transform hover:scale-110 relative overflow-hidden"
            >
              <span className="relative z-10">Get Free Counselling Now</span>
              <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

