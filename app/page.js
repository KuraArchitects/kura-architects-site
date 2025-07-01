'use client';

import { motion } from 'framer-motion';

export default function Page() {
  return (
        <section className="flex-grow flex flex-col justify-center items-center text-center px-6 py-16 bg-gray-100 text-gray-800">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 flex flex-wrap justify-center gap-x-6"
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
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 1 }}
          >
            Guiding clients through every stage of their project with clarity, rigour and attention to detail.
          </motion.p>    
      </section>
  );
}
