// Accessibility utilities for color contrast validation

// Convert HSL to RGB
export function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)];
}

// Calculate relative luminance
function getLuminance(r: number, g: number, b: number): number {
  const normalizeComponent = (c: number): number => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };

  const rs = normalizeComponent(r);
  const gs = normalizeComponent(g);
  const bs = normalizeComponent(b);

  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Calculate contrast ratio between two colors
export function getContrastRatio(
  color1: [number, number, number],
  color2: [number, number, number]
): number {
  const lum1 = getLuminance(...color1);
  const lum2 = getLuminance(...color2);

  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);

  return (lighter + 0.05) / (darker + 0.05);
}

// Check if contrast meets WCAG standards
export function meetsWCAG(
  contrastRatio: number,
  level: 'AA' | 'AAA' = 'AA',
  size: 'normal' | 'large' = 'normal'
): boolean {
  if (level === 'AAA') {
    return size === 'large' ? contrastRatio >= 4.5 : contrastRatio >= 7;
  }
  return size === 'large' ? contrastRatio >= 3 : contrastRatio >= 4.5;
}

// Modern button color contrast validation
export const buttonColorValidation = {
  // Modern gradient colors (HSL values - using mid-point of gradients)
  primary: hslToRgb(199, 89, 48), // electric blue
  secondary: hslToRgb(271, 91, 65), // violet
  success: hslToRgb(160, 84, 39), // emerald
  warning: hslToRgb(38, 92, 50), // amber
  danger: hslToRgb(350, 89, 60), // rose

  // Text colors
  lightText: hslToRgb(210, 40, 98), // very light
  darkText: hslToRgb(222, 84, 5), // very dark

  // Validate all button combinations
  validate(): Record<string, { ratio: number; passes: boolean }> {
    const results: Record<string, { ratio: number; passes: boolean }> = {};

    // Test each button variant against appropriate text color
    const variants = ['primary', 'secondary', 'success', 'warning', 'danger'] as const;

    variants.forEach((variant) => {
      // Most buttons use light text on dark background
      const textColor = variant === 'warning' ? this.darkText : this.lightText;
      const bgColor = this[variant];

      const ratio = getContrastRatio(bgColor, textColor);
      const passes = meetsWCAG(ratio, 'AA', 'normal');

      results[variant] = { ratio: Math.round(ratio * 100) / 100, passes };
    });

    return results;
  },
};

// Development-only contrast checking
if (import.meta.env.DEV) {
  // eslint-disable-next-line no-console
  console.log('🎨 Button Color Contrast Validation:', buttonColorValidation.validate());
}
