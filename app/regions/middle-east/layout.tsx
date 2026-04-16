import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fractional CTO Services for the Middle East',
  description:
    'Expert fractional CTO services for Middle East tech startups. Helping founders in Dubai, Riyadh, Abu Dhabi and across the GCC scale technology, attract investment and build engineering teams.',
  keywords: [
    'fractional CTO Middle East',
    'startup CTO Dubai',
    'tech consulting Saudi Arabia',
    'GCC startup technology',
    'CTO UAE Riyadh Abu Dhabi',
  ],
  openGraph: {
    title: 'Fractional CTO Services for the Middle East | TheVirtualCTO',
    description:
      'Helping GCC startups in Dubai, Riyadh and Abu Dhabi scale technology and attract investment.',
    url: 'https://thevirtualcto.com/regions/middle-east',
  },
  twitter: {
    title: 'Fractional CTO Services for the Middle East | TheVirtualCTO',
    description:
      'Helping GCC startups in Dubai, Riyadh and Abu Dhabi scale technology and attract investment.',
  },
};

export default function MiddleEastLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
