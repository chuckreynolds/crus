import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://chuckreynolds.com',
  compressHTML: true,

  build: {
    inlineStylesheets: 'always',
  },

  image: {
    responsiveStyles: true,
  },

  integrations: [sitemap()],
  adapter: cloudflare(),
});