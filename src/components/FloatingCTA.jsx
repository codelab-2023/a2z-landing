import React from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingCTA({ onOpenModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-3.5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-none">
      
      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/917802077444?text=Hello%20A2Z%20Aaradhya%20Team,%20I%20want%20to%20grow%20my%20e-commerce%20sales!"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center h-11 sm:h-12 bg-emerald-500 hover:bg-emerald-600 !text-white hover:!text-white px-3 sm:px-3.5 hover:px-4 rounded-full shadow-xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all duration-300 ease-out hover:-translate-y-0.5"
        aria-label="WhatsApp Chat"
      >
        <WhatsAppIcon className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-white shrink-0 group-hover:scale-110 transition-transform duration-300" />
        <span className="max-w-0 opacity-0 group-hover:max-w-[170px] group-hover:opacity-100 group-hover:ml-2.5 overflow-hidden whitespace-nowrap font-extrabold text-xs !text-white transition-all duration-300 ease-out">
          Chat on WhatsApp
        </span>
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full border-2 border-emerald-400 animate-ping" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-300 rounded-full border-2 border-emerald-400" />
      </a>

      {/* Direct Call Button */}
      <a
        href="tel:7802077444"
        className="pointer-events-auto group relative flex items-center h-11 sm:h-12 bg-gradient-to-r from-[#166B82] to-[#0F5265] hover:from-[#0F5265] hover:to-[#0B3B48] !text-white hover:!text-white px-3 sm:px-3.5 hover:px-4 rounded-full shadow-xl shadow-[#166B82]/35 hover:shadow-[#166B82]/50 transition-all duration-300 ease-out hover:-translate-y-0.5"
        aria-label="Call Now"
      >
        <Phone className="w-4.5 h-4.5 sm:w-5 sm:h-5 !text-white shrink-0 group-hover:scale-110 transition-transform duration-300" />
        <span className="max-w-0 opacity-0 group-hover:max-w-[190px] group-hover:opacity-100 group-hover:ml-2.5 overflow-hidden whitespace-nowrap font-extrabold text-xs !text-white transition-all duration-300 ease-out">
          Call: +91 78020 77444
        </span>
      </a>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white hover:bg-slate-50 text-slate-600 hover:text-[#166B82] border border-slate-300 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 group"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
      </button>

    </div>
  );
}
