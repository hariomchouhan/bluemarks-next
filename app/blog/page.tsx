import Link from "next/link";
import { Calendar, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    title: "Complete Guide to Studying MBBS in Georgia",
    excerpt: "Everything you need to know about pursuing MBBS in Georgia, including eligibility, fees, universities, and admission process.",
    date: "March 15, 2024",
    author: "Blue Marks Team",
    category: "Country Guide",
    slug: "mbbs-in-georgia-guide",
  },
  {
    title: "NEET Requirements for MBBS Abroad: Everything You Need to Know",
    excerpt: "Understanding NEET requirements, eligibility criteria, and how it affects your MBBS admission abroad.",
    date: "March 10, 2024",
    author: "Blue Marks Team",
    category: "Admission",
    slug: "neet-requirements-mbbs-abroad",
  },
  {
    title: "Top 10 Medical Universities in Russia for Indian Students",
    excerpt: "Explore the best medical universities in Russia, their fees, recognition, and why they're popular among Indian students.",
    date: "March 5, 2024",
    author: "Blue Marks Team",
    category: "Universities",
    slug: "top-medical-universities-russia",
  },
  {
    title: "Visa Process for Studying MBBS Abroad: Step-by-Step Guide",
    excerpt: "A comprehensive guide to visa application process, required documents, and tips for successful visa approval.",
    date: "February 28, 2024",
    author: "Blue Marks Team",
    category: "Visa",
    slug: "visa-process-mbbs-abroad",
  },
  {
    title: "Cost of Living Abroad: Budget Planning for Medical Students",
    excerpt: "Understanding the total cost of studying MBBS abroad, including tuition, accommodation, food, and other expenses.",
    date: "February 20, 2024",
    author: "Blue Marks Team",
    category: "Finance",
    slug: "cost-of-living-abroad",
  },
  {
    title: "MBBS in Vietnam: Why It's Becoming Popular Among Indian Students",
    excerpt: "Discover why Vietnam is emerging as a top destination for MBBS education, with affordable fees and quality programs.",
    date: "February 15, 2024",
    author: "Blue Marks Team",
    category: "Country Guide",
    slug: "mbbs-in-vietnam",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog & Resources</h1>
            <p className="text-xl text-blue-100">
              Expert insights, guides, and tips for studying MBBS abroad
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {["Country Guide", "Admission", "Universities", "Visa", "Finance", "Tips", "News", "Success Stories"].map(
              (category, index) => (
                <Link
                  key={index}
                  href="#"
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl text-center hover:shadow-lg transition-all"
                >
                  <span className="font-semibold text-gray-900">{category}</span>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Personalized Guidance?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Our expert counselors can provide personalized advice based on your specific situation and goals.
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

