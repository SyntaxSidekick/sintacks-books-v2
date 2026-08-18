# 0005. Design System v2 Import

Date: 2026-08-18

## Status

Accepted

## Context

The approved v2 design-system archive is useful as design direction but is not production-ready. It contains exported demo-app tooling, Tailwind tooling, custom routing, and incomplete component stories/tests.

## Decision

Use the archive as source material only. Rebuild the production package inside `@sintacks/design-system` with strict TypeScript, CSS Modules, native modern CSS, layered tokens, Storybook documentation, and behavioral tests.

Storybook is the design-system documentation surface. Tailwind and design-tool-specific tooling are isolated from production code and not imported into the monorepo package.

## Consequences

The package has a clean internal API and can be visually refined through tokens. Some documented reference examples remain deferred until they can be implemented as reusable primitives rather than copied page-local demos.
