import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering Team Building',
  description:
    'Build and scale high-performing engineering teams. Hiring strategy, interview frameworks, onboarding processes and engineering culture development for growth-stage startups.',
  keywords: [
    'engineering team building',
    'tech hiring strategy',
    'engineering culture',
    'startup team scaling',
    'CTO team development',
  ],
  openGraph: {
    title: 'Engineering Team Building | TheVirtualCTO',
    description:
      'Build high-performing engineering teams — hiring, onboarding and culture for growth-stage startups.',
    url: 'https://thevirtualcto.com/services/team-building',
  },
  twitter: {
    title: 'Engineering Team Building | TheVirtualCTO',
    description:
      'Build high-performing engineering teams — hiring, onboarding and culture for growth-stage startups.',
  },
};

export default function TeamBuildingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
