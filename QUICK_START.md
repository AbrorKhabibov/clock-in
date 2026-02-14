# Quick Start Guide

## Prerequisites
- Node.js >= 18.0.0
- pnpm >= 8.0.0
- Docker (optional)

## Setup Commands

```bash
# Install dependencies
pnpm install

# Set up environment files
cp apps/backend/.env.example apps/backend/.env
cp apps/dashboard/.env.example apps/dashboard/.env
cp apps/mobile/.env.example apps/mobile/.env
cp .env.example .env

# Start PostgreSQL with Docker
docker-compose up postgres -d

# Generate Prisma client and run migrations
cd apps/backend
pnpm prisma:generate
pnpm prisma:migrate
cd ../..

# Start all apps in development
pnpm dev
```

## Individual App Commands

```bash
# Backend (port 3001)
cd apps/backend
pnpm dev

# Dashboard (port 3000)
cd apps/dashboard
pnpm dev

# Mobile
cd apps/mobile
pnpm dev
```

## Build & Test

```bash
# Build all
pnpm build

# Lint
pnpm lint

# Format code
pnpm format

# Check formatting
pnpm format:check

# Run tests
pnpm test
```

## Docker

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

## Accessing Applications

- Backend API: http://localhost:3001
- Dashboard: http://localhost:3000
- Mobile: Scan QR code with Expo Go app

## Next Steps

1. Update environment variables with actual values
2. Implement password hashing with bcrypt in auth service
3. Add DTOs with class-validator decorators
4. Implement actual business logic
5. Add comprehensive tests
