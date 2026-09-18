import React from 'react';
import { Award, Trophy, Crown, Star, Sparkles, Medal } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

export default function AwardsSection() {
  const awards = [
    {
      year: "2026",
      title: "SOA-Champion South & West Winner",
      org: "Amazon India",
      icon: Trophy,
      tagBg: 'bg-amber-100',
      tagText: 'text-amber-800',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-700',
    },
    {
      year: "2025 Q2",
      title: "Unnati Gold Partner",
      org: "Amazon – March 2025",
      icon: Crown,
      tagBg: 'bg-yellow-100',
      tagText: 'text-yellow-800',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-700',
    },
    {
      year: "2025 Q2",
      title: "Seller Affiliate Gold Partner",
      org: "Amazon – March 2025",
      icon: Star,
      tagBg: 'bg-orange-100',
      tagText: 'text-orange-800',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-700',
    },
    {
      year: "2025",
      title: "Seller Affiliate Amazon SSL-2",
      org: "Amazon Official",
      icon: Medal,
      tagBg: 'bg-[#EBF7F6]',
      tagText: 'text-[#166B82]',
      iconBg: 'bg-[#EBF7F6]',
      iconColor: 'text-[#166B82]',
    },
    {
      year: "2024",
      title: "Winners of Partner Pragati League II",
      org: "E-Commerce League",
      icon: Award,
      tagBg: 'bg-teal-100',
      tagText: 'text-teal-800',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-700',
    },
    {
      year: "2023",
      title: "Indo International Achievement Award",
      org: "Indo International Forum",
      icon: Sparkles,
      tagBg: 'bg-blue-100',
      tagText: 'text-blue-800',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-700',
    },
  ];

  return (
    <section id="awards" className="py-24 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimateOnScroll animation="fade-up" className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-amber-500" />
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0B3B48] font-outfit tracking-tight">
              Award-Winning Excellence
            </h2>
          </div>
          <p className="text-lg font-bold text-[#166B82]">
            Recognized by Amazon & Industry Leaders
          </p>
          <p className="section-subheading">
            Our commitment to seller growth and flawless operational management has earned us prestigious industry awards.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((a, i) => {
            const Icon = a.icon;
            return (
              <AnimateOnScroll 
                key={i}
                animation="fade-up"
                delay={i * 80}
                className="glass-card-light glass-card-light-hover rounded-3xl p-7 border border-slate-200 bg-white flex flex-col justify-between space-y-5 group"
              >
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl ${a.iconBg} border border-slate-200 flex items-center justify-center shadow-sm`}>
                    <Icon className={`w-6 h-6 ${a.iconColor}`} />
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${a.tagBg} ${a.tagText} border border-slate-200`}>
                    {a.year}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading text-lg font-bold text-[#0B3B48] group-hover:text-[#166B82] transition-colors leading-snug">
                    {a.title}
                  </h3>
                  <p className="text-xs font-body font-semibold text-slate-500 uppercase tracking-wider">
                    {a.org}
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
