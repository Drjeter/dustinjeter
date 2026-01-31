
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden scroll-mt-20">
      {/* Decorative side element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 hidden lg:block"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <div className="relative group">
              {/* Layered decorative boxes */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-100 rounded-2xl -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-50 rounded-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>

              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1470&auto=format&fit=crop"
                  alt="Minimalist Workspace"
                  className="w-full object-cover aspect-[4/5] transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-lg">
              The Philosophy
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight italic">
              Clarity is the <span className="text-indigo-600">highest</span> form of design.
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
              <p>
                In a digital world full of noise, I build websites that act as a sanctuary for your clients. I specialize in custom digital experiences that prioritize speed, accessibility, and human-centered design.
              </p>
              <p>
                For therapists and coaches, your website is often the first "room" a client enters. I make sure that room is calm, welcoming, and clearly organized to build immediate trust.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-10 mt-12">
              <div className="border-l-2 border-indigo-100 pl-4">
                <span className="block text-2xl font-bold text-slate-900">100%</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Responsive Design</span>
              </div>
              <div className="border-l-2 border-indigo-100 pl-4">
                <span className="block text-2xl font-bold text-slate-900">Secured</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Static Hosting</span>
              </div>
              <div className="border-l-2 border-indigo-100 pl-4">
                <span className="block text-2xl font-bold text-slate-900">&lt; 1s</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Load Times</span>
              </div>
              <div className="border-l-2 border-indigo-100 pl-4">
                <span className="block text-2xl font-bold text-slate-900">Custom</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
