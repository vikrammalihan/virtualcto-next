'use client';
import { useState, useEffect } from 'react';
import { Footer } from '@/components/shared';

export default function TermsOfServicePage() {
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

  const lastUpdated = 'January 15, 2025';

  const sections = [
    {
      title: '1. Agreement to Terms',
      content: [
        'By accessing or using TheVirtualCTO.in services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.',
        'We reserve the right to modify these terms at any time. Your continued use of our services following any changes indicates your acceptance of the new terms.'
      ]
    },
    {
      title: '2. Services Description',
      content: [
        'TheVirtualCTO.in provides technology leadership consulting services including but not limited to:',
        '• Fractional CTO services and strategic technology guidance',
        '• Technical due diligence for investors and acquirers',
        '• Architecture consulting and system design',
        '• Team building and engineering leadership',
        '• CTO-as-a-Service for fundraising support',
        '• AI/ML integration advisory services',
        'All services are provided on a professional consulting basis and are subject to the specific terms outlined in individual service agreements or statements of work.'
      ]
    },
    {
      title: '3. Engagement Terms',
      content: [
        'Service engagements are formalized through written agreements, proposals, or statements of work that outline specific deliverables, timelines, and compensation.',
        'Payment terms are specified in individual service agreements. Standard payment terms require payment within 15 days of invoice date unless otherwise agreed in writing.',
        'Either party may terminate an engagement with written notice as specified in the service agreement. Termination does not relieve the client of payment obligations for services rendered prior to termination.',
        'All engagements are subject to our standard cancellation and rescheduling policies as outlined in service agreements.'
      ]
    },
    {
      title: '4. Confidentiality',
      content: [
        'We maintain strict confidentiality regarding all client information, business strategies, technical details, and proprietary information disclosed during engagements.',
        'All engagements are conducted under comprehensive Non-Disclosure Agreements (NDAs) that protect client confidential information.',
        'We will not disclose client information to third parties without explicit written consent, except as required by law or legal process.',
        'Confidentiality obligations survive the termination of service engagements and remain in effect indefinitely unless otherwise specified in writing.'
      ]
    },
    {
      title: '5. Intellectual Property',
      content: [
        'All deliverables, reports, recommendations, and work product created specifically for a client engagement become the property of the client upon full payment, unless otherwise specified in the service agreement.',
        'We retain ownership of our general methodologies, frameworks, tools, and pre-existing intellectual property used in delivering services.',
        'Clients grant us permission to use anonymized case studies and general project descriptions for marketing purposes, unless explicitly prohibited in the service agreement.',
        'Any third-party tools, software, or intellectual property used in service delivery remain the property of their respective owners and are subject to their licensing terms.'
      ]
    },
    {
      title: '6. Professional Standards',
      content: [
        'All services are provided in accordance with professional consulting standards and industry best practices.',
        'We maintain professional liability insurance and adhere to ethical standards in all client engagements.',
        'Our recommendations and advice are based on our professional judgment and experience, but we do not guarantee specific business outcomes or results.',
        'Clients are responsible for making their own business decisions based on our recommendations and conducting their own due diligence.'
      ]
    },
    {
      title: '7. Limitation of Liability',
      content: [
        'Our liability for any claims arising from services provided is limited to the fees paid for the specific engagement giving rise to the claim.',
        'We are not liable for indirect, incidental, consequential, or punitive damages arising from our services or recommendations.',
        'We are not responsible for client implementation decisions, third-party actions, or outcomes beyond our direct control.',
        'Any claims must be brought within one year of the date when the claimant knew or should have known of the circumstances giving rise to the claim.'
      ]
    },
    {
      title: '8. Client Responsibilities',
      content: [
        'Clients are responsible for providing accurate, complete, and timely information necessary for service delivery.',
        'Clients must provide reasonable access to personnel, systems, documentation, and other resources as needed for engagement success.',
        'Clients are responsible for implementing recommendations and making business decisions based on our advice.',
        'Clients must comply with all applicable laws and regulations in their use of our services and implementation of our recommendations.'
      ]
    },
    {
      title: '9. Independent Contractor',
      content: [
        'TheVirtualCTO.in operates as an independent contractor and not as an employee, partner, or agent of clients.',
        'We maintain the right to control the manner and means of performing services, subject to the requirements specified in service agreements.',
        'We are responsible for our own taxes, insurance, and business expenses unless otherwise specified in writing.',
        'Nothing in these terms creates an employment relationship, partnership, or joint venture between us and our clients.'
      ]
    },
    {
      title: '10. Conflicts of Interest',
      content: [
        'We maintain policies to identify and manage potential conflicts of interest in client engagements.',
        'We will not accept engagements that create direct conflicts with existing client relationships without disclosure and consent from all affected parties.',
        'We reserve the right to decline engagements that would compromise our independence, objectivity, or professional judgment.',
        'Clients must disclose any relationships or circumstances that could create conflicts of interest in our engagement.'
      ]
    },
    {
      title: '11. Website Use',
      content: [
        'The content on TheVirtualCTO.in website is provided for informational purposes and does not constitute professional advice.',
        'You may not use our website for any unlawful purpose or in any way that could damage, disable, or impair our services.',
        'We reserve the right to modify, suspend, or discontinue any aspect of our website at any time without notice.',
        'Unauthorized use of our website may give rise to claims for damages and/or be subject to criminal prosecution.'
      ]
    },
    {
      title: '12. Third-Party Services',
      content: [
        'We may recommend or facilitate connections with third-party service providers, but we do not endorse or guarantee their services.',
        'Any agreements with third-party providers are separate from our service agreements and subject to their own terms.',
        'We are not responsible for the actions, services, or deliverables of third-party providers.',
        'Clients are responsible for conducting their own due diligence on third-party providers and entering into appropriate agreements.'
      ]
    },
    {
      title: '13. Data Protection',
      content: [
        'We collect and process personal data in accordance with our Privacy Policy and applicable data protection laws.',
        'We implement appropriate technical and organizational measures to protect client data and information.',
        'Clients are responsible for ensuring they have appropriate rights and consents for any data shared with us.',
        'Data processing terms are outlined in our Privacy Policy and may be supplemented by Data Processing Agreements for specific engagements.'
      ]
    },
    {
      title: '14. Dispute Resolution',
      content: [
        'Any disputes arising from these terms or our services will first be addressed through good-faith negotiation between the parties.',
        'If negotiation fails, disputes will be resolved through binding arbitration in accordance with the rules of the Indian Arbitration and Conciliation Act.',
        'Arbitration will be conducted in English and held in Bangalore, India, unless otherwise agreed in writing.',
        'Each party bears its own costs and expenses in any dispute resolution process, unless otherwise determined by the arbitrator.'
      ]
    },
    {
      title: '15. Governing Law',
      content: [
        'These Terms of Service are governed by and construed in accordance with the laws of India.',
        'Any legal proceedings related to these terms or our services will be subject to the exclusive jurisdiction of the courts in Bangalore, India.',
        'If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.',
        'Our failure to enforce any right or provision of these terms will not constitute a waiver of such right or provision.'
      ]
    },
    {
      title: '16. Force Majeure',
      content: [
        'We are not liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, labor disputes, or government actions.',
        'In the event of force majeure, we will make reasonable efforts to minimize the impact and resume normal service delivery as soon as practicable.',
        'If force majeure conditions persist for more than 30 days, either party may terminate the affected engagement without penalty.'
      ]
    },
    {
      title: '17. Entire Agreement',
      content: [
        'These Terms of Service, together with any service agreements, statements of work, and our Privacy Policy, constitute the entire agreement between you and TheVirtualCTO.in.',
        'These terms supersede all prior agreements, understandings, and communications, whether written or oral, relating to the subject matter.',
        'Any modifications to these terms must be made in writing and signed by both parties to be effective.',
        'Service-specific terms in individual agreements take precedence over these general terms in case of conflict.'
      ]
    },
    {
      title: '18. Contact Information',
      content: [
        'For questions about these Terms of Service or our services, please contact us:',
        '• Email: vikram@thevirtualcto.in',
        '• Website: www.thevirtualcto.in',
        '• Address: Bangalore, India',
        'We will respond to inquiries within 2-3 business days.'
      ]
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
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full border border-indigo-200 dark:border-indigo-800 mb-6">
              <i className="ri-file-text-line text-indigo-600 dark:text-indigo-400"></i>
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Legal Information</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Terms of Service
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
              Please read these terms carefully before using our services
            </p>

            <div className="inline-flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
              <i className="ri-calendar-line"></i>
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-8 border border-indigo-200 dark:border-indigo-800 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex-shrink-0">
                  <i className="ri-information-line text-white text-2xl"></i>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Welcome to TheVirtualCTO.in
                  </h2>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    These Terms of Service govern your use of our website and services. By engaging with TheVirtualCTO.in, 
                    you acknowledge that you have read, understood, and agree to be bound by these terms. We are committed 
                    to providing professional technology leadership consulting services with transparency and integrity.
                  </p>
                </div>
              </div>
            </div>

            {/* Terms Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="scroll-mt-24" id={`section-${index + 1}`}>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg mr-4">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    {section.title.replace(/^\d+\.\s*/, '')}
                  </h2>
                  <div className="space-y-4 pl-14">
                    {section.content.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Navigation */}
            <div className="mt-16 bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Quick Navigation
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {sections.map((section, index) => (
                  <a
                    key={index}
                    href={`#section-${index + 1}`}
                    className="flex items-center space-x-3 px-4 py-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all cursor-pointer group"
                  >
                    <div className="w-8 h-8 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 rounded-lg group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-violet-600 transition-all">
                      <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 group-hover:text-white">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {section.title.replace(/^\d+\.\s*/, '')}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-12 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-6">
                <i className="ri-question-line text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Questions About Our Terms?
              </h3>
              <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                If you have any questions about these Terms of Service or need clarification on any points, 
                we're here to help.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-50 transition-all whitespace-nowrap cursor-pointer"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
