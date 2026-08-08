# Frontend Installation Guide

This guide provides concise instructions for setting up the frontend dependencies for the 3MP client using **TypeScript** and **ESLint**.

## Prerequisites
- Node.js (v18 or later)
- npm or yarn

## Installation Steps

1. **Navigate to the client directory**
   ```bash
   cd /Users/ianvaleta/Repos/3MP/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install development dependencies**
   ```bash
   npm install --save-dev
   ```

## Development Setup

- **Start the development server**
  ```bash
  npm run dev
  ```
  This will launch the app in development mode with hot-reloading using `ts-node`.

- **Run tests**
  ```bash
  npm test
  ```
  To run tests in watch mode:
  ```bash
  npm run test:watch
  ```

- **Lint your code**
  ```bash
  npm run lint
  ```
  To automatically fix linting issues:
  ```bash
  npm run lint:fix
  ```

## Key Dependencies
- **React**: Frontend library for building user interfaces.
- **React Router**: Client-side routing for navigation.
- **TypeScript**: Static type-checking for JavaScript.
- **ESLint**: Linting tool for code quality.
- **Jest**: Testing framework.
- **Babel**: JavaScript transpiler for compatibility.

## Folder Structure
- `src/`: Source code for the frontend (TypeScript files with `.ts`/`.tsx` extensions).
- `public/`: Static assets (HTML, images, etc.).
- `tests/`: Test files (add as needed).

## Troubleshooting
- If you encounter dependency issues, run:
  ```bash
  npm audit fix
  ```
  For critical vulnerabilities, use:
  ```bash
  npm audit fix --force
  ```

- Ensure `tsconfig.json` is properly configured for TypeScript.
- If `ts-node` fails, verify it is installed globally or as a dev dependency.