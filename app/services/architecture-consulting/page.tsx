'use client';

import { useState, useEffect } from 'react';
import { Footer } from '@/components/shared/Footer';

export default function ArchitectureConsultingPage() {
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

  const architectureServices = [
    {
      icon: 'ri-building-line',
      title: 'System Architecture Design',
      description: 'Design scalable, resilient system architectures that support your business growth and technical requirements.',
      features: [
        'Microservices vs. monolithic architecture decisions',
        'API design and integration patterns',
        'Database architecture and data modeling',
        'Event-driven architecture implementation'
      ]
    },
    {
      icon: 'ri-cloud-line',
      title: 'Cloud Architecture',
      description: 'Optimize your cloud infrastructure for performance, cost-efficiency, and scalability across AWS, Azure, or GCP.',
      features: [
        'Multi-cloud and hybrid cloud strategies',
        'Serverless architecture design',
        'Container orchestration with Kubernetes',
        'Cloud cost optimization and FinOps'
      ]
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Security Architecture',
      description: 'Build security into your architecture from the ground up with zero-trust principles and compliance frameworks.',
      features: [
        'Zero-trust security model implementation',
        'Identity and access management (IAM)',
        'Data encryption and privacy controls',
        'Compliance architecture (GDPR, SOC2, HIPAA)'
      ]
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Scalability Planning',
      description: 'Prepare your architecture to handle 10x, 100x, or 1000x growth without performance degradation.',
      features: [
        'Horizontal and vertical scaling strategies',
        'Load balancing and traffic management',
        'Caching strategies and CDN implementation',
        'Database sharding and replication'
      ]
    },
    {
      icon: 'ri-refresh-line',
      title: 'Architecture Modernization',
      description: 'Transform legacy systems into modern, cloud-native architectures without disrupting business operations.',
      features: [
        'Legacy system assessment and migration planning',
        'Strangler fig pattern implementation',
        'Technical debt reduction strategies',
        'Gradual migration with zero downtime'
      ]
    },
    {
      icon: 'ri-speed-line',
      title: 'Performance Architecture',
      description: 'Optimize system performance with advanced caching, database tuning, and infrastructure optimization.',
      features: [
        'Application performance monitoring (APM)',
        'Database query optimization',
        'Asynchronous processing patterns',
        'Real-time data processing architecture'
      ]
    }
  ];

  const architectureApproach = [
    {
      phase: 'Discovery & Assessment',
      icon: 'ri-search-line',
      duration: '1-2 weeks',
      activities: [
        'Current architecture review and documentation',
        'Business requirements and growth projections',
        'Technical constraints and dependencies analysis',
        'Stakeholder interviews and workshops'
      ]
    },
    {
      phase: 'Architecture Design',
      icon: 'ri-draft-line',
      duration: '2-4 weeks',
      activities: [
        'High-level architecture diagrams and documentation',
        'Technology stack recommendations',
        'Data flow and integration patterns',
        'Security and compliance framework'
      ]
    },
    {
      phase: 'Validation & Planning',
      icon: 'ri-checkbox-circle-line',
      duration: '1-2 weeks',
      activities: [
        'Architecture review with stakeholders',
        'Proof of concept for critical components',
        'Risk assessment and mitigation strategies',
        'Implementation roadmap and timeline'
      ]
    },
    {
      phase: 'Implementation Support',
      icon: 'ri-tools-line',
      duration: 'Ongoing',
      activities: [
        'Technical guidance during development',
        'Architecture decision records (ADRs)',
        'Code reviews and quality assurance',
        'Performance monitoring and optimization'
      ]
    }
  ];

  const architecturePatterns = [
    {
      pattern: 'Microservices Architecture',
      description: 'Break down monolithic applications into independent, scalable services',
      bestFor: 'Large teams, complex domains, independent deployment needs',
      icon: 'ri-apps-line'
    },
    {
      pattern: 'Event-Driven Architecture',
      description: 'Build loosely coupled systems that react to events in real-time',
      bestFor: 'Real-time processing, IoT applications, complex workflows',
      icon: 'ri-flashlight-line'
    },
    {
      pattern: 'Serverless Architecture',
      description: 'Eliminate infrastructure management with function-as-a-service',
      bestFor: 'Variable workloads, rapid development, cost optimization',
      icon: 'ri-cloud-line'
    },
    {
      pattern: 'CQRS & Event Sourcing',
      description: 'Separate read and write operations for optimal performance',
      bestFor: 'High-performance systems, audit requirements, complex business logic',
      icon: 'ri-database-2-line'
    },
    {
      pattern: 'API Gateway Pattern',
      description: 'Centralize API management, security, and routing',
      bestFor: 'Microservices, mobile backends, third-party integrations',
      icon: 'ri-route-line'
    },
    {
      pattern: 'Domain-Driven Design',
      description: 'Align software architecture with business domains',
      bestFor: 'Complex business logic, large enterprise systems',
      icon: 'ri-organization-chart'
    }
  ];

  const deliverables = [
    {
      title: 'Architecture Documentation',
      description: 'Comprehensive documentation including system diagrams, component specifications, and design decisions',
      icon: 'ri-file-text-line'
    },
    {
      title: 'Technology Recommendations',
      description: 'Detailed analysis of technology choices with pros, cons, and implementation guidance',
      icon: 'ri-stack-line'
    },
    {
      title: 'Implementation Roadmap',
      description: 'Phased implementation plan with timelines, milestones, and resource requirements',
      icon: 'ri-roadmap-line'
    },
    {
      title: 'Security Framework',
      description: 'Security architecture blueprint with threat modeling and mitigation strategies',
      icon: 'ri-shield-line'
    },
    {
      title: 'Performance Benchmarks',
      description: 'Expected performance metrics and monitoring strategies for your architecture',
      icon: 'ri-dashboard-line'
    },
    {
      title: 'Cost Analysis',
      description: 'Infrastructure cost projections and optimization recommendations',
      icon: 'ri-money-dollar-circle-line'
    }
  ];

  const caseStudies = [
    {
      company: 'FinTech Startup',
      challenge: 'Monolithic application struggling to scale during peak trading hours',
      solution: 'Migrated to microservices architecture with event-driven processing',
      results: [
        '10x improvement in transaction processing speed',
        '99.99% uptime during peak hours',
        '60% reduction in infrastructure costs',
        'Enabled independent team deployments'
      ],
      icon: 'ri-bank-line'
    },
    {
      company: 'HealthTech Platform',
      challenge: 'Legacy system unable to meet HIPAA compliance requirements',
      solution: 'Redesigned architecture with zero-trust security and data encryption',
      results: [
        'Achieved HIPAA and SOC2 compliance',
        'Reduced security vulnerabilities by 95%',
        'Implemented end-to-end encryption',
        'Passed all security audits on first attempt'
      ],
      icon: 'ri-heart-pulse-line'
    },
    {
      company: 'E-Commerce Platform',
      challenge: 'Database bottlenecks causing slow page loads and cart abandonment',
      solution: 'Implemented CQRS pattern with Redis caching and database sharding',
      results: [
        '80% reduction in page load times',
        '45% increase in conversion rates',
        'Handled 5x traffic during Black Friday',
        'Improved customer satisfaction scores'
      ],
      icon: 'ri-shopping-cart-line'
    }
  ];

  const faqs = [
    {
      question: 'How long does an architecture consulting engagement typically take?',
      answer: 'The timeline varies based on complexity, but most engagements follow a 4-8 week cycle: 1-2 weeks for discovery, 2-4 weeks for design, and 1-2 weeks for validation. Implementation support can continue as needed during your development phase.'
    },
    {
      question: 'Do you work with existing systems or only new projects?',
      answer: 'I work with both! For existing systems, I conduct architecture assessments and create modernization roadmaps. For new projects, I design architecture from scratch aligned with your business goals and technical requirements.'
    },
    {
      question: 'What if we already have an architecture but need a second opinion?',
      answer: 'Architecture reviews are a common engagement. I provide objective assessments of your current architecture, identify potential issues, and recommend improvements for scalability, security, and performance.'
    },
    {
      question: 'How do you ensure the architecture will scale with our growth?',
      answer: 'I design with scalability in mind from day one, considering your growth projections and building in flexibility. This includes horizontal scaling strategies, load balancing, caching layers, and database optimization techniques proven to handle 10x-100x growth.'
    },
    {
      question: 'Can you help with cloud migration architecture?',
      answer: 'Absolutely! Cloud migration is a specialty. I design migration strategies that minimize risk and downtime, whether you\'re moving to AWS, Azure, GCP, or implementing a multi-cloud approach. This includes lift-and-shift, re-platforming, or full re-architecture.'
    },
    {
      question: 'What happens after the architecture is designed?',
      answer: 'I provide ongoing implementation support including technical guidance, architecture decision records, code reviews, and performance monitoring. I ensure your team understands the architecture and can execute it successfully.'
    },
    {
      question: 'How do you handle security and compliance in architecture design?',
      answer: 'Security is built into every architecture from the ground up, not added as an afterthought. I implement zero-trust principles, data encryption, IAM policies, and ensure compliance with relevant regulations (GDPR, SOC2, HIPAA, etc.).'
    },
    {
      question: 'What is the cost of architecture consulting services?',
      answer: 'Costs vary based on project scope and complexity. I offer flexible engagement models from one-time architecture design projects to ongoing advisory retainers. Contact me for a free consultation and customized proposal based on your specific needs.'
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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-violet-50 to-white dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full border border-indigo-200 dark:border-indigo-800 mb-6">
              <i className="ri-building-line text-indigo-600 dark:text-indigo-400"></i>
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Architecture Consulting</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Build Scalable Systems
              <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                That Grow With Your Business
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Expert architecture consulting to design robust, scalable, and secure systems. 
              From cloud-native microservices to legacy modernization—get it right from the start.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all whitespace-nowrap cursor-pointer"
              >
                Request Architecture Review
              </button>
              <button
                onClick={() => scrollToSection('case-studies')}
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors whitespace-nowrap cursor-pointer"
              >
                View Case Studies
              </button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">50+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Architectures Designed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">99.9%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Average Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">10x</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Scalability Achieved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Services */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Comprehensive Architecture Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              End-to-end architecture consulting covering all aspects of modern software systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {architectureServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl mb-6">
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-5 h-5 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex-shrink-0 mt-0.5">
                        <i className="ri-check-line text-indigo-600 dark:text-indigo-400 text-xs"></i>
                      </div>
                      <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Patterns */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Modern Architecture Patterns
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Leverage proven architecture patterns tailored to your specific needs and challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {architecturePatterns.map((pattern, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl mb-6">
                  <i className={`${pattern.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {pattern.pattern}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {pattern.description}
                </p>
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="text-xs font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">
                    Best For
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {pattern.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              My Architecture Consulting Approach
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              A structured, collaborative process that delivers results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {architectureApproach.map((phase, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border-2 border-slate-200 dark:border-slate-700"
              >
                <div className="absolute -top-4 left-8 px-4 py-1 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-bold rounded-full">
                  Phase {index + 1}
                </div>
                
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl mb-6 mt-4">
                  <i className={`${phase.icon} text-white text-2xl`}></i>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {phase.phase}
                </h3>
                
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4">
                  <i className="ri-time-line text-indigo-600 dark:text-indigo-400 text-sm"></i>
                  <span className="text-xs font-medium text-indigo-700 dark:text-indigo-300">{phase.duration}</span>
                </div>

                <ul className="space-y-2">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-sm text-slate-700 dark:text-slate-300">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              What You&apos;ll Receive
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Comprehensive deliverables that guide your team from design to implementation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {deliverables.map((deliverable, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 rounded-xl mb-6">
                  <i className={`${deliverable.icon} text-indigo-600 dark:text-indigo-400 text-2xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {deliverable.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {deliverable.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Architecture Success Stories
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Real-world examples of architecture transformations that drove business results
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl mb-6">
                  <i className={`${study.icon} text-white text-2xl`}></i>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {study.company}
                </h3>

                <div className="mb-4">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">
                    Challenge
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {study.challenge}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">
                    Solution
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {study.solution}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white mb-3 uppercase tracking-wide">
                    Results
                  </div>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-5 h-5 flex items-center justify-center bg-green-100 dark:bg-green-900/30 rounded-full flex-shrink-0 mt-0.5">
                          <i className="ri-check-line text-green-600 dark:text-green-400 text-xs"></i>
                        </div>
                        <span className="text-sm text-slate-700 dark:text-slate-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Everything you need to know about architecture consulting services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
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
      <section id="contact" className="py-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build a Scalable Architecture?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Let&apos;s discuss your architecture challenges and design a solution that scales with your business. 
              Get a free architecture assessment and consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-50 transition-all whitespace-nowrap cursor-pointer"
              >
                Schedule Free Assessment
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all whitespace-nowrap cursor-pointer"
              >
                Download Architecture Guide
              </a>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-indigo-100">
              <div className="flex items-center space-x-2">
                <i className="ri-check-line text-2xl"></i>
                <span>Free initial consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-check-line text-2xl"></i>
                <span>No obligation assessment</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-check-line text-2xl"></i>
                <span>Proven methodologies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
