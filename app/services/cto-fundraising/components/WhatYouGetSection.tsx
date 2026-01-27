
export default function WhatYouGetSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-800/50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            What You Get
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive package designed to impress investors and demonstrate your technical readiness for scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: 'ri-file-text-line',
              title: 'Technical Documentation',
              description: 'Complete API documentation, system architecture overview, and development standards',
              features: ['API Documentation', 'System Architecture', 'Code Standards', 'Security Protocols']
            },
            {
              icon: 'ri-flow-chart',
              title: 'Architecture Diagrams',
              description: 'Professional system diagrams that clearly communicate your technical infrastructure',
              features: ['System Architecture', 'Data Flow Diagrams', 'Infrastructure Layout', 'Integration Maps']
            },
            {
              icon: 'ri-shield-check-line',
              title: 'Security Assessment',
              description: 'Comprehensive security audit and recommendations for enterprise-grade protection',
              features: ['Security Audit', 'Compliance Check', 'Risk Assessment', 'Mitigation Plan']
            },
            {
              icon: 'ri-line-chart-line',
              title: 'Scalability Plan',
              description: 'Detailed roadmap for scaling your technology as your business grows',
              features: ['Growth Planning', 'Performance Metrics', 'Resource Scaling', 'Cost Projections']
            },
            {
              icon: 'ri-team-line',
              title: 'Team Assessment',
              description: 'Analysis of your current team structure and recommendations for growth',
              features: ['Skills Gap Analysis', 'Hiring Roadmap', 'Team Structure', 'Role Definitions']
            },
            {
              icon: 'ri-question-answer-line',
              title: 'Q&A Preparation',
              description: 'Strategic preparation for technical due diligence questions from investors',
              features: ['Question Bank', 'Response Templates', 'Mock Sessions', 'Presentation Deck']
            }
          ].map((item, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center mb-6">
                <i className={`${item.icon} text-white text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{item.description}</p>
              
              <ul className="space-y-2">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <i className="ri-check-line text-indigo-600 dark:text-indigo-400 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
