import { Award, Target, Users, Globe, CheckCircle, Briefcase, DollarSign, FileText, Plane, Home, Phone, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
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
              <span className="text-sm font-semibold text-blue-100">About Us</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                BlueMarks
              </span>{" "}
              Education
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              Your trusted partner in achieving your dream of studying medicine abroad
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <div className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 group-hover:text-blue-600 transition-colors">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  Our mission is to provide end-to-end overseas education services for Indian students aspiring to study MBBS abroad. We aim to eliminate confusion, fear, and uncertainty by offering expert counselling, clear guidance, and continuous support at every stage.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We strive to collaborate with elite and reputed international universities to deliver quality education at the best possible value. By understanding each student's academic background, capabilities, and career goals, we help match them with the most suitable university and career pathway, ensuring a secure and successful future in medicine.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
            <div className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <div className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 group-hover:text-purple-600 transition-colors">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  Our vision at BlueMarks Education is to become one of India's most trusted and recognized overseas education consultancies for MBBS abroad. We aspire to empower aspiring doctors with the right guidance, global opportunities, and ethical support to build successful medical careers without limitations.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We aim to simplify international medical education by maintaining transparency, professionalism, and student-first values while partnering with globally reputed universities. Through continuous innovation, expert counselling, and personalized solutions, we envision creating a future where every deserving student can confidently pursue quality medical education abroad and contribute meaningfully to global healthcare.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-slate-50/50 to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                <span className="text-sm font-semibold text-blue-600">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-gradient">Who We Are</h2>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                BlueMarks Education is a trusted overseas education consultancy committed to helping Indian students achieve their dream of studying MBBS abroad. We believe in transparent processes, ethical practices, and professional counselling to guide students and parents with confidence.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                As official partners of several top-rated and globally recognized universities, we specialize in MBBS programs across leading destinations such as Georgia, Russia, and other international medical education hubs. Our expert team ensures that every student receives the right guidance, accurate information, and reliable support throughout their journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-gradient-to-br from-white via-indigo-50/20 to-blue-50/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
              <span className="text-sm font-semibold text-blue-600">Milestones</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-gradient">Our Achievements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Users, number: "5000+", label: "Students Placed", gradient: "from-blue-500 to-cyan-500" },
              { icon: Globe, number: "8+", label: "Countries", gradient: "from-purple-500 to-pink-500" },
              { icon: Award, number: "50+", label: "Partner Universities", gradient: "from-pink-500 to-red-500" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
              <div
                key={index}
                  className="group relative text-center p-10 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border border-gray-100 overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
                  <div className="relative z-10">
                    <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${stat.gradient} mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{stat.number}</div>
                    <div className="text-xl font-semibold text-gray-600">{stat.label}</div>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-white via-purple-50/25 to-pink-50/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/25 via-transparent to-purple-50/30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
              <span className="text-sm font-semibold text-blue-600">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-gradient">Why Choose BlueMarks Education?</h2>
            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              BlueMarks Education provides expert guidance for career counselling, university selection, and a smooth admission and visa process. Our experienced team simplifies your MBBS abroad journey and supports you from the first consultation to your successful settlement abroad.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Briefcase,
                title: "Career Planning & Guidance",
                description: "After completing your MBBS abroad, we guide you towards the right career path. Our experienced mentors help you explore post-graduation options, licensing exams, and future study opportunities, ensuring you make informed decisions for long-term success.",
                gradient: "from-emerald-400 to-teal-500",
              },
              {
                icon: GraduationCap,
                title: "Choose the Right University",
                description: "We are associated with multiple NMC-approved medical universities worldwide. Our team carefully shortlists universities with experienced faculty, strong reputations, and quality education to help students secure the best possible admission.",
                gradient: "from-blue-400 to-cyan-500",
              },
              {
                icon: DollarSign,
                title: "Financial Guidance & Support",
                description: "Studying abroad can be financially challenging for families. At BlueMarks Education, we help you plan and manage expenses—from tuition fees and living costs to travel expenses—so finances never become a barrier to your medical dreams.",
                gradient: "from-purple-400 to-pink-500",
              },
              {
                icon: FileText,
                title: "Visa & Admission Assistance",
                description: "A student visa is a crucial step in studying abroad. Our experts assist you with course selection, visa application, and complete documentation, ensuring a smooth and stress-free admission process.",
                gradient: "from-pink-400 to-rose-500",
              },
              {
                icon: Plane,
                title: "Travel & Accommodation Support",
                description: "Travel and accommodation are major concerns for students and parents. We assist with flight bookings and help arrange safe, comfortable accommodation near the university to ensure a smooth transition abroad.",
                gradient: "from-indigo-400 to-purple-500",
              },
              {
                icon: Users,
                title: "Customized Student Solutions",
                description: "Every student has a unique academic background. Our counsellors evaluate your educational records and eligibility to recommend the most suitable universities. From documentation to accommodation, we provide complete end-to-end support.",
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                <span className="text-sm font-semibold text-blue-600">Leadership</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-gradient">Our Founder</h2>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-900">Jatin Puri</h3>
                    <p className="text-xl text-blue-600 font-semibold">Founder – BlueMarks Education</p>
                  </div>
                </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Jatin Puri is the Founder of BlueMarks Education, a trusted Study Abroad & MBBS Consultancy with over 5+ years of experience in guiding Indian students toward global medical education opportunities. His journey reflects a strong blend of strategic vision, global exposure, and student-centric leadership.
              </p>
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-3 text-gray-900">Education & Global Exposure</h4>
                <p className="text-gray-700 leading-relaxed">
                  After completing his B.Tech, Jatin represented India at the ASME (American Society of Mechanical Engineers), USA, in 2009—an achievement that gave him first-hand exposure to international education systems and global academic standards. This experience played a key role in shaping his long-term vision of helping Indian students access quality education abroad.
                </p>
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-3 text-gray-900">Professional Journey</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Jatin began his professional career with HCL Technologies in 2010, where he gained valuable corporate and operational experience. However, driven by an entrepreneurial mindset and a deeper purpose, he transitioned into building education-focused ventures that could create long-term impact.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With a strong foundation in strategy, consulting, and global processes, he laid the groundwork for what later evolved into BlueMarks Education—a consultancy dedicated to MBBS abroad admissions and international education guidance.
                </p>
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-3 text-gray-900">Leadership & Expertise</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With extensive expertise in career counseling, university selection, admission processes, and student mentoring, Jatin has helped hundreds of students secure MBBS admissions in NMC/WHO-recognized universities across countries like Georgia, Russia, Armenia, Belarus, Bosnia, and other European destinations.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Under his leadership, BlueMarks Education is known for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Transparent counseling practices</li>
                  <li>Ethical admission guidance</li>
                  <li>Personalized student solutions</li>
                  <li>End-to-end support from application to arrival</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">Vision & Commitment</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Jatin strongly believes that every medical aspirant deserves the right guidance, clarity, and global opportunity—regardless of financial or academic background. His approach focuses on matching a student's capability, budget, and career goals with the right country and university.
                </p>
                <p className="text-gray-700 leading-relaxed italic">
                  "Education is not just about going abroad—it's about choosing the right path, the right institution, and the right future."
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Today, Jatin continues to lead BlueMarks Education with a mission to make MBBS abroad safe, affordable, and accessible, while building trust with students and parents across India.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-sm font-semibold text-blue-200">Get Started</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                Journey
              </span>
              ?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get in touch with our expert counselors today and take the first step towards your medical career abroad.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl font-bold text-xl hover:shadow-2xl transition-all transform hover:scale-110 relative overflow-hidden"
            >
              <span className="relative z-10">Contact Us Now</span>
              <Phone className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

