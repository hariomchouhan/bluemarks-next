# Admin Panel Setup Guide

## Overview

The admin panel allows you to manage countries, universities, and gallery items (photos and YouTube videos) through a web interface.

## Setup Instructions

### 1. MongoDB Setup

1. **Install MongoDB** (if not already installed):
   - Local: Download from [mongodb.com](https://www.mongodb.com/try/download/community)
   - Cloud: Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free tier available)

2. **Create `.env.local` file** in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/bluemarks
   ```
   
   For MongoDB Atlas:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bluemarks
   ```

### 2. Access Admin Panel

Navigate to: `http://localhost:3000/admin`

## Admin Workflow

### Step 1: Create Countries

1. Go to `/admin/countries`
2. Click "Add Country"
3. Fill in the form:
   - Country Name (e.g., "Georgia")
   - Slug (auto-generated from name, e.g., "georgia")
   - Flag Emoji (e.g., "🇬🇪")
   - Fees, Duration, Eligibility
   - Description and Full Description
   - Advantages (one per line)
   - Admission Process (one step per line)
4. Click "Add Country"

### Step 2: Add Universities

1. Go to `/admin/universities`
2. Click "Add University"
3. Fill in the form:
   - University Name
   - Slug (auto-generated)
   - **Select Country** (from dropdown - must create country first)
   - Description, Fees, Duration, Eligibility
   - Recognition, Language, Intake, Application Deadline
4. Click "Add University"

### Step 3: Add Gallery Items

1. Go to `/admin/gallery`
2. Click "Add Item"
3. Choose type:
   - **Photo**: Enter image URL and optional thumbnail URL
   - **Video**: Enter YouTube URL (system extracts video ID automatically)
4. Fill in:
   - Title
   - Category (e.g., "Campus", "Facilities", "Student Life")
   - Country
5. Click "Add Item"

## Features

- ✅ Create, Edit, Delete Countries
- ✅ Create, Edit, Delete Universities (linked to countries)
- ✅ Create, Edit, Delete Gallery Items (Photos & YouTube Videos)
- ✅ Automatic slug generation
- ✅ YouTube URL parsing (extracts video ID automatically)
- ✅ Responsive admin interface

## Data Structure

### Country
- name, slug, flag, description, fullDescription
- fees, duration, eligibility
- advantages (array), process (array)

### University
- name, slug
- country (reference), countryName, countrySlug
- description, fees, duration, eligibility
- recognition, language, intake, applicationDeadline

### Gallery
- title, type ("photo" | "video")
- url, thumbnail (optional)
- category, country
- youtubeId (auto-extracted for videos)

## Notes

- Countries must be created before universities
- Slug is auto-generated but can be edited
- YouTube videos: paste full URL, system extracts ID automatically
- All data is stored in MongoDB
- Public API routes (`/api/countries`, `/api/universities`, `/api/gallery`) automatically fetch from MongoDB

