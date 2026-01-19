
export function ValuesSection() {
  const values = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Pragmatic Innovation',
      description: 'I believe in using proven technologies that solve real problems, not chasing trends. Innovation should serve business goals, not the other way around.'
    },
    {
      icon: 'ri-user-heart-line',
      title: 'People First',
      description: 'Great technology is built by great people. I prioritize building strong teams, fostering collaboration, and creating environments where engineers thrive.'
    },
    {
      icon: 'ri-eye-line',
      title: 'Transparency',
      description: 'I communicate openly about challenges, risks, and trade-offs. Founders deserve honest advice, not sugar-coated promises.'
    },
    {
      icon: 'ri-speed-line',
      title: 'Bias for Action',
      description: 'Startups need to move fast. I help teams make informed decisions quickly and implement solutions that deliver immediate value.'
    },
    {
      icon: 'ri-scales-line',
      title: 'Long-term Thinking',
      description: 'While speed matters, I always consider long-term implications. Technical debt is real, and I help teams balance short-term needs with sustainable growth.'
    },
    {
      icon: 'ri-book-open-line',
      title: 'Continuous Learning',
      description: 'Technology evolves rapidly. I stay current with industry trends, best practices, and emerging technologies to provide the best guidance.'
    }
  ];

  return (
    <section id="values" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            My Core Values
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            The principles that guide my approach to technology leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl mb-6 shadow-lg shadow-indigo-500/30">
                <i className={`${value.icon} text-white text-2xl`}></i>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {value.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
