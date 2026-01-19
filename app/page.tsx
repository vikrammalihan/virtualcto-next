'use client';

import { useState, useEffect } from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { ServicePackagesSection } from '@/components/home/ServicePackagesSection';
import { FeaturedCaseStudies } from '@/components/home/FeaturedCaseStudies';
import { WhyChooseSection } from '@/components/home/WhyChooseSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { BlogSection } from '@/components/home/BlogSection';
import { CTASection } from '@/components/home/CTASection';
import { Footer } from '@/components/shared/Footer';

export default function HomePage() {
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
      <ServicesOverview />
      <IndustriesSection />
      <ServicePackagesSection />
      <WhyChooseSection />
      <FeaturedCaseStudies />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </div>
  );
}
