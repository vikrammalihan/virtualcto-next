'use client';

export function SuccessStoriesSection() {
  const stories = [
    {
      company: 'FinFlow',
      location: 'London, UK',
      industry: 'Fintech',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/europe-success-london-001.jpg',
      challenge: 'A London-based fintech startup needed to navigate PSD2 compliance while scaling their open banking platform across 15 European markets.',
      solution: 'Implemented comprehensive GDPR-compliant architecture, integrated with major European banks via Open Banking APIs, and built a scalable microservices infrastructure.',
      results: [
        'Successfully launched in 15 EU countries',
        'Achieved PSD2 and GDPR compliance',
        'Raised €12M Series A from European VCs',
        'Processed €50M+ in transactions'
      ],
      metrics: {
        funding: '€12M',
        markets: '15',
        growth: '300%'
      }
    },
    {
      company: 'HealthTech Pro',
      location: 'Berlin, Germany',
      industry: 'HealthTech',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/europe-success-berlin-002.jpg',
      challenge: 'A Berlin healthtech scale-up needed to comply with medical device regulations (MDR) while expanding their telemedicine platform across the EU.',
      solution: 'Designed GDPR-compliant patient data architecture, implemented end-to-end encryption, achieved MDR certification, and built multilingual platform supporting 12 languages.',
      results: [
        'MDR certification achieved in 8 months',
        'Expanded to 12 European countries',
        'Secured €8M Series B funding',
        '500K+ patients served'
      ],
      metrics: {
        funding: '€8M',
        patients: '500K+',
        countries: '12'
      }
    },
    {
      company: 'GreenEnergy AI',
      location: 'Amsterdam, Netherlands',
      industry: 'CleanTech',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/europe-success-amsterdam-003.jpg',
      challenge: 'An Amsterdam cleantech startup needed to build an AI-powered energy optimization platform while securing EU Innovation Council funding.',
      solution: 'Developed scalable ML infrastructure on European cloud providers, ensured data sovereignty compliance, prepared successful EIC Accelerator application, and built partnerships with major European utilities.',
      results: [
        'Won €2.5M EIC Accelerator grant',
        'Partnerships with 8 major utilities',
        'Reduced energy costs by 35% for clients',
        'Expanded to 10 European markets'
      ],
      metrics: {
        grant: '€2.5M',
        savings: '35%',
        partners: '8'
      }
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-6">
            <i className="ri-trophy-line text-indigo-600 dark:text-indigo-400"></i>
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            European Startups We&apos;ve Helped Scale
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Real results from real companies across Europe&apos;s most dynamic tech hubs.
          </p>
        </div>

        <div className="space-y-16">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative h-96 lg:h-auto">
                  <img
                    src={story.image}
                    alt={story.company}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-6 left-6 bg-white dark:bg-slate-900 px-4 py-2 rounded-lg shadow-lg">
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">{story.company}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 flex items-center mt-1">
                      <i className="ri-map-pin-line mr-1"></i>
                      {story.location}
                    </div>
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <div className="inline-flex items-center px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-6">
                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">{story.industry}</span>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">The Challenge</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{story.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Our Solution</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{story.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Results</h3>
                    <ul className="space-y-2">
                      {story.results.map((result, idx) => (
                        <li key={idx} className="flex items-start text-slate-600 dark:text-slate-400">
                          <i className="ri-check-line text-indigo-600 dark:text-indigo-400 mr-2 mt-1"></i>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <div>
                      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{story.metrics.funding || story.metrics.grant}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Funding</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{story.metrics.markets || story.metrics.patients || story.metrics.savings}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">{story.metrics.markets ? 'Markets' : story.metrics.patients ? 'Patients' : 'Cost Savings'}</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{story.metrics.growth || story.metrics.countries || story.metrics.partners}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">{story.metrics.growth ? 'Growth' : story.metrics.countries ? 'Countries' : 'Partners'}</div>
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
