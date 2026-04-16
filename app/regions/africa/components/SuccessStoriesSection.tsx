'use client';
import Image from 'next/image';

export function SuccessStoriesSection() {
  const stories = [
    {
      company: 'FinTech Startup',
      location: 'Lagos, Nigeria',
      industry: 'Financial Services',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/africa-fintech-001.jpg',
      challenge: 'Needed to integrate multiple mobile money providers across West Africa while ensuring regulatory compliance',
      solution: 'Designed unified payment architecture supporting M-Pesa, MTN Mobile Money, and Airtel Money with built-in compliance framework',
      results: [
        'Processed $5M+ in transactions',
        'Expanded to 4 countries',
        'Secured $2M Series A funding',
        'Achieved 99.9% uptime'
      ]
    },
    {
      company: 'E-Commerce Platform',
      location: 'Nairobi, Kenya',
      industry: 'Retail Technology',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/africa-ecommerce-001.jpg',
      challenge: 'Struggling to scale infrastructure to handle rapid growth and varying internet connectivity across East Africa',
      solution: 'Implemented progressive web app with offline capabilities and optimized for low-bandwidth environments',
      results: [
        '10x increase in mobile users',
        'Reduced load times by 70%',
        'Expanded to 3 new markets',
        'Raised $3M in funding'
      ]
    },
    {
      company: 'AgriTech Solution',
      location: 'Cape Town, South Africa',
      industry: 'Agriculture Technology',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/africa-agritech-001.jpg',
      challenge: 'Required technology solution that works in rural areas with limited connectivity and serves farmers with basic smartphones',
      solution: 'Built SMS-based system with progressive enhancement for smartphone users, optimized for 2G networks',
      results: [
        '50,000+ farmers onboarded',
        'Works on basic feature phones',
        'Expanded to 5 countries',
        'Secured $1.5M seed funding'
      ]
    }
  ];

  return (
    <section id="success-stories" className="py-16 sm:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-6">
            <i className="ri-trophy-line text-indigo-600 dark:text-indigo-400"></i>
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Success Stories</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Real Results from
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              African Startups
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            See how we&apos;ve helped African startups overcome unique challenges and achieve remarkable growth.
          </p>
        </div>

        <div className="space-y-12">
          {stories.map((story, index) => (
            <div
              key={`${story.company}-${index}`}
              className={`grid lg:grid-cols-2 gap-8 items-center`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={story.image}
                    alt={story.company}
                    width={600}
                    height={400}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-4">
                  <i className="ri-map-pin-line text-indigo-600 dark:text-indigo-400 text-sm"></i>
                  <span className="text-xs font-medium text-indigo-700 dark:text-indigo-300">{story.location}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">{story.company}</h3>
                <div className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-4">{story.industry}</div>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Challenge:</div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{story.challenge}</p>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Solution:</div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{story.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {story.results.map((result, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <i className="ri-check-line text-indigo-600 dark:text-indigo-400 text-lg mt-0.5 flex-shrink-0"></i>
                      <span className="text-sm text-slate-600 dark:text-slate-400">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
