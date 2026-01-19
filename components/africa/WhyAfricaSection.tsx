'use client';

export function WhyAfricaSection() {
  const reasons = [
    {
      icon: 'ri-map-pin-line',
      title: 'Local Market Understanding',
      description: 'Deep knowledge of African markets, regulatory environments, and business cultures across multiple countries from Lagos to Nairobi, Cape Town to Cairo.'
    },
    {
      icon: 'ri-time-line',
      title: 'Time Zone Alignment',
      description: 'Work in your local time zone with real-time support during African business hours, ensuring seamless communication and rapid response times.'
    },
    {
      icon: 'ri-team-line',
      title: 'Local Talent Networks',
      description: 'Extensive connections with top engineering talent across African tech hubs, universities, and coding bootcamps to help you build exceptional teams.'
    },
    {
      icon: 'ri-funds-line',
      title: 'Funding Ecosystem Knowledge',
      description: 'Experience working with African VCs, angel investors, and international funds investing in African startups to help you secure funding.'
    },
    {
      icon: 'ri-global-line',
      title: 'Infrastructure Expertise',
      description: 'Specialized knowledge in building scalable systems that work efficiently with African internet infrastructure and mobile-first user bases.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Regulatory Compliance',
      description: 'Navigate complex regulatory requirements across different African countries, from data protection to fintech regulations and mobile money integration.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-6">
            <i className="ri-lightbulb-line text-indigo-600 dark:text-indigo-400"></i>
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Why Choose Us</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Built for Africa&apos;s
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Unique Tech Landscape
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Unlike generic consulting services, we bring specialized expertise in navigating the opportunities and challenges specific to building technology companies in Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg mb-4">
                <i className={`${reason.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">{reason.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
