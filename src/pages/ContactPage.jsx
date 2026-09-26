import React, { useState } from 'react';
import {
  Phone, Mail, Send, CheckCircle2, ShieldCheck, Clock,
  AlertCircle, Instagram, Facebook, Linkedin, Youtube, MessageCircle, ExternalLink, Share2
} from 'lucide-react';
import SEO from '../components/SEO';
import confetti from 'canvas-confetti';

// Sanitize user text inputs to prevent XSS / malicious injection
function sanitizeText(str = '') {
  return str.replace(/[<>'"`;]/g, '').trim();
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    marketplace: 'Amazon',
    message: '',
    botTrap: '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWhatsAppSubmit = (e) => {
    if (e) e.preventDefault();
    if (isSubmitting) return;
    setErrorMsg('');

    // Check honeypot spam trap
    if (formData.botTrap) {
      console.warn('Spam bot detected.');
      return;
    }

    const cleanName = sanitizeText(formData.name).slice(0, 80);
    const cleanPhone = sanitizeText(formData.phone).replace(/[\s\-()]+/g, '').slice(0, 16);
    const cleanCity = sanitizeText(formData.city).slice(0, 80);
    const cleanMsg = sanitizeText(formData.message).slice(0, 1000);

    if (!cleanName || cleanName.length < 2) {
      setErrorMsg('Please enter your full name (at least 2 characters).');
      return;
    }

    const phoneRegex = /^[+]?[0-9]{10,14}$/;
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      setErrorMsg('Please enter a valid 10-digit Phone or WhatsApp number.');
      return;
    }

    if (!cleanCity || cleanCity.length < 2) {
      setErrorMsg('Please enter your City / State.');
      return;
    }

    const msg = `Hello A2Z Aaradhya,\nI would like to schedule a Free Account Strategy for ${formData.marketplace}!\n\n• Name: ${cleanName}\n• Phone: ${cleanPhone}\n• City: ${cleanCity}${cleanMsg ? `\n• Message: ${cleanMsg}` : ''}\n\nPlease get in touch with me.`;
    window.open(`https://wa.me/917802077444?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    try {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } catch (err) { }
    setSubmitted(true);
  };

  return (
    <div className="pt-16 sm:pt-28 pb-10 sm:pb-20 space-y-10 sm:space-y-16">
      <SEO
        title="Contact Us & Book Free Marketplace Account Audit | A2Z Aaradhya"
        description="Get in touch with A2Z Aaradhya senior marketplace consultants. Call +91-7802077444 or schedule a free account growth audit for Amazon, Myntra, Flipkart & Meesho."
        keywords="Contact A2Z Aaradhya, free account audit, Amazon consultation, marketplace support helpline, e-commerce agency contact"
        canonicalPath="/contact"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact' },
        ]}
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#166B82]/10 border border-[#166B82]/20 text-[#166B82] text-xs font-extrabold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Direct Client Support &amp; Audits</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B3B48] font-outfit">
            Contact A2Z Aaradhya Executive Team
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto font-medium">
            Schedule a 1-on-1 strategy session with our senior marketplace manager or request an instant seller account audit.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* Left Column: Direct Helpline & Social Media Cards with balanced spacing */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 order-2 lg:order-1">

            {/* Card 1: Official Support Hotline */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-4">
              <h2 className="text-2xl font-extrabold text-[#0B3B48] font-outfit">Official Support Hotline</h2>

              <div className="space-y-3">
                <a
                  href="tel:7802077444"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#166B82] transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#166B82] text-white flex items-center justify-center font-bold shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Direct Phone / WhatsApp</span>
                    <div className="text-lg font-extrabold text-[#0B3B48] font-outfit group-hover:text-[#166B82]">
                      +91 78020 77444
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-11 h-11 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Official Email</span>
                    <div className="text-sm font-extrabold text-[#0B3B48] font-outfit">
                      support@a2z-aaradhya.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Working Hours</span>
                    <div className="text-xs font-bold text-slate-800">
                      Mon - Sat: 9:00 AM - 6:00 PM (IST)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Official Social Media & Community Channels */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-extrabold text-[#0B3B48] font-outfit">Connect on Social</h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Daily marketplace tips &amp; seller updates</p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#166B82]/10 text-[#166B82] flex items-center justify-center font-bold shrink-0">
                  <Share2 className="w-4 h-4" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/a2z_aaradhya_pvt.ltd?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl border border-pink-100 bg-gradient-to-br from-pink-50/80 to-white hover:border-pink-300 hover:shadow-sm transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-xs shrink-0 group-hover:scale-110 transition-transform">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-extrabold text-slate-900 block truncate">Instagram</span>
                    <span className="text-[10px] text-pink-600 font-bold block truncate">A2Z Aaradhya</span>
                  </div>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/a2zaaradhya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-white hover:border-blue-300 hover:shadow-sm transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#1877F2] text-white flex items-center justify-center shadow-xs shrink-0 group-hover:scale-110 transition-transform">
                    <Facebook className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-extrabold text-slate-900 block truncate">Facebook</span>
                    <span className="text-[10px] text-blue-600 font-bold block truncate">A2Z Aaradhya</span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/a2z-aaradhya-pvt-ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50/80 to-white hover:border-sky-300 hover:shadow-sm transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center shadow-xs shrink-0 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-extrabold text-slate-900 block truncate">LinkedIn</span>
                    <span className="text-[10px] text-[#0A66C2] font-bold block truncate">A2Z Aaradhya</span>
                  </div>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@a2zaaradhya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl border border-red-100 bg-gradient-to-br from-red-50/80 to-white hover:border-red-300 hover:shadow-sm transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#FF0000] text-white flex items-center justify-center shadow-xs shrink-0 group-hover:scale-110 transition-transform">
                    <Youtube className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-extrabold text-slate-900 block truncate">YouTube</span>
                    <span className="text-[10px] text-red-600 font-bold block truncate">@A2ZAaradhya</span>
                  </div>
                </a>

              </div>

              {/* WhatsApp Community Direct Action Banner */}
              <a
                href="https://wa.me/917802077444?text=Hello%20A2Z%20Aaradhya,%20I%20want%20to%20get%20e-commerce%20growth%20updates!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-[#166B82] hover:from-emerald-700 hover:to-[#0F5265] text-white shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-extrabold font-outfit">WhatsApp Seller Community</div>
                    <div className="text-[10px] text-emerald-100 font-medium">Daily algorithm updates &amp; growth hacks</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-emerald-200 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Form (Top on mobile) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6 flex flex-col justify-between order-1 lg:order-2">

            {!submitted ? (
              <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3B48] font-outfit">
                    Schedule Free Account Strategy
                  </h2>
                  <p className="text-xs text-slate-600 font-medium mt-1">
                    Fill out the form below. A senior marketplace manager will analyze your store and contact you within 15 minutes.
                  </p>
                </div>

                {/* Validation Error Message */}
                {errorMsg && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-bold animate-in fade-in">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Bot Honeypot */}
                <input
                  type="text"
                  name="user_website_url"
                  value={formData.botTrap}
                  onChange={(e) => setFormData({ ...formData, botTrap: e.target.value })}
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                  style={{ display: 'none' }}
                  aria-hidden="true"
                />

                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      maxLength={80}
                      placeholder="e.g. Vikram Mehta"
                      value={formData.name}
                      onChange={(e) => {
                        setErrorMsg('');
                        setFormData({ ...formData, name: e.target.value });
                      }}
                      className="w-full py-3 px-4 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm font-semibold focus:outline-none focus:border-[#166B82]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        maxLength={16}
                        placeholder="e.g. 7802077444"
                        value={formData.phone}
                        onChange={(e) => {
                          setErrorMsg('');
                          setFormData({ ...formData, phone: e.target.value });
                        }}
                        className="w-full py-3 px-4 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm font-semibold focus:outline-none focus:border-[#166B82]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">City / State *</label>
                      <input
                        type="text"
                        required
                        maxLength={80}
                        placeholder="e.g. Surat / Ahmedabad"
                        value={formData.city}
                        onChange={(e) => {
                          setErrorMsg('');
                          setFormData({ ...formData, city: e.target.value });
                        }}
                        className="w-full py-3 px-4 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm font-semibold focus:outline-none focus:border-[#166B82]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Target Marketplace</label>
                    <select
                      value={formData.marketplace}
                      onChange={(e) => setFormData({ ...formData, marketplace: e.target.value })}
                      className="w-full py-3 px-4 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm font-bold focus:outline-none focus:border-[#166B82]"
                    >
                      <option value="Amazon">Amazon India Account Management</option>
                      <option value="Myntra">Myntra Account Management &amp; Onboarding</option>
                      <option value="Flipkart">Flipkart Management</option>
                      <option value="Meesho">Meesho Sales Scaling</option>
                      <option value="New Seller (3 Months Free)">New Seller Registration (3 Months FREE Offer)</option>
                      <option value="Suspension">Account Suspension &amp; PoA Recovery</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Message / Current Seller Challenges</label>
                    <textarea
                      rows={3}
                      maxLength={1000}
                      placeholder="Tell us about your brand, current monthly sales, or any specific account issues..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full py-3 px-4 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm font-semibold focus:outline-none focus:border-[#166B82]"
                    />
                  </div>
                </div>

                {/* Submit on WhatsApp */}
                <button
                  type="submit"
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-base rounded-2xl shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Submit Strategy Request on WhatsApp</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center font-medium">
                  🔒 100% Confidential. ISO Certified Data Security &amp; NDA Protection.
                </p>
              </form>
            ) : (
              <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 font-outfit">Strategy Request Received!</h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto font-medium">
                  Thank you <strong className="text-[#166B82]">{formData.name}</strong>! Your senior platform manager has been assigned.
                </p>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-1.5 font-semibold text-left max-w-sm mx-auto">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Phone:</span>
                    <span className="text-slate-900">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">City:</span>
                    <span className="text-slate-900">{formData.city}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Target Marketplace:</span>
                    <span className="text-slate-900">{formData.marketplace}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/917802077444?text=${encodeURIComponent(`Hello A2Z Aaradhya, I just submitted a contact request for ${formData.marketplace}! Name: ${formData.name}, Phone: ${formData.phone}, City: ${formData.city}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow-md text-sm transition-all"
                  >
                    <span>Instant WhatsApp Connect</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        city: '',
                        marketplace: 'Amazon',
                        message: '',
                        botTrap: '',
                      });
                    }}
                    className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold rounded-xl text-sm transition-all"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}

