import React from 'react';
import ServicesSection from '../components/ServicesSection';
import FreeOfferBanner from '../components/FreeOfferBanner';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import { defaultFaqs } from '../components/FaqSection';
import { ArrowRight, Laptop, Share2, Globe, Store } from 'lucide-react';
import { AmazonIcon, MyntraIcon, FlipkartIcon, MeeshoIcon } from '../components/PlatformLogos';

export default function ServicesPage({ onOpenModal }) {
  return (
    <div className="pt-16 sm:pt-28 pb-10 sm:pb-20 space-y-10 sm:space-y-16">
      <SEO
        title="Marketplace Management, Website Development & Social Media Services | A2Z Aaradhya"
        description="Complete growth services for sellers & businesses: Amazon FBA & PPC Ads, Myntra Onboarding, Flipkart PLA, Meesho Scaling, Custom Website Development (Shopify/WooCommerce), Social Media Marketing & Meta Ads, Amazon Brand Stores, and 3 Months Free New Seller Management."
        keywords="marketplace account management, website development agency, ecommerce website design, shopify store design, woocommerce agency, social media management, meta ads agency, instagram reels management, amazon brand store design, a+ content ebc, amazon ppc ads, flipkart seller management, meesho scaling, myntra onboarding, A2Z Aaradhya services"
        canonicalPath="/services"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Marketplace Services', path: '/services' },
        ]}
        faqs={defaultFaqs}
      />

      
      {/* Header Section for On-Page SEO */}
      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <AnimateOnScroll animation="fade-down" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#166B82]/10 border border-[#166B82]/20 text-[#166B82] text-xs font-extrabold uppercase tracking-wider">
            <span>Marketplace Services</span>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={50} as="h1" className="text-4xl sm:text-5xl font-extrabold text-[#0B3B48] font-outfit">
            E-Commerce Account Management Services
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={100} as="p" className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto font-medium">
            Scale your sales on Amazon, Flipkart, Myntra &amp; Meesho with dedicated account managers, ROI-driven PPC campaigns, and 360° cataloging solutions.
          </AnimateOnScroll>
        </div>
      </section>

      {/* Main Interactive Services Component */}
      <ServicesSection onOpenModal={onOpenModal} />

      {/* Free 3 Months Management Banner for New Accounts */}
      <FreeOfferBanner onOpenModal={onOpenModal} />

      {/* Deep-Dive Service Matrix Grid */}
      <section className="py-5 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <AnimateOnScroll animation="fade-up" className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-[#0B3B48] font-outfit">
              Platform-by-Platform Growth Focus
            </h2>
            <p className="text-slate-600 text-sm font-medium">
              We deploy dedicated account specialists certified by Amazon, Myntra, Flipkart &amp; Meesho.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            
            {/* Amazon Card */}
            <AnimateOnScroll animation="fade-up" delay={0} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-md space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <AmazonIcon className="w-12 h-12 rounded-2xl shadow-md object-contain bg-white p-1" />
                <h3 className="text-2xl font-extrabold text-slate-900 font-outfit">Amazon Management</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Full FBA onboarding, A+ Enhanced Brand Content, Brand Storefront creation, and Sponsored Ads optimization (Product, Brand & Display).
                </p>
              </div>

              <button 
                onClick={() => onOpenModal('service')}
                className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-extrabold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Amazon Growth Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </AnimateOnScroll>

            {/* Myntra Card */}
            <AnimateOnScroll animation="fade-up" delay={100} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-md space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <MyntraIcon className="w-12 h-12 rounded-2xl shadow-md object-contain" />
                <h3 className="text-2xl font-extrabold text-slate-900 font-outfit">Myntra Account Management</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Fashion brand onboarding on Myntra with Standard & Premium plans. Product listing, catalog optimization, promotions, order management & daily performance analysis.
                </p>
              </div>

              <button 
                onClick={() => onOpenModal('service')}
                className="w-full py-3 text-white font-extrabold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #FF3F6C, #c0005e)' }}
              >
                <span>Myntra Growth Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </AnimateOnScroll>

            {/* Flipkart Card */}
            <AnimateOnScroll animation="fade-up" delay={200} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-md space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <FlipkartIcon className="w-12 h-12 rounded-2xl shadow-md object-contain bg-white p-1" />
                <h3 className="text-2xl font-extrabold text-slate-900 font-outfit">Flipkart Smart Fulfillment</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Seller tier elevation (Bronze to Gold), PLA campaigns, Flipkart Assured badge eligibility, and festival sales acceleration.
                </p>
              </div>

              <button 
                onClick={() => onOpenModal('service')}
                className="w-full py-3 bg-[#166B82] hover:bg-[#0F5265] text-white font-extrabold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Flipkart Growth Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </AnimateOnScroll>

            {/* Meesho Card */}
            <AnimateOnScroll animation="fade-up" delay={300} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-md space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <MeeshoIcon className="w-12 h-12 rounded-2xl shadow-md object-contain bg-white p-1" />
                <h3 className="text-2xl font-extrabold text-slate-900 font-outfit">Meesho Account Management</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Bulk order management, zero-commission pricing strategy, return & RTO reduction, and trending tag recommendation.
                </p>
              </div>

              <button 
                onClick={() => onOpenModal('service')}
                className="w-full py-3 bg-pink-600 hover:bg-pink-700 text-white font-extrabold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Meesho Growth Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </AnimateOnScroll>

          </div>

          {/* Additional Digital & Growth Services (Social Media, Website Development, Amazon Brand Store) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">

            {/* Social Media Management Card */}
            <AnimateOnScroll animation="fade-up" delay={100} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-md space-y-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl shadow-md bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 flex items-center justify-center text-white">
                  <Share2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 font-outfit">Social Media Management</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Viral reels production, Meta &amp; Instagram ad funnels, brand aesthetic curation, content calendars, influencer outreach, and daily community management.
                </p>
              </div>

              <button 
                onClick={() => onOpenModal('service')}
                className="w-full py-3 text-white font-extrabold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors hover:opacity-90 shadow-sm"
                style={{ background: 'linear-gradient(135deg, #7928CA, #FF0080)' }}
              >
                <span>Social Media Growth Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </AnimateOnScroll>

            {/* Website Development Card */}
            <AnimateOnScroll animation="fade-up" delay={200} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-md space-y-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl shadow-md bg-gradient-to-tr from-[#166B82] to-teal-500 flex items-center justify-center text-white">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 font-outfit">Website Development</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Fast, custom business websites, high-converting Shopify &amp; WooCommerce stores, web apps, booking systems &amp; AI-integrated automated solutions.
                </p>
              </div>

              <button 
                onClick={() => onOpenModal('service')}
                className="w-full py-3 bg-[#166B82] hover:bg-[#0F5265] text-white font-extrabold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <span>Website Consultation Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </AnimateOnScroll>

            {/* Amazon Brand Store & A+ Card */}
            <AnimateOnScroll animation="fade-up" delay={300} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-md space-y-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl shadow-md bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 font-outfit">Amazon Brand Store &amp; A+</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Custom multi-page Brand Storefront design, premium A+ Enhanced Brand Content (EBC) modules, lifestyle infographics &amp; Brand Story carousels to boost conversion.
                </p>
              </div>

              <button 
                onClick={() => onOpenModal('service')}
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <span>Brand Store Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </AnimateOnScroll>

          </div>

        </div>
      </section>


    </div>
  );
}
