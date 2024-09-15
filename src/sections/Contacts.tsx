import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
export default function Contacts() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get in Touch</h2>
      <div className="contact-cta">
        <Button text="Contact Me" link="mailto:bhardwajayush05@gmail.com" />
      </div>
    </motion.div>
  );
}
