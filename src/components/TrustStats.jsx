import React, { useState, useEffect, useRef } from 'react';
import { Building2, Users, ShoppingBag, ShieldCheck, Award, MapPin } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

function AnimatedCounter({ value }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  // Extract number and suffix
  const numString = value.replace(/[^0-9]/g, '');
  const parsed = parseInt(numString, 10) || 0;
  const suffix = value.replace(/[0-9,]/g, '');

  useEffect(() => {
    let active = true;
    let observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && active) {
          let startTimestamp = null;
          const duration = 1500; // 1.5 seconds animation

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            if (active) {
              setCount(Math.floor(progress * parsed));
            }

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else if (active) {
              setCount(parsed);
            }
          };

          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      active = false;
      observer.disconnect();
    };
  }, [parsed]);

  return (
    <span ref={elementRef}>
      {count.toLocaleString('en-IN')}{suffix}
    </span>
  );
}

export default function TrustStats() {
  const stats = [
    {
      icon: ShoppingBag,
      value: "20K+",
      label: "Total Accounts Managed",
      sub: "Onboarded & scaled across India's top marketplaces",
      iconBg: 'bg-[#EBF7F6]',
      iconColor: 'text-[#166B82]',
      valuColor: 'text-[#166B82]',
    },
    {
      icon: Users,
      value: "600+",
      label: "Active Accounts Managed",
      sub: "Daily optimized for top sales, ads & ranking",
      iconBg: 'bg-[#EBF7F6]',
      iconColor: 'text-[#166B82]',
      valuColor: 'text-[#166B82]',
    },
    {
      icon: Award,
      value: "70+",
      label: "Dedicated Platform Experts",
      sub: "Certified specialists for Amazon, Flipkart & Myntra",
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-700',
      valuColor: 'text-amber-700',
    },
    {
      icon: MapPin,
      value: "7+",
      label: "Regional Branches in India",
      sub: "Local on-ground seller support across retail hubs",
      iconBg: 'bg-[#EBF7F6]',
      iconColor: 'text-[#166B82]',
      valuColor: 'text-[#166B82]',
    },
  ];

  return (
    <section className="py-6 sm:py-16 relative z-10 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimateOnScroll animation="fade-up" className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="badge-brand">Proven Track Record</span>
          <h2 className="section-heading mt-3">
            Built on Trust. Driven by Results.
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 items-stretch">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimateOnScroll
                key={i}
                animation="fade-up"
                delay={i * 80}
                className="h-full flex flex-col"
              >
                <div className="glass-card-light glass-card-light-hover rounded-2xl p-4 sm:p-6 border border-slate-200 h-full flex flex-col justify-between shadow-xs">
                  {/* Top: Icon + Verified Badge */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${s.iconBg} border border-slate-200/60 flex items-center justify-center shadow-xs shrink-0`}>
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${s.iconColor}`} />
                    </div>
                    <span className="text-[9.5px] sm:text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#EBF7F6] text-[#166B82] border border-[#166b82]/15 tracking-wide font-body">
                      Verified
                    </span>
                  </div>

                  {/* Bottom: Number + Label + Subtitle (tight typography, no huge gaps) */}
                  <div>
                    <div className={`text-3xl sm:text-4xl font-heading font-extrabold ${s.valuColor} tracking-tight leading-none`}>
                      <AnimatedCounter value={s.value} />
                    </div>
                    <div className="font-body font-bold text-[#0B3B48] text-sm sm:text-base mt-2.5 leading-snug">
                      {s.label}
                    </div>
                    <p className="text-xs sm:text-[13px] text-slate-600 font-medium mt-1 leading-normal">
                      {s.sub}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
