import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://daniyaalbeg.com",
  integrations: [mdx(), sitemap(), react(), partytown()],
  vite: {
    plugins: [tailwindcss()],
  },
});
