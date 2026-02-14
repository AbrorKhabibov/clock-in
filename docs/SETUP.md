# Setup Guide

## Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0
- Docker and Docker Compose (optional, for containerized setup)
- PostgreSQL (if not using Docker)

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/AbrorKhabibov/clock-in.git
cd clock-in
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Set up environment variables**

Copy the example environment files:

```bash
cp apps/backend/.env.example apps/backend/.env
cp apps/dashboard/.env.example apps/dashboard/.env
cp apps/mobile/.env.example apps/mobile/.env
```

Edit the `.env` files with your configuration.

4. **Start PostgreSQL**

Using Docker:

```bash
docker-compose up postgres -d
```

Or install PostgreSQL locally and create a database named `clockin`.

5. **Run database migrations**

```bash
cd apps/backend
pnpm prisma:migrate
```

## Development

Start all apps in development mode:

```bash
pnpm dev
```

Or start individual apps:

```bash
# Backend
cd apps/backend
pnpm dev

# Dashboard
cd apps/dashboard
pnpm dev

# Mobile
cd apps/mobile
pnpm dev
```

## Building

Build all apps:

```bash
pnpm build
```

## Docker

Run the entire stack with Docker Compose:

```bash
docker-compose up -d
```

This will start:
- PostgreSQL on port 5432
- Backend API on port 3001
- Dashboard on port 3000

## Testing

Run tests:

```bash
pnpm test
```

## Linting

Lint code:

```bash
pnpm lint
```

Format code:

```bash
pnpm format
```

Check formatting:

```bash
pnpm format:check
```
