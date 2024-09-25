import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiGithub } from "react-icons/fi";

function OtherProjects() {
  const projectsData = [
    {
      projectName: 'Keeper App',
      projectLink: 'https://github.com/YourUsername/KeeperApp',
      projectDescription:
        'Keeper is a note-taking app built with React. It allows users to add, edit, and delete notes, providing a simple UI for managing tasks and ideas.',
      projectTech: ['React', 'JavaScript', 'CSS', 'HTML'],
      projectExternalLinks: {
        github: 'https://github.com/YourUsername/KeeperApp',
        externalLink: '',
      },
    },
  ];

  return (
    <div className="Oprojects" id="other-projects">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Other Noteworthy Projects</h2>
      </motion.div>

      <div className="projects-container">
        {projectsData.map(
          ({
            projectDescription,
            projectName,
            projectTech,
            projectExternalLinks,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-info">
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <span><FiGithub /></span>
                      </Link>
                    </li>
                    
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default OtherProjects;
