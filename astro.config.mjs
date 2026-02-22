// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

const isDev = process.env.NODE_ENV === 'development';

// https://astro.build/config
export default defineConfig({
  base: '/',
  vite: {
    build: {
      minify: true
    }
  },
  adapter: isDev ? undefined : cloudflare({
    mode: 'directory'
  })
});