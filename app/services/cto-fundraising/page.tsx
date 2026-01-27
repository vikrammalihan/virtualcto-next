
'use client';
import { useState, useEffect } from 'react';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared';
import HeroSection from './components/HeroSection';
import WhatYouGetSection from './components/WhatYouGetSection';
import ProcessSection from './components/ProcessSection';
import DeliverablesSection from './components/DeliverablesSection';
import WhyChooseSection from './components/WhyChooseSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';

export default function CTOFundraisingPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    window.scrollTo(0, 0);
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
      <HeroSection  />
      <WhatYouGetSection />
      <ProcessSection />
      <DeliverablesSection />
      <WhyChooseSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
