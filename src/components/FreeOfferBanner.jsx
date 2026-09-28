import React from 'react';
import { Gift, ArrowRight, ShieldCheck, Sparkles, CheckCircle } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

export default function FreeOfferBanner({ onOpenModal }) {
  return (
    <section id="offer" className="py-6 sm:py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimateOnScroll animation="scale-in">
          <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 p-8 sm:p-12 lg:p-16 shadow-2xl shadow-amber-500/25 text-white">

            {/* Background decorative shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-8 w-72 h-72 bg-orange-400/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left Copy */}
              <div className="lg:col-span-7 space-y-7 sm:space-y-8">

                {/* Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/30 shadow-sm">
                  <Gift className="w-4 h-4 shrink-0 text-amber-200" />
                  <span>Exclusive Offer &middot; New Amazon Accounts Only</span>
                </div>

                {/* Headline */}
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-[45px] font-black text-white leading-[1.16] tracking-tight">
                  Open New Amazon Account &amp;<br className="hidden sm:block" />
                  Get{' '}
                  <span className="underline underline-offset-[10px] decoration-white/90 decoration-[4px]">
                    3 Months FREE
                  </span>{' '}
                  Management
                </h2>

                {/* Sub-copy */}
                <p className="font-body text-white/95 text-base sm:text-lg font-medium leading-relaxed max-w-xl">
                  Exclusively for sellers opening a fresh Amazon account via A2Z Aaradhya. Full account setup included — managed at{' '}
                  <strong className="text-white font-black underline underline-offset-4 decoration-2">zero cost for 3 months</strong>.
                </p>

                {/* Feature pills with Bold Typographic Numbers */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {[
                    {
                      num: '01',
                      title: 'Open New Account',
                      desc: 'Registered directly via A2Z',
                    },
                    {
                      num: '02',
                      title: 'Complete Setup',
                      desc: 'GST, listings, catalog & ads',
                    },
                    {
                      num: '03',
                      title: '3 Months Free',
                      desc: 'Dedicated manager at ₹0',
                    },
                  ].map((f) => (
                    <div
                      key={f.num}
                      className="bg-white/15 backdrop-blur-md p-5 rounded-2xl border border-white/25 hover:bg-white/20 transition-all duration-200 flex flex-col justify-between"
                    >
                      <span className="font-heading text-2xl sm:text-3xl font-black text-amber-200/90 leading-none mb-3">
                        {f.num}
                      </span>
                      <div>
                        <h4 className="font-body text-base font-extrabold text-white leading-snug">{f.title}</h4>
                        <p className="font-body text-xs sm:text-[13px] text-white/85 font-medium mt-1.5 leading-snug">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right CTA Card */}
              <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
                <div className="w-full max-w-[420px] bg-white rounded-[28px] p-8 sm:p-9 text-slate-900 shadow-2xl shadow-black/20 space-y-6">

                  {/* Icon */}
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center shadow-lg shadow-amber-400/40">
                      <Sparkles className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Card copy */}
                  <div className="text-center space-y-2">
                    <span className="inline-block font-body text-xs text-amber-600 font-black uppercase tracking-wider">
                      New Amazon Accounts Only
                    </span>
                    <h3 className="font-heading text-xl sm:text-[23px] font-extrabold text-[#0B3B48] leading-snug">
                      Open New Account &amp;<br />Get 3 Months Management FREE
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                      No setup fee. Zero management charges for first 3 months.<br />
                      Backed by Official Amazon Partner.
                    </p>
                  </div>

                  {/* Checklist */}
                  <ul className="space-y-3 text-left">
                    {[
                      'Complete New Amazon Account Registration',
                      '3 Months Free Dedicated Management',
                      'Official Amazon Partner Full Support',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-xs sm:text-[13.5px] font-bold text-slate-700">
                        <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => onOpenModal('3months')}
                    className="w-full py-4 px-6 bg-[#0B3B48] hover:bg-[#166B82] text-white font-body font-black text-sm sm:text-base rounded-2xl shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:scale-95"
                  >
                    Open New Account &amp; Claim Offer
                    <ArrowRight className="w-4.5 h-4.5" />
                  </button>

                  {/* Trust badge */}
                  <div className="flex items-center justify-center gap-2 text-xs font-body text-slate-400 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    100% Free Setup &middot; Valid on New Accounts Only
                  </div>

                </div>
              </div>

            </div>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
