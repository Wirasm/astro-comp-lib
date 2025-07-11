import type { ComponentShowcase } from '../types';

export const contactShowcase: ComponentShowcase = {
  id: 'contact',
  name: 'Contact',
  description: 'Form and information for users to get in touch.',
  component: 'Contact',
  groups: [
    {
      id: 'default',
      title: 'Standard Contact Form',
      examples: [
        {
          id: 'basic',
          label: 'Basic Contact Form',
          props: {
            title: 'Get in Touch',
            description: `We'd love to hear from you! Send us a message.`,
            formFields: [
              { id: 'name', label: 'Name', type: 'text', placeholder: 'Your Name' },
              { id: 'email', label: 'Email', type: 'email', placeholder: 'your@example.com' },
              {
                id: 'message',
                label: 'Message',
                type: 'textarea',
                placeholder: 'Your message',
                rows: 5,
              },
            ],
            contactInfo: {
              email: 'info@example.com',
              phone: '+1 (123) 456-7890',
              address: '123 Main St, Anytown USA',
            },
            cta: { label: 'Send Message', variant: 'primary' },
          },
          code: `title="Get in Touch" formFields={...} contactInfo={...} cta={...}`,
        },
      ],
    },
  ],
};
