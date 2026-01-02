import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { profileData } from '../data/mock';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.fillStyle = 'rgba(0, 240, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.2 - distance / 600})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6 animate-fade-in">
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
            Welcome to my portfolio
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-slide-up">
          {profileData.name}
        </h1>
        
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-cyan-400 mb-6 animate-slide-up-delay-1">
          {profileData.title}
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-slide-up-delay-2">
          {profileData.headline}
        </p>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 animate-slide-up-delay-3">
          {profileData.tagline}
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center animate-slide-up-delay-4">
          <Button
            onClick={() => scrollToSection('projects')}
            size="lg"
            className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/50"
          >
            View Projects
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            size="lg"
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
          >
            Contact Me
          </Button>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 animate-bounce cursor-pointer hover:text-cyan-300 transition-colors z-10"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
};

export default Hero;
