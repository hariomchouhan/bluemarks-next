import mongoose, { Schema, Document, Model } from "mongoose";

export interface IGallery extends Document {
  title: string;
  type: "photo" | "video";
  url: string;
  thumbnail?: string;
  category: string;
  country: string;
  youtubeId?: string; // For YouTube videos
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
  },
  {
    timestamps: true,
  }
);

const Gallery: Model<IGallery> =
  mongoose.models.Gallery || mongoose.model<IGallery>("Gallery", GallerySchema);

export default Gallery;

