import React from 'react';
import { ShieldCheck, Lock, FileCheck, Server, Key, UserCheck } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

export default function SecuritySection() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Your Data is Completely Safe",
      desc: "Your Amazon, Myntra, Flipkart & Meesho login details, API keys and sales reports are stored on our secure servers. We never share your data with anyone."
    },
    {
      icon: Key,
      title: "No Password Sharing Required",
      desc: "We connect via official Amazon SP-API, Myntra Partner Portal, Flipkart API & Meesho Auth — you never need to hand over your master password. Fully secure and compliant."
    },
    {
      icon: FileCheck,
      title: "100% NDA — Legally Protected",
      desc: "Your products, supplier contacts, pricing margins and business plans are all legally protected under a signed Non-Disclosure Agreement before we begin."
    },
    {
      icon: UserCheck,
      title: "Dedicated Manager Access Only",
      desc: "Only your assigned account manager can access your account. Every action is logged and audited — full transparency and control stays with you."
    }
  ];

  return (
    <section className="py-6 sm:py-20 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <AnimateOnScroll animation="fade-right" className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Data Security & Account Protection</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-outfit">
                Your Account & Business Data — 100% Secure, Always
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                We know your seller account represents years of hard work. That's why we follow strict security protocols set by Amazon, Myntra, Flipkart and Meesho. Your business information stays completely confidential — always.
              </p>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-extrabold uppercase tracking-wider w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>ISO Certified + Legally Registered</span>
              </div>
            </AnimateOnScroll>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {securityFeatures.map((sec, idx) => {
                const Icon = sec.icon;
                return (
                  <AnimateOnScroll
                    key={idx}
                    animation="fade-left"
                    delay={(idx % 2) * 100}
                    className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-sm">
                      {sec.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {sec.desc}
                    </p>
                  </AnimateOnScroll>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
