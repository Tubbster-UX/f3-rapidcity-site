// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import checker from 'vite-plugin-checker'

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  vite: {
    plugins: [
      checker({
        typescript: true,
      }),
    ],
  }

});