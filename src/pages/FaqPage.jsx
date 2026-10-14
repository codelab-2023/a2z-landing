import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  X,
  Store,
  Layers
} from 'lucide-react';
import SEO from '../components/SEO';
import AnimateOnScroll from '../components/AnimateOnScroll';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { MyntraIcon, AmazonIcon, FlipkartIcon, MeeshoIcon } from '../components/PlatformLogos';

export const top10Faqs = [
  // ── Q1: GST REQUIREMENT & NEW SELLERS ──
  {
    tag: "GST & New Sellers",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    question: "Is an Active GST Number mandatory to sell on Amazon, Flipkart, Myntra, and Meesho? How can beginners start without one?",
    answer: `Yes, for inter-state commerce and full-scale selling across Amazon, Flipkart, Myntra, and Meesho, having an active GST certificate/number is legally mandatory under Indian tax regulations.

However, if you are a beginner, artisan, weaver, or manufacturer who does not have a GST number yet:
• A2Z Aaradhya provides complete end-to-end guidance to obtain your GST registration, trade license, and business documentation.
• While your GST application is being processed, our team simultaneously prepares your brand identity, product photos, size charts, and catalog templates.
• As soon as your GST number is issued, our priority onboarding specialists take your seller accounts live within 24 to 48 hours without delay.`,
  },

  // ── Q2: MYNTRA FASHION DETAILS ──
  {
    tag: "Myntra Fashion Specialist",
    tagColor: "bg-pink-50 text-[#FF3F6C] border-pink-200",
    question: "How does A2Z Aaradhya onboard and manage fashion & apparel brands on Myntra? (Requirements, PPMP & FBN)",
    answer: `A2Z Aaradhya is an official Myntra Fashion Growth Partner specializing in ethnic wear, sarees, kurtis, western wear, footwear, and accessories:
• Mandatory Requirements: Active GSTIN, PAN, and Registered Trademark Certificate (Class 25 for apparel) OR an official Brand Authorization NOC from the brand owner, plus active bank account with cancelled cheque.
• Studio Cataloging & Listing: High-resolution photoshoot curation adhering to Myntra's strict guidelines (model shoots, 1440x2000px min resolution, clean lighting), attribute-rich descriptions, and precision size charts.
• PPMP vs FBN Fulfillment Setup:
   - PPMP (Seller Fulfilled): Orders dispatched directly from your factory/warehouse using Myntra logistics (Ekart/Shadowfax).
   - FBN (Fulfilled by Myntra): Bulk-shipping to Myntra fulfillment centers to earn the 'Myntra Assured' badge and 24-48 hr customer delivery.
• EORS & Festival Campaigns: Strategic participation in Myntra End of Reason Sale (EORS) and Big Fashion Festival with deal nominations and Myntra PLA sponsored ads.`,
  },

  // ── Q3: AMAZON 3 MONTHS FREE OFFER ──
  {
    tag: "Amazon Authorized Partner",
    tagColor: "bg-amber-50 text-amber-800 border-amber-200",
    question: "How do I claim 3 Months of 100% FREE Amazon Account Management?",
    answer: `The 3-Month FREE Amazon Account Management offer is an exclusive Amazon Authorized Partner initiative for businesses that launch their new Amazon Seller Central account through A2Z Aaradhya.

What is included 100% Free:
• Complete seller registration, bank verification, and GTIN/UPC barcode exemption.
• Professional SEO cataloging for your first 50 product listings.
• Amazon A+ Enhanced Brand Content (EBC) and Brand Storefront design.
• Initial Sponsored Ads (PPC) keyword strategy and launch budgeting.
• 3 full months of dedicated hands-on account management by a certified senior manager with zero agency fees and no revenue share.`,
  },

  // ── Q4: FLIPKART GROWTH & F-ASSURED ──
  {
    tag: "Flipkart Growth Specialist",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    question: "How do you scale sales on Flipkart, and what is the process to get the Flipkart Assured (f-Assured) badge?",
    answer: `Flipkart favors sellers with fast fulfillment speed and high inventory reliability. A2Z Aaradhya scales your Flipkart account through:
• Seller Tier Upgrades: Advancing your tier from Bronze to Silver and Gold by maintaining >98% on-time dispatch and <1.5% seller cancellation rates.
• Flipkart Assured (f-Assured): Setting up Smart Fulfillment and onboarding your inventory to Flipkart Fulfillment Centers, unlocking the f-Assured trust badge which yields up to 3x higher search visibility.
• PLA & PCA Ads Management: Managing Product Listing Ads and festive promotions for Big Billion Days and Super Saver Days with targeted keyword bidding.`,
  },

  // ── Q5: MEESHO SCALING & 0% COMMISSION ──
  {
    tag: "Meesho High-Volume Scaling",
    tagColor: "bg-purple-50 text-purple-700 border-purple-200",
    question: "How does selling on Meesho work with 0% commission, and how do you handle high-volume bulk cataloging?",
    answer: `Meesho operates on a 0% commission model, allowing manufacturers, wholesalers, and traders to sell directly to tier-2 and tier-3 Indian consumers at competitive prices with high margin retention.

How A2Z Aaradhya scales your Meesho account:
• Bulk Catalog Uploads: Uploading hundreds of SKUs with automated title tagging, trending category attributes, and keyword placement.
• Pricing Strategy: Formulating smart price points considering zero commission while accounting for packaging and courier returns.
• Rapid Dispatch SLA: Managing daily packing queues to ensure dispatch within Meesho's strict 24-hour window, preventing cancellation penalties and safeguarding supplier scores.`,
  },

  // ── Q6: DAILY ACCOUNT MANAGEMENT OPERATIONS ──
  {
    tag: "Daily Operations & SOP",
    tagColor: "bg-teal-50 text-[#166B82] border-teal-200",
    question: "What daily operational services does A2Z Aaradhya provide under Full Marketplace Account Management?",
    answer: `Our 70+ certified account managers operate as your dedicated e-commerce department on a day-to-day basis:
• Daily Order & Fulfillment: Generating shipping labels, downloading manifests, and coordinating courier pickups.
• ROI-Driven PPC Advertising: Daily bid optimization, keyword harvesting, and negative keyword pruning to maintain target ACoS/ROAS.
• Buy Box & Competitor Defense: Defending your Buy Box against unauthorized listing hijackers and monitoring competitor price drops.
• Inventory Health Monitoring: Tracking fast-moving SKUs, restock alerts, stranded inventory, and warehouse inbound shipments.
• Review & Reputation Management: Prompt resolution of customer queries, negative feedback mitigation, and listing optimization.`,
  },

  // ── Q7: RETURN & RTO REDUCTION SYSTEM ──
  {
    tag: "Return & RTO Control",
    tagColor: "bg-rose-50 text-rose-700 border-rose-200",
    question: "How do you control and minimize high returns and RTO (Return to Origin) for fashion and marketplace products?",
    answer: `High returns and RTO severely erode seller profits. A2Z Aaradhya enforces a systematic 4-step Return Reduction Protocol:
1. Precise Measurement Size Charts: Localized garment measurement charts (chest, waist, hip, length, fabric stretch percentage) to eliminate size confusion.
2. Color & Fabric Accuracy: High-fidelity product photography ensuring textures and colors match reality, preventing 'color mismatch' disputes.
3. Defect & Review Auditing: Analyzing weekly return comments to pinpoint and pause poorly fitting or defect-prone styles before they cause account health penalties.
4. SPF Claims Recovery: Immediate filing of Seller Protection Fund (SPF) claims with photographic and video evidence for customer returns that are swapped, empty, or damaged.`,
  },

  // ── Q8: TRADEMARK & BRAND REGISTRY FOR MANUFACTURERS ──
  {
    tag: "Brand Registry & Trademark",
    tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    question: "Can manufacturers, weavers, and wholesalers sell under their own brand without an existing registered trademark?",
    answer: `Yes, absolutely! Manufacturers and wholesalers from major textile and industrial hubs (Surat, Ahmedabad, Tirupur, Delhi, Jaipur) often produce high-quality goods but lack an established consumer brand.

A2Z Aaradhya provides complete brand launch assistance:
• Trademark Application Filing: Assisting you with TM application filing (under Class 25 for clothing/textiles or relevant classes) to obtain an immediate TM filing number.
• Brand Registry & Gating: Using TM status to enroll in Amazon Brand Registry, Flipkart Brand Authorization, and Myntra Brand Gating.
• Barcode (GTIN) Exemption: Securing GTIN/UPC barcode exemptions so you do not need to purchase expensive GS1 barcodes.
This enables you to sell directly under your own private label with full pricing autonomy and higher profit margins.`,
  },

  // ── Q9: PAYMENTS & FEE RECONCILIATION ──
  {
    tag: "Payments & Reconciliation",
    tagColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    question: "How do marketplace payouts work, and how does A2Z Aaradhya protect sellers against unfair deduction errors?",
    answer: `Marketplaces disburse payments directly into your registered bank account on a transparent weekly or bi-weekly cycle, deducting marketplace commissions, logistics/closing fees, and return penalties.

However, calculation discrepancies and weight overcharges are common. A2Z Aaradhya safeguards your revenue by:
• Automated Settlement Audits: Auditing every settlement sheet against agreed contractual commission rates and actual package dimensions.
• Weight Discrepancy Disputes: Challenging inaccurate courier volumetric weight slabs charged by marketplace logistics.
• Claim Recovery: Raising formal dispute tickets to recover over-deducted commissions, lost in-transit inventory reimbursements, and incorrect return penalties.`,
  },

  // ── Q10: 7 BRANCHES & IN-PERSON SUPPORT ──
  {
    tag: "Branches & Direct Support",
    tagColor: "bg-cyan-50 text-cyan-800 border-cyan-200",
    question: "Where are A2Z Aaradhya physical offices located, and how can sellers meet your team for in-person support?",
    answer: `A2Z Aaradhya operates 7 physical corporate and regional branches across India with over 70 certified marketplace specialists:
• Surat Corporate HQ: Simada (144, 1st floor, Pramukh Park Soc, opp. Royal Plaza, Bapa Sitaram Chowk)
• Surat Regional Branches: Katargam, Adajan, and Bhatar
• Ahmedabad Regional Branch: Nikol (607, Blueberry, Nr. Bhojaldham Residency, Gurukul Circle)
• Rajkot Regional Branch: 150ft Ring Road (N-1307 Twin Star, near Nana Mava Circle)
• Delhi Regional Branch: Chandni Chowk (serving North India textile, apparel, and wholesale hubs)

Sellers, manufacturers, and brand owners are welcome to visit any branch during business hours (Mon–Sat, 9:30 AM – 7:00 PM) for face-to-face account reviews, or call our direct helpline at +91 96010 55508.`,
  },
];

export default function FaqPage({ onOpenModal }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

  // Filter the 10 FAQs if the user searches
  const filteredFaqs = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return top10Faqs;

    return top10Faqs.filter((faq) => {
      return (
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.tag.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="pt-20 sm:pt-28 pb-12 sm:pb-24 space-y-10 sm:space-y-16">
      <SEO
        title="Top 10 Frequently Asked Questions (FAQ) | Myntra, Amazon, Flipkart, Meesho & GST Seller Guide - A2Z Aaradhya"
        description="Top 10 most important questions and answers about selling on Myntra, Amazon, Flipkart & Meesho: GST requirements, Myntra PPMP/FBN onboarding, 3 Months Free Amazon Management, return reduction, and trademark registry."
        keywords="Myntra seller FAQ, Myntra onboarding requirements, GST for Amazon Flipkart, Myntra PPMP FBN difference, ecommerce seller account management questions, A2Z Aaradhya FAQ"
        canonicalPath="/faq"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Frequently Asked Questions', path: '/faq' },
        ]}
        faqs={top10Faqs}
      />

      {/* Hero / Header Section */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200/80 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <AnimateOnScroll animation="fade-down">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#166B82]/10 border border-[#166B82]/20 text-[#166B82] text-xs font-extrabold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Seller Knowledge Base &amp; Help Center</span>
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={50}>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B3B48] font-outfit tracking-tight">
              Frequently Asked Questions
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              Clear, transparent answers to the 10 most essential questions about Myntra, Amazon, Flipkart, Meesho, GST rules, and our verified account management services.
            </p>
          </AnimateOnScroll>

          {/* Quick Platform Badges Row */}
          <AnimateOnScroll animation="fade-up" delay={120} className="pt-2">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] font-extrabold text-slate-700">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-50 border border-pink-200 text-[#FF3F6C]">
                <MyntraIcon className="w-4 h-4 bg-white rounded-md p-0.5" />
                <span>Myntra Fashion Partner</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900">
                <AmazonIcon className="w-4 h-4 bg-white rounded-md p-0.5" />
                <span>Amazon Authorized Partner</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-900">
                <FlipkartIcon className="w-4 h-4 bg-white rounded-md p-0.5" />
                <span>Flipkart Growth</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-200 text-purple-900">
                <MeeshoIcon className="w-4 h-4 bg-white rounded-md p-0.5" />
                <span>Meesho Scaling</span>
              </span>
            </div>
          </AnimateOnScroll>

          {/* Search Bar */}
          <AnimateOnScroll animation="fade-up" delay={150} className="max-w-2xl mx-auto pt-3">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search the 10 questions (e.g. Myntra, GST, FBN, 3 Months Free, returns)..."
                className="w-full pl-12 pr-10 py-3.5 sm:py-4 rounded-2xl bg-white border border-slate-300 shadow-lg shadow-slate-200/50 text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#166B82] focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Main Single List Area — All 10 Questions Together */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Counter Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2 text-sm font-extrabold text-[#0B3B48]">
            <Layers className="w-4 h-4 text-[#166B82]" />
            <span>Top 10 Important Questions &amp; Answers</span>
          </div>
          <span className="text-xs font-bold text-slate-500">
            Showing {filteredFaqs.length} of {top10Faqs.length} FAQs
          </span>
        </div>

        {/* Single Unified List (All 10 Together) */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
              <HelpCircle className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="text-lg font-extrabold text-slate-700">No matching question found</h3>
              <p className="text-sm text-slate-500">
                Please clear your search query to see all 10 essential questions.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="mt-2 px-4 py-2 bg-[#166B82] text-white font-extrabold text-xs rounded-xl shadow-xs"
              >
                Show All 10 Questions
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              const isMyntra = faq.tag.includes('Myntra');

              return (
                <AnimateOnScroll key={idx} animation="fade-up" delay={Math.min(idx * 30, 200)}>
                  <div
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? isMyntra
                          ? 'bg-white border-pink-400 shadow-lg ring-1 ring-pink-400/20'
                          : 'bg-white border-[#166B82]/60 shadow-lg ring-1 ring-[#166B82]/20'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full py-4.5 px-5 sm:px-6 flex items-start sm:items-center justify-between text-left gap-4 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start sm:items-center gap-3.5">
                        <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 transition-colors ${
                          isOpen
                            ? isMyntra ? 'bg-[#FF3F6C] text-white' : 'bg-[#166B82] text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          Q{idx + 1}
                        </span>
                        <div>
                          <span className="font-extrabold text-sm sm:text-base text-slate-900 block leading-snug">
                            {faq.question}
                          </span>
                          <span className={`inline-block mt-1 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border ${faq.tagColor}`}>
                            {faq.tag}
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 mt-1 sm:mt-0 transition-transform duration-300 ${
                          isOpen
                            ? isMyntra ? 'rotate-180 text-[#FF3F6C]' : 'rotate-180 text-[#166B82]'
                            : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-3 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed border-t border-slate-100 bg-slate-50/60 animate-in fade-in duration-200 space-y-2 whitespace-pre-line">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </AnimateOnScroll>
              );
            })
          )}
        </div>

        {/* Bottom CTA Box */}
        <AnimateOnScroll animation="fade-up" delay={150}>
          <div className="p-7 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0B3B48] via-[#10566A] to-[#166B82] text-white text-center space-y-5 shadow-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#9ED6CD] text-[11px] font-bold tracking-wider uppercase border border-white/15">
              <Sparkles className="w-3.5 h-3.5" />
              Need Personalized Guidance?
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold !text-white font-outfit tracking-tight drop-shadow-sm">
              Ready to Scale Your E-Commerce Sales?
            </h3>
            <p className="text-slate-100 text-xs sm:text-sm max-w-xl mx-auto font-medium leading-relaxed">
              Whether you are an active GST registered manufacturer or launching your first marketplace store on Myntra, Amazon, Flipkart, or Meesho, our certified account managers are ready to assist you.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-3xl mx-auto flex-wrap">
              <button
                type="button"
                onClick={() => onOpenModal && onOpenModal('audit')}
                className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 bg-white hover:bg-slate-100 text-[#0B3B48] font-black text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>Schedule Free Account Strategy</span>
              </button>
              <button
                type="button"
                onClick={() => onOpenModal && onOpenModal('3months')}
                className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 bg-gradient-to-r from-amber-500 via-orange-500 to-[#FE6B03] hover:from-amber-600 hover:to-[#e05e02] text-white font-black text-xs sm:text-sm rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Apply for 3 Months FREE</span>
              </button>
              <a
                href="https://wa.me/919601055508?text=Hello%20A2Z%20Aaradhya,%20I%20have%20questions%20about%20marketplace%20account%20management."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 bg-[#25D366] hover:bg-[#1faa53] text-white font-black text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </AnimateOnScroll>

      </div>
    </div>
  );
}
