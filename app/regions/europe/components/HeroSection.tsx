'use client';

import { useState } from 'react';

interface HeroSectionProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function HeroSection({ theme, toggleTheme }: HeroSectionProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Navigation - Same as Home Page */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3 cursor-pointer group">
              <div className="relative">
                <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 rounded-xl shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
                  <i className="ri-terminal-box-line text-white text-xl sm:text-2xl"></i>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-violet-500 rounded-full border-2 border-white dark:border-slate-900"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-none">TheVirtualCTO</span>
                <span className="text-[10px] sm:text-xs font-medium text-indigo-600 dark:text-indigo-400 tracking-wider uppercase leading-none mt-0.5">Technology Leadership</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/about" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">About</a>
              <a href="/#services" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">Services</a>
              <a href="/#case-studies" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">Case Studies</a>
              <a href="/#insights" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">Blog</a>
              <a href="/contact" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">Contact</a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <button
                onClick={toggleTheme}
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Toggle theme"
              >
                <i className={`${theme === 'light' ? 'ri-moon-line' : 'ri-sun-line'} text-lg sm:text-xl`}></i>
              </button>
              
              <a
                href="/contact"
                className="hidden sm:block px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Book Consultation
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer"
                aria-label="Toggle menu"
              >
                <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex flex-col space-y-3">
                <a href="/about" className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">About</a>
                <a href="/#services" className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">Services</a>
                <a href="/#case-studies" className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">Case Studies</a>
                <a href="/#insights" className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">Blog</a>
                <a href="/contact" className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">Contact</a>
                <a
                  href="/contact"
                  className="mx-4 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer text-center"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800">
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Serving European Markets</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Your Fractional CTO for
                <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  European Tech Startups
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                25+ years of IT leadership experience helping European startups from London to Stockholm scale their technology, navigate GDPR compliance, and build world-class engineering teams.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400">100+</div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">EU Startups</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400">€50M+</div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">Funding Raised</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400">20+</div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">EU Countries</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-base font-semibold rounded-lg hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 whitespace-nowrap cursor-pointer text-center"
                >
                  Book Free Consultation
                </a>
                <a
                  href="/#case-studies"
                  className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-base font-semibold rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 whitespace-nowrap cursor-pointer text-center"
                >
                  View Case Studies
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center space-x-2">
                  <i className="ri-shield-check-line text-indigo-600 dark:text-indigo-400 text-xl"></i>
                  <span className="text-sm text-slate-600 dark:text-slate-400">GDPR Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-global-line text-indigo-600 dark:text-indigo-400 text-xl"></i>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Pan-European Reach</span>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/hero-europe-tech-001.jpg"
                  alt="European Tech Ecosystem"
                  className="w-full h-auto object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 right-6 sm:right-auto sm:w-80 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 rounded-xl flex-shrink-0 shadow-lg shadow-indigo-500/30">
                    <i className="ri-map-pin-line text-white text-2xl"></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">European Coverage</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">London • Berlin • Paris • Amsterdam • Stockholm • Barcelona</div>
                    <div className="flex items-center space-x-2 mt-3">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-indigo-500 border-2 border-white dark:border-slate-800"></div>
                        <div className="w-6 h-6 rounded-full bg-violet-500 border-2 border-white dark:border-slate-800"></div>
                        <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-white dark:border-slate-800"></div>
                      </div>
                      <span className="text-xs text-slate-600 dark:text-slate-400">20+ Countries</span>
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
