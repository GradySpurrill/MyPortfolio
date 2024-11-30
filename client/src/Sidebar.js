import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './sidebarStyle.css';
import Contact from './Contact'; 

const Sidebar = ({ scrollTo }) => {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h1>Grady Spurrill</h1>
                <h2>Software Developer</h2>
                <p>Hi, I'm Grady, a software enabler.</p>
            </div>
            <nav>
                <ul className="sidebar-links">
                    <li><a href="#about-me" onClick={(e) => { e.preventDefault(); scrollTo('about-me'); }}>About Me</a></li>
                    <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>Projects</a></li>
                </ul>
            </nav>

            <Contact />
            <div className="sidebar-social-icons">
                <a href="https://github.com/MushysWebs" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/grady-spurrill/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;
