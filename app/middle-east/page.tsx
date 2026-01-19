'use client';

import { useState, useEffect } from 'react';
import { HeroSection } from '@/components/middle-east/HeroSection';
import { StatsSection } from '@/components/middle-east/StatsSection';
import { WhyMiddleEastSection } from '@/components/middle-east/WhyMiddleEastSection';
import { ServicesSection } from '@/components/middle-east/ServicesSection';
import { SuccessStoriesSection } from '@/components/middle-east/SuccessStoriesSection';
import { EcosystemSection } from '@/components/middle-east/EcosystemSection';
import { CTASection } from '@/components/middle-east/CTASection';
import { Footer } from '@/components/shared/Footer';

export default function MiddleEastPage() {
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
      <WhyMiddleEastSection />
      <ServicesSection />
      <SuccessStoriesSection />
      <EcosystemSection />
      <CTASection />
      <Footer />
    </div>
  );
}
