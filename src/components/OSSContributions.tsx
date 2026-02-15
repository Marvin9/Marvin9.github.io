import React from 'react';

const OSSContributions = () => {
  return (
    <section className="section fade-in delay-2 oss-section">
      <h2 className="section-title">Open Source Details</h2>
      <p id="my-open-source-contributions" className="oss-contributions">
        I have contributed to{' '}
        <a href="https://github.com/elastic/eui" target="_blank" rel="noopener noreferrer">
          elastic/eui
        </a>
        ,{' '}
        <a href="https://github.com/backstage/backstage" target="_blank" rel="noopener noreferrer">
          backstage
        </a>{' '}
        and{' '}
        <a href="https://github.com/prometheus/prometheus" target="_blank" rel="noopener noreferrer">
          prometheus
        </a>{' '}
        open source projects. Currently I am actively involved in{' '}
        <a href="https://github.com/argoproj/argo-cd" target="_blank" rel="noopener noreferrer">
          Argo CD
        </a>{' '}
        project.
      </p>

      <style>{`
        .oss-section {
          margin-top: 60px;
        }

        .section-title {
            font-size: 1.5rem;
            margin-bottom: 24px;
            color: var(--text-primary);
        }

        .oss-contributions {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.8;
        }

        .oss-contributions a {
          color: var(--accent-color);
          text-decoration: none;
          border-bottom: 1px dashed var(--accent-color);
          transition: all 0.2s ease;
        }

        .oss-contributions a:hover {
          color: var(--text-primary);
          border-bottom-style: solid;
        }
      `}</style>
    </section>
  );
};

export default OSSContributions;
