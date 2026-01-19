'use client';

export function StatsSection() {
  const stats = [
    {
      icon: 'ri-rocket-line',
      value: '50+',
      label: 'African Startups Supported',
      description: 'From seed to Series B'
    },
    {
      icon: 'ri-team-line',
      value: '200+',
      label: 'Engineers Hired',
      description: 'Across the continent'
    },
    {
      icon: 'ri-funds-line',
      value: '$20M+',
      label: 'Funding Secured',
      description: 'For African ventures'
    },
    {
      icon: 'ri-map-pin-2-line',
      value: '15+',
      label: 'Countries Covered',
      description: 'Pan-African presence'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Proven Track Record in
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Africa&apos;s Tech Ecosystem
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Deep understanding of the unique challenges and opportunities in African markets
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg mb-4">
                <i className={`${stat.icon} text-white text-2xl`}></i>
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white mb-1">{stat.label}</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
