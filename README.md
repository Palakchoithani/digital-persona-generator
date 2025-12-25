<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# Digital Persona Generator

Generate a palette, moodboard, avatar, short bio, IG highlight icons, and a single-page personal site from 5–6 answers.

## Features (Planned)
- Generate a custom color palette
- Create an aesthetic moodboard (placeholder / mock)
- Generate avatar using DiceBear
- Auto-generate a short bio from user answers
- Generate Instagram highlight icons
- Generate a minimal personal website layout

## Quick start (development)

1. Fork and clone:
```bash
git clone https://github.com/<your-username>/digital-persona.git
cd digital-persona
```
2. Install dependencies (frontend):
```bash
cd web
npm install
npm run dev
```

3. Open `http://localhost:5173`.

## Project Structure

/(root)  
   &nbsp; README.md
   &nbsp; CONTRIBUTING.md
   &nbsp; LICENSE
   &nbsp; .gitignore
   &nbsp; /web
       &nbsp; &nbsp; package.json
       &nbsp; &nbsp; src/
   &nbsp; /api
        &nbsp; &nbsp; generate.js
   &nbsp; /utils
   &nbsp; .github/
        &nbsp; &nbsp; ISSUE_TEMPLATE/
        &nbsp; &nbsp; PULL_REQUEST_TEMPLATE.md

## How to contribute

See CONTRIBUTING.md for a step-by-step guide for new contributors.

## Tech stack (recommended)

- Frontend: React + Vite + TailwindCSS (optional)
- API: Node (serverless function stub in /api)
- Avatar: DiceBear (MVP)
>>>>>>> 33c9f7d62211c4a7ae0dcae018c577618c477775
