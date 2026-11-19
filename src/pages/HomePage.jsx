import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import TrustStats from '../components/TrustStats';
import FreeOfferBanner from '../components/FreeOfferBanner';
import SecuritySection from '../components/SecuritySection';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import ReviewsSlider from '../components/ReviewsSlider';
import BrandLogoSlider from '../components/BrandLogoSlider';
import { defaultFaqs } from '../components/FaqSection';
import EcommerceDashboardImg from '../images/dashboard/ecommerce-growth-dashboard.webp';
import {
  ArrowRight, Building2, Layers, ChevronRight, Share2, Globe, Store, UserPlus, ShieldAlert
} from 'lucide-react';
import {
  AmazonLogo, FlipkartLogo, MeeshoLogo, MyntraLogo,
} from '../components/PlatformLogos';

export default function HomePage({ onOpenModal }) {
  const quickLinks = [
    {
      orderNum: '01',
      category: 'MARKETPLACE ACCELERATION',
      logo: AmazonLogo,
      logoStyle: { height: '52px', width: 'auto', maxWidth: '120px', transform: 'scale(1.6) translateY(3px)' },
      label: 'Amazon Account Management',
      desc: 'Full-funnel Amazon growth: Sponsored Ads ROAS optimization, FBA inventory forecasting, A+ Content & Buy Box defense.',
      tags: ['Sponsored Ads', 'Buy Box Mastery', 'FBA Logistics'],
      href: '/services',
    },
    {
      orderNum: '02',
      category: 'FASHION & LIFESTYLE',
      logo: MyntraLogo,
      logoStyle: { height: '30px', width: 'auto' },
      label: 'Myntra Account Management',
      desc: 'Exclusive fashion onboarding, catalog curation, tier 1 sale participation (EORS), lookbook styling & sponsored visibility.',
      tags: ['Brand Onboarding', 'EORS Campaign', 'Fashion Catalog'],
      href: '/services',
    },
    {
      orderNum: '03',
      category: 'MARKETPLACE REACH',
      logo: FlipkartLogo,
      logoStyle: { height: '54px', width: 'auto', maxWidth: '130px', transform: 'scale(1.75)' },
      darkFilter: 'dark:brightness-110',
      label: 'Flipkart Account Management',
      desc: 'PLA advertising strategy, Smart Fulfillment compliance, Big Billion Days preparation & seller tier acceleration to Gold.',
      tags: ['PLA Campaigns', 'Smart Fulfillment', 'Tier Growth'],
      href: '/services',
    },
    {
      orderNum: '04',
      category: 'VALUE COMMERCE',
      logo: MeeshoLogo,
      logoStyle: { height: '26px', width: 'auto', maxWidth: '105px' },
      label: 'Meesho Account Management',
      desc: 'High-volume tier 2/3/4 penetration, zero-commission price engineering, automated cataloging & return rate mitigation.',
      tags: ['Bulk Cataloging', '0% Commission', 'Return Defense'],
      href: '/services',
    },
    {
      orderNum: '05',
      category: 'PERFORMANCE MARKETING',
      lucideIcon: Share2,
      specialistText: 'SOCIAL SPECIALIST',
      label: 'Social Media & Meta Ads',
      desc: 'High-converting viral Instagram reels, Facebook & WhatsApp funnel ads, D2C customer acquisition & creator collaborations.',
      iconColor: 'text-purple-600 dark:text-purple-400',
      tags: ['Meta Ads Funnels', 'Viral Reels', 'Influencer Collabs'],
      href: '/services',
    },
    {
      orderNum: '06',
      category: 'D2C ENGINEERING',
      lucideIcon: Globe,
      specialistText: 'CUSTOM SPECIALIST',
      label: 'Website Development',
      desc: 'High-speed custom web & e-commerce development with integrated Indian payment gateways, courier tracking & 95+ mobile speed.',
      iconColor: 'text-[#166B82] dark:text-cyan-400',
      tags: ['Custom Web', 'Razorpay & Shiprocket', 'Speed 95+'],
      href: '/services',
    },
    {
      orderNum: '07',
      category: 'CREATIVE & BRANDING',
      lucideIcon: Store,
      specialistText: 'AMAZON SPECIALIST',
      label: 'Amazon Brand Store & A+ EBC',
      desc: 'Multi-page immersive storefronts, premium lifestyle visual storyboards, comparison charts & high-converting brand collateral.',
      iconColor: 'text-amber-600 dark:text-amber-400',
      tags: ['Multi-Page Store', 'Premium A+ EBC', 'Lifestyle 3D'],
      href: '/services',
    },
    {
      orderNum: '08',
      category: 'SELLER ONBOARDING',
      lucideIcon: UserPlus,
      specialistText: 'NEW SPECIALIST',
      label: 'New Seller Setup & Launch',
      desc: 'Fast-track GST marketplace launch, brand registry approval, category ungating, barcode GTIN exemption + 3 months full management.',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      tags: ['Fast GST Launch', 'Category Ungating', '3 Months Free'],
      href: '/services',
    },
    {
      orderNum: '09',
      category: 'POLICY & COMPLIANCE',
      lucideIcon: ShieldAlert,
      specialistText: 'ACCOUNT SPECIALIST',
      label: 'Account Reinstatement & Legal',
      desc: 'Expert Plan of Action (PoA) drafting, Section 3 suspension appeal, policy strike defense & full marketplace account recovery.',
      iconColor: 'text-rose-600 dark:text-rose-400',
      tags: ['PoA Action Plan', 'Section 3 Defense', '100% Legal'],
      href: '/services',
    },
  ];

  return (
    <div className="space-y-0">
      <SEO
        title="A2Z Aaradhya | Best E-Commerce Service Provider Company in India | Amazon & Flipkart Growth"
        description="A2Z Aaradhya is India's best e-commerce service provider company and Amazon Unnati Gold Partner. 20,000+ seller accounts scaled across Amazon, Flipkart, Myntra & Meesho, Shopify web development & Meta ads across 7 branches in India."
        keywords="best ecommerce service provider company, best ecommerce service provider in india, top ecommerce management agency, amazon seller central account management, amazon ppc ads optimization agency, flipkart seller growth agency, meesho high volume cataloging, myntra fashion brand onboarding, custom shopify store development india, meta ads agency for ecommerce, amazon a+ content brand store design, sell on amazon with gst, 3 months free amazon management, ecommerce agency surat ahmedabad rajkot delhi, A2Z Aaradhya"
        canonicalPath="/"
        breadcrumbs={[
          { name: 'Home', path: '/' },
        ]}
        faqs={defaultFaqs}
      />

      {/* Hero Section */}
      <Hero onOpenModal={onOpenModal} />

      {/* Trust Stats */}
      <TrustStats />

      {/* About Company / Services Split Section */}
      <section className="py-10 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="overflow-hidden rounded-2xl sm:rounded-[28px] border border-slate-200 bg-slate-100 shadow-xl shadow-slate-200/60 group">
              <img
                src={EcommerceDashboardImg}
                alt="A2Z Aaradhya E-commerce Growth Dashboard across Amazon, Myntra, Flipkart & Meesho"
                width="640"
                height="420"
                loading="lazy"
                decoding="async"
                className="w-full aspect-[16/10] sm:aspect-auto sm:h-[420px] object-cover object-[38%_center] lg:object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-5 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#166B82]/20 bg-[#166B82]/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#166B82]">
                About Company
              </div>
              <h2 className="text-3xl font-extrabold leading-tight text-[#0B3B48] sm:text-4xl">
                We Provide Account Management Services
              </h2>
              <p className="text-base leading-7 text-slate-600 font-medium">
                We provide professional account management services for <span className="font-bold text-[#166B82]">Amazon, Myntra, Flipkart, Meesho</span> and more.
              </p>
              <p className="text-base leading-7 text-slate-600 font-medium">
                Our transparent approach and quality service have earned the trust of our customers, many of whom recommend us to others.
              </p>
              <p className="text-base leading-7 text-slate-600 font-medium">
                We focus on <span className="font-bold text-[#0B3B48]">safe account management, business growth, and consistent results</span>, ensuring every client receives reliable support and a smooth experience.
              </p>
              <div className="pt-2 text-lg font-extrabold text-[#0B3B48] tracking-tight">
                Your growth. Our responsibility.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Offer Banner */}
      <FreeOfferBanner onOpenModal={onOpenModal} />

      {/* ── Quick Navigation Cards ── */}
      <section className="py-10 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimateOnScroll animation="fade-up" className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#166B82]/10 border border-[#166B82]/20 text-[#166B82] text-xs font-extrabold uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Our Platform Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3B48] font-heading leading-tight">
              End-to-End Marketplace Solutions
            </h2>
            <p className="text-slate-500 text-base font-medium">
              Specialized teams for every platform — explore our full service menu.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {quickLinks.map((item, i) => {
              const LogoComp = item.logo;
              const LucideIcon = item.lucideIcon;
              return (
                <AnimateOnScroll
                  key={i}
                  animation="fade-up"
                  delay={i * 60}
                  as={Link}
                  to={item.href}
                  className="group bg-white dark:bg-[#070C16] rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-5"
                >
                  <div className="space-y-4">
                    {/* Top Row: Category & Service Number */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800/80">
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#166B82] dark:text-cyan-400">
                        {item.category}
                      </span>
                      <span className="text-[11px] font-mono font-bold text-slate-400 dark:text-slate-500">
                        {item.orderNum}
                      </span>
                    </div>

                    {/* Logo or Icon Stage — Clean Architectural Container */}
                    <div className="h-[52px] rounded-lg bg-slate-50 dark:bg-[#0A101D] border border-slate-200/80 dark:border-slate-800 flex items-center justify-center overflow-hidden px-3 w-full">
                      {LogoComp ? (
                        <LogoComp
                          className={`object-contain transition-all ${item.darkFilter || ''}`}
                          style={item.logoStyle}
                          draggable={false}
                        />
                      ) : (
                        <div className="flex items-center gap-2">
                          <LucideIcon className={`w-5 h-5 ${item.iconColor || 'text-[#166B82] dark:text-cyan-400'}`} />
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                            {item.specialistText}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="font-extrabold text-[#0B3B48] dark:text-white text-base leading-snug group-hover:text-[#166B82] dark:group-hover:text-cyan-400 transition-colors">
                        {item.label}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-normal mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Grounded Tags */}
                    {item.tags && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-[#0B1322] text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Clean Interactive Footer */}
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#166B82] dark:text-cyan-400 group-hover:gap-2.5 transition-all pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    Explore Service Roadmap <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </AnimateOnScroll>
              );
            })}
          </div>

          {/* CTA Row */}
          <AnimateOnScroll animation="fade-up" delay={200} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#166B82] hover:bg-[#0F5265] text-white font-extrabold text-sm rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0B3B48] font-extrabold text-sm rounded-2xl border border-slate-200 shadow-sm hover:border-[#166B82]/30 hover:shadow-md transition-all duration-300"
            >
              About Our Company
              <ArrowRight className="w-4 h-4 text-[#166B82]" />
            </Link>
          </AnimateOnScroll>

        </div>
      </section>

      {/* Security / Trust Footer Strip */}
      <SecuritySection />

      {/* Brand & Marketplaces We Have Scaled Slider */}
      <BrandLogoSlider />

      {/* Reviews Slider */}
      <ReviewsSlider />
    </div>
  );
}
