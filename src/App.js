import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Intro_And_Bio from "./components/intro_and_bio.js";
import Projects from "./components/projects.js";
import Resume from "./components/resume.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div className="App">
      <Intro_And_Bio />
      <Projects />
      <Resume />
      <About />
      <Contact />
    </div>
  );
}

export default App;
