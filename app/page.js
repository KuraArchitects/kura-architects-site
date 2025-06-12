'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Page() {
useEffect(() => {
const [currentSlide1, setCurrentSlide1] = useState(0);
const [currentSlide2, setCurrentSlide2] = useState(0);
document.title = "Kura Architects | Chartered Architects";
}, []);  // ← Remove the backslash

const [currentSlide, setCurrentSlide] = useState(0);

const projectImages = [
  "/projects/project1a.jpg",
  "/projects/project1b.jpg",
  "/projects/project1c.jpg",
  "/projects/project1d.jpg",
  "/projects/project2a.jpg",
  "/projects/project2b.jpg",
  "/projects/project2c.jpg",
  "/projects/project2d.jpg"
];


const handleNext = () => {
setCurrentSlide((prev) => (prev + 1) % projectImages.length);
};

const handlePrev = () => {
setCurrentSlide((prev) => (prev - 1 + projectImages.length) % projectImages.length);
};

return ( <main className="min-h-screen bg-white text-gray-800 font-sans">

```
  {/* Header */}
  <header className="flex items-center justify-between p-6 bg-[#7994a0]">
    <Image src="/Logo.png" alt="Kura Architects" width={220} height={60} />
    <nav className="space-x-6 text-white text-lg">
      <a href="#about" className="hover:underline">About</a>
      <a href="#services" className="hover:underline">Services</a>
      <a href="#projects" className="hover:underline">Projects</a>
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
      Thoughtful | Smart | Reliable
    </motion.h1>
    <motion.p
      className="text-lg md:text-xl max-w-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      Guiding clients through every stage of their project | From strategic brief to handover | With clarity, rigour and attention to detail.
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
  ...

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

  {/* Contact Section */}
  ...

  {/* Footer */}
  ...
</main>
```

);
}
