export function CTASection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Whether you're looking for strategic technology guidance, need help building your team, or want to scale your infrastructure, I'm here to help. Let's discuss how we can work together to achieve your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:vikram@thevirtualcto.in"
              className="px-8 py-4 bg-white text-indigo-600 text-base font-semibold rounded-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Email Me
            </a>
            <a
              href="tel:+919971673684"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-base font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Call Me
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
            <div className="flex items-center space-x-2">
              <i className="ri-mail-line text-xl"></i>
              <span className="text-sm">vikram@thevirtualcto.in</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <i className="ri-phone-line text-xl"></i>
              <span className="text-sm">+91-9971673684</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <i className="ri-map-pin-line text-xl"></i>
              <span className="text-sm">New Delhi, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
