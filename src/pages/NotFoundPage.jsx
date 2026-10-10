import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const LogoSvg = '/logo/a2z-aaradhya-logo.svg';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center px-4 text-center space-y-8">
      <SEO
        title="404 - Page Not Found | A2Z Aaradhya"
        description="The requested page could not be found. Return to A2Z Aaradhya homepage."
        noindex={true}
      />
      <img src={LogoSvg} alt="A2Z Aaradhya Logo" loading="lazy" className="h-20 w-auto" />
      
      <div className="space-y-3">
        <h1 className="text-8xl font-extrabold text-[#166B82] font-outfit">404</h1>
        <h2 className="text-2xl font-extrabold text-[#0B3B48] font-outfit">Page Not Found</h2>
        <p className="text-slate-600 text-sm font-medium max-w-md mx-auto">
          The page you're looking for doesn't exist. Let's get you back to scaling your business.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link 
          to="/"
          className="flex items-center gap-2 px-6 py-3 bg-[#166B82] text-white font-extrabold rounded-xl shadow-md hover:bg-[#0F5265] transition-all text-sm"
        >
          <Home className="w-4 h-4" />
          Back to Homepage
        </Link>
        <a 
          href="tel:9601055508"
          className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 text-slate-800 font-extrabold rounded-xl shadow-sm hover:bg-slate-50 transition-all text-sm"
        >
          Call Helpline: +91 96010 55508
        </a>
      </div>
    </div>
  );
}
