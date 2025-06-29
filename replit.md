# Kanha Studio - Creative Design Studio

## Overview

Kanha Studio is a modern full-stack web application for a creative design studio inspired by Krishna devotion and based in Vrindavan. The application serves as a portfolio and business website featuring a divine aesthetic with Krishna-inspired design elements, Sanskrit quotes, and spiritual motifs.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component system
- **Styling**: Tailwind CSS with custom Krishna-inspired color palette
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Animations**: GSAP with ScrollTrigger for advanced animations

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL store
- **API Design**: RESTful API endpoints

### Design System
- **Component Library**: Custom implementation using Radix UI + shadcn/ui
- **Theming**: CSS custom properties with light/dark mode support
- **Typography**: Playfair Display (serif) + Poppins (sans-serif)
- **Color Palette**: 
  - Midnight Blue (primary): `hsl(245, 58%, 51%)`
  - Peacock Green: `hsl(179, 67%, 29%)`
  - Lotus Pink: `hsl(348, 60%, 81%)`
  - Soft Gold: `hsl(51, 66%, 53%)`
  - Vrindavan Beige: `hsl(48, 47%, 94%)`

## Key Components

### Pages
- **Home**: Hero section with divine branding and call-to-action
- **About**: Studio story and philosophy with spiritual elements
- **Services**: Service offerings with detailed descriptions
- **Portfolio**: Project gallery with filtering capabilities
- **Contact**: Contact form with validation and submission handling

### UI Features
- **Custom Cursor**: Animated cursor with trailing effects
- **Floating Elements**: Decorative spiritual symbols (🍃, 🪶)
- **Navigation**: Floating navigation bar with smooth animations
- **Responsive Design**: Mobile-first approach with breakpoint optimization

### Backend Features
- **Contact Form API**: Handles form submissions with validation
- **Data Storage**: In-memory storage with planned PostgreSQL migration
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Request Logging**: Detailed API request logging with performance metrics

## Data Flow

### Client-Side Data Flow
1. User interactions trigger React component state changes
2. Form submissions use React Hook Form with Zod validation
3. API calls managed through TanStack Query for caching and state management
4. Server responses update UI components and display toast notifications

### Server-Side Data Flow
1. Express middleware handles request parsing and logging
2. Route handlers validate input using Zod schemas
3. Storage layer (currently in-memory, designed for PostgreSQL) manages data persistence
4. Responses include proper error handling and status codes

### Database Schema
- **Users Table**: User authentication (planned)
- **Contact Submissions Table**: Form submissions with metadata
  - Fields: id, name, email, projectType, budgetRange, message, createdAt

## External Dependencies

### Frontend Dependencies
- **UI/UX**: Radix UI components, Tailwind CSS, GSAP animations
- **Development**: Vite, TypeScript, ESLint
- **Forms**: React Hook Form, Zod validation
- **Icons**: Lucide React icons
- **Date Handling**: date-fns library

### Backend Dependencies
- **Server**: Express.js, TypeScript (tsx for development)
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Validation**: Zod schema validation
- **Session**: express-session with connect-pg-simple

### Build Dependencies
- **Bundling**: esbuild for server, Vite for client
- **Development**: Replit-specific plugins for development environment

## Deployment Strategy

### Development Environment
- **Server**: Node.js with tsx for TypeScript execution
- **Client**: Vite dev server with HMR
- **Database**: PostgreSQL connection via environment variables
- **Scripts**: `npm run dev` for development mode

### Production Build
- **Client**: Vite builds to `dist/public` directory
- **Server**: esbuild bundles server code to `dist/index.js`
- **Deployment**: Node.js production server serving static files and API
- **Database**: Production PostgreSQL via DATABASE_URL environment variable

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable
- **Build Process**: Separate client and server build steps
- **Static Assets**: Client build output served by Express in production

## Changelog

```
Changelog:
- June 29, 2025. Initial setup
- June 29, 2025. Updated to professional tone - removed excessive spiritual language
- June 29, 2025. Added full-width navigation bar
- June 29, 2025. Integrated custom logo (peacock feather design)
- June 29, 2025. Added social media links (Instagram, WhatsApp)
- June 29, 2025. Removed contact form per user request
- June 29, 2025. Implemented mobile-first responsive design
- June 29, 2025. Configured for Netlify deployment with build optimization
- June 29, 2025. Enhanced creative elements with advanced animations
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
Design preferences: Professional tone, less spiritual language, Krishna-inspired colors maintained.
Contact: No contact form needed, social media integration preferred.
Logo: Custom peacock feather logo provided by user.
Deployment: Netlify deployment preferred.
Responsive: Mobile-first approach required.
```