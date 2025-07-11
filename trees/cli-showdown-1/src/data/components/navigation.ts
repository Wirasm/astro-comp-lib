import type { ComponentShowcase } from '../types';

export const navigationShowcase: ComponentShowcase = {
  id: 'navigation',
  name: 'Navigation',
  description: 'Site navigation with glass morphism effects and mobile-responsive menu',
  component: 'Navigation',
  groups: [
    {
      id: 'variants',
      title: 'Variants',
      description: 'Different navigation styles',
      examples: [
        {
          id: 'default',
          label: 'Default Navigation',
          props: {
            items: [
              { label: 'Home', href: '/', isActive: true },
              { label: 'Components', href: '/components' },
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' },
            ],
            variant: 'default',
          },
          code: 'variant="default"',
        },
        {
          id: 'glass',
          label: 'Glass Navigation',
          props: {
            items: [
              { label: 'Home', href: '/', isActive: true },
              { label: 'Components', href: '/components' },
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' },
            ],
            variant: 'glass',
          },
          code: 'variant="glass"',
          rgbInfo: 'RGB: rgba(255, 255, 255, 0.8) + backdrop-filter: blur(20px)',
        },
      ],
    },
    {
      id: 'positioning',
      title: 'Positioning',
      description: 'Navigation positioning options',
      examples: [
        {
          id: 'static',
          label: 'Static Position',
          props: {
            items: [
              { label: 'Home', href: '/', isActive: true },
              { label: 'Components', href: '/components' },
              { label: 'About', href: '#about' },
            ],
            fixed: false,
          },
          code: 'fixed={false}',
        },
        {
          id: 'fixed',
          label: 'Fixed Position',
          props: {
            items: [
              { label: 'Home', href: '/' },
              { label: 'Components', href: '/components', isActive: true },
              { label: 'About', href: '#about' },
            ],
            fixed: true,
          },
          code: 'fixed={true}',
        },
      ],
    },
    {
      id: 'combinations',
      title: 'Common Combinations',
      description: 'Practical navigation configurations',
      examples: [
        {
          id: 'glass-fixed',
          label: 'Glass Fixed Navigation',
          props: {
            items: [
              { label: 'Home', href: '/' },
              { label: 'Products', href: '#products' },
              { label: 'Services', href: '#services' },
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' },
            ],
            variant: 'glass',
            fixed: true,
          },
          code: 'variant="glass" fixed={true}',
        },
        {
          id: 'minimal',
          label: 'Minimal Navigation',
          props: {
            items: [
              { label: 'Work', href: '#work', isActive: true },
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' },
            ],
            variant: 'default',
          },
          code: 'Minimal navigation with few items',
        },
      ],
    },
  ],
};

export default navigationShowcase;
