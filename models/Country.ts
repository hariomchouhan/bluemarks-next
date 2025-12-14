import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICountry extends Document {
  name: string;
  slug: string;
  flag: string;
  description: string;
  fullDescription?: string;
  content?: string;
  fees: string;
  duration: string;
  eligibility: string;
  advantages: string[];
  process: string[];
  createdAt: Date;
  updatedAt: Date;
}

const CountrySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    flag: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    fullDescription: {
      type: String,
    },
    content: {
      type: String, // Rich text HTML content
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
    advantages: {
      type: [String],
      default: [],
    },
    process: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Country: Model<ICountry> =
  mongoose.models.Country || mongoose.model<ICountry>("Country", CountrySchema);

export default Country;

