import React from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';

export default function FloatingCTA({ onOpenModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      
      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/917802077444?text=Hello%20A2Z%20Aaradhya%20Team,%20I%20want%20to%20grow%20my%20e-commerce%20sales!"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 !text-white hover:!text-white px-4 py-3 rounded-full shadow-2xl shadow-emerald-500/40 transition-all duration-300 font-extrabold text-xs hover:-translate-y-0.5"
        aria-label="WhatsApp Chat"
      >
        <MessageSquare className="w-5 h-5 !text-white" />
        <span className="hidden sm:inline !text-white">Chat on WhatsApp</span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-emerald-400 animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-300 rounded-full border-2 border-emerald-400" />
      </a>

      {/* Direct Call Button */}
      <a
        href="tel:7802077444"
        className="flex items-center gap-2 bg-gradient-to-r from-[#166B82] to-[#0F5265] hover:from-[#0F5265] hover:to-[#0B3B48] !text-white hover:!text-white px-4 py-3 rounded-full shadow-2xl shadow-[#166B82]/35 transition-all duration-300 font-extrabold text-xs hover:-translate-y-0.5"
        aria-label="Call Now"
      >
        <Phone className="w-5 h-5 !text-white" />
        <span className="hidden sm:inline !text-white">Call: +91 78020 77444</span>
      </a>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="p-3 rounded-full bg-white hover:bg-slate-50 text-slate-600 hover:text-[#166B82] border border-slate-300 transition-all shadow-lg hover:-translate-y-0.5"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

    </div>
  );
}
