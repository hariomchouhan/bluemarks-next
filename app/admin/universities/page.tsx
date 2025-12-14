"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Edit, Trash2, GraduationCap } from "lucide-react";
import RichTextEditor from "@/components/RichTextEditor";

interface Country {
  _id: string;
  name: string;
  slug: string;
}

interface University {
  _id: string;
  name: string;
  slug: string;
  country: string;
  countryName: string;
  description: string;
}

export default function AdminUniversitiesPage() {
  const [universities, setUniversities] = useState<University[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingUniversity, setEditingUniversity] = useState<University | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    country: "",
    description: "",
    fees: "",
    duration: "",
    eligibility: "",
    recognition: "",
    language: "English",
    intake: "September",
    applicationDeadline: "July",
    content: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [universitiesRes, countriesRes] = await Promise.all([
        fetch("/api/admin/universities"),
        fetch("/api/admin/countries"),
      ]);
      const universitiesData = await universitiesRes.json();
      const countriesData = await countriesRes.json();
      setUniversities(universitiesData);
      setCountries(countriesData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingUniversity
      ? `/api/admin/universities/${editingUniversity._id}`
      : "/api/admin/universities";
    const method = editingUniversity ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setShowForm(false);
        setEditingUniversity(null);
        setFormData({
          name: "",
          slug: "",
          country: "",
          description: "",
          fees: "",
          duration: "",
          eligibility: "",
          recognition: "",
          language: "English",
          intake: "September",
          applicationDeadline: "July",
          content: "",
        });
        fetchData();
      }
    } catch (error) {
      console.error("Error saving university:", error);
      alert("Error saving university. Please try again.");
    }
  };

  const handleEdit = (university: University) => {
    setEditingUniversity(university);
    fetch(`/api/admin/universities/${university._id}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          name: data.name,
          slug: data.slug,
          country: data.country?._id || data.country || "",
          description: data.description,
          fees: data.fees,
          duration: data.duration,
          eligibility: data.eligibility,
          recognition: data.recognition,
          language: data.language || "English",
          intake: data.intake || "September",
          applicationDeadline: data.applicationDeadline || "July",
          content: data.content || "",
        });
        setShowForm(true);
      });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this university?")) return;

    try {
      const res = await fetch(`/api/admin/universities/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchData();
      }
    } catch (error) {
      console.error("Error deleting university:", error);
      alert("Error deleting university. Please try again.");
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
                href="/admin"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Dashboard
              </Link>
              <h1 className="text-4xl font-bold text-gradient">Manage Universities</h1>
            </div>
            <button
              onClick={() => {
                setShowForm(true);
                setEditingUniversity(null);
                setFormData({
                  name: "",
                  slug: "",
                  country: "",
                  description: "",
                  fees: "",
                  duration: "",
                  eligibility: "",
                  recognition: "",
                  language: "English",
                  intake: "September",
                  applicationDeadline: "July",
                  content: "",
                });
              }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              <Plus className="w-5 h-5" />
              Add University
            </button>
          </div>

          {countries.length === 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
              <p className="text-yellow-800">
                <strong>Note:</strong> You need to create at least one country before adding universities.{" "}
                <Link href="/admin/countries" className="underline font-semibold">
                  Create a country first
                </Link>
              </p>
            </div>
          )}

          {showForm && (
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">
                {editingUniversity ? "Edit University" : "Add New University"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      University Name *
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
                      Country *
                    </label>
                    <select
                      required
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="">Select a country</option>
                      {countries.map((country) => (
                        <option key={country._id} value={country._id}>
                          {country.name}
                        </option>
                      ))}
                    </select>
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
                      placeholder="$4,500 - $6,500 per year"
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
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Recognition *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.recognition}
                      onChange={(e) =>
                        setFormData({ ...formData, recognition: e.target.value })
                      }
                      placeholder="WHO, MCI"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Language
                    </label>
                    <input
                      type="text"
                      value={formData.language}
                      onChange={(e) =>
                        setFormData({ ...formData, language: e.target.value })
                      }
                      placeholder="English"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Intake
                    </label>
                    <input
                      type="text"
                      value={formData.intake}
                      onChange={(e) =>
                        setFormData({ ...formData, intake: e.target.value })
                      }
                      placeholder="September"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Application Deadline
                    </label>
                    <input
                      type="text"
                      value={formData.applicationDeadline}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          applicationDeadline: e.target.value,
                        })
                      }
                      placeholder="July"
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
                    Page Content (Rich Text) *
                  </label>
                  <p className="text-sm text-gray-500 mb-2">
                    Add detailed content for the university page. This will be displayed on the public university page.
                  </p>
                  <RichTextEditor
                    value={formData.content}
                    onChange={(value) =>
                      setFormData({ ...formData, content: value })
                    }
                    placeholder="Enter detailed content about this university..."
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    {editingUniversity ? "Update University" : "Add University"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setEditingUniversity(null);
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
              <h2 className="text-2xl font-bold">All Universities</h2>
            </div>
            <div className="divide-y">
              {universities.map((university) => (
                <div
                  key={university._id}
                  className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {university.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{university.countryName}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(university)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(university._id)}
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

