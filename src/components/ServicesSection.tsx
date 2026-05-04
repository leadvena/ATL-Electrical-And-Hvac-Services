import React from 'react';
import { Zap, Power, Lightbulb, CarFront, Thermometer, Wind, Fan, Wrench, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICE_CATEGORIES } from '../constants';

const iconMap: Record<string, React.ElementType> = {
  Zap, Power, Lightbulb, CarFront, Thermometer, Wind, Fan, Wrench
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">What we do</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-charcoal">Complete Electrical & <br />HVAC Solutions</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {SERVICE_CATEGORIES.map((category, catIndex) => (
            <div key={category.title}>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-0.5 w-12 bg-brand-blue"></div>
                <h4 className="text-2xl font-bold text-brand-charcoal">{category.title}</h4>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {category.services.map((service, index) => {
                  const Icon = iconMap[service.icon] || Zap;
                  return (
                    <motion.div 
                      key={service.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group p-6 bg-brand-offwhite border border-gray-100 rounded-sm hover:border-brand-blue/30 transition-all hover:shadow-xl hover:shadow-brand-blue/5"
                    >
                      <div className="bg-white w-12 h-12 flex items-center justify-center rounded-sm mb-4 border border-gray-100 group-hover:bg-brand-blue group-hover:text-white transition-colors shadow-sm">
                        <Icon className="w-6 h-6 text-brand-blue group-hover:text-white" />
                      </div>
                      <h5 className="text-lg font-bold text-brand-charcoal mb-2 flex items-center justify-between">
                        {service.title}
                        <ArrowUpRight className="w-4 h-4 text-brand-blue opacity-0 group-hover:opacity-100 transition-all" />
                      </h5>
                      <p className="text-sm text-gray-500 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <a 
                        href="#contact" 
                        className="text-xs font-bold text-brand-blue uppercase tracking-widest border-b-2 border-transparent hover:border-brand-blue transition-all"
                      >
                        Get Quote
                      </a>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
