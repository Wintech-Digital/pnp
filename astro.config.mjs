import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config;

export default defineConfig({
  prefetch: true,
  integrations: [react(), tailwind()],
  image: {
    domains: [
      'http://localhost:1337',
      'https://strapi.wtech.co',
    ],
    remotePatterns: [
      { protocol: "http" },
      { protocol: "https" },
    ],
  },
});