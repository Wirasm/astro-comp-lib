# Astro 5+ Component Development Patterns

## Critical Patterns for Component Library Development

### 1. Component Structure Pattern

```astro
---
// ALWAYS define TypeScript interface extending Zod schema
import { validateComponentProps } from '@/lib/schemas';
import type { ComponentProps } from '@/lib/schemas';

export interface Props extends ComponentProps {
  class?: string; // Allow additional className
}

// ALWAYS validate props in development
if (import.meta.env.DEV) {
  validateComponentProps(Astro.props);
}

// Destructure with defaults
const {
  variant = 'primary',
  size = 'md',
  disabled = false,
  class: className
} = Astro.props;

// Build class list using Astro's class:list
const classes = [
  'component-base',
  `component--${variant}`,
  `component--${size}`,
  className
];
---

<div class:list={classes} data-disabled={disabled}>
  <slot />
</div>

<style>
  /* ALWAYS scope styles */
  .component-base {
    /* Use CSS custom properties from tokens */
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
  }
</style>
```

### 2. Schema Definition Pattern

```typescript
// lib/schemas.ts
import { z } from 'zod';

// Define schema with all variants
export const componentSchema = z.object({
  variant: z.enum(['primary', 'secondary', 'success', 'warning', 'danger']).optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  disabled: z.boolean().optional(),
  // ... other props
});

// Export type
export type ComponentProps = z.infer<typeof componentSchema>;

// Export validation function
export function validateComponentProps(props: unknown) {
  try {
    componentSchema.parse(props);
  } catch (error) {
    console.error('Component validation failed:', error);
  }
}
```

### 3. Showcase Integration Pattern

```typescript
// data/components/componentName.ts
import type { ComponentShowcase } from '@/data/types';

export const componentShowcase: ComponentShowcase = {
  id: 'component-name',
  name: 'Component Name',
  description: 'Brief description of component purpose',
  component: 'ComponentName', // Must match import name
  groups: [
    {
      id: 'variants',
      title: 'Variants',
      examples: [
        {
          id: 'primary',
          label: 'Primary',
          props: { variant: 'primary' },
          code: 'variant="primary"',
          description: 'Primary action variant'
        }
      ]
    }
  ]
};
```

### 4. Hydration Decision Tree

```
Should this component be hydrated?
├── Does it have user interaction? (clicks, hovers, inputs)
│   ├── Yes → Use client:load or client:visible
│   └── No → Keep static (no hydration)
├── Does it need browser APIs?
│   ├── Yes → Use client:only="react"
│   └── No → Keep server-rendered
└── Is it below the fold?
    ├── Yes → Use client:visible
    └── No → Use client:load if interactive
```

### 5. CSS Custom Properties Pattern

```css
/* Always use CSS variables for theming */
.component {
  /* Colors */
  background: var(--color-primary);
  color: var(--color-primary-contrast);
  
  /* Spacing */
  padding: var(--spacing-md);
  margin: var(--spacing-sm);
  
  /* Typography */
  font-size: var(--font-size-md);
  line-height: var(--line-height-normal);
  
  /* Effects */
  box-shadow: var(--shadow-md);
  border-radius: var(--radius-md);
  
  /* Animation */
  transition: var(--transition-normal);
}
```

### 6. Accessibility Pattern

```astro
---
// Always include accessibility props
export interface Props {
  label: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  role?: string;
}

const {
  label,
  ariaLabel,
  ariaDescribedBy,
  role
} = Astro.props;
---

<button
  aria-label={ariaLabel || label}
  aria-describedby={ariaDescribedBy}
  role={role}
  class="component"
>
  {label}
</button>

<style>
  /* Focus styles are mandatory */
  .component:focus-visible {
    outline: 3px solid var(--color-focus);
    outline-offset: 2px;
  }
  
  /* Respect motion preferences */
  @media (prefers-reduced-motion: reduce) {
    .component {
      transition: none;
    }
  }
</style>
```

### 7. Testing Pattern

```typescript
// __tests__/Component.test.ts
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Component from '../Component.astro';

test('Component renders with props', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Component, {
    props: { variant: 'primary' }
  });
  
  expect(result).toContain('component--primary');
});
```

## Critical Rules

1. **NEVER** skip prop validation in development
2. **ALWAYS** use TypeScript interfaces extending Zod schemas
3. **ALWAYS** scope component styles
4. **ALWAYS** use CSS custom properties from tokens
5. **NEVER** hydrate components unless they need interactivity
6. **ALWAYS** include focus-visible styles
7. **ALWAYS** test components with various prop combinations
8. **NEVER** use inline styles - use class:list with CSS classes
9. **ALWAYS** support dark mode through CSS custom properties
10. **ALWAYS** include proper ARIA attributes for accessibility