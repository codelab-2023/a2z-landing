import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, Sparkles } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

export const defaultFaqs = [
  {
    question: "Is an Active GST Number mandatory to sell on Amazon, Flipkart, and Meesho?",
    answer: "Yes, for inter-state commerce and full-scale selling across Amazon, Flipkart, and Meesho, having an active GST certificate/number is legally required by marketplace regulations. A2Z Aaradhya provides 24 to 48-hour priority fast-track onboarding for GST registered sellers. If you do not have a GST number yet, our team assists you with GST registration guidance and seller account preparation end-to-end.",
  },
  {
    question: "How does A2Z Aaradhya help GST registered manufacturers, wholesalers, and brands?",
    answer: "We provide 360° marketplace account management for registered businesses: ROI-driven PPC campaigns, Amazon A+ Content & Brand Storefront design, Flipkart PLA advertising, Meesho bulk cataloging, Buy Box defense, and FBA inventory management. Our 70+ certified specialists manage daily operations so you can focus on manufacturing and sourcing.",
  },
  {
    question: "Can beginners or new sellers start if they don't have a GST number yet?",
    answer: "Yes, absolutely! New entrepreneurs and manufacturers without an existing GST number are fully supported. Our dedicated onboarding specialists guide you through the business registration process and prepare your product catalog in advance so your seller account goes live smoothly without delays.",
  },
  {
    question: "How do I claim 3 Months of FREE Amazon Account Management?",
    answer: "The 3-month FREE management offer is an exclusive Amazon Authorized Partner initiative for sellers who open their new Amazon Seller Central account through A2Z Aaradhya. Complete account registration, initial cataloging, and 3 months of hands-on account management are provided completely free.",
  },
  {
    question: "Which e-commerce and digital growth platforms does A2Z Aaradhya manage?",
    answer: "A2Z Aaradhya provides end-to-end management for Amazon India (Unnati Gold Partner), Flipkart (Growth Specialist), Myntra (Fashion Partner), and Meesho (High-Volume Partner), alongside full-service Custom Website Development, Social Media Management, and Amazon Brand Storefront design.",
  },
  {
    question: "Does A2Z Aaradhya develop custom websites, Shopify and WooCommerce e-commerce stores?",
    answer: "Yes! We build high-converting websites across 7 categories: Corporate/Company websites, E-commerce stores (Shopify, WooCommerce, custom carts), Booking & Appointment systems, Content & Community platforms, custom Web Apps, AI-powered automated websites, and Personal/Creator portfolios. All websites are ultra-fast, 100% mobile responsive, and SEO-optimized for Google ranking.",
  },
  {
    question: "How does your Social Media Management and Meta Ads service scale e-commerce brands?",
    answer: "Our social media team builds high-ROI customer acquisition engines: viral Instagram reels production, aesthetic brand curation, active community management, content calendars, and targeted Meta (Instagram & Facebook) ad funnels designed to scale sales profitably.",
  },
  {
    question: "What is included in Amazon Brand Store and A+ Content (EBC) design?",
    answer: "We craft custom multi-page Amazon Brand Stores, premium A+ Enhanced Brand Content modules, brand story carousels, comparison matrices, and lifestyle infographics that elevate your brand perception and maximize conversion rates.",
  },
  {
    question: "Where are A2Z Aaradhya offices located for in-person meetings?",
    answer: "We have 7 physical branches across India: 4 offices in Surat (Simada Corporate HQ, Katargam, Adajan, Bhatar), Ahmedabad (Nikol), Rajkot (150ft Ring Road), and Delhi (Chandni Chowk). Sellers are welcome to visit our offices or connect with us on WhatsApp at +91 96010 55508.",
  },
];

export default function FaqSection({ onOpenModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <AnimateOnScroll animation="fade-down">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#166B82]/10 border border-[#166B82]/20 text-[#166B82] text-xs font-extrabold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={50}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3B48] font-outfit">
              Everything You Need to Know About Selling Online
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
              Clear answers regarding GST requirements, marketplace onboarding, and our account growth management services.
            </p>
          </AnimateOnScroll>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {defaultFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <AnimateOnScroll key={idx} animation="fade-up" delay={idx * 40}>
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#166B82]/40 shadow-md ring-1 ring-[#166B82]/15'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4.5 px-5 sm:px-6 flex items-center justify-between text-left gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-extrabold text-sm sm:text-base text-slate-900 flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 transition-colors ${
                        isOpen ? 'bg-[#166B82] text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        Q{idx + 1}
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#166B82]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <AnimateOnScroll animation="fade-up" delay={250}>
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0B3B48] to-[#166B82] text-white text-center space-y-4 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-extrabold !text-white font-outfit drop-shadow-sm">
              Ready to Scale Your E-Commerce Sales?
            </h3>
            <p className="text-slate-100 text-xs sm:text-sm max-w-xl mx-auto font-medium">
              Whether you are an active GST registered manufacturer or launching your first marketplace store, our specialists are ready to help.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-2xl mx-auto flex-wrap">
              <button
                type="button"
                onClick={() => onOpenModal && onOpenModal('audit')}
                className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 bg-white hover:bg-slate-100 text-[#0B3B48] font-black text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                Schedule Free Account Strategy
              </button>
              <button
                type="button"
                onClick={() => onOpenModal && onOpenModal('3months')}
                className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 bg-gradient-to-r from-amber-500 via-orange-500 to-[#FE6B03] hover:from-amber-600 hover:to-[#e05e02] text-white font-black text-xs sm:text-sm rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Apply for 3 Months FREE</span>
              </button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
