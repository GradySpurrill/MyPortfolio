import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import "./projectStyle.css";
import { useEffect } from "react";

const Projects = () => {
  const sections = [
    {
      button: "What is VillageTech",
      title: "Village Tech",
      description: "For my capstone project at SAIT, I spearheaded the development of a fully functional POS system to handle the day-to-day operations of a local veterinarian clinic. The project gave me the chance to work on both front-end and back-end development, as well as building on my project management skills.", 
      image: null,
    },
    {
      button: "Technologies Used",
      title: "Built with a PERN stack",
      description: "React, Node.js, Express, PostgreSQL, and Supabase.",
      image: "SnallerHorse.png",
    },
    {
      button: "What I Learned",
      title: "What I Learned",
      description: "This project was a hands-on experience in designing and building software from the ground up. It began with gathering requirements and planning out the system, then moved into creating the database, building APIs, and developing a functional, easy-to-use front end. The process taught me the value of thoughtful planning, staying adaptable, and paying close attention details to create a dependable and user friendly app.",
    },
    {
      button: "Walkthrough",
      title: "Walkthrough",
      description: null,
      video: "CapstoneWalkthrough.mp4",
    },
  ];

  

  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleNavigation = (index) => {
    if (index === currentIndex) return;

    const direction = index > currentIndex ? 1 : -1;

    gsap.to(contentRef.current, {
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        setCurrentIndex(index);

        gsap.fromTo(
          contentRef.current,
          { x: direction > 0 ? "100%" : "-100%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 0.4, ease: "power2.inOut" }
        );
      },
    });
  };

  return (
    <section id="projects" className="projects-section">
      <h2>Project</h2>
      <div className="project-box">
        <h3 className="project-title">Village Tech</h3>

        <div className="project-content" ref={contentRef}>
          {sections[currentIndex].image && (
            <img
              src={sections[currentIndex].image}
              alt={sections[currentIndex].title}
              className="project-image"
            />
          )}
          {sections[currentIndex].video && (
            <video
              className="project-video"
              controls
              src={sections[currentIndex].video}
            />
          )}
          {sections[currentIndex].description && (
            <p>{sections[currentIndex].description}</p>
          )}
        </div>

        <div className="navigation-buttons">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(index)}
              className={`nav-button ${
                index === currentIndex ? "active" : ""
              }`}
            >
              {section.button}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
