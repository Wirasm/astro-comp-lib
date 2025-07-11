import type { ComponentShowcase } from '../types';

export const testimonialsShowcase: ComponentShowcase = {
  id: 'testimonials',
  name: 'Testimonials',
  description: 'Displays customer testimonials or reviews.',
  component: 'Testimonials',
  groups: [
    {
      id: 'default',
      title: 'Standard Testimonials',
      examples: [
        {
          id: 'basic',
          label: 'Single Testimonial',
          props: {
            testimonials: [
              {
                quote: 'This product has transformed our workflow. Highly recommended!',
                author: 'Jane Doe',
                avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
              },
            ],
          },
          code: `testimonials={...}`,
        },
        {
          id: 'multiple',
          label: 'Multiple Testimonials',
          props: {
            testimonials: [
              {
                quote: 'This product has transformed our workflow. Highly recommended!',
                author: 'Jane Doe',
                avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
              },
              {
                quote: 'An absolute game-changer for our team. The support is fantastic!',
                author: 'John Smith',
                avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
              },
              {
                quote: `Never thought I'd find something so intuitive and powerful.`,
                author: 'Emily White',
                avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
              },
            ],
          },
          code: `testimonials={...}`,
        },
      ],
    },
  ],
};
