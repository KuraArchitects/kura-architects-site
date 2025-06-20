'use client';

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact | Kura Architects";
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

      {/* Contact Section */}
      <main className="flex-grow flex items-center justify-center bg-gray-100 px-4 py-16">
        <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-md">
          <motion.h1
            className="text-3xl font-semibold mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Get in Touch
          </motion.h1>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full border p-3 rounded-md" />
            <input type="email" placeholder="Email" className="w-full border p-3 rounded-md" />
            <textarea placeholder="Message" rows="5" className="w-full border p-3 rounded-md"></textarea>
            <button type="submit" className="w-full bg-[#7994a0] text-white p-3 rounded-md hover:bg-[#5d7886] transition">Send Message</button>
          </form>
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>Email: <a href="mailto:mail@kura-architects.co.uk" className="text-[#7994a0] underline">mail@kura-architects.co.uk</a></p>
            <p>Phone: <a href="tel:+447811331210" className="text-[#7994a0] underline">+44 (0)78 11 33 12 10</a></p>
            <p>Studio Address: Rowans  |  Wellington Road  |  B15 2ES</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto p-6 bg-[#7994a0] text-white text-center text-sm">
        &copy; {new Date().getFullYear()} Kura Architects Ltd. All rights reserved.
      </footer>
    </div>
  );
}