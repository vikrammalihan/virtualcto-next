'use client';

import { useState } from 'react';

interface HeroSectionProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    } else {
      console.warn(`Element with id "${id}" not found`);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Hero Content */}
      <div className="relative pt-32 sm:pt-40 pb-20 sm:pb-32 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-8">
              <i className="ri-global-line text-indigo-600 dark:text-indigo-400 text-lg"></i>
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Serving Middle East Tech Ecosystem</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
              Fractional CTO Services for
              <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Middle East Startups
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12 max-w-3xl mx-auto">
              25+ years of technology leadership experience helping startups across Dubai, Riyadh, Abu Dhabi, and beyond scale their technology infrastructure and build world-class engineering teams.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-base font-semibold rounded-lg hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Schedule Free Consultation
              </button>
              <button
                onClick={() => scrollToSection('success-stories')}
                className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-base font-semibold rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                View Success Stories
              </button>
            </div>

            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-[500px]">
                <img
                  src="https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/hero-middleeast-001.jpg"
                  alt="Middle East Technology Hub"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = '/api/placeholder/1400/500';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
                <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400">60+</div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">ME Startups</div>
                </div>
                <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400">$35M+</div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">Funding Raised</div>
                </div>
                <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400">12+</div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-50 to-transparent dark:from-indigo-900/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet-50 to-transparent dark:from-violet-900/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
