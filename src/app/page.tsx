'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  CreditCard,
  LayoutDashboard,
  Lock,
  Menu,
  X,
  Zap,
  Shield,
  Globe,
  ChevronRight,
  Star,
} from 'lucide-react';

/* ─── Navigation ──────────────────────────────────── */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 focus-ring">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500">
            <Zap className="h-4 w-4 text-white" />
          </div>
          <span className="text-xl font-bold text-white">ZDash</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-slate-300 transition-colors hover:text-white">
            Features
          </a>
          <a href="#tech" className="text-sm text-slate-300 transition-colors hover:text-white">
            Tech Stack
          </a>
          <a href="#testimonials" className="text-sm text-slate-300 transition-colors hover:text-white">
            Testimonials
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/dashboard"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Sign In
          </Link>
          <Link
            href="/dashboard"
            className="cta-primary inline-flex items-center gap-2 text-sm"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="text-slate-300 md:hidden focus-ring"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="animate-fade-in-down border-t border-white/10 bg-slate-900/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            <a
              href="#features"
              className="rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </a>
            <a
              href="#tech"
              className="rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Tech Stack
            </a>
            <a
              href="#testimonials"
              className="rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Testimonials
            </a>
            <div className="my-2 border-t border-white/10" />
            <Link
              href="/dashboard"
              className="cta-primary mt-1 text-center text-sm"
            >
              Get Started <ArrowRight className="ml-1 inline h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero Section ────────────────────────────────── */
function HeroSection() {
  return (
    <section className="gradient-hero noise-bg relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-grid absolute inset-0" />
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300">
            <Star className="h-3.5 w-3.5" />
            <span>Built with Next.js 16 &amp; Tailwind CSS 4</span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Build your SaaS{' '}
            <span className="gradient-text">faster</span> with ZDash
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl">
            A production-ready dashboard template with authentication, analytics,
            payments, and everything you need to launch your next SaaS product.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-400 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/dashboard"
              className="cta-primary inline-flex items-center gap-2 text-base"
            >
              Launch Dashboard <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="#features"
              className="cta-secondary inline-flex items-center gap-2 text-base"
            >
              Explore Features <ChevronRight className="h-5 w-5" />
            </a>
          </div>

          {/* Stats row */}
          <div className="animate-fade-in-up delay-600 mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { value: '10k+', label: 'Downloads' },
              { value: '500+', label: 'Stars' },
              { value: '99.9%', label: 'Uptime' },
              { value: '< 50ms', label: 'Response' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

/* ─── Features Section ────────────────────────────── */
const features = [
  {
    icon: Lock,
    title: 'Authentication',
    description:
      'Secure auth flows out of the box. NextAuth.js integration with social login, magic links, and role-based access control.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description:
      'Beautiful charts and real-time dashboards. Track revenue, users, and engagement metrics with interactive visualizations.',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    icon: CreditCard,
    title: 'Payments',
    description:
      'Stripe integration ready to go. Subscriptions, one-time payments, invoices, and webhook handling — all pre-built.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard',
    description:
      'Professional admin dashboard with collapsible sidebar, stats cards, activity feeds, and responsive design.',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    icon: Shield,
    title: 'Security',
    description:
      'CSRF protection, rate limiting, input validation with Zod, and security headers. Built with best practices from day one.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Globe,
    title: 'Deploy Anywhere',
    description:
      'Docker support, Vercel-ready, and works with any cloud provider. Scale from zero to millions without friction.',
    gradient: 'from-fuchsia-500 to-purple-500',
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Features
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Everything you need to{' '}
            <span className="gradient-text">ship fast</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            ZDash comes packed with production-grade features so you can focus on
            building your product, not boilerplate.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="feature-card animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}
              >
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Tech Stack Section ──────────────────────────── */
const techStack = [
  { name: 'Next.js 16', category: 'Framework', color: 'bg-black' },
  { name: 'TypeScript 5', category: 'Language', color: 'bg-blue-600' },
  { name: 'Tailwind CSS 4', category: 'Styling', color: 'bg-cyan-500' },
  { name: 'Prisma 6', category: 'Database', color: 'bg-slate-700' },
  { name: 'Stripe', category: 'Payments', color: 'bg-violet-600' },
  { name: 'Zod', category: 'Validation', color: 'bg-sky-500' },
  { name: 'Lucide', category: 'Icons', color: 'bg-rose-500' },
  { name: 'Vitest', category: 'Testing', color: 'bg-yellow-500' },
];

function TechSection() {
  return (
    <section id="tech" className="gradient-bg-subtle py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Tech Stack
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Built with the best tools
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Modern, battle-tested technologies that scale with your product.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-indigo-200 hover:shadow-lg"
            >
              <div
                className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${tech.color} text-sm font-bold text-white shadow-md`}
              >
                {tech.name.charAt(0)}
              </div>
              <h3 className="font-semibold text-slate-900">{tech.name}</h3>
              <p className="mt-1 text-xs text-slate-400">{tech.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ────────────────────────────────── */
const testimonials = [
  {
    quote:
      'ZDash saved us weeks of development time. The dashboard was production-ready out of the box.',
    author: 'Sarah Chen',
    role: 'CTO, Flowbase',
    avatar: 'SC',
  },
  {
    quote:
      'The code quality is exceptional. Clean, well-typed, and easy to customize for our specific needs.',
    author: 'Marcus Johnson',
    role: 'Lead Developer, ShipFast',
    avatar: 'MJ',
  },
  {
    quote:
      'Best SaaS starter I have used. The Stripe integration alone saved us days of work.',
    author: 'Aiko Tanaka',
    role: 'Founder, LaunchPad',
    avatar: 'AT',
  },
];

function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Loved by developers
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all hover:border-indigo-200 hover:shadow-lg"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-sm font-bold text-white">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {t.author}
                  </p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Section ─────────────────────────────────── */
function CTASection() {
  return (
    <section className="gradient-hero noise-bg relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/3 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-1/3 bottom-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-5xl">
          Ready to build something{' '}
          <span className="gradient-text">amazing</span>?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          Join thousands of developers who trust ZDash to power their SaaS
          applications. Get started in minutes, not weeks.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/dashboard"
            className="cta-primary inline-flex items-center gap-2 text-base"
          >
            Start Building <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary inline-flex items-center gap-2 text-base"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500">
              <Zap className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-sm font-semibold text-slate-900">ZDash</span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-sm text-slate-400 transition-colors hover:text-slate-600">
              Documentation
            </a>
            <a href="#" className="text-sm text-slate-400 transition-colors hover:text-slate-600">
              Privacy
            </a>
            <a href="#" className="text-sm text-slate-400 transition-colors hover:text-slate-600">
              Terms
            </a>
          </div>

          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} ZDash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ────────────────────────────────────────── */
export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TechSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
