## Visual Identity System

#### **Primary Brand Colors**

```css
/* Warm Amber-Orange (Primary) */
--brand-primary-50: 39 100% 97%; /* #fefcf3 */
--brand-primary-100: 39 100% 91%; /* #fef3c7 */
--brand-primary-200: 39 96% 80%; /* #fde68a */
--brand-primary-400: 39 92% 65%; /* #fbbf24 */
--brand-primary-500: 39 85% 55%; /* #f59e0b */
--brand-primary-600: 39 88% 50%; /* #d97706 */
--brand-primary-700: 39 90% 40%; /* #b45309 */
--brand-primary-800: 39 88% 32%; /* #92400e */
--brand-primary-900: 39 80% 25%; /* #78350f */

/* Deep Navy-Slate (Secondary) */
--brand-secondary-50: 210 40% 98%; /* #f8fafc */
--brand-secondary-100: 210 40% 96%; /* #f1f5f9 */
--brand-secondary-200: 214 32% 91%; /* #e2e8f0 */
--brand-secondary-400: 215 20% 65%; /* #94a3b8 */
--brand-secondary-500: 215 16% 47%; /* #64748b */
--brand-secondary-600: 215 19% 35%; /* #475569 */
--brand-secondary-700: 215 25% 27%; /* #334155 */
--brand-secondary-800: 217 33% 17%; /* #1e293b */
--brand-secondary-900: 222 47% 11%; /* #0f172a */
```

#### **Accent Colors**

```css
/* Warm Cream-Beige (Accent) */
--accent-warm-50: 30 40% 98%; /* #faf8f5 */
--accent-warm-100: 30 33% 94%; /* #f3f0e9 */
--accent-warm-200: 30 29% 88%; /* #e6dfd4 */
--accent-warm-300: 30 25% 78%; /* #d4c5b0 */
--accent-warm-400: 30 20% 65%; /* #b8a082 */
--accent-warm-500: 30 15% 50%; /* #8b7355 */

/* Success Green (Functional) */
--success: 160 84% 39%; /* #059669 */
--success-light: 160 84% 88%; /* #d1fae5 */

/* Warning Orange (Functional) */
--warning: 25 95% 53%; /* #f97316 */
--warning-light: 25 95% 90%; /* #fed7aa */
```

### **Retro Beige Light Theme**

```css
:root {
  /* Backgrounds */
  --background: 30 40% 98%; /* Warm cream white */
  --surface: 30 33% 94%; /* Light beige */
  --surface-elevated: 30 29% 88%; /* Warm beige */

  /* Text */
  --text-primary: 222 47% 11%; /* Deep navy */
  --text-secondary: 215 25% 27%; /* Medium slate */
  --text-muted: 215 16% 47%; /* Light slate */

  /* Brand Elements */
  --brand-primary: 39 85% 55%; /* Warm amber */
  --brand-secondary: 215 25% 27%; /* Deep slate */
  --accent: 30 25% 78%; /* Warm beige */

  /* Borders & Dividers */
  --border: 30 25% 78%; /* Warm beige */
  --border-subtle: 30 29% 88%; /* Light warm beige */
}
```

### **Warm Dark Theme**

```css
.dark {
  /* Backgrounds */
  --background: 222 47% 11%; /* Deep navy */
  --surface: 217 33% 17%; /* Dark slate */
  --surface-elevated: 215 25% 27%; /* Medium slate */

  /* Text */
  --text-primary: 30 40% 98%; /* Warm cream */
  --text-secondary: 30 33% 94%; /* Light beige */
  --text-muted: 30 25% 78%; /* Warm beige */

  /* Brand Elements */
  --brand-primary: 39 92% 65%; /* Bright amber */
  --brand-secondary: 39 100% 91%; /* Light amber */
  --accent: 30 25% 78%; /* Warm beige */

  /* Borders & Dividers */
  --border: 215 25% 27%; /* Medium slate */
  --border-subtle: 217 33% 17%; /* Dark slate */
}
```

### **Typography Hierarchy**

#### **Font Selection**

- **Primary**: Inter (modern, readable, professional)
- **Headings**: Inter with increased font-weight
- **Code**: JetBrains Mono (technical content)
- **Fallback**: system-ui, sans-serif

#### **Type Scale**

```css
/* Display */
--text-display: 4rem; /* 64px - Hero headlines */
--text-title: 3rem; /* 48px - Page titles */
--text-headline: 2.25rem; /* 36px - Section headers */
--text-subhead: 1.5rem; /* 24px - Subsection headers */

/* Body */
--text-body-lg: 1.125rem; /* 18px - Large body text */
--text-body: 1rem; /* 16px - Regular body text */
--text-body-sm: 0.875rem; /* 14px - Small body text */
--text-caption: 0.75rem; /* 12px - Captions, labels */

/* Code */
--text-code: 0.875rem; /* 14px - Code blocks */
--text-code-sm: 0.75rem; /* 12px - Inline code */
```

### **Icon System & Illustrations**

#### **Icon Library**

- **Primary**: Astro Icon (200,000+ icons, zero runtime footprint)
- **Style**: Stroke-based, 2px weight preferred
- **Sizes**: 16px, 20px, 24px, 32px
- **Colors**: Match text colors for consistency
- **Installation**: `npx astro add astro-icon`

#### **Recommended Icon Sets**

- **Lucide**: Clean, consistent stroke-based icons
- **Heroicons**: Tailwind-compatible design system
- **Tabler**: Large collection of outline icons
- **Feather**: Minimalist, clean design

#### **Key Brand Icons**

- **Coffee**: `mdi:coffee` - Approachable, human side
- **Code**: `mdi:code-tags` - Technical expertise  
- **Target**: `mdi:target` - Precision, results-focused
- **Lightbulb**: `mdi:lightbulb-on` - Innovation, insights
- **Users**: `mdi:account-group` - Team-focused approach

#### **Usage Examples**

```astro
---
import { Icon } from 'astro-icon/components'
---
<Icon name="mdi:coffee" size={24} />
<Icon name="lucide:code" size={20} />
<Icon name="heroicons:light-bulb" size={16} />
```

### **Visual Elements**

#### **Simple Visual Indicators**

```css
/* Gentle progression indicators */
.progress-indicator {
  --primary-warm: hsl(39, 85%, 55%); /* Warm amber */
  --secondary-warm: hsl(39, 85%, 55%, 0.2); /* Gentle amber */
  animation: gentle-pulse 2s ease-in-out infinite;
}

@keyframes gentle-pulse {
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
}

/* Card styling */
.card {
  background: rgba(250, 248, 245, 0.95);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(212, 197, 176, 0.4);
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);
}

/* Subtle gradients */
.gradient-bg {
  background: linear-gradient(135deg, hsl(30, 40%, 98%) 0%, hsl(30, 33%, 94%) 100%);
}

.gradient-accent {
  background: linear-gradient(135deg, hsl(39, 85%, 55%) 0%, hsl(39, 88%, 50%) 100%);
}
```

#### **Layout & Spacing**

```css
/* Spacing system */
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
--space-3xl: 4rem;     /* 64px */

/* Responsive containers */
.container-lg { max-width: 1200px; }
.container-md { max-width: 1000px; }
.container-sm { max-width: 800px; }
```
