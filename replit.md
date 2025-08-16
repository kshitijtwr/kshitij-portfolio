# Overview

This is a professional portfolio website built as a full-stack React application showcasing a mobile app developer's career, skills, and achievements. The application features a modern single-page design with sections for about, experience, projects, education, and contact functionality. It's built with React Native and mobile development expertise in mind, targeting enterprise clients and showcasing projects like YES BANK's mobile banking application.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with a simple home page and 404 fallback
- **UI Framework**: Radix UI primitives with shadcn/ui components for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack React Query for server state management and API interactions
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

## Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **API Design**: RESTful API endpoints with JSON request/response format
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Validation**: Zod schemas for request validation and type inference
- **Error Handling**: Centralized error handling middleware with structured error responses

## Development Infrastructure
- **Build System**: Vite for fast development and optimized production builds
- **Development Server**: Hot module replacement and middleware integration for seamless development
- **TypeScript**: Strict type checking across client, server, and shared modules
- **Code Organization**: Monorepo structure with shared schema definitions between frontend and backend

## Database Strategy
- **Current**: MemStorage class providing in-memory data persistence for development
- **Schema**: Drizzle ORM schema definitions ready for PostgreSQL integration
- **Migration Support**: Drizzle Kit configured for database migrations when transitioning to persistent storage
- **Data Models**: Contact message schema with validation for form submissions

## Contact Form System
- **Frontend**: React Hook Form with real-time validation and user feedback
- **Backend**: RESTful endpoint for message submission with validation
- **Storage**: Abstracted storage interface allowing easy transition from memory to database
- **User Experience**: Toast notifications for success/error feedback with loading states

# External Dependencies

## Database & ORM
- **Drizzle ORM**: Modern TypeScript ORM configured for PostgreSQL with schema definitions
- **Neon Database**: Serverless PostgreSQL integration for production database needs

## UI & Design System
- **Radix UI**: Comprehensive set of low-level UI primitives for accessibility and customization
- **shadcn/ui**: Pre-built component library built on Radix UI with consistent design tokens
- **Tailwind CSS**: Utility-first CSS framework with custom theme configuration
- **Lucide React**: Icon library for consistent iconography throughout the application

## Development Tools
- **Vite**: Build tool and development server with React plugin and runtime error overlay
- **TypeScript**: Static type checking and enhanced developer experience
- **React Query**: Data fetching and caching library for API state management
- **React Hook Form**: Form library with validation and error handling capabilities

## External Services Integration
- **Email Services**: Ready for integration with email providers for contact form submissions
- **Analytics**: Prepared for analytics service integration for user behavior tracking
- **CDN**: Font loading from Google Fonts for typography optimization