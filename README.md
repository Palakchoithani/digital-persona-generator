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