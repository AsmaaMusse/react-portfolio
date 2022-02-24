import "./App.css";
import "./index.css";

import About from "./components/about";
import Projects from "./components/projects";
import Contacts from "./components/contacts";
import Skills from "./components/skills";
import Footer from "./components/footer";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <About />
      <Projects />
      <Skills />
      <Contacts />
      <Footer />
    </main>
  );
}
