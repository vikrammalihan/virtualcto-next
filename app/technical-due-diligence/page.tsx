'use client';

import { useState, useEffect } from 'react';
import { Footer } from '@/components/shared/Footer';

export default function TechnicalDueDiligencePage() {
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

  const keyAreas = [
    {
      icon: 'ri-code-box-line',
      title: 'Technology Stack Assessment',
      description: 'Comprehensive evaluation of architecture, code quality, technical debt, and scalability potential',
      details: [
        'Architecture review and design patterns',
        'Code quality and maintainability analysis',
        'Technical debt quantification',
        'Scalability and performance assessment',
        'Technology stack appropriateness'
      ]
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Security & Compliance',
      description: 'In-depth security audit, vulnerability assessment, and regulatory compliance verification',
      details: [
        'Security vulnerability scanning',
        'Data protection and privacy compliance',
        'Access control and authentication review',
        'Encryption and data security practices',
        'Regulatory compliance (GDPR, HIPAA, etc.)'
      ]
    },
    {
      icon: 'ri-team-line',
      title: 'Team & Processes',
      description: 'Evaluation of engineering team capabilities, development processes, and operational maturity',
      details: [
        'Team structure and skill assessment',
        'Development workflow and practices',
        'DevOps and CI/CD pipeline review',
        'Documentation quality and completeness',
        'Knowledge transfer and bus factor'
      ]
    },
    {
      icon: 'ri-database-2-line',
      title: 'Infrastructure & Operations',
      description: 'Analysis of infrastructure setup, deployment processes, monitoring, and operational excellence',
      details: [
        'Cloud infrastructure architecture',
        'Deployment and release processes',
        'Monitoring and alerting systems',
        'Disaster recovery and backup strategies',
        'Cost optimization opportunities'
      ]
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Product & Roadmap',
      description: 'Assessment of product-market fit, technical roadmap feasibility, and innovation potential',
      details: [
        'Product architecture alignment',
        'Feature completeness and quality',
        'Technical roadmap viability',
        'Innovation and competitive advantage',
        'Integration capabilities'
      ]
    },
    {
      icon: 'ri-file-list-3-line',
      title: 'IP & Legal',
      description: 'Verification of intellectual property ownership, licensing compliance, and legal obligations',
      details: [
        'IP ownership verification',
        'Open source license compliance',
        'Third-party dependencies audit',
        'Contractual obligations review',
        'Patent and trademark assessment'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Briefing',
      description: 'We start with a confidential briefing to understand the transaction context, timeline, and specific concerns.',
      duration: '1-2 days',
      icon: 'ri-file-text-line'
    },
    {
      step: '02',
      title: 'Information Gathering',
      description: 'Comprehensive data collection including code access, documentation, team interviews, and system access.',
      duration: '3-5 days',
      icon: 'ri-database-line'
    },
    {
      step: '03',
      title: 'Technical Assessment',
      description: 'Deep-dive analysis across all key areas including code review, security audit, and infrastructure evaluation.',
      duration: '1-2 weeks',
      icon: 'ri-search-eye-line'
    },
    {
      step: '04',
      title: 'Risk Analysis',
      description: 'Identification and categorization of technical risks with severity ratings and mitigation recommendations.',
      duration: '2-3 days',
      icon: 'ri-alert-line'
    },
    {
      step: '05',
      title: 'Report Delivery',
      description: 'Comprehensive written report with executive summary, detailed findings, and actionable recommendations.',
      duration: '2-3 days',
      icon: 'ri-file-chart-line'
    },
    {
      step: '06',
      title: 'Q&A Session',
      description: 'Presentation of findings with Q&A session to address questions and clarify recommendations.',
      duration: '1 day',
      icon: 'ri-question-answer-line'
    }
  ];

  const deliverables = [
    {
      title: 'Executive Summary',
      description: 'High-level overview of findings, key risks, and recommendations for decision-makers',
      icon: 'ri-file-text-line'
    },
    {
      title: 'Technical Assessment Report',
      description: 'Detailed analysis of technology stack, architecture, code quality, and technical debt',
      icon: 'ri-file-code-line'
    },
    {
      title: 'Risk Matrix',
      description: 'Categorized risk assessment with severity ratings and potential business impact',
      icon: 'ri-alert-line'
    },
    {
      title: 'Security Audit Report',
      description: 'Comprehensive security vulnerability assessment and compliance verification',
      icon: 'ri-shield-check-line'
    },
    {
      title: 'Team Assessment',
      description: 'Evaluation of engineering team capabilities, processes, and organizational structure',
      icon: 'ri-team-line'
    },
    {
      title: 'Recommendations Document',
      description: 'Actionable recommendations for risk mitigation and post-acquisition improvements',
      icon: 'ri-lightbulb-line'
    }
  ];

  const idealFor = [
    {
      scenario: 'Venture Capital Firms',
      description: 'Making informed investment decisions with confidence in technical capabilities',
      icon: 'ri-funds-line',
      benefits: [
        'Validate technical claims and capabilities',
        'Identify hidden technical risks',
        'Assess team quality and retention risk',
        'Evaluate scalability potential'
      ]
    },
    {
      scenario: 'Private Equity Investors',
      description: 'Comprehensive technology assessment for acquisition or growth investment',
      icon: 'ri-line-chart-line',
      benefits: [
        'Quantify technical debt and remediation costs',
        'Evaluate operational efficiency',
        'Identify cost optimization opportunities',
        'Assess integration complexity'
      ]
    },
    {
      scenario: 'Strategic Acquirers',
      description: 'Technical validation for M&A transactions and strategic partnerships',
      icon: 'ri-building-line',
      benefits: [
        'Verify technology compatibility',
        'Assess integration requirements',
        'Identify synergy opportunities',
        'Evaluate IP and licensing risks'
      ]
    },
    {
      scenario: 'Board Members',
      description: 'Independent technical assessment for governance and oversight',
      icon: 'ri-user-star-line',
      benefits: [
        'Independent expert validation',
        'Risk identification and mitigation',
        'Strategic technology guidance',
        'Fiduciary duty fulfillment'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How long does a typical technical due diligence engagement take?',
      answer: 'Most engagements take 2-4 weeks depending on the complexity of the technology, size of the codebase, and depth of analysis required. We can also provide expedited assessments for time-sensitive transactions, typically completing them in 1-2 weeks.'
    },
    {
      question: 'What access do you need to conduct the assessment?',
      answer: 'We typically need read-only access to code repositories, documentation, cloud infrastructure (view-only), and the opportunity to interview key technical team members. All access is handled under strict NDA and security protocols.'
    },
    {
      question: 'How do you handle confidentiality and sensitive information?',
      answer: 'We operate under comprehensive NDAs and maintain strict confidentiality protocols. All findings are shared only with authorized parties, and we can work within virtual data rooms or other secure environments as required.'
    },
    {
      question: 'Can you assess companies using technologies you\'re not familiar with?',
      answer: 'With 25+ years of experience across diverse technology stacks and industries, I can assess most modern technology platforms. For highly specialized or emerging technologies, I can bring in trusted specialist partners while maintaining overall assessment leadership.'
    },
    {
      question: 'What if the target company is resistant to the due diligence process?',
      answer: 'Resistance is often a red flag itself. I work diplomatically to explain the mutual benefits of transparency and can often help facilitate cooperation. I can also conduct meaningful assessments with limited access, though findings will note any access restrictions.'
    },
    {
      question: 'Do you provide post-acquisition support?',
      answer: 'Yes! Many clients engage me for post-acquisition integration support, technical debt remediation planning, or ongoing fractional CTO services to execute on the recommendations from the due diligence process.'
    },
    {
      question: 'How do you price technical due diligence engagements?',
      answer: 'Pricing depends on the scope, complexity, and timeline. I offer both fixed-fee engagements for standard assessments and hourly arrangements for more complex or ongoing evaluations. Contact me for a custom quote based on your specific needs.'
    },
    {
      question: 'What makes your approach different from other technical due diligence providers?',
      answer: 'Unlike consulting firms that send junior analysts, you get my personal attention and 25+ years of hands-on CTO experience. I\'ve been on both sides of M&A transactions and understand both the technical and business implications of findings.'
    }
  ];

  const testimonials = [
    {
      quote: 'Vikram\'s technical due diligence was instrumental in our investment decision. His thorough assessment uncovered critical issues that would have cost us millions post-acquisition.',
      author: 'Sarah Chen',
      role: 'Partner, Venture Capital Firm',
      company: 'TechVentures Capital'
    },
    {
      quote: 'The depth and clarity of the technical assessment gave our board complete confidence in the acquisition. Vikram\'s recommendations also provided a clear roadmap for post-merger integration.',
      author: 'Michael Roberts',
      role: 'CFO',
      company: 'Global Tech Acquirer'
    },
    {
      quote: 'We\'ve used several technical due diligence providers, but Vikram\'s combination of technical depth and business acumen is unmatched. His reports are both comprehensive and actionable.',
      author: 'David Kumar',
      role: 'Investment Director',
      company: 'Growth Equity Partners'
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
              <i className="ri-search-eye-line text-indigo-600 dark:text-indigo-400"></i>
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Technical Due Diligence</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Make Confident Investment Decisions
              <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                With Expert Technical Assessment
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Comprehensive technical due diligence for investors, acquirers, and boards. 
              Identify risks, validate capabilities, and make informed decisions with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all whitespace-nowrap cursor-pointer"
              >
                Request Assessment
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors whitespace-nowrap cursor-pointer"
              >
                View Process
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">$500M+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Deals Assessed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">50+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Companies Evaluated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">100%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Assessment Areas */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Comprehensive Assessment Areas
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Deep-dive analysis across all critical technology and operational dimensions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {keyAreas.map((area, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl mb-6">
                  <i className={`${area.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {area.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {area.description}
                </p>
                <ul className="space-y-2">
                  {area.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Due Diligence Process
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              A structured, thorough approach designed to uncover risks and validate opportunities
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
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-4">
                      <span className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                        {step.step}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full whitespace-nowrap">
                      {step.duration}
                    </span>
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

      {/* Deliverables Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              What You&apos;ll Receive
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Comprehensive documentation and actionable insights to support your decision-making
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl mb-4">
                  <i className={`${item.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Who Benefits from Technical Due Diligence?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Tailored assessments for different stakeholder needs and investment scenarios
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {idealFor.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl p-8 border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex-shrink-0">
                    <i className={`${item.icon} text-white text-2xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {item.scenario}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wide">
                    Key Benefits
                  </h4>
                  <ul className="space-y-3">
                    {item.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-5 h-5 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex-shrink-0 mt-0.5">
                          <i className="ri-check-line text-indigo-600 dark:text-indigo-400 text-sm"></i>
                        </div>
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Trusted by Leading Investors
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              What clients say about our technical due diligence services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i key={star} className="ri-star-fill text-yellow-400 text-lg"></i>
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                  <div className="font-bold text-slate-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-indigo-600 dark:text-indigo-400 mt-1">
                    {testimonial.company}
                  </div>
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
              Common questions about technical due diligence engagements
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
              Ready to Make an Informed Investment Decision?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Get expert technical due diligence to identify risks, validate capabilities, 
              and invest with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-50 transition-all whitespace-nowrap cursor-pointer"
              >
                Request Assessment
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all whitespace-nowrap cursor-pointer"
              >
                Schedule Call
              </a>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-indigo-100">
              <div className="flex items-center space-x-2">
                <i className="ri-shield-check-line text-2xl"></i>
                <span>Strict confidentiality</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-time-line text-2xl"></i>
                <span>2-4 week turnaround</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-star-line text-2xl"></i>
                <span>25+ years experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
