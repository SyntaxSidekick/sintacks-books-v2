FROM node:24.6.0-bookworm-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app
RUN corepack enable

FROM base AS deps
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml turbo.json ./
COPY apps apps
COPY packages packages
RUN pnpm install --frozen-lockfile

FROM deps AS build
COPY . .
RUN pnpm install --frozen-lockfile --offline
RUN pnpm --filter @sintacks/database db:generate
RUN pnpm --filter @sintacks/worker build

FROM node:24.6.0-bookworm-slim AS runtime
ENV NODE_ENV=production
WORKDIR /app
RUN corepack enable && useradd --user-group --create-home --shell /usr/sbin/nologin nodeapp
COPY --from=build --chown=nodeapp:nodeapp /app/node_modules ./node_modules
COPY --from=build --chown=nodeapp:nodeapp /app/apps/worker/node_modules ./apps/worker/node_modules
COPY --from=build --chown=nodeapp:nodeapp /app/apps/worker/dist ./apps/worker/dist
COPY --from=build --chown=nodeapp:nodeapp /app/packages ./packages
USER nodeapp
CMD ["node", "apps/worker/dist/index.js"]
