'use client';

export function ServicesSection() {
  const services = [
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile-First Strategy',
      description: 'Design and build mobile-first solutions optimized for India\'s smartphone-dominant market with focus on performance and data efficiency.',
      features: ['Progressive Web Apps', 'Lite App Development', 'Offline-First Architecture', 'Regional Language Support']
    },
    {
      icon: 'ri-team-line',
      title: 'Indian Talent Acquisition',
      description: 'Build exceptional engineering teams from India\'s top talent pools with our proven hiring and retention strategies.',
      features: ['IIT/NIT Recruitment', 'Remote Team Building', 'Compensation Benchmarking', 'Culture Development']
    },
    {
      icon: 'ri-funds-line',
      title: 'Fundraising Support',
      description: 'Navigate India\'s funding landscape with expert guidance on pitch decks, investor introductions, and due diligence preparation.',
      features: ['Investor Network Access', 'Pitch Deck Review', 'Valuation Strategy', 'Term Sheet Negotiation']
    },
    {
      icon: 'ri-bank-card-line',
      title: 'Payment Integration',
      description: 'Seamless integration with Indian payment gateways, UPI, wallets, and compliance with RBI regulations.',
      features: ['UPI Integration', 'Payment Gateway Setup', 'Wallet Integration', 'PCI DSS Compliance']
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Compliance & Security',
      description: 'Ensure your startup meets all Indian regulatory requirements including data localization and IT Act compliance.',
      features: ['Data Localization', 'IT Act Compliance', 'Security Audits', 'Privacy Policy']
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Scale & Growth',
      description: 'Scale your infrastructure to handle India\'s massive user base while optimizing costs and maintaining performance.',
      features: ['Cloud Architecture', 'Performance Optimization', 'Cost Management', 'DevOps Setup']
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Specialized Services for Indian Startups
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Tailored technology leadership services designed specifically for India's unique market needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl mb-5 shadow-lg shadow-indigo-500/30">
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
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
      </div>
    </section>
  );
}
