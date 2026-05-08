# Agent Usage Guide

## Purpose
This project is a mobile-first React web app built with Vite and Tailwind CSS. The app is highly configurable through `src/components/config.js`, and it is intended to be deployed as a static frontend.

## Useful Commands
- `npm install` — install dependencies
- `npm run dev` — start Vite development server
- `npm run build` — build production bundle
- `npm run lint` — run ESLint on the repository

## Key Project Structure
- `src/App.jsx` — React Router routes for the app pages
- `src/components/` — main page components and UI building blocks
- `src/components/config.js` — primary customization file for content, copy, paths, and gallery data
- `src/assets/` — image assets used by the app
- `src/assets/music/` — album cover images used by the music recap page
- `src/index.css` / `tailwind.config.js` — global styles and Tailwind configuration

## Project Conventions
- Content and personalization are controlled mainly from `src/components/config.js`. Most updates to text, gallery entries, and page labels should be made there first.
- Routing is client-side only. The app uses `react-router-dom` and defines paths such as `/`, `/question`, `/timer`, `/recap`, `/recap/message`, `/recap/music`, `/recap/pictures`, `/letter`, and `/closing`.
- The app is purely frontend; there is no backend or API integration in this repository.
- Asset naming matters:
  - `MessageImage1.png`, `MessageImage2.png`, ... for message recap images
  - `Picture1.png`, `Picture2.png`, ... for picture recap images
  - Numeric files in `src/assets/music/` map to the music gallery entries in `config.js`
- Use the existing `README.md` for user-facing customization and image guidance.

## Notes for AI Agents
- Prefer editing `src/components/config.js` for copy/content changes.
- Preserve the current route structure and path values unless updating the app flow intentionally.
- Do not assume tests exist; verify changes by running `npm run dev` or `npm run build`.
- Keep Tailwind class changes localized, since the UI is mobile-first and relies on responsive styling.

## Documentation Link
- See `README.md` for usage instructions and asset conventions.
