import type { ComponentShowcase } from '../types';

export const aboutShowcase: ComponentShowcase = {
  id: 'about',
  name: 'About',
  description: 'Section to provide information about a company or project.',
  component: 'About',
  groups: [
    {
      id: 'default',
      title: 'Default About Section',
      examples: [
        {
          id: 'basic',
          label: 'Basic About Section',
          props: {
            title: 'About Our Company',
            content:
              'We are a team of passionate individuals dedicated to creating high-quality software solutions. Our mission is to empower businesses with innovative technology.',
            image: { src: 'https://via.placeholder.com/600x400', alt: 'Our Team' },
            cta: { label: 'Learn More', href: '#', variant: 'primary' },
          },
          code: 'title="About Our Company" content="We are..." image={...} cta={...}',
        },
      ],
    },
  ],
};
