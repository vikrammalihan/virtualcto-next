import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technical Due Diligence',
  description:
    'Independent technical due diligence for investors and acquirers. Comprehensive assessment of codebase quality, architecture, scalability, security and engineering team capability.',
  keywords: [
    'technical due diligence',
    'tech due diligence investor',
    'codebase audit',
    'software architecture review',
    'startup tech assessment',
  ],
  openGraph: {
    title: 'Technical Due Diligence | TheVirtualCTO',
    description:
      'Independent tech due diligence for investors — architecture, security, scalability and team assessment.',
    url: 'https://thevirtualcto.com/services/technical-due-diligence',
  },
  twitter: {
    title: 'Technical Due Diligence | TheVirtualCTO',
    description:
      'Independent tech due diligence for investors — architecture, security, scalability and team assessment.',
  },
};

export default function TechnicalDueDiligenceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
