import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1a1a1a] bg-[#0a0a0a] py-12 px-6 md:px-12 text-[#71717a] text-sm">
      <div className="max-w-[1300px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#f97316] text-white flex items-center justify-center font-mono font-bold text-xs">
            &lt;/&gt;
          </div>
          <p>© 2025 {PORTFOLIO_INFO.name}. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div className="flex items-center gap-6 text-xs font-medium text-[#a1a1aa]">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Back to top & Socials */}
        <div className="flex items-center gap-3">
          <a
            href={PORTFOLIO_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#141414] hover:bg-[#1f1f1f] text-[#a1a1aa] hover:text-[#22c55e] transition-colors border border-[#222222]"
            aria-label="WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PORTFOLIO_INFO.email}`}
            className="p-2 rounded-lg bg-[#141414] hover:bg-[#1f1f1f] text-[#a1a1aa] hover:text-[#f97316] transition-colors border border-[#222222]"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-[#141414] hover:bg-[#1f1f1f] text-[#a1a1aa] hover:text-white transition-colors border border-[#222222] flex items-center gap-1.5 text-xs font-medium"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
