'use client';

export function IndustriesSection() {
  const industries = [
    {
      icon: 'ri-bank-card-line',
      title: 'FinTech',
      description: 'Payment platforms, digital banking, blockchain solutions, and financial services innovation',
      color: 'from-indigo-600 to-violet-600'
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'HealthTech',
      description: 'Telemedicine platforms, health records systems, medical devices, and patient care solutions',
      color: 'from-indigo-600 to-violet-600'
    },
    {
      icon: 'ri-book-open-line',
      title: 'EdTech',
      description: 'Learning management systems, online education platforms, and educational content delivery',
      color: 'from-indigo-600 to-violet-600'
    },
    {
      icon: 'ri-leaf-line',
      title: 'CleanTech',
      description: 'Renewable energy solutions, sustainability platforms, and environmental monitoring systems',
      color: 'from-indigo-600 to-violet-600'
    },
    {
      icon: 'ri-gamepad-line',
      title: 'iGaming',
      description: 'Online gaming platforms, betting systems, casino solutions, and gaming infrastructure',
      color: 'from-indigo-600 to-violet-600'
    },
    {
      icon: 'ri-home-smile-line',
      title: 'PropTech',
      description: 'Real estate platforms, property management systems, and smart building solutions',
      color: 'from-indigo-600 to-violet-600'
    },
    {
      icon: 'ri-car-line',
      title: 'Mobility',
      description: 'Ride-sharing platforms, fleet management, logistics optimization, and transportation tech',
      color: 'from-indigo-600 to-violet-600'
    },
    {
      icon: 'ri-shopping-cart-line',
      title: 'E-Commerce',
      description: 'Online marketplaces, retail platforms, inventory management, and customer experience systems',
      color: 'from-indigo-600 to-violet-600'
    },
    {
      icon: 'ri-film-line',
      title: 'Media',
      description: 'Streaming platforms, content management systems, digital publishing, and entertainment tech',
      color: 'from-indigo-600 to-violet-600'
    },
    {
      icon: 'ri-building-line',
      title: 'Enterprise',
      description: 'B2B SaaS solutions, enterprise software, workflow automation, and business intelligence',
      color: 'from-indigo-600 to-violet-600'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-6">
            <i className="ri-building-4-line text-indigo-600 dark:text-indigo-400"></i>
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Industries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Industries I&apos;ve
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Successfully Served
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            25+ years of cross-industry expertise helping startups scale across diverse sectors
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Icon State */}
              <div className="relative z-10 transition-all duration-300 group-hover:opacity-0 group-hover:scale-75">
                <div className={`w-14 h-14 flex items-center justify-center bg-gradient-to-br ${industry.color} rounded-xl mb-4 mx-auto`}>
                  <i className={`${industry.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white text-center">
                  {industry.title}
                </h3>
              </div>

              {/* Hover State */}
              <div className="absolute inset-0 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-br from-indigo-600 to-violet-600 z-20">
                <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-xl mb-3 mx-auto">
                  <i className={`${industry.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-base font-bold text-white text-center mb-2">
                  {industry.title}
                </h3>
                <p className="text-xs text-white/90 text-center leading-relaxed">
                  {industry.description}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">10+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">100+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Startups Guided</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">4</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Continents</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">$500M+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Tech Investments</div>
          </div>
        </div>
      </div>
    </section>
  );
}
