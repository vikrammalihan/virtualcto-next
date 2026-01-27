'use client';

export function CTASection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative px-8 sm:px-12 lg:px-16 py-16 sm:py-20">
            <div className="max-w-3xl mx-auto text-center">
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-8 shadow-xl">
                <i className="ri-calendar-check-line text-white text-3xl"></i>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Scale Your Startup in the Middle East?
              </h2>

              {/* Description */}
              <p className="text-lg sm:text-xl text-indigo-100 mb-10 leading-relaxed">
                Let's discuss how fractional CTO services can help you build world-class technology and navigate the Middle Eastern market. Book a free 30-minute consultation today.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-indigo-600 text-base font-semibold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  Schedule Free Consultation
                </a>
                <button
                  onClick={scrollToTop}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-base font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  Learn More
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/20">
                <div className="flex items-center space-x-2">
                  <i className="ri-shield-check-line text-white text-xl"></i>
                  <span className="text-sm text-indigo-100">25+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-team-line text-white text-xl"></i>
                  <span className="text-sm text-indigo-100">60+ ME Startups</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-funds-line text-white text-xl"></i>
                  <span className="text-sm text-indigo-100">$35M+ Funding Raised</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
