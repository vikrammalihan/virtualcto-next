'use client';
import Image from 'next/image';

export function SuccessStoriesSection() {
  const stories = [
    {
      company: 'EdTech Pro',
      location: 'Bangalore, Karnataka',
      industry: 'Education Technology',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/india-edtech-bangalore-001.jpg',
      challenge: 'Needed to scale platform to handle 5M+ students across India with regional language support and offline capabilities.',
      solution: 'Implemented microservices architecture with CDN optimization, built progressive web app with offline-first approach, and integrated 12 Indian languages.',
      results: [
        '10x user growth in 18 months',
        '₹80Cr Series B funding raised',
        '99.9% uptime achieved',
        'Expanded to 28 states'
      ]
    },
    {
      company: 'FinServe India',
      location: 'Mumbai, Maharashtra',
      industry: 'Financial Technology',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/india-fintech-mumbai-002.jpg',
      challenge: 'Required RBI-compliant digital lending platform with seamless UPI integration and robust security for tier 2/3 cities.',
      solution: 'Built secure microfinance platform with UPI AutoPay, implemented data localization, achieved PCI DSS compliance, and optimized for low-bandwidth networks.',
      results: [
        '₹500Cr+ loans disbursed',
        'RBI NBFC license obtained',
        '2M+ active users',
        '₹120Cr Series C funding'
      ]
    },
    {
      company: 'HealthConnect',
      location: 'Hyderabad, Telangana',
      industry: 'Healthcare Technology',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/india-healthtech-hyderabad-003.jpg',
      challenge: 'Needed HIPAA-equivalent telemedicine platform connecting patients with doctors across urban and rural India.',
      solution: 'Developed ABDM-compliant telehealth platform with video consultation, e-prescription, and integration with 500+ diagnostic labs nationwide.',
      results: [
        '1M+ consultations completed',
        'Partnership with 5000+ doctors',
        '₹60Cr Series A funding',
        'Presence in 200+ cities'
      ]
    }
  ];

  return (
    <section id="success-stories" className="py-16 sm:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Indian Success Stories
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Real results from Indian startups we've helped scale from seed to success
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="rounded-xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700">
                  <div className="relative w-full h-[300px] sm:h-[400px]">
                    <Image
                      src={story.image}
                      alt={story.company}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-4">
                  <i className="ri-map-pin-line text-indigo-600 dark:text-indigo-400 text-sm"></i>
                  <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">{story.location}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  {story.company}
                </h3>
                <p className="text-base text-indigo-600 dark:text-indigo-400 font-semibold mb-4">
                  {story.industry}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">
                      Challenge
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {story.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">
                      Solution
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {story.solution}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wide">
                    Results Achieved
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {story.results.map((result, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <i className="ri-check-double-line text-indigo-600 dark:text-indigo-400 text-lg mt-0.5 flex-shrink-0"></i>
                        <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                          {result}
                        </span>
                      </div>
                    ))}
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
