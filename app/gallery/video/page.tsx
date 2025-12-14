"use client";

import { useState, useEffect } from "react";
import { Video, Play } from "lucide-react";

export default function VideoGalleryPage() {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const res = await fetch("/api/gallery?type=video");
      const data = await res.json();
      setVideos(data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ["all", ...new Set(videos.map((v) => v.category))];
  const filteredVideos = filter === "all" ? videos : videos.filter((v) => v.category === filter);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading videos...</p>
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Video Gallery</h1>
            <p className="text-xl text-blue-100">
              Watch videos from our partner universities
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

      {/* Video Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredVideos.length === 0 ? (
            <div className="text-center py-20">
              <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No videos found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden transform hover:-translate-y-1"
                >
                  <div className="relative aspect-video bg-gray-900 overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x450?text=Video+Thumbnail";
                      }}
                    />
                    <button
                      onClick={() => setSelectedVideo(video)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition-colors group"
                    >
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                    </button>
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Video
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">{video.title}</h3>
                    <p className="text-sm text-gray-600">{video.country} • {video.category}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <iframe
                src={selectedVideo.url}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4 text-white text-center">
              <h2 className="text-2xl font-bold">{selectedVideo.title}</h2>
              <p className="text-gray-300">{selectedVideo.country} • {selectedVideo.category}</p>
            </div>
            <button
              onClick={() => setSelectedVideo(null)}
              className="mt-4 w-full py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

