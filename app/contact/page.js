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
    <main className="min-h-screen bg-white text-gray-800 font-sans">

      {/* Header */}
      <header className="p-6 bg-[#7994a0] text-white">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <Link href="/">
            <Image src="/Logo.png" alt="Kura Architects" width={366} height={100} />
          </Link>
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

      {/* Contact Info */}
      <section className="px-6 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-lg mb-2">Email: <a href="mailto:mail@kura-architects.co.uk" className="text-[#7994a0] underline">mail@kura-architects.co.uk</a></p>
          <p className="text-lg mb-2">Phone: <a href="tel:+447811331210" className="text-[#7994a0] underline">+44 (0)78 11 33 12 10</a></p>
          <p className="text-lg">Studio Address: Rowans | Wellington Road | B15 2ES</p>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-3 rounded"
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="border border-gray-300 p-3 rounded"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#7994a0] text-white py-3 px-6 rounded hover:bg-[#5f7889]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-[#7994a0] text-white text-center text-sm">
        &copy; {new Date().getFullYear()} Kura Architects Ltd. All rights reserved.
      </footer>
    </main>
  );
}