import React from 'react';
import { Gift, Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

export default function FreeOfferBanner({ onOpenModal }) {
  return (
    <section id="offer" className="py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimateOnScroll animation="scale-in">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 p-8 sm:p-12 shadow-2xl shadow-amber-500/25 text-white">

            {/* Background shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-8 w-72 h-72 bg-orange-400/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left Copy */}
              <div className="lg:col-span-8 space-y-6">

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/30">
                  <Gift className="w-4 h-4" />
                  Limited Time – New Seller Strategic Growth Offer
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  3 MONTHS{' '}
                  <span className="underline decoration-white/60">FREE</span>
                  {' '}NEW SELLER ACCOUNT MANAGEMENT
                </h2>

                <p className="font-body text-white/90 text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
                  Opening a new seller account? Let A2Z Aaradhya's senior marketplace experts launch and scale your brand at{' '}
                  <strong className="text-white underline">ZERO MANAGEMENT COST</strong>{' '}
                  for the first 3 months.
                </p>

                {/* Feature cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {[
                    { num: "01", h: "Zero Management Fee", sub: "Save 100% cost for 3 Months" },
                    { num: "02", h: "Full Account Setup", sub: "GST, Listing, Brand Gating" },
                    { num: "03", h: "Dedicated Manager", sub: "1-on-1 Daily Growth Support" },
                  ].map((f) => (
                    <div key={f.num} className="flex items-center gap-3 bg-white/15 backdrop-blur-md p-4 rounded-2xl border border-white/25">
                      <div className="w-8 h-8 rounded-xl bg-white text-amber-600 text-xs font-bold flex items-center justify-center shrink-0 shadow-sm">
                        {f.num}
                      </div>
                      <div>
                        <h4 className="font-body text-xs font-extrabold text-white">{f.h}</h4>
                        <p className="font-body text-[11px] text-white/80 font-medium">{f.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right CTA Card */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center text-center bg-white p-7 sm:p-8 rounded-3xl text-slate-900 shadow-2xl space-y-5">

                <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/30">
                  <Sparkles className="w-7 h-7" />
                </div>

                <div>
                  <span className="font-body text-xs text-amber-600 font-extrabold uppercase tracking-wider">Exclusive New Seller Launch</span>
                  <h3 className="font-heading text-xl font-bold text-[#0B3B48] mt-1">Claim 3 Months Free Management</h3>
                  <p className="font-body text-xs text-slate-500 font-medium mt-1">Zero setup charges. Official Amazon Partner support.</p>
                </div>

                <button
                  onClick={() => onOpenModal('3months')}
                  className="w-full py-4 px-6 bg-[#0B3B48] hover:bg-[#166B82] text-white font-body font-extrabold text-sm rounded-2xl shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  Activate Free Offer Now
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2 text-[11px] font-body text-slate-500 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  100% Risk-Free. Official Amazon Protection.
                </div>

              </div>

            </div>

          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
