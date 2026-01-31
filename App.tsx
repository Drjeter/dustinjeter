
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Portfolio />
        <Services onSelectPackage={setSelectedPackage} />
        <Contact selectedPackage={selectedPackage} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
