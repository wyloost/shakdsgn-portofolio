import React, { useState } from 'react';
import { Monitor, Smartphone, Code2, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { SERVICES, Service } from '../data/portfolioData';

interface ServicesProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForContact }) => {
  const [activeModalService, setActiveModalService] = useState<Service | null>(null);

  const getServiceIcon = (iconName: Service['iconName']) => {
    switch (iconName) {
      case 'monitor':
        return <Monitor className="w-6 h-6 text-white" />;
      case 'link':
        return <Smartphone className="w-6 h-6 text-white" />;
      case 'code':
        return <Code2 className="w-6 h-6 text-white" />;
      default:
        return <Code2 className="w-6 h-6 text-white" />;
    }
  };

  const handleInquire = (service: Service) => {
    setActiveModalService(null);
    onSelectServiceForContact(service.title);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 max-w-[1300px] mx-auto px-6 md:px-12 relative">
      {/* Top Header Split */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div className="max-w-xl">
          <p className="text-[#f97316] font-medium text-sm tracking-wide mb-3">
            ✦ Services I Provide
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white leading-tight">
            Innovative solutions in<br />
            <span className="text-[#f97316]">design and development</span>
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-[#a1a1aa] text-[15px] leading-relaxed mb-6">
            I work with businesses to shape their vision into meaningful digital
            experiences that inspire and perform. From concept to launch, I focus
            on products that are both beautiful and built to last.
          </p>

          <button
            onClick={() => setActiveModalService(SERVICES[0])}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-sm transition-all shadow-md shadow-orange-500/20 hover:scale-[1.02]"
          >
            <span>Explore Service Scope</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3 Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="group relative bg-[#141414] hover:bg-[#181818] border border-[#222222] hover:border-[#f97316]/60 rounded-[20px] p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-lg"
          >
            <div>
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-[#f97316] flex items-center justify-center mb-6 shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform">
                {getServiceIcon(service.iconName)}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f97316] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#999999] text-sm leading-relaxed mb-6">
                {service.shortDesc}
              </p>
            </div>

            {/* Interactive Link */}
            <div className="pt-4 border-t border-[#1e1e1e] flex items-center justify-between">
              <button
                onClick={() => setActiveModalService(service)}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#f97316] hover:text-[#fb923c] transition-colors"
              >
                <span>Learn More</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <span className="text-xs text-[#52525b] font-mono">{service.typicalTimeline}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#141414] border border-[#2a2a2a] w-full max-w-xl rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#222222] text-[#a1a1aa] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#f97316] flex items-center justify-center">
                {getServiceIcon(activeModalService.iconName)}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{activeModalService.title}</h3>
                <p className="text-xs text-[#f97316] font-medium">Timeline: {activeModalService.typicalTimeline}</p>
              </div>
            </div>

            <p className="text-[#cccccc] text-sm leading-relaxed mb-6">
              {activeModalService.longDesc}
            </p>

            {/* Deliverables */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#a1a1aa] mb-3">
                Included Deliverables:
              </h4>
              <ul className="space-y-2.5">
                {activeModalService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#e4e4e7]">
                    <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#a1a1aa] mb-2.5">
                Technologies & Tools:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalService.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-[#1f1f1f] border border-[#333333] text-xs text-[#d4d4d8] rounded-md font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#222222]">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-5 py-2.5 rounded-full border border-[#333333] text-sm font-semibold text-[#a1a1aa] hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => handleInquire(activeModalService)}
                className="px-6 py-2.5 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white text-sm font-semibold transition-all shadow-md shadow-orange-500/20"
              >
                Inquire About This
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
