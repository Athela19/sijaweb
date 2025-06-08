"use client";

import { useState,useRef } from "react";
import { motion ,useInView} from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

const products = [
  {
    img: "/slider-img.png",
    title: "Cloud Computing",
    desc: "Memahami layanan seperti IaaS, PaaS, dan SaaS serta implementasi cloud dalam pengelolaan data dan aplikasi.",
    delay: 0.2,
    maker: "Syarif",
  },
  {
    img: "/slider-img.png",
    title: "UI/UX Design",
    desc: "Mempelajari prinsip desain antarmuka pengguna yang baik dan pengalaman pengguna yang optimal.",
    delay: 0.3,
    maker: "Ainun",
  },
  {
    img: "/slider-img.png",
    title: "Cyber Security",
    desc: "Pengenalan teknik dan prinsip dasar keamanan jaringan dan data.",
    delay: 0.4,
    maker: "Fajar",
  },
  {
    img: "/slider-img.png",
    title: "AI & Machine Learning",
    desc: "Dasar-dasar pembelajaran mesin dan penerapan AI dalam kehidupan sehari-hari.",
    delay: 0.5,
    maker: "Ein",
  },
];

export default function AboutSection() {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

  // InView Setup
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <section id="product" className="py-24 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-4 md:px-2">
        {/* Heading */}
        <motion.div
         initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-6">
          <h1 className="text-base md:text-lg font-bold text-gray-600 flex items-center gap-4 text-center md:text-left">
            Produk
            <span className="w-24 border-b-2 border-[var(--secondary)]" />
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--primary)] mt-2 text-left">
            Bukan Sekadar Inovasi
          </h2>
        </motion.div>

        {/* Cards */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[300px]"
        >
          {currentItems.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: item.delay, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-md"
            >
              <img
                src={item.img}
                alt={`Gambar ${item.title}`}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                 {item.maker && (
                <p className="text-sm text-gray-500 italic">Oleh: {item.maker}</p>
              )}
              <p className="text-gray-600 mb-2">{item.desc}</p>
           
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 items-center min-h-[40px] space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            <ChevronLeft size={18} />
          </button>

          <span className="px-4 py-2 rounded bg-blue-600 text-white text-sm font-medium">
            {currentPage}   
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
