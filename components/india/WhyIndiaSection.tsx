'use client';

export function WhyIndiaSection() {
  const reasons = [
    {
      icon: 'ri-map-pin-user-line',
      title: 'Local Market Expertise',
      description: 'Deep understanding of Indian market dynamics, consumer behavior, and regional nuances across tier 1, 2, and 3 cities.'
    },
    {
      icon: 'ri-time-line',
      title: 'Time Zone Advantage',
      description: 'Perfect alignment with IST for real-time collaboration, immediate support, and seamless communication with your team.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Regulatory Compliance',
      description: 'Expert guidance on IT Act, data localization, RBI guidelines, GST compliance, and Indian startup regulations.'
    },
    {
      icon: 'ri-team-line',
      title: 'Talent Network',
      description: 'Access to India\'s vast tech talent pool across IITs, NITs, and premier engineering institutions nationwide.'
    },
    {
      icon: 'ri-funds-line',
      title: 'Funding Ecosystem',
      description: 'Strong connections with Indian VCs, angel networks, and government schemes like Startup India and SIDBI.'
    },
    {
      icon: 'ri-global-line',
      title: 'Global Scale Mindset',
      description: 'Build in India, scale globally. Leverage cost advantages while maintaining world-class quality standards.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Why Choose Us for India?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Combining global best practices with deep local expertise to help Indian startups succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl mb-5 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
                <i className={`${reason.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
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
