'use client';
import { useState, useEffect } from 'react';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared';
import Image from 'next/image';

export default function ServicePackagesPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };
  const packages = [
    // Existing packages from home page
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
      popular: false,
      category: 'ongoing'
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
      popular: true,
      category: 'ongoing'
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
      popular: false,
      category: 'ongoing'
    },
    // New packages
    {
      name: 'Strategy Session',
      subtitle: 'One-Off Consultation',
      hours: '2-3 hours',
      stage: 'Any Stage',
      description: 'Quick technology audit and roadmap review for startups needing immediate insights without ongoing commitment.',
      features: [
        'Technology Stack Assessment',
        'Architecture Review & Recommendations',
        'Development Roadmap Planning',
        'Risk Identification & Mitigation',
        'Tool & Technology Recommendations',
        'Detailed Action Plan Report'
      ],
      icon: 'ri-lightbulb-line',
      gradient: 'from-emerald-500 to-teal-500',
      popular: false,
      category: 'oneoff'
    },
    {
      name: 'Tech Due Diligence',
      subtitle: 'Fundraising Preparation',
      hours: '1-2 weeks',
      stage: 'Pre-Fundraising',
      description: 'Comprehensive technical assessment to prepare your startup for investor scrutiny and fundraising success.',
      features: [
        'Complete Code Quality Analysis',
        'Security & Compliance Audit',
        'Scalability Assessment Report',
        'Technical Debt Analysis',
        'IP & Legal Tech Review',
        'Investor-Ready Documentation',
        'Risk Assessment Matrix',
        'Improvement Recommendations'
      ],
      icon: 'ri-funds-line',
      gradient: 'from-orange-500 to-red-500',
      popular: false,
      category: 'specialized'
    },
    {
      name: 'Post-Launch Support',
      subtitle: 'Scaling & Optimization',
      hours: 'Flexible',
      stage: 'Post-MVP Launch',
      description: 'Dedicated support for scaling your product after launch with monitoring, optimization, and performance enhancement.',
      features: [
        'Performance Monitoring Setup',
        'Scaling Strategy Implementation',
        'User Feedback Integration',
        'System Optimization & Tuning',
        'Bug Resolution & Maintenance',
        'Analytics & Metrics Dashboard',
        'Load Testing & Capacity Planning',
        'Continuous Improvement Process'
      ],
      icon: 'ri-rocket-2-line',
      gradient: 'from-purple-500 to-pink-500',
      popular: false,
      category: 'specialized'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ongoingPackages = packages.filter(pkg => pkg.category === 'ongoing');
  const oneoffPackages = packages.filter(pkg => pkg.category === 'oneoff');
  const specializedPackages = packages.filter(pkg => pkg.category === 'specialized');

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Header */}
      <Header theme={theme} toggleTheme={toggleTheme} />
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/service-packages-bg.jpg"
          alt="Service Packages Background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

      
    
      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <i className="ri-price-tag-3-line text-white"></i>
              <span className="text-sm font-medium text-white">Service Packages</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Technology Leadership
              <span className="block mt-2 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Service Packages
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect engagement model for your startup's current stage and growth trajectory. 
              From one-off consultations to full CTO partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Ongoing Packages */}
      <section className="relative z-10 py-16 sm:py-24 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Ongoing Partnership Packages
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Long-term technology leadership for sustained growth and success
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-16">
            {ongoingPackages.map((pkg, index) => (
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
                    What's Included
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
        </div>
      </section>

      {/* One-Off & Specialized Services */}
      <section className="relative z-10 py-16 sm:py-24 bg-slate-50/95 dark:bg-slate-800/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              One-Off & Specialized Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Focused solutions for specific technology challenges and requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {[...oneoffPackages, ...specializedPackages].map((pkg, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${pkg.gradient} rounded-2xl mb-6 shadow-lg`}>
                  <i className={`${pkg.icon} text-white text-3xl`}></i>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
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
                      <i className="ri-target-line text-violet-600 dark:text-violet-400 text-sm"></i>
                      <span className="text-sm font-medium text-violet-700 dark:text-violet-300">{pkg.stage}</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-700 pt-6 mb-6">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wide">
                    What's Included
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
                  className="w-full px-6 py-4 rounded-xl text-base font-bold bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative z-10 py-16 sm:py-24 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl p-8 sm:p-12 text-white">
              <div className="w-20 h-20 flex items-center justify-center bg-white/20 rounded-2xl mx-auto mb-6">
                <i className="ri-question-line text-white text-4xl"></i>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Not Sure Which Package Fits Your Needs?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Every startup is unique. Let's discuss your specific challenges, goals, and stage 
                to determine the perfect engagement model for your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/book-consultation" className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 whitespace-nowrap cursor-pointer text-center">
                  Schedule Free Consultation
                </a>
                <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300 whitespace-nowrap cursor-pointer">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}