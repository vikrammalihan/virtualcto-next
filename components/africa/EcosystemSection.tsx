'use client';

export function EcosystemSection() {
  const hubs = [
    {
      city: 'Lagos',
      country: 'Nigeria',
      icon: 'ri-building-line',
      description: 'West Africa\'s largest tech ecosystem',
      highlights: ['Fintech hub', 'E-commerce', 'Mobile payments']
    },
    {
      city: 'Nairobi',
      country: 'Kenya',
      icon: 'ri-smartphone-line',
      description: 'Silicon Savannah innovation center',
      highlights: ['Mobile money', 'AgriTech', 'HealthTech']
    },
    {
      city: 'Cape Town',
      country: 'South Africa',
      icon: 'ri-rocket-line',
      description: 'Africa\'s startup capital',
      highlights: ['Enterprise SaaS', 'AI/ML', 'Cybersecurity']
    },
    {
      city: 'Cairo',
      country: 'Egypt',
      icon: 'ri-global-line',
      description: 'North Africa\'s tech gateway',
      highlights: ['E-commerce', 'Logistics', 'EdTech']
    },
    {
      city: 'Accra',
      country: 'Ghana',
      icon: 'ri-lightbulb-line',
      description: 'Emerging innovation hub',
      highlights: ['Fintech', 'Digital services', 'Tech talent']
    },
    {
      city: 'Kigali',
      country: 'Rwanda',
      icon: 'ri-shield-check-line',
      description: 'Africa\'s tech-forward capital',
      highlights: ['Smart city', 'Digital gov', 'Innovation']
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-6">
            <i className="ri-map-pin-2-line text-indigo-600 dark:text-indigo-400"></i>
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Pan-African Coverage</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Connected to Africa&apos;s
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Leading Tech Hubs
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Deep networks and local expertise across Africa&apos;s most vibrant technology ecosystems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubs.map((hub, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg">
                  <i className={`${hub.icon} text-white text-2xl`}></i>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-slate-900 dark:text-white">{hub.city}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">{hub.country}</div>
                </div>
              </div>
              
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{hub.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {hub.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded-full"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 px-8 py-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">15+</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Countries</div>
            </div>
            <div className="w-px h-12 bg-slate-200 dark:bg-slate-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">30+</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Cities</div>
            </div>
            <div className="w-px h-12 bg-slate-200 dark:bg-slate-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">50+</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Startups</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
