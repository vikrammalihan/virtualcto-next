'use client';

import { useState, useEffect } from 'react';
import { HeroSection } from '@/components/about/HeroSection';
import { PersonalSection } from '@/components/about/PersonalSection';
import { CTASection } from '@/components/about/CTASection';
import { Footer } from '@/components/shared/Footer';

export default function AboutPage() {
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
      <PersonalSection />
      <CTASection />
      <Footer />
    </div>
  );
}
