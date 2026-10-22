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
      orderNum: 1,
      logo: AmazonLogo,
      logoStyle: { height: '52px', width: 'auto', maxWidth: '120px', transform: 'scale(1.6) translateY(3px)' },
      label: 'Amazon Account Management',
      desc: 'PPC Ads, FBA Restock, A+ Listings & Buy Box Strategy',
      bg: 'bg-amber-50',
      border: 'border-amber-200/80',
      badgeColor: 'bg-amber-100 text-amber-900',
      href: '/services',
    },
    {
      orderNum: 2,
      logo: MyntraLogo,
      logoStyle: { height: '26px', width: 'auto', maxWidth: '104px' },
      label: 'Myntra Account Management',
      desc: 'Fashion Brand Onboarding, Catalog Upload, Tier Sales & Ads',
      bg: 'bg-pink-50',
      border: 'border-pink-200/80',
      badgeColor: 'bg-pink-100 text-pink-900',
      href: '/services',
    },
    {
      orderNum: 3,
      logo: FlipkartLogo,
      logoStyle: { height: '54px', width: 'auto', maxWidth: '130px', transform: 'scale(1.75)' },
      label: 'Flipkart Account Management',
      desc: 'PLA Campaigns, Smart Fulfillment & Seller Tier Upgrade',
      bg: 'bg-blue-50',
      border: 'border-blue-200/80',
      badgeColor: 'bg-blue-100 text-blue-900',
      href: '/services',
    },
    {
      orderNum: 4,
      logo: MeeshoLogo,
      logoStyle: { height: '24px', width: 'auto', maxWidth: '96px' },
      label: 'Meesho Account Management',
      desc: 'Bulk Cataloging, Zero Commission Strategy & Return Mitigation',
      bg: 'bg-purple-50',
      border: 'border-purple-200/80',
      badgeColor: 'bg-purple-100 text-purple-900',
      href: '/services',
    },
    {
      orderNum: 5,
      lucideIcon: Share2,
      label: 'Social Media Management',
      desc: 'Viral Reels, Meta Ads Funnels, Page Handling & Influencer Collabs',
      bg: 'bg-gradient-to-br from-purple-50 to-indigo-50',
      border: 'border-purple-200/80',
      badgeColor: 'bg-purple-100 text-purple-900',
      iconColor: 'text-purple-600',
      href: '/services',
    },
    {
      orderNum: 6,
      lucideIcon: Globe,
      label: 'Website Development',
      desc: '7 Types: Business, E-Commerce, Booking, Tools, AI & Portfolios',
      bg: 'bg-gradient-to-br from-cyan-50 to-teal-50',
      border: 'border-teal-200/80',
      badgeColor: 'bg-teal-100 text-teal-900',
      iconColor: 'text-[#166B82]',
      href: '/services',
    },
    {
      orderNum: 7,
      lucideIcon: Store,
      label: 'Amazon Brand Store',
      desc: 'Multi-Page Storefronts, Premium A+ EBC & Lifestyle Visuals',
      bg: 'bg-amber-50',
      border: 'border-amber-200/80',
      badgeColor: 'bg-amber-100 text-amber-900',
      iconColor: 'text-amber-600',
      href: '/services',
    },
    {
      orderNum: 8,
      lucideIcon: UserPlus,
      label: 'New Seller Setup',
      desc: 'Hassle-Free Launch + 3 Months 100% Free Account Management',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200/80',
      badgeColor: 'bg-emerald-100 text-emerald-900',
      iconColor: 'text-emerald-600',
      href: '/services',
    },
    {
      orderNum: 9,
      lucideIcon: ShieldAlert,
      label: 'Account Reinstatement',
      desc: 'Suspension Recovery, Plan of Action (PoA) & Policy Reinstatement',
      bg: 'bg-red-50',
      border: 'border-red-200/80',
      badgeColor: 'bg-red-100 text-red-900',
      iconColor: 'text-red-600',
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
                  delay={i * 80}
                  as={Link}
                  to={item.href}
                  className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-md shadow-slate-200/50 flex flex-col justify-between gap-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Top row: Order Number pill */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-[#166B82] text-white text-[11px] font-black">
                        #{item.orderNum}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        A2Z Service
                      </span>
                    </div>

                    {/* Logo pill */}
                    <div className={`h-[56px] rounded-xl ${item.bg} border ${item.border} flex items-center justify-center overflow-hidden px-3 w-full shadow-xs`}>
                      {LogoComp ? (
                        <LogoComp
                          className="object-contain"
                          style={item.logoStyle}
                          draggable={false}
                        />
                      ) : (
                        <LucideIcon className={`w-8 h-8 ${item.iconColor || 'text-[#166B82]'}`} />
                      )}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[#0B3B48] text-base leading-tight font-body group-hover:text-[#166B82] transition-colors">{item.label}</h3>
                      <p className="text-xs text-slate-500 font-medium mt-1.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#166B82] group-hover:gap-2.5 transition-all pt-2 border-t border-slate-100">
                    Explore Service <ChevronRight className="w-3.5 h-3.5" />
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

      {/* Client Reviews Slider — just above footer */}
      <ReviewsSlider />
    </div>
  );
}
