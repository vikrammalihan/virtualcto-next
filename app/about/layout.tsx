import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet TheVirtualCTO — 25+ years of technology leadership helping startups scale across Africa, Europe, Middle East and India. Expert in architecture, team building, fundraising and AI strategy.',
  keywords: [
    'about TheVirtualCTO',
    'CTO background',
    'technology leadership experience',
    'startup advisor',
  ],
  openGraph: {
    title: 'About | TheVirtualCTO',
    description:
      '25+ years of technology leadership helping startups scale across global markets.',
    url: 'https://thevirtualcto.com/about',
  },
  twitter: {
    title: 'About | TheVirtualCTO',
    description:
      '25+ years of technology leadership helping startups scale across global markets.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
