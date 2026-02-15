import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Socials from './components/Socials';

import OSSContributions from './components/OSSContributions';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="app-container">
      <div className="left-pane">
        <div className="content-wrapper">
          <Hero />
          <Socials />
          
          <footer className="footer-note fade-in delay-3">
            <p>&copy; {new Date().getFullYear()} Mayursinh Sarvaiya.</p>
          </footer>
        </div>
      </div>
      
      <div className="right-pane">
        <div className="scroll-content">
          <Experience />
          <OSSContributions />
        </div>
      </div>

      <style>{`
        .app-container {
          display: flex;
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }
        
        .left-pane {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 40px;
          border-right: 1px solid var(--border-color);
          background: radial-gradient(circle at top left, #1a1a1a 0%, var(--bg-color) 40%);
        }

        .content-wrapper {
          max-width: 500px;
          width: 100%;
          text-align: center;
        }
        
        .right-pane {
          flex: 1.2;
          height: 100vh;
          overflow-y: auto;
          padding: 40px;
          background: var(--bg-color);
          position: relative;
        }

        .scroll-content {
          max-width: 600px;
          margin: 0 auto;
          min-height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .footer-note {
          margin-top: 40px;
          color: var(--text-secondary);
          font-size: 0.8rem;
          opacity: 0.5;
        }

        @media (max-width: 900px) {
          .app-container {
            flex-direction: column;
            height: auto;
            overflow-y: auto;
          }
          
          .left-pane, .right-pane {
            flex: none;
            width: 100%;
            height: auto;
            border-right: none;
            overflow: visible;
          }
          
          .left-pane {
            padding: 60px 24px 20px;
            min-height: auto;
          }
          
          .right-pane {
            padding: 20px 24px 60px;
          }
          
          .scroll-content {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
