import React from 'react';
import ProcessTimeline from '../components/ProcessTimeline';
import WhyChooseUs from '../components/WhyChooseUs';
import BrandLogoSlider from '../components/BrandLogoSlider';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import { Users, Award, ShieldCheck } from 'lucide-react';

export default function AboutPage({ onOpenModal }) {
  return (
    <div className="pt-20 sm:pt-28 pb-10 sm:pb-20 space-y-10 sm:space-y-16">
      <SEO
        title="About Us - India's Premier Marketplace Growth Agency | A2Z Aaradhya"
        description="Learn about A2Z Aaradhya Pvt. Ltd., an ISO-certified and Amazon Unnati Gold Partner with 70+ specialists and 7 branches helping 3,000+ brands grow on Amazon, Myntra, Flipkart & Meesho."
        keywords="About A2Z Aaradhya, e-commerce management agency, Amazon partner agency, marketplace consultants India, e-commerce company Surat"
        canonicalPath="/about"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
        ]}
      />
      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <AnimateOnScroll animation="fade-down" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#166B82]/10 border border-[#166B82]/20 text-[#166B82] text-xs font-extrabold uppercase tracking-wider">
            <span>Corporate Company Profile</span>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={50} as="h1" className="text-4xl sm:text-5xl font-extrabold text-[#0B3B48] font-outfit">
            About A2Z Aaradhya Pvt. Ltd.®
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={100} as="p" className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto font-medium">
            India's most trusted e-commerce growth partner with 3,000+ businesses scaled, 70+ certified platform managers, and local support across the nation.
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-up" delay={0} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#166B82] text-white flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 font-outfit">70+ Specialist Staff</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Category experts in cataloging, SEO copywriting, graphic design, PPC ad strategy, and legal reinstatement.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B3B48] font-outfit">Amazon Gold Partner</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Official Unnati Gold Partner, SOA Champion Winner, and certified Seller Affiliate SSL-2 agency.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={200} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B3B48] font-outfit">100% Policy Guarantee</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Strict adherence to marketplace TOS to protect your account health, Buy Box, and brand reputation.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <WhyChooseUs onOpenModal={onOpenModal} />
      <BrandLogoSlider />
    </div>
  );
}
