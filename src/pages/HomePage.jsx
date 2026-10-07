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
import EcommerceDashboardImg from '../images/dashboard/ecommerce-growth-dashboard.webp';
import {
  ArrowRight, Building2, Layers, ChevronRight
} from 'lucide-react';
import {
  AmazonLogo, FlipkartLogo, MeeshoLogo, MyntraLogo,
} from '../components/PlatformLogos';

export default function HomePage({ onOpenModal }) {
  const quickLinks = [
    {
      logo: AmazonLogo,
      logoStyle: { height: '52px', width: 'auto', maxWidth: '120px', transform: 'scale(1.6) translateY(3px)' },
      label: 'Amazon Management',
      desc: 'PPC Ads, FBA, A+ Content, Brand Storefront',
      bg: 'bg-amber-50',
      border: 'border-amber-100',
      href: '/services',
    },
    {
      logo: MyntraLogo,
      logoStyle: { height: '26px', width: 'auto', maxWidth: '104px' },
      label: 'Myntra Management',
      desc: 'Fashion Onboarding, Catalog Upload, Orders & Ads',
      bg: 'bg-pink-50',
      border: 'border-pink-100',
      href: '/services',
    },
    {
      logo: FlipkartLogo,
      logoStyle: { height: '54px', width: 'auto', maxWidth: '130px', transform: 'scale(1.75)' },
      label: 'Flipkart Growth',
      desc: 'PLA Campaigns, Smart Fulfillment, Tier Upgrade',
      bg: 'bg-blue-50',
      border: 'border-blue-100',
      href: '/services',
    },
    {
      logo: MeeshoLogo,
      logoStyle: { height: '24px', width: 'auto', maxWidth: '96px' },
      label: 'Meesho Scaling',
      desc: 'Bulk Catalog, Zero Commission, RTO Mitigation',
      bg: 'bg-purple-50',
      border: 'border-purple-100',
      href: '/services',
    },
    {
      lucideIcon: Building2,
      label: 'About A2Z Aaradhya',
      desc: '7 Branches, 70+ Specialists, 20K+ Accounts Managed',
      bg: 'bg-[#EBF7F6]',
      border: 'border-[#166B82]/20',
      href: '/about',
    },
  ];

  return (
    <div className="space-y-0">
      <SEO
        title="A2Z Aaradhya | India's #1 E-Commerce Growth Partner (Amazon, Myntra, Flipkart, Meesho)"
        description="Scale your Amazon, Myntra, Flipkart & Meesho sales with India's premier marketplace management agency. 7 Branches, 70+ Specialists, 20K+ Accounts Managed. Authorized Amazon Partner."
        keywords="Amazon account management, Myntra account management, Flipkart account management, Meesho sales scaling, e-commerce agency India, Amazon authorized partner, A2Z Aaradhya"
        canonicalPath="/"
        breadcrumbs={[
          { name: 'Home', path: '/' },
        ]}
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
                loading="lazy"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {quickLinks.map((item, i) => {
              const LogoComp = item.logo;
              const LucideIcon = item.lucideIcon;
              return (
                <AnimateOnScroll
                  key={i}
                  animation="fade-up"
                  delay={i * 100}
                  as={Link}
                  to={item.href}
                  className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-md shadow-slate-200/50 flex flex-col justify-between gap-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Logo pill — same style as Hero section pills */}
                    <div className={`h-[54px] rounded-xl ${item.bg} border ${item.border} flex items-center justify-center overflow-hidden px-3 w-full`}>
                      {LogoComp ? (
                        <LogoComp
                          className="object-contain"
                          style={item.logoStyle}
                          draggable={false}
                        />
                      ) : (
                        <LucideIcon className="w-7 h-7 text-[#166B82]" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[#0B3B48] text-sm leading-tight font-body">{item.label}</h3>
                      <p className="text-[11px] text-slate-500 font-medium mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#166B82] group-hover:gap-2 transition-all">
                    View Details <ChevronRight className="w-3.5 h-3.5" />
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
