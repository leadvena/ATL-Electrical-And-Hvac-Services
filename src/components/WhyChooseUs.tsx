import React from 'react';
import { Shield, Clock, BadgeCheck, MapPin, Gauge } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: Shield,
      title: "Experienced & Certified",
      description: "Our team consists of Master Electricians and fully qualified HVAC technicians with decades of combined experience."
    },
    {
      icon: Clock,
      title: "Fast & Reliable",
      description: "We value your time. We show up when we say we will and complete jobs efficiently without cutting corners."
    },
    {
      icon: Gauge,
      title: "Transparent Pricing",
      description: "No hidden costs or nasty surprises. We provide clear, itemized quotes before any work begins."
    },
    {
      icon: MapPin,
      title: "Local Wellington Experts",
      description: "Being local means we understand Wellington's unique weather challenges and building requirements."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-brand-charcoal relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 skew-x-12 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-brand-blue uppercase tracking-[0.3em] mb-4 underline decoration-brand-blue/30 underline-offset-8">Wellington's Choice</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Professional Quality <br />You Can Depend On.</h3>
            <p className="text-white/60 mb-12 text-lg leading-relaxed max-w-xl">
              ATL Electrical and HVAC Services has built a reputation for excellence across the Wellington region. From minor repairs to large-scale commercial installations, we bring the same level of precision and care to every job.
            </p>
            <div className="flex items-center gap-6 bg-white/5 p-6 rounded-sm border border-white/10 max-w-md">
              <BadgeCheck className="w-12 h-12 text-brand-blue flex-shrink-0" />
              <div>
                <p className="text-white font-bold italic">"We stand by our work. Every installation comes with our 100% satisfaction guarantee and comprehensive warranty."</p>
                <p className="text-white/40 text-xs mt-2 uppercase tracking-widest font-bold">— ATL Management Team</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid sm:grid-cols-2 gap-8">
            {points.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 p-8 rounded-sm border border-white/5 hover:border-brand-blue/30 transition-colors group"
              >
                <div className="bg-brand-blue/10 w-14 h-14 flex items-center justify-center rounded-sm mb-6 transition-colors group-hover:bg-brand-blue">
                  <point.icon className="w-7 h-7 text-brand-blue group-hover:text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{point.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
