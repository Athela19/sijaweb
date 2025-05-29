"use client";

import { motion } from "framer-motion";

export default function JamaLoading() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 2, delay: 1 }}
      className="fixed top-0 left-0 w-full h-screen bg-white flex items-center justify-center z-50"
    >
      {/* Lingkaran utama (mirip logo Jama) */}
      <div className="relative w-24 h-24">
        {/* Lingkaran besar */}
        <motion.div
          className="absolute inset-0 border-4 border-blue-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Elemen-elemen kecil berputar */}
        <motion.div
          className="absolute top-0 left-1/2 w-4 h-4 bg-blue-500 rounded-full -mt-2 -ml-2"
          animate={{ 
            rotate: 360,
            x: [0, 20, 0, -20, 0],
            y: [0, 20, 0, -20, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-0 left-1/2 w-4 h-4 bg-blue-500 rounded-full -mb-2 -ml-2"
          animate={{ 
            rotate: 360,
            x: [0, -20, 0, 20, 0],
            y: [0, -20, 0, 20, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Titik tengah */}
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-600 rounded-full -mt-1.5 -ml-1.5" />
      </div>
    </motion.div>
  );
}