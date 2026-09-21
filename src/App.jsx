import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import AuditFormModal from './components/AuditFormModal';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import AwardsPage from './pages/AwardsPage';
import GalleryPage from './pages/GalleryPage';
import PrivacyPage from './pages/PrivacyPage';
import BranchesPage from './pages/BranchesPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

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

        {/* Multi-Page Routes */}
        <main className="flex-grow">
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

            {/* 404 Catch-All */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
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
