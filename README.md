# IDPH-Frontend Project Setup Guide

This repository contains the IDPH-Climate project, built with React and TypeScript. This guide will walk you through the process of setting up, navigating, and running the project.

## Prerequisites

Before you begin, ensure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (version 16.x or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)
- Git (for cloning the repository)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/tanyaasinghts/idph-frontend
cd idph-frontend
```

### 2. Install Dependencies

Using npm:

```bash
npm install
```

Or if you prefer using pnpm (recommended for this project):

```bash
pnpm install
```

## Project Structure

Here's a brief overview of the key directories and files in this project:

```
idph-frontend/
├── node_modules/       # Dependencies
├── public/             # Static files
├── src/                # Source code
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # React components
│   │   ├── shared/     # Shared components
│   │   │   └── header.tsx # Header component
│   │   └── ui/         # UI components
│   │       ├── button.tsx
│   │       ├── select.tsx
│   │       ├── sheet.tsx
│   │       ├── map-page.tsx
│   │       ├── map-with-details.tsx
│   │       ├── overview-details.tsx
│   │       └── sidebar-content.tsx
│   ├── lib/            # Helper functions and utilities
│   ├── App.tsx         # Main App component
│   ├── index.css       # Global styles
│   └── main.tsx        # Entry point
├── .gitignore          # Git ignore file
├── components.json     # Component configurations
├── eslint.config.js    # ESLint configuration
├── index.html          # HTML entry point
├── package-lock.json   # Dependency lock file
├── package.json        # Project dependencies and scripts
├── pnpm-lock.yaml      # PNPM lock file
├── README.md           # This file
├── tsconfig.app.json   # TypeScript config for app
├── tsconfig.json       # Main TypeScript config
├── tsconfig.node.json  # TypeScript config for Node
└── vite-env.d.ts       # Vite environment types
```

## Available Scripts

In the project directory, you can run:

### Start Development Server

```bash
npm run dev
```

or

```bash
pnpm dev
```

This runs the app in development mode using Vite. Open [http://localhost:5173](http://localhost:5173) to view it in your browser. The page will reload if you make edits to the code.

### Build for Production

```bash
npm run build
```

or

```bash
pnpm build
```

This builds the app for production to the `dist` folder using Vite. It correctly bundles React in production mode and optimizes the build for the best performance.

## Navigation

- The main application logic starts in `src/App.tsx`
- The entry point for the application is in `src/main.tsx`
- Components are organized in the `src/components` directory:
  - `src/components/shared` contains shared components like headers
  - `src/components/ui` contains UI components like buttons, selects, and map components
- Helper functions and utilities are in the `src/lib` directory
- Static assets are stored in the `src/assets` directory

## Troubleshooting

### Common Issues

- **Node modules issues**: Try deleting the `node_modules` folder and `pnpm-lock.yaml` file, then run `pnpm install` again
- **Port already in use**: By default, Vite uses port 5173. You can change this in the Vite configuration
- **TypeScript errors**: Make sure your TypeScript versions match the requirements in `package.json`
- **Dependencies not found**: Make sure you've run `pnpm install` after cloning
