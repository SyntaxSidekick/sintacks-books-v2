# Package Boundaries

Applications may depend on packages. Packages must not import from applications.

`apps/web` may depend on contracts, config, and later the design system. It must not access database, Redis, or S3 credentials directly.

`apps/api` may depend on database, auth, contracts, storage, email, observability, and config.

`apps/worker` may depend on infrastructure packages and contracts where needed, but not frontend packages.

`packages/contracts` must not depend on Prisma or application internals. `packages/database` must not depend on frontend packages. Reserved packages do not implement product behavior in Stage 1.
