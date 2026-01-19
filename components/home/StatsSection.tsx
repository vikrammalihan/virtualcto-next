'use client';

export function StatsSection() {
  const stats = [
    {
      icon: 'ri-building-line',
      value: '100+',
      label: 'Startups Successfully Guided',
      description: 'Across multiple industries and regions'
    },
    {
      icon: 'ri-funds-line',
      value: '$50M+',
      label: 'Technical Decisions Influenced',
      description: 'Strategic technology investments'
    },
    {
      icon: 'ri-global-line',
      value: '4',
      label: 'Regions Served',
      description: 'Africa, Europe, Middle East, India'
    },
    {
      icon: 'ri-team-line',
      value: '500+',
      label: 'Technical Teams Built',
      description: 'High-performing engineering teams'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Proven Track Record of
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Excellence &amp; Impact
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Numbers that demonstrate commitment to startup success
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg mb-4">
                <i className={`${stat.icon} text-white text-2xl`}></i>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
