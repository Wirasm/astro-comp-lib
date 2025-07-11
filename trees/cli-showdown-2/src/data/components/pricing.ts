import type { ComponentShowcase } from '../types';

export const pricingShowcase: ComponentShowcase = {
  id: 'pricing',
  name: 'Pricing',
  description: 'Displays various pricing plans for services or products.',
  component: 'Pricing',
  groups: [
    {
      id: 'default',
      title: 'Standard Pricing Plans',
      examples: [
        {
          id: 'basic',
          label: 'Basic Plan',
          props: {
            plans: [
              {
                name: 'Starter',
                price: '$19/month',
                features: ['5 Projects', '10GB Storage', 'Basic Support'],
                cta: { label: 'Get Started', href: '#', variant: 'primary' },
              },
              {
                name: 'Pro',
                price: '$49/month',
                features: ['Unlimited Projects', '100GB Storage', 'Priority Support'],
                cta: { label: 'Go Pro', href: '#', variant: 'secondary' },
              },
              {
                name: 'Enterprise',
                price: '$99/month',
                features: ['All Pro Features', 'Dedicated Manager', 'Custom Integrations'],
                cta: { label: 'Contact Us', href: '#', variant: 'outline' },
              },
            ],
          },
          code: 'plans={...}',
        },
      ],
    },
  ],
};
