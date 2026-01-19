'use client';

export function ServicesSection() {
  const services = [
    {
      icon: 'ri-terminal-box-line',
      title: 'Technology Strategy',
      description: 'Build scalable tech infrastructure optimized for African markets, mobile-first users, and varying connectivity conditions.',
      features: [
        'Mobile-first architecture design',
        'Offline-capable applications',
        'Low-bandwidth optimization',
        'Progressive web apps (PWA)'
      ]
    },
    {
      icon: 'ri-team-line',
      title: 'Team Building',
      description: 'Recruit and build world-class engineering teams from Africa\'s top talent pools across multiple countries and tech hubs.',
      features: [
        'Local talent sourcing',
        'Technical interview processes',
        'Competitive compensation strategies',
        'Remote team management'
      ]
    },
    {
      icon: 'ri-funds-line',
      title: 'Fundraising Support',
      description: 'Prepare technical due diligence materials and pitch decks that resonate with investors focused on African markets.',
      features: [
        'Technical due diligence prep',
        'Investor pitch support',
        'Technology roadmap creation',
        'Valuation justification'
      ]
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile Money Integration',
      description: 'Integrate with popular African payment systems including M-Pesa, MTN Mobile Money, Airtel Money, and other local providers.',
      features: [
        'Payment gateway integration',
        'Multi-currency support',
        'Fraud prevention systems',
        'Compliance management'
      ]
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Regulatory Compliance',
      description: 'Navigate complex regulatory landscapes across different African countries, from data protection to fintech licensing.',
      features: [
        'Data protection compliance',
        'Fintech licensing support',
        'Cross-border regulations',
        'Industry-specific compliance'
      ]
    },
    {
      icon: 'ri-rocket-line',
      title: 'Scale & Growth',
      description: 'Scale your technology infrastructure to support rapid growth across multiple African markets and user bases.',
      features: [
        'Multi-country expansion',
        'Infrastructure scaling',
        'Performance optimization',
        'Cost management'
      ]
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-6">
            <i className="ri-service-line text-indigo-600 dark:text-indigo-400"></i>
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Our Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Comprehensive CTO Services for
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              African Startups
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            From technology strategy to team building, we provide end-to-end CTO services tailored to the African market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg mb-4">
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <i className="ri-check-line text-indigo-600 dark:text-indigo-400 text-sm mt-0.5 flex-shrink-0"></i>
                    <span className="text-xs text-slate-600 dark:text-slate-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
