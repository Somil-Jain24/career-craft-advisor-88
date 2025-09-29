# Career Craft Advisor

AI-powered career guidance app built with React, TypeScript, Tailwind CSS, and shadcn UI.

## Features

- Login with local session, protected routes (`/dashboard`, `/quiz`, `/chat`, `/colleges`, `/scholarships`, `/about`, `/contact`)
- Personalized dashboard with user name
- Career quiz and recommendations
- Gemini-powered AI chatbot (`/chat`)
- Service grid section with animations (framer-motion)
- Colorful pages for Colleges, Scholarships, and About
- Contact form posting to `/api/contact`

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS
- shadcn/ui component architecture (`src/components/ui`)
- framer-motion

## Getting Started

Prerequisites: Node.js and npm

```sh
npm i

# Environment variables
cp .env.example .env  # or create .env
# Add your key
VITE_GEMINI_API_KEY=YOUR_GEMINI_KEY

npm run dev
```

Open http://localhost:8080 (as configured in `vite.config.ts`).

## Project Structure

- `src/components/ui/*`: reusable UI components (shadcn style)
- `src/components/*`: app-level components
- `src/pages/*`: route pages
- `src/context/*`: React context providers (auth)
- `src/server/api.ts`: dev middleware handlers (`/api/chat`, `/api/contact`)

## Contact Email

User queries are sent via the contact page. Support email: `somiljain024@gmail.com`.

## Deployment

Build and host as a standard Vite React app on your platform of choice (Vercel, Netlify, etc.). Ensure `VITE_GEMINI_API_KEY` is set.
