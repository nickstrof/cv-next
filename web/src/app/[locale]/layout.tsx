import { hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from './providers';
import { getMessages } from 'next-intl/server';
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: "Nick Strofyllas - Full Stack Developer",
  description: "Personal portfolio and blog of Nick Strofyllas, a Full Stack Developer specializing in React, Next.js, and modern web technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development"],
  authors: [{ name: "Nick Strofyllas" }],
  creator: "Nick Strofyllas",
  publisher: "Nick Strofyllas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(''),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '',
    title: 'Nick Strofyllas - Full Stack Developer',
    description: 'Personal portfolio and blog of Nick Strofyllas, a Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    siteName: 'Nick Strofyllas Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nick Strofyllas - Full Stack Developer',
    description: 'Personal portfolio and blog of Nick Strofyllas, a Full Stack Developer specializing in React, Next.js, and modern web technologies.',
  },
};

export default async function LocaleLayout({ children, params }: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = (await getMessages()) as Record<string, unknown>; 
  return (
    <html lang={locale} suppressHydrationWarning>
      {/* <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var t = localStorage.getItem('theme');
                  if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
      </head> */}
      <body className={`${inter.variable}`}>
        <Providers messages={messages} locale={locale}>
          {children}
        </Providers>
      </body>
    </html>
  );
}