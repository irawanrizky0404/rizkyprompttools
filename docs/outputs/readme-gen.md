# TaskFlow Pro

> Kanban-style project management for teams who want to ship faster.

[![CI Status](https://img.shields.io/github/actions/workflow/status/taskflow/taskflow-pro/ci.yml?branch=main)](https://github.com/taskflow/taskflow-pro/actions)
[![Coverage](https://img.shields.io/codecov/c/github/taskflow/taskflow-pro)](https://codecov.io/gh/taskflow/taskflow-pro)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/@taskflow/pro)](https://www.npmjs.com/package/@taskflow/pro)

---

## Features

- **Board & List Views** — Drag-and-drop with real-time sync across your team
- **Sprint Planning** — Velocity tracking, burndown charts, and estimation poker
- **Automation Rules** — If-this-then-that triggers: auto-assign, move, tag, notify
- **Integrations** — Slack, GitHub, Figma, GitLab, and 20+ more
- **Guest Access** — Share boards with stakeholders — no account required
- **API & Webhooks** — Build custom workflows on top of TaskFlow

## Quick Start

```bash
# Clone the repo
git clone https://github.com/taskflow/taskflow-pro.git
cd taskflow-pro

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Prerequisites

- Node.js 20.x or later
- PostgreSQL 16.x
- Redis 7.x (for WebSocket pub/sub and job queues)

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://localhost:5432/taskflow` |
| `REDIS_URL` | Redis connection string | `redis://localhost:6379` |
| `NEXTAUTH_SECRET` | Auth encryption key | (required) |
| `NEXTAUTH_URL` | Public-facing URL | `http://localhost:3000` |
| `GITHUB_ID` | GitHub OAuth app ID | — |
| `GITHUB_SECRET` | GitHub OAuth app secret | — |
| `SLACK_CLIENT_ID` | Slack app client ID | — |
| `SLACK_CLIENT_SECRET` | Slack app client secret | — |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run test` | Run Vitest test suite |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run lint` | ESLint check |
| `npm run format` | Prettier format |
| `npm run typecheck` | TypeScript type check |
| `npm run db:migrate` | Run Prisma migrations |
| `npm run db:seed` | Seed database with sample data |

## Project Structure

```
taskflow-pro/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── (marketing)/  # Public pages (landing, pricing, docs)
│   │   ├── (auth)/       # Login, signup, password reset
│   │   └── (dashboard)/  # Authenticated app pages
│   ├── components/       # Shared React components
│   │   ├── ui/           # Primitive UI (Button, Input, Modal)
│   │   ├── board/        # Board-specific components
│   │   └── layout/       # Navigation, sidebar, footer
│   ├── lib/              # Utilities, helpers, constants
│   ├── server/           # Server-side logic
│   │   ├── api/          # Route handlers
│   │   ├── services/     # Business logic
│   │   └── webhooks/     # External webhook handlers
│   ├── types/            # TypeScript type definitions
│   └── __tests__/        # Test files (mirrors src/)
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── seed.ts           # Seed script
├── docker-compose.yml    # Local dev services (Postgres, Redis)
└── package.json
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5.x |
| Styling | Tailwind CSS + Shadcn/ui |
| Database | PostgreSQL + Prisma |
| Cache/Queue | Redis + BullMQ |
| Auth | NextAuth.js v5 |
| Real-time | WebSocket (ws) + Redis Pub/Sub |
| Testing | Vitest + Playwright |
| CI/CD | GitHub Actions |

## Deployment

### Vercel (Frontend)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/taskflow/taskflow-pro)

### Docker

```bash
docker compose up -d
```

### Manual

```bash
npm run build
npm run start
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for our code of conduct and development process.

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.
