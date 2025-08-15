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
   - Full viewport height sections for each project
   - Centered project title, description, and technology tags
   - Mux video players with pill-based navigation for multiple videos
   - Loading skeletons for placeholder/missing videos
   - No dividers between projects for seamless flow
4. **Contact Section**: Contact information and form
5. **Footer**: Site footer with additional links/info

## Current Projects

1. **Saqr**: Personal AI Agent for work assistance
   - Technologies: AI, Python, React Native Expo
   - Videos: SQL Tool, Super Web Search Tool

2. **Sawt**: No-Cost voice agent proof of concept
   - Technologies: AI, Python, React
   - Videos: Demo, Tutorial

3. **Gathera**: Social Media App
   - Technologies: Node.js, React Native Expo
   - Videos: Overview

## Key Design Principles

- **Video-centric design**: Mux video players with 40px border radius
- **Responsive video sizing**: 80% viewport width, max 600px height, 16:9 aspect ratio
- **Pill-based navigation**: Transparent gray pills for video switching with instant loading
- **Centered content**: All text and elements horizontally centered
- **Clean typography**: Compact tags and well-spaced content
- **Loading states**: Animated gradient skeletons for missing videos
- **Seamless sections**: No dividers between project sections

## File Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── NavLinks.tsx
│   └── ui/
│       ├── AnimatedName.tsx
│       ├── HeroTitle.tsx
│       ├── ScrollIndicator.tsx
│       ├── Demo.tsx
│       ├── Tag.tsx
│       └── VideoSkeleton.tsx
├── data/
│   └── projectsData.ts
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

### Video Component Structure
- **Demo Component**: Handles video switching and loading states
- **VideoSkeleton**: Animated loading state for missing/loading videos
- **Pill Navigation**: Shows below videos when multiple videos exist
- **Preloading**: All videos in a project are rendered but hidden for instant switching

### Video Specifications
- **Aspect Ratio**: 16:9 maintained across all videos and skeletons
- **Sizing**: 80vw width, max-height 600px for consistent display
- **Border Radius**: 40px for rounded corners
- **Loading**: Skeleton shows for placeholder IDs or missing videos

## Component Architecture

### Data Layer
- `projectsData.ts`: Central data store with typed interfaces
- Environment variables for sensitive video IDs
- TypeScript interfaces ensure type safety

### UI Components
- **Tag Component**: Color-coded technology tags with compact styling
- **Demo Component**: Video player with state management and pill navigation
- **VideoSkeleton**: Loading placeholder with gradient animation

### Styling Approach
- CSS custom properties for consistent theming
- Responsive design without hardcoded breakpoints
- `object-fit: cover` for proper video scaling
- Centered layouts with `text-align: center` and `justify-content: center`

## Development Best Practices

- Always run `npm run type-check` before committing
- Use `import.meta.env` for Vite environment variables (not `process.env`)
- Maintain 16:9 aspect ratio for all video containers
- Use semantic HTML and proper accessibility
- Keep components focused and single-responsibility
- Extract reusable logic into custom hooks when appropriate