'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PrincipalDesigner() {
  return (
    <section className="bg-gray-50 text-gray-800 py-16 px-4 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative w-full h-64 md:h-96"
      >
        <Image
          src="/images/principal-designer.png"
          alt="Principal Designer"
          fill
          className="object-cover rounded-lg shadow-md"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto space-y-6 text-left mt-10"
      >
        <h1 className="text-3xl font-semibold text-center mb-2">
          Navigating Your Project with Confidence: The Principal Designer Role at Kura Architects
        </h1>
        <p className="text-lg text-gray-600">
          Embarking on a building project, whether a new home or a small development, introduces the vital requirements of the Building Safety Act. This legislation is designed to enhance safety and accountability across all construction, and for any project involving more than one contractor, it requires the appointment of a Principal Designer. At Kura Architects, we don't just understand these regulations; we actively lead your project through them, providing the clarity, control, and assurance you need.
        </p>
        <p className="text-lg text-gray-600">
          The Principal Designer role is fundamentally about proactive leadership and coordination in the design phase. It ensures that all design work is meticulously planned, managed, and monitored, guaranteeing compliance with building regulations from the very outset. Our founder, Rav Kumar, is a Registered RIBA Principal Designer, bringing exceptional qualifications and extensive experience to this crucial responsibility.
        </p>
        <h2 className="text-2xl font-semibold mt-8">How Kura Architects Leads as Your Principal Designer:</h2>
        <ul className="list-disc pl-6 space-y-4 text-lg text-gray-600">
          <li>Design &amp; Regulatory Compliance: We meticulously plan, manage, and monitor all design work, ensuring that every aspect of your project's design complies with the Building Regulations.</li>
          <li>Central Design Coordination: Acting as the central coordinator, we foster seamless cooperation among all designers involved in your project. This ensures a unified approach where information flows efficiently and design decisions are harmonised.</li>
          <li>The 'Golden Thread' of Information: We establish and maintain the 'golden thread' – a comprehensive, accurate record of your building's design and construction. This vital information is carefully managed throughout the project, ensuring transparency, traceability, and a clear history for future use and maintenance. While often discussed in relation to larger buildings, this principle of clear, accessible information is now fundamental for all projects.</li>
          <li>Competence Assurance: The Building Safety Act places a strong emphasis on the competence of everyone involved in a project. As your Principal Designer, Kura Architects demonstrably exceeds these high standards. Beyond our own proven expertise, we also guide you in assessing the competence of other professionals and contractors, a key declaration required for building control applications.</li>
          <li>Building Control Applications: We prepare and submit comprehensive applications to the regulator, including all necessary plans, competence declarations, and compliance statements, streamlining this critical process for you.</li>
          <li>Managing Project Evolution: Building projects naturally evolve. We expertly manage any 'controlled changes' that arise, ensuring they are properly recorded in a change control log and that any affected documents are revised and re-approved, maintaining full compliance throughout.</li>
          <li>Information Handover: Upon completion, we ensure all necessary 'golden thread' information is properly transferred to those responsible for the building's ongoing safety and maintenance, providing a clear record for the building's lifecycle.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8">Your Role as the Client:</h2>
        <p className="text-lg text-gray-600">
          As the property owner, you are legally considered the 'client' for your project, carrying a fundamental responsibility to ensure compliance with building regulations. However, if your project is for personal use rather than business, you are classified as a 'domestic client'. This classification allows many of these legal duties to be formally transferred to competent professionals like Kura Architects as your Principal Designer. Our role is to absorb the complexity, allowing you to focus on your vision while we handle the intricate compliance requirements.
        </p>
        <p className="text-lg text-gray-600">
          At Kura Architects, we don't just design exceptional spaces; we provide the structured, knowledgeable leadership that ensures your project's compliance and safety from its earliest stages, giving you complete peace of mind. Our expertise means you can proceed with absolute confidence, knowing your project is in highly competent and regulated hands.
        </p>
      </motion.div>
    </section>
  )
}