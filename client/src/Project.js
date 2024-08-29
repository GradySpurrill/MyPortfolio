import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Projects = () => {
    const [languagesData, setLanguagesData] = useState({});

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

    // Prepare data for the Pie chart
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
            <h2>Languages Used in My GitHub Projects</h2>
            {Object.keys(languagesData).length > 0 ? (
                <div style={{ width: '500px', height: '500px', margin: '0 auto' }}>
                    <Pie data={data} />
                </div>
            ) : (
                <p>Loading languages data...</p>
            )}
        </section>
    );
};

export default Projects;
