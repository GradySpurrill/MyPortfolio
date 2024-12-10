import React from "react";
import "./projectStyle.css";

const Projects = () => {
  const [projects] = React.useState([
    {
      title: "Village Tech",
      description: "This was my capstone project at SAIT. It's a fully funtional pos system for a local veterinarian clinic.",
      technologies: "React, Node.js, Express, PostgreSQL",
      link: "https://www.youtube.com/watch?v=upHm9iUPbCQ&t=2s",
    },
  ]);

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-list">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="project-technologies">
              <strong>Technologies:</strong> {project.technologies}
            </p>
            <p>{project.info}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
