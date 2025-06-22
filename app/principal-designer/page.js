'use client';

import Header from '../components/Header';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />
      <section className="flex-grow flex items-center justify-center text-center px-6 py-16">
        <h1 className="text-2xl md:text-3xl font-semibold">
          This section is currently being updated. Please check back soon or <a href="/contact" className="text-[#7994a0] underline">get in touch</a> for more information.
        </h1>
      </section>
      <footer className="mt-auto p-6 bg-[#7994a0] text-white text-center text-sm">
        &copy; {new Date().getFullYear()} Kura Architects Ltd. All rights reserved.
      </footer>
    </div>
  );
}