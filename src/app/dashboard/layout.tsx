'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  BarChart3,
  Bell,
  ChevronLeft,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Menu,
  Search,
  Settings,
  Users,
  Zap,
  User,
} from 'lucide-react';

/* ─── Sidebar nav items ───────────────────────────── */
const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard', active: true },
  { icon: BarChart3, label: 'Analytics', href: '/dashboard', active: false },
  { icon: Users, label: 'Users', href: '/dashboard', active: false },
  { icon: Settings, label: 'Settings', href: '/dashboard', active: false },
  { icon: CreditCard, label: 'Billing', href: '/dashboard', active: false },
];

/* ─── Layout ──────────────────────────────────────── */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* ── Sidebar (desktop) ── */}
      <aside
        className={`gradient-sidebar hidden transition-all duration-300 ease-in-out md:flex md:flex-col ${
          collapsed ? 'md:w-[72px]' : 'md:w-64'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
          {!collapsed && (
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-400 to-purple-400">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">ZDash</span>
            </Link>
          )}
          {collapsed && (
            <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-400 to-purple-400">
              <Zap className="h-4 w-4 text-white" />
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="rounded-md p-1 text-slate-400 transition-colors hover:bg-white/10 hover:text-white focus-ring"
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <ChevronLeft
              className={`h-5 w-5 transition-transform ${
                collapsed ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>

        {/* Sidebar navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 dark-scrollbar custom-scrollbar">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`sidebar-item ${item.active ? 'active' : ''}`}
                  title={collapsed ? item.label : undefined}
                >
                  <item.icon className="sidebar-icon h-5 w-5 shrink-0" />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar footer */}
        <div className="border-t border-white/10 p-3">
          <button className="sidebar-item w-full" title={collapsed ? 'Log Out' : undefined}>
            <LogOut className="sidebar-icon h-5 w-5 shrink-0" />
            {!collapsed && <span>Log Out</span>}
          </button>
        </div>
      </aside>

      {/* ── Mobile sidebar overlay ── */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <aside
        className={`gradient-sidebar fixed inset-y-0 left-0 z-50 w-64 transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-400 to-purple-400">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white">ZDash</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-md p-1 text-slate-400 hover:text-white"
            aria-label="Close menu"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`sidebar-item ${item.active ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="sidebar-icon h-5 w-5 shrink-0" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-white/10 p-3">
          <button className="sidebar-item w-full">
            <LogOut className="sidebar-icon h-5 w-5 shrink-0" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* ── Main content area ── */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top header */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6">
          <div className="flex items-center gap-4">
            {/* Mobile hamburger */}
            <button
              className="rounded-md p-2 text-slate-500 hover:bg-slate-100 md:hidden focus-ring"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Search */}
            <div className="relative hidden sm:block">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                placeholder="Search anything..."
                className="h-9 w-64 rounded-lg border border-slate-200 bg-slate-50 py-2 pr-3 pl-9 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100 lg:w-80"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Notification bell */}
            <button
              className="relative rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 focus-ring"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-rose-500" />
            </button>

            {/* Divider */}
            <div className="hidden h-6 w-px bg-slate-200 sm:block" />

            {/* User avatar */}
            <button className="flex items-center gap-2 rounded-lg p-1.5 transition-colors hover:bg-slate-100 focus-ring">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="hidden text-sm font-medium text-slate-700 sm:block">
                Alex Smith
              </span>
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto custom-scrollbar">{children}</main>
      </div>
    </div>
  );
}
