"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMBBSOpen, setIsMBBSOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isMBBSMobileOpen, setIsMBBSMobileOpen] = useState(false);
  const [isGalleryMobileOpen, setIsGalleryMobileOpen] = useState(false);
  const [hoveredCountryId, setHoveredCountryId] = useState<string | null>(null);
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
  ];


  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative py-2"
              >
                {link.label}
              </Link>
            ))}

            {/* MBBS Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setIsMBBSOpen(true)}
              onMouseLeave={() => {
                setIsMBBSOpen(false);
                setHoveredCountryId(null);
              }}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors py-2">
                MBBS
                <ChevronDown className="w-4 h-4" />
              </button>
              {isMBBSOpen && countries.length > 0 && (
                <div className="absolute top-full left-0 mt-0 w-[600px] bg-white rounded-lg shadow-2xl border border-gray-200 py-4">
                  <div className="flex">
                    {/* Countries List */}
                    <div className="w-1/2 border-r border-gray-200 py-2">
                      <div className="px-4 py-2 font-semibold text-gray-900 text-sm uppercase tracking-wide border-b border-gray-200">
                        Countries
                      </div>
                      <div className="max-h-[500px] overflow-y-auto">
                        {countries.map((country) => (
                          <div
                            key={country.id}
                            onMouseEnter={() => setHoveredCountryId(country.id)}
                            className="px-4 py-2 hover:bg-blue-50 transition-colors cursor-pointer"
                          >
                            <Link
                              href={`/countries/${country.slug}`}
                              className="block font-semibold text-gray-900 hover:text-blue-600 text-sm"
                              onClick={() => setIsMBBSOpen(false)}
                            >
                              MBBS in {country.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Universities List (shows on country hover) */}
                    <div className="w-1/2 py-2">
                      {hoveredCountryId ? (
                        (() => {
                          const country = countries.find((c) => c.id === hoveredCountryId);
                          if (!country) return null;
                          return (
                            <>
                              <div className="px-4 py-2 font-semibold text-gray-900 text-sm uppercase tracking-wide border-b border-gray-200">
                                Universities
                              </div>
                              <div className="max-h-[500px] overflow-y-auto">
                                {country.universities && country.universities.length > 0 ? (
                                  <>
                                    {country.universities.map((university: any) => (
                                      <Link
                                        key={university.id}
                                        href={`/universities/${university.slug}`}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                        onClick={() => setIsMBBSOpen(false)}
                                      >
                                        {university.name}
                                      </Link>
                                    ))}
                                    {/* <Link
                                      href={`/countries/${country.slug}`}
                                      className="block px-4 py-3 mt-2 text-sm text-blue-600 font-semibold hover:bg-blue-50 transition-colors border-t border-gray-200"
                                      onClick={() => setIsMBBSOpen(false)}
                                    >
                                      View All Universities →
                                    </Link> */}
                                  </>
                                ) : (
                                  <div className="px-4 py-8 text-center text-gray-500 text-sm">
                                    No universities available
                                  </div>
                                )}
                              </div>
                            </>
                          );
                        })()
                      ) : (
                        <div className="px-4 py-8 text-center text-gray-400 text-sm">
                          Hover over a country to see universities
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Gallery Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsGalleryOpen(true)}
              onMouseLeave={() => setIsGalleryOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors py-2">
                Gallery
                <ChevronDown className="w-4 h-4" />
              </button>
              {isGalleryOpen && (
                <div className="absolute top-full left-0  w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                  <Link
                    href="/gallery/video"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsGalleryOpen(false)}
                  >
                    Video Gallery
                  </Link>
                  <Link
                    href="/gallery/photo"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsGalleryOpen(false)}
                  >
                    Photo Gallery
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Call Now
            </Link>
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
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              {/* Mobile MBBS Menu */}
              <div className="border-t pt-4 mt-2">
                <div className="font-semibold text-gray-900 mb-3 flex items-center justify-between">
                  <span>MBBS</span>
                  <button
                    onClick={() => setIsMBBSMobileOpen(!isMBBSMobileOpen)}
                    className="text-gray-500"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        isMBBSMobileOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {isMBBSMobileOpen && (
                  <div className="ml-4 space-y-3 mt-3">
                    {countries.map((country) => (
                      <div key={country.id} className="border-l-2 border-blue-200 pl-3">
                        <Link
                          href={`/countries/${country.slug}`}
                          className="block text-gray-700 hover:text-blue-600 font-semibold mb-1"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsMBBSMobileOpen(false);
                          }}
                        >
                          MBBS in {country.name}
                        </Link>
                        {country.universities && country.universities.length > 0 && (
                          <div className="ml-2 mt-1 space-y-1">
                            {country.universities.slice(0, 5).map((university: any) => (
                              <Link
                                key={university.id}
                                href={`/universities/${university.slug}`}
                                className="block text-sm text-gray-600 hover:text-blue-600"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setIsMBBSMobileOpen(false);
                                }}
                              >
                                {university.name}
                              </Link>
                            ))}
                            {country.universities.length > 5 && (
                              <Link
                                href={`/countries/${country.slug}`}
                                className="block text-sm text-blue-600 font-medium mt-2"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setIsMBBSMobileOpen(false);
                                }}
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

              {/* Mobile Gallery Menu */}
              <div className="border-t pt-4 mt-2">
                <div className="font-semibold text-gray-900 mb-3 flex items-center justify-between">
                  <span>Gallery</span>
                  <button
                    onClick={() => setIsGalleryMobileOpen(!isGalleryMobileOpen)}
                    className="text-gray-500"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        isGalleryMobileOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {isGalleryMobileOpen && (
                  <div className="ml-4 space-y-2 mt-3">
                    <Link
                      href="/gallery/video"
                      className="block text-gray-700 hover:text-blue-600"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsGalleryMobileOpen(false);
                      }}
                    >
                      Video Gallery
                    </Link>
                    <Link
                      href="/gallery/photo"
                      className="block text-gray-700 hover:text-blue-600"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsGalleryMobileOpen(false);
                      }}
                    >
                      Photo Gallery
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4 border-t">
                <Link
                  href="/contact"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Call Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
