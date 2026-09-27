import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

const LogoSvg = '/logo/a2z-aaradhya-logo.svg';

export default function Navbar({ onOpenModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const aboutMenuTimer = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileAboutOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (aboutMenuTimer.current) {
        clearTimeout(aboutMenuTimer.current);
      }
    };
  }, []);

  const openAboutMenu = () => {
    if (aboutMenuTimer.current) {
      clearTimeout(aboutMenuTimer.current);
    }
    setAboutMenuOpen(true);
  };

  const closeAboutMenu = () => {
    if (aboutMenuTimer.current) {
      clearTimeout(aboutMenuTimer.current);
    }
    aboutMenuTimer.current = setTimeout(() => {
      setAboutMenuOpen(false);
    }, 120);
  };

  const isActive = (path) => {
    if (path === '/about') {
      return location.pathname === '/about' || location.pathname.startsWith('/about/');
    }
    return location.pathname === path;
  };

  const aboutMenuItems = [
    { label: 'About Us', path: '/about' },
    { label: 'Team', path: '/about/team' },
    { label: 'Awards', path: '/about/awards' },
    { label: 'Gallery', path: '/about/gallery' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav-light shadow-lg shadow-slate-900/5' : 'bg-white/90 backdrop-blur-md border-b border-slate-200/80'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-16 sm:h-20 flex items-center justify-between">

        {/* Official Brand Logo */}
        <Link to="/" className="flex items-center group">
          <div className="relative flex items-center">
            <img
              src={LogoSvg}
              alt="A2Z Aaradhya Official Logo"
              className="h-11 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute top-1 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white animate-ping" />
            <span className="absolute top-1 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white" />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            className={`text-base font-extrabold transition-colors ${isActive('/') ? 'text-[#166B82]' : 'text-slate-700 hover:text-[#166B82]'
              }`}
          >
            Home
          </Link>

          <Link
            to="/services"
            className={`text-base font-extrabold transition-colors ${isActive('/services') ? 'text-[#166B82]' : 'text-slate-700 hover:text-[#166B82]'
              }`}
          >
            Services
          </Link>

          <div
            className="relative"
            onMouseEnter={openAboutMenu}
            onMouseLeave={closeAboutMenu}
          >
            <button
              type="button"
              onClick={() => setAboutMenuOpen((prev) => !prev)}
              className={`text-base font-extrabold transition-colors flex items-center gap-2 ${isActive('/about') ? 'text-[#166B82]' : 'text-slate-700 hover:text-[#166B82]'
                }`}
            >
              <span>About Us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-200 ${aboutMenuOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
              </svg>
            </button>

            {aboutMenuOpen && (
              <div
                className="absolute left-0 top-full mt-3 w-56 rounded-2xl border border-slate-200 bg-white/95 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-sm p-2 z-50"
                onMouseEnter={openAboutMenu}
                onMouseLeave={closeAboutMenu}
              >
                {aboutMenuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setAboutMenuOpen(false)}
                    className={`block rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${isActive(item.path)
                      ? 'bg-[#166B82]/10 text-[#166B82]'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-[#166B82]'
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/branches"
            className={`text-base font-extrabold transition-colors ${isActive('/branches') ? 'text-[#166B82]' : 'text-slate-700 hover:text-[#166B82]'
              }`}
          >
            Branches
          </Link>

          <Link
            to="/careers"
            className={`text-base font-extrabold transition-colors ${isActive('/careers') ? 'text-[#166B82]' : 'text-slate-700 hover:text-[#166B82]'
              }`}
          >
            Careers
          </Link>

          <Link
            to="/contact"
            className={`text-base font-extrabold transition-colors ${isActive('/contact') ? 'text-[#166B82]' : 'text-slate-700 hover:text-[#166B82]'
              }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Action CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onOpenModal('3months')}
            className="px-5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-extrabold text-sm transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-amber-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span>3 Months Free</span>
          </button>

          <button
            onClick={() => onOpenModal('audit')}
            className="bg-gradient-to-r from-[#166B82] to-[#0F5265] hover:from-[#0F5265] hover:to-[#0B3B48] text-white font-extrabold text-sm px-6 py-2 rounded-xl shadow-md shadow-[#166B82]/25 hover:shadow-lg transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            <span>Get Account Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => onOpenModal('audit')}
            className="text-xs font-extrabold bg-[#166B82] text-white px-3 py-1.5 rounded-lg shadow-sm"
          >
            Audit
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 sm:top-20 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer (Drops down full-width below navbar) */}
      {mobileMenuOpen && (
        <div className="relative z-50 lg:hidden w-full bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-lg font-bold text-sm ${isActive('/') ? 'bg-[#166B82]/10 text-[#166B82]' : 'text-slate-800'}`}
            >
              Home Page
            </Link>

            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-lg font-bold text-sm ${isActive('/services') ? 'bg-[#166B82]/10 text-[#166B82]' : 'text-slate-800'}`}
            >
              Marketplace Services
            </Link>

            {/* Mobile About Accordion with Arrow toggle */}
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => setMobileAboutOpen((prev) => !prev)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg font-bold text-sm transition-all ${
                  isActive('/about')
                    ? 'bg-[#166B82]/10 text-[#166B82]'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
                aria-expanded={mobileAboutOpen}
              >
                <span>About</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                    mobileAboutOpen ? 'rotate-180 text-[#166B82]' : ''
                  }`}
                />
              </button>

              {mobileAboutOpen && (
                <div className="ml-3 pl-3 border-l-2 border-[#166B82]/20 space-y-1 py-1 animate-in slide-in-from-top-1 duration-150">
                  {aboutMenuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2 rounded-lg font-semibold text-sm transition-colors ${
                        isActive(item.path)
                          ? 'bg-[#166B82]/15 text-[#166B82] font-bold'
                          : 'text-slate-700 hover:text-[#166B82] hover:bg-slate-100'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/branches"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-lg font-bold text-sm ${isActive('/branches') ? 'bg-[#166B82]/10 text-[#166B82]' : 'text-slate-800'}`}
            >
              Our Branches
            </Link>

            <Link
              to="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-lg font-bold text-sm ${isActive('/careers') ? 'bg-[#166B82]/10 text-[#166B82]' : 'text-slate-800'}`}
            >
              Careers
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-lg font-bold text-sm ${isActive('/contact') ? 'bg-[#166B82]/10 text-[#166B82]' : 'text-slate-800'}`}
            >
              Contact Us & Offices
            </Link>
          </nav>

          <div className="pt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenModal('audit'); }}
              className="w-full py-3 bg-[#166B82] text-white font-extrabold rounded-xl text-center shadow-md text-sm"
            >
              Book Free Account Audit
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
