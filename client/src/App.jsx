import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Divider from "./Divider";
import AnimatedBackground from "./AnimatedBackground"; 
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css"; 

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
        <AnimatedBackground />

        <div
          className="mouse-hover-effect"
          style={{
            top: mousePosition.y - 205,
            left: mousePosition.x - 175,
          }}
        />
        
        <Sidebar scrollTo={scrollTo} />
        
        <main className="main-content">
          <AboutMe />
          <Home />
        </main>
      </div>
    </Router>
  );
};

export default App;
