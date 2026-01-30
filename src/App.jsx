import React from 'react';
import { TranslationProvider } from './context/TranslationContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <TranslationProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <Features />
        <About />
        <Services />
        <Fleet />
        <Testimonials />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </TranslationProvider>
  );
}

export default App;