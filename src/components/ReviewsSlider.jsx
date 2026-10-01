import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const reviews = [
  {
    id: 1,
    name: 'Rajesh Patel',
    city: 'Surat, Gujarat',
    platform: 'Amazon Seller',
    rating: 5,
    review:
      'A2Z Aaradhya grew our Amazon account 4x in just 3 months. Our monthly revenue went from ₹80,000 to ₹3.5 Lakhs. The team is extremely professional and keeps us updated daily.',
    initials: 'RP',
    color: 'bg-amber-500',
  },
  {
    id: 2,
    name: 'Priya Mehta',
    city: 'Ahmedabad, Gujarat',
    platform: 'Flipkart Seller',
    rating: 5,
    review:
      'Our Flipkart account was suspended for months. A2Z submitted a perfect Plan of Action and got us reinstated in just 2 days. Their speed and knowledge is truly impressive. Highly recommend!',
    initials: 'PM',
    color: 'bg-blue-600',
  },
  {
    id: 3,
    name: 'Suresh Agarwal',
    city: 'Delhi',
    platform: 'Amazon & Meesho Seller',
    rating: 5,
    review:
      'I tried 3 different agencies before A2Z Aaradhya — none of them delivered results. In 6 months, A2Z took my business from struggling to ₹12 Lakhs monthly. Absolutely game-changing.',
    initials: 'SA',
    color: 'bg-[#166B82]',
  },
  {
    id: 4,
    name: 'Neha Shah',
    city: 'Mumbai, Maharashtra',
    platform: 'Meesho Seller',
    rating: 5,
    review:
      'My Meesho sales were at zero. A2Z handled the catalog, pricing strategy and dispatch management. We got 200+ orders in the very first month! The support team is always just a call away.',
    initials: 'NS',
    color: 'bg-pink-600',
  },
  {
    id: 5,
    name: 'Vikram Joshi',
    city: 'Rajkot, Gujarat',
    platform: 'Amazon Seller',
    rating: 5,
    review:
      'I was a brand new seller with no idea how Amazon worked. A2Z Aaradhya handled everything — GST, brand registry, listings and PPC. Today I confidently run a profitable Amazon business. Thank you!',
    initials: 'VJ',
    color: 'bg-emerald-600',
  },
  {
    id: 6,
    name: 'Kavita Desai',
    city: 'Vadodara, Gujarat',
    platform: 'Flipkart & Amazon Seller',
    rating: 5,
    review:
      'My account manager is always available — on WhatsApp and on call. I receive detailed weekly reports and know exactly what is happening on my account. The transparency here is unlike any other agency.',
    initials: 'KD',
    color: 'bg-purple-600',
  },
];

export default function ReviewsSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const DURATION = 5000;

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % reviews.length);
    }, DURATION);
  }, []);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const goTo = (idx) => {
    setCurrent(idx);
    startTimer();
  };

  const prev = () => goTo((current - 1 + reviews.length) % reviews.length);
  const next = () => goTo((current + 1) % reviews.length);

  // Mobile Touch Swipe support
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      next();
    } else if (distance < -45) {
      prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // 3 visible cards: left, center, right
  const indices = [
    (current - 1 + reviews.length) % reviews.length,
    current,
    (current + 1) % reviews.length,
  ];

  return (
    <section className="py-6 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <AnimateOnScroll animation="fade-up" className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-extrabold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Client Reviews & Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3B48] font-outfit">
            What Our Sellers Say About Us
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            Real success stories from 3,000+ Brands who scaled their e-commerce business with A2Z Aaradhya.
          </p>
        </AnimateOnScroll>

        {/* Desktop: 3 cards */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-10">
          {indices.map((idx, pos) => {
            const rev = reviews[idx];
            const isCenter = pos === 1;
            return (
              <div
                key={`${rev.id}-${pos}`}
                style={{ transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)' }}
                className={`rounded-3xl p-7 border ${isCenter
                    ? 'bg-white border-[#166B82]/25 shadow-2xl shadow-[#166B82]/10 scale-105'
                    : 'bg-slate-50 border-slate-200 shadow-sm opacity-60 scale-95'
                  }`}
              >
                <ReviewCard rev={rev} />
              </div>
            );
          })}
        </div>

        {/* Mobile: single card with touch swipe */}
        <div 
          className="lg:hidden mb-10 select-none touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            key={current}
            className="bg-white rounded-3xl p-5 sm:p-7 border border-[#166B82]/25 shadow-xl animate-fade-in"
          >
            <ReviewCard rev={reviews[current]} />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-500 hover:text-[#166B82] hover:border-[#166B82]/40 hover:shadow-lg transition-all duration-200 active:scale-95"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                style={{ transition: 'all 0.3s ease' }}
                className={`rounded-full ${idx === current
                    ? 'w-7 h-2.5 bg-[#166B82]'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-500 hover:text-[#166B82] hover:border-[#166B82]/40 hover:shadow-lg transition-all duration-200 active:scale-95"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}

function ReviewCard({ rev }) {
  return (
    <div className="space-y-4">
      <div className="flex gap-0.5">
        {[...Array(rev.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      <Quote className="w-7 h-7 text-[#166B82]/15" />

      <p className="text-slate-700 text-sm leading-relaxed font-medium">
        "{rev.review}"
      </p>

      <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
        <div className={`w-10 h-10 rounded-full ${rev.color} text-white flex items-center justify-center font-extrabold text-sm shrink-0`}>
          {rev.initials}
        </div>
        <div>
          <div className="font-extrabold text-[#0B3B48] text-sm">{rev.name}</div>
          <div className="text-[11px] text-slate-500 font-medium">{rev.city} · {rev.platform}</div>
        </div>
      </div>
    </div>
  );
}
