// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://oji-cabs.github.io",
  redirects: {
    "/meterraja-privacy-policy/": "/policies/meter_raja/",
  },
});
