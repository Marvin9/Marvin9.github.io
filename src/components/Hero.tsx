import React from 'react';
import MyImage from '../assets/mayursinh-sarvaiya.jpeg';
import '../index.css';

const Hero = () => {
  return (
    <section className="section hero-container fade-in">
      <div className="profile-wrapper">
        <img 
          src={MyImage} 
          alt="Mayursinh Sarvaiya" 
          className="profile-img"
        />
      </div>
      <h1 className="name">Mayursinh Sarvaiya</h1>
      <p className="bio">
        Senior Software Engineer building scalable systems.<br/>
        From Rajkot, India 🇮🇳
      </p>
      
      <style>{`
        .hero-container {
          text-align: center;
          padding-top: 60px;
        }
        
        .profile-wrapper {
          width: 150px;
          height: 150px;
          margin: 0 auto 24px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--border-color);
          box-shadow: 0 0 20px var(--accent-glow);
          transition: transform 0.3s ease;
        }
        
        .profile-wrapper:hover {
          transform: scale(1.05);
          border-color: var(--accent-color);
        }
        
        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .name {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
          background: linear-gradient(to right, #fff, #a1a1a1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .bio {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 600px) {
          .name { font-size: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
