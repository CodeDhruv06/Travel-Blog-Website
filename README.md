# Travel Blog Website

A modern, responsive travel diary built with React, Vite, and Tailwind CSS. It includes pages for Home, Destinations, Gallery, and Contact, plus small UI touches like animated cards and a polished navbar.

## Features
- Fast Vite dev/build with React 18
- Tailwind CSS styling with pleasant gradients and dark navbar option
- Pages: Home, Destinations, Gallery, Contact (via React Router)
- Accessible, responsive layout (table replaced with div-based grid in Destinations)
- Clean components (`Navbar`, `AnimatedCard`, etc.)

## Tech stack
- React 18
- Vite 5
- Tailwind CSS 3
- React Router

## Getting started

Prerequisites: Node.js 18+ and npm.

```powershell
# from project root
npm install
npm run dev
```

Open the printed local URL (typically http://localhost:5173).

### Build for production
```powershell
npm run build
npm run preview
```

## Project structure
```
.
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── AnimatedCard.jsx
│   └── pages/
│       ├── Home.jsx
│       ├── Destinations.jsx
│       ├── Gallery.jsx
│       └── Contact.jsx
```

## Styling notes
- Tailwind is configured in `tailwind.config.js` and used via `src/index.css`.
- The navbar supports both light and dark tones; adjust classes in `Navbar.jsx` to match your theme.

## Deployment options

### Vercel (recommended)
- Import the GitHub repo in Vercel and deploy. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.

### Netlify
- New site from Git -> pick this repo.
- Build command: `npm run build`, Publish directory: `dist`.

### GitHub Pages
If deploying to `https://<username>.github.io/Travel-Blog-Website/`, set the base path in `vite.config.js`:

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // IMPORTANT for GitHub Pages project sites
  base: '/Travel-Blog-Website/',
})
```

Then publish `dist/` using your preferred method (e.g., GitHub Actions, or `gh-pages`).

Using `gh-pages` manually:
```powershell
npm install --save-dev gh-pages
# add scripts to package.json
#   "predeploy": "npm run build",
#   "deploy": "gh-pages -d dist"

npm run deploy
```

## Troubleshooting
- If Tailwind classes don’t apply, ensure `src/**/*.{js,jsx,ts,tsx}` is included in `tailwind.config.js` content.
- If GitHub Pages shows a 404 on refresh, ensure `base` is set as above and that React Router uses `BrowserRouter` with proper base path or `HashRouter` if preferred.

## License
Add your preferred license (e.g., MIT) or keep private.

---
Created with Vite + React + Tailwind. Enjoy exploring and sharing your travels!