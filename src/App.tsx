import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import Experience from './components/sections/Experience';
import Works from './components/sections/Works';
import { Contact } from './components/Contact';
// import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="">
      {/* <Router> */}
      <NavBar />
      <Banner />
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Works />
      </section>

      <Contact />
      {/* </Router> */}
    </div>
  );
};

export default App;
