import type { ShowcaseConfig, IconExample, TypographyExample } from './types';
import { colorPalettes } from './colors';
import { buttonShowcase } from './components/button';

// Typography examples extracted from current index.astro
export const typographyExamples: TypographyExample[] = [
  {
    tag: 'h1',
    label: 'Display Heading',
    cssVar: '--text-display',
    size: '4rem (64px)',
    content: 'Display Heading',
  },
  {
    tag: 'h2',
    label: 'Title Heading',
    cssVar: '--text-title',
    size: '3rem (48px)',
    content: 'Title Heading',
  },
  {
    tag: 'h3',
    label: 'Headline',
    cssVar: '--text-headline',
    size: '2.25rem (36px)',
    content: 'Headline',
  },
  {
    tag: 'h4',
    label: 'Subheading',
    cssVar: '--text-subhead',
    size: '1.5rem (24px)',
    content: 'Subheading',
  },
  {
    tag: 'p',
    label: 'Large body text',
    cssVar: '--text-body-lg',
    size: '1.125rem (18px)',
    content: 'Large body text for emphasis and readability.',
  },
  {
    tag: 'p',
    label: 'Regular body text',
    cssVar: '--text-body',
    size: '1rem (16px)',
    content: 'Regular body text for most content and descriptions.',
  },
  {
    tag: 'p',
    label: 'Small text',
    cssVar: '--text-body-sm',
    size: '0.875rem (14px)',
    content: 'Small text for captions and secondary information.',
  },
  {
    tag: 'p',
    label: 'Caption text',
    cssVar: '--text-caption',
    size: '0.75rem (12px)',
    content: 'Caption text for labels and metadata.',
  },
  {
    tag: 'code',
    label: 'Code snippet',
    cssVar: '--text-code',
    size: '0.875rem (14px)',
    content: 'code snippet',
  },
];

// Core icons extracted from current index.astro
export const coreIcons: IconExample[] = [
  {
    name: 'coffee',
    title: 'Coffee',
    description: 'Approachable, human side',
    iconName: 'mdi:coffee',
    sizes: [16, 20, 24, 32, 48],
  },
  {
    name: 'code',
    title: 'Code',
    description: 'Technical expertise',
    iconName: 'mdi:code-tags',
  },
  {
    name: 'target',
    title: 'Target',
    description: 'Precision, results-focused',
    iconName: 'mdi:target',
  },
  {
    name: 'lightbulb',
    title: 'Lightbulb',
    description: 'Innovation, insights',
    iconName: 'mdi:lightbulb-on',
  },
  {
    name: 'users',
    title: 'Users',
    description: 'Team-focused approach',
    iconName: 'mdi:account-group',
  },
];

// Main showcase configuration
export const showcaseConfig: ShowcaseConfig = {
  site: {
    title: 'Astro Component Library',
    description: 'Claude Code vs Gemeni CLI showdown',
  },
  sections: {
    colors: colorPalettes,
    typography: typographyExamples,
    icons: coreIcons,
    components: [
      buttonShowcase,
      // Add more components here as they're created
      // inputShowcase,
      // cardShowcase,
      // modalShowcase,
    ],
  },
};

export default showcaseConfig;