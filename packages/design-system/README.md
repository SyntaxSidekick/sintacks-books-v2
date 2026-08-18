# @sintacks/design-system

Internal React design-system package for Sintacks Books.

The approved v2 archive is treated as reference material, not runtime source. Components are rebuilt with strict TypeScript, named exports, CSS Modules, native CSS, layered tokens, and Storybook documentation.

## Style Entrypoints

```ts
import "@sintacks/design-system/styles";
```

Token-only imports are also exported:

- `@sintacks/design-system/tokens`
- `@sintacks/design-system/tokens/primitive`
- `@sintacks/design-system/tokens/semantic`
- `@sintacks/design-system/themes`

## Fonts

The package defines font-family tokens for Manrope, Inter, and JetBrains Mono with robust fallbacks. It does not import external font providers. Applications may self-host fonts, use package-based font files, or load an external provider later by explicit product decision.
