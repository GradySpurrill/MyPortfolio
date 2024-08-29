import React from 'react';
import './homeStyle.css';
import Project from './Project';

const Home = () => {
    return (
        <section id="home">
            <h1>Welcome to My Portfolio</h1>
            <p>Hi, I'm Grady, a software enabler.</p>
            <a href="resume" className="button">View My Resume</a>
            <Project/>
        </section>
    );
}

export default Home;
