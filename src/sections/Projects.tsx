import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project1.png",
      projectName: "Pokedex",
      projectDescription:
        "This is a web application that uses the PokeAPI to display information about different Pokemon, including their evolution levels and details. You can compare multiple Pokemon using a queue, and add them to your personal list using Firebase's Firestore database.",
      projectTech: [
        "React",
        "Redux Toolkit",
        "SCSS",
        "Firebase",
        "Typescript",
        "PokeApi",
      ],
      projectExternalLinks: {
        github: "https://github.com/Ayush-Bhardwaj05/Pokedex",
        externalLink: "https://pokedex-ayush05.netlify.app/",
      },
    },
    {
      image: "/snappy.png",
      projectName: "Realtime Chat App",
      projectDescription:
        "This is a chat app made with React and Node.js that sends real-time messages and is highly scalable. It uses advanced JavaScript concepts like debouncing and is optimized for React. It has 300+ stars on GitHub and over 180k views on YouTube.",
      projectTech: [
        "React",
        "Sockets",
        "Node.js",
        "Express",
        "MongoDB",
        "Styled Components",
      ],
      projectExternalLinks: {
        github: "https://github.com/Ayush-Bhardwaj05/Snappy-chatApp/tree/main",
        externalLink: "",
      },
    }
  ];
  return (
    <div className="projects" id="work">
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
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectExternalLinks,
            projectName,
            projectTech,
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
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
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
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
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

export default Projects;