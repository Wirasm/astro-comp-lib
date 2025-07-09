## Visual Identity System

#### **Primary Brand Colors**

```css
/* Warm Terracotta/Rust (Primary) */
--brand-primary-50: 16 45% 95%; /* #f5f0ed */
--brand-primary-100: 16 45% 88%; /* #ebe0db */
--brand-primary-200: 16 45% 78%; /* #dcc7bd */
--brand-primary-300: 16 45% 68%; /* #cdae9f */
--brand-primary-400: 16 45% 58%; /* #be9581 */
--brand-primary-500: 16 45% 48%; /* #b85c3c */
--brand-primary-600: 16 50% 43%; /* #a64d2f */
--brand-primary-700: 16 55% 38%; /* #943e22 */
--brand-primary-800: 16 60% 33%; /* #822f15 */
--brand-primary-900: 16 65% 28%; /* #702008 */

/* Deep Charcoal (Secondary) */
--brand-secondary-50: 25 8% 92%; /* #ebebea */
--brand-secondary-100: 25 8% 85%; /* #d7d7d5 */
--brand-secondary-200: 25 8% 70%; /* #b8b8b6 */
--brand-secondary-300: 25 8% 55%; /* #999997 */
--brand-secondary-400: 25 8% 40%; /* #7a7a78 */
--brand-secondary-500: 25 8% 25%; /* #5b5b59 */
--brand-secondary-600: 25 8% 20%; /* #4a4a48 */
--brand-secondary-700: 25 8% 15%; /* #393937 */
--brand-secondary-800: 25 8% 10%; /* #282826 */
--brand-secondary-900: 25 8% 8%; /* #161514 */
```

#### **Accent Colors**

```css
/* Warm Golden Beige (Accent) */
--accent-warm-50: 35 100% 97%; /* #fff6e9 */
--accent-warm-100: 35 80% 92%; /* #f9ecdb */
--accent-warm-200: 35 70% 85%; /* #f0dcc4 */
--accent-warm-300: 35 60% 78%; /* #e7ccad */
--accent-warm-400: 35 50% 71%; /* #debc96 */
--accent-warm-500: 35 40% 64%; /* #e5af7d */
--accent-warm-600: 35 45% 57%; /* #d19f66 */
--accent-warm-700: 35 50% 50%; /* #bd8f4f */
--accent-warm-800: 35 55% 43%; /* #a97f38 */
--accent-warm-900: 35 60% 36%; /* #956f21 */

/* Sage Green (Success/Accent) */
--success-50: 155 35% 95%; /* #f0f7f4 */
--success-100: 155 35% 88%; /* #e0efea */
--success-200: 155 35% 78%; /* #c7e2d5 */
--success-300: 155 35% 68%; /* #aed5c0 */
--success-400: 155 35% 58%; /* #9bceb5 */
--success-500: 155 35% 48%; /* #82b89e */
--success-600: 155 40% 43%; /* #6fa487 */
--success-700: 155 45% 38%; /* #5c9070 */
--success-800: 155 50% 33%; /* #497c59 */
--success-900: 155 55% 28%; /* #366842 */

/* Warning (derived from primary) */
--warning: 16 45% 48%; /* #b85c3c */
--warning-light: 16 45% 88%; /* #ebe0db */
```

### **Retro Warm Light Theme**

```css
:root {
  /* Backgrounds */
  --background: 35 100% 97%; /* #fff6e9 - Warm cream white */
  --surface: 35 80% 92%; /* #f9ecdb - Light golden beige */
  --surface-elevated: 35 70% 85%; /* #f0dcc4 - Warm beige */

  /* Text */
  --text-primary: 25 8% 8%; /* #161514 - Deep charcoal */
  --text-secondary: 25 8% 15%; /* #393937 - Medium charcoal */
  --text-muted: 25 8% 25%; /* #5b5b59 - Light charcoal */

  /* Brand Elements */
  --brand-primary: 16 45% 48%; /* #b85c3c - Warm terracotta */
  --brand-secondary: 35 40% 64%; /* #e5af7d - Golden beige */
  --accent: 155 35% 58%; /* #9bceb5 - Sage green */

  /* Borders & Dividers */
  --border: 35 60% 78%; /* #e7ccad - Warm beige */
  --border-subtle: 35 70% 85%; /* #f0dcc4 - Light warm beige */
}
```

### **Retro Warm Dark Theme**

```css
.dark {
  /* Backgrounds */
  --background: 25 8% 8%; /* #161514 - Deep charcoal */
  --surface: 25 8% 15%; /* #393937 - Medium charcoal */
  --surface-elevated: 25 8% 20%; /* #4a4a48 - Lighter charcoal */

  /* Text */
  --text-primary: 35 100% 97%; /* #fff6e9 - Warm cream */
  --text-secondary: 35 80% 92%; /* #f9ecdb - Light golden beige */
  --text-muted: 35 60% 78%; /* #e7ccad - Warm beige */

  /* Brand Elements */
  --brand-primary: 16 50% 58%; /* #c16c4c - Lighter terracotta */
  --brand-secondary: 35 50% 71%; /* #debc96 - Warm golden */
  --accent: 155 40% 68%; /* #aed5c0 - Lighter sage green */

  /* Borders & Dividers */
  --border: 25 8% 25%; /* #5b5b59 - Medium charcoal */
  --border-subtle: 25 8% 20%; /* #4a4a48 - Lighter charcoal */
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
  --primary-warm: hsl(16, 45%, 48%); /* Warm terracotta */
  --secondary-warm: hsl(16, 45%, 48%, 0.2); /* Gentle terracotta */
  animation: gentle-pulse 2s ease-in-out infinite;
}

@keyframes gentle-pulse {
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
}

/* Card styling */
.card {
  background: rgba(255, 246, 233, 0.95); /* Warm cream background */
  backdrop-filter: blur(8px);
  border: 1px solid rgba(231, 204, 173, 0.4); /* Warm beige border */
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(22, 21, 20, 0.08); /* Charcoal shadow */
}

/* Dark theme card styling */
.dark .card {
  background: rgba(57, 57, 55, 0.95); /* Medium charcoal */
  border: 1px solid rgba(91, 91, 89, 0.4); /* Light charcoal border */
  box-shadow: 0 4px 16px rgba(22, 21, 20, 0.3); /* Deeper shadow */
}

/* Subtle gradients */
.gradient-bg {
  background: linear-gradient(135deg, hsl(35, 100%, 97%) 0%, hsl(35, 80%, 92%) 100%);
}

.gradient-accent {
  background: linear-gradient(135deg, hsl(16, 45%, 48%) 0%, hsl(16, 50%, 43%) 100%);
}

/* Dark theme gradients */
.dark .gradient-bg {
  background: linear-gradient(135deg, hsl(25, 8%, 8%) 0%, hsl(25, 8%, 15%) 100%);
}

.dark .gradient-accent {
  background: linear-gradient(135deg, hsl(16, 50%, 58%) 0%, hsl(16, 45%, 53%) 100%);
}

/* Sage green accent elements */
.accent-sage {
  background: hsl(155, 35%, 58%); /* Sage green */
  color: hsl(25, 8%, 8%); /* Dark text on sage */
}

.dark .accent-sage {
  background: hsl(155, 40%, 68%); /* Lighter sage for dark theme */
  color: hsl(25, 8%, 8%); /* Keep dark text for contrast */
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
