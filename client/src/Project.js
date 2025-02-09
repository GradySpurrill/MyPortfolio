import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./projectStyle.css";

const projects = [
  {
    id: 1,
    name: "Village Tech",
    shortDescription: "A full-stack veterinary practice management system.",
    description:
    `
    For my capstone project at SAIT, I led the development of a practice management system for a woman-owned veterinary clinic to simplify daily operations. 
    The system handled patient records, appointment scheduling, real-time staff communication, and secure payment processing.
    I worked on both the front-end and back-end, designing the database, setting up API routes, and building features to make the system easy to use. 
    I integrated Stripe for payments and SendGrid for automated email receipts, along with generating PDF receipts for transactions. 
    This project gave me hands-on experience in full-stack development while also strengthening my project management and problem-solving skills.
    `,
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Supabase",
      "Stripe API",
      "SendGrid",
      "PDF Generation",
      "Material-UI",
      "WebSocket",
      "REST API",
      "Github",
    ],
    
    image: "SnallerHorse.png",
    video: "https://foliobuck.s3.us-east-2.amazonaws.com/VillageTechWalkThrough.mp4",
    features: [
      {
        "title": "Practice Management System",
        "description": "A complete veterinary clinic management system that streamlines daily operations, from handling patient records to managing appointments and billing."
      },
      {
        "title": "Secure Payment Processing",
        "description": "Integrated Stripe for processing payments with automated receipts, generated using SendGrid and PDF generation."
      },
      {
        "title": "Scheduling Client Appointments",
        "description": "Allows staff to schedule appointments easily, with automated reminders sent to clients to reduce no-shows."
      },
      {
        "title": "Pet and Owner Management",
        "description": "Stores detailed pet and owner profiles, including medical history, vaccinations, prescriptions, and appointment tracking."
      },
      {
        "title": "Real-time Communication",
        "description": "Uses WebSockets for instant messaging between staff members, making coordination quick and seamless."
      },
      {
        "title": "User-Friendly UI",
        "description": "Designed with a clean, intuitive interface that makes navigation simple and ensures a smooth user experience."
      },
      {
        "title": "Automated Financial & End-of-Day Reports",
        "description": "Generates financial summaries and end-of-day reports automatically, helping the clinic track revenue and daily operations."
      },
      {
        "title": "Authentication & Admin Controls",
        "description": "Includes authentication and role-based access control to ensure only authorized staff can access admin features."
      }
    ]    
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    gsap.set(titleRef.current, { y: -50 });
    gsap.set(projectRefs.current, { y: 50 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
    });

    tl.to(
      projectRefs.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.2,
      },
      "-=0.5"
    );
  }, []);

  useEffect(() => {
    if (selectedProject) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    }
  }, [selectedProject]);

  const closeModal = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.3,
      onComplete: () => setSelectedProject(null),
    });
  };

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <h2 ref={titleRef}>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-banner"
            ref={(el) => (projectRefs.current[index] = el)}
            onClick={() => setSelectedProject(project)}
          >
            <h3>{project.name}</h3>
            <p>{project.shortDescription}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-fullscreen" ref={modalRef} onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>✖</button>

            <div className="modal-header">
              <h1>{selectedProject.name}</h1>
              <p className="project-type">Full-stack Management System</p>
            </div>

            <div className="modal-content">
              <div className="modal-left">
                <h2 className="section-title">Overview</h2>
                <p className="overview">{selectedProject.description}</p>
                <div className="tech-stack">
                  {selectedProject.technologies.map((tech, index) => (
                    <div key={index} className="tech-badge">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-right">
                <div className="video-container">
                  {selectedProject.video && (
                    <iframe
                      src={selectedProject.video}
                      title={selectedProject.name}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </div>
            </div>

            <div className="features-section">
              <h2 className="section-title">Key Features</h2>
              <div className="features-grid">
                {selectedProject.features.map((feature, index) => (
                  <div key={index} className="feature-card">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
