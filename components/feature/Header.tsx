'use client';

import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-12">
            <a href="/" className="flex items-center space-x-3 cursor-pointer group">
              <div className="relative">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 rounded-xl shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
                  <i className="ri-terminal-box-line text-white text-xl"></i>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-violet-500 rounded-full border-2 border-white dark:border-slate-900"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white tracking-tight leading-none">TheVirtualCTO</span>
                <span className="text-[10px] font-medium text-indigo-300 tracking-wider uppercase leading-none mt-0.5">Technology Leadership</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer">
              Home
            </a>
            <a href="/about" className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer">
              About
            </a>
            <a href="/fractional-cto" className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer">
              Services
            </a>
            <a href="/contact" className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white/80 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`text-xl ${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10 md:hidden">
            <div className="px-6 py-4 space-y-4">
              <button 
                onClick={() => {
                  scrollToSection('products');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-white/80 hover:text-white transition-colors text-sm font-light cursor-pointer"
              >
                Products
              </button>
              <button 
                onClick={() => {
                  scrollToSection('about');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-white/80 hover:text-white transition-colors text-sm font-light cursor-pointer"
              >
                About
              </button>
              <button 
                onClick={() => {
                  scrollToSection('projects');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-white/80 hover:text-white transition-colors text-sm font-light cursor-pointer"
              >
                Projects
              </button>
              <button 
                onClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-white/80 hover:text-white transition-colors text-sm font-light cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
