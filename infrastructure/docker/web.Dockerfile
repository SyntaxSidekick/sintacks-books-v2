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
RUN pnpm --filter @sintacks/web build

FROM node:24.6.0-bookworm-slim AS runtime
WORKDIR /app
RUN npm install -g serve@14.2.4 && useradd --user-group --create-home --shell /usr/sbin/nologin nodeapp
COPY --from=build --chown=nodeapp:nodeapp /app/apps/web/dist ./dist
USER nodeapp
EXPOSE 5185
HEALTHCHECK CMD node -e "fetch('http://127.0.0.1:5185').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["serve", "-s", "dist", "-l", "5185"]
