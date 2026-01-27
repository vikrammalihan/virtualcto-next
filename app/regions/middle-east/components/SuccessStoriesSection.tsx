'use client';

export function SuccessStoriesSection() {
  const stories = [
    {
      company: 'PayFlow ME',
      location: 'Dubai, UAE',
      industry: 'Fintech',
      image: 'https://readdy.ai/api/search-image?query=Modern%20fintech%20mobile%20payment%20application%20interface%20on%20smartphone%20with%20Dubai%20skyline%20in%20background%2C%20sleek%20digital%20banking%20dashboard%20showing%20transaction%20flows%20and%20financial%20data%2C%20contemporary%20Middle%20Eastern%20business%20setting%20with%20warm%20lighting%20and%20professional%20atmosphere%20emphasizing%20innovation%20and%20secure%20digital%20payments&width=600&height=400&seq=success-dubai-fintech-001&orientation=landscape',
      challenge: 'Needed to build a payment platform compliant with UAE Central Bank regulations while scaling to handle 100K+ daily transactions.',
      solution: 'Architected a cloud-native payment infrastructure with multi-currency support, implemented PCI DSS compliance, and built a scalable microservices architecture.',
      results: [
        '500K+ active users in 12 months',
        '$50M+ monthly transaction volume',
        'UAE Central Bank certified',
        'Raised $8M Series A funding'
      ]
    },
    {
      company: 'HealthConnect',
      location: 'Riyadh, Saudi Arabia',
      industry: 'HealthTech',
      image: 'https://readdy.ai/api/search-image?query=Advanced%20healthcare%20technology%20platform%20showing%20telemedicine%20consultation%20on%20tablet%20device%20in%20modern%20Saudi%20Arabian%20medical%20facility%2C%20clean%20medical%20interface%20with%20patient%20data%20and%20video%20call%20features%2C%20professional%20healthcare%20setting%20with%20contemporary%20architecture%20and%20warm%20ambient%20lighting%20emphasizing%20digital%20health%20innovation&width=600&height=400&seq=success-riyadh-health-002&orientation=landscape',
      challenge: 'Required HIPAA-equivalent compliance for Saudi Arabia while building a telemedicine platform during rapid market expansion.',
      solution: 'Designed secure healthcare data architecture with local data residency, implemented end-to-end encryption, and built scalable video consultation infrastructure.',
      results: [
        '200+ healthcare providers onboarded',
        '50K+ patient consultations',
        'Ministry of Health approved',
        'Expanded to 3 GCC countries'
      ]
    },
    {
      company: 'LogiTech Solutions',
      location: 'Abu Dhabi, UAE',
      industry: 'Logistics',
      image: 'https://readdy.ai/api/search-image?query=Sophisticated%20logistics%20tracking%20dashboard%20displaying%20real-time%20delivery%20routes%20and%20warehouse%20management%20system%20in%20modern%20Abu%20Dhabi%20distribution%20center%2C%20advanced%20supply%20chain%20technology%20interface%20with%20maps%20and%20analytics%2C%20contemporary%20industrial%20setting%20with%20blue%20and%20purple%20accent%20lighting%20emphasizing%20efficiency%20and%20digital%20transformation&width=600&height=400&seq=success-abudhabi-logistics-003&orientation=landscape',
      challenge: 'Needed to modernize legacy logistics systems and integrate with regional e-commerce platforms for same-day delivery.',
      solution: 'Led digital transformation initiative, migrated to cloud infrastructure, implemented real-time tracking, and integrated with major e-commerce platforms.',
      results: [
        '10K+ daily deliveries managed',
        '40% reduction in delivery time',
        'Integrated with 5 major platforms',
        'Raised $12M Series B funding'
      ]
    }
  ];

  return (
    <section id="success-stories" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-6">
            <i className="ri-trophy-line text-indigo-600 dark:text-indigo-400"></i>
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Proven Results Across the
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Middle East
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Real stories from startups we've helped scale across the region.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="space-y-12">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-80 lg:h-auto">
                  <img
                    src={story.image}
                    alt={story.company}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-200 dark:border-slate-700">
                      <div className="text-sm font-bold text-slate-900 dark:text-white">{story.company}</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{story.location}</div>
                    </div>
                  </div>
                  <div className="absolute top-6 right-6">
                    <div className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      {story.industry}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10">
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">THE CHALLENGE</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {story.challenge}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">THE SOLUTION</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {story.solution}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-4">THE RESULTS</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {story.results.map((result, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-6 h-6 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex-shrink-0 mt-0.5">
                            <i className="ri-check-line text-indigo-600 dark:text-indigo-400 text-sm"></i>
                          </div>
                          <span className="text-sm text-slate-900 dark:text-white font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
