# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website for Younes Benketira, an AI Full Stack Engineer. The site is built with React, Vite, and TypeScript, inspired by the design of diabrowser.com.

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

The website follows a single-page layout with the following sections in order:

1. **Header**: Glossy, sticky navigation bar
2. **Hero Section**: 
   - Large, stylized name display
   - Job title "AI Full Stack Engineer" below name
3. **Projects Section**: 
   - Each project takes full viewport height/width
   - Components: project title, subtitle, video demo with rounded corners
4. **Contact Section**: Contact information and form
5. **Footer**: Site footer with additional links/info

## Key Design Principles

- **Full-height sections**: Each project section uses full viewport dimensions
- **Video-centric**: Project demos are prominently featured with rounded corners
- **Glossy header**: Sticky navigation with glossy/glass effect
- **Typography focus**: Emphasis on beautiful font choices, especially for the hero name
- **diabrowser.com inspiration**: Visual design and layout patterns based on this reference

## File Structure Expectations

- Components should be organized by section (Hero, Projects, Contact, etc.)
- Video assets for project demos should be optimized for web
- Styling should support glossy/glass morphism effects for header
- Responsive design for all viewport sizes
- All components should be properly typed with TypeScript

## Technology Stack

- **Framework**: React with Vite
- **Language**: TypeScript for type safety
- **Styling**: CSS/SCSS or styled-components (TBD based on implementation)
- **Build Tool**: Vite for fast development and optimized builds

## Version Requirements

Always use the latest stable versions of core dependencies:

### Core Dependencies
- **React**: ^19.1.1 (Latest stable - December 2024)
  - [React 19 Release Notes](https://react.dev/blog/2024/12/05/react-19)
  - [React 19 Upgrade Guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide)
  - Key features: Actions, useActionState, useOptimistic, useFormStatus hooks, Server Components
- **React DOM**: ^19.1.1
  - [React DOM Documentation](https://react.dev/reference/react-dom)
- **TypeScript**: ^5.9.2 (Latest stable)
  - [TypeScript 5.9 Release Notes](https://devblogs.microsoft.com/typescript/announcing-typescript-5-9/)
  - [TypeScript Documentation](https://www.typescriptlang.org/docs/)
  - Key features: import defer, --module node20, expandable hovers, performance optimizations
- **Vite**: ^7.1.2 (Latest stable)
  - [Vite Documentation](https://vite.dev/)
  - [Vite GitHub Releases](https://github.com/vitejs/vite/releases)

### Development Dependencies
- **@vitejs/plugin-react**: ^5.0.0
  - [Plugin Documentation](https://github.com/vitejs/vite-plugin-react)
- **ESLint**: ^9.17.0
  - [ESLint v9 Migration Guide](https://eslint.org/docs/latest/use/migrate-to-9.0.0)
- **@typescript-eslint**: ^8.18.1
  - [TypeScript ESLint Documentation](https://typescript-eslint.io/)

## React 19 Specific Guidelines

When working with React 19, leverage these new features:

### Actions
- Use async functions in transitions for automatic pending state management
- Implement server actions with `"use server"` directive
- Handle form submissions with built-in error handling

### New Hooks
- **useActionState**: Manage action states (pending, success, errors)
- **useOptimistic**: Implement optimistic UI updates
- **useFormStatus**: Track form submission status

### Server Components
- Use Server Components for improved performance
- Implement server actions for data mutations
- Leverage automatic code splitting

## Development Best Practices

- Always run `npm run type-check` before committing
- Use React 19's new `ref` as prop feature for cleaner component APIs
- Leverage TypeScript 5.9's `import defer` for performance optimization
- Follow Vite 7's latest build optimizations
- Use ESLint 9's flat config format (eslint.config.js)