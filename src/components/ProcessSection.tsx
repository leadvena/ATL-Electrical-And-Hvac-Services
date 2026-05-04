import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { motion } from 'motion/react';

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-brand-offwhite">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Our Methodology</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">Simple, Efficient, <br />Zero-Stress Process</h3>
          <p className="text-gray-500 text-lg">We've refined our workflow to ensure you get exactly what you need with minimal disruption to your daily life.</p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-gray-200 hidden lg:block"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-8 inline-block">
                  <div className="w-24 h-24 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center font-display text-4xl font-bold text-brand-blue group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all duration-300 shadow-sm mx-auto">
                    0{index + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-brand-charcoal mb-4 tracking-tight">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed px-4">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
