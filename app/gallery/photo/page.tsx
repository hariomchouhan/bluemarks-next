"use client";

import { useState, useEffect } from "react";
import { Image, X } from "lucide-react";

export default function PhotoGalleryPage() {
  const [photos, setPhotos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const res = await fetch("/api/gallery?type=photo");
      const data = await res.json();
      setPhotos(data);
    } catch (error) {
      console.error("Error fetching photos:", error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ["all", ...new Set(photos.map((p) => p.category))];
  const filteredPhotos = filter === "all" ? photos : photos.filter((p) => p.category === filter);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading photos...</p>
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Photo Gallery</h1>
            <p className="text-xl text-blue-100">
              Explore photos from our partner universities
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all capitalize ${
                  filter === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPhotos.length === 0 ? (
            <div className="text-center py-20">
              <Image className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No photos found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPhotos.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo)}
                  className="relative group cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
                >
                  <div className="aspect-square overflow-hidden bg-gray-200">
                    <img
                      src={photo.thumbnail || photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/400?text=Image+Not+Found";
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-bold text-lg mb-1">{photo.title}</h3>
                      <p className="text-sm text-gray-200">{photo.category} • {photo.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4 text-white text-center">
              <h2 className="text-2xl font-bold">{selectedPhoto.title}</h2>
              <p className="text-gray-300">{selectedPhoto.country} • {selectedPhoto.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

