'use client';

import { useState, useEffect } from 'react';
import { Footer } from '@/components/shared/Footer';

export default function TeamBuildingPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');

    window.scrollTo(0, 0);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const services = [
    {
      icon: 'ri-search-line',
      title: 'Talent Acquisition Strategy',
      description: 'Define hiring needs, create job descriptions, establish interview processes, and build a strong employer brand to attract top talent.',
      features: ['Role Definition', 'Sourcing Strategy', 'Interview Framework', 'Offer Negotiation']
    },
    {
      icon: 'ri-organization-chart',
      title: 'Team Structure Design',
      description: 'Design optimal team structures, define roles and responsibilities, establish reporting lines, and create scalable organizational models.',
      features: ['Org Design', 'Role Mapping', 'Team Sizing', 'Growth Planning']
    },
    {
      icon: 'ri-user-search-line',
      title: 'Technical Recruiting',
      description: 'Source, screen, and evaluate technical candidates. Conduct technical interviews and assessments to ensure the right fit.',
      features: ['Candidate Sourcing', 'Technical Screening', 'Skills Assessment', 'Culture Fit']
    },
    {
      icon: 'ri-rocket-line',
      title: 'Onboarding Programs',
      description: 'Create comprehensive onboarding experiences that accelerate time-to-productivity and ensure new hires feel welcomed and prepared.',
      features: ['Onboarding Plans', 'Mentorship Programs', 'Training Curriculum', 'Success Metrics']
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Performance Management',
      description: 'Establish performance review processes, career development frameworks, and feedback mechanisms to drive continuous improvement.',
      features: ['Review Processes', 'Career Ladders', 'Goal Setting', 'Feedback Culture']
    },
    {
      icon: 'ri-team-line',
      title: 'Culture Development',
      description: 'Build strong engineering cultures focused on collaboration, innovation, and excellence. Define values and establish team rituals.',
      features: ['Values Definition', 'Team Rituals', 'Communication Norms', 'Recognition Programs']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understand your business goals, technical needs, team gaps, and growth plans to create a comprehensive hiring strategy.',
      duration: '1-2 weeks',
      deliverables: ['Hiring Plan', 'Role Definitions', 'Budget Forecast']
    },
    {
      step: '02',
      title: 'Sourcing & Screening',
      description: 'Activate sourcing channels, screen candidates, conduct initial interviews, and create a qualified candidate pipeline.',
      duration: '2-4 weeks',
      deliverables: ['Candidate Pipeline', 'Screening Reports', 'Interview Schedules']
    },
    {
      step: '03',
      title: 'Assessment & Selection',
      description: 'Conduct technical assessments, cultural fit interviews, reference checks, and make final hiring decisions.',
      duration: '1-2 weeks',
      deliverables: ['Assessment Results', 'Interview Feedback', 'Offer Letters']
    },
    {
      step: '04',
      title: 'Onboarding & Integration',
      description: 'Execute onboarding programs, provide mentorship, establish team dynamics, and ensure successful integration.',
      duration: '4-8 weeks',
      deliverables: ['Onboarding Plans', 'Training Materials', 'Success Metrics']
    }
  ];

  const roles = [
    { role: 'Software Engineers', levels: 'Junior to Staff', icon: 'ri-code-s-slash-line' },
    { role: 'Frontend Developers', levels: 'Mid to Senior', icon: 'ri-layout-line' },
    { role: 'Backend Developers', levels: 'Mid to Senior', icon: 'ri-server-line' },
    { role: 'Full-Stack Engineers', levels: 'Mid to Senior', icon: 'ri-stack-line' },
    { role: 'DevOps Engineers', levels: 'Mid to Principal', icon: 'ri-settings-3-line' },
    { role: 'Data Engineers', levels: 'Mid to Staff', icon: 'ri-database-2-line' },
    { role: 'Mobile Developers', levels: 'Mid to Senior', icon: 'ri-smartphone-line' },
    { role: 'QA Engineers', levels: 'Junior to Senior', icon: 'ri-bug-line' },
    { role: 'Security Engineers', levels: 'Mid to Principal', icon: 'ri-shield-check-line' },
    { role: 'Engineering Managers', levels: 'Manager to Director', icon: 'ri-user-settings-line' },
    { role: 'Tech Leads', levels: 'Senior to Staff', icon: 'ri-user-star-line' },
    { role: 'Product Managers', levels: 'Associate to Senior', icon: 'ri-product-hunt-line' }
  ];

  const caseStudies = [
    {
      company: 'FinTech Startup',
      challenge: 'Needed to scale from 5 to 25 engineers in 6 months',
      solution: 'Created hiring pipeline, defined roles, established interview process',
      results: ['Hired 22 engineers', '90% retention after 1 year', '3x product velocity'],
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/teamcase1.jpg'
    },
    {
      company: 'E-Commerce Platform',
      challenge: 'High turnover and struggling to attract senior talent',
      solution: 'Revamped culture, improved compensation, created career paths',
      results: ['Reduced turnover by 60%', 'Hired 8 senior engineers', 'Improved team morale'],
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/teamcase2.jpg'
    },
    {
      company: 'SaaS Company',
      challenge: 'Needed to build entire engineering org from scratch',
      solution: 'Designed org structure, hired leadership, built teams',
      results: ['Built 40-person team', 'Launched product on time', 'Raised Series B'],
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/teamcase3.jpg'
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to hire a qualified engineer?',
      answer: 'On average, it takes 30-45 days from job posting to offer acceptance. This includes sourcing (1-2 weeks), screening and interviews (2-3 weeks), and offer negotiation (1 week). We can accelerate this timeline with dedicated recruiting resources.'
    },
    {
      question: 'Do you only help with hiring, or do you build the entire team?',
      answer: 'We provide end-to-end team building services including hiring strategy, organizational design, recruiting, onboarding, performance management, and culture development. You can engage us for specific services or comprehensive support.'
    },
    {
      question: 'What is your success rate for placements?',
      answer: 'We maintain a 95% retention rate after one year, significantly higher than industry average. This is achieved through rigorous screening, cultural fit assessment, and comprehensive onboarding programs.'
    },
    {
      question: 'Can you help us hire remote or international talent?',
      answer: 'Yes, we have extensive experience building distributed teams across multiple time zones. We help with remote hiring strategies, international compliance, and creating effective remote work cultures.'
    },
    {
      question: 'How do you ensure cultural fit during hiring?',
      answer: 'We work with you to define your company values and culture, then incorporate cultural fit assessments into the interview process. This includes behavioral interviews, team interactions, and values alignment discussions.'
    },
    {
      question: 'What if we need to scale quickly?',
      answer: 'We can activate rapid hiring programs with dedicated recruiters, accelerated interview processes, and streamlined decision-making. We\'ve helped companies scale from 5 to 50+ engineers in under 6 months.'
    },
    {
      question: 'Do you provide ongoing support after hiring?',
      answer: 'Yes, we offer onboarding support, performance management frameworks, career development programs, and ongoing organizational consulting to ensure long-term team success.'
    },
    {
      question: 'How much does team building support cost?',
      answer: 'Pricing varies based on scope and engagement model. We offer project-based pricing for specific initiatives, monthly retainers for ongoing support, and success-based fees for recruiting. Contact us for a customized quote.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3 cursor-pointer group">
              <div className="relative">
                <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 rounded-xl shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
                  <i className="ri-terminal-box-line text-white text-xl sm:text-2xl"></i>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-violet-500 rounded-full border-2 border-white dark:border-slate-900"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-none">TheVirtualCTO</span>
                <span className="text-[10px] sm:text-xs font-medium text-indigo-600 dark:text-indigo-400 tracking-wider uppercase leading-none mt-0.5">Technology Leadership</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/about" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">About</a>
              <a href="/#services" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">Services</a>
              <a href="/#case-studies" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">Case Studies</a>
              <a href="/#insights" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">Blog</a>
              <a href="/contact" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">Contact</a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <button
                onClick={toggleTheme}
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Toggle theme"
              >
                <i className={`${theme === 'light' ? 'ri-moon-line' : 'ri-sun-line'} text-lg sm:text-xl`}></i>
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="hidden sm:block px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Book Consultation
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer"
                aria-label="Toggle menu"
              >
                <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex flex-col space-y-3">
                <a href="/about" className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">About</a>
                <a href="/#services" className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">Services</a>
                <a href="/#case-studies" className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">Case Studies</a>
                <a href="/#insights" className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">Blog</a>
                <a href="/contact" className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">Contact</a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="mx-4 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 dark:from-slate-900 dark:via-indigo-950 dark:to-violet-950"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-6">
              <i className="ri-team-fill text-indigo-600 dark:text-indigo-400"></i>
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Build Your Dream Tech Team</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Recruit &amp; Build
              <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">High-Performance Teams</span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              From hiring strategy to team structure, we help you build engineering teams that deliver exceptional results. Get the right talent, culture, and processes in place.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <button onClick={() => scrollToSection('contact')} className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium rounded-lg hover:shadow-xl hover:shadow-indigo-500/50 transition-all duration-300 whitespace-nowrap cursor-pointer">
                Start Building Your Team
              </button>
              <button onClick={() => scrollToSection('process')} className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-600 dark:hover:border-indigo-400 transition-all duration-300 whitespace-nowrap cursor-pointer">
                See Our Process
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">200+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Teams Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">95%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Retention Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">30 Days</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Avg. Time to Hire</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Comprehensive Team Building Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              End-to-end support for building, scaling, and optimizing your engineering organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-gradient-to-br hover:from-indigo-50 hover:to-violet-50 dark:hover:from-indigo-950/50 dark:hover:to-violet-950/50 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <i className="ri-check-line text-indigo-600 dark:text-indigo-400"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Team Building Process
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A proven methodology for building high-performing engineering teams
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <div key={index} className="relative">
                <div className="p-8 bg-white dark:bg-slate-900 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-600 dark:hover:border-indigo-400 transition-all duration-300 h-full">
                  <div className="text-5xl font-bold text-indigo-600/20 dark:text-indigo-400/20 mb-4">{phase.step}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{phase.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{phase.description}</p>
                  <div className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 mb-4">
                    <i className="ri-time-line"></i>
                    <span className="font-medium">{phase.duration}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Deliverables:</div>
                    {phase.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <i className="ri-file-text-line text-indigo-600 dark:text-indigo-400"></i>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <i className="ri-arrow-right-line text-2xl text-indigo-600 dark:text-indigo-400"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Roles We Help You Hire
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              From individual contributors to leadership positions across all technical disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-600 dark:hover:border-indigo-400 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex-shrink-0">
                  <i className={`${item.icon} text-xl text-white`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">{item.role}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.levels}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Real results from companies we&apos;ve helped build exceptional teams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-indigo-600 dark:hover:border-indigo-400 transition-all duration-300 cursor-pointer">
                <div className="relative h-48 w-full overflow-hidden">
                  <img src={study.image} alt={study.company} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{study.company}</h3>
                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">Challenge</div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{study.challenge}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">Solution</div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{study.solution}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Results</div>
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <i className="ri-check-line text-emerald-600 dark:text-emerald-400"></i>
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Everything you need to know about our team building services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group p-6 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-600 dark:hover:border-indigo-400 transition-all duration-300 cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-slate-900 dark:text-white cursor-pointer list-none">
                  <span>{faq.question}</span>
                  <i className="ri-arrow-down-s-line text-xl text-slate-400 group-open:rotate-180 transition-transform duration-300"></i>
                </summary>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-indigo-600 to-violet-600 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
            Let&apos;s discuss your hiring needs and create a customized team building strategy that delivers results.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a href="mailto:hello@thevirtualcto.com" className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Schedule a Consultation
            </a>
            <a href="tel:+1234567890" className="px-8 py-4 bg-transparent text-white font-medium rounded-lg border-2 border-white hover:bg-white/10 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Call Us Today
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <i className="ri-mail-line"></i>
              <span className="text-sm">hello@thevirtualcto.com</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-phone-line"></i>
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
