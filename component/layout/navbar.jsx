"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
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
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-16 py-2 ${
        scrolled ? 'bg-[var(--primary)]' : "bg-transparent"
      } transition-colors duration-500`}
    >
      {/* Logo + Title */}
      <div className="flex items-center gap-4">
        <Image src="/logo sija.png" alt="Logo" width={60} height={60}/>
        <h1 className="text-2xl sm:text-3xl font-semibold text-white md:hidden block">SIJA</h1>
        <h1 className="text-2xl sm:text-3xl font-semibold text-white md:block hidden">Sistem Informasi Jaringan dan Aplikasi</h1>
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

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(true)}
          className="text-white"
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-64 bg-[var(--primary)] z-50 p-6 flex flex-col gap-6"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-white text-xl font-bold">Menu</h2>
                <button onClick={() => setMenuOpen(false)} className="text-white">
                  <X size={28} />
                </button>
              </div>

              <nav className="flex flex-col gap-4 mt-4">
                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-white text-base font-medium"
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
