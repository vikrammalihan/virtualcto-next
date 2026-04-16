
"use client";

import { useState, useEffect } from 'react';
import { Footer } from '@/components/shared/Footer';
import Image from 'next/image';

export default function ServicesPage() {
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const mainServices = [
    {
      icon: 'ri-user-star-line',
      title: 'Fractional CTO Services',
      tagline: 'Strategic Technology Leadership On-Demand',
      description: 'Get experienced C-level technology leadership without the full-time commitment. Perfect for startups and scale-ups that need strategic guidance, team leadership, and technology decision-making at a fraction of the cost.',
      features: [
        'Technology Strategy &amp; Roadmap Development',
        'Engineering Team Leadership &amp; Mentorship',
        'Architecture Decisions &amp; Tech Stack Selection',
        'Vendor Management &amp; Technology Partnerships',
        'Board-Level Technology Reporting',
        'Budget Planning &amp; ROI Analysis'
      ],
      benefits: [
        'Cost-effective C-level expertise',
        'Immediate impact from day one',
        'Flexible engagement models',
        'No long-term contracts required'
      ],
      idealFor: ['Pre-seed to Series B startups', 'Companies without a CTO', 'Technical co-founder gaps', 'Scaling engineering teams'],
      pricing: 'Starting at $5,000/month',
      link: '/fractional-cto',
      color: 'from-indigo-600 to-violet-600'
    },
    {
      icon: 'ri-search-eye-line',
      title: 'Technical Due Diligence',
      tagline: 'Comprehensive Technology Assessment',
      description: 'Thorough evaluation of technology assets, teams, and infrastructure for investors, acquirers, and strategic partners. Identify risks, opportunities, and technical debt before making critical business decisions.',
      features: [
        'Codebase Quality &amp; Architecture Review',
        'Security &amp; Compliance Assessment',
        'Scalability &amp; Performance Analysis',
        'Team Capability Evaluation',
        'Technical Debt Quantification',
        'Infrastructure &amp; DevOps Audit'
      ],
      benefits: [
        'Risk mitigation before investment',
        'Clear valuation insights',
        'Integration planning support',
        'Post-acquisition roadmap'
      ],
      idealFor: ['Venture capital firms', 'Private equity investors', 'Corporate acquirers', 'Strategic partners'],
      pricing: 'Custom engagement',
      link: '/technical-due-diligence',
      color: 'from-emerald-600 to-teal-600'
    },
    {
      icon: 'ri-stack-line',
      title: 'Architecture Consulting',
      tagline: 'Design Scalable, Secure Systems',
      description: 'Expert guidance on system architecture, from MVP design to enterprise-grade solutions. Ensure your technology foundation can support growth, performance demands, and evolving business requirements.',
      features: [
        'System Architecture Design &amp; Review',
        'Cloud Strategy &amp; Migration Planning',
        'Microservices &amp; API Design',
        'Database Architecture &amp; Optimization',
        'Security Architecture &amp; Best Practices',
        'Performance Optimization &amp; Scaling'
      ],
      benefits: [
        'Future-proof architecture',
        'Reduced technical debt',
        'Improved system performance',
        'Enhanced security posture'
      ],
      idealFor: ['Growing startups', 'Legacy system modernization', 'Cloud migration projects', 'Performance bottlenecks'],
      pricing: 'Starting at $3,500/project',
      link: '/architecture-consulting',
      color: 'from-amber-600 to-orange-600'
    },
    {
      icon: 'ri-team-line',
      title: 'Team Building &amp; Scaling',
      tagline: 'Build High-Performing Engineering Teams',
      description: 'Strategic guidance on building, structuring, and scaling engineering teams. From hiring strategy to culture development, ensure your team can execute on your technology vision.',
      features: [
        'Hiring Strategy &amp; Recruitment Planning',
        'Team Structure &amp; Role Definition',
        'Technical Interview Process Design',
        'Onboarding &amp; Training Programs',
        'Engineering Culture Development',
        'Performance Management Framework'
      ],
      benefits: [
        'Faster, better hiring decisions',
        'Reduced team attrition',
        'Improved team productivity',
        'Stronger engineering culture'
      ],
      idealFor: ['Rapid team expansion', 'First engineering hires', 'Team restructuring', 'Culture transformation'],
      pricing: 'Starting at $4,000/engagement',
      link: '/team-building',
      color: 'from-rose-600 to-pink-600'
    }
  ];

  const additionalServices = [
    {
      icon: 'ri-shield-check-line',
      title: 'Security &amp; Compliance',
      description: 'Security audits, compliance assessments, and implementation of security best practices for startups.',
      features: ['Security audits', 'Compliance frameworks', 'Penetration testing', 'Data privacy']
    },
    {
      icon: 'ri-rocket-line',
      title: 'Product Strategy',
      description: 'Technology-driven product strategy, roadmap development, and technical feasibility analysis.',
      features: ['Product roadmaps', 'MVP definition', 'Technical feasibility', 'Build vs. buy']
    },
    {
      icon: 'ri-presentation-line',
      title: 'Investor Relations',
      description: 'Support for fundraising activities, investor presentations, and technical due diligence preparation.',
      features: ['Pitch deck support', 'Technical presentations', 'DD preparation', 'Investor Q&amp;A']
    },
    {
      icon: 'ri-settings-3-line',
      title: 'DevOps &amp; Infrastructure',
      description: 'DevOps strategy, CI/CD pipeline setup, cloud infrastructure optimization, and cost reduction.',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Cloud optimization', 'Monitoring setup']
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Performance Optimization',
      description: 'Comprehensive performance analysis, optimization strategies, and implementation guidance.',
      features: ['Performance audits', 'Database tuning', 'Code optimization', 'Caching strategies']
    },
    {
      icon: 'ri-file-code-line',
      title: 'Code Review Services',
      description: 'Professional code reviews, architecture assessments, and technical quality improvement plans.',
      features: ['Code quality review', 'Best practices', 'Refactoring plans', 'Documentation']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Free consultation to understand your needs, challenges, and goals.',
      icon: 'ri-search-line'
    },
    {
      step: '02',
      title: 'Assessment',
      description: 'Quick analysis and tailored proposal with clear deliverables and timeline.',
      icon: 'ri-file-list-line'
    },
    {
      step: '03',
      title: 'Engagement',
      description: 'Smooth onboarding process with team alignment and tool setup.',
      icon: 'ri-handshake-line'
    },
    {
      step: '04',
      title: 'Execution',
      description: 'Strategic guidance, hands-on support, and regular progress updates.',
      icon: 'ri-rocket-2-line'
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Continuous improvement and adjustment based on evolving needs.',
      icon: 'ri-refresh-line'
    }
  ];

  const testimonials = [
    {
      quote: "Working with TheVirtualCTO transformed our technology strategy. The fractional CTO service gave us access to world-class expertise we couldn't afford full-time.",
      author: 'Sarah Chen',
      role: 'CEO, FinTech Startup',
      company: 'PayFlow',
      avatar: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/testimonial-sarah.jpg'
    },
    {
      quote: "The technical due diligence service was incredibly thorough. It gave us the confidence to proceed with the acquisition and a clear roadmap for integration.",
      author: 'Michael Rodriguez',
      role: 'Managing Partner',
      company: 'Venture Capital Firm',
      avatar: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/testimonial-michael.jpg'
    },
    {
      quote: "The architecture consulting helped us redesign our system for scale. We went from constant outages to handling 10x traffic without breaking a sweat.",
      author: 'Priya Sharma',
      role: 'CTO',
      company: 'HealthTech Platform',
      avatar: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/testimonial-priya.jpg'
    }
  ];

  const faqs = [
    {
      question: 'How do I choose the right service for my startup?',
      answer: 'Start with a free consultation call where we discuss your current challenges, stage of growth, and goals. I\'ll recommend the most appropriate service or combination of services based on your specific needs and budget.'
    },
    {
      question: 'Can I combine multiple services?',
      answer: 'Absolutely! Many clients benefit from combining services. For example, Fractional CTO services often include elements of architecture consulting and team building. We can create a custom package that addresses all your needs.'
    },
    {
      question: 'What is the typical engagement duration?',
      answer: 'It varies by service. Fractional CTO engagements typically run 3-12+ months, technical due diligence is usually 2-4 weeks, and project-based services like architecture consulting can range from 4-12 weeks depending on scope.'
    },
    {
      question: 'Do you work with remote teams?',
      answer: 'Yes! I work with teams globally and am experienced in remote collaboration. I use modern communication tools and adapt to your team\'s timezone and working style for seamless integration.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'I have deep experience in FinTech, HealthTech, SaaS, E-commerce, and MarketTech. However, my expertise in software architecture, team building, and technology strategy applies across industries.'
    },
    {
      question: 'How quickly can we get started?',
      answer: 'After our initial consultation, I can typically start within 1-2 weeks depending on current capacity and the service you need. For urgent situations, expedited onboarding may be available.'
    },
    {
      question: 'What if I need ongoing support after the engagement?',
      answer: 'I offer flexible ongoing support arrangements, from monthly retainer packages to on-demand consulting hours. Many clients transition from project-based work to ongoing fractional CTO relationships.'
    },
    {
      question: 'Do you sign NDAs and IP agreements?',
      answer: 'Yes, all engagements include comprehensive confidentiality and IP protection agreements. Your technology, business information, and intellectual property are fully protected.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
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
              <a href="/services" className="text-sm font-medium text-indigo-600 dark:text-indigo-400 transition-colors cursor-pointer">Services</a>
              <a href="/case-studies" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">Case Studies</a>
              <a href="/blog" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">Blog</a>
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
              
              <a
                href="/book-consultation"
                className="hidden sm:block px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Book Consultation
              </a>

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
                <a href="/services" className="px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg cursor-pointer">Services</a>
                <a href="/case-studies" className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">Case Studies</a>
                <a href="/blog" className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">Blog</a>
                <a href="/contact" className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">Contact</a>
                <a
                  href="/book-consultation"
                  className="mx-4 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer text-center"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/services-hero-bg.jpg"
            alt="Technology Services"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/85 to-slate-900/90"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <i className="ri-service-line text-indigo-400"></i>
              <span className="text-sm font-medium text-white">Professional Services</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Technology Leadership Services
              <span className="block mt-2 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                For Growing Startups
              </span>
            </h1>
            
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              From strategic CTO guidance to technical due diligence and architecture consulting—
              comprehensive technology services to accelerate your startup's growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('main-services')}
                className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all whitespace-nowrap cursor-pointer"
              >
                Explore Services
              </button>
              <a
                href="/book-consultation"
                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-colors whitespace-nowrap cursor-pointer text-center"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section id="main-services" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Core Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Comprehensive technology leadership solutions tailored to your startup's unique needs and stage
            </p>
          </div>

          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${service.color} rounded-2xl mb-6`}>
                    <i className={`${service.icon} text-white text-3xl`}></i>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                    {service.tagline}
                  </p>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.idealFor.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">
                      {service.pricing}
                    </div>
                    <a
                      href={service.link}
                      className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all whitespace-nowrap cursor-pointer"
                    >
                      Learn More
                    </a>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                      What's Included
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className={`w-6 h-6 flex items-center justify-center bg-gradient-to-br ${service.color} rounded-lg flex-shrink-0 mt-0.5`}>
                            <i className="ri-check-line text-white text-sm"></i>
                          </div>
                          <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                      <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wide">
                        Key Benefits
                      </h5>
                      <div className="grid grid-cols-2 gap-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-400">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Specialized services to address specific technology challenges and opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl mb-6">
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                      <i className="ri-arrow-right-s-line text-indigo-600 dark:text-indigo-400"></i>
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
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              How We Work Together
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              A proven process that ensures successful outcomes and seamless collaboration
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative text-center">
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-violet-600"></div>
                  )}
                  
                  <div className="relative z-10 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl mx-auto mb-4 shadow-lg">
                    <i className={`${step.icon} text-white text-2xl`}></i>
                  </div>
                  
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-2">
                    {step.step}
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              What Clients Say
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Real results from real partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center space-x-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-amber-500 text-lg"></i>
                  ))}
                </div>
                
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Everything you need to know about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="w-8 h-8 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0 group-open:rotate-180 transition-transform">
                    <i className="ri-arrow-down-s-line text-indigo-600 dark:text-indigo-400 text-xl"></i>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Technology Strategy?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Let's discuss how our services can help your startup achieve its technology goals faster and more efficiently.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book-consultation"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-50 transition-all whitespace-nowrap cursor-pointer text-center"
              >
                Book Free Consultation
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all whitespace-nowrap cursor-pointer text-center"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-indigo-100">
              <div className="flex items-center space-x-2">
                <i className="ri-check-line text-2xl"></i>
                <span>Free initial consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-check-line text-2xl"></i>
                <span>Flexible engagement models</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-check-line text-2xl"></i>
                <span>No long-term contracts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
