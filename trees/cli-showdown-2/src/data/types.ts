import { z } from 'zod';

// Base showcase types
export const ComponentExampleSchema = z.object({
  id: z.string(),
  label: z.string(),
  description: z.string().optional(),
  props: z.record(z.string(), z.any()),
  code: z.string().optional(),
  rgbInfo: z.string().optional(), // For surface effects like glass/gradient
});

export const ComponentGroupSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  examples: z.array(ComponentExampleSchema),
});

export const ComponentShowcaseSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  component: z.string(), // Component import path
  groups: z.array(ComponentGroupSchema),
});

export const ColorSwatchSchema = z.object({
  name: z.string(),
  value: z.string(), // hex value
  hsl: z.string(), // hsl string
  description: z.string().optional(),
});

export const ColorPaletteSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  swatches: z.array(ColorSwatchSchema),
});

export const IconExampleSchema = z.object({
  name: z.string(),
  title: z.string(),
  description: z.string(),
  iconName: z.string(), // e.g., "mdi:coffee"
  sizes: z.array(z.number()).optional(),
});

export const TypographyExampleSchema = z.object({
  tag: z.string(), // h1, h2, p, etc.
  label: z.string(),
  cssVar: z.string(), // --text-display, etc.
  size: z.string(), // 4rem (64px)
  content: z.string(),
});

export const ShowcaseConfigSchema = z.object({
  site: z.object({
    title: z.string(),
    description: z.string(),
  }),
  sections: z.object({
    colors: z.array(ColorPaletteSchema),
    typography: z.array(TypographyExampleSchema),
    icons: z.array(IconExampleSchema),
    components: z.array(ComponentShowcaseSchema),
  }),
});

// Type exports
export type ComponentExample = z.infer<typeof ComponentExampleSchema>;
export type ComponentGroup = z.infer<typeof ComponentGroupSchema>;
export type ComponentShowcase = z.infer<typeof ComponentShowcaseSchema>;
export type ColorSwatch = z.infer<typeof ColorSwatchSchema>;
export type ColorPalette = z.infer<typeof ColorPaletteSchema>;
export type IconExample = z.infer<typeof IconExampleSchema>;
export type TypographyExample = z.infer<typeof TypographyExampleSchema>;
export type ShowcaseConfig = z.infer<typeof ShowcaseConfigSchema>;

// Validation functions
export function validateComponentShowcase(data: unknown): ComponentShowcase {
  return ComponentShowcaseSchema.parse(data);
}

export function validateShowcaseConfig(data: unknown): ShowcaseConfig {
  return ShowcaseConfigSchema.parse(data);
}

// Helper types for component props
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'outline' | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  surface?: 'flat' | 'glass' | 'elevated' | 'gradient' | 'mesh';
  motionProfile?: 'none' | 'minimal' | 'respectful' | 'expressive' | 'playful';
  hapticFeedback?: boolean;
  shortcut?: string;
  intent?: string;
  icon?: string;
  iconPosition?: 'left' | 'right' | 'top';
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  class?: string;
}

export interface NavigationProps {
  links: { label: string; href: string }[];
}

export interface HeroProps {
  title: string;
  subtitle?: string;
  ctaButtons?: Array<ButtonProps & { label: string }>;
}

export interface PricingProps {
  id?: string;
  plans: Array<{
    name: string;
    price: string;
    features: string[];
    cta: ButtonProps & { label: string };
  }>;
}

export interface TestimonialsProps {
  id?: string;
  testimonials: Array<{
    quote: string;
    author: string;
    avatar?: string;
  }>;
}

export interface AboutProps {
  id?: string;
  title?: string;
  content?: string;
  image?: { src: string; alt: string };
  cta?: ButtonProps & { label: string };
}

export interface ContactProps {
  id?: string;
  title?: string;
  description?: string;
  formFields: Array<{
    id: string;
    label: string;
    type: 'text' | 'email' | 'textarea';
    placeholder?: string;
    rows?: number;
  }>;
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  cta?: ButtonProps & { label: string };
}

// Generic component props type
export type ComponentProps = Record<string, any>;

// Utility type for component examples
export interface ComponentExampleConfig<T = ComponentProps> {
  id: string;
  label: string;
  description?: string;
  props: T;
  code?: string;
  rgbInfo?: string;
}
