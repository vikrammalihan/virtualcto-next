'use client';

export function WhyMiddleEastSection() {
  const reasons = [
    {
      icon: 'ri-map-pin-line',
      title: 'Local Market Expertise',
      description: 'Deep understanding of Middle Eastern business culture, consumer behavior, and market dynamics across UAE, Saudi Arabia, and beyond.'
    },
    {
      icon: 'ri-time-line',
      title: 'Time Zone Alignment',
      description: 'Perfect overlap with Gulf Standard Time (GST) for real-time collaboration with your team and stakeholders.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Regulatory Compliance',
      description: 'Expert guidance on local regulations, data sovereignty, and compliance requirements across different Middle Eastern jurisdictions.'
    },
    {
      icon: 'ri-team-line',
      title: 'Regional Talent Network',
      description: 'Access to top engineering talent across Dubai, Riyadh, Abu Dhabi, and other major tech hubs in the region.'
    },
    {
      icon: 'ri-funds-line',
      title: 'Investor Relations',
      description: 'Strong connections with Middle Eastern VCs, angel investors, and government funding programs to support your growth.'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Scale-Up Experience',
      description: 'Proven track record helping startups navigate rapid growth in the fast-paced Middle Eastern market.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-6">
            <i className="ri-star-line text-indigo-600 dark:text-indigo-400"></i>
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Why Partner with Us in the
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Middle East?
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Combining global best practices with deep regional expertise to help your startup thrive in the Middle Eastern market.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 group"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl mb-6 shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all duration-300">
                <i className={`${reason.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
