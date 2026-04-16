'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';

export default function BlogPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const blogPosts = [
    {
      id: 1,
      category: 'Strategy',
      title: 'Building a Scalable Tech Stack for African Startups',
      excerpt: 'Key considerations when choosing technology infrastructure for emerging markets, focusing on cost-efficiency and reliability.',
      author: 'Vikram Singh Malihan',
      date: 'March 15, 2024',
      readTime: '8 min read',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/blog-001.jpg',
      tags: ['Infrastructure', 'Startups', 'Africa']
    },
    {
      id: 2,
      category: 'Technical',
      title: 'Microservices vs Monolith: Making the Right Choice',
      excerpt: 'A practical guide to architectural decisions for growth-stage companies. Learn when to scale and when to keep it simple.',
      author: 'Vikram Singh Malihan',
      date: 'March 10, 2024',
      readTime: '12 min read',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/blog-002.jpg',
      tags: ['Architecture', 'Best Practices', 'Scaling']
    },
    {
      id: 3,
      category: 'Industry',
      title: 'FinTech Compliance: Navigating Regulations Across Regions',
      excerpt: 'Understanding regulatory requirements for financial technology across Africa, Europe, and the Middle East markets.',
      author: 'Vikram Singh Malihan',
      date: 'March 5, 2024',
      readTime: '10 min read',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/blog-003.jpg',
      tags: ['FinTech', 'Compliance', 'Regulations']
    },
{
      id: 4,
      category: 'Strategy',
      title: 'Building High-Performance Engineering Teams Remotely',
      excerpt: 'Proven strategies for recruiting, onboarding, and managing distributed technical teams across multiple time zones.',
      author: 'Vikram Singh Malihan',
      date: 'February 28, 2024',
      readTime: '9 min read',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/blog-004.jpg',
      tags: ['Team Building', 'Remote Work', 'Leadership']
    },
    {
      id: 5,
      category: 'Technical',
      title: 'API Security Best Practices for Startups',
      excerpt: 'Essential security measures every startup should implement to protect their APIs and customer data from day one.',
      author: 'Vikram Singh Malihan',
      date: 'February 20, 2024',
      readTime: '11 min read',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/blog-005.jpg',
      tags: ['Security', 'APIs', 'Best Practices']
    },
    {
      id: 6,
      category: 'Industry',
      title: 'HealthTech Innovation: Lessons from Successful Implementations',
      excerpt: 'Real-world insights from deploying healthcare technology solutions across emerging markets with limited infrastructure.',
      author: 'Vikram Singh Malihan',
      date: 'February 15, 2024',
      readTime: '13 min read',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/blog-006.jpg',
      tags: ['HealthTech', 'Innovation', 'Case Study']
    }

  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-100/40 via-violet-50/30 to-transparent dark:from-indigo-900/20 dark:via-violet-900/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-violet-100/40 via-indigo-50/30 to-transparent dark:from-violet-900/20 dark:via-indigo-900/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-full mb-6">
            <i className="ri-quill-pen-line text-indigo-600 dark:text-indigo-400 text-sm"></i>
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Insights & Stories</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
            Technology Leadership{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Expert perspectives on scaling startups, building teams, and navigating technology decisions. Learn from 25+ years of experience across global markets.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <i className="ri-search-line text-xl text-slate-400"></i>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, topics, or keywords..."
                className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-lg text-sm transition-all"
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-2 px-6 my-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-medium transition-colors cursor-pointer text-sm whitespace-nowrap"
              >
                Search
              </button>
            </div>
          </form>

          {/* Popular Topics */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-slate-500 dark:text-slate-400">Popular:</span>
            {['Startup Strategy', 'Fundraising', 'Team Building', 'GDPR', 'Market Expansion'].map((topic) => (
              <button
                key={topic}
                className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-teal-900/30 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 rounded-full text-sm font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/post?id=${post.id}`}>
              <article
                className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-indigo-500 text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-full">
                        <span className="text-white text-xs font-semibold">VS</span>
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        {post.date}
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-slate-600 dark:text-slate-400">
                      <i className="ri-time-line text-sm"></i>
                      <span className="text-xs">{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
