import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'TheVirtualCTO privacy policy — how we collect, use and protect your personal information.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Privacy Policy | TheVirtualCTO',
    description: 'How TheVirtualCTO collects, uses and protects your personal information.',
    url: 'https://thevirtualcto.com/privacy-policy',
  },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
