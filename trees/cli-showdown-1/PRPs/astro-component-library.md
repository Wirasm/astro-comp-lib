name: "Astro Component Library - Premium Theme Implementation"
description: |

## Purpose

Create a comprehensive, award-winning Astro theme with 6+ core components (Navigation, Hero, Pricing, Testimonials, About, Contact) following atomic design principles. Build upon existing Button component patterns to create a cohesive, accessible, and performant component library that showcases modern CSS techniques and Astro 5 best practices.

## Core Principles

1. **Context is King**: Include ALL necessary documentation, examples, and caveats
2. **Validation Loops**: Provide executable tests/lints the AI can run and fix
3. **Information Dense**: Use keywords and patterns from the codebase
4. **Progressive Success**: Start simple, validate, then enhance

---

## Goal

Build a premium Astro theme with two pages:
1. `/` - Home page showcasing theme with Navigation, Hero, Pricing, Testimonials, About, and Contact sections
2. `/components` - Component showcase page displaying all components with variants (currently only has Button)

The theme must be production-ready, accessible (WCAG 2.1 AA), performant (<100KB bundle), and showcase advanced CSS techniques including glass morphism.

## Why

- **Business Value**: Fill market gap for comprehensive Astro component libraries with proper documentation
- **Developer Experience**: Provide copy-paste components with TypeScript support and validation
- **Competitive Edge**: Only theme with interactive component showcase, sub-100KB performance, and WCAG certification
- **User Impact**: Enable developers to build beautiful, accessible sites quickly without sacrificing quality

## What

### User-Visible Behavior
- Home page with 6 fully-styled sections using new components
- Component showcase with interactive examples and code snippets
- Dark mode support across all components
- Responsive design from mobile to desktop
- Smooth animations respecting motion preferences

### Technical Requirements
- Follow existing Button component patterns for consistency
- Zod schema validation for all component props
- TypeScript interfaces extending schemas
- Scoped CSS using design tokens
- Zero JavaScript except where absolutely necessary
- Glass morphism effects with proper fallbacks

### Success Criteria
- [ ] 6 new components created following Button pattern
- [ ] Home page uses all components effectively
- [ ] Component showcase updated with all new components
- [ ] All components support dark mode
- [ ] Lighthouse score 95+ on all metrics
- [ ] WCAG 2.1 AA compliance verified
- [ ] Bundle size under 100KB
- [ ] All tests pass

## All Needed Context

### Documentation & References

```yaml
# MUST READ - Include these in your context window
- url: https://docs.astro.build/en/basics/astro-components/
  why: Core Astro component patterns and best practices

- url: https://docs.astro.build/en/guides/typescript/
  why: TypeScript integration patterns for Astro

- url: https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter
  why: Glass morphism implementation details

- url: https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible
  why: Modern focus styles for accessibility

- docfile: PRPs/ai_docs/astro-5-patterns.md
  why: Critical patterns for component development in our codebase

- docfile: PRPs/ai_docs/glass-morphism-guide.md
  why: Production-ready glass effect implementations

- file: src/components/atoms/Button.astro
  why: Reference implementation showing our component patterns

- file: src/lib/schemas.ts
  why: Zod schema patterns to follow for new components

- file: src/data/components/button.ts
  why: Showcase data structure pattern to mirror

- file: src/styles/tokens.css
  why: Design tokens to use in all components

- file: src/styles/global.css
  why: Global styles and CSS custom properties
```

### Current Codebase tree

```bash
.
├── src
│   ├── components
│   │   ├── atoms
│   │   │   └── Button.astro
│   │   └── showcase
│   │       ├── ColorShowcase.astro
│   │       ├── ComponentExample.astro
│   │       ├── ComponentSection.astro
│   │       ├── IconShowcase.astro
│   │       ├── ThemeToggle.astro
│   │       └── TypographyShowcase.astro
│   ├── data
│   │   ├── colors.ts
│   │   ├── components
│   │   │   └── button.ts
│   │   ├── showcase.ts
│   │   └── types.ts
│   ├── layouts
│   │   └── Layout.astro
│   ├── lib
│   │   ├── accessibility.ts
│   │   ├── schemas.ts
│   │   └── theme.ts
│   ├── pages
│   │   └── index.astro
│   └── styles
│       ├── global.css
│       └── tokens.css
```

### Desired Codebase tree with files to be added

```bash
src
├── components
│   ├── atoms
│   │   ├── Button.astro (existing)
│   │   └── Badge.astro (helper component for pricing/testimonials)
│   ├── molecules
│   │   ├── Card.astro (base card for pricing/testimonials)
│   │   ├── NavLink.astro (navigation item)
│   │   └── FormField.astro (for contact form)
│   └── organisms
│       ├── Navigation.astro (site navigation)
│       ├── Hero.astro (hero section)
│       ├── Pricing.astro (pricing cards)
│       ├── Testimonials.astro (testimonial cards)
│       ├── About.astro (about section)
│       └── Contact.astro (contact form)
├── data
│   └── components
│       ├── button.ts (existing)
│       ├── badge.ts
│       ├── card.ts
│       ├── navigation.ts
│       ├── hero.ts
│       ├── pricing.ts
│       ├── testimonials.ts
│       ├── about.ts
│       └── contact.ts
├── pages
│   ├── index.astro (update to use new components)
│   └── components.astro (create showcase page)
└── lib
    └── schemas.ts (add new component schemas)
```

### Known Gotchas & Library Quirks

```typescript
// CRITICAL: Astro 5 requires explicit TypeScript interfaces
// Example: Must use 'export interface Props' not just type annotations

// CRITICAL: Zod validation only in development
// Always wrap in: if (import.meta.env.DEV) { validateProps() }

// CRITICAL: CSS scoping is automatic in <style> tags
// No need for CSS modules or styled-components

// CRITICAL: Use class:list for conditional classes
// <div class:list={[base, { conditional: isTrue }]} />

// CRITICAL: Slots must be used for component children
// <slot /> not {children}

// CRITICAL: Import icons from 'lucide-astro/icons'
// Already configured in the project

// CRITICAL: Dark mode uses [data-theme="dark"] selector
// Already configured in Layout.astro
```

## Implementation Blueprint

### Data models and structure

```typescript
// lib/schemas.ts additions

// Badge schema (used in pricing/testimonials)
export const badgeSchema = z.object({
  text: z.string(),
  variant: z.enum(['primary', 'secondary', 'success', 'warning', 'danger']).optional(),
  size: z.enum(['sm', 'md']).optional(),
});

// Card schema (base for pricing/testimonial cards)
export const cardSchema = z.object({
  variant: z.enum(['default', 'glass', 'elevated']).optional(),
  padding: z.enum(['none', 'sm', 'md', 'lg']).optional(),
  surface: z.enum(['flat', 'glass', 'elevated']).optional(),
});

// Navigation schema
export const navigationSchema = z.object({
  items: z.array(z.object({
    label: z.string(),
    href: z.string(),
    isActive: z.boolean().optional(),
  })),
  variant: z.enum(['default', 'glass']).optional(),
  fixed: z.boolean().optional(),
});

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

// About schema
export const aboutSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  content: z.string(),
  image: z.string().optional(),
  stats: z.array(z.object({
    label: z.string(),
    value: z.string(),
  })).optional(),
  variant: z.enum(['default', 'split', 'centered']).optional(),
});

// Contact schema
export const contactSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  fields: z.array(z.object({
    name: z.string(),
    label: z.string(),
    type: z.enum(['text', 'email', 'tel', 'textarea']),
    required: z.boolean().optional(),
    placeholder: z.string().optional(),
  })),
  submitText: z.string().optional(),
  variant: z.enum(['default', 'split']).optional(),
});
```

### List of tasks to be completed to fulfill the PRP

```yaml
Task 1 - Create Badge Component:
CREATE src/components/atoms/Badge.astro:
  - FOLLOW pattern from: Button.astro
  - IMPLEMENT Zod schema validation
  - ADD variants: primary, secondary, success, warning, danger
  - STYLE with glass morphism option
  - TEST all variants work

CREATE src/data/components/badge.ts:
  - MIRROR structure from: button.ts
  - ADD showcase examples for each variant
  - INCLUDE code snippets

Task 2 - Create Card Component:
CREATE src/components/molecules/Card.astro:
  - BASE component for pricing/testimonial cards
  - IMPLEMENT surface effects: flat, glass, elevated
  - USE CSS custom properties from tokens
  - SUPPORT dark mode

CREATE src/data/components/card.ts:
  - SHOWCASE different surface effects
  - INCLUDE padding variations

Task 3 - Create Navigation Component:
CREATE src/components/molecules/NavLink.astro:
  - SINGLE navigation item component
  - IMPLEMENT hover states
  - SUPPORT active state
  - ACCESSIBLE keyboard navigation

CREATE src/components/organisms/Navigation.astro:
  - COMPOSE using NavLink components
  - IMPLEMENT glass morphism variant
  - ADD mobile menu (CSS only if possible)
  - SUPPORT fixed positioning option
  - ENSURE proper focus management

CREATE src/data/components/navigation.ts:
  - SHOWCASE fixed vs static
  - SHOW glass vs default variants

Task 4 - Create Hero Component:
CREATE src/components/organisms/Hero.astro:
  - IMPLEMENT layout variants: center, left, split
  - ADD surface effects: gradient, mesh, glass
  - SUPPORT two CTA buttons
  - USE modern CSS gradients
  - ENSURE responsive typography

CREATE src/data/components/hero.ts:
  - SHOWCASE all layout variants
  - DEMONSTRATE surface effects

Task 5 - Create Pricing Component:
CREATE src/components/organisms/Pricing.astro:
  - USE Card component as base
  - IMPLEMENT featured plan highlight
  - ADD Badge for popular/recommended
  - STYLE with glass effects
  - ENSURE responsive grid

CREATE src/data/components/pricing.ts:
  - SHOWCASE 3-tier pricing
  - DEMONSTRATE featured plan

Task 6 - Create Testimonials Component:
CREATE src/components/organisms/Testimonials.astro:
  - USE Card component as base
  - IMPLEMENT rating display
  - ADD author images (optional)
  - SUPPORT multiple layouts
  - STYLE with subtle animations

CREATE src/data/components/testimonials.ts:
  - SHOWCASE different layouts
  - INCLUDE various content lengths

Task 7 - Create About Component:
CREATE src/components/organisms/About.astro:
  - IMPLEMENT split layout with image
  - ADD statistics display
  - USE glass morphism for stats
  - ENSURE readable typography

CREATE src/data/components/about.ts:
  - SHOWCASE with/without stats
  - DEMONSTRATE layout variants

Task 8 - Create Contact Component:
CREATE src/components/molecules/FormField.astro:
  - REUSABLE form field component
  - IMPLEMENT validation states
  - ACCESSIBLE labels and errors

CREATE src/components/organisms/Contact.astro:
  - COMPOSE using FormField components
  - IMPLEMENT form layout
  - STYLE with glass effects
  - NO JavaScript - use CSS for states

CREATE src/data/components/contact.ts:
  - SHOWCASE different field types
  - DEMONSTRATE form layouts

Task 9 - Update Showcase System:
MODIFY src/data/showcase.ts:
  - IMPORT all new component showcases
  - ADD to showcaseConfig array
  - MAINTAIN alphabetical order

MODIFY src/components/showcase/ComponentExample.astro:
  - ADD all new components to componentMap
  - ENSURE proper imports

Task 10 - Create Components Page:
CREATE src/pages/components.astro:
  - SHOWCASE all components
  - USE existing showcase components
  - ORGANIZE by atomic design levels

Task 11 - Update Home Page:
MODIFY src/pages/index.astro:
  - REPLACE placeholder content
  - USE all new components
  - CREATE compelling demo content
  - ENSURE smooth flow between sections

Task 12 - Update Schema Exports:
MODIFY src/lib/schemas.ts:
  - EXPORT all validation functions
  - ENSURE consistent naming
```

### Per task pseudocode

```typescript
# Task 1 - Badge Component
// Badge.astro structure
---
import { validateBadgeProps, type BadgeProps } from '@/lib/schemas';

export interface Props extends BadgeProps {
  class?: string;
}

if (import.meta.env.DEV) {
  validateBadgeProps(Astro.props);
}

const { text, variant = 'primary', size = 'md', class: className } = Astro.props;

const classes = [
  'badge',
  `badge--${variant}`,
  `badge--${size}`,
  className
];
---

<span class:list={classes}>
  {text}
</span>

<style>
  .badge {
    display: inline-flex;
    align-items: center;
    font-weight: 500;
    border-radius: var(--radius-full);
    transition: var(--transition-normal);
  }

  .badge--sm {
    padding: var(--spacing-xxs) var(--spacing-xs);
    font-size: var(--font-size-xs);
  }

  .badge--md {
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: var(--font-size-sm);
  }

  /* Variants using CSS custom properties */
  .badge--primary {
    background: var(--color-primary);
    color: var(--color-primary-contrast);
  }
</style>

# Task 3 - Navigation Component
// Navigation.astro structure
---
import NavLink from '@/components/molecules/NavLink.astro';
import { validateNavigationProps } from '@/lib/schemas';

// Mobile menu using CSS checkbox hack
---

<nav class:list={['nav', `nav--${variant}`, { 'nav--fixed': fixed }]}>
  <input type="checkbox" id="nav-toggle" class="nav__toggle" />
  <label for="nav-toggle" class="nav__toggle-label">
    <span></span>
  </label>

  <ul class="nav__list">
    {items.map((item) => (
      <li class="nav__item">
        <NavLink {...item} />
      </li>
    ))}
  </ul>
</nav>

<style>
  /* Mobile-first approach */
  .nav__toggle { display: none; }

  /* Hamburger icon */
  .nav__toggle-label {
    display: block;
    /* CSS hamburger implementation */
  }

  /* Mobile menu hidden by default */
  .nav__list {
    position: fixed;
    transform: translateX(-100%);
    transition: transform 0.3s;
  }

  /* Show menu when checked */
  .nav__toggle:checked ~ .nav__list {
    transform: translateX(0);
  }

  /* Desktop styles */
  @media (min-width: 768px) {
    .nav__toggle-label { display: none; }
    .nav__list {
      position: static;
      transform: none;
      display: flex;
    }
  }

  /* Glass variant */
  .nav--glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
</style>

# Task 4 - Hero Component
// Hero.astro with mesh gradient
<section class:list={['hero', `hero--${variant}`, `hero--${surface}`]}>
  <div class="hero__content">
    <h1 class="hero__title">{title}</h1>
    {subtitle && <p class="hero__subtitle">{subtitle}</p>}

    <div class="hero__actions">
      {ctaText && (
        <Button href={ctaHref} variant="primary" size="lg">
          {ctaText}
        </Button>
      )}
    </div>
  </div>
</section>

<style>
  /* Mesh gradient background */
  .hero--mesh {
    background:
      radial-gradient(at 40% 20%, hsla(28, 100%, 74%, 1) 0px, transparent 50%),
      radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
      radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%);
  }
</style>
```

## Validation Loop

### Level 1: Syntax & Style

```bash
# Run these FIRST - fix any errors before proceeding
pnpm run check          # Astro & TypeScript checking
pnpm run lint          # ESLint validation (if configured)
pnpm run format        # Prettier formatting

# Expected: No errors. If errors, READ the error and fix.
```

### Level 2: Performance & Build Validation

```bash
# Production build
pnpm build

# Expected: Build completes without errors
# Common issues:
# - "Cannot find module" → Check import paths
# - Type errors → Run pnpm run check to identify

# Analyze bundle size
# Check dist folder size is under 100KB

# Test production build
pnpm preview

# Run Lighthouse audit
# Expected scores:
# - Performance: 95+
# - Accessibility: 95+
# - Best Practices: 95+
# - SEO: 95+
```

## Final Validation Checklist

- [ ] All components created following Button pattern
- [ ] Type checking passes: `pnpm run check`
- [ ] Build succeeds: `pnpm build`
- [ ] Home page uses all new components effectively
- [ ] Components page showcases all components with variants
- [ ] Dark mode works across all components
- [ ] Glass morphism has proper fallbacks
- [ ] Mobile responsive design verified
- [ ] Keyboard navigation fully functional
- [ ] Lighthouse scores 95+ on all metrics
- [ ] Bundle size under 100KB verified
- [ ] No console errors in development or production
- [ ] All interactive elements have focus states
- [ ] Motion preferences respected (prefers-reduced-motion)

---

## Anti-Patterns to Avoid

- ❌ Don't add JavaScript unless absolutely necessary (form validation can use HTML5)
- ❌ Don't skip Zod validation - it catches errors early
- ❌ Don't ignore TypeScript errors - fix them properly
- ❌ Don't hardcode colors - use CSS custom properties
- ❌ Don't create new patterns - follow Button.astro exactly
- ❌ Don't nest glass effects - performance killer
- ❌ Don't skip accessibility - it's not optional
- ❌ Don't use arbitrary values - use design tokens
- ❌ Don't forget dark mode - test everything in both modes
- ❌ Don't overcomplicate - KISS principle applies
