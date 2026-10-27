import React from 'react';
import { ArrowRight, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenBookCall: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookCall }) => {
  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Focus first input in form after scroll
      setTimeout(() => {
        const input = document.getElementById('firstNameInput');
        if (input) input.focus();
      }, 600);
    }
  };

  return (
    <section id="home" className="relative pt-12 pb-20 md:py-24 overflow-hidden">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column: Headline & Intro */}
          <div className="flex-1 text-center lg:text-left z-10">
            {/* Availability Pill / Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-[#2a2a2a] text-xs text-[#a1a1aa] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              <span>Available for select projects in 2025 – 2026</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.12] tracking-tight mb-6 text-balance">
              I'm Aldy, a<br />
              <span className="text-[#f97316] drop-shadow-sm">Full Stack Developer</span><br />
              & UI/UX Designer
            </h1>

            <p className="text-[#a1a1aa] text-base md:text-lg max-w-[520px] mx-auto lg:mx-0 leading-relaxed mb-8">
              {PORTFOLIO_INFO.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#contact"
                onClick={handleGetStarted}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-[15px] shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenBookCall}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold text-[15px] hover:-translate-y-0.5 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Call</span>
              </button>
            </div>

            {/* Quick Tech Stack Line */}
            <div className="pt-6 border-t border-[#1c1c1c] flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-[#71717a]">
              <span className="font-medium text-[#a1a1aa]">Core Stack:</span>
              {['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind', 'PostgreSQL', 'Figma'].map((tech, i, arr) => (
                <span key={tech} className="inline-flex items-center gap-2">
                  <span className="text-[#d4d4d8] hover:text-[#f97316] transition-colors">{tech}</span>
                  {i < arr.length - 1 && <span className="text-[#3f3f46]">·</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Photo & Floating Badges */}
          <div className="flex-1 relative flex items-center justify-center w-full max-w-[440px] lg:max-w-none">
            {/* Ambient Orange Glow behind photo */}
            <div className="absolute inset-0 bg-[#f97316]/20 rounded-3xl blur-[60px] transform scale-90 pointer-events-none" />

            <div className="relative group">
              {/* Photo Frame */}
              <div className="w-[280px] sm:w-[340px] md:w-[360px] h-[360px] sm:h-[420px] md:h-[450px] rounded-[24px] overflow-hidden border border-[#2a2a2a] shadow-2xl shadow-black/80 bg-[#161616]">
                <img
                  src="/src/assets/images/aldy_portrait_1793036333998.jpg"
                  alt="Aldy Azarya — Full Stack Developer & UI/UX Designer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to high-contrast styled frame if needed
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center bg-[#181818] text-center p-6">
                          <div class="w-20 h-20 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center text-3xl font-bold mb-4">&lt;/&gt;</div>
                          <h3 class="text-xl font-bold text-white mb-1">Aldy Azarya</h3>
                          <p class="text-sm text-gray-400">Full Stack Developer & UI/UX Designer</p>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* Top Left Floating Badge */}
              <div className="absolute -top-4 -left-4 sm:top-8 sm:-left-8 bg-[#181818]/90 backdrop-blur-md border border-[#333333] px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white hover:border-[#f97316] transition-colors">
                <div className="w-2.5 h-2.5 rounded-full bg-[#f97316]" />
                <span>{PORTFOLIO_INFO.experienceYears}</span>
              </div>

              {/* Bottom Right Floating Badge */}
              <div className="absolute -bottom-4 -right-4 sm:bottom-10 sm:-right-8 bg-[#181818]/90 backdrop-blur-md border border-[#333333] px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white hover:border-[#f97316] transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#22c55e]" />
                <span>{PORTFOLIO_INFO.completedProjects}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
