
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-slate-50 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 pb-16 border-b border-slate-200">
          <div className="max-w-sm">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-2xl font-bold text-slate-800 tracking-tight inline-block mb-4"
            >
              Dustin<span className="text-indigo-600 font-light italic">Jeter</span>
            </a>
            <p className="text-slate-500 font-light leading-relaxed">
              Helping therapists and small business owners build trust through minimalist, professional web design.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest text-center md:text-left">Navigation</h4>
            <ul className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3">
              <li><a href="#about" onClick={scrollToId('about')} className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">About</a></li>
              <li><a href="#portfolio" onClick={scrollToId('portfolio')} className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">Portfolio</a></li>
              <li><a href="#services" onClick={scrollToId('services')} className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">Services</a></li>
              <li><a href="#contact" onClick={scrollToId('contact')} className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-10 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
          <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">
            &copy; {currentYear} Dustin Jeter Studio. All interactions are secure.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter">Independent Studio</span>
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter">Fast Loading</span>
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter">Custom Built</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
