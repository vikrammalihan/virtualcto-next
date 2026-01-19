'use client';

export function EcosystemSection() {
  const hubs = [
    {
      city: 'London',
      country: 'United Kingdom',
      icon: 'ri-bank-line',
      specialties: ['Fintech', 'AI/ML', 'Enterprise SaaS'],
      description: 'Europe&apos;s largest tech hub with strong fintech and AI ecosystems. Access to top-tier talent and major VC firms.',
      stats: { startups: '3,000+', funding: '€10B+', unicorns: '30+' }
    },
    {
      city: 'Berlin',
      country: 'Germany',
      icon: 'ri-rocket-line',
      specialties: ['E-commerce', 'Mobility', 'HealthTech'],
      description: 'Vibrant startup scene with affordable talent and strong government support. Hub for European expansion.',
      stats: { startups: '2,500+', funding: '€5B+', unicorns: '15+' }
    },
    {
      city: 'Paris',
      country: 'France',
      icon: 'ri-lightbulb-line',
      specialties: ['AI', 'DeepTech', 'CleanTech'],
      description: 'Leading AI research hub with Station F, world&apos;s largest startup campus. Strong government backing.',
      stats: { startups: '2,000+', funding: '€4B+', unicorns: '20+' }
    },
    {
      city: 'Amsterdam',
      country: 'Netherlands',
      icon: 'ri-global-line',
      specialties: ['Fintech', 'Logistics', 'SaaS'],
      description: 'International business hub with excellent infrastructure and English-speaking talent pool.',
      stats: { startups: '1,500+', funding: '€3B+', unicorns: '10+' }
    },
    {
      city: 'Stockholm',
      country: 'Sweden',
      icon: 'ri-music-line',
      specialties: ['Gaming', 'Music Tech', 'Enterprise'],
      description: 'Produces more unicorns per capita than anywhere else. Strong engineering culture and innovation.',
      stats: { startups: '1,200+', funding: '€2B+', unicorns: '12+' }
    },
    {
      city: 'Barcelona',
      country: 'Spain',
      icon: 'ri-smartphone-line',
      specialties: ['Mobile', 'Travel Tech', 'IoT'],
      description: 'Growing tech scene with Mobile World Congress. Attractive lifestyle and competitive costs.',
      stats: { startups: '1,000+', funding: '€1.5B+', unicorns: '5+' }
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-6">
            <i className="ri-map-2-line text-indigo-600 dark:text-indigo-400"></i>
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">Tech Ecosystems</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Connected Across Europe&apos;s Tech Hubs
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Deep networks and expertise in Europe&apos;s most dynamic technology ecosystems. From London to Stockholm, we help you navigate and succeed in each unique market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hubs.map((hub, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {hub.city}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{hub.country}</p>
                </div>
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30 rounded-lg group-hover:scale-110 transition-transform">
                  <i className={`${hub.icon} text-xl text-indigo-600 dark:text-indigo-400`}></i>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {hub.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {hub.description}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">{hub.stats.startups}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Startups</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">{hub.stats.funding}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Funding</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">{hub.stats.unicorns}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Unicorns</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Also serving: Dublin, Zurich, Copenhagen, Helsinki, Lisbon, Vienna, Prague, Warsaw, and more
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500 dark:text-slate-500">
            <span>Munich</span>
            <span>•</span>
            <span>Milan</span>
            <span>•</span>
            <span>Brussels</span>
            <span>•</span>
            <span>Oslo</span>
            <span>•</span>
            <span>Tallinn</span>
            <span>•</span>
            <span>Vilnius</span>
            <span>•</span>
            <span>Bucharest</span>
          </div>
        </div>
      </div>
    </section>
  );
}
