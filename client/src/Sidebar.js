import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./sidebarStyle.css";
import { gsap } from "gsap";

const Sidebar = () => {
  const sidebarRef = useRef(null);
  const linksRef = useRef(null);
  const socialIconsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sidebarRef.current,
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      linksRef.current.children,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.5,
      }
    );

    gsap.fromTo(
      socialIconsRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        delay: 1.5,
      }
    );
  }, []);

  return (
    <aside ref={sidebarRef} className="sidebar">
      <div className="sidebar-header">
        <img src="/GradyLogoShadow3.png" alt="Grady Logo" className="sidebar-logo" />
      </div>

      <nav className="nav-links">
        <ul ref={linksRef} className="sidebar-links">
          <li>
            <Link to="/">About Me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>

      <div ref={socialIconsRef} className="sidebar-social-icons">
        <a
          href="https://github.com/MushysWebs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/grady-spurrill/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
