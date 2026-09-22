import React from 'react';
import { 
  Award, 
  Trophy, 
  Crown, 
  Star, 
  Sparkles, 
  Medal, 
  ShieldCheck 
} from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

import award1 from '../images/Award/Award 1.webp';
import award2 from '../images/Award/Award 2.webp';
import award3 from '../images/Award/Award 3.webp';
import award4 from '../images/Award/Award 4.webp';
import award5 from '../images/Award/Award 5.webp';
import award6 from '../images/Award/Award 6.webp';
import award7 from '../images/Award/Award 7.webp';

export default function AwardsSection() {
  const awards = [
    {
      id: "award-1",
      year: "2023",
      tag: "2023",
      title: "Indo International Achievement Award",
      org: "INDO INTERNATIONAL FORUM • PRESENTED BY SHILPA SHETTY",
      icon: Sparkles,
      tagBg: "bg-[#E0E7FF]",
      tagText: "text-[#3730A3]",
      iconBg: "bg-[#EEF2FF]",
      iconColor: "text-[#4F46E5]",
      iconBorder: "border-indigo-200/70",
      image: award1
    },
    {
      id: "award-2",
      year: "2025",
      tag: "2025",
      title: "Seller Affiliate Gold Partner Q2'25",
      org: "AMAZON MARCH (2025)",
      icon: Trophy,
      tagBg: "bg-[#FEF3C7]",
      tagText: "text-[#92400E]",
      iconBg: "bg-[#FFF8E7]",
      iconColor: "text-[#D97706]",
      iconBorder: "border-amber-200/70",
      image: award2
    },
    {
      id: "award-3",
      year: "2025",
      tag: "2025",
      title: "Seller Affiliate Gold Partner Q3'25",
      org: "AMAZON JUNE (2025)",
      icon: Medal,
      tagBg: "bg-[#CCFBF1]",
      tagText: "text-[#115E59]",
      iconBg: "bg-[#F0FDFA]",
      iconColor: "text-[#0D9488]",
      iconBorder: "border-teal-200/70",
      image: award3
    },
    {
      id: "award-4",
      year: "2025",
      tag: "2025",
      title: "Unnati Gold Partner Q2'25",
      org: "AMAZON MARCH (2025)",
      icon: Star,
      tagBg: "bg-[#FFEDD5]",
      tagText: "text-[#9A3412]",
      iconBg: "bg-[#FFF7ED]",
      iconColor: "text-[#EA580C]",
      iconBorder: "border-orange-200/70",
      image: award4
    },
    {
      id: "award-5",
      year: "2025",
      tag: "2025",
      title: "Seller Affiliate Amazon SSL-2",
      org: "AMAZON (2025)",
      icon: Award,
      tagBg: "bg-[#D1FAE5]",
      tagText: "text-[#065F46]",
      iconBg: "bg-[#ECFDF5]",
      iconColor: "text-[#059669]",
      iconBorder: "border-emerald-200/70",
      image: award5
    },
    {
      id: "award-6",
      year: "2025",
      tag: "2025",
      title: "Seller Affiliate Gold Partner Q2'25",
      org: "AMAZON MARCH (2025)",
      icon: Crown,
      tagBg: "bg-[#FEF9C3]",
      tagText: "text-[#854D0E]",
      iconBg: "bg-[#FEFCE8]",
      iconColor: "text-[#CA8A04]",
      iconBorder: "border-yellow-200/70",
      image: award6
    },
    {
      id: "award-7",
      year: "2025",
      tag: "2025",
      title: "Seller Affiliate Gold Partner Q3'25",
      org: "AMAZON JUNE (2025)",
      icon: ShieldCheck,
      tagBg: "bg-[#F3E8FF]",
      tagText: "text-[#6B21A8]",
      iconBg: "bg-[#FAF5FF]",
      iconColor: "text-[#9333EA]",
      iconBorder: "border-purple-200/70",
      image: award7
    }
  ];

  return (
    <section id="awards" className="py-4 sm:py-24 relative bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-2.5 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <AnimateOnScroll animation="fade-up" className="text-center max-w-3xl mx-auto mb-5 sm:mb-16 space-y-1 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider mb-0.5">
            <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
            <span>Official Industry Recognitions</span>
          </div>
          <h2 className="text-xl sm:text-5xl font-black text-[#0B3B48] font-outfit tracking-tight">
            Award-Winning Excellence
          </h2>
          {/* Hide subtitle text on mobile to reduce top space */}
          <p className="hidden sm:block text-xs sm:text-lg font-bold text-[#166B82]">
            Recognized by Amazon &amp; National E-Commerce Leaders
          </p>
          <p className="hidden sm:block text-[11px] sm:text-base text-slate-600 font-medium">
            Explore our official awards, honors, and partner certifications.
          </p>
        </AnimateOnScroll>

        {/* 7 Clean 1920x1080 Award Boxes */}
        <div className="space-y-6 sm:space-y-12">
          {awards.map((a, i) => {
            const Icon = a.icon;

            return (
              <AnimateOnScroll
                key={a.id}
                animation="fade-up"
                delay={i * 30}
                className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-8 border border-slate-200/90 shadow-[0_6px_30px_rgba(0,0,0,0.04)] space-y-3 sm:space-y-6"
              >
                {/* Box Top: Title + Org on left | Year badge on right */}
                <div className="flex items-start justify-between pb-2.5 sm:pb-4 border-b border-slate-100 gap-2">
                  
                  {/* Left: Icon (desktop) + Title + Org */}
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                    {/* Icon: Hidden on mobile, shown on desktop */}
                    <div className={`hidden sm:flex w-14 h-14 rounded-2xl ${a.iconBg} border ${a.iconBorder} items-center justify-center shadow-xs shrink-0`}>
                      <Icon className={`w-7 h-7 ${a.iconColor}`} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-2xl font-black text-[#0B3B48] font-outfit leading-tight">
                        {a.title}
                      </h3>
                      <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mt-0.5 truncate sm:whitespace-normal">
                        {a.org}
                      </p>
                    </div>
                  </div>

                  {/* Right: Year badge always on right */}
                  <span className={`shrink-0 text-[10px] sm:text-xs font-extrabold px-2.5 sm:px-3 py-0.5 rounded-full ${a.tagBg} ${a.tagText} whitespace-nowrap`}>
                    {a.tag}
                  </span>
                </div>

                {/* Image - bigger aspect ratio on mobile (4:3 instead of 16:9) */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-md">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
