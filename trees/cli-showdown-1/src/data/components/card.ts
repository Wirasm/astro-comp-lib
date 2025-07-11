import type { ComponentShowcase } from '../types';

export const cardShowcase: ComponentShowcase = {
  id: 'card',
  name: 'Card',
  description: 'Flexible container component with glass morphism and elevation effects',
  component: 'Card',
  groups: [
    {
      id: 'variants',
      title: 'Variants',
      description: 'Different card styles for various use cases',
      examples: [
        {
          id: 'default',
          label: 'Default Card',
          props: {
            variant: 'default',
          },
          code: 'variant="default"',
        },
        {
          id: 'glass',
          label: 'Glass Card',
          props: {
            variant: 'glass',
          },
          code: 'variant="glass"',
          rgbInfo: 'RGB: rgba(255, 255, 255, 0.1) + backdrop-filter: blur(10px)',
        },
        {
          id: 'elevated',
          label: 'Elevated Card',
          props: {
            variant: 'elevated',
          },
          code: 'variant="elevated"',
        },
      ],
    },
    {
      id: 'padding',
      title: 'Padding Options',
      description: 'Control internal spacing of the card',
      examples: [
        {
          id: 'padding-none',
          label: 'No Padding',
          props: {
            padding: 'none',
          },
          code: 'padding="none"',
        },
        {
          id: 'padding-sm',
          label: 'Small Padding',
          props: {
            padding: 'sm',
          },
          code: 'padding="sm"',
        },
        {
          id: 'padding-md',
          label: 'Medium Padding',
          props: {
            padding: 'md',
          },
          code: 'padding="md" (default)',
        },
        {
          id: 'padding-lg',
          label: 'Large Padding',
          props: {
            padding: 'lg',
          },
          code: 'padding="lg"',
        },
      ],
    },
    {
      id: 'surfaces',
      title: 'Surface Effects',
      description: 'Different surface treatments for cards',
      examples: [
        {
          id: 'surface-flat',
          label: 'Flat Surface',
          props: {
            surface: 'flat',
          },
          code: 'surface="flat"',
        },
        {
          id: 'surface-glass',
          label: 'Glass Surface',
          props: {
            surface: 'glass',
          },
          code: 'surface="glass"',
          rgbInfo: 'RGB: rgba(255, 255, 255, 0.1) + backdrop-filter: blur(10px)',
        },
        {
          id: 'surface-elevated',
          label: 'Elevated Surface',
          props: {
            surface: 'elevated',
          },
          code: 'surface="elevated"',
        },
      ],
    },
    {
      id: 'combinations',
      title: 'Common Combinations',
      description: 'Practical card configurations',
      examples: [
        {
          id: 'glass-lg',
          label: 'Large Glass Card',
          props: {
            variant: 'glass',
            padding: 'lg',
          },
          code: 'variant="glass" padding="lg"',
        },
        {
          id: 'elevated-sm',
          label: 'Small Elevated Card',
          props: {
            variant: 'elevated',
            padding: 'sm',
          },
          code: 'variant="elevated" padding="sm"',
        },
        {
          id: 'default-no-padding',
          label: 'Default Card No Padding',
          props: {
            variant: 'default',
            padding: 'none',
          },
          code: 'variant="default" padding="none"',
        },
      ],
    },
  ],
};

export default cardShowcase;
