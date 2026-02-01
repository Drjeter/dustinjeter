
import React from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  /* Link handler removed to allow navigation */

  return (
    <section id="portfolio" className="relative py-32 bg-slate-50 scroll-mt-20 overflow-hidden">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 dot-grid opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 rounded-lg">
            Case Studies
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 italic tracking-tight">Crafting Digital Spaces</h2>
          <p className="text-lg text-slate-600 font-light max-w-xl mx-auto">
            I believe every business has a unique rhythm. Here is how I've translated that into the digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className="group relative">
              <div className={`absolute -inset-4 bg-gradient-to-r ${index % 2 === 0 ? 'from-indigo-50 to-transparent' : 'from-emerald-50 to-transparent'} rounded-[2.5rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all duration-500 transform group-hover:-translate-y-2 border border-slate-100">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500"></div>
                </div>

                <div className="p-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{project.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed font-light min-h-[4.5rem]">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center text-sm font-bold text-indigo-600 hover:text-indigo-700 tracking-tight transition-colors"
                    >
                      VISIT LIVE SITE
                      <svg className="ml-2 w-4 h-4 transform transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    <span className="text-xs font-bold text-slate-300 tracking-widest uppercase">
                      Built in 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
