# Refyno Web Design Studio

## Overview

Refyno is a premium UAE-based web design and website repair studio website. The application showcases services including website repairs, modern redesigns, full website builds, mobile optimization, and SEO performance upgrades. The site features a high-end, artistic aesthetic with Apple-level minimalism, smooth animations, and motion-focused interactions using GSAP for scroll-triggered effects and micro-interactions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom configuration for development and production
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming (light mode with green accent #7CFF87)
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: GSAP (GreenSock) with ScrollTrigger for scroll-linked animations, parallax effects, and micro-interactions
- **State Management**: TanStack React Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful endpoints under `/api/` prefix
- **Build Process**: esbuild for server bundling with selective dependency bundling for cold start optimization

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` contains database table definitions
- **Current Tables**: 
  - `users` - User authentication
  - `contact_submissions` - Contact form entries
- **Validation**: Zod schemas generated from Drizzle schemas using drizzle-zod
- **Development Storage**: MemStorage class for in-memory data during development

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Route page components
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   └── storage.ts    # Data storage abstraction
├── shared/           # Shared code between client and server
│   └── schema.ts     # Database schema and types
└── migrations/       # Drizzle database migrations
```

### Key Design Patterns
- **Path Aliases**: `@/` maps to client source, `@shared/` to shared code, `@assets/` to attached assets
- **Component Architecture**: Feature components in root components folder, base UI in `components/ui/`
- **Form Handling**: React Hook Form with Zod validation using @hookform/resolvers
- **API Layer**: Centralized fetch wrapper in `queryClient.ts` with error handling

## External Dependencies

### Third-Party Services
- **WhatsApp Integration**: Direct messaging links to business WhatsApp number (+971567219287)
- **Instagram Integration**: Embedded Instagram posts using Instagram's embed.js script
- **Google Fonts**: Inter and Manrope font families for typography

### Database
- **PostgreSQL**: Primary database (requires DATABASE_URL environment variable)
- **Drizzle Kit**: Database migration and schema push tooling

### Animation Libraries
- **GSAP**: Core animation library with ScrollTrigger plugin for scroll-based animations
- **@gsap/react**: React integration for GSAP

### UI Framework
- **Radix UI**: Complete primitive component set for accessible UI elements
- **Lucide React**: Icon library
- **React Icons**: Additional icons (WhatsApp, Instagram)
- **Embla Carousel**: Carousel/slider functionality
- **Vaul**: Drawer component
- **cmdk**: Command menu component