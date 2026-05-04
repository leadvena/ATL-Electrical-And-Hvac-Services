import React from 'react';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { PHONE_NUMBER } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2669" 
          alt="Technician working on HVAC" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/90 via-brand-charcoal/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 bg-brand-blue/20 backdrop-blur-sm border border-brand-blue/30 text-white px-3 py-1.5 rounded-full w-fit mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-brand-blue" />
            <span className="text-xs font-bold uppercase tracking-wider">Licensed & Fully Insured Wellington Experts</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Reliable <span className="text-brand-blue">Electrical & HVAC</span> Services in Wellington
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed"
          >
            Fast, certified, and professional installations, repairs, and maintenance. We keep your home and business running efficiently all year round.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a 
              href="#contact"
              className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 rounded-sm font-bold text-lg flex items-center justify-center gap-2 cta-shadow transition-all hover:scale-105 active:scale-95"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-sm font-bold text-lg flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </motion.div>

          {/* Social Proof/Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex flex-wrap gap-8 items-center"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">15+</span>
              <span className="text-xs text-white/60 uppercase tracking-widest font-bold">Years Experience</span>
            </div>
            <div className="w-[1px] h-10 bg-white/20 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">WGTN Local</span>
              <span className="text-xs text-white/60 uppercase tracking-widest font-bold">Owned & Operated</span>
            </div>
            <div className="w-[1px] h-10 bg-white/20 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">24/7</span>
              <span className="text-xs text-white/60 uppercase tracking-widest font-bold">Emergency Support</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative side text */}
      <div className="absolute right-0 top-1/2 -rotate-90 origin-right hidden lg:block">
        <span className="text-8xl font-black text-white/5 uppercase tracking-tighter whitespace-nowrap select-none">
          QUALIFIED • RELIABLE • LOCAL
        </span>
      </div>
    </section>
  );
}
