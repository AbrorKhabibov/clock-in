# Clock-In Monorepo

A full-stack monorepo for employee time tracking with NFC support, built with pnpm and Turborepo.

## 🏗️ Architecture

This monorepo contains:

- **📱 mobile** - React Native app with NFC, authentication, and time tracking
- **⚙️ backend** - NestJS REST API with Prisma ORM and PostgreSQL
- **📊 dashboard** - Next.js admin panel with Tailwind CSS
- **📦 shared** - Shared TypeScript types and constants
- **📚 docs** - Comprehensive documentation

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0
- Docker (optional)

### Installation

```bash
# Clone the repository
git clone https://github.com/AbrorKhabibov/clock-in.git
cd clock-in

# Install dependencies
pnpm install

# Copy environment files
cp apps/backend/.env.example apps/backend/.env
cp apps/dashboard/.env.example apps/dashboard/.env
cp apps/mobile/.env.example apps/mobile/.env

# Start PostgreSQL with Docker
docker-compose up postgres -d

# Run database migrations
cd apps/backend && pnpm prisma:migrate && cd ../..

# Start all apps in development mode
pnpm dev
```

## 📦 Apps & Packages

### Apps

- `mobile` - React Native mobile app (Expo)
  - NFC support for clock in/out
  - Authentication
  - Schedule viewing
  - Profile management

- `backend` - NestJS REST API
  - Auth module with JWT
  - Users management
  - Companies management
  - Schedules management
  - Time logs tracking
  - NFC tags verification

- `dashboard` - Next.js admin dashboard
  - Admin panel UI
  - Tailwind CSS styling
  - Server-side rendering

### Packages

- `shared` - Shared TypeScript definitions
  - Common types
  - Constants
  - API routes

## 🛠️ Development

### Start all apps

```bash
pnpm dev
```

### Start individual apps

```bash
# Backend API (http://localhost:3001)
cd apps/backend && pnpm dev

# Dashboard (http://localhost:3000)
cd apps/dashboard && pnpm dev

# Mobile app
cd apps/mobile && pnpm dev
```

### Build all apps

```bash
pnpm build
```

### Lint and format

```bash
pnpm lint
pnpm format
pnpm format:check
```

## 🐳 Docker

Run the entire stack with Docker Compose:

```bash
docker-compose up -d
```

Services:
- PostgreSQL: `localhost:5432`
- Backend API: `localhost:3001`
- Dashboard: `localhost:3000`

## 📚 Documentation

- [Setup Guide](./docs/SETUP.md)
- [API Documentation](./docs/API.md)
- [Mobile App Guide](./docs/MOBILE.md)

## 🧰 Tech Stack

- **Monorepo**: pnpm, Turborepo
- **Backend**: NestJS, Prisma, PostgreSQL, JWT
- **Mobile**: React Native, Expo, NFC Manager
- **Dashboard**: Next.js 14, Tailwind CSS, React 18
- **Shared**: TypeScript
- **DevOps**: Docker, GitHub Actions
- **Code Quality**: ESLint, Prettier

## 📁 Project Structure

```
clock-in/
├── apps/
│   ├── mobile/          # React Native app
│   ├── backend/         # NestJS API
│   └── dashboard/       # Next.js admin panel
├── packages/
│   └── shared/          # Shared types & constants
├── docs/                # Documentation
├── .github/
│   └── workflows/       # CI/CD pipelines
├── docker-compose.yml   # Docker configuration
├── turbo.json          # Turborepo configuration
├── pnpm-workspace.yaml # pnpm workspace config
└── package.json        # Root package.json
```

## 🔐 Environment Variables

Each app requires environment variables. Copy the `.env.example` files:

### Backend (`apps/backend/.env`)
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - JWT secret key
- `JWT_EXPIRES_IN` - Token expiration time
- `PORT` - API port (default: 3001)
- `CORS_ORIGIN` - Allowed CORS origins

### Dashboard (`apps/dashboard/.env`)
- `NEXT_PUBLIC_API_URL` - Backend API URL

### Mobile (`apps/mobile/.env`)
- `EXPO_PUBLIC_API_URL` - Backend API URL

## 🧪 Testing

```bash
pnpm test
```

## 📝 License

MIT

## 👥 Contributing

Contributions are welcome! Please read the documentation for details on our code of conduct and the process for submitting pull requests.