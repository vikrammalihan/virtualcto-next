import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Free Consultation',
  description:
    'Schedule your free consultation with TheVirtualCTO. Get expert fractional CTO advice tailored to your startup\'s technology challenges and growth goals.',
  keywords: ['book CTO consultation', 'free tech consultation', 'startup CTO advice'],
  openGraph: {
    title: 'Book a Free Consultation | TheVirtualCTO',
    description:
      'Schedule a free consultation and get expert fractional CTO advice for your startup.',
    url: 'https://thevirtualcto.com/book-consultation',
  },
  twitter: {
    title: 'Book a Free Consultation | TheVirtualCTO',
    description:
      'Schedule a free consultation and get expert fractional CTO advice for your startup.',
  },
};

export default function BookConsultationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
