# Database

Prisma is configured for PostgreSQL with no product-domain models in Stage 1.

Generate the client with `pnpm db:generate`. Use migrations for committed schema
changes and `pnpm --filter @sintacks/database db:deploy` for production migration
deployment. Application replicas do not run migrations during startup.
