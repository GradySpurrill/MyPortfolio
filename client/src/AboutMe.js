import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./aboutMeStyle.css";

const AboutMe = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const slideshowRef = useRef(null);
  const aboutMeRef = useRef(null);

  const images = [
    { src: "FireDog.jpg" },
    { src: "RiverDog.jpg" },
    { src: "JudgingDog.jpg" },
    { src: "SleepingDog.jpg" },
    { src: "SniffingDog.jpg" },
    { src: "BedSleepDog.jpg" },
    { src: "ToyPillows.jpg" },
    { src: "NotScared.jpg" },
    { src: "PrettyLady.jpg" },
    { src: "PillowDog.jpg" },
    { src: "PonzuByTheRiver.jpg" },
    { src: "PonzuRunningFree.jpg" },
    { src: "SmilingOnAHill.jpg" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      aboutMeRef.current.children,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 2, ease: "power2.out", stagger: 0.2 }
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section ref={aboutMeRef} id="about-me" className="about-me-section">
      <h2>About Me</h2>
      <p>
        My journey in software development began in 2022 at the Southern Alberta
        Institute of Technology, but my fascination with technology and
        computers has been a lifelong passion. I’m excited by the prospect of
        becoming a full stack developer and am constantly looking for
        opportunities to learn and grow, both personally and professionally.
      </p>
      <p>
        Aside from coding, I have a range of hobbies that help me stay balanced
        and motivated. I enjoy listening to podcasts, going on camping trips to
        enjoy nature, video games or board games with friends, and spending
        time with my dog. She's a feisty 6 year old from the streets of Thailand
        who came into my life two and a half years ago. I hope you enjoy the
        slide show of her!
      </p>

      <div ref={slideshowRef} className="slideshow-container">
        <img
          className="slideshow-image"
          src={images[slideIndex].src}
          alt={images[slideIndex].alt}
        />
        <p className="slideshow-caption">{images[slideIndex].alt}</p>
      </div>

      {isMobile && (
        <div className="about-me-social-icons">
          <a
            href="https://github.com/MushysWebs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/grady-spurrill/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      )}
    </section>
  );
};

export default AboutMe;
