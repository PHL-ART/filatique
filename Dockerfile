ARG NODE_VERSION=22-alpine

# =========================================
# Stage 1: Install Dependencies
# =========================================
FROM node:${NODE_VERSION} AS deps

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# =========================================
# Stage 2: Build the Next.js Application
# =========================================
FROM node:${NODE_VERSION} AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

# Generate Prisma client before building to keep schema in sync
RUN npx prisma generate
RUN npm run build

# =========================================
# Stage 3: Production Runner
# =========================================
FROM node:${NODE_VERSION} AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000/api/health', (res) => process.exit(res.statusCode === 200 ? 0 : 1))" || exit 1

# Run Prisma migrations before starting the server to keep schema up to date
CMD ["sh", "-c", "npx prisma migrate deploy && node server.js"]