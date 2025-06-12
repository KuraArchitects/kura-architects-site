
'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Page() {
  useEffect(() => {
    document.title = "Kura Architects | Chartered Architects";
  }, []);

  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">

      {/* Header */}
      <header className="p-6 bg-[#7994a0] text-white">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <Image src="/Logo.png" alt="Kura Architects" width={366} height={100} />
          <nav className="mt-4 sm:mt-0 space-x-6 text-lg text-center sm:text-right">
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-[85vh] flex flex-col justify-center items-center bg-gray-100 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 flex flex-wrap justify-center gap-x-3"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 1 // Adjust delay between words
              }
            }
          }}
        >
          {["Thoughtful", "|", "Smart", "|", "Reliable"].map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
          className="text-lg md:text-xl max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Guiding clients through every stage of their project, from strategic brief to handover, with clarity, rigour and attention to detail.
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
            Kura Architects is a studio focused on thoughtful, value-driven design. We specialise in designing residential, workplace, education and community spaces that add value for their users, whilst guiding clients through every RIBA stage. Whether it's a contemporary extension, listed refurbishment, or workspace retrofit, we bring clarity, cost-awareness and care to every step.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Planning Applications",
              desc: "We prepare drawings, planning statements and coordinate specialist input to secure approvals — including conservation and listed consents."
            },
            {
              title: "Technical Drawings",
              desc: "We produce accurate, coordinated construction drawings and 3D models to support procurement, costing and on-site delivery."
            },
            {
              title: "Contract Administration",
              desc: "We manage the contract between you and the builder, chair meetings, assess progress, and issue certificates with rigour and fairness."
            },
            {
              title: "Principal Designer Duties",
              desc: "As RIBA Registered Principal Designers, we support you to fulfil your statutory duties as Client for CDM 2015 and the Building Safety Act 2022."
            },
            {
              title: "Extensions & Refurbishments",
              desc: "We design elegant, cost-effective alterations that maximise space, daylight and function while respecting context and budget."
            },
            {
              title: "Listed Building Works",
              desc: "We navigate heritage constraints sensitively — preparing Heritage Statements, liaising with officers and safeguarding significance."
            }
          ].map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-md rounded-2xl p-6 text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-16 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-10">Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Project 1: Sir Harry's */}
            <div className="shadow-md rounded-xl overflow-hidden">
              <div className="relative group bg-gray-200">
                <Image
                  src={["Projects/Project1a.jpg", "/Projects/Project1b.jpg", "/Projects/Project1c.jpg", "/Projects/Project1d.jpg"][currentSlide1]}
                  alt="Sir Harry's"
                  layout="intrinsic"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => setCurrentSlide1((prev) => (prev - 1 + 4) % 4)} className="text-white bg-black bg-opacity-40 hover:bg-opacity-70 p-2 rounded-full">❮</button>
                  <button onClick={() => setCurrentSlide1((prev) => (prev + 1) % 4)} className="text-white bg-black bg-opacity-40 hover:bg-opacity-70 p-2 rounded-full">❯</button>
                </div>
              </div>
              <div className="p-4 text-left">
                <h3 className="text-xl font-medium mb-2">Sir Harry's</h3>
                <p className="text-sm text-gray-600">...</p>
              </div>
            </div>
  <div className="p-4 text-left">
    <h3 className="text-xl font-medium mb-2">Sir Harry's</h3>
    <p className="text-sm text-gray-600">...</p>
  </div>
</div>
            
              <div className="p-4 text-left">
                <h3 className="text-xl font-medium mb-2">Sir Harry's</h3>
                <p className="text-sm text-gray-600">
                  A sensitive contemporary extension to a listed building in leafy Edgbaston, providing improved space for kitchen, dining and living.
                </p>
              </div>
            </div>

            {/* Project 2: The Old Coach House */}
            <div className="shadow-md rounded-xl overflow-hidden">
              <div className="relative group">
                <Image
                  src={["Projects/Project2a.jpg", "/Projects/Project2b.jpg", "/Projects/Project2c.jpg", "/Projects/Project2d.jpg"][currentSlide2]}
                  alt="The Old Coach House"
                  layout="intrinsic"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => setCurrentSlide2((prev) => (prev - 1 + 4) % 4)} className="text-white bg-black bg-opacity-40 hover:bg-opacity-70 p-2 rounded-full">❮</button>
                  <button onClick={() => setCurrentSlide2((prev) => (prev + 1) % 4)} className="text-white bg-black bg-opacity-40 hover:bg-opacity-70 p-2 rounded-full">❯</button>
                </div>
              </div>
              <div className="p-4 text-left">
                <h3 className="text-xl font-medium mb-2">The Old Coach House</h3>
                <p className="text-sm text-gray-600">
                  A complete refurbishment and extension to an existing coach house. The design maximises light and space, rearranging the site layout to optimise flow and function.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-16 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
          <p className="text-lg">Email: <a href="mailto:mail@kura-architects.co.uk" className="text-[#7994a0] underline">mail@kura-architects.co.uk</a></p>
          <p className="text-lg">Phone: <a href="tel:+447811331210" className="text-[#7994a0] underline">+44 (0)78 11 33 12 10</a></p>
          <p className="text-lg">Studio Address: Rowans | Wellington Road | B15 2ES</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-[#7994a0] text-white text-center text-sm">
        &copy; {new Date().getFullYear()} Kura Architects Ltd. All rights reserved.
      </footer>
    </main>
  );
}
