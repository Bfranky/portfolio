import React from 'react';
import styles from './Portfolio.module.css';
import { portfolioData } from './portfolioData';

export function Portfolio({ data = portfolioData }) {
  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.wrap}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.mono}>{data.handle}</div>
          <h1 className={styles.title}>
            {data.name}
            <br />
            <span className={styles.role}>{data.roleHeadline}</span> {data.subHeadline}
          </h1>
          <p className={styles.bio}>{data.bio}</p>
          <div className={styles.tags}>
            {data.tags.map((tag) => (
              <div key={tag} className={styles.tag}>
                {tag}
              </div>
            ))}
          </div>
        </header>

        {/* Selected Work Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>SELECTED WORK</h2>

          {data.projects.map((project) => (
            <article key={project.title} className={styles.project}>
              <div className={styles.projectTop}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  View live ↗
                </a>
              </div>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.stack}>{project.stack}</div>
            </article>
          ))}
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p className={styles.footerText}>
            Available for freelance and contract work — new builds, or taking an existing site further.
          </p>
          <div className={styles.cta}>
            <a
              className={styles.btn}
              href={data.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on WhatsApp
            </a>
            <a className={styles.btn} href={`mailto:${data.email}`}>
              Email
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Portfolio;
