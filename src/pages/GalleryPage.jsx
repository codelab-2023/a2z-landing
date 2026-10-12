import React, { useState, useEffect, useCallback } from 'react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import { Images, X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

import img1 from '../images/Gallery/1.webp';
import img2 from '../images/Gallery/2.webp';
import img3 from '../images/Gallery/3.webp';
import img4 from '../images/Gallery/4.webp';
import img5 from '../images/Gallery/5.webp';
import img6 from '../images/Gallery/6.webp';
import img7 from '../images/Gallery/7.webp';
import img8 from '../images/Gallery/8.webp';
import img9 from '../images/Gallery/9.webp';
import img10 from '../images/Gallery/10.webp';
import img11 from '../images/Gallery/11.webp';

const galleryItems = [
  { id: 1, title: 'Gallery Photo 1', image: img1 },
  { id: 2, title: 'Gallery Photo 2', image: img2 },
  { id: 3, title: 'Gallery Photo 3', image: img3 },
  { id: 4, title: 'Gallery Photo 4', image: img4 },
  { id: 5, title: 'Gallery Photo 5', image: img5 },
  { id: 6, title: 'Gallery Photo 6', image: img6 },
  { id: 7, title: 'Gallery Photo 7', image: img7 },
  { id: 8, title: 'Gallery Photo 8', image: img8 },
  { id: 9, title: 'Gallery Photo 9', image: img9 },
  { id: 10, title: 'Gallery Photo 10', image: img10 },
  { id: 11, title: 'Gallery Photo 11', image: img11 },
];

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleOpen = (idx) => {
    setCurrentIndex(idx);
  };

  const handleClose = () => {
    setCurrentIndex(null);
  };

  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : galleryItems.length - 1));
  }, []);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev < galleryItems.length - 1 ? prev + 1 : 0));
  }, []);

  // Keyboard navigation (Arrow keys + Escape)
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') handleClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, handlePrev, handleNext]);

  return (
    <div className="pt-16 sm:pt-28 pb-10 sm:pb-20 space-y-8 sm:space-y-12">
      <SEO
        title="Company Gallery & Regional Workspace Tour | A2Z Aaradhya"
        description="Take a visual tour of A2Z Aaradhya offices, team culture, strategy meetings, seller masterclasses, and national award ceremonies."
        keywords="A2Z Aaradhya gallery, Surat office, company workspace, team culture, e-commerce company photos"
        canonicalPath="/about/gallery"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
          { name: 'Photo Gallery', path: '/about/gallery' },
        ]}
      />

      {/* Heading */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#166B82]/20 bg-[#166B82]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#166B82]">
            # GALLERY
          </p>
          <h1 className="mt-4 text-4xl font-black text-[#0B3B48] sm:text-5xl lg:text-6xl font-outfit">
            Our Workspace & Company Life
          </h1>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryItems.map((item, idx) => (
            <AnimateOnScroll
              key={item.id}
              animation="fade-up"
              delay={idx * 50}
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer aspect-[4/3] sm:aspect-[16/11]"
              onClick={() => handleOpen(idx)}
            >
              <img
                src={item.image}
                alt={item.title || "Gallery photo"}
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 shadow-lg">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to Expand</span>
                </span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Lightbox / Image Preview Modal with Navigation Arrows */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 select-none animate-in fade-in duration-200"
          onClick={handleClose}
        >
          {/* Top Bar with Counter and Close Button */}
          <div 
            className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between px-2"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-white/80 bg-black/50 backdrop-blur-md border border-white/10 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full shadow-lg">
              {currentIndex + 1} / {galleryItems.length}
            </span>

            <button
              onClick={handleClose}
              className="p-2.5 rounded-full bg-black/60 border border-white/20 text-white hover:bg-black/90 hover:scale-105 transition-all shadow-lg"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Left / Previous Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-4 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 hover:scale-110 active:scale-95 transition-all shadow-2xl backdrop-blur-sm group"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:-translate-x-0.5" />
          </button>

          {/* Right / Next Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-4 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 hover:scale-110 active:scale-95 transition-all shadow-2xl backdrop-blur-sm group"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:translate-x-0.5" />
          </button>

          {/* Main Image Container */}
          <div
            className="relative max-w-5xl w-full flex items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={currentIndex}
              src={galleryItems[currentIndex].image}
              alt={galleryItems[currentIndex].title || "Preview"}
              className="w-auto h-auto max-w-full max-h-[82vh] object-contain rounded-2xl shadow-2xl border border-white/10 animate-in fade-in zoom-in-95 duration-200"
            />
          </div>
        </div>
      )}
    </div>
  );
}
