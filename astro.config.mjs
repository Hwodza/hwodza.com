// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

const isDev = process.env.NODE_ENV === 'development';

// https://astro.build/config
export default defineConfig({
  adapter: isDev ? undefined : cloudflare()
});