'use client';

export function BlogGrid() {
  const articles = [
    {
      category: 'Team Building',
      title: 'How to Build High-Performing Engineering Teams in Emerging Markets',
      excerpt: 'Strategies for recruiting, training, and retaining top technical talent across Africa, Middle East, and India.',
      author: 'Vikram Singh Malihan',
      date: 'March 10, 2024',
      readTime: '8 min read',
      image: 'https://readdy.ai/api/search-image?query=Diverse%20software%20engineering%20team%20collaborating%20in%20modern%20office%20space%2C%20professional%20developers%20working%20together%20on%20computers%2C%20contemporary%20workspace%20with%20technology%20focus%2C%20clean%20minimal%20background%20emphasizing%20teamwork%20and%20diversity&width=600&height=400&seq=blog-team-001&orientation=landscape'
    },
    {
      category: 'Technology Strategy',
      title: 'Cloud Architecture Decisions: AWS vs Azure vs GCP for Startups',
      excerpt: 'A comprehensive comparison of major cloud providers and how to choose the right one for your startup\'s needs.',
      author: 'Vikram Singh Malihan',
      date: 'March 5, 2024',
      readTime: '10 min read',
      image: 'https://readdy.ai/api/search-image?query=Modern%20cloud%20computing%20infrastructure%20visualization%20with%20servers%20and%20network%20connections%2C%20abstract%20technology%20concept%20showing%20distributed%20systems%2C%20professional%20digital%20illustration%20with%20clean%20minimal%20aesthetic&width=600&height=400&seq=blog-cloud-001&orientation=landscape'
    },
    {
      category: 'Startup Growth',
      title: 'Technical Due Diligence: What Investors Really Look For',
      excerpt: 'Inside perspective on how investors evaluate technology during funding rounds and acquisitions.',
      author: 'Vikram Singh Malihan',
      date: 'February 28, 2024',
      readTime: '7 min read',
      image: 'https://readdy.ai/api/search-image?query=Business%20investors%20reviewing%20technology%20documents%20and%20analytics%20on%20digital%20screens%2C%20professional%20meeting%20room%20setting%20with%20data%20visualization%2C%20contemporary%20corporate%20environment%20emphasizing%20analysis%20and%20decision%20making&width=600&height=400&seq=blog-diligence-001&orientation=landscape'
    },
    {
      category: 'Regional Insights',
      title: 'The Rise of African Tech Hubs: Opportunities and Challenges',
      excerpt: 'Exploring the growing technology ecosystem across Africa and what it means for startups and investors.',
      author: 'Vikram Singh Malihan',
      date: 'February 20, 2024',
      readTime: '9 min read',
      image: 'https://readdy.ai/api/search-image?query=Modern%20African%20technology%20startup%20office%20with%20innovative%20team%20working%20on%20computers%2C%20vibrant%20workspace%20showing%20entrepreneurship%20and%20innovation%2C%20contemporary%20setting%20emphasizing%20growth%20and%20opportunity%20in%20emerging%20markets&width=600&height=400&seq=blog-africa-001&orientation=landscape'
    },
    {
      category: 'Technology Strategy',
      title: 'Microservices vs Monolith: Making the Right Choice for Your Startup',
      excerpt: 'Understanding when to use microservices architecture and when a monolithic approach makes more sense.',
      author: 'Vikram Singh Malihan',
      date: 'February 15, 2024',
      readTime: '11 min read',
      image: 'https://readdy.ai/api/search-image?query=Software%20architecture%20diagram%20showing%20system%20components%20and%20connections%2C%20abstract%20technical%20illustration%20of%20distributed%20systems%2C%20professional%20visualization%20with%20clean%20minimal%20design%20emphasizing%20structure%20and%20organization&width=600&height=400&seq=blog-architecture-001&orientation=landscape'
    },
    {
      category: 'Team Building',
      title: 'Remote Team Management: Lessons from Leading Distributed Teams',
      excerpt: 'Best practices for managing remote engineering teams across different time zones and cultures.',
      author: 'Vikram Singh Malihan',
      date: 'February 10, 2024',
      readTime: '6 min read',
      image: 'https://readdy.ai/api/search-image?query=Remote%20team%20video%20conference%20call%20with%20diverse%20professionals%20working%20from%20different%20locations%2C%20modern%20home%20office%20setup%20with%20technology%2C%20contemporary%20workspace%20emphasizing%20virtual%20collaboration%20and%20connectivity&width=600&height=400&seq=blog-remote-001&orientation=landscape'
    },
    {
      category: 'Startup Growth',
      title: 'Scaling from MVP to Enterprise: A Technical Roadmap',
      excerpt: 'Step-by-step guide to evolving your technology stack as your startup grows from prototype to production.',
      author: 'Vikram Singh Malihan',
      date: 'February 5, 2024',
      readTime: '12 min read',
      image: 'https://readdy.ai/api/search-image?query=Technology%20growth%20concept%20showing%20progression%20from%20small%20to%20large%20scale%20systems%2C%20abstract%20visualization%20of%20scaling%20infrastructure%2C%20professional%20illustration%20with%20clean%20minimal%20aesthetic%20emphasizing%20expansion%20and%20development&width=600&height=400&seq=blog-scaling-001&orientation=landscape'
    },
    {
      category: 'Regional Insights',
      title: 'Middle East Tech Investment Trends: What CTOs Need to Know',
      excerpt: 'Analysis of technology investment patterns in the Middle East and implications for startup strategy.',
      author: 'Vikram Singh Malihan',
      date: 'January 30, 2024',
      readTime: '8 min read',
      image: 'https://readdy.ai/api/search-image?query=Modern%20Middle%20Eastern%20business%20district%20with%20technology%20companies%20and%20innovation%20centers%2C%20contemporary%20architecture%20showing%20economic%20growth%2C%20professional%20photography%20emphasizing%20investment%20and%20development%20opportunities&width=600&height=400&seq=blog-middleeast-001&orientation=landscape'
    },
    {
      category: 'Technology Strategy',
      title: 'Security Best Practices for Startups: A Practical Guide',
      excerpt: 'Essential security measures every startup should implement from day one to protect data and build trust.',
      author: 'Vikram Singh Malihan',
      date: 'January 25, 2024',
      readTime: '10 min read',
      image: 'https://readdy.ai/api/search-image?query=Cybersecurity%20concept%20with%20digital%20lock%20and%20shield%20protecting%20data%2C%20abstract%20technology%20illustration%20showing%20security%20measures%2C%20professional%20visualization%20with%20clean%20minimal%20design%20emphasizing%20protection%20and%20safety&width=600&height=400&seq=blog-security-001&orientation=landscape'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-1 h-6 bg-gradient-to-b from-indigo-600 to-violet-600 rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Latest Articles</h2>
          </div>

          <div className="hidden sm:flex items-center space-x-2">
            <span className="text-sm text-slate-600 dark:text-slate-400">Sort by:</span>
            <select className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 cursor-pointer">
              <option>Latest</option>
              <option>Most Popular</option>
              <option>Most Read</option>
            </select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-indigo-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-full flex-shrink-0">
                      <span className="text-white text-xs font-bold">VM</span>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{article.date}</div>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{article.readTime}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold rounded-lg hover:shadow-xl hover:shadow-indigo-500/30 transition-all whitespace-nowrap cursor-pointer">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
}
