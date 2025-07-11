name: "Full Astro Component Library Development Plan"
description: |
  Comprehensive PRP for building the entire Astro Component Library as outlined in PRPs/plan.md.
  This includes creating a dedicated /components showcase page and integrating new components
  (Navigation, Hero, Pricing, Testimonials, About, Contact) into the /Home page (src/pages/index.astro),
  all while mirroring the existing Button component's structure, data, and styling conventions.

## Purpose

This PRP provides an AI agent with all necessary context and a detailed blueprint to implement the full Astro Component Library, ensuring adherence to existing patterns, design principles, and validation gates for a high-quality, production-ready outcome.

## Core Principles

1.  **Context is King**: All necessary documentation, examples, and caveats are included.
2.  **Validation Loops**: Executable tests/lints are provided for self-correction.
3.  **Information Dense**: Keywords and patterns from the codebase are used.
4.  **Progressive Success**: Tasks are broken down, with validation at each stage.

---

## Goal

To build a premium, award-winning Astro theme with a rich set of components, mirroring the existing Button component's structure and showcase. This involves:
1.  Creating a `/components` page to showcase each new component and its variants.
2.  Integrating Navigation, Hero, Pricing, Testimonials, About, and Contact components into the /Home page (`src/pages/index.astro`).
3.  Adhering to the established color palette, theme, typography, icons, and Button component patterns.

## Why

-   **Business Value**: Empowers developers to build beautiful, accessible, and performant applications.
-   **Impact**: Provides a visually stunning and technically excellent Astro theme, enabling faster shipping while maintaining high quality.
-   **Problem Solved**: Bridges the gap between design and development for modern web applications requiring exceptional UI/UX, accessibility, and performance.

### Success Criteria

-   [ ] All specified components (Navigation, Hero, Pricing, Testimonials, About, Contact) are implemented.
-   [ ] Each new component is registered and showcased on the `/components` page with variants mirroring the Button component.
-   [ ] All components are integrated into `src/pages/index.astro` to form the `/Home` page.
-   [ ] Adherence to existing codebase conventions (TypeScript, Astro component structure, styling via `tokens.css` and `global.css`).
-   [ ] WCAG 2.1 AA compliance for all new components.
-   [ ] Performance targets (Lighthouse 95+, FCP < 1.2s, LCP < 2.5s, FID < 100ms, CLS < 0.1, Bundle Size < 100KB) are met.
-   [ ] All validation gates (type-check, lint, format, build, tests) pass.

## All Needed Context

### Documentation & References

```yaml
# MUST READ - Include these in your context window
- file: src/components/atoms/Button.astro
  why: Primary example for Astro component structure, props handling, styling, and effects.

- file: src/data/components/button.ts
  why: Defines the structure for component showcase data (ComponentShowcase, ComponentGroup, ComponentExample). New components must follow this pattern.

- file: src/data/types.ts
  why: Defines core types for component props (e.g., ButtonProps) and showcase data schemas (Zod). New component props and showcase data must be typed here.

- file: src/data/showcase.ts
  why: Central registry for all component showcase data. New component showcase data must be imported and added to `sections.components` array.

- file: src/styles/tokens.css
  why: Defines design tokens (colors, typography scale, spacing, shadows, glass morphism, gradients). All styling must use these variables.

- file: src/styles/global.css
  why: Contains global styles, typography definitions, and utility classes. New components should leverage these.

- file: src/lib/schemas.ts
  why: Contains Zod schemas for runtime validation of component props (e.g., validateButtonProps). New components should have similar validation.

- file: astro.config.mjs
  why: Astro project configuration.

- file: package.json
  why: Defines project scripts for linting, formatting, type-checking, building, and testing.

```

### Current Codebase tree (run `tree` in the root of the project) to get an overview of the codebase

```bash
/Users/rasmus/Projects/mine/astro-comp-lib/astro-comp-lib/trees/cli-showdown-2/
├───.gitignore
├───.prettierignore
├───.prettierrc
├───astro.config.mjs
├───CLAUDE.md
├───eslint.config.js
├───GEMENI.md
├───package.json
├───pnpm-lock.yaml
├───README.md
├───tsconfig.json
├───.claude/
│   └───commands/
│       ├───prime-core.md
│       └───wt-setup.md
├───.vscode/
│   ├───extensions.json
│   └───launch.json
├───node_modules/...
├───PRPs/
│   ├───plan.md
│   ├───README.md
│   ├───ai_docs/
│   │   └───register-components.md
│   ├───branding/
│   │   └───branding.md
│   └───templates/
│       ├───prp-base-typescript.md
│       ├───TS-prp-create.md
│       └───TS-prp-execute.md
├───public/
│   └───favicon.svg
└───src/
    ├───components/
    │   ├───atoms/
    │   │   └───Button.astro
    │   └───showcase/
    │       ├───ColorShowcase.astro
    │       ├───ComponentExample.astro
    │       ├───ComponentSection.astro
    │       ├───IconShowcase.astro
    │       ├───ThemeToggle.astro
    │       └───TypographyShowcase.astro
    ├───data/
    │   ├───colors.ts
    │   ├───showcase.ts
    │   ├───types.ts
    │   └───components/
    │       └───button.ts
    ├───layouts/
    │   └───Layout.astro
    ├───lib/
    │   ├───accessibility.ts
    │   ├───schemas.ts
    │   └───theme.ts
    ├───pages/
    │   └───index.astro
    └───styles/
        ├───global.css
        └───tokens.css
```

### Desired Codebase tree with files to be added and responsibility of file

```bash
/Users/rasmus/Projects/mine/astro-comp-lib/astro-comp-lib/trees/cli-showdown-2/
├───...
├───src/
│   ├───components/
│   │   ├───atoms/
│   │   │   └───Button.astro
│   │   ├───navigation/ # NEW: Directory for Navigation component
│   │   │   └───Navigation.astro # NEW: Navigation component
│   │   ├───hero/ # NEW: Directory for Hero component
│   │   │   └───Hero.astro # NEW: Hero component
│   │   ├───pricing/ # NEW: Directory for Pricing component
│   │   │   └───Pricing.astro # NEW: Pricing component
│   │   ├───testimonials/ # NEW: Directory for Testimonials component
│   │   │   └───Testimonials.astro # NEW: Testimonials component
│   │   ├───about/ # NEW: Directory for About component
│   │   │   └───About.astro # NEW: About component
│   │   ├───contact/ # NEW: Directory for Contact component
│   │   │   └───Contact.astro # NEW: Contact component
│   │   └───showcase/
│   │       ├───ColorShowcase.astro
│   │       ├───ComponentExample.astro
│   │       ├───ComponentSection.astro
│   │       ├───IconShowcase.astro
│   │       ├───ThemeToggle.astro
│   │       └───TypographyShowcase.astro
│   ├───data/
│   │   ├───colors.ts
│   │   ├───showcase.ts # MODIFIED: To include new component showcases
│   │   ├───types.ts # MODIFIED: To include new component props types and Zod schemas
│   │   └───components/
│   │       ├───button.ts
│   │       ├───navigation.ts # NEW: Showcase data for Navigation
│   │       ├───hero.ts # NEW: Showcase data for Hero
│   │       ├───pricing.ts # NEW: Showcase data for Pricing
│   │       ├───testimonials.ts # NEW: Showcase data for Testimonials
│   │       ├───about.ts # NEW: Showcase data for About
│   │       └───contact.ts # NEW: Showcase data for Contact
│   ├───layouts/
│   │   └───Layout.astro
│   ├───lib/
│   │   ├───accessibility.ts
│   │   ├───schemas.ts # MODIFIED: To include Zod schemas for new component props
│   │   └───theme.ts
│   ├───pages/
│   │   ├───index.astro # MODIFIED: To integrate new components for the Home page
│   │   └───components.astro # NEW: Dedicated page for component showcase
│   └───styles/
│       ├───global.css
│       └───tokens.css
```

### Known Gotchas of our codebase & Library Quirks

```typescript
// CRITICAL: Astro components use `.astro` extension and can mix HTML, CSS, and JavaScript.
// CRITICAL: Props are accessed via `Astro.props`.
// CRITICAL: Styling is typically scoped within `<style>` tags in the Astro component or imported from global/token CSS.
// CRITICAL: All new components must adhere to the existing design tokens defined in `src/styles/tokens.css`.
// CRITICAL: Component props should be typed in `src/data/types.ts` and validated using Zod in `src/lib/schemas.ts` (mirroring ButtonProps and validateButtonProps).
// CRITICAL: Component showcase data must follow the `ComponentShowcase` structure and be registered in `src/data/showcase.ts`.
// CRITICAL: Icon usage should leverage `astro-icon` as seen in `Button.astro`.
// CRITICAL: Ensure accessibility (WCAG 2.1 AA) is considered for all new components (e.g., keyboard navigation, ARIA attributes).
// CRITICAL: Performance optimization (minimal DOM, efficient CSS, no unnecessary JS) is paramount.
// CRITICAL: Use `import.meta.env.DEV` for development-only runtime validations.
```

## Implementation Blueprint

### Data models and structure

All new component props will be defined as TypeScript interfaces in `src/data/types.ts`, similar to `ButtonProps`.
Zod schemas for runtime validation of these props will be added to `src/lib/schemas.ts`, mirroring `validateButtonProps`.
Showcase data for each new component will be defined in a new `.ts` file within `src/data/components/` (e.g., `navigation.ts`), following the `ComponentShowcase` type from `src/data/types.ts`.

```typescript
// Example for a new component (e.g., NavigationProps) in src/data/types.ts
export interface NavigationProps {
  links: { label: string; href: string; }[];
  // ... other props
}

// Example for Zod schema in src/lib/schemas.ts
export const NavigationPropsSchema = z.object({
  links: z.array(z.object({ label: z.string(), href: z.string() })),
  // ... other prop validations
});

export function validateNavigationProps(data: unknown): NavigationProps {
  return NavigationPropsSchema.parse(data);
}

// Example for showcase data in src/data/components/navigation.ts
import type { ComponentShowcase } from '../types';

export const navigationShowcase: ComponentShowcase = {
  id: 'navigation',
  name: 'Navigation',
  description: 'Responsive navigation bar for site-wide access.',
  component: 'Navigation',
  groups: [
    {
      id: 'default',
      title: 'Default Navigation',
      examples: [
        {
          id: 'basic',
          label: 'Basic Navigation',
          props: { links: [{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }] },
          code: 'links={...}',
        },
      ],
    },
  ],
};
```

### List of tasks to be completed to fulfill the PRP in the order they should be completed

```yaml
Task 1: Setup Component Showcase Page
CREATE src/pages/components.astro:
  - MIRROR structure of src/pages/index.astro for basic layout.
  - IMPORT Layout from src/layouts/Layout.astro.
  - IMPORT ComponentSection from src/components/showcase/ComponentSection.astro.
  - IMPORT showcaseConfig from '@/data/showcase'.
  - RENDER ComponentSection for each component in showcaseConfig.sections.components.

Task 2: Create Navigation Component
CREATE src/components/navigation/Navigation.astro:
  - MIRROR structure and prop validation pattern from src/components/atoms/Button.astro.
  - DEFINE props for navigation links, active state, and responsiveness.
  - USE existing styling conventions from src/styles/tokens.css and src/styles/global.css.
  - ENSURE accessibility (keyboard navigation, ARIA attributes).
CREATE src/data/components/navigation.ts:
  - DEFINE navigationShowcase data following ComponentShowcase structure.
  - INCLUDE examples for different navigation states (e.g., default, with dropdowns, mobile menu).
MODIFY src/data/types.ts:
  - ADD NavigationProps interface.
MODIFY src/lib/schemas.ts:
  - ADD NavigationPropsSchema and validateNavigationProps function.
MODIFY src/data/showcase.ts:
  - IMPORT navigationShowcase.
  - ADD navigationShowcase to showcaseConfig.sections.components array.

Task 3: Create Hero Component
CREATE src/components/hero/Hero.astro:
  - MIRROR structure and prop validation pattern from src/components/atoms/Button.astro.
  - DEFINE props for title, subtitle, call-to-action (CTA) buttons (using Button component), and background imagery/gradients.
  - USE existing styling conventions (glass morphism, gradients, typography).
  - ENSURE accessibility.
CREATE src/data/components/hero.ts:
  - DEFINE heroShowcase data following ComponentShowcase structure.
  - INCLUDE examples for different hero layouts and content.
MODIFY src/data/types.ts:
  - ADD HeroProps interface.
MODIFY src/lib/schemas.ts:
  - ADD HeroPropsSchema and validateHeroProps function.
MODIFY src/data/showcase.ts:
  - IMPORT heroShowcase.
  - ADD heroShowcase to showcaseConfig.sections.components array.

Task 4: Create Pricing Component
CREATE src/components/pricing/Pricing.astro:
  - MIRROR structure and prop validation pattern from src/components/atoms/Button.astro.
  - DEFINE props for pricing plans (e.g., name, price, features, CTA).
  - USE existing styling conventions (cards, shadows, gradients).
  - ENSURE accessibility.
CREATE src/data/components/pricing.ts:
  - DEFINE pricingShowcase data following ComponentShowcase structure.
  - INCLUDE examples for different pricing tiers and features.
MODIFY src/data/types.ts:
  - ADD PricingProps interface.
MODIFY src/lib/schemas.ts:
  - ADD PricingPropsSchema and validatePricingProps function.
MODIFY src/data/showcase.ts:
  - IMPORT pricingShowcase.
  - ADD pricingShowcase to showcaseConfig.sections.components array.

Task 5: Create Testimonials Component
CREATE src/components/testimonials/Testimonials.astro:
  - MIRROR structure and prop validation pattern from src/components/atoms/Button.astro.
  - DEFINE props for testimonials (e.g., quote, author, avatar).
  - USE existing styling conventions (cards, typography).
  - ENSURE accessibility.
CREATE src/data/components/testimonials.ts:
  - DEFINE testimonialsShowcase data following ComponentShowcase structure.
  - INCLUDE examples for single and multiple testimonials.
MODIFY src/data/types.ts:
  - ADD TestimonialsProps interface.
MODIFY src/lib/schemas.ts:
  - ADD TestimonialsPropsSchema and validateTestimonialsProps function.
MODIFY src/data/showcase.ts:
  - IMPORT testimonialsShowcase.
  - ADD testimonialsShowcase to showcaseConfig.sections.components array.

Task 6: Create About Component
CREATE src/components/about/About.astro:
  - MIRROR structure and prop validation pattern from src/components/atoms/Button.astro.
  - DEFINE props for content sections (e.g., title, text, image).
  - USE existing styling conventions.
  - ENSURE accessibility.
CREATE src/data/components/about.ts:
  - DEFINE aboutShowcase data following ComponentShowcase structure.
  - INCLUDE examples for different about section layouts.
MODIFY src/data/types.ts:
  - ADD AboutProps interface.
MODIFY src/lib/schemas.ts:
  - ADD AboutPropsSchema and validateAboutProps function.
MODIFY src/data/showcase.ts:
  - IMPORT aboutShowcase.
  - ADD aboutShowcase to showcaseConfig.sections.components array.

Task 7: Create Contact Component
CREATE src/components/contact/Contact.astro:
  - MIRROR structure and prop validation pattern from src/components/atoms/Button.astro.
  - DEFINE props for contact form fields, submission handling (placeholder), and contact information.
  - USE existing styling conventions for forms and buttons.
  - ENSURE accessibility (form labels, error messages).
CREATE src/data/components/contact.ts:
  - DEFINE contactShowcase data following ComponentShowcase structure.
  - INCLUDE examples for different contact form variations.
MODIFY src/data/types.ts:
  - ADD ContactProps interface.
MODIFY src/lib/schemas.ts:
  - ADD ContactPropsSchema and validateContactProps function.
MODIFY src/data/showcase.ts:
  - IMPORT contactShowcase.
  - ADD contactShowcase to showcaseConfig.sections.components array.

Task 8: Integrate Components into Home Page
MODIFY src/pages/index.astro:
  - IMPORT all newly created components (Navigation, Hero, Pricing, Testimonials, About, Contact).
  - ARRANGE and RENDER these components to form the `/Home` page layout, following the plan's vision.
  - USE existing Layout component.

### Per task pseudocode as needed added to each task

```typescript
# Task 1: Setup Component Showcase Page
// src/pages/components.astro
---
import Layout from '../layouts/Layout.astro';
import ComponentSection from '../components/showcase/ComponentSection.astro';
import { showcaseConfig } from '../data/showcase';
---
<Layout title="Component Showcase">
  <main>
    <h1>Component Showcase</h1>
    {showcaseConfig.sections.components.map((componentData) => (
      <ComponentSection componentData={componentData} />
    ))}
  </main>
</Layout>

# Task 2: Create Navigation Component
// src/components/navigation/Navigation.astro
---
import { validateNavigationProps, type NavigationProps } from '@/lib/schemas';
// ... other imports like Icon
if (import.meta.env.DEV) {
  try {
    validateNavigationProps(Astro.props);
  } catch (error) {
    console.error('Navigation props validation failed:', error);
  }
}
const { links, ...rest } = Astro.props;
---
<nav class="navigation">
  <ul>
    {links.map(link => (
      <li><a href={link.href}>{link.label}</a></li>
    ))}
  </ul>
</nav>
<style>
  /* Apply styles using tokens.css and global.css conventions */
  .navigation {
    /* ... styling for navigation bar */
  }
</style>

// src/data/components/navigation.ts
import type { ComponentShowcase } from '../types';
export const navigationShowcase: ComponentShowcase = { /* ... data ... */ };

// src/data/types.ts
export interface NavigationProps { /* ... props ... */ }

// src/lib/schemas.ts
export const NavigationPropsSchema = z.object({ /* ... schema ... */ });
export function validateNavigationProps(data: unknown): NavigationProps { /* ... validation ... */ }

// src/data/showcase.ts
import { navigationShowcase } from './components/navigation';
export const showcaseConfig: ShowcaseConfig = {
  // ... existing config
  sections: {
    // ... existing sections
    components: [
      buttonShowcase,
      navigationShowcase, // Add new component showcase
      // ... other new components
    ],
  },
};

# Task 8: Integrate Components into Home Page
// src/pages/index.astro
---
import Layout from '../layouts/Layout.astro';
import Navigation from '../components/navigation/Navigation.astro';
import Hero from '../components/hero/Hero.astro';
// ... import other new components
---
<Layout title="Home Page">
  <Navigation links={[{ label: 'Home', href: '/' }, { label: 'Components', href: '/components' }]} />
  <Hero title="Welcome" subtitle="To our amazing theme" />
  {/* ... Render other components */}
</Layout>
```

### Integration Points

```yaml
COMPONENTS:
  - New components will reside in `src/components/{component-name}/`.
  - Each component will have its own `.astro` file.
DATA:
  - New component props types in `src/data/types.ts`.
  - New Zod schemas for validation in `src/lib/schemas.ts`.
  - New component showcase data in `src/data/components/{component-name}.ts`.
  - Central registration of showcase data in `src/data/showcase.ts`.
PAGES:
  - New `/components.astro` page for component showcase.
  - `src/pages/index.astro` will be modified to include new components for the Home page.
STYLES:
  - All styling must leverage variables from `src/styles/tokens.css`.
  - Global styles and utilities from `src/styles/global.css` should be used.
```

## Validation Loop

### Level 1: Syntax & Style

```bash
# Run these FIRST - fix any errors before proceeding
npm run lint                    # ESLint checks
npx tsc --noEmit               # TypeScript type checking
npm run format                 # Prettier formatting

# Expected: No errors. If errors, READ the error and fix.
```


### Level 2: Integration Test

```bash
# Start the dev server
npm run dev

# Test the /components page loads and displays all components
curl http://localhost:4321/components
# Expected: HTML response with all component showcases. Manually verify visual correctness.

# Test the / (Home) page loads and displays all integrated components
curl http://localhost:4321/
# Expected: HTML response with the full Home page layout. Manually verify visual correctness and interactivity.
```

### Level 3: Deployment & Creative Validation

```bash
# Production build check
npm run build

# Expected: Successful build with no errors
# Common issues:
# - "Module not found" → Check import paths
# - Type errors → Run tsc to identify

# Test production build
npm run preview

# Creative validation methods:
# - Manual review of all components on both / and /components pages for visual fidelity, responsiveness, and accessibility.
# - Lighthouse audit for performance, accessibility, best practices, and SEO.
# - Cross-browser testing.
# - Reduced motion preference testing.
```

## Final validation Checklist

-   [ ] All tests pass: `npm test`
-   [ ] No linting errors: `npm run lint`
-   [ ] No type errors: `npx tsc --noEmit`
-   [ ] All new components adhere to existing styling and design token conventions.
-   [ ] All new components are accessible (WCAG 2.1 AA).
-   [ ] Error cases handled gracefully for new components.
-   [ ] Documentation updated if needed (e.g., `README.md` if new setup instructions are required).

---

## Anti-Patterns to Avoid

-   ❌ Don't create new patterns when existing ones work (e.g., for component structure, data definition, styling).
-   ❌ Don't skip validation because "it should work".
-   ❌ Don't ignore failing tests - fix them.
-   ❌ Don't hardcode values that should be config or use design tokens.
-   ❌ Don't introduce new CSS variables if existing ones in `tokens.css` can be used.
-   ❌ Don't compromise on accessibility.
-   ❌ Don't introduce unnecessary JavaScript that impacts performance.
