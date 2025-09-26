// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://aciduslabs.com/",
  integrations: [sitemap()],
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
