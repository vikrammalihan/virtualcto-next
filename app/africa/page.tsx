'use client';

import { useState, useEffect } from 'react';
import { HeroSection } from '@/components/africa/HeroSection';
import { StatsSection } from '@/components/africa/StatsSection';
import { WhyAfricaSection } from '@/components/africa/WhyAfricaSection';
import { ServicesSection } from '@/components/africa/ServicesSection';
import { SuccessStoriesSection } from '@/components/africa/SuccessStoriesSection';
import { EcosystemSection } from '@/components/africa/EcosystemSection';
import { CTASection } from '@/components/africa/CTASection';
import { Footer } from '@/components/shared/Footer';

export default function AfricaPage() {
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
      <WhyAfricaSection />
      <ServicesSection />
      <SuccessStoriesSection />
      <EcosystemSection />
      <CTASection />
      <Footer />
    </div>
  );
}
