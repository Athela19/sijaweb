"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

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
    title: "Open House",
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
    title: "MPLS",
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
    <section id="docs" className="py-24 bg-gray-50">
      <div className="mx-auto px-4 relative max-w-7xl">
        <div
          className="relative rounded-3xl overflow-hidden grid grid-cols-6 grid-rows-2 gap-3 bg-[var(--background)]"
          style={{ maxHeight: "80vh" }}
        >
          {/* Tombol Prev */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute top-1/2 left-2 -translate-y-1/2 z-20 bg-gray-50 rounded-full w-12 h-12 flex items-center justify-center text-gray-900 font-bold hover:bg-gray-300 select-none"
          >
            <ChevronLeft />
          </button>

          {/* Tombol Next */}
          <button
            onClick={next}
            aria-label="Next"
            className="absolute top-1/2 right-2 -translate-y-1/2 z-20 bg-gray-50 rounded-full w-12 h-12 flex items-center justify-center text-gray-900 font-bold hover:bg-gray-300 select-none"
          >
            <ChevronRight />
          </button>

          {/* title */}
          <div className="absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            <h2 className="text-white font-bold text-[10rem] select-none">
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
          <div className="col-span-2 row-span-2 grid grid-rows-2 gap-3">
            <div className="rounded-2xl overflow-hidden cursor-pointer">
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
