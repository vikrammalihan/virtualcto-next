'use client';

export function WhyChooseSection() {
  const reasons = [
    {
      icon: 'ri-global-line',
      title: 'Global Reach',
      description: 'Deep understanding of technology ecosystems across Africa, Europe, Middle East, and India with local market insights.'
    },
    {
      icon: 'ri-lightbulb-flash-line',
      title: 'Multi-Industry Expertise',
      description: 'Proven success across FinTech, HealthTech, EdTech, CleanTech, iGaming, and more diverse sectors.'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Startup-Focused',
      description: 'Specialized in growth-stage challenges with practical, actionable solutions that drive results.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Risk Mitigation',
      description: 'Identify and address technical risks before they become costly problems for your business.'
    },
    {
      icon: 'ri-team-line',
      title: 'Team Development',
      description: 'Build and scale high-performing engineering teams with proven hiring and management strategies.'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Scalable Solutions',
      description: 'Architecture and processes designed to grow with your business from MVP to enterprise scale.'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-6">
              <i className="ri-user-star-line text-indigo-600 dark:text-indigo-400"></i>
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Why Choose Me</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Your Strategic Technology
              <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Partner for Growth
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              With over 25 years of IT leadership experience, I&apos;ve helped 100+ startups navigate complex technology decisions, build exceptional teams, and scale their platforms successfully.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              My approach combines strategic thinking with hands-on execution, ensuring your technology investments deliver maximum value and competitive advantage in your market.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/why-choose-001.jpg"
              alt="Technology Leadership"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover object-top"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl -z-10"></div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg mb-4">
                <i className={`${reason.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
