import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Post',
  description:
    'In-depth technology leadership articles and expert startup advice from TheVirtualCTO.',
  openGraph: {
    title: 'Blog Post | TheVirtualCTO',
    description:
      'In-depth technology leadership articles and expert startup advice.',
    url: 'https://thevirtualcto.com/blog/post',
  },
  twitter: {
    title: 'Blog Post | TheVirtualCTO',
    description:
      'In-depth technology leadership articles and expert startup advice.',
  },
};

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
