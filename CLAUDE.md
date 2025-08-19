# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website for Younes Benketira, an AI Full Stack Engineer. The site is built with React, Vite, and TypeScript, featuring a clean, video-focused design with seamless project showcases.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Type checking
npm run type-check
```

## Site Architecture

The website follows a single-page layout with the following sections:

1. **Header**: Clean, sticky navigation bar
2. **Hero Section**: 
   - Large, stylized animated name display using SVG
   - Job title "AI Full Stack Engineer" with delayed fade-in animation
   - Scroll indicator with bouncing chevron
3. **Projects Section**: 
   - Responsive height sections for each project (70vh on mobile)
   - Centered project title, description, and technology tags
   - Mux video players with pill-based navigation for multiple videos
   - Image carousels for projects with image assets (Gathera)
   - Loading skeletons for placeholder/missing videos
   - No dividers between projects for seamless flow
4. **Career Section**: Professional experience and current role information
5. **Contact Section**: Social media links with copy-to-clipboard functionality

## Current Projects

1. **Saqr**: Personal AI Agent for work assistance
   - Technologies: AI, Python, React Native Expo
   - Videos: SQL Tool, Super Web Search Tool

2. **Sawt**: No-Cost voice agent proof of concept
   - Technologies: AI, Python, React
   - Videos: Demo, Tutorial

3. **Gathera**: Social Media App
   - Technologies: Node.js, React Native Expo
   - Assets: Image carousel with multiple app screenshots

## Key Design Principles

- **Media-centric design**: Mux video players and image carousels with rounded corners
- **Responsive sizing**: Optimized for both desktop and mobile viewing
- **Pill-based navigation**: Transparent gray pills for video switching with instant loading
- **Centered content**: All text and elements horizontally and vertically centered
- **Clean typography**: Compact tags and well-spaced content
- **Loading states**: Animated gradient skeletons for missing videos
- **Seamless sections**: No dividers between project sections
- **Mobile optimization**: Reduced section heights and appropriate padding on mobile devices

## File Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Career.tsx
│   ├── Contact.tsx
│   ├── SectionTransition.tsx
│   ├── hero/
│   │   ├── AnimatedName.tsx
│   │   ├── HeroTitle.tsx
│   │   └── ScrollIndicator.tsx
│   ├── projects/
│   │   ├── AssetViewer.tsx
│   │   ├── ImageCarousel.tsx
│   │   ├── Tag.tsx
│   │   ├── VideoControls.tsx
│   │   └── VideoSkeleton.tsx
│   └── career/
│       ├── Job.tsx
│       └── CareerAssetViewer.tsx
├── data/
│   ├── projectsData.ts
│   ├── careerData.ts
│   └── socialsData.ts
├── hooks/
│   ├── useScrollVisibility.ts
│   ├── useDelayedAnimation.ts
│   └── useScrollOpacity.ts
└── vite-env.d.ts
```

## Technology Stack

- **Framework**: React 19.1.1 with Vite 7.1.2
- **Language**: TypeScript 5.9.2 for type safety
- **Video Player**: @mux/mux-player-react for video streaming
- **Icons**: react-icons for social media and UI icons
- **Styling**: CSS with responsive design and CSS custom properties
- **Environment**: Vite with typed environment variables

## Video Management

### Environment Variables
Video playback IDs are stored in `.env` with `VITE_` prefix:
```env
# Saqr Project Videos
VITE_SAQR_SQL_TOOL_VIDEO=your_mux_id_here
VITE_SAQR_WEB_SEARCH_VIDEO=your_mux_id_here

# Sawt Project Videos  
VITE_SAWT_DEMO_VIDEO=your_mux_id_here
VITE_SAWT_TUTORIAL_VIDEO=your_mux_id_here

# Gathera Project Videos
VITE_GATHERA_OVERVIEW_VIDEO=your_mux_id_here
```

### Asset Component Structure
- **AssetViewer**: Main component that handles both video and image assets
- **VideoControls**: Play/pause and mute controls for videos
- **ImageCarousel**: Horizontal scrolling carousel for image assets
- **VideoSkeleton**: Animated loading state for missing/loading videos
- **Pill Navigation**: Shows below videos when multiple videos exist
- **Preloading**: All videos in a project are rendered but hidden for instant switching

### Asset Specifications
- **Videos**: 16:9 aspect ratio with 40px border radius
- **Images**: Flexible sizing with smooth horizontal scrolling
- **Responsive**: Smaller heights on mobile devices for better UX
- **Loading**: Skeleton shows for placeholder IDs or missing assets

## Component Architecture

### Data Layer
- `projectsData.ts`: Central data store for project information with typed interfaces
- `careerData.ts`: Professional experience and career information
- `socialsData.ts`: Social media links with copy functionality and react-icons
- Environment variables for sensitive video IDs
- TypeScript interfaces ensure type safety

### UI Components
- **Tag Component**: Color-coded technology tags with compact styling
- **AssetViewer**: Handles both video players and image carousels
- **ImageCarousel**: Smooth horizontal scrolling for image assets
- **VideoSkeleton**: Loading placeholder with gradient animation
- **Contact Component**: Social media cards with copy-to-clipboard functionality

### Styling Approach
- CSS custom properties for consistent theming
- Mobile-first responsive design with specific breakpoints (768px)
- `object-fit: cover` for proper video scaling, `object-fit: contain` for images
- Centered layouts with flexbox properties
- Reduced heights and appropriate padding for mobile optimization

## Contact Section Features

The contact section ("Let's Connect 🔥") includes:
- **Social Media Integration**: X (Twitter), GitHub, LinkedIn with proper brand icons
- **Copy-to-Clipboard**: One-click copying of social URLs and contact information
- **Visual Feedback**: Icons change to checkmarks when copied successfully
- **Responsive Design**: Cards stack on mobile, grid layout on desktop
- **React Icons**: Uses react-icons for authentic brand logos (RiTwitterXFill for X, FaGithub, FaLinkedin, etc.)

### Social Data Structure
Each social link includes:
- Platform name and handle display
- Full URL for copying (except email/phone)
- React icon component
- Click behavior (new tab for socials, direct action for email/phone)

## Development Best Practices

- Always run `npm run type-check` before committing
- Use `import.meta.env` for Vite environment variables (not `process.env`)
- Maintain 16:9 aspect ratio for video containers
- Use semantic HTML and proper accessibility
- Keep components focused and single-responsibility
- Extract reusable logic into custom hooks when appropriate
- Use react-icons for consistent iconography across the site
- Optimize for mobile with reduced heights and appropriate spacing
- Test responsive behavior across different screen sizes