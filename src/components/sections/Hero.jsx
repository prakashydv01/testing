import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const destinations = [
    {
      name: "Santorini, Greece",
      image: "https://res.cloudinary.com/backendsrc/image/upload/v1744603694/wyoming-4786394_1920_aov2fa.jpg",
      tagline: "Whitewashed beauty under azure skies"
    },
    {
      name: "Kyoto, Japan",
      image: "https://res.cloudinary.com/backendsrc/image/upload/v1744603695/forest-8531787_1920_owjune.jpg",
      tagline: "Where tradition meets tranquility"
    },
    {
      name: "Banff, Canada",
      image: "https://res.cloudinary.com/backendsrc/image/upload/v1744471059/paris_mlsvi2.jpg",
      tagline: "Majestic peaks and emerald lakes"
    }
  ];

  // Rotate background images every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Main container styles
  const heroStyles = {
    position: 'relative',
    height: '100vh',
    minHeight: '700px',
    background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), 
                url(${destinations[currentImageIndex].image}) no-repeat center center/cover`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    padding: '2rem',
    textAlign: 'center',
    overflow: 'hidden',
    transition: 'background-image 1.5s ease-in-out'
  };

  // Content container
  const contentStyles = {
    maxWidth: '1200px',
    width: '100%',
    position: 'relative',
    zIndex: '2',
    padding: '2rem',
    backdropFilter: 'blur(2px)'
  };

  // Title styles
  const titleStyles = {
    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
    fontWeight: '800',
    lineHeight: '1.1',
    marginBottom: '1.5rem',
    textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
    animation: 'fadeInUp 1s ease-out',
    fontFamily: '"Playfair Display", serif'
  };

  // Subtitle styles
  const subtitleStyles = {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)',
    maxWidth: '800px',
    margin: '0 auto 3rem',
    textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
    animation: 'fadeInUp 1.2s ease-out',
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: '300',
    lineHeight: '1.6'
  };

  // Button styles
  const buttonStyles = {
    background: 'transparent',
    color: 'white',
    border: '2px solid white',
    borderRadius: '0',
    padding: '1.2rem 2.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    margin: '0 1rem',
    minWidth: '220px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    position: 'relative',
    overflow: 'hidden',
    zIndex: '1'
  };

  // Image dots navigation
  const dotContainerStyles = {
    position: 'absolute',
    bottom: '40px',
    left: '0',
    right: '0',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    zIndex: '3'
  };

  const dotStyles = (active) => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: active ? 'white' : 'rgba(255,255,255,0.5)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: active ? 'none' : '1px solid white'
  });

  return (
    <section style={heroStyles}>
      {/* Animation keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .explore-btn:hover {
            background: white;
            color: #222;
          }
          .destinations-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: white;
            transition: all 0.4s ease;
            z-index: -1;
          }
          .destinations-btn:hover::before {
            left: 0;
          }
          .destinations-btn:hover {
            color: #222;
          }
        `}
      </style>

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(74,108,247,0.1) 0%, rgba(254,101,101,0.1) 100%)',
        zIndex: 1
      }}></div>

      <div style={contentStyles}>
        <h1 style={titleStyles}>
          Journey Beyond <span style={{ fontStyle: 'italic' }}>the Ordinary</span>
        </h1>
        <p style={subtitleStyles}>
          {destinations[currentImageIndex].name} — {destinations[currentImageIndex].tagline}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link 
            to="/destinations" 
            style={{ 
              ...buttonStyles, 
              background: 'white', 
              color: '#222',
              border: '2px solid white'
            }}
            className="explore-btn"
          >
            Explore Destinations
          </Link>
          <Link 
            to="/featured" 
            style={{ 
              ...buttonStyles, 
              border: '2px solid white',
              background: 'transparent',
              color: 'white'
            }}
            className="destinations-btn"
          >
            Featured Experiences
          </Link>
        </div>
      </div>

      {/* Image dots navigation */}
      <div style={dotContainerStyles}>
        {destinations.map((_, index) => (
          <div 
            key={index}
            style={dotStyles(index === currentImageIndex)}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>

      {/* Scrolling indicator */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2s infinite',
        zIndex: 2
      }}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"></path>
        </svg>
      </div>
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform: translateY(0) translateX(-50%);}
            40% {transform: translateY(-20px) translateX(-50%);}
            60% {transform: translateY(-10px) translateX(-50%);}
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;