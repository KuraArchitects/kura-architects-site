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

return ( <main className="min-h-screen bg-white text-gray-800 font-sans">

```
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
          <div className="h-64 bg-gray-200 relative group">
            <Image
              src={["/projects/project1a.jpg", "/projects/project1b.jpg", "/projects/project1c.jpg", "/projects/project1d.jpg"][currentSlide1]}
              alt="Sir Harry's"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => setCurrentSlide1((prev) => (prev - 1 + 4) % 4)} className="text-white bg-black bg-opacity-40 hover:bg-opacity-70 p-2 rounded-full">❮</button>
              <button onClick={() => setCurrentSlide1((prev) => (prev + 1) % 4)} className="text-white bg-black bg-opacity-40 hover:bg-opacity-70 p-2 rounded-full">❯</button>
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
          <div className="h-64 bg-gray-200 relative group">
            <Image
              src={["/projects/project2a.jpg", "/projects/project2b.jpg", "/projects/project2c.jpg", "/projects/project2d.jpg"][currentSlide2]}
              alt="The Old Coach House"
              layout="fill"
              objectFit="cover"
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

</main>