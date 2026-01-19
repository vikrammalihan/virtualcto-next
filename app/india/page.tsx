'use client';

import { useState, useEffect } from 'react';
import { HeroSection } from '@/components/india/HeroSection';
import { StatsSection } from '@/components/india/StatsSection';
import { WhyIndiaSection } from '@/components/india/WhyIndiaSection';
import { ServicesSection } from '@/components/india/ServicesSection';
import { SuccessStoriesSection } from '@/components/india/SuccessStoriesSection';
import { EcosystemSection } from '@/components/india/EcosystemSection';
import { CTASection } from '@/components/india/CTASection';
import { Footer } from '@/components/shared/Footer';

export default function IndiaPage() {
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
      <WhyIndiaSection />
      <ServicesSection />
      <SuccessStoriesSection />
      <EcosystemSection />
      <CTASection />
      <Footer />
    </div>
  );
}
