import React, { useState } from 'react';
import { ExternalLink, Sparkles, X, CheckCircle2, Layers } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProjectForContact: (projectTitle: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProjectForContact }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'web' | 'app' | 'ecommerce'>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedFilter);

  const handleInquireProject = (project: Project) => {
    setActiveProjectModal(null);
    onSelectProjectForContact(project.title);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 max-w-[1300px] mx-auto px-6 md:px-12 text-center relative">
      <p className="text-[#f97316] font-medium text-sm tracking-wide mb-3">
        ✦ What I Created
      </p>

      <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white mb-8">
        My Latest Projects
      </h2>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        <button
          onClick={() => setSelectedFilter('all')}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
            selectedFilter === 'all'
              ? 'bg-[#f97316] text-white shadow-md shadow-orange-500/25'
              : 'bg-[#141414] text-[#a1a1aa] hover:text-white border border-[#222222]'
          }`}
        >
          All Works ({PROJECTS.length})
        </button>
        <button
          onClick={() => setSelectedFilter('app')}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
            selectedFilter === 'app'
              ? 'bg-[#f97316] text-white shadow-md shadow-orange-500/25'
              : 'bg-[#141414] text-[#a1a1aa] hover:text-white border border-[#222222]'
          }`}
        >
          Mobile & POS
        </button>
        <button
          onClick={() => setSelectedFilter('web')}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
            selectedFilter === 'web'
              ? 'bg-[#f97316] text-white shadow-md shadow-orange-500/25'
              : 'bg-[#141414] text-[#a1a1aa] hover:text-white border border-[#222222]'
          }`}
        >
          Web Platform
        </button>
        <button
          onClick={() => setSelectedFilter('ecommerce')}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
            selectedFilter === 'ecommerce'
              ? 'bg-[#f97316] text-white shadow-md shadow-orange-500/25'
              : 'bg-[#141414] text-[#a1a1aa] hover:text-white border border-[#222222]'
          }`}
        >
          E-Commerce
        </button>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveProjectModal(project)}
            className="group cursor-pointer bg-[#141414] rounded-[18px] overflow-hidden border border-[#222222] hover:border-[#f97316]/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 flex flex-col justify-between"
          >
            <div>
              {/* Image Container with Brand Color / Fallback */}
              <div className="relative h-[210px] w-full overflow-hidden bg-[#181818] flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.style.backgroundColor = project.cardBgColor;
                      target.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center font-bold text-2xl tracking-tight" style="color: ${project.cardTextColor || '#000000'}">
                          ${project.shortTitle}
                        </div>
                      `;
                    }
                  }}
                />

                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-md text-[11px] font-medium text-white/90">
                  {project.categoryLabel}
                </div>

                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-[#f97316] text-white p-2 rounded-full shadow-lg">
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Title & Description */}
              <div className="p-5">
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-[#f97316] transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                </h4>
                <p className="text-xs text-[#a1a1aa] line-clamp-2 leading-relaxed mb-4">
                  {project.tagline}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#1e1e1e]">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-[#71717a] bg-[#1a1a1a] px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[11px] font-mono text-[#52525b] px-1 py-0.5">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="px-5 pb-4 pt-1">
              <span className="text-xs font-semibold text-[#f97316] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read case study →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Project Case Study Lightbox Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#121212] border border-[#262626] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative text-left">
            {/* Header Image */}
            <div className="relative h-[240px] sm:h-[280px] w-full overflow-hidden bg-[#181818]">
              <img
                src={activeProjectModal.image}
                alt={activeProjectModal.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-colors border border-white/20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="bg-[#f97316] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {activeProjectModal.categoryLabel}
                </span>
                <span className="bg-black/70 backdrop-blur-md text-[#d4d4d8] px-3 py-1 rounded-full text-xs font-mono">
                  {activeProjectModal.year}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {activeProjectModal.title}
              </h3>
              <p className="text-base text-[#f97316] font-medium mb-4">
                {activeProjectModal.tagline}
              </p>

              <p className="text-[#cccccc] text-sm leading-relaxed mb-6">
                {activeProjectModal.description}
              </p>

              {/* Highlights */}
              <div className="mb-6 bg-[#181818] rounded-xl p-5 border border-[#242424]">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#a1a1aa] mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#f97316]" />
                  Key Achievements & Highlights
                </h4>
                <ul className="space-y-2">
                  {activeProjectModal.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#e4e4e7]">
                      <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#a1a1aa] mb-2.5">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#1c1c1c] border border-[#2e2e2e] text-xs text-[#e4e4e7] rounded-md font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer action buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#222222]">
                <div className="text-xs text-[#71717a]">
                  Client: <strong className="text-white">{activeProjectModal.client}</strong>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="px-4 py-2 rounded-full border border-[#333333] text-xs font-semibold text-[#a1a1aa] hover:text-white"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => handleInquireProject(activeProjectModal)}
                    className="px-5 py-2 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white text-xs font-semibold transition-all shadow-md shadow-orange-500/20"
                  >
                    Inquire Similar Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
