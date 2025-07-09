import { z } from 'zod';

// Button component schema
export const buttonSchema = z.object({
  variant: z.enum(['primary', 'secondary', 'success', 'warning', 'danger', 'outline', 'ghost']).optional(),
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