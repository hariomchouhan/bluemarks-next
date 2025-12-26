"use client";

import { useState, useRef } from "react";
import { ArrowLeft, Upload, Copy, Check, X } from "lucide-react";
import Link from "next/link";

export default function AdminImagesPage() {
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError("");
    setUploading(true);
    setImageUrl("");
    setImagePreview("");

    try {
      // Validate file type
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"];
      if (!allowedTypes.includes(file.type)) {
        setError("Invalid file type. Only images (JPEG, PNG, GIF, WebP) are allowed.");
        setUploading(false);
        return;
      }

      // Validate file size (max 10MB)
      const maxSize = 10 * 1024 * 1024; // 10MB
      if (file.size > maxSize) {
        setError("File size too large. Maximum size is 10MB.");
        setUploading(false);
        return;
      }

      // Upload file
      const formData = new FormData();
      formData.append("file", file);

      const uploadResponse = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) {
        const errorData = await uploadResponse.json();
        throw new Error(errorData.error || "Upload failed");
      }

      const uploadData = await uploadResponse.json();

      // Set preview
      setImagePreview(uploadData.url);
      setTitle(file.name);

      // Save to database
      const saveResponse = await fetch("/api/image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: file.name,
          imageData: uploadData.url,
          imageMimeType: uploadData.mimeType,
          fileName: uploadData.fileName,
          fileSize: uploadData.fileSize,
        }),
      });

      if (!saveResponse.ok) {
        const errorData = await saveResponse.json();
        throw new Error(errorData.error || "Failed to save image");
      }

      const savedData = await saveResponse.json();
      setImageUrl(savedData.imageData);
    } catch (err: any) {
      setError(err.message || "Failed to upload image");
      console.error("Upload error:", err);
    } finally {
      setUploading(false);
    }
  };

  const copyToClipboard = async () => {
    if (!imageUrl) return;

    try {
      await navigator.clipboard.writeText(imageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      setError("Failed to copy URL to clipboard");
    }
  };

  const resetForm = () => {
    setImageUrl("");
    setImagePreview("");
    setTitle("");
    setError("");
    setCopied(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Admin Dashboard</span>
            </Link>
            <h1 className="text-4xl font-bold text-gradient mb-2">Image Upload</h1>
            <p className="text-gray-600">
              Upload images and get the URL to use in your content
            </p>
          </div>

          {/* Upload Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <h2 className="text-2xl font-bold mb-6">Upload Image</h2>

            <div className="space-y-6">
              {/* File Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Image
                </label>
                <div className="flex items-center gap-4">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                    onChange={handleFileSelect}
                    disabled={uploading}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold cursor-pointer hover:shadow-lg transition-all ${
                      uploading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <Upload className="w-5 h-5" />
                    <span>{uploading ? "Uploading..." : "Choose Image"}</span>
                  </label>
                  {imageUrl && (
                    <button
                      onClick={resetForm}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                    >
                      <X className="w-5 h-5" />
                      <span>Reset</span>
                    </button>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Supported formats: JPEG, PNG, GIF, WebP (Max 10MB)
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              {/* Image Preview */}
              {imagePreview && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preview
                  </label>
                  <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="max-w-full h-auto max-h-96 mx-auto rounded-lg"
                    />
                  </div>
                </div>
              )}

              {/* Image URL Display */}
              {imageUrl && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image URL
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={imageUrl}
                      readOnly
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm font-mono"
                    />
                    <button
                      onClick={copyToClipboard}
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                        copied
                          ? "bg-green-600 text-white"
                          : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                      }`}
                    >
                      {copied ? (
                        <>
                          <Check className="w-5 h-5" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-5 h-5" />
                          <span>Copy URL</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Click "Copy URL" to copy the image URL. You can use this URL in your content.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How to Use</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Click "Choose Image" and select an image file</li>
              <li>Wait for the image to upload and process</li>
              <li>The image URL will be displayed below</li>
              <li>Click "Copy URL" to copy the URL to your clipboard</li>
              <li>Paste the URL wherever you need to use the image</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

