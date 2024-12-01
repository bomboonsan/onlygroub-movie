// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap({
      changefreq: 'daily',
      priority: 0.8,      
      lastmod: new Date(),
      entryLimit: 50000, // จำนวน URLs สูงสุดต่อ sitemap
    }),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    tailwind()
  ]
});