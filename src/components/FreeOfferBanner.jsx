import React from 'react';
import { Gift, ArrowRight, ShieldCheck, Sparkles, CheckCircle } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

export default function FreeOfferBanner({ onOpenModal }) {
  return (
    <section id="offer" className="py-6 sm:py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimateOnScroll animation="scale-in">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 p-6 sm:p-8 lg:py-8 lg:px-12 shadow-2xl shadow-amber-500/25 text-white">

            {/* Background decorative shapes */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-8 w-60 h-60 bg-orange-400/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left Copy */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-white/30 shadow-sm">
                  <Gift className="w-3.5 h-3.5 shrink-0 text-amber-200" />
                  <span>Exclusive Offer &middot; New Amazon Accounts Only</span>
                </div>

                {/* Headline */}
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-[36px] font-black text-white leading-[1.18] tracking-tight">
                  Open New Amazon Account &amp;<br className="hidden sm:block" />
                  Get{' '}
                  <span className="underline underline-offset-6 decoration-white/90 decoration-[3px]">
                    3 Months FREE
                  </span>{' '}
                  Management
                </h2>

                {/* Sub-copy */}
                <p className="font-body text-white/95 text-sm sm:text-base font-medium leading-relaxed max-w-xl">
                  Exclusively for sellers opening a fresh Amazon account via A2Z Aaradhya. Full account setup included — managed at{' '}
                  <strong className="text-white font-black underline underline-offset-2">zero cost for 3 months</strong>.
                </p>

                {/* Feature pills */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  {[
                    {
                      num: '01',
                      title: 'Open Account',
                      desc: 'Registered via A2Z',
                    },
                    {
                      num: '02',
                      title: 'Complete Setup',
                      desc: 'GST, catalog & ads',
                    },
                    {
                      num: '03',
                      title: '3 Months Free',
                      desc: 'Dedicated manager ₹0',
                    },
                  ].map((f) => (
                    <div
                      key={f.num}
                      className="bg-white/15 backdrop-blur-md p-3 sm:p-3.5 rounded-xl border border-white/25 hover:bg-white/20 transition-all duration-200"
                    >
                      <span className="font-heading text-xl sm:text-2xl font-black text-amber-200/90 leading-none block mb-1">
                        {f.num}
                      </span>
                      <h4 className="font-body text-[13px] sm:text-sm font-extrabold text-white leading-tight">{f.title}</h4>
                      <p className="font-body text-[11px] text-white/80 font-medium mt-0.5 leading-snug">{f.desc}</p>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right CTA Card */}
              <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
                <div className="w-full max-w-[360px] bg-white rounded-2xl p-6 text-slate-900 shadow-2xl shadow-black/20 space-y-4">

                  {/* Icon */}
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center shadow-md shadow-amber-400/40">
                      <Sparkles className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Card copy */}
                  <div className="text-center space-y-1">
                    <span className="inline-block font-body text-[10px] text-amber-600 font-black uppercase tracking-wider">
                      New Amazon Accounts Only
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-extrabold text-[#0B3B48] leading-tight">
                      Open New Account &amp;<br />Get 3 Months FREE
                    </h3>
                    <p className="font-body text-xs text-slate-500 font-medium leading-relaxed">
                      Zero fee for 3 months &middot; Official Amazon Partner
                    </p>
                  </div>

                  {/* Checklist */}
                  <ul className="space-y-2 text-left">
                    {[
                      'Complete Amazon Account Registration',
                      '3 Months Free Dedicated Management',
                      'Official Amazon Partner Full Support',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => onOpenModal('3months')}
                    className="w-full py-3 px-5 bg-[#0B3B48] hover:bg-[#166B82] text-white font-body font-black text-sm rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:scale-95"
                  >
                    Open New Account &amp; Claim Offer
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Trust badge */}
                  <div className="flex items-center justify-center gap-1.5 text-[11px] font-body text-slate-400 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
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
