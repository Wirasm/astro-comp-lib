### Component Registration guidelines

📋 Component Showcase Architecture

1. Component Creation

First, you create the actual component file:
src/
components/
atoms/Button.astro ← Atomic component
molecules/FloatingCard.astro ← Molecular component
organisms/ModernNavigation.astro ← Organism component

2. Showcase Data Creation

Each component needs a showcase data file in
src/data/components/:

// src/data/components/myNewComponent.ts
import type { ComponentShowcase } from '../types';

export const myNewComponentShowcase: ComponentShowcase = {
id: 'my-new-component', // Unique ID
name: 'MyNewComponent', // Display name
description: 'Component description',
component: 'MyNewComponent', // MUST match componentMap
key
groups: [ // Organized examples
{
id: 'basic',
title: 'Basic Examples',
examples: [
{
id: 'default',
label: 'Default Example',
description: 'Basic usage',
code: `<MyNewComponent prop="value" />`,
props: {
prop: 'value',
// All props the component needs
},
},
],
},
],
};

3. Component Registration

Add your component to the componentMap in
ComponentExample.astro:

// src/components/showcase/ComponentExample.astro
import MyNewComponent from
'@/components/path/MyNewComponent.astro';

const componentMap = {
Button: Button,
FloatingCard: FloatingCard,
ModernNavigation: ModernNavigation,
MyNewComponent: MyNewComponent, // ← Add here
} as const;

🚨 CRITICAL: The key MyNewComponent MUST exactly match the
component field in your showcase data.

4. Add to Main Showcase Config

Register your showcase in the main config:

// src/data/showcase.ts
import { myNewComponentShowcase } from
'./components/myNewComponent';

export const showcaseConfig: ShowcaseConfig = {
sections: {
components: [
buttonShowcase,
floatingCardShowcase,
modernNavigationShowcase,
myNewComponentShowcase, // ← Add here
],
},
};

🔄 How It Renders on the Page

Flow Diagram:

index.astro
↓
showcaseConfig.sections.components.map()
↓
ComponentSection.astro (for each component)
↓
showcase.groups.map() (for each group)
↓
group.examples.map() (for each example)
↓
ComponentExample.astro
↓
componentMap[componentName] (looks up actual component)
↓
<Component {...example.props} />

Detailed Render Process:

1. index.astro loops through
   showcaseConfig.sections.components
   {showcaseConfig.sections.components.map((component) => (
   <ComponentSection showcase={component} />
   ))}

2. ComponentSection.astro receives the showcase data and loops
through groups:
{showcase.groups.map((group) => (
  <div class="component-group">
    <h3>{group.title}</h3>
    <div class="component-grid">
      {group.examples.map((example) => (
        <ComponentExample
          example={example}
          componentName={showcase.component}  // ← Key part!
        />
      ))}
    </div>
  </div>
))}

3. ComponentExample.astro receives the example data and
   component name:
   const Component = componentMap[componentName as keyof typeof
   componentMap];
   // componentName = "MyNewComponent"
   // Component = MyNewComponent (the actual Astro component)

<Component {...example.props}>
{example.label}
</Component>

⚠️ Common Issues & Fixes

Error: Component not found in componentMap

Component "MyNewComponent" not found in componentMap
Fix: Ensure the component field in showcase data exactly
matches a key in componentMap.

Error: Cannot import component

Cannot resolve '@/components/molecules/MyComponent.astro'
Fix: Check the import path in ComponentExample.astro.

Component doesn't render props correctly

Fix: Ensure example.props contains all required props for your
component.

🎯 Quick Checklist for Adding New Components

1. ✅ Create component file
2. ✅ Create showcase data file with correct component name
3. ✅ Import component in ComponentExample.astro
4. ✅ Add to componentMap with matching key
5. ✅ Add showcase to main showcaseConfig
6. ✅ Test that component renders with provided props

This architecture allows for completely dynamic component
showcasing where you can add unlimited components, examples,
and variations just by updating the data files!
