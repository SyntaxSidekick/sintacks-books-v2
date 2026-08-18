# Design System Architecture

The design system lives in `packages/design-system` and has no app, API, database, auth, or product-domain dependencies.

## Layers

Primitive tokens define raw values. Semantic tokens map values to product-agnostic meaning. Component tokens provide local component roles. CSS Modules consume semantic or component tokens.

```text
primitive value -> semantic purpose -> component token -> component CSS Module
```

CSS is organized with cascade layers:

```css
@layer sintacks.reset, sintacks.tokens, sintacks.base, sintacks.components, sintacks.utilities;
```

The package exports React components from `src/index.ts` and style entrypoints from package exports. React, React DOM, and Lucide React are peer dependencies.

Storybook in `apps/storybook` imports `@sintacks/design-system/styles` and provides light, dark, and high-contrast theme switching.
