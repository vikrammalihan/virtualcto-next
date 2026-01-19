'use client';

import { useState } from 'react';
import Link from 'next/link';

interface HeroSectionProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function HeroSection() {
  

  return (
    <section className="relative min-h-[60vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=modern%20executive%20technology%20leader%20in%20contemporary%20professional%20office%20environment%20with%20digital%20screens%20displaying%20code%20and%20architecture%20diagrams%2C%20confident%20leadership%20presence%2C%20sophisticated%20workspace%20with%20ambient%20lighting%20creating%20professional%20atmosphere%2C%20clean%20minimalist%20aesthetic%20emphasizing%20innovation%20and%20expertise%2C%20subtle%20technology%20elements%20in%20background%2C%20warm%20natural%20lighting%20suitable%20for%20hero%20section%20with%20text%20overlay&width=1920&height=800&seq=about-hero-bg-001&orientation=landscape"
          alt="Technology Leadership"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95 dark:from-slate-900/95 dark:via-slate-900/90 dark:to-slate-900/95"></div>
      </div>

      {/* Hero Content */}
      <div className="relative pt-32 pb-16 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
            About
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Vikram Singh Malihan
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            25+ years of IT leadership experience helping startups across Africa, Europe, Middle East, and India scale their technology and teams.
          </p>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-50 to-transparent dark:from-indigo-900/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet-50 to-transparent dark:from-violet-900/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
