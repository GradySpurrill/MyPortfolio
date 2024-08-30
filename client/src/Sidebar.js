import React from 'react';
import { Link } from 'react-router-dom';
import './sidebarStyle.css';  // Import your CSS file here

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h1>Grady Spurrill</h1>
                <h2>Software Developer</h2>
                <p>Hi, I'm Grady, a software enabler.</p>
            </div>
            <nav>
                <ul className="sidebar-links">
                    <li><Link to="#home">Home</Link></li>
                    <li><Link to="#contact">Contact</Link></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
