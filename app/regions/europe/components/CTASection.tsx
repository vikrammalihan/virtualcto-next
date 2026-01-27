'use client';

import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
          <i className="ri-calendar-line text-white"></i>
          <span className="text-sm text-white font-medium">Ready to Scale in Europe?</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Let&apos;s Build Your European Success Story
        </h2>

        <p className="text-xl text-white/90 mb-12 leading-relaxed">
          Schedule a free consultation to discuss your European expansion strategy, GDPR compliance needs, or technology leadership requirements. No commitment required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
          >
            Schedule Free Consultation
          </Link>
          <a
            href="mailto:contact@techflowcto.com"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 cursor-pointer whitespace-nowrap"
          >
            Email Us Directly
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-white/80">
          <div className="flex items-center space-x-2">
            <i className="ri-time-line text-white"></i>
            <span className="text-sm">30-min intro call</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="ri-shield-check-line text-white"></i>
            <span className="text-sm">No commitment</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="ri-chat-smile-3-line text-white"></i>
            <span className="text-sm">Free consultation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
