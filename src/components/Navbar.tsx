import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenBookCall: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookCall }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-[#1f1f1f] shadow-lg shadow-black/20'
          : 'bg-[#0a0a0a]/80 backdrop-blur-sm border-[#141414]'
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white group"
        >
          <div className="w-9 h-9 rounded-[10px] bg-[#f97316] text-white flex items-center justify-center font-mono font-bold text-sm shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
            &lt;/&gt;
          </div>
          <span className="font-semibold tracking-tight">Aldy</span>
        </a>

        {/* Desktop Nav Menu */}
        <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`transition-colors py-1 relative ${
                    isActive ? 'text-white font-semibold' : 'text-[#a1a1aa] hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#f97316] rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBookCall}
            className="text-xs font-semibold px-4 py-2 rounded-full border border-[#2e2e2e] text-[#d4d4d8] hover:text-white hover:border-[#f97316] transition-colors"
          >
            Book Call
          </button>

          <a
            href={PORTFOLIO_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white px-5 py-2 rounded-full font-semibold text-sm transition-all shadow-md shadow-green-500/15 hover:shadow-green-500/30 hover:scale-[1.02]"
          >
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={PORTFOLIO_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#22c55e] text-white px-3 py-1.5 rounded-full font-semibold text-xs flex items-center gap-1"
          >
            <MessageSquare className="w-3 h-3" />
            WA
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white bg-[#141414] rounded-lg border border-[#262626]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111111] border-b border-[#222222] px-6 py-5 shadow-2xl animate-in slide-in-from-top-3 duration-200">
          <ul className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block py-1.5 transition-colors ${
                    activeSection === link.id ? 'text-[#f97316] font-semibold' : 'text-[#a1a1aa] hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-5 pt-4 border-t border-[#222222] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookCall();
              }}
              className="w-full py-2.5 rounded-xl border border-[#333333] text-sm font-semibold text-white hover:border-[#f97316] transition-colors"
            >
              Book a Strategy Call
            </button>
            <a
              href={PORTFOLIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-[#22c55e] text-white text-sm font-semibold flex items-center justify-center gap-2"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
