'use client';

import { useState, useEffect } from 'react';
import { HeroSection } from '@/components/europe/HeroSection';
import { StatsSection } from '@/components/europe/StatsSection';
import { WhyEuropeSection } from '@/components/europe/WhyEuropeSection';
import { ServicesSection } from '@/components/europe/ServicesSection';
import { SuccessStoriesSection } from '@/components/europe/SuccessStoriesSection';
import { EcosystemSection } from '@/components/europe/EcosystemSection';
import { CTASection } from '@/components/europe/CTASection';
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
