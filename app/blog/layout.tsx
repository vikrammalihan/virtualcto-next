import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Technology leadership insights, startup strategy, engineering best practices and AI/ML advisory from TheVirtualCTO.',
  keywords: [
    'tech leadership blog',
    'startup CTO blog',
    'engineering strategy',
    'fractional CTO insights',
    'AI ML startup',
  ],
  openGraph: {
    title: 'Blog | TheVirtualCTO',
    description:
      'Technology leadership insights, startup strategy and engineering best practices.',
    url: 'https://thevirtualcto.com/blog',
  },
  twitter: {
    title: 'Blog | TheVirtualCTO',
    description:
      'Technology leadership insights, startup strategy and engineering best practices.',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
