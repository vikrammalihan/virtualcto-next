'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Footer } from '@/components/shared/Footer';
import { Navigation } from '@/components/shared/Navigation';

function BlogPostContent() {
  const searchParams = useSearchParams();
  const postId = searchParams.get('id') || '1';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock blog post data
  const blogPosts: Record<string, {
    title: string;
    category: string;
    date: string;
    readTime: string;
    author: string;
    authorRole: string;
    image: string;
    content: {
      intro: string;
      sections: Array<{
        heading: string;
        content: string;
        points?: string[];
      }>;
      conclusion: string;
    };
    tags: string[];
  }> = {
    '1': {
      title: 'Building a Technical Team from Scratch: A Comprehensive Guide for Non-Technical Founders',
      category: 'Team Building',
      date: 'March 15, 2024',
      readTime: '12 min read',
      author: 'Vikram Malihan',
      authorRole: 'Fractional CTO',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/blogpost1.jpg',
      content: {
        intro: 'Building a technical team is one of the most critical decisions for any startup founder. As someone who has built and scaled engineering teams across multiple continents, I have learned that the process requires careful planning, strategic thinking, and a deep understanding of both technical and cultural dynamics.',
        sections: [
          {
            heading: 'Understanding Your Technical Needs',
            content: 'Before you start hiring, you need to clearly define what you are building and what skills are required. Many founders make the mistake of hiring too early or hiring the wrong profiles.',
            points: [
              'Define your MVP scope and technical requirements',
              'Identify core vs. nice-to-have features',
              'Determine whether you need full-stack, specialized, or generalist developers',
              'Consider your technology stack based on your product needs and market availability of talent'
            ]
          },
          {
            heading: 'The First Technical Hire: CTO or Senior Developer?',
            content: 'This is a common dilemma. The answer depends on your stage, funding, and technical complexity. A fractional CTO can bridge this gap initially, providing strategic guidance while you build your core team.',
            points: [
              'Early stage: Consider a fractional CTO + senior developers',
              'Post-funding: Look for a full-time technical co-founder or CTO',
              'Complex products: Prioritize architecture expertise',
              'Simple MVPs: Start with experienced full-stack developers'
            ]
          },
          {
            heading: 'Where to Find Technical Talent',
            content: 'The global talent market has opened up significantly. I have successfully built teams across Africa, India, Europe, and the Middle East. Each region has its strengths.',
            points: [
              'Africa: Growing tech hubs in Lagos, Nairobi, and Cape Town with hungry, talented developers',
              'India: Deep technical talent pool with strong engineering fundamentals',
              'Europe: Excellent for senior architects and specialized roles',
              'Middle East: Emerging tech scene with multilingual talent',
              'Remote-first: Access global talent while maintaining culture'
            ]
          },
          {
            heading: 'The Interview Process',
            content: 'As a non-technical founder, evaluating technical candidates can be challenging. Here is my proven framework for assessing technical talent without being a developer yourself.',
            points: [
              'Use technical assessments from platforms like HackerRank or Codility',
              'Bring in a technical advisor for final rounds',
              'Focus on problem-solving ability, not just coding skills',
              'Assess communication skills and cultural fit',
              'Check references thoroughly, especially for senior roles'
            ]
          },
          {
            heading: 'Building Team Culture',
            content: 'Technical teams thrive in environments that value learning, experimentation, and clear communication. Culture is not just about ping-pong tables and free snacks.',
            points: [
              'Establish clear coding standards and documentation practices',
              'Implement regular code reviews and knowledge sharing',
              'Invest in learning and development opportunities',
              'Create psychological safety for experimentation and failure',
              'Celebrate technical achievements and milestones'
            ]
          },
          {
            heading: 'Compensation and Equity',
            content: 'Getting compensation right is crucial for attracting and retaining top talent. Be transparent and competitive.',
            points: [
              'Research market rates for your region and remote positions',
              'Consider equity as part of total compensation',
              'Be transparent about funding stage and runway',
              'Offer competitive benefits beyond salary',
              'Regular compensation reviews as the company grows'
            ]
          }
        ],
        conclusion: 'Building a technical team is a marathon, not a sprint. Focus on hiring slowly and deliberately, especially for your first few hires. Each person will shape your engineering culture and technical direction for years to come. If you need guidance on building your technical team, I offer fractional CTO services to help founders navigate this critical phase.'
      },
      tags: ['Team Building', 'Hiring', 'Startup Strategy', 'CTO Insights']
    },
    '2': {
      title: 'Technical Due Diligence: What Investors Really Look For',
      category: 'Due Diligence',
      date: 'March 10, 2024',
      readTime: '10 min read',
      author: 'Vikram Malihan',
      authorRole: 'Fractional CTO',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/blog-002.jpg',
      content: {
        intro: 'Having conducted technical due diligence for over $500M in transactions, I have seen what separates successful acquisitions from problematic ones. Technical due diligence is not just about checking if the code works—it is about understanding risks, scalability, and long-term viability.',
        sections: [
          {
            heading: 'Code Quality and Technical Debt',
            content: 'Investors want to understand the true state of your codebase. Technical debt is not necessarily a deal-breaker, but hidden or unquantified debt is.',
            points: [
              'Code maintainability and documentation quality',
              'Test coverage and automated testing practices',
              'Known bugs and issue backlog',
              'Refactoring needs and estimated costs',
              'Code review practices and quality gates'
            ]
          },
          {
            heading: 'Architecture and Scalability',
            content: 'Can your system handle 10x growth? What about 100x? Investors need confidence that your architecture can scale with business growth.',
            points: [
              'System architecture documentation and diagrams',
              'Database design and query optimization',
              'API design and integration capabilities',
              'Caching strategies and performance optimization',
              'Horizontal and vertical scaling capabilities'
            ]
          },
          {
            heading: 'Security and Compliance',
            content: 'Security breaches can destroy value overnight. Investors scrutinize your security posture and compliance status.',
            points: [
              'Security audit history and vulnerability assessments',
              'Data encryption at rest and in transit',
              'Access control and authentication mechanisms',
              'GDPR, HIPAA, or other regulatory compliance',
              'Incident response plans and disaster recovery'
            ]
          },
          {
            heading: 'Team and Knowledge Transfer',
            content: 'The bus factor matters. What happens if key technical people leave? Investors assess team stability and knowledge distribution.',
            points: [
              'Team structure and key person dependencies',
              'Documentation quality and completeness',
              'Onboarding processes for new developers',
              'Knowledge sharing practices',
              'Retention risks and mitigation strategies'
            ]
          },
          {
            heading: 'Infrastructure and Operations',
            content: 'Modern infrastructure should be automated, monitored, and cost-effective. Manual processes are red flags.',
            points: [
              'Cloud infrastructure setup and costs',
              'CI/CD pipeline maturity',
              'Monitoring and alerting systems',
              'Backup and disaster recovery procedures',
              'Infrastructure as code practices'
            ]
          }
        ],
        conclusion: 'Technical due diligence is your opportunity to demonstrate technical excellence and transparency. Prepare thoroughly, document everything, and be honest about challenges. Investors appreciate founders who understand their technical risks and have plans to address them. If you are preparing for due diligence or conducting one, I can help ensure nothing is overlooked.'
      },
      tags: ['Due Diligence', 'Investment', 'Technical Assessment', 'Risk Management']
    },
    '3': {
      title: 'Scaling Your Startup: When to Refactor vs. Rebuild',
      category: 'Architecture',
      date: 'March 5, 2024',
      readTime: '8 min read',
      author: 'Vikram Malihan',
      authorRole: 'Fractional CTO',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/blog-003.jpg',
      content: {
        intro: 'Every growing startup faces this critical decision: should we refactor our existing codebase or rebuild from scratch? I have guided dozens of companies through this decision, and the answer is rarely straightforward. Let me share the framework I use to make this call.',
        sections: [
          {
            heading: 'Signs You Need to Make a Change',
            content: 'Before deciding between refactoring and rebuilding, you need to recognize when change is necessary.',
            points: [
              'Development velocity has slowed significantly',
              'Bug fixes create new bugs regularly',
              'New features take exponentially longer to implement',
              'Technical talent is leaving due to code quality',
              'System outages are becoming more frequent'
            ]
          },
          {
            heading: 'The Case for Refactoring',
            content: 'Refactoring is often the safer, more pragmatic choice. It allows you to improve code quality while maintaining business continuity.',
            points: [
              'Your core architecture is sound',
              'You have good test coverage',
              'The business cannot afford a development freeze',
              'Technical debt is localized to specific modules',
              'Your team understands the existing codebase well'
            ]
          },
          {
            heading: 'The Case for Rebuilding',
            content: 'Sometimes, the technical debt is so severe that rebuilding is the only viable path forward. But this decision should not be taken lightly.',
            points: [
              'Fundamental architecture flaws that cannot be fixed incrementally',
              'Technology stack is obsolete and unsupported',
              'Security vulnerabilities are systemic',
              'Cost of maintaining exceeds cost of rebuilding',
              'Business model has changed significantly'
            ]
          },
          {
            heading: 'The Hybrid Approach: Strangler Pattern',
            content: 'Often, the best solution is neither pure refactoring nor complete rebuild, but a gradual migration using the strangler pattern.',
            points: [
              'Build new features in the new architecture',
              'Gradually migrate existing features',
              'Maintain both systems during transition',
              'Reduce risk through incremental changes',
              'Learn and adjust as you go'
            ]
          },
          {
            heading: 'Making the Decision',
            content: 'Here is my decision framework based on 25+ years of experience.',
            points: [
              'Assess the business impact of each option',
              'Calculate the true cost including opportunity cost',
              'Evaluate team capability and morale',
              'Consider market timing and competitive pressure',
              'Get buy-in from all stakeholders before committing'
            ]
          }
        ],
        conclusion: 'There is no one-size-fits-all answer to refactor vs. rebuild. The right choice depends on your specific situation, constraints, and goals. What I can tell you is this: whatever you choose, commit fully and execute with discipline. Half-hearted refactoring or rushed rebuilds both lead to disaster. If you are facing this decision, let us talk—I can help you evaluate your options and create an execution plan.'
      },
      tags: ['Architecture', 'Scaling', 'Technical Debt', 'Engineering Strategy']
    }
    
  };

  const currentPost = blogPosts[postId] || blogPosts['1'];

  const relatedPosts = [
    {
      id: '2',
      title: 'Technical Due Diligence: What Investors Really Look For',
      category: 'Due Diligence',
      date: 'March 10, 2024',
      readTime: '10 min read',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/related1.jpg'
    },
    {
      id: '3',
      title: 'Scaling Your Startup: When to Refactor vs. Rebuild',
      category: 'Architecture',
      date: 'March 5, 2024',
      readTime: '8 min read',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/related2.jpg'
    }
  ].filter(post => post.id !== postId);

  return (
    <>
      {/* Article Header */}
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400 mb-6">
              <Link href="/blog" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">Blog</Link>
              <i className="ri-arrow-right-s-line"></i>
              <span className="text-slate-900 dark:text-white">{currentPost.category}</span>
            </div>

            {/* Category Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full border border-indigo-200 dark:border-indigo-800 mb-6">
              <i className="ri-bookmark-line text-indigo-600 dark:text-indigo-400"></i>
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">{currentPost.category}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {currentPost.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-slate-600 dark:text-slate-400 mb-8 pb-8 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-full">
                  <span className="text-white font-bold text-lg">VS</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">{currentPost.author}</div>
                  <div className="text-sm">{currentPost.authorRole}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-calendar-line"></i>
                <span>{currentPost.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-time-line"></i>
                <span>{currentPost.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="w-full h-96 rounded-2xl overflow-hidden mb-12">
              <img 
                src={currentPost.image} 
                alt={currentPost.title}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                {currentPost.content.intro}
              </p>

              {currentPost.content.sections.map((section, index) => (
                <div key={index} className="mb-10">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    {section.content}
                  </p>
                  {section.points && (
                    <ul className="space-y-3 ml-6">
                      {section.points.map((point, idx) => (
                        <li key={idx} className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-600 dark:border-indigo-400 p-6 rounded-r-xl my-8">
                <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                  {currentPost.content.conclusion}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
              {currentPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Share Section */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="text-lg font-semibold text-slate-900 dark:text-white">Share this article</div>
              <div className="flex items-center space-x-3">
                <button className="w-10 h-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">
                  <i className="ri-twitter-x-line text-lg"></i>
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">
                  <i className="ri-linkedin-line text-lg"></i>
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">
                  <i className="ri-facebook-line text-lg"></i>
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">
                  <i className="ri-link text-lg"></i>
                </button>
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 mt-12 border border-slate-200 dark:border-slate-700">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-full flex-shrink-0">
                  <span className="text-white font-bold text-2xl">VS</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    About {currentPost.author}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    Fractional CTO with 25+ years of experience building and scaling technology teams across multiple continents. Specializing in helping startups and scale-ups navigate technical challenges, from architecture decisions to team building and fundraising support.
                  </p>
                  <Link 
                    href="/about"
                    className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-pointer"
                  >
                    <span>Learn more about Vikram</span>
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-slate-50 dark:bg-slate-800">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">Related Articles</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/post?id=${post.id}`}
                    className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-full h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400 mb-3">
                        <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-medium">
                          {post.category}
                        </span>
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-medium">
                        <span>Read Article</span>
                        <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Need Technical Leadership for Your Startup?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Get expert guidance on technology strategy, team building, and scaling your product.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-50 transition-all whitespace-nowrap cursor-pointer"
              >
                Book a Consultation
              </Link>
              <Link
                href="/blog"
                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all whitespace-nowrap cursor-pointer"
              >
                Read More Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function BlogPostPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };
  
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <Suspense fallback={<div className="pt-32 text-center">Loading...</div>}>
        <BlogPostContent />
      </Suspense>
      <Footer />
    </div>
  );
}
