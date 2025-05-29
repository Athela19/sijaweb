// components/AboutSection.jsx
"use client";

import { motion } from "framer-motion";
import { Cloud, ShieldCheck, Monitor, Wifi } from "lucide-react";

const features = [
  {
    id: "cloud",
    icon: <Cloud className="w-8 h-8 text-primary" />,
    title: "Cloud Computing",
    desc: "Memahami layanan seperti IaaS, PaaS, dan SaaS serta implementasi cloud dalam pengelolaan data dan aplikasi.",
    delay: 0.2,
  },
  {
    id: "website",
    icon: <Monitor className="w-8 h-8 text-primary" />,
    title: "Website Development",
    desc: "Membangun website modern menggunakan HTML, CSS, JavaScript, serta framework seperti React atau Laravel.",
    delay: 0.4,
  },
  {
    id: "mikrotik",
    icon: <Wifi className="w-8 h-8 text-primary" />,
    title: "Mikrotik",
    desc: "Konfigurasi perangkat jaringan menggunakan Mikrotik RouterOS: firewall, NAT, routing, dan bandwidth management.",
    delay: 0.5,
  },
  {
    id: "cyber",
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Cyber Security",
    desc: "Mempelajari perlindungan data dan sistem, analisis serangan, teknik pengamanan jaringan, dan ethical hacking.",
    delay: 0.6,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="md:py-42 py-24 bg-[var(--background)]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col xl:flex-row items-center gap-12">
          {/* Kiri: Penjelasan */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-5/12 w-full px-4"
          >
            <h1 className="md:text-4xl text-3xl font-bold text-[var(--primary)] mb-2 pb-2 border-b-2 border-[var(--primary)] text-center md:text-left">
              Tentang Kami
            </h1>
            <h2 className="text-2xl font-semibold text-[var(--secondary)] mb-4 text-left hidden md:block">
              Sistem Informasi Jaringan dan Aplikasi
            </h2>
            <p className="text-[var(--teks)] leading-relaxed md:text-left text-center">
              Jurusan Sistem Informasi Jaringan dan Aplikasi (SIJA) Jurusan
              Sistem Informatika, Jaringan, dan Aplikasi adalah salah satu
              program pendidikan menengah kejuruan di tingkat sekolah menengah
              kejuruan (SMK) yang fokus pada pelatihan dan pembelajaran dalam
              bidang teknologi informasi, jaringan komputer, dan pengembangan
              aplikasi. Jurusan ini bertujuan untuk memberikan pengetahuan dan
              keterampilan kepada siswa dalam merancang, mengelola, dan
              memelihara sistem informasi, jaringan komputer, serta
              mengembangkan aplikasi perangkat lunak.
            </p>
          </motion.div>

          {/* Kanan: Fitur */}
          <div className="xl:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {features.map((feature, index) => {
              const offsetY =
                index % 2 === 0
                  ? "md:-translate-y-[30px]"
                  : "md:translate-y-[30px]";
              return (
                <motion.a
                  key={feature.id}
                  href={`#${feature.id}`}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: feature.delay }}
                  viewport={{ once: true }}
                  className={`group block bg-[var(--background)] hover:bg-white transition border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:scale-105 transform ${offsetY}`}
                >
                  <div className="mb-4">
                    <div className="rounded-full w-12 h-12 flex items-center justify-center bg-[var(--tertiary)] text-[var(--secondary)] group-hover:bg-[var(--secondary)] group-hover:text-white border-2 border-[var(--tertiary)] group-hover:border-[var(--secondary)] transition duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--secondary)] text-sm">
                    {feature.desc}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
