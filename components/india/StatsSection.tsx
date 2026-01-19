'use client';

export function StatsSection() {
  const stats = [
    {
      icon: 'ri-rocket-line',
      value: '80+',
      label: 'Indian Startups Guided',
      description: 'From seed to Series B'
    },
    {
      icon: 'ri-money-rupee-circle-line',
      value: '₹400Cr+',
      label: 'Total Funding Raised',
      description: 'By our partner startups'
    },
    {
      icon: 'ri-map-pin-line',
      value: '15+',
      label: 'Indian Cities',
      description: 'Bangalore, Mumbai, Delhi & more'
    },
    {
      icon: 'ri-team-line',
      value: '500+',
      label: 'Tech Teams Built',
      description: 'World-class engineering talent'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Proven Track Record in India
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Deep expertise in India's unique tech ecosystem, regulatory landscape, and startup culture
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl mb-4 shadow-lg shadow-indigo-500/30">
                <i className={`${stat.icon} text-white text-2xl`}></i>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                {stat.value}
              </div>
              <div className="text-base font-semibold text-slate-900 dark:text-white mb-1">
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
