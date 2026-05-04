import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PHONE_NUMBER, NAV_ITEMS } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="bg-brand-blue p-1.5 rounded-sm">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-display font-bold text-lg tracking-tight ${isScrolled ? 'text-brand-charcoal' : 'text-white'}`}>ATL ELECTRICAL</span>
              <span className={`text-[10px] font-medium tracking-[0.2em] uppercase ${isScrolled ? 'text-brand-blue' : 'text-white/80'}`}>& HVAC SERVICES</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                  isScrolled ? 'text-brand-charcoal' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className={`flex items-center gap-2 text-sm font-bold transition-colors ${
                isScrolled ? 'text-brand-charcoal hover:text-brand-blue' : 'text-white hover:text-white/80'
              }`}
            >
              <Phone className="w-4 h-4" />
              {PHONE_NUMBER}
            </a>
            <a 
              href="#contact"
              className="bg-brand-blue hover:bg-brand-blue/90 text-white px-5 py-2.5 rounded-sm font-bold text-sm shadow-sm transition-transform hover:-translate-y-0.5"
            >
              Request Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-brand-charcoal' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="text-lg font-medium text-brand-charcoal border-b border-gray-50 pb-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-4 pt-4">
                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center justify-center gap-2 bg-gray-50 text-brand-charcoal py-4 rounded-sm font-bold"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a 
                  href="#contact"
                  className="bg-brand-blue text-white py-4 rounded-sm font-bold text-center flex items-center justify-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  Request Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
