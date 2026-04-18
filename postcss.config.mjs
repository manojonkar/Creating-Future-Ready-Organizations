/**
 * Local PostCSS config stops Vite from walking up to `web/postcss.config.mjs`
 * (Tailwind v3 for the Next.js app), which breaks this Vite + Tailwind v4 project.
 */
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [],
};

export default config;
