import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Services } from './components/Services';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookCallModal } from './components/BookCallModal';
import { ToastContainer, ToastMessage } from './components/Toast';

export default function App() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [contactInitialMessage, setContactInitialMessage] = useState<string>('');

  const addToast = (message: string, type: 'success' | 'info' | 'error' = 'info') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setContactInitialMessage(`Hi Aldy, I am interested in your "${serviceTitle}" service. Let's discuss requirements and availability.`);
    addToast(`Selected "${serviceTitle}" for inquiry`, 'info');
  };

  const handleSelectProjectForContact = (projectTitle: string) => {
    setContactInitialMessage(`Hi Aldy, I saw your work on "${projectTitle}" and would love to build something similar for our business.`);
    addToast(`Inquiring about "${projectTitle}"`, 'info');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans selection:bg-[#f97316] selection:text-white">
      {/* Top sticky Navigation */}
      <Navbar onOpenBookCall={() => setIsBookCallOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBookCall={() => setIsBookCallOpen(true)} />

        {/* Marquee Banner */}
        <Marquee />

        {/* Services Section */}
        <Services onSelectServiceForContact={handleSelectServiceForContact} />

        {/* About Section */}
        <About onNotify={addToast} />

        {/* Projects Section */}
        <Projects onSelectProjectForContact={handleSelectProjectForContact} />

        {/* Contact Section */}
        <Contact initialMessage={contactInitialMessage} onNotify={addToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookCallModal
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
        onNotify={addToast}
      />

      {/* Toasts Feedback */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
