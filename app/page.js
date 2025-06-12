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
          Thoughtful   |   Smart   |   Reliable
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Guiding clients through every stage of their project, from strategic brief to handover with clarity, rigour and attention to detail.
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
            Kura Architects is a studio focused on thoughtful, value-driven design. We specialise in designing residential, workplace, education and community spaces that add value for their users, whilst guiding clients through every RIBA stage. Whether it's a contemporary home, listed refurbishment, or workspace retrofit, we bring clarity, cost-awareness and care to every step.
          </p>
        </motion.div>
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
            {[1, 2].map((idx) => (
          <div key={idx} className="shadow-md rounded-xl overflow-hidden">
          <div className="h-64 bg-gray-300 flex items-center justify-center">
           <span className="text-gray-600 text-lg">Project Image {idx}</span>
          </div>
          <div className="p-4 text-left">
          <h3 className="text-xl font-medium mb-2">Project Title {idx}</h3>
          <p className="text-sm text-gray-600">
            A short description of Project {idx}, explaining what was delivered and the value added for the client.
          </p>
          </div>
          </div>
          ))}
          </div>
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
              desc: "We manage the contract between you and the builder, chair meetings, assess progress and provide the necessary administration with rigour and fairness."
            },
            {
              title: "Principal Designer Duties",
              desc: "We provide services to support your statutory duties as Clients for CDM 2015 and the Building Safety Act 2022."
            },
            {
              title: "Residential",
              desc: "We design elegant, cost-effective residential developments that maximise space, daylight and function while respecting context and budget."
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
