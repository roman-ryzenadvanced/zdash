<div align="center">

# ⚡ ZDash

**A beautiful, production-ready SaaS dashboard template built with Next.js 16**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6-2D3748?style=flat-square&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)

[🚀 Getting Started](#-getting-started) · [✨ Features](#-features) · [🛠 Tech Stack](#-tech-stack) · [📁 Project Structure](#-project-structure) · [🤝 Contributing](#-contributing)

</div>

---

<div align="center">

<a href="https://z.ai/subscribe?ic=ROK78RJKNW">
<img src="https://img.shields.io/badge/🚀_Z.ai_Coding_Plans-10%25_OFF-6366f1?style=for-the-badge&labelColor=0f172a&color=6366f1" alt="Z.ai Coding Plans - 10% OFF" />
</a>

### ✨ Supercharge your development with **Z.ai** — the latest GLM models, AI-powered coding, and one-prompt workflows

[![Plans](https://img.shields.io/badge/Subscribe-10%25_OFF_with_token-8b5cf6?style=flat-square)](https://z.ai/subscribe?ic=ROK78RJKNW)
[![GLM](https://img.shields.io/badge/Powered_by-GLM_Latest-3178C6?style=flat-square)](https://z.ai)
[![AI Coding](https://img.shields.io/badge/Feature-AI_Coding_Agent-06B6D4?style=flat-square)](https://z.ai)

**Use invite code → [z.ai/subscribe?ic=ROK78RJKNW](https://z.ai/subscribe?ic=ROK78RJKNW) ← for 10% OFF any plan**

</div>

---

> **Screenshot Placeholder**
>
> _Add your dashboard screenshot here:_
> `![ZDash Dashboard](./docs/screenshots/dashboard.png)`

---

## ✨ Features

### Core

- 🏗️ **Next.js 16 App Router** — Server components, streaming, and the latest React features
- 🔒 **Authentication** — Ready-to-use auth API routes with NextAuth.js support
- 📊 **Analytics Dashboard** — Beautiful charts, stats cards, and activity feeds
- 💳 **Stripe Integration** — Webhook handlers and billing API routes out of the box
- 🎨 **Tailwind CSS 4** — Utility-first styling with custom design tokens
- 🗄️ **Prisma ORM** — Type-safe database access with SQLite (easily swappable)
- 📱 **Fully Responsive** — Mobile-first design that looks great on every screen
- 🌙 **Dark Mode Ready** — Built with dark mode support from the ground up

### Dashboard

- 📈 **Stats Overview** — Revenue, users, sessions, and conversion metrics with trend indicators
- 📋 **Activity Feed** — Real-time recent activity table with status badges
- ⚡ **Quick Actions** — One-click access to common tasks
- 🧭 **Collapsible Sidebar** — Space-saving navigation with smooth transitions
- 🔔 **Notification System** — Header bar with notification indicators

### Developer Experience

- 🧩 **TypeScript Throughout** — Strict typing for maximum safety
- 🪝 **ESLint Config** — Next.js-optimized linting rules
- 🧪 **Vitest + Playwright** — Unit and E2E testing setup included
- 🐳 **Docker Support** — Dockerfile and docker-compose for easy deployment
- 📂 **Clean Architecture** — Separated concerns with scalable folder structure

---

## 🛠 Tech Stack

| Category         | Technology                                  |
| ---------------- | ------------------------------------------- |
| **Framework**    | [Next.js 16](https://nextjs.org/)           |
| **Language**     | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling**      | [Tailwind CSS 4](https://tailwindcss.com/)  |
| **Database**     | [Prisma](https://www.prisma.io/) + SQLite   |
| **Payments**     | [Stripe](https://stripe.com/)               |
| **Icons**        | [Lucide React](https://lucide.dev/)         |
| **Validation**   | [Zod](https://zod.dev/)                     |
| **Testing**      | [Vitest](https://vitest.dev/) + [Playwright](https://playwright.dev/) |
| **Containerization** | [Docker](https://www.docker.com/)       |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **bun** (recommended) or npm/pnpm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/zdash.git
cd zdash

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local

# Set up the database
bun run db:push

# Start the development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="file:./dev.db"

# Stripe (optional for development)
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# Auth (optional for development)
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000
```

### Available Scripts

| Command               | Description                           |
| --------------------- | ------------------------------------- |
| `bun run dev`         | Start development server              |
| `bun run build`       | Create production build               |
| `bun run start`       | Start production server               |
| `bun run lint`        | Run ESLint                            |
| `bun run test`        | Run unit tests with Vitest            |
| `bun run test:e2e`    | Run end-to-end tests with Playwright  |
| `bun run db:push`     | Push Prisma schema to database        |
| `bun run db:studio`   | Open Prisma Studio                    |
| `bun run db:generate` | Generate Prisma client                |

---

## 📁 Project Structure

```
zdash/
├── prisma/
│   └── schema.prisma         # Database schema
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   └── route.ts  # Authentication API
│   │   │   └── stripe/
│   │   │       └── route.ts  # Stripe webhook handler
│   │   ├── dashboard/
│   │   │   ├── layout.tsx    # Dashboard layout (sidebar + header)
│   │   │   └── page.tsx      # Dashboard home with stats & charts
│   │   ├── globals.css       # Global styles & custom utilities
│   │   ├── layout.tsx        # Root layout with metadata & fonts
│   │   └── page.tsx          # Landing page
│   └── lib/
│       └── db.ts             # Prisma client instance
├── tests/
│   └── main.test.ts          # Test files
├── docker-compose.yml        # Docker compose config
├── Dockerfile                # Docker configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies & scripts
├── tsconfig.json             # TypeScript configuration
└── vitest.config.ts          # Vitest configuration
```

---

## 🎨 Design Philosophy

ZDash follows a **clean, modern SaaS aesthetic** with:

- **Gradient accents** — Subtle gradients that add depth without distraction
- **Consistent spacing** — 4px/8px grid system throughout
- **Clear hierarchy** — Typography and color guide the eye naturally
- **Micro-interactions** — Hover states, transitions, and feedback on every action
- **Accessible first** — ARIA labels, keyboard navigation, and semantic HTML

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — New features
- `fix:` — Bug fixes
- `docs:` — Documentation changes
- `style:` — Code style changes (formatting, etc.)
- `refactor:` — Code refactoring
- `test:` — Adding or updating tests
- `chore:` — Build process or tooling changes

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.

---

<div align="center">

**Built with ❤️ by the ZDash team · Powered by [z.ai](https://z.ai)**

</div>

