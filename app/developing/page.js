'use client';

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-[#7994a0]">
        <img src="/Logo.png" alt="Kura Architects" width={366} height={100} />
        <nav className="space-x-6 text-white text-lg">
          <a href="/about" className="hover:underline">About</a>
          <a href="/architecture" className="hover:underline">Architecture</a>
          <a href="/developing" className="hover:underline">Developing</a>
          <a href="/principal-designer" className="hover:underline">Principal Designer</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Content */}
      <section className="flex-grow flex items-center justify-center text-center px-6 py-16">
        <h1 className="text-2xl md:text-3xl font-semibold">
          This section is currently being updated. Please check back soon or get in touch for more information.
        </h1>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-[#7994a0] text-white text-center text-sm">
        &copy; {new Date().getFullYear()} Kura Architects Ltd. All rights reserved.
      </footer>
    </main>
  );
}
