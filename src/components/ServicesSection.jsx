import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ShoppingBag, 
  ShoppingCart, 
  TrendingUp, 
  UserPlus, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Share2,
  Globe,
  Store,
  Layers,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { AmazonIcon, FlipkartIcon, MeeshoIcon, MyntraIcon } from './PlatformLogos';
import AnimateOnScroll from './AnimateOnScroll';

export default function ServicesSection({ onOpenModal }) {
  // 9 Services strictly ordered line-to-line as requested
  const tabOrder = [
    'amazon',
    'myntra',
    'flipkart',
    'meesho',
    'social',
    'webdev',
    'brandstore',
    'registration',
    'recovery'
  ];

  const [activeTab, setActiveTab] = useState('amazon');
  const [mobileOpenTab, setMobileOpenTab] = useState('amazon');
  const intervalRef = useRef(null);
  const DURATION = 8000; // 8 seconds per slide

  const switchTab = useCallback((newTab) => {
    if (newTab) setActiveTab(newTab);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveTab(prev => {
        const idx = tabOrder.indexOf(prev);
        return tabOrder[(idx + 1) % tabOrder.length];
      });
    }, DURATION);
  }, [tabOrder]);

  useEffect(() => {
    switchTab();
    return () => clearInterval(intervalRef.current);
  }, [switchTab]);

  const services = {
    amazon: {
      orderNum: 1,
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
    myntra: {
      orderNum: 2,
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
    flipkart: {
      orderNum: 3,
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
      orderNum: 4,
      title: "Meesho Account Management",
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
    social: {
      orderNum: 5,
      title: "Social Media Management",
      badge: "Social Growth & Performance Marketing",
      description: "Transform your social media channels into powerful customer acquisition engines. Creative reels production, brand aesthetic curation, active community management, and high-ROI Meta ad funnels across Instagram & Facebook.",
      features: [
        "Instagram & Facebook Page Optimization & Brand Curation",
        "Viral Reels Creation, Short Videos & Aesthetic Graphic Posts",
        "Targeted Meta Ads Setup (High-ROI E-Commerce Sales & Lead Funnels)",
        "Influencer Outreach & Strategic Brand Collaborations",
        "Weekly / Monthly Content Calendar & Daily Active Posting",
        "Audience DM Automation, Inquiries & Comment Management",
        "Brand Identity, Grid Layout & Story Highlight Styling",
        "Detailed Monthly Growth, Reach & Return On Ad Spend (ROAS) Reports"
      ]
    },
    webdev: {
      orderNum: 6,
      title: "Website Development",
      badge: "Custom Web & E-Commerce Engineering",
      description: "Fast, modern, and high-converting websites engineered to elevate your brand presence and scale revenue. We develop 7 specialized types of web solutions customized to your business goals.",
      webTypes: [
        { id: 1, title: "Business / Company websites", desc: "Corporate brand profiles, lead-generation & service showcase portals" },
        { id: 2, title: "E-commerce", desc: "Shopify, WooCommerce, custom online stores, cart & payment gateway setup" },
        { id: 3, title: "Booking aur Appointment", desc: "Consulting, salon, clinic, coaching & service scheduling platforms" },
        { id: 4, title: "Content aur Community", desc: "Blogs, news portals, member platforms, forums & LMS course sites" },
        { id: 5, title: "Web Apps aur Tools", desc: "Interactive calculators, client dashboards, SaaS apps & internal business utilities" },
        { id: 6, title: "AI-powered websites", desc: "AI chatbot assistants, smart recommendation engines & automated workflows" },
        { id: 7, title: "Personal aur Special", desc: "Executive portfolios, creator profiles, resume sites & event landing pages" }
      ],
      features: [
        "1. Business / Company Websites (Corporate Brand Authority & Lead Generation)",
        "2. E-Commerce Stores (Shopify & WooCommerce with Payment Gateway & Shipping)",
        "3. Booking & Appointment Systems (Automated Calendar & Customer Notifications)",
        "4. Content & Community Platforms (High-Traffic Blogs, Memberships & Forums)",
        "5. Custom Web Apps & Cloud Tools (Client Portals, Dashboards & SaaS Prototypes)",
        "6. AI-Powered Websites & Chatbots (Smart Automations & AI Conversational Agents)",
        "7. Personal, Creator & Special Showcase Sites (Fast, Animated & High-Converting)",
        "100% Mobile Responsive, Ultra-Fast Load Speeds & Secure Cloud Hosting"
      ]
    },
    brandstore: {
      orderNum: 7,
      title: "Amazon Brand Store & A+ Content",
      badge: "Amazon Brand Registry Specialist",
      description: "Turn Amazon shoppers into loyal repeat customers with an immersive multi-page Brand Storefront and premium A+ Enhanced Brand Content (EBC) modules that maximize buyer trust and conversion rates.",
      features: [
        "Custom Multi-Page Amazon Brand Store Design & Architecture",
        "Premium A+ Content (EBC) Modules & Comparison Graphics",
        "Brand Story Carousel & Cross-Selling Product Grid",
        "High-Resolution Lifestyle Mockups & Infographic Graphics",
        "Amazon Brand Registry Assistance & Protection Setup",
        "Storefront SEO & Sponsored Brand Ad Traffic Alignment",
        "Mobile & Desktop Responsive Layout Optimization",
        "Conversion Rate Optimization (CRO) Focused Layouts"
      ]
    },
    registration: {
      orderNum: 8,
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
      orderNum: 9,
      title: "Account Suspension & Reinstatement",
      badge: "Reinstatement & Compliance Experts",
      description: "Was your seller account suspended, deactivated, or restricted? Our expert legal & compliance team drafts high-impact PoAs (Plan of Action) to restore your selling privileges quickly.",
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

  const tabList = [
    {
      key: 'amazon',
      order: 1,
      line1: 'Amazon',
      line2: 'Management',
      Icon: AmazonIcon,
      activeBg: 'bg-amber-500 text-white shadow-lg shadow-amber-500/25 scale-[1.02]',
      mobileActiveBg: 'bg-amber-500 text-white shadow-md',
      badgeBg: 'bg-amber-100 text-amber-900',
      iconColor: '',
      barKey: 'amazon-bar'
    },
    {
      key: 'myntra',
      order: 2,
      line1: 'Myntra',
      line2: 'Management',
      Icon: MyntraIcon,
      activeBg: 'bg-[#FF3F6C] text-white shadow-lg shadow-pink-500/25 scale-[1.02]',
      mobileActiveBg: 'bg-[#FF3F6C] text-white shadow-md',
      badgeBg: 'bg-pink-100 text-pink-900',
      iconColor: '',
      barKey: 'myntra-bar'
    },
    {
      key: 'flipkart',
      order: 3,
      line1: 'Flipkart',
      line2: 'Management',
      Icon: FlipkartIcon,
      activeBg: 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-[1.02]',
      mobileActiveBg: 'bg-blue-600 text-white shadow-md',
      badgeBg: 'bg-blue-100 text-blue-900',
      iconColor: '',
      barKey: 'flipkart-bar'
    },
    {
      key: 'meesho',
      order: 4,
      line1: 'Meesho',
      line2: 'Management',
      Icon: MeeshoIcon,
      activeBg: 'bg-pink-600 text-white shadow-lg shadow-pink-500/25 scale-[1.02]',
      mobileActiveBg: 'bg-pink-600 text-white shadow-md',
      badgeBg: 'bg-pink-100 text-pink-900',
      iconColor: '',
      barKey: 'meesho-bar'
    },
    {
      key: 'social',
      order: 5,
      line1: 'Social Media',
      line2: 'Management',
      Icon: Share2,
      activeBg: 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 scale-[1.02]',
      mobileActiveBg: 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md',
      badgeBg: 'bg-purple-100 text-purple-900',
      iconColor: 'text-purple-600',
      barKey: 'social-bar'
    },
    {
      key: 'webdev',
      order: 6,
      line1: 'Website',
      line2: 'Development',
      Icon: Globe,
      activeBg: 'bg-[#166B82] text-white shadow-lg shadow-[#166B82]/25 scale-[1.02]',
      mobileActiveBg: 'bg-[#166B82] text-white shadow-md',
      badgeBg: 'bg-teal-100 text-teal-900',
      iconColor: 'text-[#166B82]',
      barKey: 'webdev-bar'
    },
    {
      key: 'brandstore',
      order: 7,
      line1: 'Amazon',
      line2: 'Brand Store',
      Icon: Store,
      activeBg: 'bg-amber-600 text-white shadow-lg shadow-amber-600/25 scale-[1.02]',
      mobileActiveBg: 'bg-amber-600 text-white shadow-md',
      badgeBg: 'bg-amber-100 text-amber-900',
      iconColor: 'text-amber-600',
      barKey: 'brandstore-bar'
    },
    {
      key: 'registration',
      order: 8,
      line1: 'New Seller',
      line2: 'Setup',
      Icon: UserPlus,
      activeBg: 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 scale-[1.02]',
      mobileActiveBg: 'bg-emerald-600 text-white shadow-md',
      badgeBg: 'bg-emerald-100 text-emerald-900',
      iconColor: 'text-emerald-600',
      barKey: 'reg-bar'
    },
    {
      key: 'recovery',
      order: 9,
      line1: 'Account',
      line2: 'Reinstatement',
      Icon: ShieldAlert,
      activeBg: 'bg-red-600 text-white shadow-lg shadow-red-500/25 scale-[1.02]',
      mobileActiveBg: 'bg-red-600 text-white shadow-md',
      badgeBg: 'bg-red-100 text-red-900',
      iconColor: 'text-red-600',
      barKey: 'rec-bar'
    }
  ];

  const renderDetailContent = (data, key) => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
      {/* Left Column */}
      <div className="lg:col-span-5 space-y-4 sm:space-y-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#166B82] text-white text-xs font-black">
            #{data.orderNum}
          </span>
          <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
            {data.badge}
          </span>
        </div>

        <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 font-outfit">
          {data.title}
        </h3>

        <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
          {data.description}
        </p>

        <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 sm:space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-700">
            <CheckCircle2 className="w-4 h-4 text-cyan-600" />
            <span>A2Z Service Commitment</span>
          </div>
          <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-relaxed">
            Dedicated specialist assigned to your brand with transparent milestone updates and weekly progress strategy reviews.
          </p>
        </div>

        <div className="pt-1 sm:pt-2">
          <button
            onClick={() => {
              if (key === 'webdev') onOpenModal('webdev');
              else if (key === 'social') onOpenModal('social');
              else if (key === 'brandstore') onOpenModal('brandstore');
              else if (key === 'registration') onOpenModal('3months');
              else onOpenModal('service');
            }}
            className="w-full sm:w-auto px-5 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl sm:rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 text-xs sm:text-base cursor-pointer"
          >
            <span>Request Custom Strategy for {data.title}</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>
      </div>

      {/* Right Column: 7 Categories for WebDev OR Checklist for Others */}
      <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-4 sm:p-7 border border-slate-200 space-y-4">
        {data.webTypes ? (
          <div className="space-y-3.5">
            <div className="flex items-center justify-between pb-1 border-b border-slate-200/70">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#166B82]">
                <Sparkles className="w-4 h-4 text-cyan-600" />
                <span>7 Specialized Website Types We Build:</span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider bg-cyan-100 text-[#166B82] px-2.5 py-0.5 rounded-full border border-cyan-200">
                Custom Solutions
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {data.webTypes.map((wt) => (
                <div
                  key={wt.id}
                  className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-[#166B82]/40 hover:shadow-sm transition-all flex items-start gap-2.5"
                >
                  <span className="w-6 h-6 rounded-lg bg-[#166B82] text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5 shadow-xs">
                    {wt.id}
                  </span>
                  <div className="min-w-0">
                    <h5 className="text-xs font-extrabold text-slate-900 leading-snug">
                      {wt.title}
                    </h5>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-0.5">
                      {wt.desc}
                    </p>
                  </div>
                </div>
              ))}

              {/* 8th Balanced Card for 2x4 symmetry */}
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#166B82]/10 to-cyan-50 border border-[#166B82]/25 shadow-xs flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5 shadow-xs">
                  ✓
                </span>
                <div className="min-w-0">
                  <h5 className="text-xs font-extrabold text-[#0B3B48] leading-snug">
                    All Websites Include
                  </h5>
                  <p className="text-[11px] text-slate-600 font-medium leading-relaxed mt-0.5">
                    100% Mobile Responsive, Fast Speed, SSL Security &amp; SEO Optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              What's Included in {data.title}:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
              {data.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 sm:gap-3 text-slate-800 text-xs sm:text-sm font-semibold">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <section id="services" className="py-6 sm:py-24 relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <AnimateOnScroll animation="fade-up" className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4 text-cyan-600" />
            <span>Complete 360° Digital & Marketplace Solutions</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-outfit">
            Services Built to Win on Every Platform
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-lg">
            From marketplace management & brand stores to viral social media marketing and bespoke website engineering — explore our dedicated platform teams.
          </p>
        </AnimateOnScroll>

        {/* ─── MOBILE ACCORDION VIEW (Direct details below clicked button) ─── */}
        <div className="block lg:hidden space-y-3 mb-10">
          {tabList.map((tab) => {
            const isActive = activeTab === tab.key;
            const isMobileOpen = mobileOpenTab === tab.key;
            return (
              <div
                key={tab.key}
                className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden transition-all duration-300"
              >
                {/* Accordion Tab Header Button */}
                <button
                  onClick={() => {
                    setMobileOpenTab(prev => prev === tab.key ? null : tab.key);
                    switchTab(tab.key);
                  }}
                  className={`w-full px-4 py-3.5 flex items-center justify-between font-bold text-left transition-all duration-300 relative cursor-pointer ${
                    isMobileOpen
                      ? tab.mobileActiveBg
                      : 'bg-white text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Number Badge */}
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black shrink-0 ${
                        isMobileOpen ? 'bg-white/25 text-white' : tab.badgeBg
                      }`}
                    >
                      {tab.order}
                    </span>

                    {/* Platform Icon */}
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                        isMobileOpen
                          ? 'bg-white/20'
                          : 'bg-slate-50 border border-slate-200/80 shadow-xs'
                      }`}
                    >
                      <tab.Icon
                        className={`w-5 h-5 object-contain ${
                          isMobileOpen
                            ? 'text-white'
                            : tab.iconColor || ''
                        }`}
                      />
                    </div>

                    {/* Title */}
                    <span className="text-xs sm:text-sm font-extrabold truncate">
                      {tab.line1} {tab.line2}
                    </span>
                  </div>

                  {/* Dropdown Chevron */}
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                      isMobileOpen ? 'rotate-180 text-white' : 'text-slate-400'
                    }`}
                  />

                  {/* Progress bar line when open */}
                  {isMobileOpen && (
                    <span className="absolute bottom-0 left-0 h-[2.5px] w-full bg-black/10 overflow-hidden">
                      <span
                        key={tab.barKey}
                        className="absolute top-0 left-0 h-full bg-white/70 rounded-full service-tab-fill"
                      />
                    </span>
                  )}
                </button>

                {/* Mobile Accordion Details — expands right under the clicked button */}
                {isMobileOpen && (
                  <div className="p-4 sm:p-6 bg-white border-t border-slate-200 space-y-4 animate-fade-in">
                    {renderDetailContent(services[tab.key], tab.key)}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ─── DESKTOP VIEW (Grid Tabs on top + Shared Card below) ─── */}
        <div className="hidden lg:block">
          {/* 9 Services Selector Tabs */}
          <AnimateOnScroll animation="fade-up" delay={100} className="grid grid-cols-3 gap-3.5 mb-12 max-w-5xl mx-auto">
            {tabList.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => switchTab(tab.key)}
                  className={`relative px-4 py-3.5 rounded-2xl font-bold transition-all duration-300 flex items-center overflow-hidden cursor-pointer ${
                    isActive
                      ? tab.activeBg
                      : 'bg-white text-slate-800 hover:text-slate-900 border border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-3.5 w-full">
                    {/* Number badge */}
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black shrink-0 ${
                        isActive ? 'bg-white/25 text-white' : tab.badgeBg
                      }`}
                    >
                      {tab.order}
                    </span>

                    {/* Enlarged Icon Container */}
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isActive
                          ? 'bg-white/20'
                          : 'bg-slate-50 border border-slate-200/80 shadow-xs'
                      }`}
                    >
                      <tab.Icon
                        className={`w-6 h-6 object-contain ${
                          isActive
                            ? 'text-white'
                            : tab.iconColor || ''
                        }`}
                      />
                    </div>

                    {/* 2-Line Text Title, Left Aligned */}
                    <div className="flex flex-col text-left leading-tight min-w-0">
                      <span className="text-[13px] font-extrabold tracking-tight truncate">
                        {tab.line1}
                      </span>
                      <span
                        className={`text-[11px] font-semibold leading-tight ${
                          isActive ? 'text-white/85' : 'text-slate-500'
                        }`}
                      >
                        {tab.line2}
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <span className="absolute bottom-0 left-0 h-[3px] w-full bg-black/10 rounded-b-2xl overflow-hidden">
                    {isActive && (
                      <span
                        key={tab.barKey}
                        className="absolute top-0 left-0 h-full bg-white/70 rounded-full service-tab-fill"
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </AnimateOnScroll>

          {/* Active Tab Card for Desktop */}
          <AnimateOnScroll animation="scale-in" delay={200}>
            <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-xl relative">
              {renderDetailContent(activeData, activeTab)}
            </div>
          </AnimateOnScroll>
        </div>

      </div>
    </section>
  );
}
