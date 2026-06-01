'use client';

import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Users,
  Activity,
  TrendingUp,
  MoreHorizontal,
  Plus,
  Download,
  Filter,
  RefreshCw,
  ExternalLink,
  Mail,
  FileText,
  UserPlus,
} from 'lucide-react';

/* ─── Mock data ───────────────────────────────────── */

const stats = [
  {
    title: 'Total Revenue',
    value: '$48,352',
    change: '+12.5%',
    trend: 'up' as const,
    icon: DollarSign,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    title: 'Active Users',
    value: '2,847',
    change: '+8.2%',
    trend: 'up' as const,
    icon: Users,
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
  {
    title: 'Active Sessions',
    value: '1,429',
    change: '-3.1%',
    trend: 'down' as const,
    icon: Activity,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    title: 'Conversion Rate',
    value: '3.24%',
    change: '+2.4%',
    trend: 'up' as const,
    icon: TrendingUp,
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
  },
];

const chartData = [35, 55, 40, 70, 50, 80, 65, 90, 75, 95, 85, 100];
const chartMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const recentActivity = [
  {
    user: 'Emma Wilson',
    action: 'Upgraded to Pro plan',
    status: 'success',
    time: '2 min ago',
    avatar: 'EW',
  },
  {
    user: 'James Liu',
    action: 'Created new workspace',
    status: 'info',
    time: '15 min ago',
    avatar: 'JL',
  },
  {
    user: 'Sofia Martinez',
    action: 'Payment failed',
    status: 'danger',
    time: '1 hr ago',
    avatar: 'SM',
  },
  {
    user: 'Oliver Chen',
    action: 'Submitted support ticket',
    status: 'warning',
    time: '2 hrs ago',
    avatar: 'OC',
  },
  {
    user: 'Ava Patel',
    action: 'Account activated',
    status: 'success',
    time: '3 hrs ago',
    avatar: 'AP',
  },
  {
    user: 'Noah Kim',
    action: 'Trial expiring soon',
    status: 'warning',
    time: '4 hrs ago',
    avatar: 'NK',
  },
];

const quickActions = [
  { icon: UserPlus, label: 'Add User', color: 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100' },
  { icon: FileText, label: 'New Report', color: 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100' },
  { icon: Mail, label: 'Send Invite', color: 'bg-amber-50 text-amber-600 hover:bg-amber-100' },
  { icon: Download, label: 'Export Data', color: 'bg-rose-50 text-rose-600 hover:bg-rose-100' },
];

/* ─── Status badge helper ─────────────────────────── */
function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    success: 'badge-success',
    info: 'badge-info',
    warning: 'badge-warning',
    danger: 'badge-danger',
  };
  const labels: Record<string, string> = {
    success: 'Success',
    info: 'Info',
    warning: 'Warning',
    danger: 'Failed',
  };
  return <span className={map[status] ?? 'badge-neutral'}>{labels[status] ?? status}</span>;
}

/* ─── Page ────────────────────────────────────────── */
export default function DashboardPage() {
  const maxChartValue = Math.max(...chartData);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* ── Page header ── */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <p className="mt-1 text-sm text-slate-500">
            Welcome back, Alex. Here&apos;s what&apos;s happening today.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 focus-ring">
            <Filter className="h-4 w-4" />
            <span className="hidden sm:inline">Filter</span>
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 focus-ring">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Export</span>
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-medium text-white shadow-md shadow-indigo-200 transition-all hover:shadow-lg focus-ring">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">New Report</span>
          </button>
        </div>
      </div>

      {/* ── Stats cards ── */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.title}
            className="stat-card animate-fade-in-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">{stat.value}</p>
              </div>
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.iconBg}`}>
                <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5">
              {stat.trend === 'up' ? (
                <ArrowUpRight className="h-4 w-4 text-emerald-500" />
              ) : (
                <ArrowDownRight className="h-4 w-4 text-rose-500" />
              )}
              <span
                className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'
                }`}
              >
                {stat.change}
              </span>
              <span className="text-xs text-slate-400">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Main grid: Chart + Quick Actions ── */}
      <div className="mb-8 grid gap-6 lg:grid-cols-4">
        {/* Chart area */}
        <div className="chart-area lg:col-span-3 p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Revenue Overview</h2>
              <p className="mt-1 text-sm text-slate-500">Monthly revenue for the past year</p>
            </div>
            <button className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 focus-ring">
              <RefreshCw className="h-4 w-4" />
            </button>
          </div>

          {/* Bar chart */}
          <div className="flex h-64 items-end gap-2 sm:gap-3">
            {chartData.map((value, i) => (
              <div key={chartMonths[i]} className="flex flex-1 flex-col items-center gap-2">
                <div className="relative w-full">
                  <div
                    className="chart-bar mx-auto w-full max-w-[40px] transition-all duration-700"
                    style={{ height: `${(value / maxChartValue) * 220}px` }}
                  />
                </div>
                <span className="text-[10px] font-medium text-slate-400 sm:text-xs">
                  {chartMonths[i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Quick Actions</h2>
          <div className="flex flex-col gap-2">
            {quickActions.map((action) => (
              <button
                key={action.label}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all focus-ring ${action.color}`}
              >
                <action.icon className="h-4 w-4" />
                {action.label}
              </button>
            ))}
          </div>

          {/* Mini summary */}
          <div className="mt-6 rounded-lg border border-slate-100 bg-slate-50 p-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-soft" />
              <span className="text-xs font-medium text-slate-600">System Healthy</span>
            </div>
            <p className="mt-2 text-[11px] text-slate-400">
              All services running normally. Last checked 2 min ago.
            </p>
          </div>
        </div>
      </div>

      {/* ── Recent Activity ── */}
      <div className="rounded-xl border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Recent Activity</h2>
            <p className="mt-0.5 text-sm text-slate-500">Latest events from your workspace</p>
          </div>
          <button className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-indigo-600 transition-colors hover:bg-indigo-50 focus-ring">
            View All <ExternalLink className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Action
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Time
                </th>
                <th className="px-6 py-3 text-right">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {recentActivity.map((row, i) => (
                <tr
                  key={i}
                  className="activity-row border-b border-slate-50 last:border-0"
                >
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 text-xs font-bold text-white">
                        {row.avatar}
                      </div>
                      <span className="text-sm font-medium text-slate-900">
                        {row.user}
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                    {row.action}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <StatusBadge status={row.status} />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-400">
                    {row.time}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right">
                    <button
                      className="rounded-md p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 focus-ring"
                      aria-label="More actions"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
