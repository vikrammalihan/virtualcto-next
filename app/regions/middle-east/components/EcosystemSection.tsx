'use client';

export function EcosystemSection() {
  const hubs = [
    {
      city: 'Dubai',
      country: 'UAE',
      icon: 'ri-building-line',
      description: 'Leading fintech and e-commerce hub',
      highlights: ['Dubai Internet City', 'DIFC Innovation Hub', 'Area 2071']
    },
    {
      city: 'Riyadh',
      country: 'Saudi Arabia',
      icon: 'ri-government-line',
      description: 'Vision 2030 technology initiatives',
      highlights: ['King Abdullah Financial District', 'Riyadh Techno Valley', 'NEOM']
    },
    {
      city: 'Abu Dhabi',
      country: 'UAE',
      icon: 'ri-rocket-line',
      description: 'AI and deep tech innovation',
      highlights: ['Hub71', 'Masdar City', 'ADGM']
    },
    {
      city: 'Doha',
      country: 'Qatar',
      icon: 'ri-lightbulb-line',
      description: 'Education and sports tech',
      highlights: ['Qatar Science & Technology Park', 'Digital Incubation Center']
    },
    {
      city: 'Manama',
      country: 'Bahrain',
      icon: 'ri-bank-line',
      description: 'Fintech and blockchain hub',
      highlights: ['Bahrain FinTech Bay', 'Bahrain International Investment Park']
    },
    {
      city: 'Muscat',
      country: 'Oman',
      icon: 'ri-ship-line',
      description: 'Logistics and maritime tech',
      highlights: ['Knowledge Oasis Muscat', 'Oman Technology Fund']
    }
  ];

  const additionalCities = [
    'Kuwait City', 'Amman', 'Beirut', 'Cairo', 'Jeddah', 'Sharjah',
    'Ras Al Khaimah', 'Al Khobar', 'Dammam', 'Fujairah'
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-6">
            <i className="ri-map-pin-line text-indigo-600 dark:text-indigo-400"></i>
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Regional Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Connected to Major
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Tech Ecosystems
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Deep connections across the Middle East's most vibrant startup hubs and innovation centers.
          </p>
        </div>

        {/* Main Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {hubs.map((hub, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg shadow-lg shadow-indigo-500/30">
                  <i className={`${hub.icon} text-white text-xl`}></i>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-slate-900 dark:text-white">{hub.city}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{hub.country}</div>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {hub.description}
              </p>
              <div className="space-y-2">
                {hub.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <i className="ri-map-pin-2-line text-indigo-600 dark:text-indigo-400 text-sm"></i>
                    <span className="text-xs text-slate-600 dark:text-slate-400">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Cities */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
              <i className="ri-global-line text-indigo-600 dark:text-indigo-400 text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Also Serving</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Additional cities across the region</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {additionalCities.map((city, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-slate-50 dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600"
              >
                <span className="text-sm text-slate-700 dark:text-slate-300">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
