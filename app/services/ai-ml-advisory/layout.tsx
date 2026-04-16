import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & ML Advisory',
  description:
    'Strategic AI and machine learning advisory for startups. Identify high-impact AI use cases, build data foundations, evaluate build vs buy and integrate AI into your product roadmap.',
  keywords: [
    'AI advisory startup',
    'ML consulting',
    'artificial intelligence strategy',
    'machine learning integration',
    'AI product roadmap',
  ],
  openGraph: {
    title: 'AI & ML Advisory | TheVirtualCTO',
    description:
      'Strategic AI/ML advisory — use cases, data foundations and product roadmap integration for startups.',
    url: 'https://thevirtualcto.com/services/ai-ml-advisory',
  },
  twitter: {
    title: 'AI & ML Advisory | TheVirtualCTO',
    description:
      'Strategic AI/ML advisory — use cases, data foundations and product roadmap integration for startups.',
  },
};

export default function AIMLAdvisoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
