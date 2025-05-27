"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 2, delay: 1 }}
      className="relative top-0 left-0 w-full h-screen bg-white flex items-center justify-center z-50"
    >
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </motion.div>
  );
}
