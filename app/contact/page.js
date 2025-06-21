'use client';

import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 font-sans">

      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between p-6 bg-[#7994a0] text-white">
        <div className="text-2xl font-semibold mb-4 md:mb-0">Kura Architects</div>
        <nav className="space-x-6 text-lg">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/architecture" className="hover:underline">Architecture</Link>
          <Link href="/developing" className="hover:underline">Developing</Link>
          <Link href="/principal-designer" className="hover:underline">Principal Designer</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </header>

      {/* Contact Content */}
      <main className="flex-grow px-6 py-16 text-center">
        <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
        <p className="max-w-xl mx-auto text-lg mb-10">
          We'd love to hear about your project. Please fill out the form below or get in touch directly.
        </p>

        <form className="max-w-2xl mx-auto text-left space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Name</label>
            <input type="text" id="name" className="w-full border border-gray-300 rounded-md p-3" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full border border-gray-300 rounded-md p-3" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Message</label>
            <textarea id="message" rows="5" className="w-full border border-gray-300 rounded-md p-3" required></textarea>
          </div>
          <button type="submit" className="bg-[#7994a0] text-white px-6 py-3 rounded-md hover:bg-[#5c7b8a]">
            Send Message
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="mt-auto p-6 bg-[#7994a0] text-white text-center text-sm">
        &copy; {new Date().getFullYear()} Kura Architects Ltd. All rights reserved.
      </footer>
    </div>
  );
}
