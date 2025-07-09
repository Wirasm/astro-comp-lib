import type { ComponentShowcase } from '../types';

export const buttonShowcase: ComponentShowcase = {
  id: 'button',
  name: 'Button',
  description: 'Versatile button component with comprehensive styling options and modern UX features',
  component: 'Button',
  groups: [
    {
      id: 'variants',
      title: 'Variants',
      description: 'Different button styles for various use cases',
      examples: [
        {
          id: 'primary',
          label: 'Primary',
          props: { variant: 'primary' },
          code: 'variant="primary"',
        },
        {
          id: 'secondary',
          label: 'Secondary',
          props: { variant: 'secondary' },
          code: 'variant="secondary"',
        },
        {
          id: 'success',
          label: 'Success',
          props: { variant: 'success' },
          code: 'variant="success"',
        },
        {
          id: 'warning',
          label: 'Warning',
          props: { variant: 'warning' },
          code: 'variant="warning"',
        },
        {
          id: 'danger',
          label: 'Danger',
          props: { variant: 'danger' },
          code: 'variant="danger"',
        },
        {
          id: 'outline',
          label: 'Outline',
          props: { variant: 'outline' },
          code: 'variant="outline"',
        },
        {
          id: 'ghost',
          label: 'Ghost',
          props: { variant: 'ghost' },
          code: 'variant="ghost"',
        },
      ],
    },
    {
      id: 'sizes',
      title: 'Sizes (2025 Standards)',
      description: 'Modern button sizes following 2025 design standards',
      examples: [
        {
          id: 'xs',
          label: 'Extra Small',
          props: { size: 'xs' },
          code: 'size="xs" (32px)',
        },
        {
          id: 'sm',
          label: 'Small',
          props: { size: 'sm' },
          code: 'size="sm" (48px)',
        },
        {
          id: 'md',
          label: 'Medium',
          props: { size: 'md' },
          code: 'size="md" (52px)',
        },
        {
          id: 'lg',
          label: 'Large',
          props: { size: 'lg' },
          code: 'size="lg" (60px)',
        },
        {
          id: 'xl',
          label: 'Extra Large',
          props: { size: 'xl' },
          code: 'size="xl" (72px)',
        },
      ],
    },
    {
      id: 'states',
      title: 'States',
      description: 'Different button states and behaviors',
      examples: [
        {
          id: 'normal',
          label: 'Normal',
          props: {},
          code: 'Default state',
        },
        {
          id: 'disabled',
          label: 'Disabled',
          props: { disabled: true },
          code: 'disabled',
        },
        {
          id: 'loading',
          label: 'Loading',
          props: { loading: true },
          code: 'loading',
        },
        {
          id: 'full-width',
          label: 'Full Width',
          props: { fullWidth: true },
          code: 'fullWidth',
        },
      ],
    },
    {
      id: 'with-icons',
      title: 'With Icons',
      description: 'Buttons with icons in different positions',
      examples: [
        {
          id: 'icon-left',
          label: 'Add Item',
          props: { icon: 'lucide:plus', iconPosition: 'left' },
          code: 'icon="lucide:plus"',
        },
        {
          id: 'icon-right',
          label: 'Continue',
          props: { icon: 'lucide:arrow-right', iconPosition: 'right' },
          code: 'iconPosition="right"',
        },
        {
          id: 'icon-outline',
          label: 'Download',
          props: { variant: 'outline', icon: 'lucide:download' },
          code: 'variant="outline" icon="lucide:download"',
        },
        {
          id: 'icon-ghost',
          label: 'Settings',
          props: { variant: 'ghost', icon: 'lucide:settings', size: 'sm' },
          code: 'variant="ghost" size="sm"',
        },
      ],
    },
    {
      id: 'as-link',
      title: 'As Link',
      description: 'Button component rendered as anchor links',
      examples: [
        {
          id: 'internal-link',
          label: 'Internal Link',
          props: { href: '#', variant: 'primary' },
          code: 'href="#"',
        },
        {
          id: 'external-link',
          label: 'External Link',
          props: {
            href: 'https://example.com',
            target: '_blank',
            variant: 'outline',
            icon: 'lucide:external-link',
          },
          code: 'href="..." target="_blank"',
        },
      ],
    },
    {
      id: 'surface-effects',
      title: 'Surface Effects',
      description: 'Different surface treatments and visual effects',
      examples: [
        {
          id: 'flat',
          label: 'Flat Surface',
          props: { surface: 'flat', variant: 'primary' },
          code: 'surface="flat"',
        },
        {
          id: 'glass',
          label: 'Glass Surface',
          props: { surface: 'glass', variant: 'primary' },
          code: 'surface="glass"',
          rgbInfo: 'RGB: rgba(255, 255, 255, 0.25) + backdrop-filter: blur(10px)',
        },
        {
          id: 'elevated',
          label: 'Elevated Surface',
          props: { surface: 'elevated', variant: 'primary' },
          code: 'surface="elevated"',
        },
        {
          id: 'gradient',
          label: 'Gradient Surface',
          props: { surface: 'gradient', variant: 'primary' },
          code: 'surface="gradient"',
          rgbInfo: 'RGB: linear-gradient(135deg, rgb(183, 108, 70), rgb(166, 77, 47))',
        },
        {
          id: 'mesh',
          label: 'Mesh Surface',
          props: { surface: 'mesh', variant: 'primary' },
          code: 'surface="mesh"',
        },
      ],
    },
    {
      id: 'motion-profiles',
      title: 'Motion Profiles',
      description: 'Different animation and motion behaviors',
      examples: [
        {
          id: 'none',
          label: 'No Motion',
          props: { motionProfile: 'none', variant: 'primary' },
          code: 'motionProfile="none"',
        },
        {
          id: 'minimal',
          label: 'Minimal Motion',
          props: { motionProfile: 'minimal', variant: 'primary' },
          code: 'motionProfile="minimal"',
        },
        {
          id: 'respectful',
          label: 'Respectful Motion',
          props: { motionProfile: 'respectful', variant: 'primary' },
          code: 'motionProfile="respectful"',
        },
        {
          id: 'expressive',
          label: 'Expressive Motion',
          props: { motionProfile: 'expressive', variant: 'primary' },
          code: 'motionProfile="expressive"',
        },
        {
          id: 'playful',
          label: 'Playful Motion',
          props: { motionProfile: 'playful', variant: 'primary' },
          code: 'motionProfile="playful"',
        },
      ],
    },
    {
      id: 'modern-ux',
      title: 'Modern UX Features',
      description: 'Advanced user experience features',
      examples: [
        {
          id: 'haptic',
          label: 'Haptic Feedback',
          props: { hapticFeedback: true, variant: 'primary' },
          code: 'hapticFeedback={true}',
        },
        {
          id: 'shortcut',
          label: 'With Shortcut',
          props: { shortcut: '⌘K', variant: 'primary' },
          code: 'shortcut="⌘K"',
        },
        {
          id: 'intent',
          label: 'Save Document',
          props: { intent: 'Save your work', variant: 'success' },
          code: 'intent="Save your work"',
        },
        {
          id: 'icon-top',
          label: 'Upload',
          props: { icon: 'lucide:arrow-up', iconPosition: 'top', variant: 'outline' },
          code: 'iconPosition="top"',
        },
      ],
    },
  ],
};

export default buttonShowcase;