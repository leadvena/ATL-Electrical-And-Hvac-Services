import React, { useState } from 'react';
import { Send, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { PHONE_NUMBER, EMAIL } from '../constants';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Gather form data
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Network error. Please check your connection or call us.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-offwhite">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <div className="lg:w-1/3">
            <h2 className="text-sm font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Get In Touch</h2>
            <h3 className="text-4xl font-bold text-brand-charcoal mb-8">Ready to Start Your Project?</h3>
            <p className="text-gray-500 mb-12 leading-relaxed">
              Fill out the form to request a free, no-obligation quote. Our team usually responds within 2 business hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-sm shadow-sm border border-gray-100">
                  <Phone className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Call Us</p>
                  <a href={`tel:${PHONE_NUMBER}`} className="text-xl font-bold text-brand-charcoal hover:text-brand-blue transition-colors">
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-sm shadow-sm border border-gray-100">
                  <Mail className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Email Us</p>
                  <a href={`mailto:${EMAIL}`} className="text-xl font-bold text-brand-charcoal hover:text-brand-blue transition-colors">
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-sm shadow-sm border border-gray-100">
                  <Clock className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Operating Hours</p>
                  <p className="text-xl font-bold text-brand-charcoal">Mon-Fri: 7:30am - 5:30pm</p>
                  <p className="text-sm text-gray-500">24/7 Emergency support available</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-brand-charcoal rounded-sm text-white relative overflow-hidden">
              <ShieldCheck className="absolute -bottom-4 -right-4 w-24 h-24 text-white/5" />
              <h4 className="font-bold mb-2">Emergency Service?</h4>
              <p className="text-sm text-white/60 mb-6">HVAC breakdown or electrical emergency? Call us immediately for priority attendance.</p>
              <a 
                href={`tel:${PHONE_NUMBER}`} 
                className="inline-block bg-brand-blue text-white px-6 py-3 rounded-sm font-bold text-sm tracking-tight hover:bg-brand-blue/90 transition-all uppercase"
              >
                Urgent Call
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
            <div className={`bg-white p-8 md:p-12 rounded-sm shadow-xl shadow-brand-charcoal/5 border border-gray-100 transition-all duration-500 ${submitted ? 'bg-brand-blue' : ''}`}>
              {submitted ? (
                <div className="text-center py-20 text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <ShieldCheck className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold mb-4 tracking-tight">Request Received!</h4>
                  <p className="text-white/80 max-w-sm mx-auto mb-10">We've received your request and one of our Wellington experts will contact you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="bg-white text-brand-blue px-8 py-3 rounded-sm font-bold transition-all hover:scale-105 active:scale-95"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h4 className="text-2xl font-bold text-brand-charcoal mb-8 tracking-tight uppercase tracking-wider text-brand-blue">Request a Quote</h4>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          required 
                          placeholder="John Doe"
                          className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required 
                          placeholder="+64 22 XXX XXXX"
                          className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          required 
                          placeholder="john@example.com"
                          className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Service Needed</label>
                        <select 
                          name="service"
                          className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all appearance-none cursor-pointer"
                        >
                          <option>Electrical Service</option>
                          <option>HVAC / Heat Pump</option>
                          <option>Commercial Maintenance</option>
                          <option>Emergency Repair</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Your Message</label>
                      <textarea 
                        name="message"
                        rows={5} 
                        required 
                        placeholder="Tell us about your requirements..."
                        className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white py-5 rounded-sm font-bold text-lg flex items-center justify-center gap-3 cta-shadow transition-all disabled:opacity-70 group"
                    >
                      {isSubmitting ? 'Processing...' : 'Request Quote Now'}
                      {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    </button>
                    
                    <p className="text-center text-xs text-gray-400 font-bold uppercase tracking-widest py-4">
                      No obligation • Fast turnaround • Professional advice
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
