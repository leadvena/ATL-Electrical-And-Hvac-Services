import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import ProcessSection from './components/ProcessSection';
import ServiceArea from './components/ServiceArea';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { Phone } from 'lucide-react';
import { PHONE_NUMBER } from './constants';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <ServicesSection />
        <WhyChooseUs />
        <ProcessSection />
        <ServiceArea />
        <ContactForm />
      </main>

      <Footer />

      {/* Sticky Mobile Call Button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden animate-bounce">
        <a 
          href={`tel:${PHONE_NUMBER}`}
          className="bg-brand-orange text-white p-4 rounded-full shadow-2xl flex items-center justify-center border-4 border-white"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}

