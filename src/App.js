// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Eduex from './components/Eduex';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Eduex />
        <Projects />
        {/* <Contact /> */}
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
