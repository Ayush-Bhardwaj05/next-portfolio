import Link from "next/link";
import React from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiCode } from "react-icons/fi";
import { motion } from "framer-motion";
export default function SocialIcons() {
  const socialLinks = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "https://github.com/Ayush-Bhardwaj05",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://linkedin.com/in/ayush-bhardwaj-ayush0505",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://instagram.com/ayush_._bhardwaj",
    },
    {
      name: "Coding Ninjas",
      icon: <FiCode />,
      link: "https://naukri.com/code360/profile/ayush05",
    },
  ];
  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
