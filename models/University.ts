import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUniversity extends Document {
  name: string;
  slug: string;
  country: mongoose.Types.ObjectId;
  countryName: string;
  countrySlug: string;
  description: string;
  fees: string;
  duration: string;
  eligibility: string;
  recognition: string;
  language: string;
  intake: string;
  applicationDeadline: string;
  content?: string;
  createdAt: Date;
  updatedAt: Date;
}

const UniversitySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    country: {
      type: Schema.Types.ObjectId,
      ref: "Country",
      required: true,
    },
    countryName: {
      type: String,
      required: true,
    },
    countrySlug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    fees: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    eligibility: {
      type: String,
      required: true,
    },
    recognition: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      default: "English",
    },
    intake: {
      type: String,
      default: "September",
    },
    applicationDeadline: {
      type: String,
      default: "July",
    },
    content: {
      type: String, // Rich text HTML content
    },
  },
  {
    timestamps: true,
  }
);

const University: Model<IUniversity> =
  mongoose.models.University || mongoose.model<IUniversity>("University", UniversitySchema);

export default University;

