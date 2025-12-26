"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Edit, Trash2, Globe } from "lucide-react";
import RichTextEditor from "@/components/RichTextEditor";

interface Country {
  _id: string;
  name: string;
  slug: string;
  flag: string;
  description: string;
}

export default function AdminCountriesPage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingCountry, setEditingCountry] = useState<Country | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    flag: "",
    description: "",
    fullDescription: "",
    fees: "",
    duration: "",
    eligibility: "",
    advantages: "",
    process: "",
    content: "",
  });

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const res = await fetch(`/api/${process.env.NEXT_PUBLIC_ADMIN_SECRET}/countries`);
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingCountry
      ? `/api/${process.env.NEXT_PUBLIC_ADMIN_SECRET}/countries/${editingCountry._id}`
      : `/api/${process.env.NEXT_PUBLIC_ADMIN_SECRET}/countries`;
    const method = editingCountry ? "PUT" : "POST";

    const advantagesArray = formData.advantages.split("\n").filter((a) => a.trim());
    const processArray = formData.process.split("\n").filter((p) => p.trim());

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          advantages: advantagesArray,
          process: processArray,
        }),
      });

      if (res.ok) {
        setShowForm(false);
        setEditingCountry(null);
        setFormData({
          name: "",
          slug: "",
          flag: "",
          description: "",
          fullDescription: "",
          fees: "",
          duration: "",
          eligibility: "",
          advantages: "",
          process: "",
          content: "",
        });
        fetchCountries();
      }
    } catch (error) {
      console.error("Error saving country:", error);
      alert("Error saving country. Please try again.");
    }
  };

  const handleEdit = (country: Country) => {
    setEditingCountry(country);
    fetch(`/api/${process.env.NEXT_PUBLIC_ADMIN_SECRET}/countries/${country._id}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          name: data.name,
          slug: data.slug,
          flag: data.flag,
          description: data.description,
          fullDescription: data.fullDescription || "",
          fees: data.fees,
          duration: data.duration,
          eligibility: data.eligibility,
          advantages: data.advantages?.join("\n") || "",
          process: data.process?.join("\n") || "",
          content: data.content || "",
        });
        setShowForm(true);
      });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this country?")) return;

    try {
      const res = await fetch(`/api/${process.env.NEXT_PUBLIC_ADMIN_SECRET}/countries/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchCountries();
      }
    } catch (error) {
      console.error("Error deleting country:", error);
      alert("Error deleting country. Please try again.");
    }
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Link
                href={`/${process.env.NEXT_PUBLIC_ADMIN_SECRET}`}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Dashboard
              </Link>
              <h1 className="text-4xl font-bold text-gradient">Manage Countries</h1>
            </div>
            <button
              onClick={() => {
                setShowForm(true);
                setEditingCountry(null);
                setFormData({
                  name: "",
                  slug: "",
                  flag: "",
                  description: "",
                  fullDescription: "",
                  fees: "",
                  duration: "",
                  eligibility: "",
                  advantages: "",
                  process: "",
                  content: "",
                });
              }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              <Plus className="w-5 h-5" />
              Add Country
            </button>
          </div>

          {showForm && (
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">
                {editingCountry ? "Edit Country" : "Add New Country"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          name: e.target.value,
                          slug: generateSlug(e.target.value),
                        });
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Slug *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.slug}
                      onChange={(e) =>
                        setFormData({ ...formData, slug: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Flag Emoji *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.flag}
                      onChange={(e) =>
                        setFormData({ ...formData, flag: e.target.value })
                      }
                      placeholder="🇬🇪"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fees *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fees}
                      onChange={(e) =>
                        setFormData({ ...formData, fees: e.target.value })
                      }
                      placeholder="$3,500 - $7,000 per year"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duration *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.duration}
                      onChange={(e) =>
                        setFormData({ ...formData, duration: e.target.value })
                      }
                      placeholder="6 years"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Eligibility *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.eligibility}
                      onChange={(e) =>
                        setFormData({ ...formData, eligibility: e.target.value })
                      }
                      placeholder="50% in 12th (PCB), NEET qualified"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Short Description *
                  </label>
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Description
                  </label>
                  <textarea
                    value={formData.fullDescription}
                    onChange={(e) =>
                      setFormData({ ...formData, fullDescription: e.target.value })
                    }
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Advantages (one per line)
                  </label>
                  <textarea
                    value={formData.advantages}
                    onChange={(e) =>
                      setFormData({ ...formData, advantages: e.target.value })
                    }
                    rows={6}
                    placeholder="Affordable tuition fees&#10;English-medium instruction&#10;WHO and MCI recognized"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Admission Process (one step per line)
                  </label>
                  <textarea
                    value={formData.process}
                    onChange={(e) =>
                      setFormData({ ...formData, process: e.target.value })
                    }
                    rows={6}
                    placeholder="Submit application with required documents&#10;Receive admission letter&#10;Apply for visa"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Page Content (Rich Text) *
                  </label>
                  <p className="text-sm text-gray-500 mb-2">
                    Add detailed content for the country page. This will be displayed on the public country page.
                  </p>
                  <RichTextEditor
                    value={formData.content}
                    onChange={(value) =>
                      setFormData({ ...formData, content: value })
                    }
                    placeholder="Enter detailed content about studying MBBS in this country..."
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    {editingCountry ? "Update Country" : "Add Country"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setEditingCountry(null);
                    }}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold">All Countries</h2>
            </div>
            <div className="divide-y">
              {countries.map((country) => (
                <div
                  key={country._id}
                  className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{country.flag}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{country.name}</h3>
                      <p className="text-gray-600 text-sm">{country.slug}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(country)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(country._id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

