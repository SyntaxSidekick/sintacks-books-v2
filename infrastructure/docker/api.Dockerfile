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
RUN pnpm --filter @sintacks/api build

FROM node:24.6.0-bookworm-slim AS runtime
ENV NODE_ENV=production
WORKDIR /app
RUN corepack enable && useradd --user-group --create-home --shell /usr/sbin/nologin nodeapp
COPY --from=build --chown=nodeapp:nodeapp /app/package.json /app/pnpm-workspace.yaml ./
COPY --from=build --chown=nodeapp:nodeapp /app/node_modules ./node_modules
COPY --from=build --chown=nodeapp:nodeapp /app/apps/api/node_modules ./apps/api/node_modules
COPY --from=build --chown=nodeapp:nodeapp /app/apps/api/dist ./apps/api/dist
COPY --from=build --chown=nodeapp:nodeapp /app/packages ./packages
USER nodeapp
EXPOSE 3010
HEALTHCHECK CMD node -e "fetch('http://127.0.0.1:3010/api/v1/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["node", "apps/api/dist/server.js"]
