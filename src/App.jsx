import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  return (
    <>
      <Navbar onThemeChange={setThemeMode} classNames={themeMode} />
      <Hero themeMode={themeMode} />
      <About themeMode={themeMode} />
      <Skills themeMode={themeMode} />
      <Experience />
      <Education />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
