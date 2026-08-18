# Application Shell Routes

The route tree is declared in `apps/web/src/app/router/routes.tsx`. Navigation metadata is declared once in `apps/web/src/app/config/navigation.ts`.

Routes:

- `/` redirects to `/overview`
- `/overview`
- `/sales`
- `/clients`
- `/projects`
- `/documents`
- `/finances`
- `/reports`
- `/team`
- `/settings`
- `/notifications`
- `/access-denied`
- `/portal/*`
- `*`

Internal routes render inside `AppShell`. `/portal/*` renders inside `ClientPortalBoundary` and intentionally does not use the internal shell.

Breadcrumbs are generated from route metadata rather than maintained separately.
