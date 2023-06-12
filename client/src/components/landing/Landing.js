import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from './Hero';
import Benefits from './Benefits';
import Features from './Features';
import Trust from './Trust';
import CaseStudies from './CaseStudies'
import News from './News';

const Landing = () => {
  return (
    <div className="landing-container">
      <Header />

      <main>
        <Hero />
        <Benefits />
        <Features />
        <Trust />
        <CaseStudies />
        <News />
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
