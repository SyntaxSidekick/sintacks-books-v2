# 0006. Application Shell And Page Module Architecture

## Status

Accepted

## Context

Sintacks Books needs an internal application shell before product modules are implemented. The shell must establish route ownership, layout boundaries, navigation, theme behavior, responsive behavior, and accessibility expectations without creating fake product functionality.

## Decision

Use React Router with lazy route modules, a single typed navigation source of truth, an internal `AppShell`, and a separate `ClientPortalBoundary` for `/portal/*`.

Route-level pages own parent directories under `apps/web/src/pages`. Application CSS mirrors source ownership under `apps/web/src/styles`. Generic reusable UI remains in `@sintacks/design-system`; shell-only components stay under `layouts/app-shell/components`.

## Consequences

The application can add future modules without duplicating navigation or breadcrumb metadata. The client portal can evolve independently. The shell remains lightweight, accessible, and honest about deferred product functionality.
