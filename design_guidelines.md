# Refyno Web Design Studio - Design Guidelines

## Design Approach
**Reference-Based**: Premium web design agency aesthetic inspired by Apple-level minimalism combined with modern creative studio motion design (similar to Awwwards-winning studios)

## Brand Identity
- **Color Palette**: White base, soft black (#0A0A0A), green accent (#7CFF87 or similar)
- **Typography**: Modern sans-serif stack - Inter, Manrope, Poppins, or Satoshi
- **Aesthetic**: Premium, artistic, hyper-smooth with insane attention to detail

## Layout System
- **Spacing**: Luxury spacing throughout (generous breathing room)
- **Grid**: Mobile-first responsive design
- **Touch Targets**: Minimum 44px for all interactive elements on mobile

## Core Pages Structure

### Home Page
1. **Hero Section**: Animated headline "Refyno — Websites Rebuilt to Perfection" with subtext, floating UI elements, subtle parallax, interactive mouse movement
2. **Services Preview**: 5 cards with hover animations + icons (Website Repairs, Modern Redesigns, Full Builds, Mobile-Optimized Layouts, SEO Performance)
3. **Featured Work**: 4 portfolio items (premium flower shop dark/elegant, restaurant black/serif, beauty studio white minimal, fitness bold/dark) with scroll-trigger animations and image sliding
4. **Why Choose Us**: Unique value proposition section
5. **CTA Section**: Strong conversion-focused call-to-action

### Services Page
Detailed breakdown for each service with visual hierarchy

### Portfolio Page
Animated grids with hover zoom interactions

### About Page
Mission, values, UAE-focused positioning

### Contact Page
Working contact form (Netlify-compatible serverless)

## Interactive Elements (Critical Unique Features)

### Advanced Interactions
- Smooth 3D scrolling section
- Floating glassmorphism UI pieces with depth and blur
- Animated before/after website slider (touch-draggable)
- Live performance score widget showing speed optimization
- Interactive pricing estimator
- Custom cursor with magnetic buttons and trailing effects
- Scroll-linked GSAP animations throughout
- Smooth page transitions between sections
- Animated navigation bar

### Mobile Optimizations
- Touch-optimized parallax (reduced complexity)
- Swipe gestures for portfolio navigation
- Hamburger menu with smooth animations
- Tap feedback replacing hover states
- Performance-optimized animations with reduced motion support
- Lazy loading for images

## Component Library

### Navigation
- Animated navbar with smooth transitions
- Desktop: Full menu with custom cursor interactions
- Mobile: Hamburger menu, smooth slide-in

### Cards
- Service cards with hover lift animations
- Portfolio cards with zoom on hover/tap
- Soft shadows with depth

### Buttons
- Magnetic interaction (desktop)
- Soft shadows
- Green accent for primary CTAs
- Blur background when on images

### Forms
- Clean, minimal contact form
- Smooth validation animations
- Netlify form handling

## Images
**Large Hero Image**: No - using animated floating UI elements and interactive parallax instead
**Portfolio Images**: Yes - 4 placeholder images for featured work (use abstract/minimal placeholders representing: dark elegant florals, black restaurant ambiance, white beauty spa, bold fitness energy)
**About Page**: Consider team/studio imagery to humanize brand

## Animation Strategy
- GSAP for scroll-triggered animations
- Smooth parallax effects throughout
- Micro-interactions on all interactive elements
- Performance budget: Keep smooth 60fps on mobile
- Reduced motion fallbacks included

## Typography Hierarchy
- **Headlines**: Large, bold, luxurious spacing
- **Body**: Clean, readable with generous line-height
- **Accents**: Green highlights for key information

## Performance Requirements
- Optimized assets for fast mobile load
- Lazy loading implementation
- Single static build folder (Netlify-ready, no /client structure)
- Smooth animations without janking on mobile devices