import React from 'react';
import { Gift, ArrowRight, ShieldCheck, Sparkles, CheckCircle } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

export default function FreeOfferBanner({ onOpenModal }) {
  return (
    <section id="offer" className="py-6 sm:py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimateOnScroll animation="scale-in">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 p-8 sm:p-12 shadow-2xl shadow-amber-500/25 text-white">

            {/* Background decorative shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-8 w-72 h-72 bg-orange-400/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* Left Copy */}
              <div className="lg:col-span-7 space-y-6">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest border border-white/30 shadow-sm">
                  <Gift className="w-4 h-4 shrink-0" />
                  Exclusive Offer &middot; For New A2Z Account Holders Only
                </div>

                {/* Headline */}
                <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
                  Open Your Amazon Account<br className="hidden sm:block" />
                  Through A2Z &amp; Get{' '}
                  <span className="underline underline-offset-4 decoration-white/70 decoration-4">
                    3 Months FREE
                  </span>
                  {' '}Management
                </h2>

                {/* Sub-copy */}
                <p className="font-body text-white/90 text-base sm:text-lg font-medium leading-relaxed max-w-xl">
                  This offer is{' '}
                  <strong className="text-white font-extrabold">exclusively available</strong>
                  {' '}to sellers who register their new Amazon Seller Account through A2Z Aaradhya.
                  We handle your complete account setup — and manage it at{' '}
                  <strong className="text-white font-extrabold underline underline-offset-2">zero cost</strong>
                  {' '}for the first 3 months.
                </p>

                {/* Feature pills */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  {[
                    {
                      num: '01',
                      title: 'Open via A2Z Aaradhya',
                      desc: 'Exclusively for new accounts registered through us',
                    },
                    {
                      num: '02',
                      title: 'Full Account Setup Included',
                      desc: 'GST, Listing, Brand Gating & Ads — all covered',
                    },
                    {
                      num: '03',
                      title: '3 Months Free Management',
                      desc: 'Dedicated 1-on-1 growth manager, zero charges',
                    },
                  ].map((f) => (
                    <div
                      key={f.num}
                      className="flex items-start gap-3 bg-white/15 backdrop-blur-md p-4 rounded-2xl border border-white/25 hover:bg-white/20 transition-colors duration-200"
                    >
                      <div className="w-8 h-8 rounded-xl bg-white text-amber-600 text-xs font-extrabold flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                        {f.num}
                      </div>
                      <div>
                        <h4 className="font-body text-[13px] font-extrabold text-white leading-tight">{f.title}</h4>
                        <p className="font-body text-[11px] text-white/75 font-medium mt-0.5 leading-snug">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right CTA Card */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-sm bg-white rounded-3xl p-8 text-slate-900 shadow-2xl shadow-black/20 space-y-5">

                  {/* Icon */}
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center shadow-lg shadow-amber-400/40">
                      <Sparkles className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Card copy */}
                  <div className="text-center space-y-1.5">
                    <span className="inline-block font-body text-[11px] text-amber-600 font-extrabold uppercase tracking-widest">
                      New Account Holders Only
                    </span>
                    <h3 className="font-heading text-xl font-extrabold text-[#0B3B48] leading-snug">
                      Register Through A2Z &amp;<br />Get 3 Months Management FREE
                    </h3>
                    <p className="font-body text-xs text-slate-500 font-medium leading-relaxed">
                      No setup fee. No management charges for 3 months.<br />
                      Backed by an Official Amazon Partner.
                    </p>
                  </div>

                  {/* Checklist */}
                  <ul className="space-y-2 text-left">
                    {[
                      'Complete Amazon account registration',
                      '3 months free dedicated management',
                      'Official Amazon Partner support',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => onOpenModal('3months')}
                    className="w-full py-4 px-6 bg-[#0B3B48] hover:bg-[#166B82] text-white font-body font-extrabold text-sm rounded-2xl shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:scale-95"
                  >
                    Claim Your Free 3 Months Now
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Trust badge */}
                  <div className="flex items-center justify-center gap-2 text-[11px] font-body text-slate-400 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    100% Risk-Free &middot; Valid for New A2Z Accounts Only
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
