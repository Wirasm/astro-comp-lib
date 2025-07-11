import type { ComponentShowcase } from '../types';

export const heroShowcase: ComponentShowcase = {
  id: 'hero',
  name: 'Hero',
  description: 'Eye-catching hero sections with gradient and mesh backgrounds',
  component: 'Hero',
  groups: [
    {
      id: 'layouts',
      title: 'Layout Variants',
      description: 'Different hero layout options',
      examples: [
        {
          id: 'center',
          label: 'Center Layout',
          props: {
            title: 'Build Amazing Interfaces',
            subtitle:
              'Create beautiful, accessible web experiences with our modern component library.',
            ctaText: 'Get Started',
            ctaHref: '#',
            secondaryCtaText: 'Learn More',
            secondaryCtaHref: '#',
            variant: 'center',
          },
          code: 'variant="center"',
        },
        {
          id: 'left',
          label: 'Left Aligned',
          props: {
            title: 'Modern Web Design',
            subtitle: 'Craft exceptional user experiences with our cutting-edge components.',
            ctaText: 'Start Building',
            ctaHref: '#',
            secondaryCtaText: 'View Examples',
            secondaryCtaHref: '#',
            variant: 'left',
          },
          code: 'variant="left"',
        },
        {
          id: 'split',
          label: 'Split Layout',
          props: {
            title: 'Design With Purpose',
            subtitle: 'Combine beauty and functionality in every component.',
            ctaText: 'Explore Components',
            ctaHref: '#',
            secondaryCtaText: 'Documentation',
            secondaryCtaHref: '#',
            variant: 'split',
          },
          code: 'variant="split"',
        },
      ],
    },
    {
      id: 'surfaces',
      title: 'Surface Effects',
      description: 'Different background treatments',
      examples: [
        {
          id: 'gradient',
          label: 'Gradient Surface',
          props: {
            title: 'Gradient Background',
            subtitle: 'Beautiful gradient effects for modern interfaces.',
            ctaText: 'View Demo',
            surface: 'gradient',
          },
          code: 'surface="gradient"',
          rgbInfo: 'Gradient: linear-gradient(135deg, primary 0%, secondary 100%)',
        },
        {
          id: 'mesh',
          label: 'Mesh Surface',
          props: {
            title: 'Mesh Gradients',
            subtitle: 'Dynamic mesh gradient backgrounds with animation.',
            ctaText: 'See in Action',
            surface: 'mesh',
          },
          code: 'surface="mesh"',
          rgbInfo: 'Multiple radial gradients with animation',
        },
        {
          id: 'glass',
          label: 'Glass Surface',
          props: {
            title: 'Glass Morphism',
            subtitle: 'Stunning glass effects with backdrop blur.',
            ctaText: 'Try It Out',
            surface: 'glass',
          },
          code: 'surface="glass"',
          rgbInfo: 'RGB: rgba(255, 255, 255, 0.1) + backdrop-filter: blur(40px)',
        },
      ],
    },
    {
      id: 'content-variations',
      title: 'Content Variations',
      description: 'Different content configurations',
      examples: [
        {
          id: 'minimal',
          label: 'Minimal Content',
          props: {
            title: 'Simple and Clean',
            ctaText: 'Get Started',
          },
          code: 'Minimal hero with single CTA',
        },
        {
          id: 'no-cta',
          label: 'No CTA',
          props: {
            title: 'Welcome to Our Platform',
            subtitle: 'Experience the future of web development.',
          },
          code: 'Hero without action buttons',
        },
        {
          id: 'single-cta',
          label: 'Single CTA',
          props: {
            title: 'Start Your Journey',
            subtitle: 'Join thousands of developers building better web experiences.',
            ctaText: 'Sign Up Free',
          },
          code: 'Hero with single primary action',
        },
      ],
    },
  ],
};

export default heroShowcase;
