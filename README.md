# Sintacks Books

Sintacks Books is a new SaaS foundation for a future connected client-operations platform. This repository currently contains the Stage 1 technical foundation only.

Product features, the application shell, authentication screens, and domain database models are not implemented yet.

## Stack

Node.js 24, pnpm workspaces, Turborepo, TypeScript strict mode, React, Vite 8 for the web app, Express 5, REST/OpenAPI, Zod, Prisma/PostgreSQL, Redis/BullMQ, S3-compatible storage with MinIO locally, Mailpit, Pino, Vitest, Testing Library, MSW, Playwright, Docker Compose, GitHub Actions, and Storybook. Storybook currently uses its Vite 7-compatible builder dependency because Storybook 9 does not declare Vite 8 peer support.

## Ports

API `3010`, web `5185`, Storybook `6010`, PostgreSQL `5440`, Redis `6390`, MinIO API `9010`, MinIO console `9011`, Mailpit SMTP `1030`, Mailpit web `8030`.

## Setup

Copy `.env.example` to `.env` for local shell workflows and replace secrets before any production use.

```bash
pnpm install --frozen-lockfile
pnpm db:generate
pnpm dev
```

Docker workflow:

```bash
docker compose up --build
docker compose down
```

Direct production-style Node workflow:

```bash
pnpm install --frozen-lockfile
pnpm build
pnpm --filter @sintacks/database db:deploy
pnpm start
```

The API can be configured later to serve built web assets with `SERVE_WEB_STATIC=true`; separate frontend/API deployment remains the default architecture.

## Commands

Use root commands: `pnpm build`, `pnpm lint`, `pnpm format:check`, `pnpm typecheck`, `pnpm test`, `pnpm test:e2e`, `pnpm storybook`, `pnpm docker:up`, `pnpm docker:down`, `pnpm docker:logs`, `pnpm docker:build`, `pnpm db:generate`, `pnpm db:migrate`, `pnpm db:studio`.

## URLs

Web diagnostics: http://localhost:5185  
API health: http://localhost:3010/api/v1/health  
API readiness: http://localhost:3010/api/v1/ready  
API docs: http://localhost:3010/api/docs  
Storybook: http://localhost:6010  
MinIO console: http://localhost:9011  
Mailpit: http://localhost:8030

## Structure

`apps/web`, `apps/api`, `apps/worker`, and `apps/storybook` contain runnable services. Shared packages live under `packages/`. Docker files live in `infrastructure/docker`. Architecture notes and ADRs live in `docs/`.

## Data Safety

`docker compose down` keeps named volumes. To intentionally remove local development data, run `docker compose down --volumes` only when that data is no longer needed.

## Troubleshooting

If readiness is `not_ready`, start the Compose dependencies and verify PostgreSQL, Redis, MinIO, and Mailpit health. If ports are occupied, change the relevant environment variables consistently in `.env`.
