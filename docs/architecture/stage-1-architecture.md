# Stage 1 Architecture

Sintacks Books starts as a TypeScript monorepo with separate web, API, worker, and Storybook apps. Shared packages define contracts, configuration, persistence, integration boundaries, and observability. Applications may import packages; packages must not import application internals.

The backend is a modular monolith exposed through REST endpoints and OpenAPI documentation. PostgreSQL is the future source of truth, accessed through Prisma. Redis is reserved for jobs, rate-limit state, and coordination. The worker owns BullMQ job processing.

The frontend and API are deployable separately. A combined Node deployment path is reserved for hosts that expect one Node process, but Docker is not required for production execution.

Secrets remain server-only. Browser configuration is parsed through a separate public schema and must never include database, Redis, S3, auth, payment, or email secrets.
