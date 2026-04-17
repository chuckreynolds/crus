import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
});
