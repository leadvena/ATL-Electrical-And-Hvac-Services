import React from 'react';
import { TRUST_SIGNALS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export default function TrustBar() {
  return (
    <div className="bg-brand-charcoal border-y border-white/5 py-8 relative z-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-items-center">
          {TRUST_SIGNALS.map((signal, index) => (
            <div key={index} className="flex items-center gap-3 text-white/90 group">
              <div className="bg-brand-blue/10 p-2 rounded-full group-hover:bg-brand-blue/20 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-brand-blue" />
              </div>
              <span className="text-sm md:text-base font-bold tracking-tight">{signal}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
