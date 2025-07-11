// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        lucide: [
          'plus',
          'arrow-right', 
          'download',
          'settings',
          'external-link',
          'arrow-up',
          'loader-2',
          'sparkles',
          'zap',
          'layers',
          'palette',
          'wand-2',
          'glass-water',
          'layout-dashboard',
          'folder',
          'users',
          'building',
          'rocket',
          'search'
        ],
        mdi: [
          'coffee',
          'code-tags',
          'target',
          'lightbulb-on',
          'account-group'
        ]
      }
    })
  ]
});
