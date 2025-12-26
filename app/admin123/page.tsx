"use client";

import Link from "next/link";
import { Globe, GraduationCap, Image, Video, Plus, Upload } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gradient">Admin Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Countries Management */}
            <Link
              href="/admin123/countries"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Countries</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Manage countries where MBBS programs are available
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <Plus className="w-5 h-5" />
                <span>Manage Countries</span>
              </div>
            </Link>

            {/* Universities Management */}
            <Link
              href="/admin123/universities"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Universities</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Add and manage universities under countries
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <Plus className="w-5 h-5" />
                <span>Manage Universities</span>
              </div>
            </Link>

            {/* Gallery Management */}
            <Link
              href="/admin123/gallery"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Image className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Gallery</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Manage photos and YouTube videos in gallery
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <Plus className="w-5 h-5" />
                <span>Manage Gallery</span>
              </div>
            </Link>

            {/* Image Upload */}
            <Link
              href="/admin123/images"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Image Upload</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Upload images and get URLs to use in your content
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <Plus className="w-5 h-5" />
                <span>Upload Images</span>
              </div>
            </Link>
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Instructions</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>First, create countries in the Countries section</li>
              <li>Then, add universities under each country in the Universities section</li>
              <li>Finally, add photos and YouTube videos in the Gallery section</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

