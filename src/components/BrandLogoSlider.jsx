import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { Sparkles } from 'lucide-react';

// Brand client logo imports from src/images/brand-images
import brandLogo01 from '../images/brand-images/client-brand-d2c-01.webp';
import brandLogo02 from '../images/brand-images/client-brand-ecommerce-02.webp';
import brandLogo03 from '../images/brand-images/client-brand-d2c-03.webp';
import brandLogo04 from '../images/brand-images/client-brand-apparel-04.webp';
import brandLogo05 from '../images/brand-images/client-brand-fashion-05.webp';
import brandLogo06 from '../images/brand-images/client-brand-home-06.webp';
import brandLogo07 from '../images/brand-images/client-brand-electronics-07.webp';
import brandLogo08 from '../images/brand-images/client-brand-beauty-08.webp';
import brandLogo09 from '../images/brand-images/client-brand-fmcg-09.webp';
import brandLogo10 from '../images/brand-images/client-brand-lifestyle-10.webp';
import brandLogo11 from '../images/brand-images/client-brand-d2c-11.webp';
import brandLogo12 from '../images/brand-images/client-brand-essentials-12.webp';
import brandLogo13 from '../images/brand-images/client-brand-footwear-13.webp';
import brandLogo14 from '../images/brand-images/client-brand-retail-14.webp';
import brandLogo15 from '../images/brand-images/client-brand-specialist-15.webp';

export default function BrandLogoSlider() {
  const brandLogos = [
    { id: 'b1', name: 'D2C Brand Partner', logo: brandLogo01, tag: 'D2C Brand' },
    { id: 'b2', name: 'E-Commerce Marketplace Brand', logo: brandLogo02, tag: 'E-commerce Brand' },
    { id: 'b3', name: 'Direct-to-Consumer Client', logo: brandLogo03, tag: 'D2C Brand' },
    { id: 'b4', name: 'Apparel & Lifestyle Brand', logo: brandLogo04, tag: 'Apparel & Lifestyle' },
    { id: 'b5', name: 'Fashion & Retail Partner', logo: brandLogo05, tag: 'Fashion & Retail' },
    { id: 'b6', name: 'Home & Living Brand', logo: brandLogo06, tag: 'Home & Living' },
    { id: 'b7', name: 'Consumer Electronics Brand', logo: brandLogo07, tag: 'Consumer Electronics' },
    { id: 'b8', name: 'Health & Beauty Brand', logo: brandLogo08, tag: 'Health & Beauty' },
    { id: 'b9', name: 'FMCG Goods Partner', logo: brandLogo09, tag: 'FMCG Goods' },
    { id: 'b10', name: 'Lifestyle & Gear Brand', logo: brandLogo10, tag: 'Lifestyle & Gear' },
    { id: 'b11', name: 'Online Marketplace Seller', logo: brandLogo11, tag: 'D2C Brand' },
    { id: 'b12', name: 'Home Essentials Client', logo: brandLogo12, tag: 'Home Essentials' },
    { id: 'b13', name: 'Footwear & Fashion Brand', logo: brandLogo13, tag: 'Fashion & Footwear' },
    { id: 'b14', name: 'Retail & Consumer Goods', logo: brandLogo14, tag: 'Retail & Goods' },
    { id: 'b15', name: 'Specialist Marketplace Brand', logo: brandLogo15, tag: 'Specialist Brand' },
  ];

  // Row 1 contains unique logos 1 to 8 (Multiplied for wide-screen seamless buffer)
  const row1 = [
    brandLogos[0], brandLogos[1], brandLogos[2], brandLogos[3],
    brandLogos[4], brandLogos[5], brandLogos[6], brandLogos[7]
  ];
  // Row 2 contains unique logos 9 to 15 (Zero overlap with Row 1)
  const row2 = [
    brandLogos[8], brandLogos[9], brandLogos[10], brandLogos[11],
    brandLogos[12], brandLogos[13], brandLogos[14]
  ];

  // 4x sequence per track so track width is ~6000px+ (wider than any 4K display)
  const track1Sequence = [...row1, ...row1, ...row1, ...row1];
  const track2Sequence = [...row2, ...row2, ...row2, ...row2];

  const renderLogoCard = (item, key) => (
    <div
      key={key}
      className="flex items-center justify-center p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#166B82]/50 hover:shadow-md transition-all shrink-0 hover:scale-105 duration-300 group cursor-default min-w-[115px] sm:min-w-[160px] h-18 sm:h-24"
    >
      <img
        src={item.logo}
        alt={item.name}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          const parent = e.currentTarget.parentElement;
          if (parent) {
            const fallback = parent.querySelector('.fallback-badge');
            if (fallback) fallback.classList.remove('hidden');
          }
        }}
        className="h-12 sm:h-20 max-w-[95px] sm:max-w-[145px] w-full object-contain transition-transform duration-300 group-hover:scale-110 filter drop-shadow-xs"
      />

      <div className="fallback-badge hidden flex-col items-center">
        <span className="font-extrabold text-[11px] sm:text-sm text-[#0B3B48] font-outfit">{item.name}</span>
        <span className="text-[8px] sm:text-[9px] text-[#166B82] font-bold uppercase">{item.tag}</span>
      </div>
    </div>
  );

  return (
    <section className="py-5 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-white border-y border-slate-200 overflow-hidden relative">

      {/* Subtle ambient glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#166B82]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
        <AnimateOnScroll animation="fade-down" className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#166B82]/10 border border-[#166B82]/20 text-[#166B82] text-[11px] sm:text-xs font-extrabold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Client Portfolio &amp; Trusted Partners</span>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={50} as="h2" className="text-2xl sm:text-4xl font-extrabold text-[#0B3B48] font-outfit">
          Brand &amp; Marketplaces We Have Scaled
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={100} as="p" className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto font-medium">
          Trusted by <span className="font-bold text-[#166B82]">20,000+ Indian sellers and marketplace brands</span> across all major e-commerce categories.
        </AnimateOnScroll>
      </div>

      {/* 2-Row Infinite Scrolling Logo Marquees (100% seamless, non-stop loop) */}
      <div className="relative w-full overflow-hidden space-y-3 sm:space-y-4">
        {/* Left & Right gradient fade masks (Compact on mobile so logos remain visible) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Row 1: Right to Left (Continuous) */}
        <div className="flex overflow-hidden w-full">
          <div className="flex shrink-0 items-center gap-3 sm:gap-5 pr-3 sm:pr-5 marquee-track-left">
            {track1Sequence.map((item, index) => renderLogoCard(item, `row1-a-${index}`))}
          </div>
          <div className="flex shrink-0 items-center gap-4 sm:gap-5 pr-4 sm:pr-5 marquee-track-left" aria-hidden="true">
            {track1Sequence.map((item, index) => renderLogoCard(item, `row1-b-${index}`))}
          </div>
        </div>

        {/* Row 2: Left to Right (Continuous Reverse) */}
        <div className="flex overflow-hidden w-full">
          <div className="flex shrink-0 items-center gap-3 sm:gap-5 pr-3 sm:pr-5 marquee-track-right">
            {track2Sequence.map((item, index) => renderLogoCard(item, `row2-a-${index}`))}
          </div>
          <div className="flex shrink-0 items-center gap-3 sm:gap-5 pr-3 sm:pr-5 marquee-track-right" aria-hidden="true">
            {track2Sequence.map((item, index) => renderLogoCard(item, `row2-b-${index}`))}
          </div>
        </div>
      </div>

    </section>
  );
}
