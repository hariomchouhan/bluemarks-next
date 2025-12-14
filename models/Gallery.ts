import mongoose, { Schema, Document, Model } from "mongoose";

export interface IGallery extends Document {
  title: string;
  type: "photo" | "video";
  url: string;
  thumbnail?: string;
  category: string;
  country: string;
  youtubeId?: string; // For YouTube videos
  imageData?: string; // Base64 encoded image data for photos
  imageMimeType?: string; // MIME type of the image (e.g., image/png, image/jpeg)
  fileName?: string; // Original filename
  fileSize?: number; // File size in bytes
  createdAt: Date;
  updatedAt: Date;
}

const GallerySchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["photo", "video"],
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    youtubeId: {
      type: String,
    },
    imageData: {
      type: String, // Base64 encoded image
    },
    imageMimeType: {
      type: String, // e.g., image/png, image/jpeg
    },
    fileName: {
      type: String, // Original filename
    },
    fileSize: {
      type: Number, // File size in bytes
    },
  },
  {
    timestamps: true,
  }
);

const Gallery: Model<IGallery> =
  mongoose.models.Gallery || mongoose.model<IGallery>("Gallery", GallerySchema);

export default Gallery;

