export default function WhyChooseSection() {
  const reasons = [
    {
      icon: 'ri-funds-line',
      title: 'Proven Fundraising Success',
      description: 'We\'ve helped startups raise over $50M by presenting their technical capabilities in ways that resonate with investors.',
      stat: '$50M+',
      statLabel: 'Raised'
    },
    {
      icon: 'ri-user-star-line',
      title: 'Investor Perspective',
      description: 'Our team includes former VCs and technical advisors who know exactly what investors look for during technical due diligence.',
      stat: '15+',
      statLabel: 'Years Experience'
    },
    {
      icon: 'ri-speed-line',
      title: 'Fast Turnaround',
      description: 'We understand fundraising timelines are tight. Get your complete technical package ready in 2-3 weeks.',
      stat: '2-3',
      statLabel: 'Weeks'
    },
    {
      icon: 'ri-shield-star-line',
      title: 'Technical Credibility',
      description: 'Our CTOs and senior engineers bring decades of experience building and scaling successful tech companies.',
      stat: '100+',
      statLabel: 'Startups Helped'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us for Your Fundraising
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with deep understanding of what investors need to see.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className={`${reason.icon} text-3xl text-white`}></i>
              </div>
              <div className="text-3xl font-bold text-emerald-600 mb-1">
                {reason.stat}
              </div>
              <div className="text-sm text-gray-500 mb-4">
                {reason.statLabel}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-10 border border-emerald-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6 justify-center">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="ri-star-fill text-yellow-400 text-xl"></i>
              ))}
            </div>
            <blockquote className="text-xl text-gray-800 text-center mb-6 leading-relaxed">
              "The technical documentation and architecture diagrams they prepared were instrumental in closing our Series A. Investors were impressed with the clarity and professionalism of our technical presentation. Worth every penny."
            </blockquote>
            <div className="text-center">
              <div className="font-bold text-gray-900">Sarah Chen</div>
              <div className="text-gray-600">CEO, HealthTech Startup</div>
              <div className="text-sm text-emerald-600 mt-1">Raised $8M Series A</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}