import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BM</span>
              </div>
              <span className="text-2xl font-bold text-white">Blue Marks</span>
            </div>
            <p className="mb-4 text-gray-400">
              Your trusted partner for studying MBBS and medical programs abroad. Expert guidance for a successful education journey.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/countries" className="hover:text-blue-400 transition-colors">
                  Countries
                </Link>
              </li>
              <li>
                <Link href="/universities" className="hover:text-blue-400 transition-colors">
                  Universities
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-blue-400 transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  MBBS Admission
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Visa Guidance
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Accommodation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Career Counselling
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Delhi, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-blue-400 transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@bluemarks.com" className="hover:text-blue-400 transition-colors">
                  info@bluemarks.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Blue Marks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

