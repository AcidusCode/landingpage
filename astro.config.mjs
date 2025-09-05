// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://aciduslabs.com/",
  integrations: [preact(), sitemap()],  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
