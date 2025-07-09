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
          'loader-2'
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
