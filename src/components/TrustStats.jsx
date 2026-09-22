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
      value: "3,000+",
      label: "Businesses Scaled",
      sub: "Across India's top marketplaces",
      iconBg: 'bg-[#EBF7F6]',
      iconColor: 'text-[#166B82]',
      valuColor: 'text-[#166B82]',
    },
    {
      icon: Users,
      value: "600+",
      label: "Active Accounts Under Management",
      sub: "Daily managed & optimized",
      iconBg: 'bg-[#EBF7F6]',
      iconColor: 'text-[#166B82]',
      valuColor: 'text-[#0F5265]',
    },
    {
      icon: Award,
      value: "70+",
      label: "Dedicated Platform Managers",
      sub: "Marketplace-specific specialists",
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-700',
      valuColor: 'text-amber-700',
    },
    {
      icon: MapPin,
      value: "7+",
      label: "Regional Branches Across India",
      sub: "On-ground seller support",
      iconBg: 'bg-[#EBF7F6]',
      iconColor: 'text-[#166B82]',
      valuColor: 'text-[#166B82]',
    },
  ];

  return (
    <section className="py-6 sm:py-16 relative z-10 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimateOnScroll animation="fade-up" className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge-brand">Proven Track Record</span>
          <h2 className="section-heading mt-3">
            Built on Trust. Driven by Results.
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimateOnScroll
                key={i}
                animation="fade-up"
                delay={i * 100}
                className="glass-card-light glass-card-light-hover rounded-2xl p-6 border border-slate-200 flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl ${s.iconBg} border border-slate-200 flex items-center justify-center shadow-sm`}>
                    <Icon className={`w-6 h-6 ${s.iconColor}`} />
                  </div>
                  <span className="text-[10.5px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#EBF7F6] text-[#166B82] border border-[#166b82]/15 tracking-wide font-body">
                    Verified
                  </span>
                </div>

                <div className="space-y-1">
                  <div className={`text-4xl font-heading font-bold ${s.valuColor}`}>
                    <AnimatedCounter value={s.value} />
                  </div>
                  <div className="font-body font-semibold text-[#0B3B48] text-sm leading-tight">
                    {s.label}
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    {s.sub}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
