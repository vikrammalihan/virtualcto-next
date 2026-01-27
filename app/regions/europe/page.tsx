'use client';

import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { WhyEuropeSection } from './components/WhyEuropeSection';
import { ServicesSection } from './components/ServicesSection';
import { SuccessStoriesSection } from './components/SuccessStoriesSection';
import { EcosystemSection } from './components/EcosystemSection';
import { CTASection } from './components/CTASection';
import { Footer } from '@/components/shared/Footer';

export default function EuropePage() {
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

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <HeroSection theme={theme} toggleTheme={toggleTheme} />
      <StatsSection />
      <WhyEuropeSection />
      <ServicesSection />
      <SuccessStoriesSection />
      <EcosystemSection />
      <CTASection />
      <Footer />
    </div>
  );
}
