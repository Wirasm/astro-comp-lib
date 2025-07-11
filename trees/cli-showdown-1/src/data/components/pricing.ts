import type { ComponentShowcase } from '../types';

export const pricingShowcase: ComponentShowcase = {
  id: 'pricing',
  name: 'Pricing',
  description: 'Flexible pricing tables with glass morphism effects and featured plan highlighting',
  component: 'Pricing',
  groups: [
    {
      id: 'examples',
      title: 'Pricing Examples',
      description: 'Different pricing table configurations',
      examples: [
        {
          id: 'three-tier',
          label: 'Three Tier Pricing',
          props: {
            title: 'Choose Your Plan',
            subtitle: 'Select the perfect plan for your needs',
            plans: [
              {
                name: 'Starter',
                price: '$9',
                period: 'month',
                description: 'Perfect for individuals and small projects',
                features: ['Up to 3 projects', '1GB storage', 'Basic support', 'Core features'],
                ctaText: 'Get Started',
                ctaHref: '#',
              },
              {
                name: 'Professional',
                price: '$29',
                period: 'month',
                description: 'Ideal for growing teams and businesses',
                features: [
                  'Unlimited projects',
                  '10GB storage',
                  'Priority support',
                  'Advanced features',
                  'Team collaboration',
                  'API access',
                ],
                ctaText: 'Start Free Trial',
                ctaHref: '#',
                featured: true,
              },
              {
                name: 'Enterprise',
                price: '$99',
                period: 'month',
                description: 'For large organizations with custom needs',
                features: [
                  'Everything in Pro',
                  '100GB storage',
                  'Dedicated support',
                  'Custom integrations',
                  'Advanced security',
                  'SLA guarantee',
                ],
                ctaText: 'Contact Sales',
                ctaHref: '#',
              },
            ],
          },
          code: 'Three-tier pricing with featured plan',
        },
        {
          id: 'two-tier',
          label: 'Two Tier Pricing',
          props: {
            title: 'Simple Pricing',
            subtitle: 'No hidden fees, cancel anytime',
            plans: [
              {
                name: 'Free',
                price: '$0',
                description: 'Get started with the basics',
                features: ['1 user', '2 projects', 'Community support', 'Basic features'],
                ctaText: 'Sign Up Free',
                ctaHref: '#',
              },
              {
                name: 'Pro',
                price: '$19',
                period: 'month',
                description: 'Everything you need to scale',
                features: [
                  'Unlimited users',
                  'Unlimited projects',
                  'Priority support',
                  'All features',
                  'Advanced analytics',
                ],
                ctaText: 'Start 14-day Trial',
                ctaHref: '#',
                featured: true,
              },
            ],
          },
          code: 'Two-tier pricing with free option',
        },
        {
          id: 'single-plan',
          label: 'Single Plan Focus',
          props: {
            title: 'One Simple Price',
            subtitle: 'Everything included, no surprises',
            plans: [
              {
                name: 'All Access',
                price: '$49',
                period: 'month',
                description: 'Complete access to all features',
                features: [
                  'Unlimited everything',
                  'Premium support',
                  'All integrations',
                  'Custom branding',
                  'Advanced analytics',
                  'Priority updates',
                ],
                ctaText: 'Get All Access',
                ctaHref: '#',
                featured: true,
              },
            ],
          },
          code: 'Single featured plan',
        },
      ],
    },
    {
      id: 'variations',
      title: 'Pricing Variations',
      description: 'Different pricing presentations',
      examples: [
        {
          id: 'annual',
          label: 'Annual Pricing',
          props: {
            title: 'Save 20% with Annual Billing',
            plans: [
              {
                name: 'Monthly',
                price: '$25',
                period: 'month',
                features: ['Pay as you go', 'Cancel anytime', 'All features included'],
                ctaText: 'Choose Monthly',
              },
              {
                name: 'Annual',
                price: '$240',
                period: 'year',
                description: 'Save $60 per year',
                features: [
                  'Save 20%',
                  'Price lock guarantee',
                  'All features included',
                  'Priority support',
                ],
                ctaText: 'Choose Annual',
                featured: true,
              },
            ],
          },
          code: 'Annual vs monthly pricing',
        },
        {
          id: 'custom',
          label: 'Custom Pricing',
          props: {
            plans: [
              {
                name: 'Basic',
                price: '$15',
                period: 'user/month',
                features: ['Core features', 'Email support', '5GB storage per user'],
                ctaText: 'Start Now',
              },
              {
                name: 'Custom',
                price: 'Contact us',
                description: 'Tailored to your needs',
                features: [
                  'Custom features',
                  'Dedicated support',
                  'Unlimited storage',
                  'Custom integrations',
                ],
                ctaText: 'Get a Quote',
                featured: true,
              },
            ],
          },
          code: 'Custom pricing option',
        },
      ],
    },
  ],
};

export default pricingShowcase;
