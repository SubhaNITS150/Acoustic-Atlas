"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// --- INLINE SVG ICON COMPONENTS ---
// By defining the icons directly in the file, we remove external dependencies
// that can cause loading issues and make the component more reliable.

const SmartphoneIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
    <path d="M12 18h.01"></path>
  </svg>
);

const BrainCircuitIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.6.11.82-.26.82-.57v-2.11c0-.55-.45-1-1-1H6.1c-1.1 0-2-1.12-2-2.5 0-1.38.9-2.5 2-2.5H7c.55 0 1-.45 1-1V8.5c0-.55-.45-1-1-1H5.1c-1.1 0-2-1.12-2-2.5 0-1.38.9-2.5 2-2.5H7c.55 0 1-.45 1-1V2.83c0-.31.22-.57.53-.57a10.007 10.007 0 0 0 6.94 0c.31 0 .53.26.53.57v1.11c0 .55.45 1 1 1h1.9c1.1 0 2 1.12 2 2.5s-.9 2.5-2 2.5H16c-.55 0-1 .45-1 1v1.11c0 .55.45 1 1 1h1.9c1.1 0 2 1.12 2 2.5s-.9 2.5-2 2.5H16c-.55 0-1 .45-1 1v2.11c0 .31.22.68.82.57A10 10 0 0 0 22 12a10 10 0 0 0-10-10Z"></path>
  </svg>
);

const MapPinIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const BuildingIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
    <path d="M9 22v-4h6v4"></path>
    <path d="M8 6h.01"></path>
    <path d="M16 6h.01"></path>
    <path d="M12 6h.01"></path>
    <path d="M12 10h.01"></path>
    <path d="M12 14h.01"></path>
    <path d="M16 10h.01"></path>
    <path d="M16 14h.01"></path>
    <path d="M8 10h.01"></path>
    <path d="M8 14h.01"></path>
  </svg>
);

const BarChart2Icon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" x2="18" y1="20" y2="10"></line>
    <line x1="12" x2="12" y1="20" y2="4"></line>
    <line x1="6" x2="6" y1="20" y2="14"></line>
  </svg>
);

const LeafIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M11 20A7 7 0 0 1 4 13H2a10 10 0 0 1 10-10c5.52 0 10 4.48 10 10a10 10 0 0 1-2 6h-2a7 7 0 0 1-7-6Z"></path>
    <path d="M12 10a3 3 0 0 0-3 3c0 1.66 1.34 3 3 3s3-1.34 3-3a3 3 0 0 0-3-3Z"></path>
  </svg>
);

const HeartPulseIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
    <path d="M3.22 12H9.5l.7-1.5L13.5 14l.7-1.5h4.78"></path>
  </svg>
);

const UploadCloudIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
    <path d="M12 12v9"></path>
    <path d="m16 16-4-4-4 4"></path>
  </svg>
);

const GlobeIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20Z"></path>
    <path d="M2 12h20"></path>
  </svg>
);

// Helper component for the animated background
const AnimatedHeroBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    // --- Define all functions before using them ---

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0)
          this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0)
          this.directionY = -this.directionY;
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const init = () => {
      particles = [];
      let numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 2 + 1;
        let x = Math.random() * (canvas.width - size * 2);
        let y = Math.random() * (canvas.height - size * 2);
        let directionX = Math.random() * 0.4 - 0.2;
        let directionY = Math.random() * 0.4 - 0.2;
        let color = "rgba(0, 196, 154, 0.5)";
        particles.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance =
            (particles[a].x - particles[b].x) ** 2 +
            (particles[a].y - particles[b].y) ** 2;
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - distance / 20000;
            ctx.strokeStyle = `rgba(0, 196, 154, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      connect();
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init(); // Safe now because init is defined above
    };

    // --- Initialization ---
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    // --- Cleanup ---
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <canvas ref={canvasRef} className="absolute inset-0"></canvas>
      <div className="absolute inset-0 bg-white opacity-90"></div>
    </div>
  );
};

export default function HomePage() {
  const main = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- HEADER ANIMATION ---
      gsap.from(".nav-item", {
        duration: 0.8,
        y: -30,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".nav-button", {
        duration: 0.8,
        y: -30,
        opacity: 0,
        ease: "power3.out",
        delay: 0.4,
      });

      // --- HERO SECTION ANIMATION ---
      gsap.from(".hero-title", {
        duration: 1.2,
        y: 50,
        opacity: 0,
        ease: "power4.out",
        delay: 0.5,
      });
      gsap.from(".hero-p", {
        duration: 1.2,
        y: 50,
        opacity: 0,
        ease: "power4.out",
        delay: 0.7,
      });
      gsap.from(".hero-button", {
        duration: 1,
        scale: 0.8,
        opacity: 0,
        ease: "elastic.out(1, 0.75)",
        delay: 0.9,
      });

      // --- SCROLL-TRIGGERED ANIMATIONS ---
      const sections = gsap.utils.toArray(".animated-section");
      sections.forEach((section) => {
        // --- SECTION TITLES ---
        const sectionTitle = section.querySelector(".section-title");
        if (sectionTitle) {
          gsap.from(sectionTitle, {
            scrollTrigger: {
              trigger: sectionTitle,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          });
        }

        // --- FEATURE CARDS ---
        const featureCards = section.querySelectorAll(".feature-card");
        if (featureCards.length > 0) {
          gsap.from(featureCards, {
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              toggleActions: "play none none none",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          });
        }
      });

      // --- FINAL CTA ANIMATION ---
      gsap.from(".cta-graphic > *", {
        scrollTrigger: {
          trigger: ".cta-graphic",
          start: "top 80%",
        },
        scale: 0.5,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)",
      });
    }, main); // <- scope animations to the main element

    return () => ctx.revert(); // cleanup!
  }, []);

  return (
    <div ref={main} className="bg-[#FFFFFF] text-[#1A2E40] font-sans">
      {/* =========== Navigation Bar =========== */}
      <header className="sticky top-0 z-50 bg-[#FFFFFF]/80 backdrop-blur-md shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex items-center max-w-7xl">
          <div className="text-2xl font-bold text-[#1A2E40] nav-item">
            Acoustic Atlas
          </div>

          <div className="flex items-center ml-auto">
            <div className="hidden md:flex items-center space-x-8 mr-8">
              <Link
                href="/"
                className="hover:text-[#00C4A9] transition-colors nav-item"
              >
                Home
              </Link>
              <Link href="/map">Live Map</Link>
              <Link href="/contribute">Contribute</Link>
              
            </div>
            {/* <a
              href="#"
              className="bg-[#00C4A9] text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-transform transform hover:scale-105 nav-button"
            >
              Contribute Data
            </a> */}
          </div>
        </nav>
      </header>

      <main>
        {/* =========== Section 1: Hero Section =========== */}
        <section className="relative min-h-screen flex items-center justify-center text-center px-6 py-24 overflow-hidden">
          <AnimatedHeroBackground />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#1A2E40] mb-4 leading-tight hero-title">
              Hear Your City Like Never Before.
            </h1>
            <p className="text-lg md:text-xl text-[#1A2E40]/80 max-w-2xl mx-auto mb-8 hero-p">
              Acoustic Atlas is a crowdsourced platform that maps and analyzes
              urban soundscapes, transforming noise into actionable insight for
              healthier communities.
            </p>
            <Link
              href="/map"
              className="bg-[#00C4A9] text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 inline-block hero-button"
            >
              Explore the Live Map
            </Link>
          </div>
        </section>

        {/* =========== Section 2: The Core Features =========== */}
        <section className="bg-[#F5F7FA] py-20 md:py-28 animated-section">
          <div className="container mx-auto px-6 text-center max-w-7xl">
            <h2 className="text-4xl font-bold mb-16 section-title">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {/* Step 1 */}
              <div className="flex flex-col items-center feature-card">
                <div className="bg-[#00C4A9]/10 p-5 rounded-full mb-4">
                  <SmartphoneIcon className="w-10 h-10 text-[#00C4A9]" />
                </div>
                <h3 className="text-xl font-bold mb-2">CAPTURE</h3>
                <p className="text-[#1A2E40]/70">
                  Citizens use our app or website to record short soundscapes
                  from their surroundings.
                </p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center feature-card">
                <div className="bg-[#00C4A9]/10 p-5 rounded-full mb-4">
                  <BrainCircuitIcon className="w-10 h-10 text-[#00C4A9]" />
                </div>
                <h3 className="text-xl font-bold mb-2">ANALYZE</h3>
                <p className="text-[#1A2E40]/70">
                  Our AI processes the audio on-the-fly, classifying sound
                  sources while ensuring user privacy.
                </p>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center feature-card">
                <div className="bg-[#00C4A9]/10 p-5 rounded-full mb-4">
                  <MapPinIcon className="w-10 h-10 text-[#00C4A9]" />
                </div>
                <h3 className="text-xl font-bold mb-2">VISUALIZE</h3>
                <p className="text-[#1A2E40]/70">
                  The classified data is plotted on a global heatmap, revealing
                  the sonic identity of our cities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========== Section 3: Feature Showcase =========== */}
        <section className="bg-[#FFFFFF] py-20 md:py-28 animated-section">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4 section-title">
                Unlocking a World of Sonic Data
              </h2>
              <p className="text-lg text-[#1A2E40]/70">
                Our platform provides valuable insights with diverse
                applications for a better, quieter future.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="bg-[#F5F7FA] p-8 rounded-lg border border-gray-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 feature-card">
                <BuildingIcon className="w-10 h-10 text-[#00C4A9] mb-4" />
                <h3 className="text-xl font-bold mb-2">Urban Planning</h3>
                <p className="text-[#1A2E40]/70">
                  Empower city officials with data to design quieter
                  neighborhoods and manage noise pollution.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-[#F5F7FA] p-8 rounded-lg border border-gray-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 feature-card">
                <BarChart2Icon className="w-10 h-10 text-[#00C4A9] mb-4" />
                <h3 className="text-xl font-bold mb-2">Real Estate Insight</h3>
                <p className="text-[#1A2E40]/70">
                  Provide a "Noise Score" for any address, adding a new
                  dimension to property value.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-[#F5F7FA] p-8 rounded-lg border border-gray-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 feature-card">
                <LeafIcon className="w-10 h-10 text-[#00C4A9] mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Ecological Monitoring
                </h3>
                <p className="text-[#1A2E40]/70">
                  Use our Bio-Acoustic Index to track urban wildlife and the
                  health of green spaces.
                </p>
              </div>
              {/* Card 4 */}
              <div className="bg-[#F5F7FA] p-8 rounded-lg border border-gray-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 feature-card">
                <HeartPulseIcon className="w-10 h-10 text-[#00C4A9] mb-4" />
                <h3 className="text-xl font-bold mb-2">Personal Wellness</h3>
                <p className="text-[#1A2E40]/70">
                  Understand your daily noise exposure and find moments of peace
                  in a bustling world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========== Section 4: Final Call to Action =========== */}
        <section className="bg-[#F5F7FA] py-20 md:py-28 animated-section">
          <div className="container mx-auto px-6 text-center max-w-7xl">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center items-center space-x-4 mb-8 text-[#1A2E40]/50 cta-graphic">
                <SmartphoneIcon className="w-8 h-8 md:w-12 md:h-12" />
                <div className="w-16 md:w-20 h-0.5 bg-[#1A2E40]/20"></div>
                <UploadCloudIcon className="w-10 h-10 md:w-14 md:h-14" />
                <div className="w-16 md:w-20 h-0.5 bg-[#1A2E40]/20"></div>
                <GlobeIcon className="w-8 h-8 md:w-12 md:h-12" />
              </div>
              <h2 className="text-4xl font-bold mb-4 section-title">
                Become a Citizen Scientist.
              </h2>
              <p className="text-lg text-[#1A2E40]/80 mb-8">
                Your contributions make our map smarter and help build a global
                database of sound. Join us in mapping the world's soundscape.
              </p>
              <a
                href="#"
                className="bg-[#00C4A9] text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 inline-block"
              >
                Contribute Your Sound
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* =========== Footer =========== */}
      <footer className="bg-[#1A2E40] text-[#F5F7FA] py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left max-w-7xl">
          <p>
            &copy; {new Date().getFullYear()} Acoustic Atlas. All Rights
            Reserved.
          </p>
          <div className="flex space-x-6 my-4 md:my-0">
            <a href="#" className="hover:text-[#00C4A9] transition-colors">
              About Us
            </a>
            <a href="#" className="hover:text-[#00C4A9] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#00C4A9] transition-colors">
              Contact
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-[#00C4A9] transition-colors"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="img"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-[#00C4A9] transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="img"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-[#00C4A9] transition-colors"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="img"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
