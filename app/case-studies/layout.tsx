import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real-world case studies showing how TheVirtualCTO helped startups across FinTech, HealthTech, EdTech, CleanTech and E-Commerce achieve breakthrough results.',
  keywords: [
    'CTO case studies',
    'startup technology success stories',
    'fintech CTO',
    'healthtech scaling',
    'edtech architecture',
  ],
  openGraph: {
    title: 'Case Studies | TheVirtualCTO',
    description:
      'Real results from startups across FinTech, HealthTech, EdTech, CleanTech and more.',
    url: 'https://thevirtualcto.com/case-studies',
  },
  twitter: {
    title: 'Case Studies | TheVirtualCTO',
    description:
      'Real results from startups across FinTech, HealthTech, EdTech, CleanTech and more.',
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
