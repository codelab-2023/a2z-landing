import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import AuditFormModal from './components/AuditFormModal';

// Critical Homepage imported eagerly for instant First Contentful Paint
import HomePage from './pages/HomePage';

// Lazy loaded secondary pages to keep initial bundle tiny and fast
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const AwardsPage = lazy(() => import('./pages/AwardsPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const BranchesPage = lazy(() => import('./pages/BranchesPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));

// Sleek lightweight loading spinner for fast transitions
function PageLoadingFallback() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-3">
        <div className="w-9 h-9 border-3 border-[#166B82]/20 border-t-[#166B82] rounded-full animate-spin" />
        <span className="text-xs font-bold text-slate-400 font-outfit uppercase tracking-wider">A2Z Aaradhya</span>
      </div>
    </div>
  );
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('audit');

  const handleOpenModal = (type = 'audit') => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#166B82] selection:text-white flex flex-col justify-between">
        
        {/* Header Navigation */}
        <Navbar onOpenModal={handleOpenModal} />

        {/* Multi-Page Routes with Suspense code-splitting */}
        <main className="flex-grow">
          <Suspense fallback={<PageLoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage onOpenModal={handleOpenModal} />} />
              <Route path="/services" element={<ServicesPage onOpenModal={handleOpenModal} />} />
              <Route path="/about" element={<AboutPage onOpenModal={handleOpenModal} />} />
              <Route path="/about/team" element={<TeamPage />} />
              <Route path="/about/awards" element={<AwardsPage />} />
              <Route path="/about/gallery" element={<GalleryPage />} />
              <Route path="/branches" element={<BranchesPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/faq" element={<FaqPage onOpenModal={handleOpenModal} />} />
              <Route path="/faqs" element={<Navigate to="/faq" replace />} />

              {/* 404 Catch-All & Legacy redirect */}
              <Route path="/cgi-bin" element={<Navigate to="/" replace />} />
              <Route path="/cgi-bin/*" element={<Navigate to="/" replace />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        {/* Corporate Footer */}
        <Footer onOpenModal={handleOpenModal} />

        {/* Audit Request Modal */}
        <AuditFormModal 
          isOpen={modalOpen} 
          onClose={handleCloseModal} 
          modalType={modalType} 
        />

        {/* Floating Helpline Buttons */}
        <FloatingCTA onOpenModal={handleOpenModal} />
      </div>
    </Router>
  );
}
