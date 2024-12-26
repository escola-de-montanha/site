// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import preact from '@astrojs/preact';

import icon from 'astro-icon';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  prefetch: {
    defaultStrategy: 'viewport',
    prefetchAll: true
  },

  integrations: [tailwind({
    applyBaseStyles: false,
  }), preact(), icon()],

  adapter: netlify()
});