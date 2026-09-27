import React, { useState } from 'react';
import { 
  Briefcase, MapPin, DollarSign, X, Upload, CheckCircle2, 
  ArrowRight, AlertCircle 
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';
import confetti from 'canvas-confetti';

// Sanitize user text inputs to prevent XSS / malicious injection
function sanitizeText(str = '') {
  return str.replace(/[<>'"`;]/g, '').trim();
}

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    resume: null,
    botTrap: '',
  });

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (selectedJob) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedJob]);

  const jobRoles = [
    {
      id: 1,
      title: "Sales Head",
      department: "Sales & Leadership",
      location: "Simada, Nana Varachha, Surat",
      salary: "₹4 - 5 LPA",
      description: "Lead and manage BDE teams across branches, drive revenue growth, and achieve strategic business targets.",
      requirements: [
        "5-8 Years of Experience in Sales & Business Development",
        "Experience in Team Handling and Leadership",
        "Ability to Manage BDE Teams Across Multiple Branches",
        "Strong Lead Generation & Client Acquisition Skills",
        "Excellent Client Coordination & Relationship Management",
        "Target-Oriented with Strong Negotiation Skills",
        "Strategic Planning and Sales Performance Management",
        "Ability to Drive Revenue Growth and Achieve Business Targets"
      ]
    },
    {
      id: 2,
      title: "Business Development Executive",
      department: "Sales & Client Acquisition",
      location: "Surat",
      salary: "₹2 - 3 LPA",
      description: "Drive client acquisition, lead generation, and build strong relationships in the e-commerce service industry.",
      requirements: [
        "2-3 Years of Experience in the Service Industry",
        "Strong Communication & Negotiation Skills",
        "Lead Generation & Client Acquisition Experience",
        "Ability to Build and Maintain Client Relationships",
        "Sales & Business Development Knowledge",
        "Target-Oriented and Self-Motivated"
      ]
    },
    {
      id: 3,
      title: "Key Account Manager – Amazon",
      department: "Amazon Marketplace Management",
      location: "Simada, Nana Varachha, Surat",
      salary: "₹3 - 3.5 LPA",
      description: "Handle Amazon seller accounts, manage catalogs, PPC campaigns, and optimize store performance.",
      requirements: [
        "3-4 Years of Amazon Marketplace Experience",
        "Seller Central Knowledge",
        "Account Management Skills",
        "Catalog & Listing Management",
        "Performance Optimization Skills"
      ]
    },
    {
      id: 4,
      title: "Key Account Manager – Flipkart",
      department: "Flipkart Marketplace Management",
      location: "Simada, Nana Varachha, Surat",
      salary: "₹3 - 3.5 LPA",
      description: "Handle Flipkart seller accounts, manage catalogs, PLA campaigns, and improve sales performance.",
      requirements: [
        "3-4 Years of Flipkart Experience",
        "Flipkart Seller Hub Knowledge",
        "Account Management Skills",
        "Catalog & Listing Management",
        "Sales Growth & Performance Management"
      ]
    },
    {
      id: 5,
      title: "Key Account Manager – Meesho",
      department: "Meesho Marketplace Management",
      location: "Simada, Nana Varachha, Surat",
      salary: "₹3 - 3.5 LPA",
      description: "Manage Meesho seller accounts, operations, catalog uploads, and marketplace growth activities.",
      requirements: [
        "3-4 Years of Meesho Experience",
        "Meesho Seller Panel Knowledge",
        "Account Management Skills",
        "Product Listing & Catalog Management",
        "Marketplace Operations Experience"
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setErrorMsg('');
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setErrorMsg('');
    if (files && files[0]) {
      const file = files[0];
      // File size validation (max 5 MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrorMsg('Resume file size must be less than 5 MB.');
        return;
      }
      // Extension validation
      const allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
      if (!allowedExtensions.exec(file.name)) {
        setErrorMsg('Please upload a valid document format (.pdf, .doc, or .docx).');
        return;
      }
      setFormData(prev => ({
        ...prev,
        [name]: file
      }));
    }
  };

  const validateForm = () => {
    setErrorMsg('');

    if (formData.botTrap) {
      console.warn('Bot submission blocked.');
      return false;
    }

    const cleanName = sanitizeText(formData.name);
    const cleanPhone = sanitizeText(formData.phone).replace(/\s+/g, '');

    if (!cleanName || cleanName.length < 2) {
      setErrorMsg('Please enter your full name (at least 2 characters).');
      return false;
    }

    const phoneRegex = /^[+]?[0-9]{10,14}$/;
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      setErrorMsg('Please enter a valid 10-digit phone number.');
      return false;
    }

    return { cleanName, cleanPhone };
  };

  const handleApplyWhatsApp = (e) => {
    if (e) e.preventDefault();
    const valid = validateForm();
    if (!valid) return;
    const { cleanName, cleanPhone } = valid;

    try {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } catch (err) {}

    const resumeText = formData.resume ? `\n• Attached Resume: ${formData.resume.name}` : '';
    const message = `Hello A2Z Aaradhya HR,\nI would like to apply for the *${selectedJob?.title}* position.\n\n• Name: ${cleanName}\n• Phone: ${cleanPhone}${resumeText}\n\n(I am sharing my career details / resume with this message)`;

    const waUrl = `https://wa.me/918485973835?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setSubmitted(false);
    setErrorMsg('');
    setIsSubmitting(false);
    setFormData({
      name: '',
      phone: '',
      resume: null,
      botTrap: '',
    });
  };

  return (
    <div className="pt-16 sm:pt-28 pb-10 sm:pb-20">
      <SEO
        title="Careers & Job Openings in E-Commerce Management | A2Z Aaradhya"
        description="Explore current career opportunities at A2Z Aaradhya. Apply for Key Account Manager (Amazon, Myntra, Flipkart, Meesho), BDE, and Sales Head roles in Surat, Gujarat."
        keywords="A2Z Aaradhya careers, e-commerce jobs Surat, Amazon account manager jobs, Flipkart manager jobs, sales head hiring"
        canonicalPath="/careers"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Careers', path: '/careers' },
        ]}
      />
      {/* Page Header */}
      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <AnimateOnScroll animation="fade-down" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#166B82]/10 border border-[#166B82]/20 text-[#166B82] text-xs font-extrabold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Join Our Team</span>
          </AnimateOnScroll>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B3B48] font-outfit">
            Careers at A2Z Aaradhya
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto font-medium">
            Be part of India's fastest-growing e-commerce growth partner. Join our dynamic team and make an impact.
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-5 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobRoles.map((job, idx) => (
              <AnimateOnScroll
                key={job.id}
                animation="fade-up"
                delay={idx * 80}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-[1.45rem] font-black font-outfit tracking-tight leading-tight">
                      <span className="bg-gradient-to-r from-[#0B3B48] via-[#166B82] to-[#0F5265] bg-clip-text text-transparent">
                        {job.title}
                      </span>
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#166B82] to-[#9ED6CD] rounded-full" />
                    
                    <p className="text-xs text-slate-600 font-medium pt-1 leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  <div className="space-y-2.5 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-2 text-xs text-slate-700 font-bold">
                      <MapPin className="w-4 h-4 text-[#166B82] shrink-0" />
                      <span>{job.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs text-[#0B3B48] font-extrabold">
                      <DollarSign className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{job.salary}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <p className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider">Key Requirements:</p>
                    <ul className="space-y-1.5">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="text-xs text-slate-600 font-medium flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#166B82] shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => { setSelectedJob(job); setSubmitted(false); }}
                  className="w-full mt-4 py-3 bg-[#166B82] hover:bg-[#0B3B48] text-white font-extrabold text-sm rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 z-50 animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-white rounded-3xl p-5 sm:p-8 max-w-lg w-full max-h-[92vh] overflow-y-auto border border-slate-200 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div>
                <h2 className="text-2xl font-extrabold text-[#0B3B48] font-outfit">
                  {selectedJob.title}
                </h2>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">{selectedJob.location} • {selectedJob.salary}</p>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-slate-100 rounded-full transition-all text-slate-500 hover:text-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!submitted ? (
              <form 
                onSubmit={handleApplyWhatsApp} 
                className="space-y-4"
              >
                {/* Error Banner */}
                {errorMsg && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-bold animate-in fade-in">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Honeypot field */}
                <input
                  type="text"
                  name="_honey"
                  value={formData.botTrap}
                  onChange={handleInputChange}
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                  style={{ display: 'none' }}
                  aria-hidden="true"
                />

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-[#166B82] focus:ring-2 focus:ring-[#166B82]/20 text-sm font-semibold"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 84859 73835"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-[#166B82] focus:ring-2 focus:ring-[#166B82]/20 text-sm font-semibold"
                    required
                  />
                </div>

                {/* Single CV / Resume Upload */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Upload CV / Resume (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      name="attachment"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      id="resume-upload"
                    />
                    <label
                      htmlFor="resume-upload"
                      className="flex items-center justify-center gap-2.5 w-full py-3 px-4 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer hover:border-[#166B82] hover:bg-[#166B82]/5 transition-all text-center"
                    >
                      <Upload className="w-4 h-4 text-slate-500 shrink-0" />
                      <span className="text-xs font-semibold text-slate-700 truncate">
                        {formData.resume ? formData.resume.name : 'Choose CV / Resume'}
                      </span>
                    </label>
                  </div>
                </div>

                {/* Submit Actions */}
                <div className="pt-3 space-y-3">
                  <button
                    type="submit"
                    className="w-full py-4 px-5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold rounded-2xl shadow-lg shadow-emerald-600/25 transition-all duration-300 flex items-center justify-center gap-2.5 text-sm transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-white" />
                    <span>Apply on WhatsApp (+91 84859 73835)</span>
                  </button>

                  <p className="text-[10px] text-slate-400 text-center font-medium">
                    🔒 Direct connection with A2Z Aaradhya HR (+91 84859 73835) on WhatsApp.
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-2xl font-extrabold text-[#0B3B48] font-outfit">
                    Application Delivered! 🎉
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">
                    Thank you <strong className="text-[#166B82]">{formData.name}</strong>! Your application for <strong className="text-slate-800">{selectedJob.title}</strong> has been shared with our HR Team on WhatsApp.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 font-semibold space-y-1.5 text-left">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Position:</span>
                    <span className="text-[#0B3B48] font-bold">{selectedJob.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Phone:</span>
                    <span className="text-slate-900 font-bold">{formData.phone}</span>
                  </div>
                  {formData.resume && (
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Attached CV:</span>
                      <span className="text-emerald-700 font-bold truncate max-w-[200px]">{formData.resume.name}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Status:</span>
                    <span className="text-emerald-600 font-bold uppercase flex items-center gap-1.5">
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-600" /> Sent via WhatsApp
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleCloseModal}
                    className="px-8 py-3 bg-[#166B82] hover:bg-[#0B3B48] text-white font-extrabold rounded-xl text-sm shadow-md transition-all"
                  >
                    Done / Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
