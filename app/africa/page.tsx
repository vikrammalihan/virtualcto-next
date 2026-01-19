'use client';

import { useState, useEffect } from 'react';
import { HeroSection } from '@/app/africa/components/HeroSection';
import { StatsSection } from '@/app/africa/components/StatsSection';
import { WhyAfricaSection } from '@/app/africa/components/WhyAfricaSection';
import { ServicesSection } from '@/app/africa/components/ServicesSection';
import { SuccessStoriesSection } from '@/app/africa/components/SuccessStoriesSection';
import { EcosystemSection } from '@/app/africa/components/EcosystemSection';
import { CTASection } from '@/app/africa/components/CTASection';
import { Footer } from '@/components/shared/Footer';
import { Header } from '@/components/shared/Header';

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
      <Header theme={theme} toggleTheme={toggleTheme} />
      <HeroSection />
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
