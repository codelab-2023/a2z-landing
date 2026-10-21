import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Phone, User, Building, ShoppingBag, AlertCircle, AlertTriangle, Globe, Code, Laptop } from 'lucide-react';
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
    product: '',
    marketplace: '1. Amazon Account Management',
    monthlySales: 'Under ₹1 Lakh',
    serviceNeeded: 'Full Account Management',
    websiteType: '1. Business / Company websites',
    projectDetails: '',
    botTrap: '', // Honeypot field
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submittedMedium, setSubmittedMedium] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

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

    let msg = '';
    const isWebDev = (modalType === 'shopify' || modalType === 'wordpress' || modalType === 'webdev');
    if (isWebDev) {
      msg = `Hello A2Z Aaradhya,\nI would like to enquire about your *Website Development* service.\n\n• Name: ${cleanName}\n• Phone: ${cleanPhone}\n• City: ${cleanCity}\n• Website Category: ${formData.websiteType || '1. Business / Company websites'}${formData.projectDetails ? `\n• Project Details: ${formData.projectDetails}` : ''}\n\nKindly share quotation and timeline details.`;
    } else if (modalType === 'social') {
      msg = `Hello A2Z Aaradhya,\nI would like to enquire about your *Social Media Management* service.\n\n• Name: ${cleanName}\n• Phone: ${cleanPhone}\n• City: ${cleanCity}\n• Requirement: Instagram / Facebook Page Growth, Viral Reels & Meta Ads\n\nKindly share service packages and strategy details.`;
    } else if (modalType === 'brandstore') {
      msg = `Hello A2Z Aaradhya,\nI would like to enquire about your *Amazon Brand Store & A+ Content* design service.\n\n• Name: ${cleanName}\n• Phone: ${cleanPhone}\n• City: ${cleanCity}${formData.product ? `\n• Product Category: ${formData.product}` : ''}\n\nKindly get in touch with me.`;
    } else if (modalType === '3months') {
      msg = `Hello A2Z Aaradhya,\nI would like to open a new Amazon Seller Account through A2Z Aaradhya and apply for the 3 Months FREE Management offer.\n\n• Name: ${cleanName}\n• Phone: ${cleanPhone}\n• City: ${cleanCity}${formData.product ? `\n• Product / Category: ${formData.product}` : ''}\n\nKindly get in touch with me at your earliest convenience.`;
    } else {
      msg = `Hello A2Z Aaradhya,\nI would like to enquire about your Service / Account Management.\n\n• Name: ${cleanName}\n• Phone: ${cleanPhone}\n• City: ${cleanCity}${formData.product ? `\n• Product / Category: ${formData.product}` : ''}${formData.marketplace ? `\n• Service Required: ${formData.marketplace}` : ''}\n\nKindly get in touch with me at your earliest convenience.`;
    }

    // Website Development leads go to +91 98252 54810. All other leads go to +91 97378 91687.
    const targetPhone = isWebDev ? '919825254810' : '919737891687';

    window.open(`https://wa.me/${targetPhone}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
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
      product: '',
      marketplace: '1. Amazon Account Management',
      monthlySales: 'Under ₹1 Lakh',
      serviceNeeded: 'Full Account Management',
      websiteType: '1. Business / Company websites',
      projectDetails: '',
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

  if (!isOpen) return null;

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
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 border border-slate-200 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-extrabold">
                {(modalType === 'shopify' || modalType === 'wordpress' || modalType === 'webdev') ? (
                  <>
                    <Laptop className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Website Development (7 Specialized Solutions)</span>
                  </>
                ) : modalType === 'social' ? (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Social Media Management & Growth</span>
                  </>
                ) : modalType === 'brandstore' ? (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Amazon Brand Store & A+ Content</span>
                  </>
                ) : modalType === '3months' ? (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Register via A2Z • Get 3 Months FREE Management</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Free Account Audit & Service Enquiry</span>
                  </>
                )}
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 font-outfit">
                {(modalType === 'shopify' || modalType === 'wordpress' || modalType === 'webdev')
                  ? 'Build Your Custom Website or E-Commerce Store'
                  : modalType === 'social'
                  ? 'Scale Your Brand with Social Media Management'
                  : modalType === 'brandstore'
                  ? 'Design Your Amazon Brand Store & A+ Content'
                  : modalType === '3months'
                  ? 'Apply for 3 Months FREE Amazon Management'
                  : 'Get Your Instant Marketplace Growth Plan'}
              </h3>

              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                {(modalType === 'shopify' || modalType === 'wordpress' || modalType === 'webdev')
                  ? 'Custom business websites, high-converting e-commerce stores, tools & booking portals engineered for growth.'
                  : modalType === 'social'
                  ? 'End-to-end Instagram & Facebook page growth, viral reels production, content calendar, and high-ROI Meta ad campaigns.'
                  : modalType === 'brandstore'
                  ? 'Elevate your brand presence on Amazon with immersive multi-page storefronts, A+ EBC modules, and lifestyle visuals.'
                  : modalType === '3months'
                  ? 'This offer is valid only for sellers who register their new Amazon Seller Account through A2Z Aaradhya. Complete setup + 3 months management — absolutely free.'
                  : 'Fill in your details below. Our senior platform manager will contact you within 15 minutes.'}
              </p>

              {/* Eligibility Notice for 3 Months */}
              {modalType === '3months' && (
                <div className="flex items-start gap-2.5 p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 font-semibold">
                  <span className="text-base leading-none mt-0.5">⚠️</span>
                  <span>
                    <strong className="font-extrabold">Eligibility Condition:</strong> This 3-month FREE offer applies only when your new Amazon Seller Account is opened through A2Z Aaradhya. Existing accounts are not eligible for this offer.
                  </span>
                </div>
              )}
            </div>

            {/* In-line Validation Error Banner */}
            {errorMsg && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-bold animate-in fade-in">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {/* Bot Honeypot */}
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
                    placeholder="e.g. 9601055508"
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

              {/* Website Development Specific Fields */}
              {(modalType === 'shopify' || modalType === 'wordpress' || modalType === 'webdev') ? (
                <>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-cyan-600" />
                      Select Website Category Needed *
                    </label>
                    <select
                      value={formData.websiteType}
                      onChange={(e) => setFormData({ ...formData, websiteType: e.target.value })}
                      className="w-full py-3 px-4 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm font-bold focus:outline-none focus:border-cyan-600"
                    >
                      <option value="1. Business / Company websites">1. Business / Company websites</option>
                      <option value="2. E-commerce">2. E-commerce (Shopify / WooCommerce / Custom)</option>
                      <option value="3. Booking aur Appointment">3. Booking aur Appointment</option>
                      <option value="4. Content aur Community">4. Content aur Community</option>
                      <option value="5. Web Apps aur Tools">5. Web Apps aur Tools</option>
                      <option value="6. AI-powered websites">6. AI-powered websites</option>
                      <option value="7. Personal aur Special">7. Personal aur Special</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Laptop className="w-3.5 h-3.5 text-cyan-600" />
                      Project Details / Special Features Needed (Optional)
                    </label>
                    <textarea
                      rows={2}
                      maxLength={300}
                      placeholder="e.g. Payment gateway integration, 20 products, fast delivery..."
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm font-medium focus:outline-none focus:border-cyan-600 resize-none"
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Product / Category - Only for 3months form */}
                  {modalType === '3months' && (
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                        <ShoppingBag className="w-3.5 h-3.5 text-cyan-600" />
                        What Do You Plan to Sell? (Product / Category)
                      </label>
                      <input
                        type="text"
                        maxLength={100}
                        placeholder="e.g. Clothing, Electronics, Handicrafts..."
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full py-3 px-4 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm font-semibold focus:outline-none focus:border-cyan-600"
                      />
                    </div>
                  )}

                  {/* Primary Service / Marketplace - Exactly 9 services line to line */}
                  {modalType !== '3months' && (
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                        <ShoppingBag className="w-3.5 h-3.5 text-cyan-600" />
                        Select Service / Platform Required *
                      </label>
                      <select
                        value={formData.marketplace}
                        onChange={(e) => setFormData({ ...formData, marketplace: e.target.value })}
                        className="w-full py-3 px-4 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm font-bold focus:outline-none focus:border-cyan-600"
                      >
                        <option value="1. Amazon Account Management">1. Amazon Account Management</option>
                        <option value="2. Myntra Account Management">2. Myntra Account Management</option>
                        <option value="3. Flipkart Account Management">3. Flipkart Account Management</option>
                        <option value="4. Meesho Account Management">4. Meesho Account Management</option>
                        <option value="5. Social Media Management">5. Social Media Management</option>
                        <option value="6. Website Development">6. Website Development</option>
                        <option value="7. Amazon Brand Store">7. Amazon Brand Store</option>
                        <option value="8. New Seller Setup">8. New Seller Setup (3 Months Free)</option>
                        <option value="9. Account Reinstatement">9. Account Reinstatement</option>
                      </select>
                    </div>
                  )}
                </>
              )}

              {/* Mandatory GST Notice Banner right above Apply/Submit button */}
              <div className="flex items-start gap-2.5 p-3 sm:p-3.5 bg-amber-50/90 border border-amber-300 rounded-xl text-amber-950 text-xs shadow-xs">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5 text-left">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-extrabold text-amber-950 text-xs">GST Number Compulsory (अनिवार्य)</span>
                    <span className="bg-amber-200/90 text-amber-900 border border-amber-300 text-[10px] px-1.5 py-0.5 rounded font-black uppercase tracking-wide">
                      MANDATORY
                    </span>
                  </div>
                  <p className="text-[11.5px] text-amber-900/95 leading-snug font-medium">
                    Marketplace account management aur seller onboarding ke liye <strong>Active GST Number hona compulsory hai</strong>. GST ke bina koi bhi service provide nahi ki jayegi.
                  </p>
                </div>
              </div>

              {/* WhatsApp Direct Submit Button */}
              <div className="pt-2 space-y-3">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  disabled={isProcessing}
                  className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold rounded-xl shadow-lg shadow-emerald-600/25 transition-all duration-300 flex items-center justify-center gap-2.5 text-base transform hover:-translate-y-0.5 disabled:opacity-75 cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                  <span>
                    {(modalType === 'shopify' || modalType === 'wordpress' || modalType === 'webdev')
                      ? 'Get Website Quote & Connect on WhatsApp'
                      : modalType === 'social'
                      ? 'Get Social Media Growth Plan on WhatsApp'
                      : modalType === 'brandstore'
                      ? 'Get Brand Store Quote & Connect on WhatsApp'
                      : modalType === '3months'
                      ? 'Apply Now — Connect via WhatsApp'
                      : 'Submit & Connect on WhatsApp'}
                  </span>
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
                Thank you <strong className="text-cyan-700">{formData.name}</strong>! Your requirements have been shared with our web &amp; account specialists.
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
              {(modalType === 'shopify' || modalType === 'wordpress') ? (
                <div className="flex justify-between">
                  <span className="text-slate-500">Website:</span>
                  <span className="text-slate-900">{formData.websiteType}</span>
                </div>
              ) : formData.marketplace && modalType !== '3months' ? (
                <div className="flex justify-between">
                  <span className="text-slate-500">Marketplace:</span>
                  <span className="text-slate-900">{formData.marketplace}</span>
                </div>
              ) : null}
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-8 py-3 bg-[#166B82] hover:bg-[#0B3B48] text-white font-extrabold rounded-xl text-sm shadow-md transition-all cursor-pointer"
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
