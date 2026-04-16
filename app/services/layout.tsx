import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology Consulting Services',
  description:
    'Full range of fractional CTO and technology consulting services — architecture, team building, technical due diligence, AI/ML advisory, fundraising support and more.',
  keywords: [
    'CTO consulting services',
    'technology consulting',
    'startup tech services',
    'fractional CTO services',
  ],
  openGraph: {
    title: 'Technology Consulting Services | TheVirtualCTO',
    description:
      'Full range of fractional CTO services — architecture, team building, due diligence and AI/ML advisory.',
    url: 'https://thevirtualcto.com/services',
  },
  twitter: {
    title: 'Technology Consulting Services | TheVirtualCTO',
    description:
      'Full range of fractional CTO services — architecture, team building, due diligence and AI/ML advisory.',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
