import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fractional CTO Services for India',
  description:
    'Expert fractional CTO services for Indian tech startups. Supporting founders in Bangalore, Mumbai, Hyderabad and Delhi NCR to build world-class engineering teams and scale products globally.',
  keywords: [
    'fractional CTO India',
    'startup CTO Bangalore',
    'tech consulting Mumbai',
    'India startup technology',
    'CTO Hyderabad Delhi',
  ],
  openGraph: {
    title: 'Fractional CTO Services for India | TheVirtualCTO',
    description:
      'Supporting Indian startups in Bangalore, Mumbai and Hyderabad to scale products and build global teams.',
    url: 'https://thevirtualcto.com/regions/india',
  },
  twitter: {
    title: 'Fractional CTO Services for India | TheVirtualCTO',
    description:
      'Supporting Indian startups in Bangalore, Mumbai and Hyderabad to scale products and build global teams.',
  },
};

export default function IndiaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
