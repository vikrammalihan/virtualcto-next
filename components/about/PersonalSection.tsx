'use client';

export function PersonalSection() {
  const interests = [
    {
      icon: 'ri-book-open-line',
      title: 'Continuous Learning',
      description: 'Always exploring new technologies, reading tech blogs, and staying current with industry trends.'
    },
    {
      icon: 'ri-user-voice-line',
      title: 'Mentorship',
      description: 'Passionate about mentoring young engineers and helping them grow their careers in technology.'
    },
    {
      icon: 'ri-global-line',
      title: 'Global Perspective',
      description: 'Working with clients across continents has given me a unique understanding of diverse markets and cultures.'
    },
    {
      icon: 'ri-community-line',
      title: 'Community Building',
      description: 'Active in tech communities, sharing knowledge through talks, workshops, and online content.'
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Beyond Technology
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            What drives me outside of work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl mx-auto mb-6 shadow-lg shadow-indigo-500/30">
                <i className={`${interest.icon} text-white text-2xl`}></i>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                {interest.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
