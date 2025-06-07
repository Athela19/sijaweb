"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Product", href: "#product" },
    { label: "Docs", href: "#docs" },
    { label: "Structure", href: "#structure" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-16 py-3 transition-colors duration-500 ${
        scrolled ? "bg-[var(--primary)] shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo & Title */}
      <div className="flex items-center gap-4">
        <Image src="/logo sija.png" alt="Logo" width={60} height={60} style={{ height: "auto" }}/>
        <h1 className="text-white font-semibold text-2xl sm:text-3xl">
          <span className="hidden md:inline">Sistem Informasi Jaringan dan Aplikasi</span>
          <span className="md:hidden">SIJA</span>
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6">
        {navLinks.map((item) => (
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

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="text-white"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Sidebar */}
            <motion.aside
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-[var(--primary)] z-50 p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-white text-2xl font-bold">Menu</h2>
                <button onClick={() => setMenuOpen(false)} className="text-white" aria-label="Close menu">
                  <X size={28} />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-white text-lg font-medium text-center"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
