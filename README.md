# Startup Forge

## Project Summary

`startup-forge` is a Next.js client-side application for a startup collaboration marketplace. It delivers a public marketing site and authenticated dashboards for three user roles:

- `founder` — create startups, publish opportunities, manage applications.
- `collaborator` — browse startup opportunities, apply, and track application status.
- `admin` — manage users, startups, and opportunities with approval workflows.

The project focuses on user flow, UI components, authentication, access control, and integration with a backend API.

## What This Project Contains

This repository contains the complete client application only. It includes:

- Public pages: home, about, pricing, opportunities, startup details.
- Authentication pages: sign in, sign up.
- Role-based dashboard routes using Next.js App Router.
- API integration wrappers for REST requests to a backend service.
- Cloudinary image upload support for startup/logo assets.
- Theme provider and dark mode support.

## Technology Stack

- Next.js `16.2.9`
- React `19.2.4`
- Tailwind CSS `4`
- Better Auth (`better-auth`, `@better-auth/mongo-adapter`)
- Cloudinary `2.10.0`
- MongoDB driver `7.3.0`
- React Toastify `11.1.0`
- React Hook Form
- ESLint

## Key User Flows

### Public Discovery

- Landing page with hero, trust metrics, feature highlights, and testimonials.
- `/about` page describing the platform mission.
- `/pricing` page for product plans.
- `/opportunities` page showing all available roles.
- `/startups` listing plus `/startups/[id]` for startup details.

### Authentication

- `Sign In` page with email/password and Google social login support.
- `Sign Up` page with role selection (`founder` or `collaborator`).
- Role and session creation created through Better Auth client.

### Founder Dashboard

- Create a startup profile once per founder.
- Add and manage startup opportunities.
- Review applications sent by collaborators.
- View dashboard metrics for active opportunities, pending/approved applications, and startup health.

### Collaborator Dashboard

- Track personal applications.
- Cancel applications when needed.
- View application status summary: pending, approved, rejected.

### Admin Dashboard

- View all users and manage their status.
- Review all startups and approve/reject pending startups.
- Inspect all opportunities and startup activity.

## Core Architecture

### Routing and Layout

- `src/app/layout.jsx` — root layout, global styling, theme provider, navigation, and footer.
- `src/app/(main)/page.jsx` — main landing page built from modular homepage blocks.
- `src/app/auth/signin/page.jsx` — sign-in page.
- `src/app/auth/signup/page.jsx` — sign-up page.
- `src/app/(main)/(pages)/opportunities/page.jsx` — public opportunity browse page.
- `src/app/(main)/(pages)/startups/[id]/page.jsx` — startup details page.

### Middleware & Access Control

- `src/proxy.js` — middleware that:
  - redirects authenticated users away from sign-in / sign-up pages,
  - prevents unauthenticated access to `/dashboard`,
  - enforces role-specific access on `/dashboard/admin`, `/dashboard/founder`, and `/dashboard/collaborator`,
  - prevents founders from creating more than one startup.

### Authentication & Session

- `src/lib/auth.js` — Better Auth server configuration with MongoDB adapter and user fields:
  - `role`, `plan`, and `profileImage`.
- `src/lib/auth-client.js` — Better Auth client wrapper for sign in, sign up, sign out, and session hooks.
- `src/lib/core/session.js` — server utilities to read session and bearer token from request headers.

### API Client & Data Fetching

- `src/lib/core/server.js` — request helpers used throughout the app:
  - `serverFetch()` for public API requests,
  - `protectedFetch()` for authenticated API requests,
  - `serverMutation()` for POST/PATCH operations,
  - `serverDelete()` for DELETE operations.
- `src/lib/api/getData.js` — shared front-end API wrappers for fetching collections and individual records.

### Client-side Actions

- `src/lib/actions/createStartup.js` — create a founder startup after session validation.
- `src/lib/actions/createOpportunities.js` — create founder opportunities.
- `src/lib/actions/createApplications.js` — submit collaborator applications.
- `src/lib/actions/patchAction.js` — update records and revalidate dashboard paths.
- `src/lib/actions/deleteAction.js` — delete startup/opportunity records.

### Image Upload

- `src/app/api/upload-logo/route.js` — Next.js API route that uploads a logo file to Cloudinary and returns the secure URL.

### Better Auth Endpoints

- `src/app/api/auth/[...all]/route.js` — Better Auth next-js handler for auth operations.

## Folder Structure

- `src/app/` — App Router pages, layouts, and route-specific logic.
- `src/components/` — reusable UI components, page sections, and dashboard widgets.
- `src/lib/` — auth, API utilities, session helpers, and action handlers.
- `src/proxy.js` — route protection middleware.

## Important Files and Their Purpose

- `src/app/layout.jsx` — root layout, global theme wrapping, and metadata.
- `src/proxy.js` — essential access control for all protected routes.
- `src/lib/auth.js` — authentication provider and database adapter.
- `src/lib/auth-client.js` — auth client for user login/signup.
- `src/lib/core/server.js` — centralized backend request handling.
- `src/lib/core/session.js` — session retrieval and role enforcement.
- `src/lib/api/getData.js` — reusable API fetch helpers.
- `src/lib/actions/` — business logic wrappers for create/update/delete operations.
- `src/app/api/upload-logo/route.js` — Cloudinary upload route.
- `src/app/api/auth/[...all]/route.js` — auth routing endpoint.
- `src/components/prividers/TProvider.jsx` — theme provider for dark/light mode.
- `src/components/shared/NavBar.jsx` — site header and navigation.
- `src/components/shared/Footer.jsx` — footer used across all pages.

## Environment Variables

The client requires these env variables to function correctly:

- `NEXT_PUBLIC_API_URL` — backend API base URL.
- `BETTER_AUTH_BASE` — Better Auth service base URL.
- `BETTER_AUTH_SECRET` — Better Auth secret key.
- `MONGODB_URI` — MongoDB connection string for auth.
- `MONGODB_DB` — MongoDB database name for auth.
- `GOOGLE_CLIENT_ID` — Google OAuth client ID.
- `GOOGLE_CLIENT_SECRET` — Google OAuth client secret.
- `CLOUDINARY_CLOUD_NAME` — Cloudinary account name.
- `CLOUDINARY_API_KEY` — Cloudinary API key.
- `CLOUDINARY_API_SECRET` — Cloudinary API secret.

## Running the Project

Install dependencies and start the client:

```bash
cd startup-forge
npm install
npm run dev
```

Available scripts:

- `npm run dev` — start the Next.js development server.
- `npm run build` — build the production app.
- `npm run start` — start the built app.
- `npm run lint` — lint the project with ESLint.

## Notes

- This README describes the client project only; backend API implementation is not included here.
- The app is designed to work with a backend API served at `NEXT_PUBLIC_API_URL` plus Better Auth authentication services.
- `src/lib/mongodb.js` currently contains commented example code and is not actively used.
- User roles are enforced both client-side and server-side through middleware and session inspection.

## What Makes This Project Unique

Startup Forge is built to be a full-featured client application with:

- multi-role access control,
- founder startup publishing workflows,
- collaborator application tracking,
- admin approval dashboards,
- Cloudinary asset uploads,
- theme switching and modern UI patterns.

The app is structured so that anyone reading the project can understand the route flows, role functionality, and where to modify authentication, API calls, or UI components.
