FROM node:20-alpine AS base
RUN corepack enable pnpm

FROM base AS builder
WORKDIR /app
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml* ./
COPY turbo.json ./
COPY packages/shared/package.json ./packages/shared/
COPY apps/dashboard/package.json ./apps/dashboard/
RUN pnpm install --frozen-lockfile

COPY packages/shared ./packages/shared
COPY apps/dashboard ./apps/dashboard
RUN cd packages/shared && pnpm build
RUN pnpm --filter @clock-in/dashboard build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/apps/dashboard/.next ./.next
COPY --from=builder /app/apps/dashboard/node_modules ./node_modules
COPY --from=builder /app/apps/dashboard/package.json ./
COPY --from=builder /app/apps/dashboard/public ./public

EXPOSE 3000
CMD ["pnpm", "start"]
