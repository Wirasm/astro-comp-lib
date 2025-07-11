import { z } from 'zod';

// Button component schema
export const buttonSchema = z.object({
  variant: z
    .enum(['primary', 'secondary', 'success', 'warning', 'danger', 'outline', 'ghost'])
    .optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  disabled: z.boolean().optional(),
  loading: z.boolean().optional(),
  fullWidth: z.boolean().optional(),
  type: z.enum(['button', 'submit', 'reset']).optional(),
  href: z.string().optional(),
  target: z.enum(['_blank', '_self', '_parent', '_top']).optional(),
  icon: z.string().optional(),
  iconPosition: z.enum(['left', 'right', 'top']).optional(),
  surface: z.enum(['flat', 'glass', 'elevated', 'gradient', 'mesh']).optional(),
  motionProfile: z.enum(['none', 'minimal', 'respectful', 'expressive', 'playful']).optional(),
  hapticFeedback: z.boolean().optional(),
  shortcut: z.string().optional(),
  intent: z.string().optional(),
  class: z.string().optional(),
});

export type ButtonProps = z.infer<typeof buttonSchema>;

// Validation functions
export function validateButtonProps(props: unknown): ButtonProps {
  return buttonSchema.parse(props);
}

export function safeValidateButtonProps(props: unknown): {
  success: boolean;
  data?: ButtonProps;
  error?: z.ZodError;
} {
  const result = buttonSchema.safeParse(props);
  if (result.success) {
    return { success: true, data: result.data };
  }
  return { success: false, error: result.error };
}

// Badge schema (used in pricing/testimonials)
export const badgeSchema = z.object({
  text: z.string(),
  variant: z.enum(['primary', 'secondary', 'success', 'warning', 'danger']).optional(),
  size: z.enum(['sm', 'md']).optional(),
});

export type BadgeProps = z.infer<typeof badgeSchema>;

export function validateBadgeProps(props: unknown): BadgeProps {
  return badgeSchema.parse(props);
}

// Card schema (base for pricing/testimonial cards)
export const cardSchema = z.object({
  variant: z.enum(['default', 'glass', 'elevated']).optional(),
  padding: z.enum(['none', 'sm', 'md', 'lg']).optional(),
  surface: z.enum(['flat', 'glass', 'elevated']).optional(),
});

export type CardProps = z.infer<typeof cardSchema>;

export function validateCardProps(props: unknown): CardProps {
  return cardSchema.parse(props);
}

// Navigation schema
export const navigationSchema = z.object({
  items: z.array(
    z.object({
      label: z.string(),
      href: z.string(),
      isActive: z.boolean().optional(),
    })
  ),
  variant: z.enum(['default', 'glass']).optional(),
  fixed: z.boolean().optional(),
});

export type NavigationProps = z.infer<typeof navigationSchema>;

export function validateNavigationProps(props: unknown): NavigationProps {
  return navigationSchema.parse(props);
}

// Hero schema
export const heroSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  ctaText: z.string().optional(),
  ctaHref: z.string().optional(),
  secondaryCtaText: z.string().optional(),
  secondaryCtaHref: z.string().optional(),
  variant: z.enum(['center', 'left', 'split']).optional(),
  surface: z.enum(['gradient', 'mesh', 'glass']).optional(),
});

export type HeroProps = z.infer<typeof heroSchema>;

export function validateHeroProps(props: unknown): HeroProps {
  return heroSchema.parse(props);
}

// Pricing schema
export const pricingPlanSchema = z.object({
  name: z.string(),
  price: z.string(),
  period: z.string().optional(),
  description: z.string().optional(),
  features: z.array(z.string()),
  ctaText: z.string(),
  ctaHref: z.string().optional(),
  featured: z.boolean().optional(),
});

export const pricingSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  plans: z.array(pricingPlanSchema),
});

export type PricingPlan = z.infer<typeof pricingPlanSchema>;
export type PricingProps = z.infer<typeof pricingSchema>;

export function validatePricingProps(props: unknown): PricingProps {
  return pricingSchema.parse(props);
}

// Testimonial schema
export const testimonialSchema = z.object({
  quote: z.string(),
  author: z.string(),
  role: z.string().optional(),
  company: z.string().optional(),
  image: z.string().optional(),
  rating: z.number().min(1).max(5).optional(),
});

export const testimonialsSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  testimonials: z.array(testimonialSchema),
  variant: z.enum(['cards', 'carousel', 'masonry']).optional(),
});

export type Testimonial = z.infer<typeof testimonialSchema>;
export type TestimonialsProps = z.infer<typeof testimonialsSchema>;

export function validateTestimonialsProps(props: unknown): TestimonialsProps {
  return testimonialsSchema.parse(props);
}

// About schema
export const aboutSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  content: z.string(),
  image: z.string().optional(),
  stats: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    )
    .optional(),
  variant: z.enum(['default', 'split', 'centered']).optional(),
});

export type AboutProps = z.infer<typeof aboutSchema>;

export function validateAboutProps(props: unknown): AboutProps {
  return aboutSchema.parse(props);
}

// FormField schema
export const formFieldSchema = z.object({
  name: z.string(),
  label: z.string(),
  type: z.enum(['text', 'email', 'tel', 'textarea']),
  required: z.boolean().optional(),
  placeholder: z.string().optional(),
  error: z.string().optional(),
  value: z.string().optional(),
});

export type FormFieldProps = z.infer<typeof formFieldSchema>;

export function validateFormFieldProps(props: unknown): FormFieldProps {
  return formFieldSchema.parse(props);
}

// Contact schema
export const contactSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  fields: z.array(formFieldSchema),
  submitText: z.string().optional(),
  variant: z.enum(['default', 'split']).optional(),
});

export type ContactProps = z.infer<typeof contactSchema>;

export function validateContactProps(props: unknown): ContactProps {
  return contactSchema.parse(props);
}
