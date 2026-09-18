import React, { useState } from 'react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import { Images, X, Maximize2 } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Surat Corporate Headquarters',
    category: 'Workspace',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    desc: 'Our centralized operations and account management hub in Simada, Surat.',
  },
  {
    id: 2,
    title: 'Marketplace Strategy & PPC Meeting',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    desc: 'Daily seller account growth reviews and advertising ROI optimization sessions.',
  },
  {
    id: 3,
    title: 'Amazon SOA Champion Recognition',
    category: 'Awards',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    desc: 'Celebrating national recognition and Amazon Unnati Gold Partner status.',
  },
  {
    id: 4,
    title: 'Dedicated Account Managers at Work',
    category: 'Workspace',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    desc: '70+ platform specialists managing over 3000+ seller accounts daily.',
  },
  {
    id: 5,
    title: 'Seller Growth & Cataloging Training',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    desc: 'Continuous skill enrichment programs covering Amazon, Flipkart & Meesho algorithm updates.',
  },
  {
    id: 6,
    title: 'Annual Team Celebration & Milestones',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    desc: 'Celebrating 3,000+ happy seller partners scaled across 7 nationwide branches.',
  }
];

const categories = ['All', 'Workspace', 'Culture', 'Awards'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePreview, setActivePreview] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-28 pb-20 space-y-12">
      <SEO
        title="Company Gallery & Regional Workspace Tour | A2Z Aaradhya"
        description="Take a visual tour of A2Z Aaradhya Pvt. Ltd. offices, team culture, strategy meetings, seller masterclasses, and national award ceremonies."
        keywords="A2Z Aaradhya gallery, Surat office, company workspace, team culture, e-commerce company photos"
        canonicalPath="/about/gallery"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
          { name: 'Photo Gallery', path: '/about/gallery' },
        ]}
      />
      {/* Header */}
      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#166B82]/10 border border-[#166B82]/20 text-[#166B82] text-xs font-extrabold uppercase tracking-wider">
            <Images className="w-3.5 h-3.5" />
            <span>A2Z Life &amp; Operations</span>
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B3B48] font-outfit">
            Company Life &amp; Workspace Gallery
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto font-medium">
            Explore our state-of-the-art regional offices, team collaboration sessions, seller masterclasses, and corporate award milestones.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                activeCategory === cat
                  ? 'bg-[#166B82] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <AnimateOnScroll
              key={item.id}
              animation="fade-up"
              delay={idx * 60}
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              onClick={() => setActivePreview(item)}
            >
              <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Click to Expand</span>
                  </span>
                </div>
                <span className="absolute top-4 left-4 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#166B82] shadow-sm">
                  {item.category}
                </span>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-lg font-extrabold text-[#0B3B48] font-outfit group-hover:text-[#166B82] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Lightbox / Image Preview Modal */}
      {activePreview && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActivePreview(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePreview(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black transition-all"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={activePreview.image}
              alt={activePreview.title}
              className="w-full h-80 sm:h-96 object-cover"
            />

            <div className="p-6 sm:p-8 space-y-2 bg-white text-left">
              <span className="text-[10px] font-extrabold text-[#166B82] uppercase tracking-wider">
                {activePreview.category}
              </span>
              <h3 className="text-2xl font-extrabold text-[#0B3B48] font-outfit">
                {activePreview.title}
              </h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                {activePreview.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
