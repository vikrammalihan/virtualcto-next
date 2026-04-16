import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fractional CTO Services for Europe',
  description:
    'Expert fractional CTO services for European tech startups. Helping founders in London, Berlin, Amsterdam and across the EU scale engineering, navigate compliance and raise Series A+.',
  keywords: [
    'fractional CTO Europe',
    'startup CTO UK',
    'tech consulting Germany',
    'European startup technology',
    'CTO London Berlin Amsterdam',
  ],
  openGraph: {
    title: 'Fractional CTO Services for Europe | TheVirtualCTO',
    description:
      'Helping European startups in London, Berlin and Amsterdam scale engineering and raise funding.',
    url: 'https://thevirtualcto.com/regions/europe',
  },
  twitter: {
    title: 'Fractional CTO Services for Europe | TheVirtualCTO',
    description:
      'Helping European startups in London, Berlin and Amsterdam scale engineering and raise funding.',
  },
};

export default function EuropeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
