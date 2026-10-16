// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cupiedanny.com',
  // Astro 7 は、タグの間の空白（インライン要素の間の半角スペース）を消す。文字がくっつくので、空白をそのまま出す（japoneson と同じ、2026-10-13）
  compressHTML: false,
  integrations: [sitemap()],
});
