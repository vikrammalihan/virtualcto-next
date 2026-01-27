export default function PricingSection() {
  const packages = [
    {
      name: 'Essential',
      price: '$4,999',
      description: 'Perfect for pre-seed and seed stage startups',
      features: [
        'Technical Documentation Package',
        'System Architecture Diagrams',
        'Tech Stack Overview',
        'Basic Q&A Preparation',
        'Security & Compliance Review',
        '2 Revision Rounds',
        'Email Support',
        '2-Week Delivery'
      ],
      highlighted: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$8,999',
      description: 'Most popular for Series A fundraising',
      features: [
        'Everything in Essential',
        'Comprehensive Architecture Diagrams',
        'Detailed Technical Roadmap',
        'Advanced Q&A Strategy',
        'Competitive Technical Analysis',
        'Scalability Planning',
        'Team & Resource Planning',
        'Technical Pitch Deck Slides',
        'Unlimited Revisions',
        'Priority Support',
        '10-Day Delivery'
      ],
      highlighted: true,
      cta: 'Most Popular'
    },
    {
      name: 'Premium',
      price: '$14,999',
      description: 'Complete support for Series A+ rounds',
      features: [
        'Everything in Professional',
        'CTO Attendance at Investor Meetings',
        'Live Technical Q&A Support',
        'Due Diligence Preparation',
        'Code Review & Quality Report',
        'Performance Optimization Plan',
        'Custom Technical Presentations',
        'Investor-Specific Materials',
        '60-Day Post-Fundraising Support',
        'Dedicated CTO Advisor',
        '1-Week Delivery'
      ],
      highlighted: false,
      cta: 'Premium Support'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Investment Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the package that matches your fundraising stage and needs. All packages include our satisfaction guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                pkg.highlighted
                  ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-2xl scale-105'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {pkg.highlighted && (
                <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                  Most Popular
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-2 ${pkg.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {pkg.name}
              </h3>
              
              <div className="mb-4">
                <span className={`text-4xl font-bold ${pkg.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.price}
                </span>
              </div>
              
              <p className={`mb-6 ${pkg.highlighted ? 'text-emerald-50' : 'text-gray-600'}`}>
                {pkg.description}
              </p>
              
              <a
                href="/book-consultation"
                className={`block w-full py-3 rounded-lg font-semibold text-center mb-6 transition-all whitespace-nowrap cursor-pointer ${
                  pkg.highlighted
                    ? 'bg-white text-emerald-600 hover:bg-gray-50'
                    : 'bg-emerald-500 text-white hover:bg-emerald-600'
                }`}
              >
                {pkg.cta}
              </a>
              
              <ul className="space-y-3">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <i className={`ri-check-line text-lg mt-0.5 flex-shrink-0 ${
                      pkg.highlighted ? 'text-emerald-200' : 'text-emerald-500'
                    }`}></i>
                    <span className={`text-sm ${pkg.highlighted ? 'text-white' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-200 text-center">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-shield-check-line text-3xl text-white"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            100% Satisfaction Guarantee
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            If you're not completely satisfied with the quality of our deliverables, we'll revise them until you are or provide a full refund. Your success is our success.
          </p>
        </div>
      </div>
    </section>
  );
}