'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutRav() {
  return (
    <section className="flex-grow bg-gray-50 text-gray-800 py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative w-full max-w-xs mx-auto aspect-square md:max-w-full md:aspect-auto md:h-[340px]"
        >
          <Image
            src="/images/rav-portrait.jpg"
            alt="Rav Kumar"
            fill
            className="object-cover rounded-lg shadow-md"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6 text-left"
        >
          <h1 className="text-3xl font-semibold text-center md:text-left mb-2">
            About Rav Kumar
          </h1>
          <p className="text-gray-600 italic">
            Thoughtful. Smart. Reliable.
          </p>
          <p className="text-gray-600">
            Rav Kumar is an architect who leads with clarity and delivers with conviction.  Over a 25-year career, he’s shaped everything from homes and heritage refurbishments to city-centre developments and public buildings.  As well a striving in technical competence and design quality — he aims to always make the process feel grounded, methodical, and human.
          </p>
          <p className="text-gray-600">
            Before founding <strong>Kura Architects</strong>, Rav spent over a decade as a Director at a national practice, where he led large project teams and contributed to the systems that underpinned delivery at scale.  Today, he brings that same rigour to every project he takes on—just with closer proximity to the details that matter.
          </p>
          <p className="text-gray-600">
            His clients come from varied backgrounds: homeowners with first-time ambitions, developers with programme pressures, or organisations with legacy constraints.  Rav understands each of these perspectives because he’s worked from all sides—including as a developer himself.  His own experiences navigating planning, funding, and construction timelines sharpen the empathy he brings to the design table.
          </p>
          <p className="text-gray-600">
            He is a <strong>RIBA Chartered Architect</strong> and a registered <strong>Principal Designer</strong> under the Building Safety Act. But beyond titles and regulations, Rav believes professionalism means accountability without pretence.  His reputation has been built not just on knowledge, but on consistency—on doing the right thing, even when no one is looking.
          </p>
          <p className="text-gray-600">
            Those who work with Rav often describe him as focused under pressure, clear in communication, and quietly relentless in getting things right.  He doesn’t overstate.  He doesn’t overpromise.  He simply ensures the work stands up—to scrutiny, to use, and to time.
          </p>
          <blockquote className="mt-6 border-l-4 pl-4 text-gray-700 italic strong">
            Good architecture with a process clients can trust,          
            <br />
            and buildings that endure.
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
