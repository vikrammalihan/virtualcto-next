'use client';

export function NewsletterSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl mx-auto mb-6">
            <i className="ri-mail-line text-white text-3xl"></i>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Subscribe to Technology Leadership Insights
          </h2>

          <p className="text-lg text-indigo-100 mb-8">
            Get weekly insights on startup technology, team building, and scaling strategies delivered to your inbox.
          </p>

          {/* Newsletter Form */}
          <form className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 text-sm bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg focus:outline-none focus:border-white text-white placeholder-indigo-200 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-indigo-600 text-sm font-semibold rounded-lg hover:bg-indigo-50 transition-colors whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-indigo-200 mt-4">
              Join 5,000+ technology leaders. Unsubscribe anytime.
            </p>
          </form>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-white/20">
            <div className="flex items-center space-x-2">
              <i className="ri-shield-check-line text-white text-xl"></i>
              <span className="text-sm text-indigo-100">No spam, ever</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-lock-line text-white text-xl"></i>
              <span className="text-sm text-indigo-100">Privacy protected</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-time-line text-white text-xl"></i>
              <span className="text-sm text-indigo-100">Weekly updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
