# Sintacks Books Engineering Rules

This repository uses a pnpm/Turborepo monorepo for the Sintacks Books product. Future Codex work must preserve these settled rules unless the user explicitly changes them.

## Approved Stack

- React 19 with Vite 8 for the web application.
- Strict TypeScript and native ESM throughout the workspace.
- React Router for client routing.
- TanStack Query for real server state only.
- Zustand only when a genuine global client-state need exists.
- `@sintacks/design-system` is the UI source of truth.
- CSS Modules, plain modern CSS, native CSS nesting, CSS custom properties, logical properties, container queries, modern media queries, and concise shorthand.
- Vitest, Testing Library, Playwright, Storybook, pnpm, Turborepo, and Docker Compose.

Do not introduce Next.js, Tailwind, BEM, Sass, SCSS, Less, CSS-in-JS, Styled Components, Emotion, Bootstrap, Material UI, Chakra, shadcn/ui, or another component framework.

## Monorepo Structure

- `apps/web` owns the React/Vite application.
- `apps/api` owns API server code.
- `apps/worker` owns background worker code.
- `apps/storybook` owns design-system documentation and examples.
- `packages/design-system` owns generic reusable UI, tokens, themes, styles, and design-system stories/tests.
- Other `packages/*` own shared non-UI capabilities by bounded concern.

The design-system package must never import from `apps/web`.

## React And Vite Architecture

Use modern React function components, route-level lazy loading where practical, small focused components, typed route metadata, composition over configuration-heavy abstractions, native HTML semantics, and explicit public exports. Avoid `React.FC` when it adds no value, `any`, unnecessary context, broad global state, excessive memoization, generic factories, and giant files.

## Page And CSS Ownership

Every route-level page owns a parent directory under `apps/web/src/pages/<route>/`. Page entry files coordinate the page and should not contain an entire complex implementation.

Any page-specific CSS must mirror the page structure under `apps/web/src/styles/pages/<route>/`. Layout-specific CSS must mirror layout source paths under `apps/web/src/styles/layouts/`. Shared application CSS belongs under `apps/web/src/styles/shared/` only when reuse is real.

Create only files and folders that are currently needed. Do not generate empty directories just to match a diagram.

## Component Placement Hierarchy

1. A component used only by one page belongs in that page's `components` directory.
2. A component reused across multiple application pages belongs in `shared/components`.
3. Generic reusable UI belongs in `@sintacks/design-system`.
4. Components used only by the application shell belong in `layouts/app-shell/components`.
5. Promote components only when reuse is real or clearly required. Do not create speculative abstractions.
6. Never duplicate an existing design-system or shared component locally.

## CSS Rules

Use existing design-system tokens before adding new CSS. Application CSS should mainly cover shell grid, sidebar dimensions, header positioning, content layout, responsive navigation, route-level composition, and page-specific composition.

Do not redefine design-system tokens in `apps/web`, restyle design-system internals with fragile selectors, add page-wide hard-coded color systems, duplicate tokens, or use static inline styles except for genuinely data-driven custom properties.

## State And Dependencies

Use the smallest suitable state scope: component state for local interactions, context only for genuine cross-tree shell concerns, TanStack Query only for server state, and Zustand only for a real global client-state need. Do not add dependencies unless they remove meaningful complexity now.

Keep implementation minimal, clear, and readable. Do not overengineer.

## Accessibility

Target WCAG 2.2 AA. Prefer native semantics and add ARIA only when needed. Verify skip links, landmarks, keyboard navigation, focus visibility, focus restoration, route-change focus, accessible labels, active navigation not relying on color alone, mobile focus containment, Escape handling, reduced motion, high contrast, forced colors, and 200% zoom usability.

## Testing And Verification

Use behavior-focused tests rather than snapshots. Run the appropriate subset while working and the full suite before handoff when feasible:

```bash
pnpm install --frozen-lockfile
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm storybook
docker compose config
docker compose build
```

Use `pnpm.cmd` on Windows PowerShell if script execution policy blocks `pnpm`.

## Docker And Ports

- Web: `http://localhost:5185`
- API health: `http://localhost:3010/api/v1/health`
- Storybook: `http://localhost:6010`
- Postgres: `5440`
- Redis: `6390`
- MinIO: `9010` and `9011`
- Mailpit: `1030` and `8030`

## Current Stage Boundaries

The current stage is the internal application shell: route architecture, responsive navigation, global framing, page layout foundation, route loading/error states, not-found/access-denied pages, and a reserved client-portal boundary.

Do not build product features, authentication workflows, real notification data, CRM, projects, documents, invoices, payments, reports, backend endpoints, database models, fake dashboards, fake charts, fake statistics, or mock product records during this stage.

## Preserving Work

The worktree may contain unrelated user or prior-agent changes. Inspect status before editing. Preserve unrelated work, do not revert files you did not intend to change, and do not use destructive git commands unless the user explicitly asks.
