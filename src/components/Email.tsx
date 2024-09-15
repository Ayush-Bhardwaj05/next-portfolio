import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
export default function <Link>() {
  return (
    <motion.div initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 2,
      }}>
      <Link href="mailto:bhardwajayush05@gmail.com" className="email-link">
      bhardwajayush05@gmail.com
      </Link>
    </motion.div >
  );
}
