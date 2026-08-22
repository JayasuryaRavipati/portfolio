import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>
        <Hero />

        <Services />

        <Work />

        <About />

        <Skills />

        <Education />

        <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default App;