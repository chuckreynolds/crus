import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://chuckreynolds.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
  image: {
    responsiveStyles: true,
  },
});
