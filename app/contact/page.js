'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
      
      {/* Contact Section */}
      <section className="flex-grow px-6 py-16 bg-gray-50 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
          <p className="max-w-xl mx-auto text-lg mb-10">
            For all enquiries, project consultations or just to say hello — please complete the form below or email us at <a href="mailto:mail@kura-architects.co.uk" className="text-blue-600">mail@kura-architects.co.uk</a>.
          </p>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 text-left">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 h-32"
            />
            <button
              type="submit"
              className="bg-[#7994a0] text-white px-6 py-2 rounded hover:bg-[#5e7681]"
            >
              Send Message
            </button>
            {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
          </form>
        </motion.div>
      </section>

      </main>
  );
}
