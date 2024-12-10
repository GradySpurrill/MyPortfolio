import React, { useRef, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./sidebarStyle.css";
import { gsap } from "gsap";

const Sidebar = ({ scrollTo }) => {
  const sidebarRef = useRef(null);
  const linksRef = useRef(null);
  const socialIconsRef = useRef(null);

  useEffect(() => {
    // Animate the sidebar when the component mounts
    gsap.fromTo(
      sidebarRef.current,
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Animate nav links with stagger
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

    // Animate social icons
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
        <img src="/GradyLogo.png" alt="Grady Logo" className="sidebar-logo" />
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <ul ref={linksRef} className="sidebar-links">
          <li>
            <a
              href="#about-me"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("about-me");
              }}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("projects");
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Social Icons */}
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
