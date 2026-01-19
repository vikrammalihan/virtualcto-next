'use client';

export function StatsSection() {
  const stats = [
    {
      icon: 'ri-building-line',
      value: '60+',
      label: 'Middle East Startups Served',
      description: 'From seed to Series B'
    },
    {
      icon: 'ri-funds-line',
      value: '$35M+',
      label: 'Total Funding Raised',
      description: 'By our partner startups'
    },
    {
      icon: 'ri-global-line',
      value: '12+',
      label: 'Countries Covered',
      description: 'Across the Middle East'
    },
    {
      icon: 'ri-shield-check-line',
      value: '100%',
      label: 'Regulatory Compliance',
      description: 'Local laws & standards'
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg mb-4 shadow-lg shadow-indigo-500/30">
                <i className={`${stat.icon} text-white text-2xl`}></i>
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
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
