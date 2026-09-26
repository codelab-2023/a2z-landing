import React from 'react';
import { ShieldCheck, Lock, FileText, Key, CheckCircle2, Phone, Mail } from 'lucide-react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SEO from '../components/SEO';

export default function PrivacyPage() {
  return (
    <div className="pt-16 sm:pt-28 pb-10 sm:pb-20 space-y-8 sm:space-y-12">
      <SEO
        title="Privacy Policy, Security & NDA Compliance | A2Z Aaradhya"
        description="Review A2Z Aaradhya's ISO 27001 and DPDP-compliant privacy policy, seller credential protection protocols, and NDA terms."
        keywords="Privacy policy, NDA compliance, seller data security, ISO 27001 certified, A2Z Aaradhya privacy"
        canonicalPath="/privacy"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy' },
        ]}
      />
      {/* Header */}
      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ISO 27001 &amp; DPDP Compliant</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B3B48] font-outfit">
            Privacy Policy &amp; Security Commitment
          </h1>
          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            A2Z Aaradhya® is committed to safeguarding your business data, seller account credentials, customer lists, and financial information.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-10 text-slate-700 leading-relaxed text-sm">

          {/* Section 1: Overview */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#166B82]/10 text-[#166B82] flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-extrabold text-[#0B3B48] font-outfit">
                1. Confidentiality &amp; Non-Disclosure (NDA)
              </h2>
            </div>
            <p>
              Every client engagement with <strong>A2Z Aaradhya</strong> is protected by our legally binding Non-Disclosure Agreement (NDA). All product sourcing prices, supplier contacts, sales volumes, advertising ROI, and business strategies are treated as strictly confidential trade secrets.
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>We never share, sell, or monetize your customer database or sales history with third parties.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Staff members sign strict confidentiality contracts with legal liability for data leakage prevention.</span>
              </li>
            </ul>
          </div>

          {/* Section 2: Marketplace Access & SP-API */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                <Key className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-extrabold text-[#0B3B48] font-outfit">
                2. Official Marketplace API &amp; Role-Based Access
              </h2>
            </div>
            <p>
              We operate exclusively through official authorized developer APIs and delegated child seller central user permissions:
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Amazon India:</strong> Delegated User Permissions via Amazon Seller Central User Management &amp; Selling Partner API (SP-API).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Flipkart:</strong> Secondary User Role Assignment without requiring your master banking credentials.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Meesho:</strong> Sub-account manager logins with activity tracking.</span>
              </li>
            </ul>
          </div>

          {/* Section 3: Data Security Protocols */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-extrabold text-[#0B3B48] font-outfit">
                3. Technical &amp; Organizational Security Measures
              </h2>
            </div>
            <p>
              We implement industry-standard cybersecurity protections across all our 7 regional branches:
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>256-Bit AES Encryption:</strong> All data stored in our internal management software is encrypted both at rest and in transit.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Zero Master Password Policy:</strong> We never ask for your primary bank login, UPI PINs, or master OTPs.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>IP Whitelisting &amp; VPNs:</strong> Dedicated corporate static IPs to ensure your seller accounts never get flagged for suspicious multi-location logins.</span>
              </li>
            </ul>
          </div>

          {/* Section 4: Contact & Grievance */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <h3 className="text-base font-extrabold text-[#0B3B48]">
              Data Protection &amp; Grievance Officer
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              If you have any questions regarding our security protocols, NDA documentation, or data privacy rights, please reach out to our legal team:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 text-xs font-bold">
              <a href="mailto:support@a2z-aaradhya.com" className="inline-flex items-center gap-1.5 text-[#166B82] hover:underline">
                <Mail className="w-4 h-4" />
                <span>support@a2z-aaradhya.com</span>
              </a>
              <a href="tel:7802077444" className="inline-flex items-center gap-1.5 text-[#166B82] hover:underline">
                <Phone className="w-4 h-4" />
                <span>+91 78020 77444</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
