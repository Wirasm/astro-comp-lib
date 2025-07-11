import type { ComponentShowcase } from '../types';

export const badgeShowcase: ComponentShowcase = {
  id: 'badge',
  name: 'Badge',
  description:
    'Lightweight labels for categorization and status indication with glass morphism effects',
  component: 'Badge',
  groups: [
    {
      id: 'variants',
      title: 'Variants',
      description: 'Different badge styles for various contexts',
      examples: [
        {
          id: 'primary',
          label: 'Primary',
          props: {
            text: 'Primary',
            variant: 'primary',
          },
          code: 'variant="primary"',
        },
        {
          id: 'secondary',
          label: 'Secondary',
          props: {
            text: 'Secondary',
            variant: 'secondary',
          },
          code: 'variant="secondary"',
        },
        {
          id: 'success',
          label: 'Success',
          props: {
            text: 'Success',
            variant: 'success',
          },
          code: 'variant="success"',
        },
        {
          id: 'warning',
          label: 'Warning',
          props: {
            text: 'Warning',
            variant: 'warning',
          },
          code: 'variant="warning"',
        },
        {
          id: 'danger',
          label: 'Danger',
          props: {
            text: 'Danger',
            variant: 'danger',
          },
          code: 'variant="danger"',
        },
      ],
    },
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Badge sizes for different contexts',
      examples: [
        {
          id: 'sm',
          label: 'Small',
          props: {
            text: 'Small',
            size: 'sm',
          },
          code: 'size="sm"',
        },
        {
          id: 'md',
          label: 'Medium',
          props: {
            text: 'Medium',
            size: 'md',
          },
          code: 'size="md" (default)',
        },
      ],
    },
    {
      id: 'use-cases',
      title: 'Common Use Cases',
      description: 'Practical examples of badge usage',
      examples: [
        {
          id: 'new',
          label: 'New Feature',
          props: {
            text: 'NEW',
            variant: 'primary',
            size: 'sm',
          },
          code: 'text="NEW" variant="primary" size="sm"',
        },
        {
          id: 'popular',
          label: 'Popular Item',
          props: {
            text: 'POPULAR',
            variant: 'secondary',
            size: 'sm',
          },
          code: 'text="POPULAR" variant="secondary"',
        },
        {
          id: 'status-active',
          label: 'Active Status',
          props: {
            text: 'Active',
            variant: 'success',
            size: 'md',
          },
          code: 'text="Active" variant="success"',
        },
        {
          id: 'status-pending',
          label: 'Pending Status',
          props: {
            text: 'Pending',
            variant: 'warning',
            size: 'md',
          },
          code: 'text="Pending" variant="warning"',
        },
        {
          id: 'status-error',
          label: 'Error Status',
          props: {
            text: 'Error',
            variant: 'danger',
            size: 'md',
          },
          code: 'text="Error" variant="danger"',
        },
        {
          id: 'recommended',
          label: 'Recommendation',
          props: {
            text: 'RECOMMENDED',
            variant: 'primary',
            size: 'sm',
          },
          code: 'text="RECOMMENDED" variant="primary"',
        },
      ],
    },
  ],
};

export default badgeShowcase;
