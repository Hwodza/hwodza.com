// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://odza.dev',
  base: '/',
  vite: {
    build: {
      minify: true
    }
  },
  adapter: cloudflare({
    mode: 'directory',
    platformProxy: {
      enabled: true,
    }
  })
});