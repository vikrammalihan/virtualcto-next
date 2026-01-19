'use client';
import { useState, useEffect } from 'react';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';

export default function BookConsultationPage() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    role: '',
    industry: '',
    serviceInterest: '',
    projectType: '',
    budget: '',
    timeline: '',
    teamSize: '',
    challenges: '',
    goals: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const form = e.currentTarget;
      const formDataToSubmit = new FormData(form);
      
      const response = await fetch('https://readdy.ai/api/form/d5n2k2944v703eh919cg', {
        method: 'POST',
        body: new URLSearchParams(formDataToSubmit as any),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          website: '',
          role: '',
          industry: '',
          serviceInterest: '',
          projectType: '',
          budget: '',
          timeline: '',
          teamSize: '',
          challenges: '',
          goals: '',
          additionalInfo: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
          <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-violet-600/5 to-purple-600/5"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-6">
            <i className="ri-calendar-check-line text-indigo-600 dark:text-indigo-400"></i>
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Book Your Free Consultation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Let's Build Something
            <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Share your vision with us and discover how our 25+ years of expertise can transform your technology challenges into competitive advantages.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
                  <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700/50 p-8 sm:p-12 backdrop-blur-sm">
            <form id="consultation-form" data-readdy-form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
                    <i className="ri-user-line text-white text-lg"></i>
                  </div>
                  Personal Information
                </h2>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
                      placeholder="John Smith"
                    />
                  </div>

                  <div >
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Your Role <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm cursor-pointer"
                    >
                      <option value="">Select your role</option>
                      <option value="CEO/Founder">CEO/Founder</option>
                      <option value="CTO/Technical Leader">CTO/Technical Leader</option>
                      <option value="Product Manager">Product Manager</option>
                      <option value="Business Owner">Business Owner</option>
                      <option value="Investor">Investor</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center">
                    <i className="ri-building-line text-white text-lg"></i>
                  </div>
                  Company Information
                </h2>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
                      placeholder="Your Company Ltd"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Company Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
                      placeholder="https://yourcompany.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Industry <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm cursor-pointer"
                    >
                      <option value="">Select your industry</option>
                      <option value="FinTech">FinTech</option>
                      <option value="HealthTech">HealthTech</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="SaaS">SaaS</option>
                      <option value="EdTech">EdTech</option>
                      <option value="PropTech">PropTech</option>
                      <option value="Web3/Blockchain">Web3/Blockchain</option>
                      <option value="AI/ML">AI/ML</option>
                      <option value="IoT">IoT</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="teamSize" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Team Size <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm cursor-pointer"
                    >
                      <option value="">Select team size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                    <i className="ri-folder-line text-white text-lg"></i>
                  </div>
                  Project Details
                </h2>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="serviceInterest" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Service Interest <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      <option value="Fractional CTO">Fractional CTO</option>
                      <option value="Architecture Consulting">Architecture Consulting</option>
                      <option value="Technical Due Diligence">Technical Due Diligence</option>
                      <option value="Team Building">Team Building</option>
                      <option value="Technology Strategy">Technology Strategy</option>
                      <option value="Multiple Services">Multiple Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Project Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm cursor-pointer"
                      >
                        <option value="">Select project type</option>
                        <option value="New Project">New Project</option>
                        <option value="Existing Project">Existing Project</option>
                        <option value="System Modernization">System Modernization</option>
                        <option value="Technical Assessment">Technical Assessment</option>
                        <option value="Team Expansion">Team Expansion</option>
                        <option value="Not Sure Yet">Not Sure Yet</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Budget Range <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm cursor-pointer"
                      >
                        <option value="">Select budget range</option>
                        <option value="Under $25k">Under $25k</option>
                        <option value="$25k - $50k">$25k - $50k</option>
                        <option value="$50k - $100k">$50k - $100k</option>
                        <option value="$100k - $250k">$100k - $250k</option>
                        <option value="$250k+">$250k+</option>
                        <option value="Not Sure Yet">Not Sure Yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Timeline <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm cursor-pointer"
                    >
                      <option value="">Select timeline</option>
                      <option value="Urgent (Within 1 month)">Urgent (Within 1 month)</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6+ months">6+ months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="challenges" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Current Challenges <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="challenges"
                      name="challenges"
                      value={formData.challenges}
                      onChange={handleChange}
                      required
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm resize-none"
                      placeholder="Describe the key challenges you're facing... (Max 500 characters)"
                    />
                    <div className="text-right text-xs text-slate-500 mt-1">
                      {formData.challenges.length}/500 characters
                    </div>
                  </div>

                  <div>
                    <label htmlFor="goals" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Project Goals <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleChange}
                      required
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm resize-none"
                      placeholder="What do you want to achieve? (Max 500 characters)"
                    />
                    <div className="text-right text-xs text-slate-500 mt-1">
                      {formData.goals.length}/500 characters
                    </div>
                  </div>

                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm resize-none"
                      placeholder="Any other details you'd like to share... (Max 500 characters)"
                    />
                    <div className="text-right text-xs text-slate-500 mt-1">
                      {formData.additionalInfo.length}/500 characters
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line text-xl animate-spin"></i>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-fill text-xl"></i>
                      Book Free Consultation
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-green-600 dark:text-green-400 text-xl flex-shrink-0 mt-0.5"></i>
                    <div>
                      <p className="font-semibold text-green-800 dark:text-green-300">Thank you for your interest!</p>
                      <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                        We've received your consultation request and will get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3">
                    <i className="ri-error-warning-fill text-red-600 dark:text-red-400 text-xl flex-shrink-0 mt-0.5"></i>
                    <div>
                      <p className="font-semibold text-red-800 dark:text-red-300">Submission failed</p>
                      <p className="text-sm text-red-700 dark:text-red-400 mt-1">
                        Please try again or contact us directly at hello@techflow.com
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <p className="text-xs text-center text-slate-500 dark:text-slate-400">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-white text-xl"></i>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Confidential</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Your information is secure and confidential</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-white text-xl"></i>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Quick Response</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">We'll respond within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-4">
                <i className="ri-gift-line text-white text-xl"></i>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Free Consultation</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">No strings attached, just value</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
