"use client";

import { useState, useEffect } from "react"; // pastikan import useEffect juga
import { ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import dokumentasi from "@/public/konten/dokumentasi";


export default function Documentasion() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = dokumentasi.length;
  const currentItem = dokumentasi[currentIndex];
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, currentItem.delay * 1000); // ganti ke 5000 kalau ingin statis

    return () => clearInterval(interval);
  }, [currentIndex]);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="docs" className="py-24 bg-[var(--background)] px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <h1 className="text-base md:text-lg font-bold text-gray-600 flex items-center gap-4 text-center md:text-left">
          Dokumentasi
          <span className="w-24 border-b-2 border-[var(--secondary)]" />
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--primary)] mt-2 text-left">
          Jelajahi Dokumentasi
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto md:px-4 relative max-w-7xl"
      >
        <div
          className="relative rounded-3xl overflow-hidden grid grid-cols-4 md:grid-cols-6 grid-rows-2 md:gap-3 gap-1 bg-[var(--background)]"
          style={{ maxHeight: "80vh" }}
        >
          {/* Tombol Prev */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="hidden md:flex absolute top-1/2 left-2 -translate-y-1/2 z-20 bg-white rounded-full w-12 h-12 items-center justify-center hover:bg-gray-300 shadow"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          {/* Tombol Next */}
          <button
            onClick={next}
            aria-label="Next"
            className="hidden md:flex absolute top-1/2 right-2 -translate-y-1/2 z-20 bg-white rounded-full w-12 h-12 items-center justify-center hover:bg-gray-300 shadow"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* title */}
          <div className="absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            <h2 className="text-white font-bold text-[4rem] md:text-[10rem] select-none leading-none">
              {currentItem.title}
            </h2>
          </div>

          {/* gambar kiri atas */}
          <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden cursor-pointer">
            <img
              src={currentItem.img[0]}
              alt="left-top"
              className="w-full h-full object-cover rounded-2xl"
              loading="lazy"
              style={{ maxHeight: "100vh" }}
            />
          </div>

          {/* tengah besar spanning 2 rows */}
          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden cursor-pointer">
            <img
              src={currentItem.img[1]}
              alt="center"
              className="w-full h-full object-cover rounded-2xl"
              loading="lazy"
              style={{ maxHeight: "100vh" }}
            />
          </div>

          {/* kanan dua gambar bertumpuk */}
          <div className=" hidden md:block col-span-2 row-span-2 grid grid-rows-2">
            <div className="rounded-2xl overflow-hidden cursor-pointer mb-3">
              <img
                src={currentItem.img[2]}
                alt="right-top"
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
                style={{ maxHeight: "49vh" }}
              />
            </div>
            <div className="rounded-2xl overflow-hidden cursor-pointer">
              <img
                src={currentItem.img[3]}
                alt="right-bottom"
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
                style={{ maxHeight: "49vh" }}
              />
            </div>
          </div>

          {/* kiri bawah dua gambar berjejer */}
          <div className="col-span-2 row-span-1 flex md:gap-3 gap-1">
            <div className="rounded-2xl flex-1 overflow-hidden cursor-pointer">
              <img
                src={currentItem.img[4]}
                alt="left-bottom-1"
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
                style={{ maxHeight: "100vh" }}
              />
            </div>
            <div className="rounded-2xl flex-1 overflow-hidden cursor-pointer">
              <img
                src={currentItem.img[5]}
                alt="left-bottom-2"
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
                style={{ maxHeight: "100vh" }}
              />
            </div>
          </div>
        </div>
      </motion.div>
      {/* Mobile Pagination */}
      <div className="block md:hidden mt-6 flex justify-center gap-2">
        {dokumentasi.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-[var(--primary)]" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
