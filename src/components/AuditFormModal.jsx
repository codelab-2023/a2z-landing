import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Phone, User, Building, ShoppingBag, AlertCircle } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import confetti from 'canvas-confetti';

// Sanitize user text inputs to prevent XSS / malicious injection
function sanitizeText(str = '') {
  return str.replace(/[<>'"`;]/g, '').trim();
}

export default function AuditFormModal({ isOpen, onClose, modalType }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    marketplace: 'Amazon',
    monthlySales: 'Under ₹1 Lakh',
    serviceNeeded: 'Full Account Management',
    botTrap: '', // Honeypot field
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submittedMedium, setSubmittedMedium] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const validateForm = () => {
    setErrorMsg('');

    // Check honeypot spam bot trap
    if (formData.botTrap) {
      console.warn('Bot detected via honeypot field.');
      return false;
    }

    const cleanName = sanitizeText(formData.name).slice(0, 80);
    const cleanPhone = sanitizeText(formData.phone).replace(/[\s\-()]+/g, '').slice(0, 16);
    const cleanCity = sanitizeText(formData.city).slice(0, 80);

    if (!cleanName || cleanName.length < 2) {
      setErrorMsg('Please enter a valid Full Name (at least 2 characters).');
      return false;
    }

    // Phone validation (accept 10-digit Indian numbers or valid international)
    const phoneRegex = /^[+]?[0-9]{10,14}$/;
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      setErrorMsg('Please enter a valid 10-digit Phone / WhatsApp Number.');
      return false;
    }

    if (!cleanCity || cleanCity.length < 2) {
      setErrorMsg('Please enter your City.');
      return false;
    }

    return { cleanName, cleanPhone, cleanCity };
  };

  const fireConfetti = () => {
    try { confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } }); } catch (err) { }
  };

  const handleWhatsApp = () => {
    if (isProcessing) return;
    const valid = validateForm();
    if (!valid) return;
    const { cleanName, cleanPhone, cleanCity } = valid;
    
    setIsProcessing(true);
    fireConfetti();
    const msg = `Hello A2Z Aaradhya,\nI would like to enquire about your ${modalType === '3months' ? '3 Months Free Amazon Management offer' : 'Account Management / Audit service'}.\n\n• Name: ${cleanName}\n• Phone: ${cleanPhone}\n• City: ${cleanCity}${formData.marketplace ? `\n• Marketplace: ${formData.marketplace}` : ''}\n\nPlease get in touch with me.`;
    
    window.open(`https://wa.me/917802077444?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    setSubmittedMedium('WhatsApp');
    setSubmitted(true);
    setIsProcessing(false);
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmittedMedium('');
    setErrorMsg('');
    setFormData({
      name: '',
      phone: '',
      city: '',
      marketplace: 'Amazon',
      monthlySales: 'Under ₹1 Lakh',
      serviceNeeded: 'Full Account Management',
      botTrap: '',
    });
    onClose();
  };

  // Lock background scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300"
      onClick={handleReset}
    >

      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 border border-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-extrabold">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                <span>
                  {modalType === '3months' ? 'Claim 3 Months Free Management' : 'Get Free Account Audit'}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 font-outfit">
                {modalType === '3months'
                  ? 'Activate 3 Months FREE Management for New Accounts'
                  : 'Get Instant Marketplace Growth Plan'}
              </h3>

              <p className="text-xs text-slate-600 font-medium">
                {modalType === '3months'
                  ? 'Launching a new seller account? Get 3 months 100% free management support by our certified team.'
                  : 'Fill in your details below. Our senior platform manager will contact you within 15 minutes.'}
              </p>
            </div>

            {/* In-line Validation Error Banner */}
            {errorMsg && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-bold animate-in fade-in">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">

              {/* Bot Honeypot (Hidden from humans) */}
              <input
                type="text"
                name="website_url_field"
                value={formData.botTrap}
                onChange={(e) => setFormData({ ...formData, botTrap: e.target.value })}
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
                style={{ display: 'none' }}
                aria-hidden="true"
              />

              {/* Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-cyan-600" />
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  maxLength={80}
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => {
                    setErrorMsg('');
                    setFormData({ ...formData, name: e.target.value });
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm font-semibold focus:outline-none focus:border-cyan-600"
                />
              </div>

              {/* Phone & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-cyan-600" />
                    Phone / WhatsApp Number *
                  </label>
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
                    className="w-full py-3 px-4 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm font-semibold focus:outline-none focus:border-cyan-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-cyan-600" />
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={80}
                    placeholder="e.g. Ahmedabad / Surat"
                    value={formData.city}
                    onChange={(e) => {
                      setErrorMsg('');
                      setFormData({ ...formData, city: e.target.value });
                    }}
                    className="w-full py-3 px-4 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm font-semibold focus:outline-none focus:border-cyan-600"
                  />
                </div>
              </div>

              {/* Primary Marketplace - Only for Audit form */}
              {modalType !== '3months' && (
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <ShoppingBag className="w-3.5 h-3.5 text-cyan-600" />
                    Primary Marketplace
                  </label>
                  <select
                    value={formData.marketplace}
                    onChange={(e) => setFormData({ ...formData, marketplace: e.target.value })}
                    className="w-full py-3 px-4 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm font-bold focus:outline-none focus:border-cyan-600"
                  >
                    <option value="Amazon">Amazon India</option>
                    <option value="Flipkart">Flipkart</option>
                    <option value="Meesho">Meesho</option>
                    <option value="All Three">All 3 Platforms</option>
                    <option value="Account Reinstatement">Account Reinstatement</option>
                  </select>
                </div>
              )}

              {/* WhatsApp Direct Submit Button */}
              <div className="pt-3 space-y-3">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  disabled={isProcessing}
                  className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold rounded-xl shadow-lg shadow-emerald-600/25 transition-all duration-300 flex items-center justify-center gap-2.5 text-base transform hover:-translate-y-0.5 disabled:opacity-75 cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                  <span>Submit &amp; Connect on WhatsApp</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center font-medium">
                  🔒 100% Confidential. NDA Protected. Zero Spam.
                </p>
              </div>
            </form>

          </div>
        ) : (
          /* Submission Success State */
          <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-extrabold text-slate-900 font-outfit">
                Request Received! 🎉
              </h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto font-medium">
                Thank you <strong className="text-cyan-700">{formData.name}</strong>! Your senior platform manager from A2Z Aaradhya has been assigned.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-1.5 font-semibold text-left max-w-sm mx-auto">
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Submitted Via:</span>
                <span className="text-emerald-700 font-extrabold flex items-center gap-1.5">
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-600" /> WhatsApp
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Phone:</span>
                <span className="text-slate-900">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">City:</span>
                <span className="text-slate-900">{formData.city}</span>
              </div>
              {formData.marketplace && modalType !== '3months' && (
                <div className="flex justify-between">
                  <span className="text-slate-500">Marketplace:</span>
                  <span className="text-slate-900">{formData.marketplace}</span>
                </div>
              )}
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-8 py-3 bg-[#166B82] hover:bg-[#0B3B48] text-white font-extrabold rounded-xl text-sm shadow-md transition-all"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

