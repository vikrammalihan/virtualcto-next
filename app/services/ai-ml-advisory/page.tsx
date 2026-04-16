'use client'
import { useState, useEffect } from 'react';
import { Footer } from '@/components/shared';
import Image from 'next/image';

export default function AIMLAdvisoryPage() {
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

  const benefits = [
    {
      icon: 'ri-brain-line',
      title: 'Strategic AI Roadmap',
      description: 'Develop a clear, actionable plan for integrating AI/ML into your product stack without getting overwhelmed by options.'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Cost-Effective Implementation',
      description: 'Avoid expensive mistakes by choosing the right tools and approaches for your budget and use case.'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Faster Time to Market',
      description: 'Leverage existing AI tools and platforms to implement features quickly without building from scratch.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Risk Mitigation',
      description: 'Understand potential pitfalls, data privacy concerns, and technical limitations before committing resources.'
    },
    {
      icon: 'ri-tools-line',
      title: 'Technology Stack Optimization',
      description: 'Select the best AI/ML tools, APIs, and platforms that integrate seamlessly with your existing architecture.'
    },
    {
      icon: 'ri-team-line',
      title: 'Team Enablement',
      description: 'Upskill your development team and establish best practices for AI/ML development and deployment.'
    }
  ];

  const services = [
    {
      category: 'AI Strategy & Planning',
      icon: 'ri-lightbulb-line',
      items: [
        'AI opportunity assessment and use case prioritization',
        'Technology stack evaluation and selection',
        'Implementation roadmap and timeline planning',
        'Budget and resource requirement analysis'
      ]
    },
    {
      category: 'LLM Integration',
      icon: 'ri-chat-3-line',
      items: [
        'Large Language Model selection and integration',
        'Prompt engineering and optimization strategies',
        'Custom AI assistant and chatbot development',
        'Content generation and automation workflows'
      ]
    },
    {
      category: 'Machine Learning Implementation',
      icon: 'ri-cpu-line',
      items: [
        'Predictive analytics and recommendation systems',
        'Computer vision and image processing integration',
        'Natural language processing and sentiment analysis',
        'Automated decision-making and classification systems'
      ]
    },
    {
      category: 'Data & Infrastructure',
      icon: 'ri-database-line',
      items: [
        'Data pipeline design for AI/ML workflows',
        'Model training and deployment infrastructure',
        'Vector databases and semantic search implementation',
        'Real-time AI processing and edge computing setup'
      ]
    },
    {
      category: 'Automation & Workflows',
      icon: 'ri-flow-chart',
      items: [
        'Business process automation with AI',
        'Intelligent document processing and extraction',
        'Automated testing and quality assurance',
        'Customer support automation and ticketing'
      ]
    },
    {
      category: 'Ethics & Compliance',
      icon: 'ri-scales-line',
      items: [
        'AI ethics and bias detection frameworks',
        'Data privacy and regulatory compliance',
        'Model interpretability and explainability',
        'Responsible AI development practices'
      ]
    }
  ];

  const useCases = [
    {
      industry: 'SaaS Products',
      description: 'Enhance user experience with intelligent features',
      examples: [
        'Smart content recommendations',
        'Automated user onboarding',
        'Predictive analytics dashboards',
        'Intelligent search and filtering'
      ],
      icon: 'ri-window-line'
    },
    {
      industry: 'E-commerce',
      description: 'Personalize shopping experiences and optimize operations',
      examples: [
        'Product recommendation engines',
        'Dynamic pricing optimization',
        'Inventory demand forecasting',
        'Automated customer service'
      ],
      icon: 'ri-shopping-cart-line'
    },
    {
      industry: 'FinTech',
      description: 'Implement AI for security, compliance, and user insights',
      examples: [
        'Fraud detection and prevention',
        'Credit scoring and risk assessment',
        'Automated compliance monitoring',
        'Personalized financial advice'
      ],
      icon: 'ri-bank-line'
    },
    {
      industry: 'HealthTech',
      description: 'Leverage AI for better patient outcomes and efficiency',
      examples: [
        'Medical image analysis',
        'Symptom checker and triage',
        'Drug discovery assistance',
        'Clinical decision support'
      ],
      icon: 'ri-heart-pulse-line'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'Deep dive into your product, goals, and current technical capabilities to identify AI opportunities.',
      icon: 'ri-search-eye-line'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a comprehensive AI integration strategy with prioritized use cases and implementation plan.',
      icon: 'ri-route-line'
    },
    {
      step: '03',
      title: 'Technology Selection',
      description: 'Evaluate and select the best AI/ML tools, APIs, and platforms for your specific requirements.',
      icon: 'ri-stack-line'
    },
    {
      step: '04',
      title: 'Proof of Concept',
      description: 'Build and test small-scale implementations to validate approach before full development.',
      icon: 'ri-flask-line'
    },
    {
      step: '05',
      title: 'Implementation Support',
      description: 'Provide hands-on guidance during development, testing, and deployment phases.',
      icon: 'ri-tools-fill'
    },
    {
      step: '06',
      title: 'Optimization & Scaling',
      description: 'Monitor performance, optimize models, and plan for scaling to handle increased usage.',
      icon: 'ri-line-chart-line'
    }
  ];

  const packages = [
    {
      name: 'AI Assessment',
      price: '$2,500',
      duration: '1-2 weeks',
      description: 'Comprehensive evaluation of AI opportunities in your product',
      features: [
        'Current state analysis',
        'AI opportunity mapping',
        'Technology recommendations',
        'Implementation roadmap',
        'ROI projections',
        'Risk assessment'
      ],
      ideal: 'Teams exploring AI possibilities'
    },
    {
      name: 'Integration Strategy',
      price: '$5,000',
      duration: '3-4 weeks',
      description: 'Detailed plan for implementing specific AI/ML features',
      features: [
        'Everything in AI Assessment',
        'Detailed technical specifications',
        'Architecture design',
        'Data requirements analysis',
        'Team training plan',
        'Success metrics definition'
      ],
      ideal: 'Teams ready to implement AI',
      popular: true
    },
    {
      name: 'Full Implementation Support',
      price: '$12,000/month',
      duration: '3-6 months',
      description: 'End-to-end guidance through AI/ML implementation',
      features: [
        'Everything in Integration Strategy',
        'Hands-on development support',
        'Weekly strategy sessions',
        'Code reviews and optimization',
        'Performance monitoring setup',
        'Ongoing optimization support'
      ],
      ideal: 'Teams needing comprehensive support'
    }
  ];

  const faqs = [
    {
      question: 'Do I need a large dataset to implement AI/ML features?',
      answer: 'Not necessarily! Many AI implementations can leverage pre-trained models, synthetic data, or third-party APIs. We help you determine the most practical approach based on your current data situation and can advise on data collection strategies if needed.'
    },
    {
      question: 'How do I know if my product is ready for AI integration?',
      answer: 'If you have user data, clear business problems to solve, and development resources, you\'re likely ready. Our AI Assessment package helps evaluate your readiness and identify the best starting points for AI integration.'
    },
    {
      question: 'What\'s the difference between using AI APIs vs building custom models?',
      answer: 'AI APIs (like OpenAI, Google Cloud AI) offer quick implementation and proven results but less customization. Custom models provide more control but require more time and data. We help you choose the right approach based on your needs, timeline, and resources.'
    },
    {
      question: 'How do you handle data privacy and security concerns?',
      answer: 'Data privacy is paramount in AI implementations. We help you understand compliance requirements (GDPR, CCPA, etc.), implement proper data handling practices, and choose AI services that meet your security standards.'
    },
    {
      question: 'Can you help with both technical implementation and business strategy?',
      answer: 'Yes! Our approach combines technical expertise with business strategy. We ensure AI implementations align with your product goals, user needs, and business objectives while being technically sound and scalable.'
    },
    {
      question: 'What kind of ROI can I expect from AI integration?',
      answer: 'ROI varies by use case, but common benefits include increased user engagement, reduced operational costs, improved conversion rates, and new revenue opportunities. We help you define success metrics and track ROI throughout the implementation.'
    },
    {
      question: 'Do you work with specific AI/ML platforms or tools?',
      answer: 'We\'re platform-agnostic and work with leading AI services including OpenAI, Google Cloud AI, AWS AI services, Hugging Face, and more. Our recommendations are based on your specific needs, not vendor preferences.'
    },
    {
      question: 'How do you stay current with the rapidly evolving AI landscape?',
      answer: 'I continuously monitor AI/ML developments, participate in the AI community, and test new tools and approaches. This ensures you get recommendations based on the latest capabilities and best practices in the field.'
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
              <a href="/services" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">Services</a>
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
                <a href="/services" className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">Services</a>
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
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/ai-ml-advisory-hero-bg.jpg"
            alt="AI/ML Integration Advisory"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95 dark:from-slate-900/95 dark:via-slate-900/90 dark:to-slate-900/95"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full border border-indigo-200 dark:border-indigo-800 mb-6">
              <i className="ri-brain-line text-indigo-600 dark:text-indigo-400"></i>
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">AI/ML Integration Advisory</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Transform Your Product with
              <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Intelligent AI Integration
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Expert guidance on integrating AI tools, LLMs, and automation into your existing products. 
              Make smarter technology decisions and unlock new capabilities without the complexity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book-consultation"
                className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all whitespace-nowrap cursor-pointer text-center"
              >
                Start AI Assessment
              </a>
              <button
                onClick={() => scrollToSection('packages')}
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors whitespace-nowrap cursor-pointer"
              >
                View Packages
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose AI/ML Integration Advisory?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Navigate the AI landscape with confidence and implement intelligent features that drive real business value
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl mb-6">
                  <i className={`${benefit.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Comprehensive AI/ML Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              End-to-end support for integrating artificial intelligence and machine learning into your product stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl">
                    <i className={`${service.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {service.category}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-5 h-5 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex-shrink-0 mt-0.5">
                        <i className="ri-check-line text-indigo-600 dark:text-indigo-400 text-sm"></i>
                      </div>
                      <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              AI Integration by Industry
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Tailored AI solutions for different industries and product types
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl">
                    <i className={`${useCase.icon} text-white text-2xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {useCase.industry}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {useCase.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {useCase.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        {example}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our AI Integration Process
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              A systematic approach to integrating AI/ML capabilities into your product
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative flex items-start space-x-6 mb-12 last:mb-0"
              >
                {index !== process.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-indigo-600 to-violet-600"></div>
                )}
                
                <div className="relative z-10 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl flex-shrink-0 shadow-lg">
                  <i className={`${step.icon} text-white text-2xl`}></i>
                </div>

                <div className="flex-1 bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                      {step.step}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              AI Integration Packages
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Choose the right level of support for your AI implementation journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 border-2 transition-all duration-300 ${
                  pkg.popular
                    ? 'border-indigo-500 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 scale-105'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-indigo-500 dark:hover:border-indigo-500'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4 text-center">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-2">
                    {pkg.price}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 mb-4">
                    {pkg.duration}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    {pkg.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-6 h-6 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex-shrink-0 mt-0.5">
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    Ideal for: {pkg.ideal}
                  </div>
                  <a
                    href="/book-consultation"
                    className={`block py-3 px-6 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer text-center ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-lg hover:shadow-indigo-500/30'
                        : 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white'
                    }`}
                  >
                    Get Started
                  </a>
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
              Common questions about AI/ML integration and our advisory services
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
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Unlock AI Potential in Your Product?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Let's explore how AI and machine learning can transform your product experience, 
              automate processes, and drive growth for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book-consultation"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-50 transition-all whitespace-nowrap cursor-pointer text-center"
              >
                Start AI Assessment
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all whitespace-nowrap cursor-pointer text-center"
              >
                Discuss Your Needs
              </a>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-indigo-100">
              <div className="flex items-center space-x-2">
                <i className="ri-check-line text-2xl"></i>
                <span>Free AI opportunity assessment</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-check-line text-2xl"></i>
                <span>Platform-agnostic recommendations</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-check-line text-2xl"></i>
                <span>Practical implementation guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}