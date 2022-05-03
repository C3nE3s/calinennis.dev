import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [react(), preact(), sitemap()],
  site: 'https://calinennis.dev',
});
