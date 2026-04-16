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
          src="https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/about-hero-bg-001.jpg"
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
