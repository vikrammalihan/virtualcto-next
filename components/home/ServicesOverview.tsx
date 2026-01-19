'use client';

export function ServicesOverview() {
  const services = [
    {
      icon: 'ri-user-star-line',
      title: 'Fractional CTO Services',
      description: 'Strategic technology leadership on-demand. Get C-level expertise without full-time commitment.',
      features: ['Technology Strategy', 'Team Leadership', 'Vendor Management', 'Budget Planning'],
      color: 'from-indigo-600 to-violet-600'
    },
    {
      icon: 'ri-search-eye-line',
      title: 'Technical Due Diligence',
      description: 'Comprehensive technology assessment for investors and acquirers. Identify risks and opportunities.',
      features: ['Code Review', 'Architecture Analysis', 'Team Assessment', 'Risk Evaluation'],
      color: 'from-indigo-600 to-violet-600'
    },
    {
      icon: 'ri-stack-line',
      title: 'Architecture Consulting',
      description: 'Design scalable, secure, and efficient systems. From MVP to enterprise-grade solutions.',
      features: ['System Design', 'Cloud Strategy', 'Security Review', 'Performance Optimization'],
      color: 'from-indigo-600 to-violet-600'
    },
    {
      icon: 'ri-team-line',
      title: 'Team Building & Scaling',
      description: 'Build high-performing engineering teams. Recruitment, training, and culture development.',
      features: ['Hiring Strategy', 'Team Structure', 'Process Setup', 'Culture Building'],
      color: 'from-indigo-600 to-violet-600'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-6">
            <i className="ri-service-line text-indigo-600 dark:text-indigo-400"></i>
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Comprehensive Technology
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Leadership Services
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            End-to-end technology guidance for startups at every stage of growth
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300"
            >
              <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${service.icon} text-white text-3xl`}></i>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex-shrink-0">
                      <i className="ri-check-line text-indigo-600 dark:text-indigo-400 text-sm"></i>
                    </div>
                    <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full px-6 py-3 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white text-sm font-semibold rounded-lg hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
