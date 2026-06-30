# Startup Forge

A modern full-stack platform for connecting founders, collaborators, and admins in a startup ecosystem.

## Overview

Startup Forge is a multi-role marketplace built to simplify how early-stage startups discover talent and how collaborators discover meaningful opportunities. The experience spans a polished public website, secure authentication, role-based dashboards, and a REST API that powers startup, opportunity, application, and subscription workflows.

This repository contains both the client application and the backend API:

- Frontend: a Next.js application with a modern, responsive UI and role-aware dashboards.
- Backend: an Express API backed by MongoDB for startups, opportunities, applications, subscriptions, and user management.

## Technology Stack

### Frontend

- Next.js 16 with the App Router
- React 19 for component-driven UI development
- Tailwind CSS 4 for rapid, modern styling
- Better Auth for authentication, sessions, and role-aware access
- Cloudinary integration for startup logo and asset uploads
- Stripe-based checkout flows for subscription and plan upgrades
- React Hook Form, React Toastify, Lucide icons, and React Icons for polished UX

### Backend

- Node.js with Express 5
- MongoDB via the native MongoDB driver
- REST-style route structure with controllers and middleware
- Centralized error handling and request validation helpers
- CORS enabled for secure API communication with the client

## What the Platform Does

### For Founders

- Create and manage startup profiles
- Publish opportunities for collaborators
- Review incoming applications
- Approve or update startup and opportunity states

### For Collaborators

- Browse startups and available opportunities
- Apply to roles or projects
- Track application status over time

### For Admins

- Manage users and their status
- Review pending startups and opportunities
- Moderate platform content and approvals

## Architecture at a Glance

The app is structured as a full-stack product with clear separation between presentation, logic, and data layers:

1. The frontend renders pages, dashboards, auth screens, and marketing content.
2. Client-side actions and API helpers communicate with the backend.
3. The Express server handles business logic and persistence in MongoDB.
4. Authentication, role restrictions, and protected routes ensure the correct experience for each user type.

## Project Structure

```text
startup-forge/        # Next.js frontend
  src/app/             # Pages, layouts, auth routes, dashboards
  src/components/      # Reusable UI + page sections
  src/lib/            # Auth, API helpers, server actions, Stripe setup
  src/proxy.js        # Route protection and redirect logic

sf-server/            # Express + MongoDB backend
  controllers/        # Startup, opportunity, user, application, subscription logic
  routes/             # REST endpoints grouped by domain
  middlewares/        # Auth, error handling, 404 handling
  config/             # MongoDB connection and environment config
```

## Key Features

- Role-based user flows for founders, collaborators, and admins
- Secure authentication with Better Auth and session handling
- Protected dashboards and route-based access control
- Startup and opportunity discovery pages
- Application submission and tracking
- Subscription and plan management flows
- Cloudinary image upload support
- Modern theme support with light/dark switching

## Frontend Highlights

The frontend is built around Next.js App Router and a modular component structure. Core UI areas include:

- Public marketing pages such as home, about, pricing, opportunities, and startups
- Authentication pages for sign in and sign up
- Dashboard experiences tailored to each role
- Reusable UI components for cards, actions, navigation, and badges
- API wrappers and server actions for create, update, and delete flows

## Backend Highlights

The backend is a lightweight, API-first service designed for flexibility and easy extension. It currently supports:

- User retrieval and status updates
- Startup creation, approval, and lookup
- Opportunity creation, update, and deletion
- Application management
- Subscription/session persistence
- Plan-related operations

## API Surface

The backend exposes REST endpoints under the following domains:

- `/api/user` and `/api/users`
- `/api/startup` and `/api/startups`
- `/api/opportunity` and `/api/opportunities`
- `/api/application` and `/api/applications`
- `/api/subscription`
- `/api/plan`

These routes are used by the frontend to power dashboards, discovery pages, and moderation tools.

## Environment Variables

### Frontend

Create environment variables in the frontend app for auth, API access, and upload support:

- `NEXT_PUBLIC_API_URL`
- `BETTER_AUTH_BASE`
- `BETTER_AUTH_SECRET`
- `MONGODB_URI`
- `MONGODB_DB`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

### Backend

Create environment variables in the backend app for database and server configuration:

- `PORT`
- `DB_URI`
- `DB_NAME`
- `USERS_COLLECTION`
- `STARTUPS_COLLECTION`
- `OPPORTUNITIES_COLLECTION`
- `APPLICATIONS_COLLECTION`
- `SESSION_COLLECTION`
- `SUBSCRIPTION_COLLECTION`
- `PLAN_COLLECTION`
- `CLIENT_ORIGINS`
- `ADMIN_EMAIL`

## Getting Started

### Prerequisites

- Node.js 20+
- npm
- A running MongoDB instance
- Cloudinary credentials (for image uploads)
- Google OAuth credentials (optional but recommended for social sign-in)

### 1. Install dependencies

```bash
cd startup-forge
npm install

cd ../sf-server
npm install
```

### 2. Start the backend

```bash
cd sf-server
npm run dev
```

The backend will start on the port defined by `PORT` (default: 5000).

### 3. Start the frontend

```bash
cd ../startup-forge
npm run dev
```

Open the client at `http://localhost:3000`.

## Available Scripts

### Frontend

- `npm run dev` — start the Next.js development server
- `npm run build` — build the production app
- `npm run start` — start the production build
- `npm run lint` — run ESLint

### Backend

- `npm run dev` — start the server in watch mode
- `npm run start` — start the server normally

## Development Notes

- The frontend uses route protection and server-side session logic to ensure the correct experience for each role.
- The backend uses a simple controller-based structure that is easy to extend as the platform grows.
- The project is designed to be both a showcase application and a solid foundation for a real startup collaboration product.

## Why This Project Matters

Startup Forge demonstrates how a modern SaaS-style product can combine:

- clean user experience,
- secure role-based auth,
- content moderation workflows,
- startup discovery features,
- and a scalable API foundation.

It is a strong example of a multi-role full-stack application with modern tooling and architecture.
