
import React from 'react';

const Hero: React.FC = () => {
  const scrollToId = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-indigo-700 uppercase bg-indigo-50 rounded-full">
            Bespoke Web Design
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-8">
            Websites for Therapists, Coaches, and <span className="text-indigo-600 italic">Small Businesses</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
            Clean, mobile-friendly websites built from scratch to help your business look professional and attract clients. No bloat, just performance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              onClick={scrollToId('contact')}
              className="px-8 py-4 bg-indigo-600 text-white rounded-full text-lg font-semibold hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-200/50 flex items-center justify-center group"
            >
              Get Your Free Consultation
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#portfolio" 
              onClick={scrollToId('portfolio')}
              className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full text-lg font-semibold hover:bg-slate-50 transition-all flex items-center justify-center shadow-sm"
            >
              View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
