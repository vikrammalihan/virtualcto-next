'use client';

import Link from 'next/link';

export function FeaturedCaseStudies() {
  const caseStudies = [
    {
      title: 'FinTech Platform Scaling',
      industry: 'FinTech',
      region: 'Africa',
      challenge: 'Payment processing platform struggling with 10x user growth and system reliability issues',
      solution: 'Redesigned architecture for horizontal scaling, implemented microservices, and established DevOps practices',
      results: ['100x Scale', '99.99% Uptime', '$50M Processed'],
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-cto-001.jpg',
      tags: ['Architecture', 'Scaling', 'DevOps']
    },
    {
      title: 'HealthTech MVP Launch',
      industry: 'HealthTech',
      region: 'Europe',
      challenge: 'Early-stage startup needed to build HIPAA-compliant telemedicine platform from scratch',
      solution: 'Defined technical strategy, built engineering team, and delivered secure MVP with compliance',
      results: ['6-month MVP delivery', 'HIPAA compliant', '15-person team built', '$2M seed raised'],
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-cto-002.jpg',
      tags: ['MVP', 'Compliance', 'Team Building']
    },
    {
      title: 'EdTech Platform Optimization',
      industry: 'EdTech',
      region: 'Middle East',
      challenge: 'Learning management system with poor performance affecting 50K+ students daily',
      solution: 'Performance audit, database optimization, caching strategy, and infrastructure modernization',
      results: ['80% faster load times', '10x concurrent users', '40% cost savings', 'Zero downtime migration'],
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/case-edtech-001.jpg',
      tags: ['Performance', 'Optimization', 'Infrastructure']
    }
  ];

  return (
    <section id="case-studies" className="py-16 sm:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-6">
            <i className="ri-file-list-3-line text-indigo-600 dark:text-indigo-400"></i>
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Real Results for
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Real Startups
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Success stories from startups across multiple industries and regions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {caseStudies.map((study, index) => (
            <Link key={index} href={`/case-studies/case-study-detail?id=${index + 1}`}>
            <div
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-xs font-semibold text-slate-900 dark:text-white rounded-full">
                    {study.industry}
                  </span>
                  <span className="px-3 py-1 bg-indigo-500/90 backdrop-blur-sm text-xs font-semibold text-white rounded-full">
                    {study.region}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {study.title}
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-1">Challenge</div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-1">Solution</div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3">Key Results</div>
                  <div className="grid grid-cols-2 gap-2">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <i className="ri-check-line text-indigo-600 dark:text-indigo-400 text-sm mt-0.5 flex-shrink-0"></i>
                        <span className="text-xs text-slate-700 dark:text-slate-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="block w-full px-6 py-3 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white text-sm font-semibold rounded-lg hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer text-center">
                  Read Full Case Study
                </span>
              </div>
            </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/case-studies" className="inline-block px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-base font-semibold rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 whitespace-nowrap cursor-pointer">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
