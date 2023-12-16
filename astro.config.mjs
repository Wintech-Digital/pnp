import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config;

export default defineConfig({ 
  integrations: [
    react(), 
    tailwind(),
  ],
});


// import { fileURLToPath, URL } from 'node:url';
// vite: {
//   "@pages/*": fileURLToPath(new URL('./src/pages', import.meta.url)),
//   "@assets/*": fileURLToPath(new URL('./src/assets', import.meta.url)),
//   "@layout/*": fileURLToPath(new URL('./src/layout', import.meta.url)),
//   "@components/*": fileURLToPath(new URL('./src/components', import.meta.url)),
// }
