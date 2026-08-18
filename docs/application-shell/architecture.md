# Application Shell Architecture

The internal shell lives under `apps/web/src/layouts/app-shell` and wraps only internal routes. The reserved client portal boundary lives under `apps/web/src/layouts/client-portal` so future portal work is not coupled to the internal frame.

Dependency direction remains:

```text
Application entry -> providers/router -> layouts -> pages -> page-owned components -> design-system
```

The shell owns sidebar state, mobile navigation state, route search, breadcrumbs, and header composition. Product modules are represented by honest route placeholders only.

Page routes own parent directories under `apps/web/src/pages/<route>/`. CSS mirrors source ownership under `apps/web/src/styles`, with layout CSS under `styles/layouts` and page CSS under `styles/pages`.

`@sintacks/design-system` remains the UI source of truth. Application CSS exists only for shell grid, sidebar, header, mobile navigation, route composition, and small page layout needs.
