'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Footer } from '@/components/shared';

export default function PrivacyPolicyPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

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
              
              <button
                onClick={() => router.push('/book-consultation')}
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
                <a href="/services" className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">Services</a>
                <a href="/case-studies" className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">Case Studies</a>
                <a href="/blog" className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">Blog</a>
                <a href="/contact" className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">Contact</a>
                <button
                  onClick={() => router.push('/book-consultation')}
                  className="mx-4 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-24 sm:pt-32">
        {/* Hero Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-6">
                <i className="ri-shield-check-line text-indigo-600 dark:text-indigo-400"></i>
                <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Your Privacy Matters</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Privacy Policy
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                This Privacy Policy explains how TheVirtualCTO collects, uses, and protects your information when you use our services.
              </p>
              
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Last updated: December 2024
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert prose-lg">
              
              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg mr-4">
                    <i className="ri-information-line text-white text-lg"></i>
                  </div>
                  Information We Collect
                </h2>
                
                <div className="space-y-6 text-slate-600 dark:text-slate-400">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Personal Information</h3>
                    <p>When you contact us or use our services, we may collect:</p>
                    <ul className="list-disc list-inside space-y-2 mt-3">
                      <li>Name and contact information (email, phone number)</li>
                      <li>Company name and business information</li>
                      <li>Project details and technical requirements</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Usage Information</h3>
                    <p>We automatically collect certain information when you visit our website:</p>
                    <ul className="list-disc list-inside space-y-2 mt-3">
                      <li>IP address and location data</li>
                      <li>Browser type and operating system</li>
                      <li>Pages visited and time spent on site</li>
                      <li>Referral sources and exit pages</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg mr-4">
                    <i className="ri-settings-3-line text-white text-lg"></i>
                  </div>
                  How We Use Your Information
                </h2>
                
                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                  <p>We use the collected information to:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Provide and improve our fractional CTO services</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Schedule consultations and manage client relationships</li>
                    <li>Send relevant updates about our services (with your consent)</li>
                    <li>Analyze website usage to improve user experience</li>
                    <li>Comply with legal obligations and protect our rights</li>
                  </ul>
                </div>
              </div>

              {/* Information Sharing */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg mr-4">
                    <i className="ri-share-line text-white text-lg"></i>
                  </div>
                  Information Sharing
                </h2>
                
                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                  <p>We do not sell, trade, or rent your personal information. We may share information only in these limited circumstances:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Service Providers:</strong> Trusted third parties who help us operate our business (email services, analytics, etc.)</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, sale, or transfer of business assets</li>
                    <li><strong>With Your Consent:</strong> When you explicitly agree to share information</li>
                  </ul>
                </div>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg mr-4">
                    <i className="ri-shield-check-line text-white text-lg"></i>
                  </div>
                  Data Security
                </h2>
                
                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                  <p>We implement appropriate security measures to protect your personal information:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Limited access to personal information on a need-to-know basis</li>
                    <li>Secure hosting and data storage practices</li>
                  </ul>
                  <p className="mt-4">However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
                </div>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg mr-4">
                    <i className="ri-user-settings-line text-white text-lg"></i>
                  </div>
                  Your Rights
                </h2>
                
                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                  <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Access:</strong> Request copies of your personal information</li>
                    <li><strong>Rectification:</strong> Correct inaccurate or incomplete information</li>
                    <li><strong>Erasure:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                    <li><strong>Objection:</strong> Object to processing of your personal information</li>
                    <li><strong>Restriction:</strong> Request restriction of processing under certain circumstances</li>
                  </ul>
                  <p className="mt-4">To exercise these rights, please contact us using the information provided below.</p>
                </div>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg mr-4">
                    <i className="ri-server-line text-white text-lg"></i>
                  </div>
                  Cookies and Tracking
                </h2>
                
                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                  <p>Our website uses cookies and similar technologies to:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Improve website functionality and user experience</li>
                    <li>Provide relevant content and advertisements</li>
                  </ul>
                  <p className="mt-4">You can control cookies through your browser settings, but disabling them may affect website functionality.</p>
                </div>
              </div>

              {/* Third-Party Links */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg mr-4">
                    <i className="ri-external-link-line text-white text-lg"></i>
                  </div>
                  Third-Party Links
                </h2>
                
                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                  <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
                </div>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg mr-4">
                    <i className="ri-shield-user-line text-white text-lg"></i>
                  </div>
                  Children's Privacy
                </h2>
                
                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                  <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete such information.</p>
                </div>
              </div>

              {/* Policy Changes */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg mr-4">
                    <i className="ri-refresh-line text-white text-lg"></i>
                  </div>
                  Policy Updates
                </h2>
                
                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                  <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Posting the updated policy on our website</li>
                    <li>Updating the "Last updated" date at the top of this policy</li>
                    <li>Sending email notification for significant changes (if you've provided your email)</li>
                  </ul>
                  <p className="mt-4">Your continued use of our services after any changes indicates your acceptance of the updated policy.</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg mr-4">
                    <i className="ri-phone-line text-white text-lg"></i>
                  </div>
                  Contact Us
                </h2>
                
                <div className="space-y-4 text-slate-600 dark:text-slate-400">
                  <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <i className="ri-user-line text-indigo-600 dark:text-indigo-400"></i>
                        <span><strong>Vikram Singh Malihan</strong></span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="ri-building-line text-indigo-600 dark:text-indigo-400"></i>
                        <span>TheVirtualCTO</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="ri-mail-line text-indigo-600 dark:text-indigo-400"></i>
                        <a href="mailto:privacy@thevirtualcto.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">privacy@thevirtualcto.com</a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="ri-phone-line text-indigo-600 dark:text-indigo-400"></i>
                        <span>Available during consultation hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Questions About Your Privacy?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                I'm committed to protecting your privacy and being transparent about our data practices. Feel free to reach out with any questions.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-base font-semibold rounded-lg hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Contact Me
                <i className="ri-arrow-right-line ml-2"></i>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}