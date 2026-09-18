import React from 'react';
import ServicesSection from '../components/ServicesSection';
import CategoryShowcase from '../components/CategoryShowcase';
import FreeOfferBanner from '../components/FreeOfferBanner';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import { ShoppingBag, ShoppingCart, TrendingUp, ArrowRight } from 'lucide-react';

export default function ServicesPage({ onOpenModal }) {
  return (
    <div className="pt-28 pb-20 space-y-16">
      <SEO
        title="Marketplace Account Management Services (Amazon, Flipkart, Meesho) | A2Z Aaradhya"
        description="Comprehensive marketplace management services: Amazon FBA & PPC Ads, Flipkart PLA campaigns, Meesho high-volume scaling, product cataloging, and account reinstatement. 3 Months Free for New Sellers."
        keywords="Amazon account management, Flipkart seller management, Meesho scaling, cataloging, PPC management, seller reinstatement, 3 months free amazon management, A2Z Aaradhya services"
        canonicalPath="/services"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Marketplace Services', path: '/services' },
        ]}
      />

      {/* Main Interactive Services Component */}
      <ServicesSection onOpenModal={onOpenModal} />

      {/* Free 3 Months Management Banner for New Accounts */}
      <FreeOfferBanner onOpenModal={onOpenModal} />

      {/* Deep-Dive Service Matrix Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <AnimateOnScroll animation="fade-up" className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-[#0B3B48] font-outfit">
              Platform-by-Platform Growth Focus
            </h2>
            <p className="text-slate-600 text-sm font-medium">
              We deploy dedicated account specialists certified by Amazon, Flipkart & Meesho.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Amazon Card */}
            <AnimateOnScroll animation="fade-up" delay={0} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-md space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-md">
                  <ShoppingBag className="w-6 h-6" />
                </div>
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

            {/* Flipkart Card */}
            <AnimateOnScroll animation="fade-up" delay={100} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-md space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#166B82] text-white flex items-center justify-center font-bold shadow-md">
                  <ShoppingCart className="w-6 h-6" />
                </div>
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
            <AnimateOnScroll animation="fade-up" delay={200} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-md space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-600 text-white flex items-center justify-center font-bold shadow-md">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 font-outfit">Meesho High-Volume Scaling</h3>
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

        </div>
      </section>

      <CategoryShowcase onOpenModal={onOpenModal} />

    </div>
  );
}
