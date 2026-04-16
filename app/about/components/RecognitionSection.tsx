
import Image from 'next/image';

export function RecognitionSection() {
  const achievements = [
    {
      icon: 'ri-trophy-line',
      number: '50+',
      label: 'Successful Startup Launches',
      description: 'Guided startups from MVP to market success'
    },
    {
      icon: 'ri-team-line',
      number: '200+',
      label: 'Engineering Teams Built',
      description: 'Recruited and developed high-performing teams'
    },
    {
      icon: 'ri-funds-line',
      number: '$500M+',
      label: 'Tech Investments Guided',
      description: 'Strategic technology decisions and implementations'
    },
    {
      icon: 'ri-global-line',
      number: '10+',
      label: 'Industries Served',
      description: 'From FinTech to HealthTech and beyond'
    }
  ];

  const testimonials = [
    {
      quote: 'Vikram\'s strategic guidance was instrumental in scaling our infrastructure from 10K to 1M users. His expertise saved us months of trial and error.',
      author: 'Sarah Johnson',
      role: 'CEO, FinTech Startup',
      avatar: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/testimonial-sarah-001.jpg'
    },
    {
      quote: 'Working with Vikram was like having a seasoned CTO on our team. He helped us make critical technology decisions that positioned us for sustainable growth.',
      author: 'Michael Chen',
      role: 'Founder, HealthTech Platform',
      avatar: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/testimonial-michael-001.jpg'
    },
    {
      quote: 'Vikram\'s team building expertise helped us hire our first 20 engineers. His structured approach and network were invaluable.',
      author: 'Priya Sharma',
      role: 'CTO, E-Commerce Startup',
      avatar: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/testimonial-priya-001.jpg'
    }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Fallback to a placeholder if image fails to load
    const target = e.target as HTMLImageElement;
    target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23e2e8f0'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='14' fill='%2364748b' text-anchor='middle' dy='.3em'%3EAvatar%3C/text%3E%3C/svg%3E`;
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-6">
        {/* Achievements */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Track Record
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Numbers that reflect years of dedication and impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 text-center hover:shadow-xl hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl mx-auto mb-6 shadow-lg shadow-indigo-500/30">
                  <i className={`${achievement.icon} text-white text-3xl`}></i>
                </div>
                <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {achievement.label}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              What Clients Say
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Feedback from founders and leaders I've worked with
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i key={star} className="ri-star-fill text-yellow-400 text-lg"></i>
                  ))}
                </div>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                      onError={handleImageError}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
