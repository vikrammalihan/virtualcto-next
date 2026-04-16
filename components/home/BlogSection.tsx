'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function BlogSection() {
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

  const categories = ['All', 'Strategy', 'Technical', 'Industry'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section id="insights" className="py-16 sm:py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-6">
            <i className="ri-article-line text-indigo-600 dark:text-indigo-400"></i>
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Insights & Articles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Latest from the Blog
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Practical insights on technology leadership, startup scaling, and industry trends from 25+ years of experience.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link key={post.id} href={`/blog/post?id=${post.id}`}>
            <article
              className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
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

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/blog" className="inline-block px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-base font-semibold rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 whitespace-nowrap cursor-pointer">
            View All Articles
            <i className="ri-arrow-right-line ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
