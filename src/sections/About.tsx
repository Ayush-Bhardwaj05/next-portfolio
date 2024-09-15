import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hey! I’m Ayush, a passionate web developer with a love for creating
            intuitive and efficient digital experiences. My journey into web
            development began with my curiosity about how things work on the
            web, and since then, I've been committed to building dynamic and
            user-friendly applications.
          </p>
          <p className="about-grid-info-text">
            I specialize in developing modern web applications using the latest
            technologies. From crafting interactive user interfaces to designing
            seamless backend architectures, I enjoy solving complex problems and
            turning ideas into reality. I’m currently enhancing my skills in
            frontend and backend development, working with technologies like
            React, Next.js, and Node.js.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">TypeScript</li>
            <li className="about-grid-info-list-item">Redux</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Java</li>
            <li className="about-grid-info-list-item">JavaScript</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/ayush.png" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
