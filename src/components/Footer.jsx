import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, CheckCircle2, Instagram, Facebook, Linkedin, Youtube, MessageCircle } from 'lucide-react';

const LogoSvg = '/logo/a2z-aaradhya-logo.svg';

export default function Footer({ onOpenModal }) {
  return (
    <footer className="bg-[#07242D] text-slate-400 text-xs relative pt-16 pb-10 border-t border-[#166B82]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={LogoSvg} 
                alt="A2Z Aaradhya Logo" 
                className="h-12 w-auto object-contain bg-white/90 p-1.5 rounded-xl group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-base text-white font-outfit">A2Z AARADHYA PVT LTD®</span>
                <span className="text-[10px] text-[#9ED6CD] uppercase tracking-wider font-bold">E-Commerce Growth Partner</span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed font-medium">
              India's premier marketplace management agency. Official Amazon Authorized Partner, Flipkart Growth Specialist &amp; Meesho Scaling Expert with 7 regional branches across India.
            </p>

            <div className="flex items-center gap-2 text-[#9ED6CD] font-bold text-xs">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Registered Trademark &amp; ISO Certified Company</span>
            </div>

            {/* Helpline & Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a 
                href="tel:7802077444" 
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#166B82] hover:bg-[#0F5265] text-white font-extrabold text-xs transition-all shadow-md"
              >
                <Phone className="w-3.5 h-3.5" />
                +91 78020 77444
              </a>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/a2z_aaradhya_pvt.ltd?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 text-white flex items-center justify-center transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/a2zaaradhya"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/a2z-aaradhya-pvt-ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#0A66C2] text-white flex items-center justify-center transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/@a2zaaradhya"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#FF0000] text-white flex items-center justify-center transition-all"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/917802077444"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              <li><Link to="/services" className="hover:text-[#9ED6CD] transition-colors">Amazon Account Management</Link></li>
              <li><Link to="/services" className="hover:text-[#9ED6CD] transition-colors">Flipkart Account Management</Link></li>
              <li><Link to="/services" className="hover:text-[#9ED6CD] transition-colors">Meesho Sales Scaling</Link></li>
              <li><Link to="/services" className="hover:text-[#9ED6CD] transition-colors">New Seller Registration</Link></li>
              <li><Link to="/services" className="hover:text-[#9ED6CD] transition-colors">Account Suspension Recovery</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <button 
                  onClick={() => onOpenModal('3months')} 
                  className="hover:text-amber-400 transition-colors text-amber-300 font-extrabold text-left"
                >
                  3 Months Free Offer
                </button>
              </li>
              <li><Link to="/about" className="hover:text-[#9ED6CD] transition-colors">About Us &amp; 10-Step SOP</Link></li>
              <li><Link to="/about/team" className="hover:text-[#9ED6CD] transition-colors">Our Leadership Team</Link></li>
              <li><Link to="/about/awards" className="hover:text-[#9ED6CD] transition-colors">Awards &amp; Certifications</Link></li>
              <li><Link to="/about/gallery" className="hover:text-[#9ED6CD] transition-colors">Company Gallery</Link></li>
              <li><Link to="/branches" className="hover:text-[#9ED6CD] transition-colors">Our Regional Branches</Link></li>
              <li><Link to="/careers" className="hover:text-[#9ED6CD] transition-colors">Career Opportunities</Link></li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Reach Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#9ED6CD] shrink-0" />
                <a href="tel:7802077444" className="text-white font-extrabold hover:text-[#9ED6CD] transition-colors text-xs">
                  +91 78020 77444
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#9ED6CD] shrink-0" />
                <a href="mailto:info@a2zaaradhya.com" className="text-slate-300 hover:text-white text-xs">
                  info@a2zaaradhya.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#9ED6CD] shrink-0 mt-0.5" />
                <span className="text-slate-300 text-xs leading-relaxed">Head Office: Surat, Gujarat | 7 Regional Branches Across India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-center sm:text-left">
          <p className="text-slate-500">
            © {new Date().getFullYear()} A2Z Aaradhya Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link to="/privacy" className="hover:text-[#9ED6CD] transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/privacy" className="hover:text-[#9ED6CD] transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link to="/privacy" className="hover:text-[#9ED6CD] transition-colors">NDA Compliance</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
