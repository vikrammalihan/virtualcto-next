'use client';

export function WhyEuropeSection() {
  const reasons = [
    {
      icon: 'ri-shield-check-line',
      title: 'GDPR & Compliance Expertise',
      description: 'Navigate complex European data protection regulations with confidence. Expert guidance on GDPR, privacy laws, and regulatory compliance across all EU member states.'
    },
    {
      icon: 'ri-team-line',
      title: 'Access to Top European Talent',
      description: 'Tap into Europe&apos;s diverse tech talent pool. From Berlin&apos;s startup scene to London&apos;s fintech hub, we help you build exceptional teams across the continent.'
    },
    {
      icon: 'ri-time-line',
      title: 'Time Zone Alignment',
      description: 'Real-time collaboration across European time zones. From Lisbon to Helsinki, seamless communication and rapid response times for your critical business needs.'
    },
    {
      icon: 'ri-global-line',
      title: 'Multi-Market Strategy',
      description: 'Scale across European markets with localized strategies. Understanding of cultural nuances, language requirements, and market-specific regulations in 20+ countries.'
    },
    {
      icon: 'ri-funds-line',
      title: 'EU Funding & Investment',
      description: 'Navigate European funding landscape including Horizon Europe, EIC Accelerator, and regional grants. Connect with VCs and angel investors across major European hubs.'
    },
    {
      icon: 'ri-building-4-line',
      title: 'Deep Industry Knowledge',
      description: 'Expertise in Europe&apos;s key sectors: fintech, healthtech, cleantech, and SaaS. Understanding of industry-specific regulations and best practices across the EU.'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-6">
            <i className="ri-star-line text-indigo-600 dark:text-indigo-400"></i>
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Your European Technology Partner
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Deep understanding of European markets, regulations, and tech ecosystems. We help you navigate the unique challenges and opportunities of building technology companies in Europe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-6 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg group-hover:scale-110 transition-transform">
                <i className={`${reason.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {reason.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
