import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AIDemo from './components/AIDemo';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <AIDemo />
      <Highlights />
      <Footer />
    </div>
  );
}

export default App;