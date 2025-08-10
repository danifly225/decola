# Overview

Decola Africa is a modern React web application built with Express.js backend, showcasing African terracotta artisanal products. The application serves as a digital storefront for a company specializing in handcrafted terracotta decorative items including claustras (decorative screens), washbasins, and decorative accessories. The site features a professional showcase of products with multi-page navigation, contact form functionality, and gallery displays.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses a modern React SPA (Single Page Application) architecture with TypeScript:
- **React 18** with functional components and hooks
- **Wouter** for client-side routing instead of React Router for lightweight navigation
- **TanStack React Query** for server state management and API calls
- **shadcn/ui components** built on Radix UI primitives for consistent design system
- **Tailwind CSS** for styling with custom color palette reflecting African earth tones
- **Vite** as the build tool and development server

The frontend follows a component-based architecture with:
- Reusable UI components in `/components/ui/`
- Page components in `/pages/`
- Shared business logic components in `/components/`
- Custom hooks for state management

## Backend Architecture
Simple Express.js REST API server:
- **Express.js** with TypeScript for the server framework
- RESTful API endpoints for contact form submission
- In-memory storage implementation with interface for future database integration
- Zod schema validation for API requests
- Error handling middleware for consistent error responses

## Styling System
The application implements a comprehensive design system:
- Custom color palette inspired by African terracotta and earth tones
- CSS variables for theme consistency
- Responsive design with mobile-first approach
- Custom animations and hover effects
- Typography using Inter and Poppins fonts

## Routing Strategy
Client-side routing using Wouter with the following pages:
- Home (`/`)
- Products (`/produits`)
- About (`/apropos`)
- Gallery (`/galerie`)
- Contact (`/contact`)
- 404 Not Found fallback

## State Management
- React Query for server state and API caching
- React hooks (useState, useEffect) for local component state
- Toast notifications for user feedback
- Form state management with controlled components

# External Dependencies

## Core Framework Dependencies
- **React 18** - Frontend framework
- **Express.js** - Backend web framework
- **TypeScript** - Type safety across the stack
- **Vite** - Build tool and development server

## UI and Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Headless component primitives for accessibility
- **shadcn/ui** - Pre-built component library
- **Lucide React** - Icon library
- **class-variance-authority** - Utility for component variants

## State Management and Data Fetching
- **TanStack React Query** - Server state management
- **Zod** - Runtime type validation and schema definition

## Routing
- **Wouter** - Minimalist client-side routing

## Database and ORM
- **Drizzle ORM** - TypeScript ORM with PostgreSQL dialect configured
- **@neondatabase/serverless** - Database driver for Neon PostgreSQL
- Database schema defined but currently using in-memory storage

## Development Tools
- **tsx** - TypeScript execution for Node.js
- **esbuild** - Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal** - Development error overlay
- **@replit/vite-plugin-cartographer** - Replit-specific development tooling

## Form Handling
- **React Hook Form** - Form state management
- **@hookform/resolvers** - Form validation resolvers

The application is designed to be easily deployable on Replit with proper environment configuration for database connectivity when needed.