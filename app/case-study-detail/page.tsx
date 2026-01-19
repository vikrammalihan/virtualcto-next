'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';

export default function CaseStudyDetailPage() {
  const searchParams = useSearchParams();
  const studyId = searchParams.get('id') || '1';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseStudies = [
    {
      id: '1',
      title: 'FinTech Scale-Up - Nigeria',
      subtitle: 'Scaling Payment Processing from 10K to 1M+ Daily Transactions',
      industry: 'FinTech',
      region: 'Africa',
      date: '2024',
      duration: '18 months',
      client: 'Leading Payment Processing Startup',
      heroImage: 'https://readdy.ai/api/search-image?query=modern%20fintech%20office%20with%20diverse%20African%20team%20working%20on%20financial%20technology%20platform%2C%20digital%20payment%20systems%20on%20screens%2C%20professional%20startup%20environment%20with%20indigo%20and%20violet%20accent%20lighting%2C%20contemporary%20workspace&width=1200&height=600&seq=case-detail-fintech-hero-001&orientation=landscape',
      overview: 'A rapidly growing payment processing startup in Nigeria faced critical infrastructure challenges as they experienced exponential user growth. The existing system struggled to handle increasing transaction volumes, threatening business continuity and customer trust.',
      challenge: {
        description: 'The startup was processing 10,000 daily transactions but needed to scale to handle over 1 million transactions per day. The existing monolithic architecture was causing frequent downtime, slow processing times, and compliance concerns. The team lacked the technical leadership to architect a scalable solution while maintaining PCI-DSS compliance.',
        painPoints: [
          'System downtime during peak hours affecting customer trust',
          'Slow transaction processing leading to customer complaints',
          'Inability to meet PCI-DSS Level 1 compliance requirements',
          'Database bottlenecks causing cascading failures',
          'High infrastructure costs with poor performance',
          'Lack of real-time fraud detection capabilities'
        ]
      },
      solution: {
        description: 'As Fractional CTO, I led a comprehensive technology transformation over 18 months, focusing on architecture redesign, team building, and operational excellence.',
        approach: [
          {
            phase: 'Phase 1: Assessment & Planning (Months 1-2)',
            activities: [
              'Conducted comprehensive technical audit of existing infrastructure',
              'Identified critical bottlenecks and security vulnerabilities',
              'Designed microservices architecture with event-driven processing',
              'Created detailed migration roadmap with zero-downtime strategy',
              'Established PCI-DSS compliance framework'
            ]
          },
          {
            phase: 'Phase 2: Foundation Building (Months 3-6)',
            activities: [
              'Implemented core microservices for payment processing',
              'Set up Kubernetes cluster for container orchestration',
              'Built event streaming infrastructure with Apache Kafka',
              'Established CI/CD pipelines for automated deployments',
              'Implemented comprehensive monitoring and alerting'
            ]
          },
          {
            phase: 'Phase 3: Migration & Scaling (Months 7-12)',
            activities: [
              'Executed phased migration from monolith to microservices',
              'Implemented real-time fraud detection using machine learning',
              'Built automated compliance monitoring system',
              'Optimized database performance with sharding and caching',
              'Conducted load testing and performance optimization'
            ]
          },
          {
            phase: 'Phase 4: Optimization & Growth (Months 13-18)',
            activities: [
              'Achieved PCI-DSS Level 1 certification',
              'Implemented advanced analytics and reporting',
              'Built disaster recovery and business continuity systems',
              'Established technical documentation and knowledge base',
              'Trained internal team for ongoing operations'
            ]
          }
        ],
        technologies: [
          { name: 'AWS', purpose: 'Cloud Infrastructure' },
          { name: 'Kubernetes', purpose: 'Container Orchestration' },
          { name: 'Node.js', purpose: 'Backend Services' },
          { name: 'PostgreSQL', purpose: 'Primary Database' },
          { name: 'Redis', purpose: 'Caching & Session Management' },
          { name: 'Apache Kafka', purpose: 'Event Streaming' },
          { name: 'Terraform', purpose: 'Infrastructure as Code' },
          { name: 'Prometheus', purpose: 'Monitoring' },
          { name: 'Grafana', purpose: 'Visualization' }
        ]
      },
      results: {
        metrics: [
          { label: 'Transaction Volume', value: '100x Increase', description: 'From 10K to 1M+ daily transactions' },
          { label: 'System Uptime', value: '99.99%', description: 'Achieved and maintained consistently' },
          { label: 'Monthly Processing', value: '$50M+', description: 'Total transaction value processed' },
          { label: 'Processing Cost', value: '40% Reduction', description: 'Infrastructure cost optimization' },
          { label: 'Response Time', value: '<200ms', description: 'Average API response time' },
          { label: 'Compliance', value: 'PCI-DSS L1', description: 'Highest level certification achieved' }
        ],
        businessImpact: [
          'Enabled expansion to 3 new African markets',
          'Increased customer base from 50K to 500K+ users',
          'Reduced customer support tickets by 65%',
          'Improved customer satisfaction score from 3.2 to 4.7/5',
          'Attracted $15M Series B funding round',
          'Established market leadership position in Nigeria'
        ],
        testimonial: {
          quote: 'The transformation was remarkable. We went from constant firefighting to confidently scaling our business. The fractional CTO model gave us enterprise-level expertise at a fraction of the cost of a full-time executive.',
          author: 'CEO & Co-Founder',
          company: 'Payment Processing Startup'
        }
      },
      images: [
        {
          url: 'https://readdy.ai/api/search-image?query=modern%20fintech%20dashboard%20showing%20real-time%20payment%20processing%20analytics%2C%20transaction%20monitoring%20screens%20with%20indigo%20and%20violet%20interface%2C%20professional%20financial%20technology%20visualization&width=800&height=500&seq=case-detail-fintech-img1-001&orientation=landscape',
          caption: 'Real-time transaction monitoring dashboard'
        },
        {
          url: 'https://readdy.ai/api/search-image?query=microservices%20architecture%20diagram%20with%20event-driven%20processing%2C%20cloud%20infrastructure%20visualization%20with%20indigo%20and%20violet%20color%20scheme%2C%20modern%20technical%20architecture&width=800&height=500&seq=case-detail-fintech-img2-001&orientation=landscape',
          caption: 'Microservices architecture design'
        },
        {
          url: 'https://readdy.ai/api/search-image?query=team%20collaboration%20in%20modern%20fintech%20office%2C%20diverse%20African%20engineers%20working%20together%20on%20technology%20project%2C%20professional%20startup%20environment%20with%20indigo%20lighting&width=800&height=500&seq=case-detail-fintech-img3-001&orientation=landscape',
          caption: 'Engineering team collaboration'
        }
      ],
      keyTakeaways: [
        'Fractional CTO services provide enterprise-level expertise without full-time executive costs',
        'Microservices architecture enables independent scaling of critical components',
        'Event-driven processing handles high-volume transactions efficiently',
        'Compliance can be achieved alongside rapid growth with proper planning',
        'Investing in monitoring and observability prevents costly downtime',
        'Phased migration strategies minimize risk during major transformations'
      ]
    },
    {
      id: '2',
      title: 'HealthTech Platform - India',
      subtitle: 'Building HIPAA-Compliant Telemedicine Platform for 500+ Hospitals',
      industry: 'HealthTech',
      region: 'India',
      date: '2024',
      duration: '12 months',
      client: 'Telemedicine Platform Provider',
      heroImage: 'https://readdy.ai/api/search-image?query=modern%20healthcare%20technology%20platform%20with%20medical%20professionals%20using%20telemedicine%20software%20in%20Indian%20hospital%2C%20clean%20medical%20environment%20with%20digital%20health%20records%2C%20indigo%20and%20violet%20interface%20elements%2C%20contemporary%20healthcare%20setting&width=1200&height=600&seq=case-detail-health-hero-002&orientation=landscape',
      overview: 'A telemedicine platform needed to rapidly scale to serve hundreds of hospitals across India while ensuring HIPAA compliance and integrating AI-powered diagnostic tools.',
      challenge: {
        description: 'The platform needed to handle sensitive patient data across 500+ hospitals while maintaining strict HIPAA compliance. The existing infrastructure lacked proper security measures, and the team needed guidance on implementing AI diagnostics and video consultation systems.',
        painPoints: [
          'Inadequate security measures for patient data',
          'No clear path to HIPAA compliance',
          'Poor video quality affecting consultations',
          'Lack of AI diagnostic capabilities',
          'Scalability concerns with growing hospital network',
          'Integration challenges with existing hospital systems'
        ]
      },
      solution: {
        description: 'Led the development of a HIPAA-compliant cloud infrastructure with end-to-end encryption, AI diagnostics integration, and scalable video consultation system.',
        approach: [
          {
            phase: 'Phase 1: Security & Compliance (Months 1-3)',
            activities: [
              'Implemented end-to-end encryption for all patient data',
              'Built HIPAA-compliant cloud infrastructure on Azure',
              'Established access control and audit logging systems',
              'Created comprehensive security policies and procedures',
              'Conducted security training for development team'
            ]
          },
          {
            phase: 'Phase 2: Core Platform (Months 4-7)',
            activities: [
              'Built scalable video consultation system using WebRTC',
              'Integrated AI diagnostic tools using TensorFlow',
              'Developed electronic health records (EHR) system',
              'Implemented real-time appointment scheduling',
              'Created mobile apps for patients and doctors'
            ]
          },
          {
            phase: 'Phase 3: Integration & Scale (Months 8-10)',
            activities: [
              'Integrated with existing hospital management systems',
              'Built APIs for third-party integrations',
              'Implemented automated backup and disaster recovery',
              'Optimized performance for high concurrent users',
              'Conducted extensive security audits'
            ]
          },
          {
            phase: 'Phase 4: Launch & Growth (Months 11-12)',
            activities: [
              'Achieved HIPAA compliance certification',
              'Onboarded 500+ hospitals across India',
              'Trained hospital staff on platform usage',
              'Established 24/7 technical support system',
              'Implemented continuous monitoring and improvement'
            ]
          }
        ],
        technologies: [
          { name: 'Azure', purpose: 'Cloud Infrastructure' },
          { name: 'Python', purpose: 'Backend Services' },
          { name: 'TensorFlow', purpose: 'AI Diagnostics' },
          { name: 'MongoDB', purpose: 'Database' },
          { name: 'WebRTC', purpose: 'Video Consultations' },
          { name: 'Docker', purpose: 'Containerization' },
          { name: 'React Native', purpose: 'Mobile Apps' },
          { name: 'Redis', purpose: 'Caching' }
        ]
      },
      results: {
        metrics: [
          { label: 'Hospitals Onboarded', value: '500+', description: 'Across major Indian cities' },
          { label: 'Patients Served', value: '2M+', description: 'Total consultations completed' },
          { label: 'Cost Reduction', value: '40%', description: 'For hospital operations' },
          { label: 'Patient Satisfaction', value: '95%', description: 'Average rating' },
          { label: 'Video Quality', value: '1080p', description: 'HD consultations' },
          { label: 'Compliance', value: 'HIPAA', description: 'Full certification achieved' }
        ],
        businessImpact: [
          'Enabled healthcare access in rural areas',
          'Reduced patient wait times by 70%',
          'Increased doctor productivity by 50%',
          'Secured $20M Series A funding',
          'Expanded to 15 Indian states',
          'Recognized as top HealthTech platform in India'
        ],
        testimonial: {
          quote: 'The platform transformed how we deliver healthcare. The fractional CTO brought expertise we couldn\'t afford full-time and helped us achieve HIPAA compliance while scaling rapidly.',
          author: 'Chief Medical Officer',
          company: 'Telemedicine Platform'
        }
      },
      images: [
        {
          url: 'https://readdy.ai/api/search-image?query=telemedicine%20video%20consultation%20interface%20showing%20doctor%20and%20patient%20interaction%2C%20modern%20healthcare%20software%20with%20indigo%20and%20violet%20design%2C%20professional%20medical%20technology&width=800&height=500&seq=case-detail-health-img1-002&orientation=landscape',
          caption: 'Video consultation interface'
        },
        {
          url: 'https://readdy.ai/api/search-image?query=AI%20diagnostic%20system%20analyzing%20medical%20images%2C%20machine%20learning%20healthcare%20technology%20with%20indigo%20interface%2C%20modern%20medical%20AI%20visualization&width=800&height=500&seq=case-detail-health-img2-002&orientation=landscape',
          caption: 'AI-powered diagnostic tools'
        },
        {
          url: 'https://readdy.ai/api/search-image?query=electronic%20health%20records%20dashboard%20with%20patient%20data%20visualization%2C%20secure%20healthcare%20information%20system%20with%20indigo%20and%20violet%20colors%2C%20modern%20medical%20software&width=800&height=500&seq=case-detail-health-img3-002&orientation=landscape',
          caption: 'Electronic health records system'
        }
      ],
      keyTakeaways: [
        'HIPAA compliance requires comprehensive security from day one',
        'AI diagnostics can significantly improve healthcare outcomes',
        'Video quality is critical for effective telemedicine',
        'Integration with existing systems is key to hospital adoption',
        'Mobile-first approach increases patient engagement',
        'Continuous monitoring ensures data security and compliance'
      ]
    }
  ];

  const study = caseStudies.find(s => s.id === studyId) || caseStudies[0];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 px-4 sm:px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-full border border-indigo-200 dark:border-indigo-800">
                {study.industry}
              </span>
              <span className="px-4 py-2 bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 text-sm font-medium rounded-full border border-violet-200 dark:border-violet-800">
                {study.region}
              </span>
              <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-full">
                {study.duration}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {study.title}
            </h1>

            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 mb-8">
              {study.subtitle}
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <i className="ri-building-line text-indigo-600 dark:text-indigo-400"></i>
                <span>{study.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-calendar-line text-indigo-600 dark:text-indigo-400"></i>
                <span>{study.date}</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-96 sm:h-[500px]">
                <img
                  src={study.heroImage}
                  alt={study.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4 sm:px-6 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Overview</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {study.overview}
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-red-100 dark:bg-red-900/20 rounded-lg">
              <i className="ri-error-warning-line text-2xl text-red-600 dark:text-red-400"></i>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">The Challenge</h2>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            {study.challenge.description}
          </p>

          <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-6 border border-red-200 dark:border-red-800">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Key Pain Points</h3>
            <div className="space-y-3">
              {study.challenge.painPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <i className="ri-close-circle-line text-red-600 dark:text-red-400 text-xl mt-0.5 flex-shrink-0"></i>
                  <span className="text-slate-700 dark:text-slate-300">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 px-4 sm:px-6 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/20 rounded-lg">
              <i className="ri-lightbulb-line text-2xl text-indigo-600 dark:text-indigo-400"></i>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">The Solution</h2>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
            {study.solution.description}
          </p>

          {/* Approach Timeline */}
          <div className="space-y-8 mb-12">
            {study.solution.approach.map((phase, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-800">
                <div className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center bg-indigo-600 text-white rounded-full text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{phase.phase}</h3>
                <ul className="space-y-2">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <i className="ri-check-line text-indigo-600 dark:text-indigo-400 text-lg mt-0.5 flex-shrink-0"></i>
                      <span className="text-slate-600 dark:text-slate-400">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Technologies Used</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {study.solution.technologies.map((tech, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <i className="ri-code-box-line text-indigo-600 dark:text-indigo-400 text-xl flex-shrink-0"></i>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">{tech.name}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{tech.purpose}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <div className="w-12 h-12 flex items-center justify-center bg-green-100 dark:bg-green-900/20 rounded-lg">
              <i className="ri-trophy-line text-2xl text-green-600 dark:text-green-400"></i>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Results & Impact</h2>
          </div>

          {/* Metrics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {study.results.metrics.map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800 text-center">
                <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">{metric.label}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-2">{metric.value}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{metric.description}</div>
              </div>
            ))}
          </div>

          {/* Business Impact */}
          <div className="bg-green-50 dark:bg-green-900/10 rounded-xl p-8 border border-green-200 dark:border-green-800 mb-12">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Business Impact</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {study.results.businessImpact.map((impact, index) => (
                <div key={index} className="flex items-start gap-3">
                  <i className="ri-check-double-line text-green-600 dark:text-green-400 text-xl mt-0.5 flex-shrink-0"></i>
                  <span className="text-slate-700 dark:text-slate-300">{impact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <i className="ri-double-quotes-l text-5xl text-white/30 mb-6"></i>
              <p className="text-xl sm:text-2xl leading-relaxed mb-6">{study.results.testimonial.quote}</p>
              <div>
                <div className="font-semibold text-lg">{study.results.testimonial.author}</div>
                <div className="text-indigo-200">{study.results.testimonial.company}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="py-16 px-4 sm:px-6 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Project Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {study.images.map((image, index) => (
              <div key={index} className="group">
                <div className="relative rounded-xl overflow-hidden mb-4 h-64">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">Key Takeaways</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {study.keyTakeaways.map((takeaway, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <i className="ri-lightbulb-flash-line text-indigo-600 dark:text-indigo-400 text-xl mt-0.5 flex-shrink-0"></i>
                <span className="text-slate-700 dark:text-slate-300">{takeaway}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready for Similar Results?
            </h2>
            <p className="text-lg text-indigo-100 mb-8 leading-relaxed">
              Let&apos;s discuss how fractional CTO services can help your startup achieve remarkable growth and technical excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-indigo-600 text-base font-semibold rounded-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Book Free Consultation
              </a>
              <a
                href="/case-studies"
                className="px-8 py-4 bg-transparent text-white text-base font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-indigo-600 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                View More Case Studies
              </a>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </section>

      <Footer />
    </div>
  );
}
