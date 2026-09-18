import React, { useState } from 'react';
import { 
  FileText, 
  ShieldCheck, 
  Search, 
  Wrench, 
  Layers, 
  CheckCircle, 
  LineChart, 
  Sparkles, 
  Target, 
  TrendingUp,
  ChevronRight
} from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Document Verification",
      icon: FileText,
      desc: "Complete check of GST, PAN, Trademark, Brand Authorization letters, and Bank details to ensure zero verification delays."
    },
    {
      num: "02",
      title: "Brand Approval",
      icon: ShieldCheck,
      desc: "Getting official Brand Registry on Amazon & Flipkart, GTIN exemption approval, and trademark intellectual property gating."
    },
    {
      num: "03",
      title: "Account Analysis",
      icon: Search,
      desc: "In-depth audit of existing listing health, keyword indexation gaps, pricing strategy, buy box percentage, and catalog errors."
    },
    {
      num: "04",
      title: "Issue Resolution",
      icon: Wrench,
      desc: "Clearing suppressed listings, fixing listing policy violations, unblocking stranded inventory, and resolving pending case logs."
    },
    {
      num: "05",
      title: "Package-Based SOP Creation",
      icon: Layers,
      desc: "Creating tailored standard operating procedures (SOPs) based on your tier package & product categories."
    },
    {
      num: "06",
      title: "Complete Account Setup",
      icon: CheckCircle,
      desc: "Setting up shipping settings, courier API integration, return policy configurations, tax settings, and user access permissions."
    },
    {
      num: "07",
      title: "SEO Listing Optimization",
      icon: LineChart,
      desc: "Writing high-converting product titles, 5 benefit bullet points, backend search terms, search frequency rank keywords, and alt text."
    },
    {
      num: "08",
      title: "A+ Content Creation",
      icon: Sparkles,
      desc: "Designing high-end Enhanced Brand Content (EBC) modules, comparison tables, visual brand story banners, and infographic cards."
    },
    {
      num: "09",
      title: "Ads Management",
      icon: Target,
      desc: "Designing targeted Sponsored Products, Sponsored Brands, and Display PPC campaigns with ACoS / ROAS tracking."
    },
    {
      num: "10",
      title: "Account Growth & Scaling",
      icon: TrendingUp,
      desc: "Unlocking FBA enrollment, lightning deals, Prime badge eligibility, cross-marketplace expansion, and weekly scaling reviews."
    }
  ];

  return (
    <section id="process" className="py-24 relative bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimateOnScroll animation="fade-up" className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <span>Standard Operating Procedure</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-outfit">
            Our Proven 10-Step Growth SOP
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg">
            Every client account follows a rigorous 10-stage execution plan to ensure zero policy errors and maximum sales conversion.
          </p>
        </AnimateOnScroll>

        {/* 10-Step Interactive Navigation Grid */}
        <AnimateOnScroll animation="fade-up" delay={100} className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            return (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex items-center gap-3 ${
                  isActive
                    ? 'bg-cyan-600 text-white border-cyan-600 shadow-md scale-105'
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-xs shrink-0 ${
                  isActive ? 'bg-white text-cyan-700' : 'bg-slate-200 text-slate-700'
                }`}>
                  {step.num}
                </div>
                <div className="truncate">
                  <div className="text-xs font-bold truncate">
                    {step.title}
                  </div>
                </div>
              </button>
            );
          })}
        </AnimateOnScroll>

        {/* Active Step Detail Card */}
        <AnimateOnScroll animation="scale-in" delay={200}>
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-lg relative overflow-hidden">
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-cyan-600 text-white shadow-lg flex items-center justify-center shrink-0">
                  {React.createElement(steps[activeStep].icon, { className: "w-8 h-8" })}
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-extrabold text-cyan-600 tracking-widest uppercase">
                    STEP {steps[activeStep].num} OF 10
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-outfit">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-slate-600 text-sm max-w-xl font-medium">
                    {steps[activeStep].desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                  className="px-4 py-2.5 rounded-xl bg-white text-slate-700 text-xs font-bold border border-slate-300 hover:bg-slate-100"
                >
                  Previous Step
                </button>

                <button
                  onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                  className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-extrabold shadow-md flex items-center gap-1.5"
                >
                  <span>Next Step</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
