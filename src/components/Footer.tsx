import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Zap } from 'lucide-react';
import { PHONE_NUMBER, EMAIL, ADDRESS, NAV_ITEMS } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal pt-24 pb-12 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-8">
              <div className="bg-brand-blue p-2 rounded-sm">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-2xl tracking-tight">ATL</span>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-blue">ELECTRICAL & HVAC</span>
              </div>
            </a>
            <p className="text-white/50 leading-relaxed mb-8">
              Wellington's premier choice for comprehensive electrical and HVAC services. Owned and operated by locals who care about quality and community.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest font-display">Navigation</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/60 hover:text-brand-blue transition-colors flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-blue/30 rounded-full"></div>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest font-display">Our Expertise</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-brand-blue transition-colors">Panel Upgrades</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-blue transition-colors">EV Charging Stations</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-blue transition-colors">Heat Pump Installation</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-blue transition-colors">Commercial HVAC</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-blue transition-colors">Lighting Solutions</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest font-display">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Phone className="w-6 h-6 text-brand-blue flex-shrink-0" />
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-widest font-bold mb-1">Call Anytime</p>
                  <a href={`tel:${PHONE_NUMBER}`} className="text-lg font-bold hover:text-brand-blue transition-colors">{PHONE_NUMBER}</a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="w-6 h-6 text-brand-blue flex-shrink-0" />
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-widest font-bold mb-1">Email Us</p>
                  <a href={`mailto:${EMAIL}`} className="text-lg font-bold hover:text-brand-blue transition-colors">{EMAIL}</a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="w-6 h-6 text-brand-blue flex-shrink-0" />
                <div>
                  <p className="text-sm text-white/40 uppercase tracking-widest font-bold mb-1">Main Office</p>
                  <p className="text-lg font-bold">{ADDRESS}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/30 font-bold uppercase tracking-widest">
          <p>© {currentYear} ATL Electrical And HVAC Services Ltd. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
