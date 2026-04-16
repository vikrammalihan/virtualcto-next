'use client';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'PayFlow Africa',
      region: 'Kenya',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/testimonial-001.jpg',
      quote: 'Vikram transformed our technical infrastructure and helped us scale from 10K to 100K users without breaking a sweat. His strategic guidance was invaluable during our Series A.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder',
      company: 'HealthConnect',
      region: 'Singapore',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/testimonial-002.jpg',
      quote: 'Working with Vikram was a game-changer. He not only designed our HIPAA-compliant architecture but also helped us build an exceptional engineering team from scratch.',
      rating: 5
    },
    {
      name: 'Fatima Al-Rashid',
      role: 'CTO',
      company: 'EduTech Solutions',
      region: 'UAE',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/testimonial-003.jpg',
      quote: 'His deep understanding of both technology and business made him the perfect advisor. Vikram helped us optimize our platform and reduce costs by 40% while improving performance.',
      rating: 5
    },
    {
      name: "James O'Brien",
      role: 'Co-Founder',
      company: 'GreenTech Innovations',
      region: 'Ireland',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/testimonial-004.jpg',
      quote: "Vikram's technical due diligence was thorough and insightful. His report gave our investors the confidence they needed, and we successfully closed our funding round.",
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Product Lead',
      company: 'FinServe India',
      region: 'India',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/testimonial-005.jpg',
      quote: 'His fractional CTO services gave us access to world-class expertise at a fraction of the cost. Vikram helped us make critical technology decisions that shaped our product roadmap.',
      rating: 5
    },
    {
      name: 'David Okonkwo',
      role: 'CEO',
      company: 'AgriTech Solutions',
      region: 'Nigeria',
      image: 'https://virtual-cto.s3.ap-south-1.amazonaws.com/assets/images/testimonial-006.jpg',
      quote: 'Vikram understood the unique challenges of building tech in Africa. His guidance helped us navigate infrastructure limitations and build a robust, scalable platform.',
      rating: 5
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-6">
            <i className="ri-chat-quote-line text-indigo-600 dark:text-indigo-400"></i>
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            What Founders &amp; CTOs
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Say About Working Together
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Trusted by startup leaders across four continents
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover object-top border-2 border-indigo-500"
                />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</div>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <i key={idx} className="ri-star-fill text-yellow-400 text-sm"></i>
                ))}
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="text-sm font-medium text-slate-900 dark:text-white">{testimonial.company}</div>
                <div className="flex items-center space-x-1 text-xs text-slate-600 dark:text-slate-400">
                  <i className="ri-map-pin-line"></i>
                  <span>{testimonial.region}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
