
import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

interface ContactProps {
  selectedPackage?: string;
}

const Contact: React.FC<ContactProps> = ({ selectedPackage }) => {
  const [state, handleSubmit] = useForm("xeekwoga"); // Replace with your Form ID
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Automatically update the message when a package is selected
  useEffect(() => {
    if (selectedPackage) {
      const packageNote = selectedPackage === 'Custom Quote'
        ? "Hi! I'm interested in a custom quote for my project. Could we schedule a time to discuss details?"
        : `Hi! I'm interested in the ${selectedPackage} package. Please let me know the next steps for a consultation.`;

      setFormData(prev => ({
        ...prev,
        message: packageNote
      }));
    }
  }, [selectedPackage]);

  /* Removed manual submit handler in favor of Formspree hook */

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
          <div className="md:w-2/5 bg-slate-900 p-12 lg:p-16 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 italic tracking-tight">Let's build something beautiful.</h2>
              <p className="text-slate-400 font-light mb-12">
                Have a project in mind? Reach out today for a free consultation. I am currently accepting new projects and reply within 24 hours.
              </p>

              <div className="space-y-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-indigo-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500">Email Me</h4>
                    <p className="text-lg">drjeter@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-indigo-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500">Availability</h4>
                    <p className="text-lg">Monday — Friday</p>
                    <p className="text-sm text-slate-400 font-light">Available for US & Global timezones</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">
                Professional Design & Support
              </p>
            </div>
          </div>

          <div className="md:w-3/5 p-12 lg:p-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-light"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-light"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700 uppercase tracking-wider">How can I help?</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your business and goals..."
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-light resize-none"
                ></textarea>
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`w-full py-5 rounded-xl text-lg font-bold transition-all transform active:scale-95 shadow-xl ${state.succeeded
                    ? 'bg-emerald-500 text-white'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200/50'
                    } disabled:opacity-70 flex items-center justify-center gap-2`}
                >
                  {state.submitting ? (
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : state.succeeded ? (
                    <>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Message Sent!
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
                <p className="text-[10px] text-center text-slate-400 font-medium uppercase tracking-tighter">
                  Your information is used solely to respond to your inquiry. No spam, ever.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
