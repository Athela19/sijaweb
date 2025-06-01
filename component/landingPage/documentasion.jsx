"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

// untuk gambar masukin rasion 16:9 jangan yang lain biar rapi
const dokumentasi = [
  {
    img: [
      "/dokumentasi/1.jpg",
      "/dokumentasi/2.jpg",
      "/dokumentasi/3.jpg",
      "/dokumentasi/4.jpg",
      "/dokumentasi/5.jpg",
      "/dokumentasi/6.jpg",
    ],
    title: "Angkatan @49",
    delay: 2,
  },
  {
    img: [
      "/dokumentasi/6.jpg",
      "/dokumentasi/5.jpg",
      "/dokumentasi/4.jpg",
      "/dokumentasi/3.jpg",
      "/dokumentasi/2.jpg",
      "/dokumentasi/1.jpg",
    ],
    title: "Angkatan @50",
    delay: 2,
  },
];

export default function Documentasion() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = dokumentasi.length;
  const currentItem = dokumentasi[currentIndex];

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
    <section id="docs" className="py-24 bg-gray-50 px-6 md:px-24">
      <div className="mb-6 md:px-24">
        <h1 className="text-base md:text-lg font-bold text-gray-600 flex items-center gap-4 text-center md:text-left">
          Dokumentasi
          <span className="w-24 border-b-2 border-[var(--secondary)]" />
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--primary)] mt-2 text-left">
          Jelajahi Dokumentasi
        </h2>
      </div>
      <div className="mx-auto px-4 relative max-w-7xl">
        <div
          className="relative rounded-3xl overflow-hidden grid grid-cols-4 md:grid-cols-6 grid-rows-2 gap-3 bg-[var(--background)]"
          style={{ maxHeight: "80vh" }}
        >
          {/* Tombol Prev */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute top-1/2 left-2 -translate-y-1/2 z-20 bg-gray-50 rounded-full md:w-12 md:h-12 w-10 h-10 flex items-center justify-center text-gray-900 font-bold hover:bg-gray-300 select-none"
          >
            <ChevronLeft />
          </button>

          {/* Tombol Next */}
          <button
            onClick={next}
            aria-label="Next"
            className="absolute top-1/2 right-2 -translate-y-1/2 z-20 bg-gray-50 rounded-full md:w-12 md:h-12 w-10 h-10 flex items-center justify-center text-gray-900 font-bold hover:bg-gray-300 select-none"
          >
            <ChevronRight />
          </button>

          {/* title */}
          <div className="absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            <h2 className="text-white font-bold text-[4rem] md:text-[10rem] select-none">
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
          <div className="col-span-2 row-span-1 flex gap-3">
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
      </div>
    </section>
  );
}
