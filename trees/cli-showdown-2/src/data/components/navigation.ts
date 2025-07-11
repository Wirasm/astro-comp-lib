import type { ComponentShowcase } from '../types';

export const navigationShowcase: ComponentShowcase = {
  id: 'navigation',
  name: 'Navigation',
  description: 'Responsive navigation bar for site-wide access.',
  component: 'Navigation',
  groups: [
    {
      id: 'default',
      title: 'Default Navigation',
      examples: [
        {
          id: 'basic',
          label: 'Basic Navigation',
          props: {
            links: [
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Components', href: '/components' },
            ],
          },
          code: "links={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Components', href: '/components' }]}",
        },
      ],
    },
  ],
};
