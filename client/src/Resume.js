import React from 'react';
import './resumeStyle.css';

const Resume = () => {
    return (
        <div className="resume">
            <header>
                <h1>Grady Spurrill</h1>
                <p>
                    <a href="mailto:Grady_spurrill@hotmail.com">Grady_spurrill@hotmail.com</a> |
                    <a href="https://www.linkedin.com/in/grady-spurrill/" target="_blank" rel="noopener noreferrer"> My LinkedIn</a>
                </p>
            </header>

            <section>
                <h2>Professional Profile</h2>
                <p>
                    Young professional with a passion for software development, my curiosity makes me eager to learn and
                    expand my skillset. I naturally think outside the box and have a hunger to solve problems. As a self-motivated
                    individual, I am equally comfortable working independently or as part of a team. I possess excellent
                    interpersonal skills allowing me to excel in team settings and facilitate collaboration and open
                    communication. Additionally, I have a keen ability to recognize my own mistakes and learn from them,
                    continuously driving my personal growth.
                </p>
            </section>

            <section>
                <h2>Skills Summary</h2>
                <ul>
                    <li>Curiosity-driven and enthusiastic problem solver, explores multiple avenues to effectively address issues</li>
                    <li>Highly adaptable and quick to assimilate new ideas, fostering innovative solutions</li>
                    <li>Operate with a high level of attention to detail</li>
                    <li>Diligently follow detailed sets of tasks</li>
                    <li>Collaborative mindset, working effectively within a team under senior leadership</li>
                    <li>Self motivated with the ability to work independently</li>
                    <li>Excellent written and verbal communication skills, including the ability to communicate limitations and ask for assistance if needed</li>
                    <li>Well-versed in stress management techniques, delivering high-quality work under pressure</li>
                    <li>Strong time management through my ability to prioritize, multitask, and stay organized</li>
                </ul>
            </section>

            <section>
                <h2>Education</h2>
                <p>Southern Alberta Institute of Technology</p>
                <ul>
                    <li>Degree in Software Development, anticipated graduation August 2024</li>
                    <li>Professional Cooking, 2015-2016</li>
                </ul>
            </section>

            <section>
                <h2>Work Experience</h2>
                <div>
                    <h3>Mccaw’s Drilling and Blasting <span>Sept. 2018-Oct. 2023</span></h3>
                    <h4>Drill Operator/Lead Hand</h4>
                    <ul>
                        <li>Addressed issues with customers or coworkers in an efficient manner</li>
                        <li>Coached coworkers to be knowledgeable and work independently</li>
                        <li>Assessed and optimized daily workflows based on the needs of the customer</li>
                        <li>Operated drill at a highly technical level</li>
                        <li>Thrived in a fast-paced environment, maintaining a swift work pace to meet tight timelines</li>
                        <li>Provided daily job scopes to the superintendent, delivering organized and detailed reports</li>
                    </ul>
                </div>
                <div>
                    <h3>Original Joe’s <span>Aug. 2017-Sept. 2018</span></h3>
                    <h4>Kitchen Supervisor</h4>
                    <ul>
                        <li>Oversaw evening kitchen operations ensuring smooth and efficient dinner service</li>
                        <li>Acted as direct point of contact for servers and addressed any issues</li>
                        <li>Maintained accurate inventory counts on a weekly basis</li>
                        <li>Demonstrated excellent multitasking ability in a fast paced environment</li>
                        <li>Operated in an efficient organized manner, optimizing productivity and quality</li>
                        <li>Exhibited a strong ability to provide and receive constructive feedback, fostering a collaborative work environment.</li>
                    </ul>
                </div>
                <div>
                    <h3>Beaverfoot Lodge <span>April 2016- July 2017</span></h3>
                    <h4>Assistant Manager</h4>
                    <ul>
                        <li>Cultivated strong customer relations, consistently delivering excellent service to guest</li>
                        <li>Assisted with organizing weddings and events at the lodge following instructions accurately</li>
                        <li>Successfully ran the daily operations of the kitchen for guest, staff, and weddings or events</li>
                        <li>Managed food costs and inventory purchasing, optimizing resources and minimizing waste</li>
                        <li>Demonstrated effective delegation skills, assigning tasks to volunteers and staff in the absence of the manager</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2>Personal Development</h2>
                <ul>
                    <li>Volunteer at Pawsitive Match Rescue Foundation to assist with dogs and cats in need (January 2023-Present)</li>
                    <li>Volunteered as a defensive line coach for the Hilltoppers football association to mentor the future generations (2015-2017)</li>
                </ul>
            </section>

            <section>
                <h2>References</h2>
                <p>References available upon request.</p>
            </section>
        </div>
    );
}

export default Resume;
