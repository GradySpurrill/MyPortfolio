import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import AboutMe from './AboutMe';
import Contact from './Contact';
import './style.css'; // Ensure this imports your CSS

const App = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            // Calculate mouse position relative to the entire document, including scroll
            setMousePosition({ x: event.pageX, y: event.pageY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Function to handle smooth scrolling
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Router>
            <div className="app-container">
                <div
                    className="mouse-hover-effect"
                    style={{
                        top: mousePosition.y - 205, // Center the effect vertically
                        left: mousePosition.x - 175, // Center the effect horizontally
                    }}
                />
                {/* Update the Sidebar to pass scrollTo function */}
                <Sidebar scrollTo={scrollTo} />
                <main className="main-content">
                    <AboutMe />
                    <Contact />
                    <Home />
                </main>
            </div>
        </Router>
    );
};

export default App;
