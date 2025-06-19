'use client';

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Page() {
  useEffect(() => {
    document.title = "Kura Architects | Chartered Architects";
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">

      {/* Header */}
      <header className="p-6 bg-[#7994a0] text-white">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <Image src="/Logo.png" alt="Kura Architects" width={366} height={100} />
          <nav className="mt-4 sm:mt-0 space-x-4 text-lg text-center sm:text-right">
            <a href="#about" className="hover:underline">About</a>
            <a href="#architecture" className="hover:underline">Architecture</a>
            <a href="#developing" className="hover:underline">Developing</a>
            <a href="#principal-designer" className="hover:underline">Principal Designer</a>
            <a href="#projects" className="hover:underline">Projects</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-[85vh] flex flex-col justify-center items-center bg-gray-100 text-center">
        <motion.div
          className="text-4xl md:text-6xl font-bold mb-4 flex flex-wrap justify-center gap-x-3"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.8,
              },
            },
          }}
        >
          {["Thoughtful", "|", "Smart", "|", "Reliable"].map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              transition={{ duration: 0.8 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
        <motion.p
          className="text-lg md:text-xl max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Guiding clients through every stage of their project, from strategic brief to handover, with clarity, rigour and attention to detail.
        </motion.p>
      </section>

      {/* Placeholder Sections */}
      <section id="about" className="px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">About</h2>
        <p className="max-w-3xl mx-auto text-lg">More information about Rav and the philosophy behind Kura Architects coming soon.</p>
      </section>

      <section id="architecture" className="px-6 py-16 text-center bg-gray-50">
        <h2 className="text-3xl font-semibold mb-4">Architecture</h2>
        <p className="max-w-3xl mx-auto text-lg">Our approach to architectural delivery across all RIBA stages.</p>
      </section>

      <section id="developing" className="px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Developing</h2>
        <p className="max-w-3xl mx-auto text-lg">How we support developers — from feasibility to funding and planning.</p>
      </section>

      <section id="principal-designer" className="px-6 py-16 text-center bg-gray-50">
        <h2 className="text-3xl font-semibold mb-4">Principal Designer</h2>
        <p className="max-w-3xl mx-auto text-lg">Our extensive experience in Building Safety Act compliance and statutory duties.</p>
      </section>

      <section id="projects" className="px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Selected Projects</h2>
        <p className="max-w-3xl mx-auto text-lg">We’ll be showcasing a range of project scales here soon.</p>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-[#7994a0] text-white text-center text-sm">
        &copy; {new Date().getFullYear()} Kura Architects Ltd. All rights reserved.
      </footer>
    </main>
  );
}