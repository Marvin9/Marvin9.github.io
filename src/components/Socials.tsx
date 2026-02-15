import React from 'react';
import { AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../index.css';

const Socials = () => {
  const iconSize = 24;
  
  return (
    <section className="section fade-in delay-2">
      <div className="socials-container">
        <a href="mailto:mayursiinh@gmail.com" aria-label="Email">
          <AiOutlineMail size={iconSize} />
        </a>
        <a href="https://github.com/Marvin9" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={iconSize} />
        </a>
        <a href="https://x.com/mayursiinh" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter size={iconSize} />
        </a>
        <a href="https://www.linkedin.com/in/may-ur/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={iconSize} />
        </a>
        <a href="https://www.instagram.com/may_ur_sinh/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <AiOutlineInstagram size={iconSize} />
        </a>
      </div>

      <style>{`
        .socials-container {
          display: flex;
          justify-content: center;
          gap: 32px;
          padding: 24px 0;
          border-top: 1px solid var(--border-color);
          margin-top: 32px;
        }

        .socials-container a {
          color: var(--text-secondary);
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .socials-container a:hover {
          color: var(--text-primary);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default Socials;
