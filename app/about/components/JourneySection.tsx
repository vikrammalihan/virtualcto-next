
export function JourneySection() {
  return (
    <section id="journey" className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              My Journey
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              From Developer to Fractional CTO: 25 Years of Technology Leadership
            </p>
          </div>

          <div className="space-y-8">
            {/* Story Paragraph 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex-shrink-0">
                  <i className="ri-code-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">The Beginning (2000)</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    My journey in technology began in 2000 as a software developer during the dot-com boom. I was fascinated by how code could solve real-world problems and create value for businesses. Those early years taught me the fundamentals of building scalable systems and the importance of clean, maintainable code. I quickly realized that technology leadership wasn't just about writing code—it was about understanding business needs and translating them into technical solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Story Paragraph 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex-shrink-0">
                  <i className="ri-team-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Rising Through Leadership (2005-2014)</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    As I progressed through various technical leadership roles, I discovered my passion for building and mentoring high-performing teams. I learned that great technology is built by great people, and that creating the right culture and processes is just as important as choosing the right tech stack. During this period, I led multiple successful product launches, managed distributed teams across time zones, and developed a deep understanding of what makes startups succeed or fail from a technology perspective.
                  </p>
                </div>
              </div>
            </div>

            {/* Story Paragraph 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex-shrink-0">
                  <i className="ri-rocket-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Brain Tag India Era (2014-2024)</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    For over 10 years, I led Brain Tag India, where I had the privilege of working with 50+ startups across diverse industries. This experience was transformative—I helped founders navigate critical technology decisions, build their first engineering teams, and scale their infrastructure from MVP to millions of users. I witnessed firsthand the challenges that growth-stage startups face: choosing the right architecture, managing technical debt, hiring the right talent, and balancing speed with quality. Each startup taught me something new, and I developed frameworks and methodologies that consistently delivered results.
                  </p>
                </div>
              </div>
            </div>

            {/* Story Paragraph 4 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex-shrink-0">
                  <i className="ri-smartphone-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">CTO at iStreamo Galaxy</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    As CTO at iStreamo Galaxy, I led the development of WowTalent, a platform that connected talent with opportunities in innovative ways. This role challenged me to think at scale—building systems that could handle millions of users while maintaining performance and reliability. I implemented modern cloud architectures, established DevOps practices, and built a culture of continuous improvement. The experience reinforced my belief that technology should serve business goals, not the other way around.
                  </p>
                </div>
              </div>
            </div>

            {/* Story Paragraph 5 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex-shrink-0">
                  <i className="ri-global-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">The Virtual CTO (2024-Present)</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    In 2024, I founded The Virtual CTO to help more startups access the technology leadership they need to succeed. I realized that many growth-stage startups can't afford a full-time CTO but desperately need strategic technology guidance. Today, I serve clients across Africa, Europe, Middle East, and India, helping them make critical technology decisions, build high-performing teams, and scale their infrastructure. My approach is hands-on and practical—I don't just give advice, I roll up my sleeves and work alongside founders to implement solutions that drive real business results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
