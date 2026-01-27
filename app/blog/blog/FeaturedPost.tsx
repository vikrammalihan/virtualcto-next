'use client';

export function FeaturedPost() {
  return (
    <section className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-1 h-6 bg-gradient-to-b from-indigo-600 to-violet-600 rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Featured Article</h2>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20technology%20startup%20office%20with%20diverse%20team%20collaborating%20on%20innovative%20software%20development%20project%2C%20professional%20workspace%20with%20digital%20screens%20showing%20code%20and%20analytics%2C%20contemporary%20business%20environment%20emphasizing%20teamwork%20and%20innovation%2C%20clean%20minimal%20aesthetic%20with%20natural%20lighting&width=800&height=600&seq=blog-featured-001&orientation=landscape"
                alt="Featured Article"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs font-semibold rounded-full">
                  Featured
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold rounded-full">
                  Technology Strategy
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">12 min read</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                Building a Scalable Technology Foundation for Growth-Stage Startups
              </h3>

              <p className="text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Learn the essential principles and practices for creating a technology infrastructure that can scale with your startup's growth. From architecture decisions to team structure, discover what it takes to build for the long term.
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-full">
                    <span className="text-white text-sm font-bold">VM</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">Vikram Singh Malihan</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">March 15, 2024</div>
                  </div>
                </div>

                <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all whitespace-nowrap cursor-pointer">
                  Read Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
