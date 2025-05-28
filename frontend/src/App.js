import React from 'react';
import './App.css';
import './i18n';
import { BrowserRouter } from 'react-router-dom';

// Components
import Navigation from './components/Navigation';
import LanguageToggle from './components/LanguageToggle';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App min-h-screen bg-white">
        <Navigation />
        <LanguageToggle />
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;