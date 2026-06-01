import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'ZDash — SaaS Dashboard Template',
  description:
    'A beautiful, production-ready SaaS dashboard template built with Next.js 16, TypeScript, Tailwind CSS 4, and Prisma. Features authentication, analytics charts, and Stripe integration.',
  keywords: [
    'SaaS',
    'dashboard',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Prisma',
    'Stripe',
    'template',
    'starter',
  ],
  authors: [{ name: 'ZDash Team' }],
  creator: 'ZDash',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'ZDash — SaaS Dashboard Template',
    description:
      'A beautiful, production-ready SaaS dashboard template built with Next.js 16, TypeScript, and Tailwind CSS 4.',
    siteName: 'ZDash',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZDash — SaaS Dashboard Template',
    description:
      'A beautiful, production-ready SaaS dashboard template built with Next.js 16.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
