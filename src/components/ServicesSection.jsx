import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ShoppingBag, 
  ShoppingCart, 
  TrendingUp, 
  UserPlus, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight,
  Zap
} from 'lucide-react';
import { AmazonIcon, FlipkartIcon, MeeshoIcon, MyntraIcon } from './PlatformLogos';
import AnimateOnScroll from './AnimateOnScroll';

export default function ServicesSection({ onOpenModal }) {
  const tabOrder = ['amazon', 'myntra', 'flipkart', 'meesho', 'registration', 'recovery'];
  const [activeTab, setActiveTab] = useState('amazon');
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);
  const DURATION = 7000; // 7 seconds

  const resetTimer = useCallback((newTab) => {
    if (newTab) setActiveTab(newTab);
    setProgress(0);
    clearInterval(intervalRef.current);
    clearInterval(progressRef.current);

    // Progress bar: update every 70ms → 100 steps in 7s
    progressRef.current = setInterval(() => {
      setProgress(prev => Math.min(prev + (70 / DURATION) * 100, 100));
    }, 70);

    // Tab change every 7s
    intervalRef.current = setInterval(() => {
      setActiveTab(prev => {
        const idx = tabOrder.indexOf(prev);
        return tabOrder[(idx + 1) % tabOrder.length];
      });
      setProgress(0);
    }, DURATION);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      clearInterval(intervalRef.current);
      clearInterval(progressRef.current);
    };
  }, [resetTimer]);

  const services = {
    amazon: {
      title: "Amazon Account Management",
      badge: "Amazon Authorized Partner",
      description: "End-to-end management designed to scale your sales on Amazon India. From brand approval to keyword-optimized A+ listings and sponsored ads ROI.",
      features: [
        "Brand Approval & Category Ungating",
        "SEO Listing & High-Volume Keyword Optimization",
        "A+ Content (EBC) & Brand Storefront Design",
        "PPC Ads Management & Sponsored Products Optimization",
        "Daily Order & Inventory Health Monitoring",
        "FBA (Fulfillment by Amazon) Onboarding & Restock Planning",
        "Buy Box Strategy & Price Competitiveness",
        "Review & Rating Reputation Management"
      ]
    },
    flipkart: {
      title: "Flipkart Account Management",
      badge: "Flipkart Growth Specialist",
      description: "Unlock massive volume sales on Flipkart. We handle cataloging, PLA advertising campaigns, Smart Fulfillment, and seller tier upgrades.",
      features: [
        "Flipkart Seller Registration & Document Setup",
        "Rich Cataloging & Product Info Enrichment",
        "PLA (Product Listing Ads) & Big Billion Days Prep",
        "Smart Fulfillment & Express Delivery Setup",
        "Flipkart Assured Badge Eligibility Guidance",
        "Seller Tier Optimization (Bronze to Gold)",
        "Daily Order Processing & Return Reduction",
        "Competitor Price Analysis & Sales Promotion"
      ]
    },
    meesho: {
      title: "Meesho Sales Scaling",
      badge: "Meesho High-Volume Partner",
      description: "Tap into India's tier-2 and tier-3 shoppers with zero commission strategy. Optimized product cataloging and bulk order dispatch management.",
      features: [
        "Meesho Supplier Account Creation",
        "Bulk Product Upload & Catalog Upload",
        "Zero-Commission Pricing Strategy",
        "Meesho Advertisement Campaign Management",
        "Smart Catalog Recommendation & Trending Tags",
        "Dispatch Deadline Management (Avoiding Penalties)",
        "Return & RTO Mitigation Protocols",
        "Fast Settlement & Payment Reconciliation"
      ]
    },
    myntra: {
      title: "Myntra Account Management & Onboarding",
      badge: "Myntra Fashion Partner",
      description: "Scale your fashion brand on Myntra with end-to-end account management. From Standard to Premium onboarding — Good Listing → Right Price → Stock Available → Promotions → Visibility → Orders → More Sales.",
      features: [
        "Product Listing & SEO Title/Description Optimization",
        "Professional Images & Myntra-Compliant Catalog Upload",
        "Competitive Pricing Strategy & Market Analysis",
        "Inventory Management & Size/Variant Stock Updates",
        "Catalog Optimization & Regular Quality Checks",
        "Promotions & Offers — Sale Events Preparation",
        "Product Visibility via Category & Attribute Improvement",
        "Order Processing & On-Time Dispatch Management",
        "Returns & Cancellation Monitoring & Issue Resolution",
        "Daily Performance Analysis & Sales Optimization"
      ]
    },
    registration: {
      title: "New Seller Setup & 3 Months Free Management",
      badge: "🎁 Special Offer: 3 Months Free Management",
      description: "Complete hassle-free onboarding for new sellers. Launch your brand on Amazon, Flipkart & Meesho with 3 MONTHS 100% FREE ACCOUNT MANAGEMENT by our certified senior marketplace specialists.",
      features: [
        "🎁 3 Months 100% FREE Account Management Included",
        "GST, PAN & Bank Account Verification Support",
        "Trademark & Brand Registry / GTIN Exemption",
        "Full Cataloging & First 50 SEO Product Listings",
        "A+ Content (EBC) & Storefront Initial Setup",
        "Initial PPC Ad Campaign Strategy & Budgeting",
        "Shipping, Courier & Pickup Configuration",
        "Dedicated One-on-One Senior Account Manager"
      ]
    },
    recovery: {
      title: "Account Suspension & Recovery",
      badge: "Reinstatement Experts",
      description: "Was your seller account suspended, deactivated, or restricted? Our expert legal & compliance team drafts high-impact PoAs (Plan of Action).",
      features: [
        "In-depth Account Audit & Suspension Root Cause Analysis",
        "Customized Professional Plan of Action (PoA) Creation",
        "IP Infringement & Copyright Dispute Resolution",
        "Order Defect Rate (ODR) & LSR Health Restoration",
        "FBA Inventory & Funds Withdrawal Support",
        "Policy Compliance & Escalation Support",
        "Fast Turnaround (24-48 Hour PoA Submission)",
        "Post-Reinstatement Safety Monitoring"
      ]
    }
  };

  const activeData = services[activeTab];

  return (
    <section id="services" className="py-6 sm:py-24 relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <AnimateOnScroll animation="fade-up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4 text-cyan-600" />
            <span>End-to-End Marketplace Solutions</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-outfit">
            Services Built to Win on Every Platform
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg">
            Whether you want to launch, optimize ads, or reinstate a suspended account, our specialized platform teams have you covered.
          </p>
        </AnimateOnScroll>

        {/* Platform Selector Tabs */}
        <AnimateOnScroll animation="fade-up" delay={100} className="grid grid-cols-3 gap-2.5 sm:gap-3.5 mb-10 sm:mb-12 max-w-2xl mx-auto">

          {/* Amazon */}
          <button
            onClick={() => resetTimer('amazon')}
            className={`relative px-2 sm:px-4 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center overflow-hidden ${
              activeTab === 'amazon'
                ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25 scale-[1.02]'
                : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-sm hover:border-slate-300'
            }`}
          >
            <span className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2.5 text-center sm:text-left">
              <AmazonIcon className="w-5 h-5 sm:w-6 sm:h-6 rounded-md shrink-0 shadow-sm" />
              <span className="leading-tight">
                <span className="block">Amazon</span>
                <span className="block">Management</span>
              </span>
            </span>
            {/* Progress line */}
            <span className="absolute bottom-0 left-0 h-[3px] w-full bg-black/10 rounded-b-xl sm:rounded-b-2xl overflow-hidden">
              {activeTab === 'amazon' && (
                <span className="absolute top-0 left-0 h-full bg-white/70 rounded-full" style={{ width: `${progress}%` }} />
              )}
            </span>
          </button>

          {/* Myntra */}
          <button
            onClick={() => resetTimer('myntra')}
            className={`relative px-2 sm:px-4 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center overflow-hidden ${
              activeTab === 'myntra'
                ? 'bg-[#FF3F6C] text-white shadow-lg shadow-pink-500/25 scale-[1.02]'
                : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-sm hover:border-slate-300'
            }`}
          >
            <span className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2.5 text-center sm:text-left">
              <MyntraIcon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <span className="leading-tight">
                <span className="block">Myntra</span>
                <span className="block">Management</span>
              </span>
            </span>
            <span className="absolute bottom-0 left-0 h-[3px] w-full bg-black/10 rounded-b-xl sm:rounded-b-2xl overflow-hidden">
              {activeTab === 'myntra' && (
                <span className="absolute top-0 left-0 h-full bg-white/70 rounded-full" style={{ width: `${progress}%` }} />
              )}
            </span>
          </button>

          {/* Flipkart */}
          <button
            onClick={() => resetTimer('flipkart')}
            className={`relative px-2 sm:px-4 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center overflow-hidden ${
              activeTab === 'flipkart'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-[1.02]'
                : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-sm hover:border-slate-300'
            }`}
          >
            <span className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2.5 text-center sm:text-left">
              <FlipkartIcon className="w-5 h-5 sm:w-6 sm:h-6 rounded-md shrink-0 shadow-sm" />
              <span className="leading-tight">
                <span className="block">Flipkart</span>
                <span className="block">Management</span>
              </span>
            </span>
            <span className="absolute bottom-0 left-0 h-[3px] w-full bg-black/10 rounded-b-xl sm:rounded-b-2xl overflow-hidden">
              {activeTab === 'flipkart' && (
                <span className="absolute top-0 left-0 h-full bg-white/70 rounded-full" style={{ width: `${progress}%` }} />
              )}
            </span>
          </button>

          {/* Meesho */}
          <button
            onClick={() => resetTimer('meesho')}
            className={`relative px-2 sm:px-4 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center overflow-hidden ${
              activeTab === 'meesho'
                ? 'bg-pink-600 text-white shadow-lg shadow-pink-500/25 scale-[1.02]'
                : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-sm hover:border-slate-300'
            }`}
          >
            <span className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2.5 text-center sm:text-left">
              <MeeshoIcon className="w-5 h-5 sm:w-6 sm:h-6 rounded-md shrink-0 shadow-sm" />
              <span className="leading-tight">
                <span className="block">Meesho</span>
                <span className="block">Growth</span>
              </span>
            </span>
            <span className="absolute bottom-0 left-0 h-[3px] w-full bg-black/10 rounded-b-xl sm:rounded-b-2xl overflow-hidden">
              {activeTab === 'meesho' && (
                <span className="absolute top-0 left-0 h-full bg-white/70 rounded-full" style={{ width: `${progress}%` }} />
              )}
            </span>
          </button>

          {/* New Seller */}
          <button
            onClick={() => resetTimer('registration')}
            className={`relative px-2 sm:px-4 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center overflow-hidden ${
              activeTab === 'registration'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 scale-[1.02]'
                : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-sm hover:border-slate-300'
            }`}
          >
            <span className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2.5 text-center sm:text-left">
              <UserPlus className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <span className="leading-tight">
                <span className="block">New Seller</span>
                <span className="block">Setup</span>
              </span>
            </span>
            <span className="absolute bottom-0 left-0 h-[3px] w-full bg-black/10 rounded-b-xl sm:rounded-b-2xl overflow-hidden">
              {activeTab === 'registration' && (
                <span className="absolute top-0 left-0 h-full bg-white/70 rounded-full" style={{ width: `${progress}%` }} />
              )}
            </span>
          </button>

          {/* Account Reinstatement */}
          <button
            onClick={() => resetTimer('recovery')}
            className={`relative px-2 sm:px-4 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center overflow-hidden ${
              activeTab === 'recovery'
                ? 'bg-red-600 text-white shadow-lg shadow-red-500/25 scale-[1.02]'
                : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-sm hover:border-slate-300'
            }`}
          >
            <span className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2.5 text-center sm:text-left">
              <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <span className="leading-tight">
                <span className="block">Account</span>
                <span className="block">Reinstatement</span>
              </span>
            </span>
            <span className="absolute bottom-0 left-0 h-[3px] w-full bg-black/10 rounded-b-xl sm:rounded-b-2xl overflow-hidden">
              {activeTab === 'recovery' && (
                <span className="absolute top-0 left-0 h-full bg-white/70 rounded-full" style={{ width: `${progress}%` }} />
              )}
            </span>
          </button>

        </AnimateOnScroll>

        {/* Active Tab Card */}
        <AnimateOnScroll animation="scale-in" delay={200}>
          <div className="bg-white rounded-3xl p-5 sm:p-12 border border-slate-200 shadow-xl relative">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-5 sm:space-y-6">
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
                  {activeData.badge}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-outfit">
                  {activeData.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {activeData.description}
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-700">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    <span>A2Z Service Commitment</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    Dedicated platform manager assigned to your brand with daily metric updates and weekly progress strategy reviews.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenModal('service')}
                    className="w-full sm:w-auto px-5 sm:px-7 py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <span className="sm:hidden">Request Custom Strategy</span>
                    <span className="hidden sm:inline">Request Custom Strategy for {activeData.title}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                </div>
              </div>

              {/* Right Column: Checklist */}
              <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  What's Included in {activeData.title}:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeData.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-slate-800 text-sm font-semibold">
                      <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
