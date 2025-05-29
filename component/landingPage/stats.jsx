"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { DoorOpen, GraduationCap, Users, BookOpen } from "lucide-react";

export default function StatsPage() {
  const stats = [
    {
      label: "Ruangan",
      value: 6,
      icon: <DoorOpen size={32} />,
    },
    {
      label: "Guru",
      value: 8,
      icon: <GraduationCap size={32} />,
    },
    {
      label: "Siswa",
      value: 250,
      approx: true,
      icon: <Users size={32} />,
    },
    {
      label: "Mata Pelajaran",
      value: 9,
      icon: <BookOpen size={32} />,
    },
  ];

  return (
    <section id="stats" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col items-center bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="mb-3 md:mb-4 p-3 rounded-full bg-[var(--tertiary)] text-[var(--secondary)] group-hover:bg-[var(--secondary)] group-hover:text-white">
                {item.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold flex items-center justify-center text-gray-800">
                <CountUp
                  end={item.value}
                  duration={2}
                  separator=","
                  enableScrollSpy={true}
                  scrollSpyDelay={300}
                />
                {item.approx && (
                  <span className="text-xl md:text-2xl ml-1 text-gray-500">
                    &plusmn;
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm md:text-base text-gray-600 font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
