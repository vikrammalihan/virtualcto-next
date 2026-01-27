export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current technical setup, codebase, infrastructure, and team to understand your full technical story.',
      duration: '1-2 days',
      icon: 'ri-search-line'
    },
    {
      number: '02',
      title: 'Documentation Creation',
      description: 'We create comprehensive technical documentation covering architecture, tech stack, security, scalability, and development processes.',
      duration: '3-5 days',
      icon: 'ri-file-edit-line'
    },
    {
      number: '03',
      title: 'Visual Architecture Design',
      description: 'Professional diagrams and visual representations of your system architecture, data flows, and infrastructure setup.',
      duration: '2-3 days',
      icon: 'ri-layout-line'
    },
    {
      number: '04',
      title: 'Q&A Strategy Development',
      description: 'We prepare you for technical questions investors will ask, with clear answers and supporting materials.',
      duration: '1-2 days',
      icon: 'ri-question-line'
    },
    {
      number: '05',
      title: 'Review & Refinement',
      description: 'We review all materials with you, refine based on your feedback, and ensure everything aligns with your pitch.',
      duration: '1-2 days',
      icon: 'ri-refresh-line'
    },
    {
      number: '06',
      title: 'Pitch Support',
      description: 'Optional: We can join your investor meetings to answer technical questions and provide CTO-level credibility.',
      duration: 'As needed',
      icon: 'ri-presentation-line'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A structured approach to preparing your technical materials for investor presentations, typically completed in 2-3 weeks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className={`${step.icon} text-2xl text-white`}></i>
                </div>
                <div className="text-5xl font-bold text-emerald-100">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {step.description}
              </p>
              
              <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
                <i className="ri-time-line"></i>
                <span>{step.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}