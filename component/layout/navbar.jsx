"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1.5 }}
    >
        <nav className="flex justify-between items-center px-8 py-4 bg-[var(--primary)] border-b-2 border-[var(--background)] fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
      {/* Logo & Brand */}
      <div className="flex items-center gap-2">
        <Image
          src="/logo sija.png"
          alt="Logo Light"
          width={80}
          height={80}
          priority
        />
        <h1 className="text-3xl font-semibold text-white">
          Sistem Informasi Jaringan dan Aplikasi
        </h1>
      </div>

      {/* Navigation Menu */}
      <ul className="flex items-center gap-6">
        {[
          { label: "Home", href: "#home" },
          { label: "About", href: "#about" },
          { label: "Docs", href: "#docs" },
          { label: "Structure", href: "#structure" },
          { label: "Contact", href: "#contact" },
        ].map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="group text-base font-medium text-white transition-colors duration-300"
            >
              {item.label}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white rounded-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
    </motion.div>
  );
}
