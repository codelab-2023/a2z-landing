import React from 'react';
import RoiCalculator from '../components/RoiCalculator';
import FreeOfferBanner from '../components/FreeOfferBanner';
import SecuritySection from '../components/SecuritySection';
import SEO from '../components/SEO';

export default function RoiCalculatorPage({ onOpenModal }) {
  return (
    <div className="pt-28 pb-20 space-y-16">
      <SEO
        title="Marketplace ROI & Sales Growth Revenue Calculator | A2Z Aaradhya"
        description="Calculate your projected marketplace revenue growth and ROAS multipliers across Amazon India, Flipkart, and Meesho with our free seller ROI calculator."
        keywords="E-commerce ROI calculator, Amazon revenue estimator, Flipkart sales calculator, marketplace ROAS calculator"
        canonicalPath="/calculator"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'ROI Calculator', path: '/calculator' },
        ]}
      />
      {/* Page Header */}
      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#166B82]/10 border border-[#166B82]/20 text-[#166B82] text-xs font-extrabold uppercase tracking-wider">
            <span>Marketplace Sales Growth Calculator</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B3B48] font-outfit">
            Forecast Your Revenue Potential
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto font-medium">
            Test sales multipliers across Amazon India, Flipkart, and Meesho based on real operational performance metrics from 600+ managed accounts.
          </p>
        </div>
      </section>

      {/* Main Interactive Calculator */}
      <RoiCalculator onOpenModal={onOpenModal} />

      <FreeOfferBanner onOpenModal={onOpenModal} />
      <SecuritySection />

    </div>
  );
}
