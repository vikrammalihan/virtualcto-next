'use client';

export function ServicesSection() {
  const services = [
    {
      icon: 'ri-smartphone-line',
      title: 'Digital Transformation Strategy',
      description: 'Comprehensive technology roadmaps aligned with Vision 2030 and regional digital transformation initiatives.',
      features: [
        'Cloud migration strategies',
        'Digital-first architecture',
        'Legacy system modernization',
        'API-first development'
      ]
    },
    {
      icon: 'ri-team-line',
      title: 'Regional Talent Acquisition',
      description: 'Build world-class engineering teams with talent from across the Middle East and global markets.',
      features: [
        'Technical hiring strategies',
        'Interview process design',
        'Compensation benchmarking',
        'Team structure planning'
      ]
    },
    {
      icon: 'ri-funds-line',
      title: 'Fundraising & Investor Relations',
      description: 'Technical due diligence preparation and investor-ready technology presentations.',
      features: [
        'Tech stack documentation',
        'Scalability assessments',
        'Security audits',
        'Growth projections'
      ]
    },
    {
      icon: 'ri-bank-card-line',
      title: 'Payment Integration',
      description: 'Seamless integration with regional payment gateways and digital wallet solutions.',
      features: [
        'Multi-currency support',
        'Local payment methods',
        'PCI DSS compliance',
        'Fraud prevention'
      ]
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Compliance & Security',
      description: 'Navigate complex regulatory requirements across different Middle Eastern jurisdictions.',
      features: [
        'Data localization',
        'Privacy regulations',
        'Industry certifications',
        'Security frameworks'
      ]
    },
    {
      icon: 'ri-rocket-line',
      title: 'Scale & Growth Engineering',
      description: 'Build scalable infrastructure to support rapid growth across the region.',
      features: [
        'Performance optimization',
        'Multi-region deployment',
        'Auto-scaling solutions',
        'Cost optimization'
      ]
    }
  ];

  try {
    return (
      <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-6">
              <i className="ri-service-line text-indigo-600 dark:text-indigo-400"></i>
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Tailored Technology Leadership for
              <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Middle Eastern Markets
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Comprehensive CTO services designed specifically for the unique challenges and opportunities in the Middle East.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl mb-6 shadow-lg shadow-indigo-500/30">
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <i className="ri-check-line text-indigo-600 dark:text-indigo-400 text-lg mt-0.5 flex-shrink-0"></i>
                      <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Error rendering ServicesSection:', error);
    return (
      <section id="services" className="py-16 px-4 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto text-center">
          <p className="text-red-600 dark:text-red-400">
            Unable to load services section. Please try again later.
          </p>
        </div>
      </section>
    );
  }
}
