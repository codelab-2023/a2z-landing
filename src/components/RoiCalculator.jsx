import React, { useState } from 'react';
import { Calculator, TrendingUp, Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function RoiCalculator({ onOpenModal }) {
  const [revenue, setRevenue] = useState(150000);
  const [platform, setPlatform] = useState('amazon');
  const [category, setCategory] = useState('Home & Kitchen');

  // Multiplier calculation
  const getMultiplier = () => {
    let base = 3.2;
    if (platform === 'amazon') base += 0.6;
    if (platform === 'flipkart') base += 0.4;
    if (platform === 'meesho') base += 0.5;
    if (category === 'Home & Kitchen' || category === 'Clothing') base += 0.3;
    return parseFloat(base.toFixed(1));
  };

  const multiplier = getMultiplier();
  const projectedRevenue = Math.round(revenue * multiplier);
  const incrementalGrowth = projectedRevenue - revenue;

  return (
    <section id="calculator" className="py-24 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-4 h-4 text-cyan-600" />
            <span>Interactive Growth Forecasting</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-outfit">
            Calculate Your Marketplace Revenue Growth
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            See how much your sales can increase when managed with A2Z Aaradhya's 10-step SOP and PPC optimization.
          </p>
        </div>

        {/* Calculator Outer Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Left Column */}
            <div className="md:col-span-6 space-y-6">
              
              {/* Marketplace Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Target Marketplace
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPlatform('amazon')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-extrabold transition-all ${
                      platform === 'amazon'
                        ? 'bg-amber-500 text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Amazon
                  </button>

                  <button
                    type="button"
                    onClick={() => setPlatform('flipkart')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-extrabold transition-all ${
                      platform === 'flipkart'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Flipkart
                  </button>

                  <button
                    type="button"
                    onClick={() => setPlatform('meesho')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-extrabold transition-all ${
                      platform === 'meesho'
                        ? 'bg-pink-600 text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Meesho
                  </button>
                </div>
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Product Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm font-bold focus:outline-none focus:border-cyan-600"
                >
                  <option value="Home & Kitchen">Home & Kitchen</option>
                  <option value="Clothing">Clothing & Fashion</option>
                  <option value="Toys">Toys & Games</option>
                  <option value="Jewellery">Jewellery & Accessories</option>
                  <option value="Health">Health & Personal Care</option>
                  <option value="Office">Office Products</option>
                  <option value="Beauty">Cosmetics & Beauty</option>
                  <option value="Baby">Baby Products</option>
                </select>
              </div>

              {/* Slider for Current Revenue */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-600 uppercase tracking-wider">Current Monthly Sales</span>
                  <span className="text-cyan-700 text-base font-extrabold font-outfit">
                    ₹{revenue.toLocaleString('en-IN')}
                  </span>
                </div>

                <input
                  type="range"
                  min="20000"
                  max="2000000"
                  step="10000"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                />

                <div className="flex justify-between text-[11px] text-slate-500 font-semibold">
                  <span>₹20,000 (New Seller)</span>
                  <span>₹20,000,000+ (Scale)</span>
                </div>
              </div>

            </div>

            {/* Right Output Box */}
            <div className="md:col-span-6 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 text-center space-y-6 shadow-xl">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Estimated {multiplier}x Sales Multiplier</span>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Projected Monthly Revenue</span>
                <div className="text-4xl sm:text-5xl font-extrabold text-cyan-400 font-outfit">
                  ₹{projectedRevenue.toLocaleString('en-IN')}
                </div>
                <div className="text-xs text-emerald-400 font-bold flex items-center justify-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>+₹{incrementalGrowth.toLocaleString('en-IN')} Monthly Additional Sales</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenModal('audit')}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <span>Unlock Growth Plan For My Account</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Based on performance data of 600+ active managed accounts</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
