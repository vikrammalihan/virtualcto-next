'use client';

export function ServicePackagesSection() {
  const packages = [
    {
      name: 'Starter Package',
      subtitle: 'Early-Stage Advisory',
      hours: '5 hrs/week',
      stage: 'Idea / Pre-MVP Stage',
      description: 'Perfect for startups at the beginning of their journey, needing strategic guidance to build the right foundation.',
      features: [
        'Technology Roadmap Development',
        'Tech Stack Selection & Architecture',
        'Team Building Guidance',
        'Agile Process Setup',
        'Vendor & Tool Recommendations',
        'Monthly Strategy Sessions'
      ],
      icon: 'ri-seedling-line',
      gradient: 'from-indigo-500 to-violet-500',
      popular: false
    },
    {
      name: 'Growth Package',
      subtitle: 'Scaling & Optimisation',
      hours: '10 hrs/week',
      stage: 'MVP to Scale',
      description: 'For startups with an MVP ready to scale efficiently, optimize performance, and build robust systems.',
      features: [
        'Comprehensive Tech Stack Audit',
        'DevOps & CI/CD Implementation',
        'Security & Compliance Review',
        'Performance Optimisation',
        'Team Mentorship & Training',
        'Architecture Refactoring',
        'Weekly Technical Reviews',
        'On-demand Technical Support'
      ],
      icon: 'ri-line-chart-line',
      gradient: 'from-indigo-600 to-violet-600',
      popular: true
    },
    {
      name: 'Enterprise Package',
      subtitle: 'Full CTO Engagement',
      hours: '20 hrs/week',
      stage: 'High-Growth Startups',
      description: 'Complete technology leadership for fast-growing companies requiring full oversight and strategic execution.',
      features: [
        'Full Technology Oversight',
        'Engineering Team Management',
        'Board-Level Reporting',
        'Strategic Technology Execution',
        'Budget Planning & Management',
        'Vendor Negotiations',
        'Hiring & Team Scaling',
        'Product Roadmap Alignment',
        'Risk Management & Compliance',
        '24/7 Critical Support'
      ],
      icon: 'ri-building-line',
      gradient: 'from-indigo-700 to-violet-700',
      popular: false
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-6">
            <i className="ri-price-tag-3-line text-indigo-600 dark:text-indigo-400"></i>
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Service Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Flexible Engagement Models
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              For Every Stage
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Choose the right level of technology leadership support for your startup&apos;s current stage and growth trajectory
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border-2 transition-all duration-300 ${
                pkg.popular
                  ? 'border-indigo-500 dark:border-indigo-500 shadow-2xl shadow-indigo-500/20 scale-105 lg:scale-110'
                  : 'border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-xl'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${pkg.gradient} rounded-2xl mb-6 shadow-lg`}>
                <i className={`${pkg.icon} text-white text-3xl`}></i>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                  {pkg.subtitle}
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center space-x-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
                    <i className="ri-time-line text-indigo-600 dark:text-indigo-400 text-sm"></i>
                    <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">{pkg.hours}</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-1 bg-violet-50 dark:bg-violet-900/30 rounded-full">
                    <i className="ri-rocket-line text-violet-600 dark:text-violet-400 text-sm"></i>
                    <span className="text-sm font-medium text-violet-700 dark:text-violet-300">{pkg.stage}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-700 pt-6 mb-6">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wide">
                  What&apos;s Included
                </h4>
                <div className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-5 h-5 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex-shrink-0 mt-0.5">
                        <i className="ri-check-line text-indigo-600 dark:text-indigo-400 text-sm"></i>
                      </div>
                      <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className={`w-full px-6 py-4 rounded-xl text-base font-bold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-105'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 hover:text-white'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 max-w-3xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex-shrink-0">
                <i className="ri-question-line text-white text-2xl"></i>
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Not sure which package is right for you?
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Let&apos;s have a conversation about your startup&apos;s specific needs and challenges. I&apos;ll help you determine the best engagement model for your current stage and goals.
                </p>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-pointer"
                >
                  <span>Schedule a Free Consultation</span>
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
