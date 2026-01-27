'use client';

export function StatsSection() {
  const stats = [
    {
      icon: 'ri-building-line',
      value: '100+',
      label: 'European Startups',
      description: 'From seed to Series C'
    },
    {
      icon: 'ri-funds-line',
      value: '€50M+',
      label: 'Funding Raised',
      description: 'By our portfolio companies'
    },
    {
      icon: 'ri-map-pin-line',
      value: '20+',
      label: 'EU Countries',
      description: 'Market coverage'
    },
    {
      icon: 'ri-shield-check-line',
      value: '100%',
      label: 'GDPR Compliant',
      description: 'Data protection expertise'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white dark:bg-slate-900 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30 rounded-lg">
                <i className={`${stat.icon} text-2xl text-indigo-600 dark:text-indigo-400`}></i>
              </div>
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-1">
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
