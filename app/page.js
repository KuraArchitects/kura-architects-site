'use client';

import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans">

          {/* Hero Section */}
        <section className="h-[85vh] flex flex-col justify-center items-center bg-gray-100 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 flex flex-wrap justify-center gap-x-3"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.8,
                },
              },
            }}
          >
            {['Thoughtful','Smart','Reliable'].map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ duration: 1.2 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.
          h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 1 }}
          >
            Guiding clients through every stage of their project with clarity, rigour and attention to detail.
          </motion.p>    
      </section>

    </div>
  );
}
