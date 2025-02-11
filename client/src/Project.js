import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./projectStyle.css";

const projects = [

  {
    id: 1,
    name: "Pullectorverse (In development)",
    shortDescription: "An eCommerce platform for buying Pokémon products.",
    description: `
    I started this project because I wanted to develop a software from to start to finish on my own. 
    As eCommerce platforms are semi complex and provide a lot of features, I thought it would be a great learning experience.
    As a Pokémon card collector myself, I decided to create an eCommerce platform for Pokémon products. Although it's currently Pokémon themed, the platform can be easily adapted for any other merchandise.
    I wanted to learn 3js so I decided to implement a 3js homepage, I understand this is probably not necessary for an eCommerce platform but I wanted to learn it. Before loading the 3D homepage, 
    the system checks if WebGL is enabled and assesses potential performance issues. If WebGL is unsupported or performance concerns are detected, users are automatically redirected to the store page.
    `,
    technologies: [
      "Vite",
      "React.js",
      "React Router",
      "Three.js",
      "GSAP",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Auth0",
      "Google Authentication",
      "Stripe API",
      "PayPal SDK",
      "Vercel",
      "Render",
      "GitHub Actions",
      "AWS S3",
    ],
    image: "pullectorverse.png",
    video: "https://foliobuck.s3.us-east-2.amazonaws.com/PVWalk.mp4",
    features: [
      {
        title: "3D Product Viewer",
        description:
          "Integrated Three.js for interactive Pokémon merchandise models, allowing users to rotate, zoom, and inspect cards in full 3D.",
      },
      {
        title: "Smooth Animations & Page Transitions",
        description:
          "GSAP ensures seamless animations across UI elements, enhancing the user experience with smooth transitions.",
      },
      {
        title: "Real-time Shopping Cart",
        description:
          "Built using React’s Context API, the shopping cart updates in real-time, giving users a seamless checkout experience.",
      },
      {
        title: "Secure Authentication with Google",
        description:
          "Users can log in using Google OAuth for quick and secure access to their accounts.",
      },
      {
        title: "Multiple Payment Options",
        description:
          "Supports both Stripe for credit card payments and PayPal for alternative payment methods.",
      },
      {
        title: "Search & Filtering System",
        description:
          "Advanced search and filtering options allow users to find products based on category, price, and availability.",
      },
      {
        title: "Wishlist & User Favorites",
        description:
          "Users can save and manage a list of their favorite cards and merchandise for easy access.",
      },
      {
        title: "Admin Dashboard for Inventory Management",
        description:
          "Backend system for admins to add, update, and remove products dynamically, keeping stock information up to date.",
      },
      {
        title: "Automated Email Confirmations & Receipts",
        description:
          "Users receive order confirmations and digital receipts via email, ensuring a smooth transaction experience.",
      },
      {
        title: "Dark Mode & Theme Customization",
        description:
          "Personalized UI themes, including dark mode, implemented using React Context API.",
      },
    ],
  },

  {
    id: 2,
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


  {
    id: 3,
    name: "Maybe An Adventure",
    shortDescription: "A pixel-art platformer featuring a dimension-hopping monkey.",
    description: `
    A pixel-art platformer where players guide a monkey through different dimensions, each with its own unique art style and game mechanics. 
    Developed entirely in Unity’s 2D environment, I built this game from the ground up, creating custom pixel art, animations, and platforming mechanics. 
    The project allowed me to explore Unity's physics system, animation tools, and component-based architecture while refining my game development skills.
    `,
    technologies: [
      "Unity",
      "C#",
      "Aseprite",
      "Cinemachine",
      "Photoshop",
    ],
    image: "maybeAnAdventure.png",
    video: "https://foliobuck.s3.us-east-2.amazonaws.com/MaybeAnAdventure.mp4",
    features: [
      {
        title: "Built in Unity",
        description:
          "Made from scratch using Unity’s 2D tools. Learned how to manage scenes, handle collisions, and work with the physics system.",
      },
      {
        title: "Character Movement & Controls",
        description:
          "Created a platformer movement system with jumping, double jumps, and wall sliding. Spent time fine-tuning movement to feel smooth and responsive.",
      },
      {
        title: "Pixel Art & Animation",
        description:
          "Drew and animated all the sprite assets in Aseprite. Used Unity’s Animator to handle transitions between different actions like running, jumping, and idle states.",
      },
      {
        title: "Level Design & Parallax Backgrounds",
        description:
          "Designed levels with different art styles and mechanics. Used Photoshop to create layered parallax backgrounds for depth.",
      },
      {
        title: "Camera & Cinematics",
        description:
          "Implemented Cinemachine to create smooth camera movement, follow the player, and add zoom effects for cinematic moments.",
      },
      {
        title: "npc Interactions",
        description:
          "Added simple npc chat and interactions. Receive quests and rewards that help on your journey. ",
      },
      {
        title: "Game State & UI",
        description:
          "Built menus, HUD elements, and pause screens. Managed health, checkpoints, and level progression.",
      },
      {
        title: "Sound & Effects",
        description:
          "Added sound effects and background music. Used Unity’s audio system to trigger sounds based on player actions.",
      },
    ],
    
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
