"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800">
      <div className="text-center text-white px-4">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

