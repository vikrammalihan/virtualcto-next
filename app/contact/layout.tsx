import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with TheVirtualCTO. Book a free consultation for fractional CTO services, technology strategy or engineering leadership support.',
  keywords: ['contact TheVirtualCTO', 'book CTO consultation', 'fractional CTO contact'],
  openGraph: {
    title: 'Contact | TheVirtualCTO',
    description:
      'Get in touch to book a free consultation for fractional CTO services.',
    url: 'https://thevirtualcto.com/contact',
  },
  twitter: {
    title: 'Contact | TheVirtualCTO',
    description:
      'Get in touch to book a free consultation for fractional CTO services.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
