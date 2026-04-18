# Creating Future Ready Organizations (CFRO)

Single-page marketing site for **Theory U India** — the **Creating Future-Ready Organizations** workshop (Management Innovations). Built with **Vite**, **React 19**, **Tailwind CSS v4**, and **Motion**.

**Primary domain:** [theoryuindia.com](https://theoryuindia.com) (configure this project in Vercel and point DNS to the deployment).

## Run locally

**Prerequisites:** Node.js 20+

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run preview
```

Output is in `dist/` (suitable for Vercel, Netlify, or any static host).

## Vercel and domains

1. Import this repo into a Vercel project (framework: Vite; output: `dist` is auto-detected).
2. Add **theoryuindia.com** (apex and `www`) in **Project → Settings → Domains**, set the primary hostname, and complete DNS as instructed.
3. Optional consolidation: add **reinventorganizations.com** and **www.reinventorganizations.com** to the **same** project. [`vercel.json`](vercel.json) then issues **308** redirects to `https://theoryuindia.com` for those hosts. If the old domain stays on a different project, configure the redirect there instead.

## Edit content

Copy `.env.example` to `.env.local` if you add env-based config later. Program copy, contact details, and image URL are in **`src/App.tsx`** in the `CONFIG` object at the top of the file.

## Repository layout

- `src/App.tsx` — page content and layout
- `src/index.css` — Tailwind entry and theme tokens
- `index.html` — document title and meta tags
