import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fractional CTO Services for Africa',
  description:
    'Expert fractional CTO services for African tech startups. Supporting founders from Lagos, Nairobi, Cape Town, Cairo and across the continent to scale technology and raise funding.',
  keywords: [
    'fractional CTO Africa',
    'startup CTO Nigeria',
    'tech consulting Kenya',
    'Africa startup technology',
    'CTO Lagos Nairobi Cape Town',
  ],
  openGraph: {
    title: 'Fractional CTO Services for Africa | TheVirtualCTO',
    description:
      "Supporting African startups from Lagos to Nairobi, Cape Town to Cairo — scale tech, build teams, raise funding.",
    url: 'https://thevirtualcto.com/regions/africa',
  },
  twitter: {
    title: 'Fractional CTO Services for Africa | TheVirtualCTO',
    description:
      "Supporting African startups from Lagos to Nairobi, Cape Town to Cairo — scale tech, build teams, raise funding.",
  },
};

export default function AfricaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
