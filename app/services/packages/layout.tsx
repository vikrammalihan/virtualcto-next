import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Packages',
  description:
    'Flexible fractional CTO service packages for every stage — from Starter advisory to full Embedded CTO engagement. Transparent pricing tailored to startup needs.',
  keywords: [
    'fractional CTO packages',
    'CTO pricing',
    'technology consulting packages',
    'startup CTO plans',
  ],
  openGraph: {
    title: 'Service Packages | TheVirtualCTO',
    description:
      'Flexible fractional CTO packages from Starter advisory to full Embedded CTO engagement.',
    url: 'https://thevirtualcto.com/services/packages',
  },
  twitter: {
    title: 'Service Packages | TheVirtualCTO',
    description:
      'Flexible fractional CTO packages from Starter advisory to full Embedded CTO engagement.',
  },
};

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
