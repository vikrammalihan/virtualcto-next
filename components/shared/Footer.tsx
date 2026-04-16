'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const regions = [
    { name: 'Africa', countries: ['Kenya', 'Nigeria', 'South Africa', 'Egypt'] },
    { name: 'Europe', countries: ['UK', 'Ireland', 'Germany', 'Netherlands'] },
    { name: 'Middle East', countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Bahrain'] },
    { name: 'India', countries: ['Mumbai', 'Bangalore', 'Delhi', 'Hyderabad'] }
  ];

  const services = [
    'Fractional CTO',
    'Technical Due Diligence',
    'Architecture Consulting',
    'Team Building',
    'CTO-Fundraising',
    'AI/ML Advisory'
  ];

  const industries = [
    'FinTech',
    'HealthTech',
    'EdTech',
    'CleanTech',
    'iGaming',
    'E-Commerce'
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4 group">
              <div className="relative">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 rounded-xl shadow-lg shadow-indigo-500/20">
                  <i className="ri-terminal-box-line text-white text-xl"></i>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-violet-500 rounded-full border-2 border-slate-50 dark:border-slate-800"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-slate-900 dark:text-white tracking-tight leading-none">TheVirtualCTO</span>
                <span className="text-[10px] font-medium text-indigo-600 dark:text-indigo-400 tracking-wider uppercase leading-none mt-0.5">Technology Leadership</span>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Fractional CTO services for growth-stage startups across Africa, Europe, Middle East, and India. 25+ years of IT leadership experience.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com/in/vikram-malihan/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-slate-200 dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-indigo-500 hover:text-white transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a href="https://twitter.com/thevirtualcto" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-slate-200 dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-indigo-500 hover:text-white transition-colors cursor-pointer">
                <i className="ri-twitter-x-line text-lg"></i>
              </a>
              <a href="mailto:vikram@thevirtualcto.in" className="w-10 h-10 flex items-center justify-center bg-slate-200 dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-indigo-500 hover:text-white transition-colors cursor-pointer">
                <i className="ri-mail-line text-lg"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={
                      service === 'Fractional CTO' ? '/services/fractional-cto' : 
                      service === 'Technical Due Diligence' ? '/services/technical-due-diligence' : 
                      service === 'Architecture Consulting' ? '/services/architecture-consulting' :
                      service === 'Team Building' ? '/services/team-building' :
                      service === 'CTO-Fundraising' ? '/services/cto-fundraising' :
                      service === 'AI/ML Advisory' ? '/services/ai-ml-advisory' :
                      '/services'
                    } 
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Industries</h4>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <a href={`/case-studies?industry=${industry}`} className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Regions</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/regions/africa" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">
                  Africa
                </Link>
              </li>
              <li>
                <Link href="/regions/europe" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">
                  Europe
                </Link>
              </li>
              <li>
                <Link href="/regions/middle-east" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">
                  Middle East
                </Link>
              </li>
              <li>
                <Link href="/regions/india" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">
                  India
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-slate-600 dark:text-slate-400">
              © {currentYear} TheVirtualCTO.in - Vikram Singh Malihan. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/about" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">
                About
              </Link>
              <a href="/privacy-policy" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">
                Terms of Service
              </a>
              <Link href="/contact" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
