'use client';

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Scale Your Indian Startup?
          </h2>
          <p className="text-lg sm:text-xl text-indigo-100 mb-8 sm:mb-12 leading-relaxed">
            Join 80+ Indian startups that have successfully scaled their technology with our expert guidance. Let's discuss how we can help you achieve your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-indigo-600 text-base font-semibold rounded-lg hover:bg-slate-50 hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Schedule Free Consultation
            </a>
            <a
              href="/#case-studies"
              className="px-8 py-4 bg-transparent text-white text-base font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              View More Case Studies
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-white/20">
            <div className="flex items-center space-x-2 text-white">
              <i className="ri-shield-check-line text-2xl"></i>
              <span className="text-sm font-medium">Startup India Recognized</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <i className="ri-time-line text-2xl"></i>
              <span className="text-sm font-medium">IST Time Zone</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <i className="ri-map-pin-line text-2xl"></i>
              <span className="text-sm font-medium">15+ Cities</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <i className="ri-team-line text-2xl"></i>
              <span className="text-sm font-medium">500+ Teams Built</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
