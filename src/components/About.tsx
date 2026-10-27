import React, { useState } from 'react';
import { Copy, Check, ExternalLink, Globe, Mail, MapPin } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

interface AboutProps {
  onNotify: (message: string, type?: 'success' | 'info') => void;
}

export const About: React.FC<AboutProps> = ({ onNotify }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_INFO.email);
    setCopied(true);
    onNotify(`Copied ${PORTFOLIO_INFO.email} to clipboard!`, 'success');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about" className="py-24 max-w-[1300px] mx-auto px-6 md:px-12 relative">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Side: Circular Photo with Floating Tags */}
        <div className="relative flex-shrink-0 my-8 lg:my-0">
          {/* Subtle glow behind circular photo */}
          <div className="absolute inset-0 bg-[#f97316]/25 rounded-full blur-[45px] pointer-events-none" />

          {/* Circle Photo */}
          <div className="w-[260px] h-[260px] sm:w-[290px] sm:h-[290px] rounded-full border-[3px] border-[#f97316] overflow-hidden relative z-10 shadow-2xl bg-[#161616]">
            <img
              src="/src/assets/images/aldy_portrait_1793036333998.jpg"
              alt="Aldy Azarya"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Tag 1: App design (top left) */}
          <div className="absolute -top-3 -left-6 sm:top-6 sm:-left-12 z-20 bg-[#1c1c1c]/95 border border-[#f97316] text-[#f97316] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-md hover:scale-105 transition-transform">
            App design
          </div>

          {/* Tag 2: User Experience (middle left) */}
          <div className="absolute top-20 -left-10 sm:top-28 sm:-left-16 z-20 bg-[#1c1c1c]/95 border border-[#f97316] text-[#f97316] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-md hover:scale-105 transition-transform">
            User Experience
          </div>

          {/* Tag 3: Web design (middle right) */}
          <div className="absolute bottom-16 -right-6 sm:bottom-24 sm:-right-10 z-20 bg-[#1c1c1c]/95 border border-[#f97316] text-[#f97316] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-md hover:scale-105 transition-transform">
            Web design
          </div>

          {/* Tag 4: Custom Development (bottom right) */}
          <div className="absolute -bottom-3 right-0 sm:bottom-4 sm:-right-6 z-20 bg-[#1c1c1c]/95 border border-[#f97316] text-[#f97316] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-md hover:scale-105 transition-transform">
            Custom Development
          </div>
        </div>

        {/* Right Side: Narrative & Contact Info */}
        <div className="flex-1 text-left">
          <p className="text-[#f97316] font-medium text-sm tracking-wide mb-3">
            ✦ About Me
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white mb-6 leading-tight">
            Who is Aldy Azarya?
          </h2>

          <p className="text-lg sm:text-xl italic text-[#e4e4e7] border-l-2 border-[#f97316] pl-4 py-1 mb-6 leading-snug">
            "{PORTFOLIO_INFO.aboutQuote}"
          </p>

          <p className="text-[#a1a1aa] text-base leading-relaxed mb-6">
            {PORTFOLIO_INFO.aboutBio}
          </p>

          <p className="text-[#a1a1aa] text-sm leading-relaxed mb-8">
            Over the past six years, I have architected web platforms, mobile utilities, and design systems for early-stage ventures and growing brands. When I’m not pushing commits, I explore typography and ergonomics.
          </p>

          {/* Contact Info Cards */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-6 border-t border-[#1e1e1e]">
            {/* Email with copy button */}
            <div className="flex flex-col">
              <span className="text-xs text-[#71717a] font-medium mb-1 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#f97316]" />
                Email Me At
              </span>
              <button
                onClick={handleCopyEmail}
                className="group flex items-center gap-2 text-white font-semibold text-sm hover:text-[#f97316] transition-colors"
                title="Click to copy email address"
              >
                <span>{PORTFOLIO_INFO.email}</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-[#71717a] group-hover:text-[#f97316] transition-colors" />
                )}
              </button>
            </div>

            {/* Website */}
            <div className="flex flex-col">
              <span className="text-xs text-[#71717a] font-medium mb-1 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#f97316]" />
                Portfolio Domain
              </span>
              <a
                href={`https://${PORTFOLIO_INFO.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white font-semibold text-sm hover:text-[#f97316] transition-colors"
              >
                <span>{PORTFOLIO_INFO.website}</span>
                <ExternalLink className="w-3 h-3 text-[#71717a]" />
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-col">
              <span className="text-xs text-[#71717a] font-medium mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#f97316]" />
                Based In
              </span>
              <span className="text-white font-semibold text-sm">
                {PORTFOLIO_INFO.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
