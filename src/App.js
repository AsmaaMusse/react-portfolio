import React from "react";

import "./App.css";
import Navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import Contacts from "./components/contacts";

function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Contacts />
    </main>
  );
}

export default App;
