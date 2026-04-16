import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study',
  description:
    'Deep-dive case study showing how TheVirtualCTO delivered measurable technology outcomes for a high-growth startup.',
  openGraph: {
    title: 'Case Study | TheVirtualCTO',
    description:
      'Deep-dive case study showing measurable technology outcomes for a high-growth startup.',
    url: 'https://thevirtualcto.com/case-studies/case-study-detail',
  },
  twitter: {
    title: 'Case Study | TheVirtualCTO',
    description:
      'Deep-dive case study showing measurable technology outcomes for a high-growth startup.',
  },
};

export default function CaseStudyDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
