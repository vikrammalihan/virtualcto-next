'use client';

import Link from 'next/link';

export function ServicesSection() {
  const services = [
    {
      icon: 'ri-shield-check-line',
      title: 'GDPR Compliance Strategy',
      description: 'Comprehensive data protection framework design, privacy impact assessments, and ongoing compliance monitoring across all EU jurisdictions.',
      features: ['Data mapping & audits', 'Privacy by design', 'DPO services', 'Cross-border transfers']
    },
    {
      icon: 'ri-team-line',
      title: 'European Talent Acquisition',
      description: 'Build world-class engineering teams across Europe. Access to talent pools in major tech hubs and emerging markets.',
      features: ['Technical hiring', 'Remote team building', 'Contractor management', 'Salary benchmarking']
    },
    {
      icon: 'ri-funds-line',
      title: 'EU Funding & Investment',
      description: 'Navigate European funding landscape from Horizon Europe to regional grants. Prepare for Series A-C rounds with European VCs.',
      features: ['Grant applications', 'Investor introductions', 'Pitch deck review', 'Due diligence prep']
    },
    {
      icon: 'ri-global-line',
      title: 'Multi-Market Expansion',
      description: 'Scale your technology across European markets with localized strategies for different regions and regulatory environments.',
      features: ['Market entry strategy', 'Localization planning', 'Regional compliance', 'Partnership development']
    },
    {
      icon: 'ri-bank-card-line',
      title: 'Fintech & Payment Integration',
      description: 'Navigate PSD2, Open Banking, and European payment systems. Integration with SEPA, local payment methods, and digital wallets.',
      features: ['Payment gateway setup', 'PSD2 compliance', 'Open Banking APIs', 'KYC/AML systems']
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Scale & Growth Engineering',
      description: 'Build scalable infrastructure for European markets. Cloud architecture, microservices, and performance optimization.',
      features: ['Cloud migration', 'Architecture review', 'Performance tuning', 'DevOps automation']
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-6">
            <i className="ri-service-line text-indigo-600 dark:text-indigo-400"></i>
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Tailored for European Markets
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Comprehensive technology leadership services designed specifically for the unique challenges and opportunities of building in Europe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white dark:bg-slate-900 rounded-xl shadow-sm hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-6 bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30 rounded-lg">
                <i className={`${service.icon} text-2xl text-indigo-600 dark:text-indigo-400`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <i className="ri-check-line text-indigo-600 dark:text-indigo-400 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-violet-700 transition-all shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
          >
            Discuss Your Needs
            <i className="ri-arrow-right-line ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
