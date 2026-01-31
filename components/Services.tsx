
import React from 'react';
import { SERVICE_PACKAGES } from '../constants';

interface ServicesProps {
  onSelectPackage: (packageName: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onSelectPackage }) => {
  const handleSelect = (e: React.MouseEvent, packageName: string) => {
    e.preventDefault();
    onSelectPackage(packageName);
    const element = document.getElementById('contact');
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
    <section id="services" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 italic tracking-tight">Tailored Service Packages</h2>
          <p className="text-lg text-slate-600 font-light">Transparent pricing to fit the needs of your growing business.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SERVICE_PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative p-8 md:p-10 rounded-3xl transition-all duration-300 ${
                pkg.isPopular 
                ? 'bg-slate-900 text-white shadow-2xl scale-105 z-10 ring-4 ring-indigo-500/20' 
                : 'bg-slate-50 text-slate-900 hover:bg-white hover:shadow-xl'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold tracking-tight">{pkg.price}</span>
                <span className={`text-sm ${pkg.isPopular ? 'text-slate-400' : 'text-slate-500'}`}>one-time fee</span>
              </div>

              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className={`w-5 h-5 flex-shrink-0 ${pkg.isPopular ? 'text-indigo-400' : 'text-indigo-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-light leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                onClick={(e) => handleSelect(e, pkg.name)}
                className={`block text-center py-4 rounded-xl font-bold transition-all ${
                  pkg.isPopular 
                  ? 'bg-white text-slate-900 hover:bg-slate-100 shadow-md' 
                  : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                Choose {pkg.name}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-indigo-50/50 border border-indigo-100 text-center max-w-4xl mx-auto">
          <p className="text-indigo-900 font-medium italic">
            Looking for something custom? <a href="#contact" onClick={(e) => handleSelect(e, 'Custom Quote')} className="underline hover:text-indigo-700">Contact me</a> for a bespoke quote tailored to your specific requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
