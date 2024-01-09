import path from 'path';
import { fileURLToPath } from 'url';

// import sitemap from '@astrojs/sitemap'; //integrations: [ sitemap()];  
import react from "@astrojs/react";
import tailwind from '@astrojs/tailwind';
import { defineConfig, squooshImageService } from 'astro/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: 'static',

  integrations: [
    react(),
    tailwind(),
  ],

  image: {
    domains: [
      'http://localhost:1337',
      'https://strapi.wtech.co',
    ],
    remotePatterns: [
      { protocol: "http" },
      { protocol: "https" },
    ],
    service: squooshImageService(),
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
