'use client';

import { useState } from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function HeroSection() {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      
      
      {/* Hero Content */}
      <div className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800">
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Empowering African Tech Startups</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Fractional CTO Services for
                <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Africa&apos;s Tech Ecosystem
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                25+ years of technology leadership experience helping African startups from Lagos to Nairobi, Cape Town to Cairo scale their technology infrastructure and build world-class engineering teams.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400">50+</div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">African Startups</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400">15+</div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">Countries Served</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400">$20M+</div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">Funding Raised</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
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

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center space-x-2">
                  <i className="ri-map-pin-line text-indigo-600 dark:text-indigo-400 text-xl"></i>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Pan-African Coverage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-time-line text-indigo-600 dark:text-indigo-400 text-xl"></i>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Local Time Zone Support</span>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero/africa-tech-ecosystem.jpg"
                  alt="African Tech Ecosystem"
                  className="w-full h-auto object-cover object-top"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 right-6 sm:right-auto sm:w-80 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 rounded-xl flex-shrink-0 shadow-lg shadow-indigo-500/30">
                    <i className="ri-global-line text-white text-2xl"></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">Serving Africa&apos;s Tech Hubs</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Lagos • Nairobi • Cape Town • Cairo • Accra • Kigali</div>
                    <div className="flex items-center space-x-1 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i key={star} className="ri-star-fill text-yellow-400 text-sm"></i>
                      ))}
                      <span className="text-xs text-slate-600 dark:text-slate-400 ml-2">Trusted by 50+ Startups</span>
                    </div>
                  </div>
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
