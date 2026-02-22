// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  base: '/',
  vite: {
    build: {
      minify: true
    }
  },
  adapter: cloudflare({
    mode: 'directory'
  })
});