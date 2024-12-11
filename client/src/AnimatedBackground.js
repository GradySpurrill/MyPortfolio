import React, { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1, 
        dy: Math.random() * 0.3 + 0.2, 
        opacity: Math.random() * 0.4 + 0.2, 
      });
    }

    const drawParticle = (particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
      ctx.fill();
      ctx.closePath();
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.y += particle.dy;

        
        if (particle.y > canvas.height) {
          particle.y = -particle.radius;
          particle.x = Math.random() * canvas.width; 
        }

        drawParticle(particle);
      });

      requestAnimationFrame(animateParticles);
    };

    animateParticles();

    return () => {
      particles.length = 0;
    };
  }, []);

  return <canvas ref={canvasRef} className="background-canvas"></canvas>;
};

export default AnimatedBackground;
