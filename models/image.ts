import mongoose, { Schema, Document, Model } from "mongoose";

export interface IImage extends Document {
  title: string;
  imageData?: string; // Base64 encoded image data for photos
  imageMimeType?: string; // MIME type of the image (e.g., image/png, image/jpeg)
  fileName?: string; // Original filename
  fileSize?: number; // File size in bytes
  createdAt: Date;
  updatedAt: Date;
}

const ImageSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
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

const Image: Model<IImage> =
  mongoose.models.Image || mongoose.model<IImage>("Image", ImageSchema);

export default Image;

