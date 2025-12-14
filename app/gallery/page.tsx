"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Image, Video, Grid, List } from "lucide-react";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"photo" | "video">("photo");
  const [photos, setPhotos] = useState<any[]>([]);
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const [photosRes, videosRes] = await Promise.all([
        fetch("/api/gallery?type=photo"),
        fetch("/api/gallery?type=video"),
      ]);
      const photosData = await photosRes.json();
      const videosData = await videosRes.json();
      setPhotos(photosData);
      setVideos(videosData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching gallery:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-blue-100">
              Explore photos and videos from our partner universities
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 justify-center">
            <Link
              href="/gallery/photo"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "photo"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Image className="w-5 h-5" />
              Photo Gallery
            </Link>
            <Link
              href="/gallery/video"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "video"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Video className="w-5 h-5" />
              Video Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Preview */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/gallery/photo"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-4">📷</div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Photo Gallery</h2>
              <p className="text-gray-600 mb-4">
                Browse through photos of university campuses, facilities, student life, and events.
              </p>
              <div className="text-blue-600 font-semibold">View Photos →</div>
            </Link>
            <Link
              href="/gallery/video"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-4">🎥</div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Video Gallery</h2>
              <p className="text-gray-600 mb-4">
                Watch videos of campus tours, student testimonials, and university facilities.
              </p>
              <div className="text-blue-600 font-semibold">Watch Videos →</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

