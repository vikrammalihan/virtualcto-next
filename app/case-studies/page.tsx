'use client';

import { useState, useEffect } from 'react';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const industries = ['all', 'FinTech', 'HealthTech', 'EdTech', 'CleanTech', 'E-Commerce', 'SaaS'];
  const regions = ['all', 'Africa', 'Europe', 'Middle East', 'India', 'Global'];

  const caseStudies = [
    {
      id: 1,
      title: 'FinTech Scale-Up - Nigeria',
      industry: 'FinTech',
      region: 'Africa',
      date: '2024',
      duration: '18 months',
      image: 'https://readdy.ai/api/search-image?query=modern%20fintech%20office%20with%20diverse%20African%20team%20working%20on%20financial%20technology%20platform%2C%20digital%20payment%20systems%20on%20screens%2C%20professional%20startup%20environment%20with%20teal%20and%20emerald%20accent%20lighting%2C%20contemporary%20workspace&width=800&height=500&seq=case-study-fintech-001&orientation=landscape',
      challenge: 'A payment processing startup needed to scale from 10K to 1M+ daily transactions while ensuring PCI-DSS compliance and maintaining 99.99% uptime.',
      solution: 'Architected a microservices-based infrastructure with event-driven processing, implemented automated compliance monitoring, and built a real-time fraud detection system.',
      results: [
        '100x transaction volume increase',
        '99.99% uptime achieved',
        '$50M+ processed monthly',
        'PCI-DSS Level 1 compliance',
        '40% reduction in processing costs'
      ],
      technologies: ['AWS', 'Kubernetes', 'Node.js', 'PostgreSQL', 'Redis', 'Kafka'],
      metrics: [
        { value: '100x', label: 'Scale' },
        { value: '99.99%', label: 'Uptime' },
        { value: '$50M+', label: 'Processed' }
      ]
    },
    {
      id: 2,
      title: 'HealthTech Platform - India',
      industry: 'HealthTech',
      region: 'India',
      date: '2024',
      duration: '12 months',
      image: 'https://readdy.ai/api/search-image?query=modern%20healthcare%20technology%20platform%20with%20medical%20professionals%20using%20telemedicine%20software%20in%20Indian%20hospital%2C%20clean%20medical%20environment%20with%20digital%20health%20records%2C%20teal%20and%20emerald%20interface%20elements%2C%20contemporary%20healthcare%20setting&width=800&height=500&seq=case-study-health-002&orientation=landscape',
      challenge: 'Telemedicine platform needed to serve 500+ hospitals with HIPAA-compliant infrastructure and AI-powered diagnostics while handling sensitive patient data.',
      solution: 'Built HIPAA-compliant cloud infrastructure, implemented end-to-end encryption, integrated AI diagnostics, and created a scalable video consultation system.',
      results: [
        '500+ hospitals onboarded',
        '2M+ patients served',
        '40% cost reduction for hospitals',
        'HIPAA compliance achieved',
        '95% patient satisfaction'
      ],
      technologies: ['Azure', 'Python', 'TensorFlow', 'MongoDB', 'WebRTC', 'Docker'],
      metrics: [
        { value: '500+', label: 'Hospitals' },
        { value: '2M+', label: 'Patients' },
        { value: '40%', label: 'Savings' }
      ]
    },
    {
      id: 3,
      title: 'EdTech Expansion - Middle East',
      industry: 'EdTech',
      region: 'Middle East',
      date: '2023',
      duration: '15 months',
      image: 'https://readdy.ai/api/search-image?query=modern%20educational%20technology%20platform%20with%20students%20using%20digital%20learning%20tools%20in%20Middle%20Eastern%20classroom%2C%20contemporary%20learning%20environment%20with%20interactive%20displays%2C%20teal%20and%20emerald%20color%20scheme%2C%20diverse%20students%20engaged%20with%20technology&width=800&height=500&seq=case-study-edtech-003&orientation=landscape',
      challenge: 'Learning management system needed to support 100K+ concurrent users across 15 countries with multi-language support and real-time collaboration features.',
      solution: 'Designed globally distributed architecture with CDN integration, implemented real-time collaboration tools, and built adaptive learning algorithms.',
      results: [
        '15 countries launched',
        '100K+ concurrent users',
        '95% satisfaction rate',
        '8 languages supported',
        '60% engagement increase'
      ],
      technologies: ['GCP', 'React', 'GraphQL', 'Elasticsearch', 'WebSocket', 'Terraform'],
      metrics: [
        { value: '15', label: 'Countries' },
        { value: '100K+', label: 'Users' },
        { value: '95%', label: 'Satisfaction' }
      ]
    },
    {
      id: 4,
      title: 'CleanTech IoT - Europe',
      industry: 'CleanTech',
      region: 'Europe',
      date: '2023',
      duration: '20 months',
      image: 'https://readdy.ai/api/search-image?query=clean%20energy%20technology%20with%20IoT%20sensors%20and%20smart%20grid%20infrastructure%20in%20European%20setting%2C%20modern%20sustainable%20technology%20environment%2C%20data%20visualization%20dashboards%20with%20teal%20and%20emerald%20accents%2C%20renewable%20energy%20systems&width=800&height=500&seq=case-study-cleantech-004&orientation=landscape',
      challenge: 'Smart energy management system needed to process real-time data from 10K+ sensors with predictive analytics and automated optimization.',
      solution: 'Built IoT infrastructure with edge computing, implemented machine learning for predictive maintenance, and created real-time analytics dashboard.',
      results: [
        '10K+ sensors deployed',
        '60% energy savings',
        'Real-time analytics',
        '85% maintenance cost reduction',
        'Carbon footprint reduced by 45%'
      ],
      technologies: ['AWS IoT', 'Python', 'TimescaleDB', 'Apache Spark', 'React', 'MQTT'],
      metrics: [
        { value: '10K+', label: 'Sensors' },
        { value: '60%', label: 'Savings' },
        { value: '-45%', label: 'Carbon' }
      ]
    },
    {
      id: 5,
      title: 'E-Commerce Platform - Global',
      industry: 'E-Commerce',
      region: 'Global',
      date: '2023',
      duration: '14 months',
      image: 'https://readdy.ai/api/search-image?query=modern%20e-commerce%20platform%20with%20global%20logistics%20and%20shopping%20interface%2C%20contemporary%20retail%20technology%20environment%2C%20warehouse%20automation%20and%20digital%20commerce%20systems%20with%20teal%20and%20emerald%20lighting%2C%20international%20business%20setting&width=800&height=500&seq=case-study-ecommerce-005&orientation=landscape',
      challenge: 'Database bottlenecks causing slow page loads and cart abandonment during peak traffic periods, affecting conversion rates and customer satisfaction.',
      solution: 'Implemented CQRS pattern with Redis caching, database sharding, and CDN optimization. Built real-time inventory management and personalization engine.',
      results: [
        '80% reduction in page load times',
        '45% increase in conversion rates',
        'Handled 5x traffic during Black Friday',
        '70% improvement in customer satisfaction',
        '$10M+ additional revenue'
      ],
      technologies: ['AWS', 'Node.js', 'Redis', 'PostgreSQL', 'Elasticsearch', 'Next.js'],
      metrics: [
        { value: '80%', label: 'Speed' },
        { value: '+45%', label: 'Conversion' },
        { value: '5x', label: 'Traffic' }
      ]
    },
    {
      id: 6,
      title: 'SaaS Platform - Europe',
      industry: 'SaaS',
      region: 'Europe',
      date: '2022',
      duration: '16 months',
      image: 'https://readdy.ai/api/search-image?query=modern%20SaaS%20platform%20with%20European%20team%20working%20on%20cloud%20software%2C%20contemporary%20office%20with%20multiple%20screens%20showing%20analytics%20dashboards%2C%20teal%20and%20emerald%20interface%20design%2C%20professional%20technology%20workspace&width=800&height=500&seq=case-study-saas-006&orientation=landscape',
      challenge: 'Legacy monolithic application struggling with deployment speed, team coordination, and scaling issues as the company grew from 50 to 200 employees.',
      solution: 'Migrated to microservices architecture, implemented CI/CD pipelines, established DevOps culture, and built comprehensive monitoring and alerting systems.',
      results: [
        '90% faster deployment cycles',
        '99.95% uptime achieved',
        '50% reduction in infrastructure costs',
        'Team productivity increased 3x',
        'Zero-downtime deployments'
      ],
      technologies: ['Kubernetes', 'Docker', 'Jenkins', 'Prometheus', 'Grafana', 'Terraform'],
      metrics: [
        { value: '90%', label: 'Deployment' },
        { value: '99.95%', label: 'Uptime' },
        { value: '-50%', label: 'Costs' }
      ]
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const industryMatch = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const regionMatch = selectedRegion === 'all' || study.region === selectedRegion;
    return industryMatch && regionMatch;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-6">
              <i className="ri-trophy-line text-indigo-600 dark:text-indigo-400"></i>
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Real Results, Real Impact</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Success Stories from
              <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Growth-Stage Startups
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Discover how fractional CTO services have helped startups across Africa, Europe, Middle East, and India scale their technology, build high-performing teams, and achieve remarkable growth.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">50+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Projects Delivered</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">$500M+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Value Created</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">15+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Countries Served</div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-50 to-transparent dark:from-indigo-900/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet-50 to-transparent dark:from-violet-900/10 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 sm:px-6 border-y border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Industry Filter */}
            <div className="w-full lg:w-auto">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Filter by Industry</label>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                      selectedIndustry === industry
                        ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500'
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>

            {/* Region Filter */}
            <div className="w-full lg:w-auto">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Filter by Region</label>
              <div className="flex flex-wrap gap-2">
                {regions.map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                      selectedRegion === region
                        ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500'
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-center">
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Showing <strong className="text-indigo-600 dark:text-indigo-400">{filteredCaseStudies.length}</strong> case {filteredCaseStudies.length === 1 ? 'study' : 'studies'}
            </span>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <a
                key={study.id}
                href={`/case-study-detail?id=${study.id}`}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 group cursor-pointer block"
              >
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-indigo-600 dark:text-indigo-400 text-xs font-medium rounded-full">
                      {study.industry}
                    </span>
                    <span className="px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-violet-600 dark:text-violet-400 text-xs font-medium rounded-full">
                      {study.region}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {study.title}
                  </h3>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Challenge</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Solution</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                      {study.solution}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx}>
                          <span className="font-semibold text-indigo-600 dark:text-indigo-400">{metric.value}</span>
                          <span className="ml-1">{metric.label}</span>
                        </div>
                      ))}
                    </div>
                    <i className="ri-arrow-right-line text-indigo-600 dark:text-indigo-400 text-xl group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* No Results */}
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-16">
              <i className="ri-search-line text-6xl text-slate-300 dark:text-slate-700 mb-4"></i>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No case studies found</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">Try adjusting your filters to see more results</p>
              <button
                onClick={() => {
                  setSelectedIndustry('all');
                  setSelectedRegion('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all cursor-pointer whitespace-nowrap"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-indigo-100 mb-8 leading-relaxed">
              Join the growing list of startups that have transformed their technology and achieved remarkable growth with fractional CTO services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-indigo-600 text-base font-semibold rounded-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Book Free Consultation
              </a>
              <a
                href="/about"
                className="px-8 py-4 bg-transparent text-white text-base font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-indigo-600 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Learn More About Me
              </a>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </section>

      <Footer />
    </div>
  );
}
