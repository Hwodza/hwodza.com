// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.odza.dev',
  base: '/',
  vite: {
    build: {
      minify: true
    }
  },
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    }
  })
});