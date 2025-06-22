'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-[#7994a0] text-white">
        <div className="text-2xl font-semibold mb-4 md:mb-0">Kura Architects</div>
        <nav className="space-x-4 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/architecture" className="hover:underline">Architecture</Link>
          <Link href="/developing" className="hover:underline">Developing</Link>
          <Link href="/principal-designer" className="hover:underline">Principal Designer</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </header>

      {/* Content */}
      <main className="flex-grow px-6 py-16 max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
        <p className="mb-10 text-gray-600">
          We’d love to hear from you. Please get in touch through the form below or get in touch directly.
        </p>

        {!submitted ? (
          <form className="space-y-6 text-left" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input type="text" name="name" required className="w-full border border-gray-300 rounded px-3 py-2" onChange={handleChange} />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" name="email" required className="w-full border border-gray-300 rounded px-3 py-2" onChange={handleChange} />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea name="message" rows="4" required className="w-full border border-gray-300 rounded px-3 py-2" onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="bg-[#7994a0] text-white px-6 py-2 rounded hover:bg-[#67818d]">
              Send Message
            </button>
          </form>
        ) : (
          <p className="text-green-600 text-lg">Thank you! Your message has been sent.</p>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto p-6 bg-[#7994a0] text-white text-center text-sm">
        &copy; {new Date().getFullYear()} Kura Architects Ltd. All rights reserved.
      </footer>
    </div>
  );
}
