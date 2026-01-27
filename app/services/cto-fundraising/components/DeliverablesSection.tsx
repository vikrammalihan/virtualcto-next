export default function DeliverablesSection() {
  const deliverables = [
    {
      category: 'Technical Documentation',
      items: [
        'Executive Technical Summary (2-3 pages)',
        'Detailed Architecture Documentation',
        'Tech Stack & Infrastructure Overview',
        'Security & Compliance Documentation',
        'API & Integration Documentation',
        'Development Process & Methodology'
      ]
    },
    {
      category: 'Visual Materials',
      items: [
        'System Architecture Diagrams',
        'Data Flow & Database Schema',
        'Infrastructure & Deployment Diagrams',
        'User Journey & Technical Flows',
        'Scalability Architecture Plans',
        'Integration & API Maps'
      ]
    },
    {
      category: 'Strategic Documents',
      items: [
        'Technical Roadmap (12-24 months)',
        'Scalability Plan & Milestones',
        'Team Growth & Hiring Plan',
        'Technology Risk Assessment',
        'Competitive Technical Analysis',
        'Budget & Resource Allocation'
      ]
    },
    {
      category: 'Investor Preparation',
      items: [
        'Technical Q&A Preparation Guide',
        'Common Investor Questions & Answers',
        'Technical Due Diligence Checklist',
        'Code Quality & Testing Reports',
        'Performance & Metrics Dashboard',
        'Technical Pitch Deck Slides'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Deliverables Package
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to demonstrate technical excellence and credibility to investors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {deliverables.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <i className="ri-file-list-3-line text-xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {section.category}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <i className="ri-check-line text-emerald-500 text-lg mt-0.5 flex-shrink-0"></i>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-emerald-50 rounded-xl p-8 border border-emerald-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <i className="ri-gift-line text-2xl text-white"></i>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Bonus: Post-Fundraising Support
              </h4>
              <p className="text-gray-700 leading-relaxed">
                After successful fundraising, we provide 30 days of follow-up support to help answer any additional technical questions from investors and assist with technical due diligence processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}