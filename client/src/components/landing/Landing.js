import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "./Hero";
import Benefits from "./Benefits";
import Features from "./Features";
import Trust from "./Trust";
import CaseStudies from "./CaseStudies";
import News from "./News";

const Landing = ({ theme }) => {
  return (
    <>
      <Header theme={theme} />

      <main>
        <Hero theme={theme} />
        <Benefits theme={theme} />
        <Features theme={theme} />
        <Trust theme={theme} />
        <CaseStudies theme={theme} />
        <News theme={theme} />
      </main>

      <Footer theme={theme} />
    </>
  );
};

export default Landing;
