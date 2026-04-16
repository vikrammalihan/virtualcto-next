import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'TheVirtualCTO terms of service governing the use of our fractional CTO and technology consulting services.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Terms of Service | TheVirtualCTO',
    description: 'Terms governing the use of TheVirtualCTO consulting services.',
    url: 'https://thevirtualcto.com/terms-of-service',
  },
};

export default function TermsOfServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
