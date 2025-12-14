"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Edit, Trash2, Image, Video } from "lucide-react";

interface GalleryItem {
  _id: string;
  title: string;
  type: "photo" | "video";
  url: string;
  thumbnail?: string;
  category: string;
  country: string;
  youtubeId?: string;
}

export default function AdminGalleryPage() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    type: "photo" as "photo" | "video",
    url: "",
    thumbnail: "",
    category: "",
    country: "",
    youtubeUrl: "",
  });

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await fetch("/api/admin/gallery");
      const data = await res.json();
      setGalleryItems(data);
    } catch (error) {
      console.error("Error fetching gallery:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingItem
      ? `/api/admin/gallery/${editingItem._id}`
      : "/api/admin/gallery";
    const method = editingItem ? "PUT" : "POST";

    const submitData: any = {
      title: formData.title,
      type: formData.type,
      category: formData.category,
      country: formData.country,
    };

    if (formData.type === "video") {
      submitData.youtubeUrl = formData.youtubeUrl;
    } else {
      submitData.url = formData.url;
      if (formData.thumbnail) {
        submitData.thumbnail = formData.thumbnail;
      }
    }

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData),
      });

      if (res.ok) {
        setShowForm(false);
        setEditingItem(null);
        setFormData({
          title: "",
          type: "photo",
          url: "",
          thumbnail: "",
          category: "",
          country: "",
          youtubeUrl: "",
        });
        fetchGallery();
      }
    } catch (error) {
      console.error("Error saving gallery item:", error);
      alert("Error saving gallery item. Please try again.");
    }
  };

  const handleEdit = (item: GalleryItem) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      type: item.type,
      url: item.url,
      thumbnail: item.thumbnail || "",
      category: item.category,
      country: item.country,
      youtubeUrl: item.youtubeId
        ? `https://www.youtube.com/watch?v=${item.youtubeId}`
        : "",
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this item?")) return;

    try {
      const res = await fetch(`/api/admin/gallery/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchGallery();
      }
    } catch (error) {
      console.error("Error deleting gallery item:", error);
      alert("Error deleting gallery item. Please try again.");
    }
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
              <h1 className="text-4xl font-bold text-gradient">Manage Gallery</h1>
            </div>
            <button
              onClick={() => {
                setShowForm(true);
                setEditingItem(null);
                setFormData({
                  title: "",
                  type: "photo",
                  url: "",
                  thumbnail: "",
                  category: "",
                  country: "",
                  youtubeUrl: "",
                });
              }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              <Plus className="w-5 h-5" />
              Add Item
            </button>
          </div>

          {showForm && (
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">
                {editingItem ? "Edit Gallery Item" : "Add New Gallery Item"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type *
                    </label>
                    <select
                      required
                      value={formData.type}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          type: e.target.value as "photo" | "video",
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="photo">Photo</option>
                      <option value="video">Video</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      placeholder="Campus, Facilities, Student Life, etc."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      placeholder="Georgia, Russia, Vietnam, etc."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                </div>

                {formData.type === "video" ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      YouTube URL *
                    </label>
                    <input
                      type="url"
                      required
                      value={formData.youtubeUrl}
                      onChange={(e) =>
                        setFormData({ ...formData, youtubeUrl: e.target.value })
                      }
                      placeholder="https://www.youtube.com/watch?v=..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      Paste the full YouTube URL. The system will automatically extract the video ID.
                    </p>
                  </div>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Image URL *
                      </label>
                      <input
                        type="url"
                        required
                        value={formData.url}
                        onChange={(e) =>
                          setFormData({ ...formData, url: e.target.value })
                        }
                        placeholder="https://example.com/image.jpg"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Thumbnail URL (optional)
                      </label>
                      <input
                        type="url"
                        value={formData.thumbnail}
                        onChange={(e) =>
                          setFormData({ ...formData, thumbnail: e.target.value })
                        }
                        placeholder="https://example.com/thumbnail.jpg"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                      <p className="mt-2 text-sm text-gray-500">
                        If not provided, the main image URL will be used as thumbnail.
                      </p>
                    </div>
                  </>
                )}

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    {editingItem ? "Update Item" : "Add Item"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setEditingItem(null);
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
              <h2 className="text-2xl font-bold">All Gallery Items</h2>
            </div>
            <div className="divide-y">
              {galleryItems.map((item) => (
                <div
                  key={item._id}
                  className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    {item.type === "photo" ? (
                      <Image className="w-8 h-8 text-blue-600" />
                    ) : (
                      <Video className="w-8 h-8 text-purple-600" />
                    )}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.category} • {item.country} • {item.type}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
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

