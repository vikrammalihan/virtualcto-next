
export function ExperienceTimeline() {
  const experiences = [
    {
      year: '2024-Present',
      role: 'Founder & Fractional CTO',
      company: 'The Virtual CTO',
      description: 'Providing strategic technology leadership to growth-stage startups across Africa, Europe, Middle East, and India. Helping founders make critical technology decisions, build high-performing teams, and scale their infrastructure.',
      icon: 'ri-building-line',
      color: 'from-indigo-600 to-violet-600'
    },
    {
      year: '2020-2024',
      role: 'Chief Technology Officer',
      company: 'iStreamo Galaxy (WowTalent)',
      description: 'Led technology strategy and product development for WowTalent platform. Built scalable cloud infrastructure, established DevOps practices, and managed distributed engineering teams across multiple time zones.',
      icon: 'ri-smartphone-line',
      color: 'from-violet-600 to-purple-600'
    },
    {
      year: '2014-2024',
      role: 'Technology Leadership',
      company: 'Brain Tag India',
      description: 'Guided 50+ startups through critical technology decisions and team building. Provided fractional CTO services, technical due diligence, architecture consulting, and team building across diverse industries.',
      icon: 'ri-rocket-line',
      color: 'from-purple-600 to-pink-600'
    },
    {
      year: '2005-2014',
      role: 'Senior Technical Leadership Roles',
      company: 'Various Technology Companies',
      description: 'Progressed through various technical leadership positions, managing engineering teams, leading product development, and implementing scalable architectures for enterprise and startup environments.',
      icon: 'ri-team-line',
      color: 'from-pink-600 to-rose-600'
    },
    {
      year: '2000-2005',
      role: 'Software Developer',
      company: 'Early Career',
      description: 'Started career as a software developer during the dot-com era. Built foundational skills in software engineering, system design, and problem-solving that would shape future leadership approach.',
      icon: 'ri-code-line',
      color: 'from-rose-600 to-red-600'
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A timeline of key roles and achievements throughout my 25-year technology career
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 via-violet-600 to-pink-600 hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-8 w-4 h-4 bg-white dark:bg-slate-900 border-4 border-indigo-600 rounded-full -translate-x-1/2 hidden md:block"></div>

                  {/* Content Card */}
                  <div className="md:ml-20 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className={`w-14 h-14 flex items-center justify-center bg-gradient-to-br ${exp.color} rounded-xl flex-shrink-0 shadow-lg`}>
                        <i className={`${exp.icon} text-white text-2xl`}></i>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                            <p className="text-indigo-600 dark:text-indigo-400 font-medium mt-1">{exp.company}</p>
                          </div>
                          <span className="inline-block px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-full mt-2 sm:mt-0">
                            {exp.year}
                          </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
