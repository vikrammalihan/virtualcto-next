
export function ExpertiseSection() {
  const expertiseAreas = [
    {
      icon: 'ri-terminal-box-line',
      title: 'Technology Strategy',
      description: 'Aligning technology decisions with business goals, creating roadmaps, and making build vs. buy decisions.',
      skills: ['Tech Stack Selection', 'Architecture Planning', 'Vendor Evaluation', 'Cost Optimization']
    },
    {
      icon: 'ri-team-line',
      title: 'Team Building',
      description: 'Recruiting, onboarding, and developing high-performing engineering teams that deliver results.',
      skills: ['Talent Acquisition', 'Team Structure', 'Culture Development', 'Performance Management']
    },
    {
      icon: 'ri-cloud-line',
      title: 'Cloud & Infrastructure',
      description: 'Designing and implementing scalable, reliable, and cost-effective cloud architectures.',
      skills: ['AWS/Azure/GCP', 'DevOps', 'Microservices', 'Container Orchestration']
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Security & Compliance',
      description: 'Implementing security best practices and ensuring compliance with industry standards.',
      skills: ['Security Audits', 'GDPR/HIPAA', 'Penetration Testing', 'Risk Management']
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Scalability & Performance',
      description: 'Optimizing systems to handle growth while maintaining performance and reliability.',
      skills: ['Load Balancing', 'Caching Strategies', 'Database Optimization', 'CDN Implementation']
    },
    {
      icon: 'ri-git-branch-line',
      title: 'Agile & DevOps',
      description: 'Establishing modern development practices that accelerate delivery and improve quality.',
      skills: ['CI/CD Pipelines', 'Agile Methodologies', 'Code Review', 'Automated Testing']
    }
  ];

  return (
    <section id="expertise" className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Areas of Expertise
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Deep technical knowledge combined with business acumen to drive startup success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 group"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/30">
                <i className={`${area.icon} text-white text-2xl`}></i>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {area.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {area.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
