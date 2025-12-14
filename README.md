# Blue Marks - Study MBBS Abroad Consultancy Website

A modern, beautiful website for Blue Marks, a study-abroad consultancy specializing in helping Indian students pursue MBBS and medical programs abroad.

## Features

- 🎨 Beautiful, modern UI with gradient designs
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Built with Next.js 14 and TypeScript
- 🎨 Styled with Tailwind CSS
- 🌈 Gradient color schemes throughout
- 🔌 Backend API routes for dynamic content
- 📸 Photo and Video Gallery with backend integration
- 📄 Complete page structure:
  - Home page with hero section
  - About Us
  - Services
  - Countries/Programs (with dynamic country pages)
  - Universities (with individual university pages)
  - Gallery (Photo & Video)
  - FAQs (with accordion)
  - Testimonials
  - Blog
  - Contact (with form)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
BlueMarks/
├── app/
│   ├── api/
│   │   ├── countries/
│   │   │   ├── route.ts
│   │   │   └── [country]/
│   │   │       └── route.ts
│   │   ├── universities/
│   │   │   └── route.ts
│   │   └── gallery/
│   │       └── route.ts
│   ├── about/
│   ├── blog/
│   ├── contact/
│   ├── countries/
│   │   └── [country]/
│   ├── gallery/
│   │   ├── photo/
│   │   └── video/
│   ├── faqs/
│   ├── services/
│   ├── testimonials/
│   ├── universities/
│   │   └── [slug]/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── public/
└── package.json
```

## Pages

- **Home** (`/`) - Landing page with hero, services overview, and CTAs
- **About** (`/about`) - Company information, mission, vision
- **Services** (`/services`) - Detailed service offerings
- **Countries** (`/countries`) - List of available countries (fetches from API)
- **Country Pages** (`/countries/[country]`) - Detailed country information (fetches from API)
- **Universities** (`/universities`) - Partner universities (fetches from API)
- **University Pages** (`/universities/[slug]`) - Individual university details (fetches from API)
- **Gallery** (`/gallery`) - Photo and Video gallery hub
- **Photo Gallery** (`/gallery/photo`) - Photo gallery with filters (fetches from API)
- **Video Gallery** (`/gallery/video`) - Video gallery with filters (fetches from API)
- **FAQs** (`/faqs`) - Frequently asked questions
- **Testimonials** (`/testimonials`) - Student testimonials
- **Blog** (`/blog`) - Blog posts and resources
- **Contact** (`/contact`) - Contact form and information

## API Endpoints

All API routes are located in `app/api/` and serve data for the frontend:

### Countries API

- `GET /api/countries` - Get all countries with their universities
- `GET /api/countries/[country]` - Get detailed information about a specific country

### Universities API

- `GET /api/universities` - Get all universities
- `GET /api/universities?country=georgia` - Get universities for a specific country
- `GET /api/universities?slug=university-slug` - Get detailed information about a specific university

### Gallery API

- `GET /api/gallery?type=photo` - Get all photos
- `GET /api/gallery?type=video` - Get all videos
- `GET /api/gallery` - Get both photos and videos

## Backend Integration

Currently, the API routes return sample data. To connect to a real backend:

1. **Database Setup**: Replace the sample data in API routes with database queries (e.g., using Prisma, MongoDB, PostgreSQL)

2. **Example for Countries API** (`app/api/countries/route.ts`):
```typescript
import { NextResponse } from "next/server";
import { db } from "@/lib/db"; // Your database client

export async function GET() {
  const countries = await db.country.findMany({
    include: {
      universities: true
    }
  });
  return NextResponse.json(countries);
}
```

3. **Environment Variables**: Create a `.env.local` file for database connections:
```
DATABASE_URL="your-database-connection-string"
```

4. **Gallery Images/Videos**: 
   - Store image/video URLs in your database
   - Use a CDN or cloud storage (AWS S3, Cloudinary, etc.)
   - Update the gallery API to fetch from your database

## Customization

### Colors

The gradient colors can be customized in `tailwind.config.ts` and `app/globals.css`.

### Content

**Backend-Driven Content:**
- Countries: Update data in `app/api/countries/route.ts` or connect to database
- Universities: Update data in `app/api/universities/route.ts` or connect to database
- Gallery: Update photos/videos in `app/api/gallery/route.ts` or connect to database

**Static Content:**
- Update text content directly in the page files
- Update testimonials in `app/testimonials/page.tsx`
- Update blog posts in `app/blog/page.tsx`

## Features to Add

- [x] Backend API routes for countries, universities, and gallery
- [x] Dynamic country and university pages
- [x] Photo and Video gallery with backend integration
- [ ] Database integration (replace sample data with real database)
- [ ] Backend API integration for contact form
- [ ] Blog post detail pages
- [ ] Search functionality
- [ ] Live chat integration
- [ ] Google Maps integration for office location
- [ ] Image optimization
- [ ] SEO optimization
- [ ] Analytics integration

## License

This project is private and proprietary.

