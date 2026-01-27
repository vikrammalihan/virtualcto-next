'use client';

export function EcosystemSection() {
  const hubs = [
    {
      city: 'Bangalore',
      state: 'Karnataka',
      icon: 'ri-building-line',
      description: 'India\'s Silicon Valley with 4000+ startups',
      highlights: ['Tech Capital', 'Largest Talent Pool', 'VC Hub']
    },
    {
      city: 'Mumbai',
      state: 'Maharashtra',
      icon: 'ri-bank-line',
      description: 'Financial capital and fintech innovation center',
      highlights: ['Fintech Hub', 'Media & Entertainment', 'E-commerce']
    },
    {
      city: 'Delhi NCR',
      state: 'Delhi/Haryana',
      icon: 'ri-government-line',
      description: 'Diverse startup ecosystem with government support',
      highlights: ['E-commerce', 'EdTech', 'Enterprise SaaS']
    },
    {
      city: 'Hyderabad',
      state: 'Telangana',
      icon: 'ri-hospital-line',
      description: 'Emerging tech hub with pharma and IT focus',
      highlights: ['HealthTech', 'IT Services', 'Biotech']
    },
    {
      city: 'Pune',
      state: 'Maharashtra',
      icon: 'ri-car-line',
      description: 'Manufacturing and automotive tech innovation',
      highlights: ['AutoTech', 'Manufacturing', 'IT Services']
    },
    {
      city: 'Chennai',
      state: 'Tamil Nadu',
      icon: 'ri-factory-line',
      description: 'Manufacturing and hardware innovation hub',
      highlights: ['Hardware', 'Manufacturing', 'Automotive']
    }
  ];

  const additionalCities = [
    'Ahmedabad', 'Kolkata', 'Jaipur', 'Chandigarh', 'Kochi', 
    'Indore', 'Lucknow', 'Coimbatore', 'Visakhapatnam', 'Bhubaneswar'
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            India's Tech Ecosystem Coverage
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Deep presence across India's major tech hubs and emerging startup cities
          </p>
        </div>

        {/* Major Hubs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {hubs.map((hub, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex-shrink-0 shadow-lg shadow-indigo-500/30">
                  <i className={`${hub.icon} text-white text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {hub.city}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {hub.state}
                  </p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                {hub.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {hub.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded-full border border-indigo-200 dark:border-indigo-800"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Cities */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-center">
            Also Serving
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalCities.map((city, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-600"
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Coverage Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">15+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Major Cities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">28</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">States Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">4000+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Startups in Network</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">100%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Remote Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
