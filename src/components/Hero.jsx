import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BarChart3,
  ShieldCheck,
  Star,
  Activity,
} from 'lucide-react';
import {
  AmazonIcon, FlipkartIcon, MeeshoIcon, MyntraIcon,
  AmazonLogo, FlipkartLogo, MeeshoLogo, MyntraLogo,
} from './PlatformLogos';

export default function Hero({ onOpenModal }) {
  const [liveOrders, setLiveOrders] = useState(1965);
  const [liveSales, setLiveSales] = useState(781165);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveOrders((prev) => prev + Math.floor(Math.random() * 2) + 1);
      setLiveSales((prev) => prev + Math.floor(Math.random() * 450) + 120);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-16 sm:pt-20 pb-0 flex flex-col overflow-hidden hero-light-bg">

      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#9ED6CD]/20 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#166B82]/10 rounded-full blur-[110px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-8 sm:pt-12 lg:pt-14 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#166B82]/20 shadow-sm text-xs font-bold animate-slide-in-up">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#166B82] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#166B82]" />
              </span>
              <span className="text-[#0B3B48] font-extrabold">Amazon Authorized Partner</span>
              <span className="text-slate-200">|</span>
              <span className="text-amber-700 font-extrabold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                Unnati Gold Partner
              </span>
            </div>

            {/* Headline */}
            <div className="animate-slide-in-up animate-delay-100">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-[#0B3B48] leading-[1.12]">
                Grow Your Brand on{' '}
                <span className="bg-gradient-to-r from-[#166B82] to-[#9ED6CD] bg-clip-text text-transparent">
                  Every Marketplace
                </span>
              </h1>
            </div>

            {/* Short subtext */}
            <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-slide-in-up animate-delay-200">
              Expert e-commerce management on Amazon, Myntra, Flipkart &amp; Meesho — so you sell more while we handle the rest.
            </p>

            {/* 4 Main Brand Logo Cards - Uniform Pill Shapes & Prominent Logos */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 animate-slide-in-up animate-delay-300">
              {/* Amazon Card */}
              <div className="bg-white rounded-full border border-slate-200/90 shadow-sm hover:shadow-md flex items-center justify-center w-[calc(50%-5px)] sm:w-[152px] h-[48px] sm:h-[54px] transition-all duration-300 overflow-hidden shrink-0">
                <AmazonLogo
                  className="object-contain"
                  style={{
                    height: '56px',
                    width: 'auto',
                    maxWidth: '130px',
                    transform: 'scale(1.75) translateY(3px)',
                  }}
                />
              </div>

              {/* Myntra Card */}
              <div className="bg-white rounded-full border border-slate-200/90 shadow-sm hover:shadow-md flex items-center justify-center w-[calc(50%-5px)] sm:w-[152px] h-[48px] sm:h-[54px] transition-all duration-300 overflow-hidden shrink-0">
                <MyntraLogo
                  className="object-contain"
                  style={{
                    height: '28px',
                    width: 'auto',
                    maxWidth: '108px',
                  }}
                />
              </div>

              {/* Flipkart Card */}
              <div className="bg-white rounded-full border border-slate-200/90 shadow-sm hover:shadow-md flex items-center justify-center w-[calc(50%-5px)] sm:w-[152px] h-[48px] sm:h-[54px] transition-all duration-300 overflow-hidden shrink-0">
                <FlipkartLogo
                  className="object-contain"
                  style={{
                    height: '66px',
                    width: 'auto',
                    maxWidth: '140px',
                    transform: 'scale(1.9)',
                  }}
                />
              </div>

              {/* Meesho Card */}
              <div className="bg-white rounded-full border border-slate-200/90 shadow-sm hover:shadow-md flex items-center justify-center w-[calc(50%-5px)] sm:w-[152px] h-[48px] sm:h-[54px] transition-all duration-300 overflow-hidden shrink-0">
                <MeeshoLogo
                  className="object-contain"
                  style={{
                    height: '28px',
                    width: 'auto',
                    maxWidth: '108px',
                  }}
                />
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 animate-slide-in-up animate-delay-400">
              <button
                onClick={() => onOpenModal('3months')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:opacity-90 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-lg shadow-amber-500/25 transition-all duration-300 flex items-center justify-center gap-2.5 transform hover:-translate-y-1"
              >
                <Sparkles className="w-5 h-5 shrink-0" />
                <span>Claim 3 Months FREE</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </button>
              <button
                onClick={() => onOpenModal('audit')}
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 bg-white text-[#0B3B48] font-extrabold text-sm sm:text-base rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 flex items-center justify-center gap-2 hover:border-[#166B82]/30 hover:shadow-md"
              >
                <BarChart3 className="w-5 h-5 text-[#166B82] shrink-0" />
                <span>Free Account Audit</span>
              </button>
            </div>

            {/* 3 quick stats */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 animate-slide-in-up animate-delay-500">
              {['20K+ Accounts Managed', '70+ Expert Managers', '98% Client Retention'].map((txt, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#166B82] shrink-0" />
                  {txt}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN — Dashboard Card ── */}
          <div className="lg:col-span-5 relative animate-fade-in-right animate-delay-300 pt-8 sm:pt-9 pb-6 sm:pb-6" style={{ contain: 'layout style', willChange: 'transform' }}>

            {/* Floating Amazon badge */}
            <div className="absolute -top-3 sm:-top-2 left-1 sm:-left-4 z-20 bg-white px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-2 sm:gap-2.5 animate-float-slow">
              <AmazonIcon className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" />
              <div>
                <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-wide">Amazon ROAS</p>
                <p className="text-xs sm:text-sm font-extrabold text-[#0B3B48] flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#166B82]" /> 4.8× Growth
                </p>
              </div>
            </div>

            {/* Floating Flipkart badge */}
            <div className="absolute -top-2 sm:top-0 right-1 sm:-right-4 z-20 bg-white px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-2 sm:gap-2.5 animate-float-medium" style={{ animationDelay: '1s' }}>
              <FlipkartIcon className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" />
              <div>
                <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-wide">Flipkart</p>
                <p className="text-xs sm:text-sm font-extrabold text-[#0B3B48]">1,000+ Sellers</p>
              </div>
            </div>

            {/* Floating Meesho badge */}
            <div className="flex absolute -bottom-3 sm:-bottom-4 left-1 sm:-left-4 z-20 bg-white px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl border border-slate-200 shadow-xl items-center gap-2 sm:gap-2.5 animate-float-reverse">
              <MeeshoIcon className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" />
              <div>
                <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-wide">Meesho</p>
                <p className="text-xs sm:text-sm font-extrabold text-[#0B3B48]">10K+ Orders</p>
              </div>
            </div>

            {/* Floating Policy badge */}
            <div className="absolute -bottom-3 sm:-bottom-5 right-2 sm:-right-2 z-20 bg-white px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-2 sm:gap-2.5 animate-float-fast" style={{ animationDelay: '1.5s' }}>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#166B82]/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#166B82]" />
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-wide">Policy</p>
                <p className="text-[11px] sm:text-xs font-extrabold text-emerald-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  100% Safe
                </p>
              </div>
            </div>

            {/* Main Dashboard Card */}
            <div className="glass-card-light rounded-3xl px-5 sm:px-8 py-5 sm:py-6 border border-slate-200 shadow-2xl space-y-4 sm:space-y-5 relative z-10">

              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#166B82] text-white flex items-center justify-center">
                    <Activity className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <p className="font-extrabold text-[#0B3B48] text-sm">Live Seller Dashboard</p>
                    <p className="text-[11px] text-slate-400 font-medium">Active Revenue Stream</p>
                  </div>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 font-extrabold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </span>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Revenue</p>
                  <p className="text-2xl font-extrabold text-[#0B3B48] mt-1">
                    ₹{liveSales.toLocaleString('en-IN')}
                  </p>
                  <p className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 mt-0.5">
                    <TrendingUp className="w-3 h-3" /> +24.8%
                  </p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Orders</p>
                  <p className="text-2xl font-extrabold text-[#166B82] mt-1">
                    {liveOrders.toLocaleString('en-IN')}
                  </p>
                  <p className="text-[11px] text-slate-400 font-medium mt-0.5">Units dispatched</p>
                </div>
              </div>

              {/* SVG Chart */}
              <div className="bg-white rounded-2xl px-4 pt-3 pb-2 border border-slate-100 shadow-inner">
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 mb-2">
                  <span>30-Day Growth</span>
                  <span className="text-[#166B82] font-extrabold">4.2× ROAS</span>
                </div>
                <svg className="w-full" height="72" viewBox="0 0 300 72" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#166B82" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#166B82" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 65 C 60 63, 90 48, 140 34 S 200 12, 300 4" fill="none" stroke="#166B82" strokeWidth="3" strokeLinecap="round" />
                  <path d="M0 65 C 60 63, 90 48, 140 34 S 200 12, 300 4 L 300 72 L 0 72 Z" fill="url(#heroGrad)" />
                  <circle cx="300" cy="4" r="5" fill="#166B82">
                    <animate attributeName="r" from="4" to="9" dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="1" to="0" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="300" cy="4" r="3.5" fill="#9ED6CD" />
                </svg>
              </div>

              {/* Offer strip */}
              <div className="flex items-center justify-between bg-amber-50 rounded-2xl px-4 py-3 border border-amber-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-extrabold text-amber-900">3 Months FREE Management</p>
                </div>
                <button onClick={() => onOpenModal('3months')} className="text-[11px] font-extrabold bg-amber-500 hover:bg-amber-600 text-white px-3 py-1.5 rounded-xl transition-colors">
                  Claim
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ── MARQUEE — Infinite seamless loop ── */}
      <div className="w-full bg-white/95 border-t border-slate-200 py-4 overflow-hidden z-10">
        <div className="animate-marquee">
          {/* Two identical halves — each half is wider than viewport for seamless loop */}
          {[0, 1].map((set) => (
            <div key={set} className="flex items-center shrink-0" style={{ gap: '1.5rem', padding: '0 0.75rem' }}>
              {[0, 1, 2, 3].flatMap((i) => [
                <div key={`a-${set}-${i}`} className="flex items-center justify-center rounded-xl bg-slate-50/80 border border-slate-200/80 shadow-sm shrink-0 overflow-hidden" style={{ height: '44px', minWidth: '120px', padding: '0 14px' }}>
                  <AmazonLogo className="object-contain" style={{ height: '60px', width: 'auto', maxWidth: '150px', transform: 'scale(1.6) translateY(4px)' }} />
                </div>,
                <div key={`my-${set}-${i}`} className="flex items-center justify-center rounded-xl bg-slate-50/80 border border-slate-200/80 shadow-sm shrink-0 overflow-hidden" style={{ height: '44px', minWidth: '120px', padding: '0 14px' }}>
                  <MyntraLogo className="object-contain" style={{ height: '28px', width: 'auto', maxWidth: '130px' }} />
                </div>,
                <div key={`f-${set}-${i}`} className="flex items-center justify-center rounded-xl bg-slate-50/80 border border-slate-200/80 shadow-sm shrink-0 overflow-hidden" style={{ height: '44px', minWidth: '120px', padding: '0 14px' }}>
                  <FlipkartLogo className="object-contain" style={{ height: '58px', width: 'auto', maxWidth: '150px', transform: 'scale(1.6)' }} />
                </div>,
                <div key={`m-${set}-${i}`} className="flex items-center justify-center rounded-xl bg-slate-50/80 border border-slate-200/80 shadow-sm shrink-0 overflow-hidden" style={{ height: '44px', minWidth: '120px', padding: '0 12px' }}>
                  <MeeshoLogo className="object-contain" style={{ height: '24px', width: 'auto', maxWidth: '100px' }} />
                </div>,
              ])}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
