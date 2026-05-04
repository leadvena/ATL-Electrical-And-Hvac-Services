import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export default function ServiceArea() {
  const regions = [
    "Wellington CBD", "Lower Hutt", "Upper Hutt", "Porirua", "Kapiti Coast", "Johnsonville", "Karori", "Island Bay", "Miramar", "Tawa"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Location</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-8">Serving Greater <br />Wellington</h3>
            <p className="text-gray-500 text-lg mb-12 leading-relaxed">
              We are proud to serve the entire Wellington metropolitan area. Our fully equipped service vehicles are constantly on the road, ensuring fast response times for both routine maintenance and urgent repairs.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {regions.map((region) => (
                <div key={region} className="flex items-center gap-3 text-brand-charcoal font-medium">
                  <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                  {region}
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-brand-blue/5 border border-brand-blue/10 rounded-sm inline-flex items-center gap-4">
              <Navigation className="w-8 h-8 text-brand-blue" />
              <div>
                <p className="font-bold text-brand-charcoal">Quick Response Time</p>
                <p className="text-sm text-gray-500">Average arrival within 4 hours for urgent calls.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            {/* Visual representation of a map / service area */}
            <div className="aspect-square bg-gray-100 rounded-sm relative overflow-hidden flex items-center justify-center p-8">
               <MapPin className="w-16 h-16 text-brand-blue animate-bounce" />
               <div className="absolute inset-0 opacity-20 pointer-events-none">
                 <svg viewBox="0 0 100 100" className="w-full h-full text-brand-blue stroke-current fill-none" strokeWidth="0.5">
                   <path d="M10,10 Q50,0 90,10 T90,90 T10,90 T10,10" />
                   <path d="M30,30 Q50,20 70,30 T70,70 T30,70 T30,30" />
                   <circle cx="50" cy="50" r="40" />
                   <line x1="0" y1="50" x2="100" y2="50" />
                   <line x1="50" y1="0" x2="50" y2="100" />
                 </svg>
               </div>
               <div className="bg-white p-4 shadow-lg rounded-sm absolute bottom-8 left-8 right-8 text-center border border-gray-100 animate-pulse">
                 <p className="font-bold text-brand-charcoal tracking-tight">Active in Your Neighborhood</p>
                 <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Click to view dynamic coverage</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
