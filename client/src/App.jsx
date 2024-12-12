import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Sidebar";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css";
import Project from "./Project";

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.pageX, y: event.pageY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar scrollTo={scrollTo} />
        <main className="main-content">
          <AboutMe />
          <Project />
        </main>
      </div>
    </Router>
  );
};

export default App;
