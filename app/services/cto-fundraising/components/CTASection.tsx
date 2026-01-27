export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-500 to-teal-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Impress Investors?
        </h2>
        <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
          Let's prepare the technical materials that will help you close your funding round with confidence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="/book-consultation"
            className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
          >
            Schedule Strategy Call
          </a>
          <a
            href="/contact"
            className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all border-2 border-white/30 whitespace-nowrap cursor-pointer"
          >
            Contact Us
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-white">
          <div>
            <div className="text-3xl font-bold mb-2">2-3 Weeks</div>
            <div className="text-emerald-100">Fast Turnaround</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">$50M+</div>
            <div className="text-emerald-100">Capital Raised</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-emerald-100">Satisfaction Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
}