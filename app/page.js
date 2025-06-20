'use client';

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  useEffect(() => {
    document.title = "Kura Architects | Chartered Architects";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 font-sans">

      {/* Header */}
      <header className="p-6 bg-[#7994a0] text-white">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <Image src="/Logo.png" alt="Kura Architects" width={366} height={100} />
          <nav className="mt-4 sm:mt-0 space-x-4 text-lg text-center sm:text-right">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/architecture" className="hover:underline">Architecture</Link>
            <Link href="/developing" className="hover:underline">Developing</Link>
            <Link href="/principal-designer" className="hover:underline">Principal Designer</Link>
            <Link href="/projects" className="hover:underline">Projects</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow flex items-center justify-center bg-gray-100 text-center">
        <div>
          <motion.div
            className="text-4xl md:text-6xl font-bold mb-4 flex flex-wrap justify-center gap-x-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 1.2,
                },
              },
            }}
          >
            {["Thoughtful", "Smart", "Reliable"].map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
                transition={{ duration: 1.8 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.6, duration: 1 }}
          >
            Guiding clients through every stage of their project, from strategic brief to handover, with clarity, rigour and attention to detail.
          </motion.p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto p-6 bg-[#7994a0] text-white text-center text-sm">
        &copy; {new Date().getFullYear()} Kura Architects Ltd. All rights reserved.
      </footer>
    </div>
  );
}