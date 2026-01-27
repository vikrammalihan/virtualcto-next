import React from 'react';



export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Hero Content */}
      <div className="relative px-4 sm:px-6 py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-8">
              <i className="ri-funding-line text-indigo-600 dark:text-indigo-400"></i>
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Fundraising Success</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
              CTO-as-a-Service for
              <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Fundraising Success
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-3xl mx-auto">
              Prepare comprehensive tech documentation, architecture diagrams, and investor Q&A materials that help startups secure seed to Series A funding.
            </p>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <i className="ri-file-text-line text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Complete Tech Docs</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Comprehensive technical documentation that investors expect to see.</p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <i className="ri-flow-chart text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Architecture Diagrams</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Clear visual representations of your technology stack and infrastructure.</p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <i className="ri-question-answer-line text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Investor Q&A Prep</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Strategic preparation for technical due diligence questions.</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book-consultation"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-base font-semibold rounded-lg hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 whitespace-nowrap cursor-pointer text-center"
              >
                Schedule Free Consultation
              </a>
              <a
                href="/case-studies"
                className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-base font-semibold rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 whitespace-nowrap cursor-pointer text-center"
              >
                View Success Stories
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-50 to-transparent dark:from-indigo-900/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet-50 to-transparent dark:from-violet-900/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}