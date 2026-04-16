import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { I18nProvider } from '@/lib/i18n/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://thevirtualcto.com'),
  title: {
    default: 'TheVirtualCTO | Fractional CTO Services for Global Startups',
    template: '%s | TheVirtualCTO',
  },
  description:
    'Expert fractional CTO services for startups across Africa, Europe, Middle East and India. 25+ years of technology leadership covering architecture, team building, technical due diligence and AI/ML advisory.',
  keywords: [
    'fractional CTO',
    'virtual CTO',
    'CTO consulting',
    'startup technology leadership',
    'technical due diligence',
    'AI ML advisory',
    'engineering team building',
    'software architecture consulting',
  ],
  authors: [{ name: 'TheVirtualCTO' }],
  openGraph: {
    type: 'website',
    siteName: 'TheVirtualCTO',
    title: 'TheVirtualCTO | Fractional CTO Services for Global Startups',
    description:
      'Expert fractional CTO services for startups across Africa, Europe, Middle East and India. 25+ years of technology leadership.',
    url: 'https://thevirtualcto.com',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'TheVirtualCTO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheVirtualCTO | Fractional CTO Services for Global Startups',
    description:
      'Expert fractional CTO services for startups across Africa, Europe, Middle East and India.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')||'dark';if(t==='dark')document.documentElement.classList.add('dark');})();`,
          }}
        />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
