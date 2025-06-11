'use client';

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Page() {
  useEffect(() => {
    document.title = "Kura Architects | Chartered Architectural Practice";
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-[#7994a0]">
        <Image src="/Logo.png" alt="Kura Architects" width={220} height={60} />
        <nav className="space-x-6 text-white text-lg">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-[85vh] flex flex-col justify-center items-center bg-gray-100 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Thoughtful, Cost-Smart Architecture
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Guiding clients through every RIBA stage — from strategic brief to handover — with clarity, rigour and attention to detail.
        </motion.p>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-16 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-6">About Kura Architects</h2>
          <p className="max-w-3xl mx-auto text-lg">
            We are a RIBA-chartered practice working on homes, workplaces and community spaces up to £500k. We secure planning, prepare technical design, manage consultants and act as Principal Designer. We make design and delivery clear and achievable.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "Planning Applications",
            "Technical Drawings & BIM",
            "Contract Administration",
            "Principal Designer Duties",
            "Extensions & Refurbishments",
            "Listed Building Works"
          ].map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-md rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-medium">{service}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-16 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
          <p className="text-lg">Email: <a href="mailto:hello@kura-architects.co.uk" className="text-[#7994a0] underline">hello@kura-architects.co.uk</a></p>
          <p className="text-lg">Phone: <a href="tel:+447000000000" className="text-[#7994a0] underline">+44 (0)7000 000000</a></p>
          <p className="text-lg">Based in the UK – serving clients nationwide</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-[#7994a0] text-white text-center text-sm">
        &copy; {new Date().getFullYear()} Kura Architects. All rights reserved.
      </footer>
    </main>
  );
}