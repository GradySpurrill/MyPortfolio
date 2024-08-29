import React from 'react';
import { Link } from 'react-router-dom';
import './headerStyle.css';

const Header = () => {
    return (
        <header className="main-header">
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
