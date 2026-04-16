import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fractional CTO Services',
  description:
    'Hire an experienced fractional CTO to provide strategic technology leadership without full-time cost. Set architecture direction, build engineering culture and accelerate your roadmap.',
  keywords: [
    'fractional CTO',
    'part-time CTO',
    'outsourced CTO',
    'startup CTO for hire',
    'technology leadership',
  ],
  openGraph: {
    title: 'Fractional CTO Services | TheVirtualCTO',
    description:
      'Strategic technology leadership without the full-time cost. Architecture, team & roadmap.',
    url: 'https://thevirtualcto.com/services/fractional-cto',
  },
  twitter: {
    title: 'Fractional CTO Services | TheVirtualCTO',
    description:
      'Strategic technology leadership without the full-time cost. Architecture, team & roadmap.',
  },
};

export default function FractionalCTOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
