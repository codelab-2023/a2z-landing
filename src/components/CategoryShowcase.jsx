import React from 'react';
import { 
  Home, 
  Shirt, 
  Gamepad2, 
  Gem, 
  HeartPulse, 
  Pill, 
  Briefcase, 
  Sparkles, 
  Baby,
  TrendingUp,
  ArrowUpRight
} from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

export default function CategoryShowcase({ onOpenModal }) {
  const categories = [
    {
      name: "Home & Kitchen",
      icon: Home,
      growth: "+240% Sales Surge",
      topPlatforms: "Amazon / Myntra / Flipkart / Meesho",
      desc: "Cookware, appliances, organizers, decor, and smart home solutions."
    },
    {
      name: "Clothing & Fashion",
      icon: Shirt,
      growth: "+310% Order Volume",
      topPlatforms: "Amazon / Myntra / Flipkart / Meesho",
      desc: "Ethnic wear, western apparel, kids fashion, and seasonal collections."
    },
    {
      name: "Toys & Games",
      icon: Gamepad2,
      growth: "+185% Peak Growth",
      topPlatforms: "Amazon / Flipkart",
      desc: "Educational toys, board games, action figures, and outdoor play."
    },
    {
      name: "Jewellery & Accessories",
      icon: Gem,
      growth: "+290% High Margin Sales",
      topPlatforms: "Amazon / Myntra / Meesho",
      desc: "Imitation jewellery, silver ornaments, fashion accessories, and gifts."
    },
    {
      name: "Health & Personal Care",
      icon: HeartPulse,
      growth: "+210% Repeat Customer Rate",
      topPlatforms: "Amazon / Flipkart",
      desc: "Wellness products, personal grooming, hygiene, and daily care."
    },
    {
      name: "Vitamin Supplements",
      icon: Pill,
      growth: "+340% Subscription Growth",
      topPlatforms: "Amazon FBA",
      desc: "Proteins, multi-vitamins, nutraceuticals, and organic supplements."
    },
    {
      name: "Office Products",
      icon: Briefcase,
      growth: "+175% B2B Corporate Sales",
      topPlatforms: "Amazon Business",
      desc: "Stationery, desk accessories, paper supplies, and office ergonomics."
    },
    {
      name: "Cosmetics & Beauty",
      icon: Sparkles,
      growth: "+280% Brand Engagement",
      topPlatforms: "Nykaa / Amazon / Flipkart",
      desc: "Skincare, makeup essentials, haircare, and organic beauty products."
    },
    {
      name: "Baby Products",
      icon: Baby,
      growth: "+195% Customer Retention",
      topPlatforms: "Amazon / FirstCry / Flipkart",
      desc: "Baby care essentials, feeding, nursery decor, and infant apparel."
    }
  ];

  return (
    <section className="py-24 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <AnimateOnScroll animation="fade-up" className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <span>Specialized Category Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-outfit">
            Categories We Scale to #1 Bestsellers
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Our platform teams understand category-specific SEO, return rates, pricing strategies, and buyer behaviors across all major niches.
          </p>
        </AnimateOnScroll>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <AnimateOnScroll 
                key={idx}
                animation="fade-up"
                delay={(idx % 3) * 100}
                className="glass-card-light glass-card-light-hover rounded-3xl p-6 border border-slate-200 flex flex-col justify-between space-y-4 group bg-white"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>{cat.growth}</span>
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-cyan-600 transition-colors font-outfit">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span>Platforms: <strong className="text-slate-800">{cat.topPlatforms}</strong></span>
                  <button 
                    onClick={() => onOpenModal('audit')}
                    className="text-cyan-700 hover:text-cyan-600 font-bold flex items-center gap-0.5"
                  >
                    <span>Scale Category</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </AnimateOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
