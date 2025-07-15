'use client'

import { motion } from 'framer-motion'
// Note: The next/image import is no longer needed as we are using inline SVGs and divs.
// import Image from 'next/image'

// --- SVG Icons as React Components ---
// Using components for icons makes them reusable and easier to manage.

const IconDesignQuality = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
);

const IconBuildability = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
);

const IconViability = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
);

const IconPlanning = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m-6 10h6"></path></svg>
);

const IconDelivery = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
);

const IconRegulatory = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
);

const IconProcurement = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
);

const IconFirstTimeDev = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
);

const IconEstablishedOrg = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
);


// --- Infographic Components ---
// Each infographic is now its own component for clarity.

const InfographicOne = () => {
  const brandColors = {
    iconWrapperBg: '#eef2f3', // Lighter shade of brand color
    iconColor: '#4a5960', // Darker shade
  };

  return (
    <div className="w-full bg-white p-6">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="inline-flex items-center justify-center rounded-full p-4 mb-4" style={{ backgroundColor: brandColors.iconWrapperBg, color: brandColors.iconColor }}>
            <IconDesignQuality />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Design Quality</h3>
          <p className="font-semibold" style={{color: '#7994a0'}}>Value &bull; Efficiency &bull; Aesthetics</p>
        </div>
        <div>
          <div className="inline-flex items-center justify-center rounded-full p-4 mb-4" style={{ backgroundColor: brandColors.iconWrapperBg, color: brandColors.iconColor }}>
            <IconBuildability />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Buildability</h3>
          <p className="font-semibold" style={{color: '#7994a0'}}>Practical &bull; Compliant &bull; On-Site</p>
        </div>
        <div>
          <div className="inline-flex items-center justify-center rounded-full p-4 mb-4" style={{ backgroundColor: brandColors.iconWrapperBg, color: brandColors.iconColor }}>
            <IconViability />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Commercial Viability</h3>
          <p className="font-semibold" style={{color: '#7994a0'}}>ROI &bull; Risk Mitigation &bull; Profitability</p>
        </div>
      </div>
    </div>
  );
};

const InfographicTwo = () => {
    const brandColors = {
        iconWrapperBg: '#eef2f3',
        iconColor: '#4a5960',
    };
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10 text-center p-6">
            <div className="flex flex-col items-center">
                <div className="inline-flex items-center justify-center rounded-full p-4 mb-4" style={{ backgroundColor: brandColors.iconWrapperBg, color: brandColors.iconColor }}>
                    <IconPlanning />
                </div>
                <h4 className="font-bold text-gray-800 text-lg">Planning Risk</h4>
            </div>
            <div className="flex flex-col items-center">
                <div className="inline-flex items-center justify-center rounded-full p-4 mb-4" style={{ backgroundColor: brandColors.iconWrapperBg, color: brandColors.iconColor }}>
                    <IconDelivery />
                </div>
                <h4 className="font-bold text-gray-800 text-lg">Buildability & Delivery</h4>
            </div>
            <div className="flex flex-col items-center">
                <div className="inline-flex items-center justify-center rounded-full p-4 mb-4" style={{ backgroundColor: brandColors.iconWrapperBg, color: brandColors.iconColor }}>
                    <IconRegulatory />
                </div>
                <h4 className="font-bold text-gray-800 text-lg">Regulatory & Statutory</h4>
            </div>
            <div className="flex flex-col items-center">
                <div className="inline-flex items-center justify-center rounded-full p-4 mb-4" style={{ backgroundColor: brandColors.iconWrapperBg, color: brandColors.iconColor }}>
                    <IconProcurement />
                </div>
                <h4 className="font-bold text-gray-800 text-lg">Programme & Procurement</h4>
            </div>
        </div>
    );
};

const InfographicThree = () => {
    const brandColors = {
        iconWrapperBg: '#eef2f3',
        iconColor: '#4a5960',
        tagBg: '#d9e2e6', // Mid-tone for tags
        tagColor: '#4a5960'
    };
    return (
        <div className="grid md:grid-cols-2 gap-12 items-center w-full p-6">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Serving a Broad Spectrum of Clients</h3>
                <div className="flex justify-around items-center">
                    <div className="flex flex-col items-center gap-3">
                        <div className="inline-flex items-center justify-center rounded-full p-4" style={{ backgroundColor: brandColors.iconWrapperBg, color: brandColors.iconColor }}>
                           <IconFirstTimeDev />
                        </div>
                        <p className="font-semibold text-gray-700 text-lg">First-Time Developers</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="inline-flex items-center justify-center rounded-full p-4" style={{ backgroundColor: brandColors.iconWrapperBg, color: brandColors.iconColor }}>
                             <IconEstablishedOrg />
                        </div>
                        <p className="font-semibold text-gray-700 text-lg">Established Organisations</p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Proven Across Diverse Schemes</h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {['Residential', 'Mixed-Use', 'Commercial', 'Inner-City Sites', 'Constrained Plots', 'Phased Projects'].map(tag => (
                        <span key={tag} className="text-sm font-medium px-3 py-1.5 rounded-full" style={{ backgroundColor: brandColors.tagBg, color: brandColors.tagColor }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};


// --- Main Component ---
export default function Developing() {
  return (
    <section className="bg-gray-50 text-gray-800 py-16 px-4 md:px-12 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto space-y-6"
      >
        <h1 className="text-3xl font-semibold text-center mb-2">Working with Developers</h1>
        <p className="text-lg text-gray-600 italic">
          “The development appraisal is not just a financial tool — it is a design brief.”
        </p>
      </motion.div>

      {/* --- Infographic 1 replaces the first image --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto w-full bg-white rounded-lg shadow-md overflow-hidden"
      >
        <InfographicOne />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto space-y-6"
      > 
        <p className="text-lg text-gray-600">
          At Kura Architects, we recognise that successful development relies on the alignment of design quality, buildability, and commercial viability.
        </p>
        {/* Other text paragraphs from your original file... */}
        <p className="text-lg text-gray-600"> 
          Our architectural approach is grounded in a deep understanding of how thoughtful design can unlock value — not only in financial terms, but through planning success, efficient delivery, and long-term adaptability.
        </p>
        <p className="text-lg text-gray-600">  
          We work alongside developers to ensure that design is not treated as a cost centre, but as a strategic tool for maximising return and minimising risk.
        </p>
      </motion.div>

      {/* --- Infographic 2 replaces the second image --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto w-full bg-white rounded-lg shadow-md overflow-hidden"
      >
        <InfographicTwo />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto space-y-6"
      >
        <p className="text-lg text-gray-600">
          Our experience spans residential, mixed-use and commercial schemes — including inner-city sites, constrained plots and phased projects. In each case, we bring a disciplined approach to design that accounts for the pressures developers face:
        </p>
        <p className="text-lg text-gray-600">
          <strong>Development Appraisals and GDV Assumptions, Planning Risk, Buildability, Regulatory Considerations,</strong> and <strong>Programme Awareness</strong> are all areas where our expertise protects your investment.
        </p>
      </motion.div>

      {/* --- Infographic 3 replaces the third image --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto w-full bg-white rounded-lg shadow-md overflow-hidden"
      >
        <InfographicThree />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 1.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto space-y-6"
      >
        <p className="text-lg text-gray-600">
          We work with a broad spectrum of developer clients — from those exploring their first site acquisition to established organisations delivering complex urban infill or phased projects. What they share is an interest in thoughtful design that supports the viability, delivery and long-term performance of their assets.
        </p>
      </motion.div>
    </section>
  )
}
