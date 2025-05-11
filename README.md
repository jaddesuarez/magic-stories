# Magic Stories

Magic Stories is a dynamic web application that lets users explore and read interactive stories. Built with modern technologies including React, TypeScript, and Vite, it features a responsive UI with custom book covers, progress tracking, and a user-friendly navigation system. The app includes user authentication, a book catalog, and an immersive reading experience with animated page transitions.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/jaddesuarez/magic-stories.git
cd magic-stories
```

2. Install dependencies:

```bash
npm install
```

## Running the Application

### Development Mode

1. Start the backend server (JSON Server):

```bash
npm run server
```

This will start the backend server on port 3001.

2. In a new terminal, start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Testing

The project uses Vitest for testing.

Run tests in watch mode:

```bash
npm test
```

2. Run tests with coverage:

```bash
npm run test:coverage
```

3. Run tests with UI:

```bash
npm run test:ui
```

## Tech Stack

- React
- TypeScript
- Vite
- TailwindCSS
- React Query
- React Router
- Vitest for testing
- JSON Server for backend
- ESLint for linting

## Project Structure

- `/src`
  - `/assets` - Images and other static assets
  - `/components` - Reusable React components
  - `/lib`
    - `/consts` - Constants and configuration
    - `/hooks` - Custom React hooks
    - `/types` - TypeScript type definitions
    - `/utils` - Utility functions
  - `/pages` - Page components
  - `/routes` - Route configuration and components
  - `/services` - API service functions and data fetching
  - `/test` - Test utilities and mock data
- `/public`
  - `favicon.ico`
- `db.json` - JSON Server database with books and users data
- `vite.config.ts` - Vite build and dev server configuration
- `tsconfig.json` - TypeScript compiler configuration
- `vitest.config.ts` - Vitest testing configuration
