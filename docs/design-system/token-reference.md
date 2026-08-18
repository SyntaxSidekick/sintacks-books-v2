# Token Reference

Primitive tokens live under `src/tokens/primitive`:

- Color
- Typography
- Spacing
- Sizing
- Borders
- Radius
- Shadows
- Motion
- Z-index

Semantic tokens live under `src/tokens/semantic`:

- Brand and interaction color
- Text roles
- Surface roles
- Border roles
- Status roles
- Data visualization roles
- Focus and disabled behavior
- Elevation

Component tokens live under `src/tokens/component`.

Theme overrides live under `src/tokens/themes` and currently include light, dark, and high-contrast. Components should consume semantic or component tokens rather than raw primitive palette values.
