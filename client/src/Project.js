import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './projectStyle.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const Projects = () => {
    const [languagesData, setLanguagesData] = useState({});
    const [projects, setProjects] = useState([
        {
            title: "Village Tech",
            description: "Capstone project creating a POS system for a veterinary clinic.",
            technologies: "React, Node.js, Express, PostgreSQL",
            info: "Currently still a work in progress. Sign in with the following credentials: Username: test@email.com Password: password",
            link: "https://github.com/yourusername/project-one"
        },


    ]);

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const response = await axios.get('http://localhost:3006/api/github/languages');
                setLanguagesData(response.data);
            } catch (error) {
                console.error('Error fetching languages data:', error);
            }
        };

        fetchLanguages();
    }, []);


    const data = {
        labels: Object.keys(languagesData),
        datasets: [
            {
                label: 'Lines of Code',
                data: Object.values(languagesData),
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#C9CBCF',
                ],
                hoverBackgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#C9CBCF',
                ],
            },
        ],
    };

    return (
        <section id="projects">
            <h2>Projects</h2>


            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p className="project-technologies">Built with: {project.technologies}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
