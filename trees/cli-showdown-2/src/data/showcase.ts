import type { ShowcaseConfig, IconExample, TypographyExample } from './types';
import { colorPalettes } from './colors';
import { buttonShowcase } from './components/button';
import { navigationShowcase } from './components/navigation';
import { heroShowcase } from './components/hero';
import { pricingShowcase } from './components/pricing';
import { testimonialsShowcase } from './components/testimonials';
import { aboutShowcase } from './components/about';
import { contactShowcase } from './components/contact';

// Modern typography examples with fluid scaling
export const typographyExamples: TypographyExample[] = [
  {
    tag: 'h1',
    label: 'Display Heading',
    cssVar: '--text-6xl',
    size: 'clamp(3.75rem, 3rem + 3.75vw, 5rem)',
    content: 'Display Heading',
  },
  {
    tag: 'h2',
    label: 'Title Heading',
    cssVar: '--text-5xl',
    size: 'clamp(3rem, 2.5rem + 2.5vw, 4rem)',
    content: 'Title Heading',
  },
  {
    tag: 'h3',
    label: 'Headline',
    cssVar: '--text-4xl',
    size: 'clamp(2.25rem, 1.9rem + 1.75vw, 3.125rem)',
    content: 'Headline',
  },
  {
    tag: 'h4',
    label: 'Subheading',
    cssVar: '--text-2xl',
    size: 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
    content: 'Subheading',
  },
  {
    tag: 'p',
    label: 'Large body text',
    cssVar: '--text-lg',
    size: 'clamp(1.125rem, 1rem + 0.625vw, 1.375rem)',
    content: 'Large body text for emphasis and readability.',
  },
  {
    tag: 'p',
    label: 'Regular body text',
    cssVar: '--text-base',
    size: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
    content: 'Regular body text for most content and descriptions.',
  },
  {
    tag: 'p',
    label: 'Small text',
    cssVar: '--text-sm',
    size: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
    content: 'Small text for captions and secondary information.',
  },
  {
    tag: 'p',
    label: 'Caption text',
    cssVar: '--text-xs',
    size: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
    content: 'Caption text for labels and metadata.',
  },
  {
    tag: 'code',
    label: 'Code snippet',
    cssVar: '--text-sm',
    size: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
    content: 'code snippet',
  },
];

// Modern icons with lucide icon set
export const coreIcons: IconExample[] = [
  {
    name: 'sparkles',
    title: 'Sparkles',
    description: 'Innovation and magic',
    iconName: 'lucide:sparkles',
    sizes: [16, 20, 24, 32, 48],
  },
  {
    name: 'zap',
    title: 'Zap',
    description: 'Energy and performance',
    iconName: 'lucide:zap',
  },
  {
    name: 'layers',
    title: 'Layers',
    description: 'Depth and structure',
    iconName: 'lucide:layers',
  },
  {
    name: 'palette',
    title: 'Palette',
    description: 'Design and creativity',
    iconName: 'lucide:palette',
  },
  {
    name: 'wand',
    title: 'Magic Wand',
    description: 'Transformation and effects',
    iconName: 'lucide:wand-2',
  },
  {
    name: 'glass',
    title: 'Glass',
    description: 'Transparency and depth',
    iconName: 'lucide:glass-water',
  },
];

// Main showcase configuration
export const showcaseConfig: ShowcaseConfig = {
  site: {
    title: 'Modern Astro Component Library',
    description: 'Claude Code VS Gemini CLI - The ultimate component showdown using PRP',
  },
  sections: {
    colors: colorPalettes,
    typography: typographyExamples,
    icons: coreIcons,
    components: [
      buttonShowcase,
      navigationShowcase,
      heroShowcase,
      pricingShowcase,
      testimonialsShowcase,
      aboutShowcase,
      contactShowcase,
    ],
  },
};

export default showcaseConfig;
