import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap(), tailwind()],
  site: 'https://calinennis.dev',
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'rose-pine-dawn',
    },
    rehypePlugins: ['rehype-external-links'],
  },
});
