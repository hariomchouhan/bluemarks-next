"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMBBSOpen, setIsMBBSOpen] = useState(false);
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    // Fetch countries for MBBS menu
    fetch("/api/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Error fetching countries:", err));
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">BM</span>
            </div>
            <span className="text-2xl font-bold text-gradient">Blue Marks</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* MBBS Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsMBBSOpen(true)}
              onMouseLeave={() => setIsMBBSOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                MBBS
                <ChevronDown className="w-4 h-4" />
              </button>
              {isMBBSOpen && countries.length > 0 && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 max-h-[80vh] overflow-y-auto">
                  {countries.map((country) => (
                    <div key={country.id} className="px-4 py-2">
                      <Link
                        href={`/countries/${country.slug}`}
                        className="block font-semibold text-gray-900 hover:text-blue-600 mb-1"
                      >
                        MBBS in {country.name}
                      </Link>
                      {country.universities && country.universities.length > 0 && (
                        <div className="ml-4 mt-1 space-y-1">
                          {country.universities.slice(0, 5).map((university: any) => (
                            <Link
                              key={university.id}
                              href={`/universities/${university.slug}`}
                              className="block text-sm text-gray-600 hover:text-blue-600"
                            >
                              {university.name}
                            </Link>
                          ))}
                          {country.universities.length > 5 && (
                            <Link
                              href={`/countries/${country.slug}`}
                              className="block text-sm text-blue-600 font-medium mt-2"
                            >
                              View All ({country.universities.length})
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+918859008499"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">+91-8859-008-499</span>
            </a>
            {/* <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Call Now
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile MBBS Menu */}
              <div className="border-t pt-4 mt-2">
                <div className="font-semibold text-gray-900 mb-2">MBBS</div>
                <div className="ml-4 space-y-2">
                  {countries.map((country) => (
                    <div key={country.id}>
                      <Link
                        href={`/countries/${country.slug}`}
                        className="block text-gray-700 hover:text-blue-600 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        MBBS in {country.name}
                      </Link>
                      {country.universities && country.universities.length > 0 && (
                        <div className="ml-4 mt-1 space-y-1">
                          {country.universities.slice(0, 3).map((university: any) => (
                            <Link
                              key={university.id}
                              href={`/universities/${university.slug}`}
                              className="block text-sm text-gray-600 hover:text-blue-600"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {university.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t flex flex-col gap-3">
                <a
                  href="tel:+918859008499"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91-8859-008-499</span>
                </a>
                {/* <Link
                  href="/contact"
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Call Now
                </Link> */}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
