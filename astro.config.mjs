// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://aciduslabs.com/",
  integrations: [preact(), sitemap({
      changefreq: 'monthly', // opcional
      lastmod: true          // ✅ activa lastmod
    })],

  vite: {
    plugins: [tailwindcss()]
  }
});