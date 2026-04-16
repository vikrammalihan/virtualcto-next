import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Architecture Consulting',
  description:
    'Expert software architecture consulting for startups. Design scalable, secure and maintainable systems — cloud architecture, microservices, APIs and data platforms.',
  keywords: [
    'software architecture consulting',
    'cloud architecture',
    'microservices design',
    'system design startup',
    'scalable architecture',
  ],
  openGraph: {
    title: 'Architecture Consulting | TheVirtualCTO',
    description:
      'Design scalable, secure and maintainable systems — cloud, microservices, APIs and data.',
    url: 'https://thevirtualcto.com/services/architecture-consulting',
  },
  twitter: {
    title: 'Architecture Consulting | TheVirtualCTO',
    description:
      'Design scalable, secure and maintainable systems — cloud, microservices, APIs and data.',
  },
};

export default function ArchitectureConsultingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
