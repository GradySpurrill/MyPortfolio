import React from 'react';
import './sidebarStyle.css';  // Import your CSS file here

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
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
