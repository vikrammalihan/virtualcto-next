import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CTO Fundraising Support',
  description:
    'Expert CTO support through your fundraising journey. Technical pitch deck preparation, investor Q&A readiness, data room technical documentation and post-raise scaling plans.',
  keywords: [
    'CTO fundraising support',
    'technical pitch deck',
    'startup investor tech review',
    'Series A tech readiness',
    'CTO investor relations',
  ],
  openGraph: {
    title: 'CTO Fundraising Support | TheVirtualCTO',
    description:
      'Expert CTO support through fundraising — pitch prep, investor Q&A and data room documentation.',
    url: 'https://thevirtualcto.com/services/cto-fundraising',
  },
  twitter: {
    title: 'CTO Fundraising Support | TheVirtualCTO',
    description:
      'Expert CTO support through fundraising — pitch prep, investor Q&A and data room documentation.',
  },
};

export default function CTOFundraisingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
