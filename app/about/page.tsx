'use client';

import { useState, useEffect } from 'react';
import { HeroSection } from '@/app/about/components/HeroSection';
import { ExperienceTimeline } from '@/app/about/components/ExperienceTimeline';
import { ExpertiseSection } from '@/app/about/components/ExpertiseSection';
import { ValuesSection } from '@/app/about/components/ValuesSection';
import { RecognitionSection } from '@/app/about/components/RecognitionSection';
import { JourneySection } from '@/app/about/components/JourneySection';
import { PersonalSection } from '@/app/about/components/PersonalSection';
import { CTASection } from '@/app/about/components/CTASection';
import { Footer } from '@/components/shared/Footer';
import { Header } from '@/components/shared/Header';

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
      <Header theme={theme} toggleTheme={toggleTheme} />
      <HeroSection />
      <PersonalSection />
      <ExperienceTimeline />
      <ExpertiseSection />
      <ValuesSection />
      <RecognitionSection />
      <JourneySection />
      <CTASection />
      <Footer />
    </div>
  );
}
