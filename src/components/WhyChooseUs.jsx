import React from 'react';
import { 
  UserCheck, 
  Activity, 
  Search, 
  Target, 
  Zap, 
  Package, 
  LineChart, 
  FileSpreadsheet,
  CheckCircle2,
  Building,
  ShieldCheck
} from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

export default function WhyChooseUs({ onOpenModal }) {
  const points = [
    {
      icon: UserCheck,
      title: "Dedicated Platform Manager",
      desc: "Single point of contact assigned to your brand for daily communication and strategic accountability."
    },
    {
      icon: Activity,
      title: "Daily Account Monitoring",
      desc: "Real-time tracking of account health, buy box percentage, suppressed listings, and order dispatch."
    },
    {
      icon: Search,
      title: "SEO Product Listing & Copywriting",
      desc: "Writing search-indexed titles, 5 key bullet points, backend search terms, and A+ visuals."
    },
    {
      icon: Target,
      title: "Advertising & Campaign Management",
      desc: "Data-backed PPC campaigns optimized for maximum ROAS, lowest ACoS, and top search placement."
    },
    {
      icon: Zap,
      title: "Fast Issue & Case Resolution",
      desc: "Rapid escalation of policy flags, listing hijackers, IP claims, and catalog errors with seller support."
    },
    {
      icon: Package,
      title: "Inventory & Order Management",
      desc: "FBA restock alerts, safety stock planning, order processing protocols, and return reduction."
    },
    {
      icon: LineChart,
      title: "Sales Growth Planning",
      desc: "Strategic sales roadmaps for festival events (Big Billion Days, Amazon Great Indian Festival)."
    },
    {
      icon: FileSpreadsheet,
      title: "Regular Performance Review",
      desc: "Weekly & monthly analytical reports reviewing sales volume, ad spend efficiency, and growth metrics."
    }
  ];

  return (
    <section id="why-us" className="py-6 sm:py-24 relative bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <AnimateOnScroll animation="fade-right" className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
              <span>Why Choose A2Z Aaradhya?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-outfit leading-tight">
              You Focus on Business. <br />
              <span className="text-gradient-cyan">We Manage Your Marketplace.</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed font-medium">
              Managing Amazon, Myntra, Flipkart, and Meesho accounts internally requires hiring multiple specialists. With A2Z Aaradhya, you get an entire team of 70+ certified platform managers, designers, and ad experts for a fraction of the cost.
            </p>

            {/* Highlights */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">7 Offices Across India</h4>
                  <p className="text-xs text-slate-500 font-medium">On-ground team presence in major e-commerce hubs</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">100% Policy Compliance Guarantee</h4>
                  <p className="text-xs text-slate-500 font-medium">Zero risk of listing suspension or policy violations</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onOpenModal('audit')}
                className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#166B82] to-[#0F5265] hover:from-[#0F5265] hover:to-[#0B3B48] text-white font-extrabold rounded-2xl shadow-lg transition-all text-sm"
              >
                Schedule Strategy Meeting
              </button>
              <button
                onClick={() => onOpenModal('3months')}
                className="w-full sm:w-auto px-6 py-3.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-extrabold rounded-2xl transition-all text-sm flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>🎁 3 Months Free for New Sellers</span>
              </button>
            </div>
          </AnimateOnScroll>

          {/* Right Column: 8 Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <AnimateOnScroll 
                  key={idx}
                  animation="fade-left"
                  delay={(idx % 4) * 80}
                  className="glass-card-light glass-card-light-hover p-5 rounded-2xl border border-slate-200 space-y-2 bg-slate-50"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-cyan-600 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {pt.desc}
                  </p>
                </AnimateOnScroll>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
