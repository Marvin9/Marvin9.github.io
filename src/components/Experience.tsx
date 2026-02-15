import React from 'react';
import '../index.css';

interface Role {
  title: string;
  period: string;
}

interface ExperienceItem {
  company: string;
  link: string;
  description?: string;
  // Single role
  role?: string;
  period?: string;
  // Multiple roles (timeline)
  timeline?: Role[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Akuity",
    link: "https://akuity.io",
    timeline: [
      { title: "Senior Software Engineer", period: "2024 - Present" },
      { title: "Software Engineer 2", period: "2023 - 2024" },
      { title: "Founding Engineer", period: "2022 - 2023" }
    ]
  },
  {
    company: "Dalhousie University",
    role: "Masters of Applied Computer Science",
    period: "2023 - 2025",
    description: "Specializing in Distributed Systems and Cloud Computing.",
    link: "https://www.dal.ca/"
  },
  {
    company: "Feats",
    role: "Software Engineer",
    period: "2021 - 2022",
    description: "Full-stack development for a creator platform.",
    link: "https://feats.co"
  }
];

const Experience = () => {
  return (
    <section className="section fade-in delay-1">
      <h2 className="section-title">Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <a 
            key={index} 
            href={exp.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="experience-card"
          >
            {exp.timeline ? (
              // Timeline View for multiple roles
              <div className="timeline-container">
                <div className="company-row">
                  <span className="company">@ {exp.company}</span>
                </div>
                
                <div className="timeline-items">
                  {exp.timeline.map((role, rIndex) => (
                    <div key={rIndex} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <h3 className="role timeline-role">{role.title}</h3>
                        <span className="period timeline-period">{role.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="description timeline-desc">{exp.description}</p>
              </div>
            ) : (
              // Standard View for single role
              <>
                <div className="card-header">
                  <h3 className="role">{exp.role}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <div className="company-row">
                  <span className="company">@ {exp.company}</span>
                </div>
                <p className="description">{exp.description}</p>
              </>
            )}
          </a>
        ))}
      </div>

      <style>{`
        .section-title {
          font-size: 1.5rem;
          margin-bottom: 24px;
          color: var(--text-primary);
        }

        .experience-grid {
          display: grid;
          gap: 16px;
        }

        .experience-card {
          display: block;
          padding: 24px;
          background: var(--surface-color);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s;
          position: relative;
          overflow: hidden;
        }

        .experience-card:hover {
          transform: translateY(-2px);
          border-color: var(--accent-color);
          background: #222;
        }

        /* Standard Styles */
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 8px;
          flex-wrap: wrap;
          gap: 8px;
        }

        .role {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .company {
          color: var(--accent-color);
          font-weight: 500;
        }
        
        .company-row {
            margin-bottom: 12px;
        }

        .period {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-family: monospace;
        }

        .description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Timeline Styles */
        .timeline-items {
          position: relative;
          margin: 16px 0 16px 8px;
          border-left: 2px solid var(--border-color);
          padding-left: 24px;
        }

        .experience-card:hover .timeline-items {
            border-left-color: var(--accent-glow);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 16px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: -31px; /* Adjust based on padding/border */
          top: 6px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--bg-color);
          border: 2px solid var(--text-secondary);
          transition: border-color 0.2s;
        }

        .experience-card:hover .timeline-dot {
            border-color: var(--accent-color);
            background: var(--accent-glow);
        }
        
        /* Highlight the latest role dot more */
        .timeline-item:first-child .timeline-dot {
            background: var(--text-secondary);
            border-color: var(--text-secondary);
        }
        
        .experience-card:hover .timeline-item:first-child .timeline-dot {
            background: var(--accent-color);
            border-color: var(--accent-color);
        }

        .timeline-role {
          margin-bottom: 2px;
        }

        .timeline-period {
          font-size: 0.85rem;
          opacity: 0.8;
          display: block; 
        }
        
        .timeline-desc {
            margin-top: 16px;
        }
      `}</style>
    </section>
  );
};

export default Experience;
