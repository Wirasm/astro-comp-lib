import type { ComponentShowcase } from '../types';

export const heroShowcase: ComponentShowcase = {
  id: 'hero',
  name: 'Hero',
  description: 'Prominent section for key messages and calls to action.',
  component: 'Hero',
  groups: [
    {
      id: 'default',
      title: 'Default Hero',
      examples: [
        {
          id: 'basic',
          label: 'Basic Hero',
          props: {
            title: 'Welcome to Our Awesome Site',
            subtitle: 'Discover amazing things with our modern Astro components.',
            ctaButtons: [
              { label: 'Get Started', href: '#', variant: 'primary' },
              { label: 'Learn More', href: '#', variant: 'outline' },
            ],
          },
          code: 'title="Welcome..." subtitle="Discover..." ctaButtons={...}',
        },
      ],
    },
  ],
};
