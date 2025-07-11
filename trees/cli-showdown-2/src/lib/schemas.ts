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

export const NavigationPropsSchema = z.object({
  links: z.array(z.object({ label: z.string(), href: z.string() })),
});

export type NavigationProps = z.infer<typeof NavigationPropsSchema>;

export function validateNavigationProps(data: unknown): NavigationProps {
  return NavigationPropsSchema.parse(data);
}

export const HeroPropsSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  ctaButtons: z.array(buttonSchema.extend({ label: z.string() })).optional(),
});

export type HeroProps = z.infer<typeof HeroPropsSchema>;

export function validateHeroProps(data: unknown): HeroProps {
  return HeroPropsSchema.parse(data);
}

export const PricingPropsSchema = z.object({
  plans: z.array(
    z.object({
      name: z.string(),
      price: z.string(),
      features: z.array(z.string()),
      cta: buttonSchema.extend({ label: z.string() }),
    })
  ),
});

export type PricingProps = z.infer<typeof PricingPropsSchema>;

export function validatePricingProps(data: unknown): PricingProps {
  return PricingPropsSchema.parse(data);
}

export const TestimonialsPropsSchema = z.object({
  testimonials: z.array(
    z.object({
      quote: z.string(),
      author: z.string(),
      avatar: z.string().optional(),
    })
  ),
});

export type TestimonialsProps = z.infer<typeof TestimonialsPropsSchema>;

export function validateTestimonialsProps(data: unknown): TestimonialsProps {
  return TestimonialsPropsSchema.parse(data);
}

export const AboutPropsSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  image: z.object({ src: z.string(), alt: z.string() }).optional(),
  cta: buttonSchema.extend({ label: z.string() }).optional(),
});

export type AboutProps = z.infer<typeof AboutPropsSchema>;

export function validateAboutProps(data: unknown): AboutProps {
  return AboutPropsSchema.parse(data);
}

export const ContactPropsSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  formFields: z.array(
    z.object({
      id: z.string(),
      label: z.string(),
      type: z.enum(['text', 'email', 'textarea']),
      placeholder: z.string().optional(),
      rows: z.number().optional(),
    })
  ),
  contactInfo: z
    .object({
      email: z.string().email().optional(),
      phone: z.string().optional(),
      address: z.string().optional(),
    })
    .optional(),
  cta: buttonSchema.extend({ label: z.string() }).optional(),
});

export type ContactProps = z.infer<typeof ContactPropsSchema>;

export function validateContactProps(data: unknown): ContactProps {
  return ContactPropsSchema.parse(data);
}
