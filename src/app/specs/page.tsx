"use client";

import { motion } from "framer-motion";

export default function Specs() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-6 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-20 text-[#f5f5f7] bg-clip-text text-center text-balance">
          Technical Specifications
        </h1>

        <div className="space-y-16">
          {/* Movement Section */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row gap-8">
            <h3 className="text-3xl font-semibold text-[#f5f5f7] w-full md:w-1/3 tracking-tight">Movement</h3>
            <ul className="text-[#86868b] space-y-6 w-full md:w-2/3 text-lg font-medium">
              <li className="flex justify-between border-b border-white/5 pb-4">
                <span>Caliber</span>
                <span className="text-[#f5f5f7]">Nova Caliber V1</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-4">
                <span>Frequency</span>
                <span className="text-[#f5f5f7]">28,800 vph (4Hz)</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-4">
                <span>Complications</span>
                <span className="text-[#f5f5f7]">Multi-axis Tourbillon, Power Reserve</span>
              </li>
            </ul>
          </div>

          {/* Power Reserve Section */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row gap-8">
            <h3 className="text-3xl font-semibold text-[#f5f5f7] w-full md:w-1/3 tracking-tight">Power</h3>
            <ul className="text-[#86868b] space-y-6 w-full md:w-2/3 text-lg font-medium">
              <li className="flex justify-between border-b border-white/5 pb-4">
                <span>Power Reserve</span>
                <span className="text-[#f5f5f7]">Up to 72 hours</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-4">
                <span>Winding</span>
                <span className="text-[#f5f5f7]">Automatic via kinetic motion</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-4">
                <span>Rotor</span>
                <span className="text-[#f5f5f7]">Skeletonized tungsten</span>
              </li>
            </ul>
          </div>

          {/* Materials Section */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row gap-8">
            <h3 className="text-3xl font-semibold text-[#f5f5f7] w-full md:w-1/3 tracking-tight">Case & Materials</h3>
            <ul className="text-[#86868b] space-y-6 w-full md:w-2/3 text-lg font-medium">
              <li className="flex justify-between border-b border-white/5 pb-4">
                <span>Case Material</span>
                <span className="text-[#f5f5f7]">Grade 5 Titanium</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-4">
                <span>Crystal</span>
                <span className="text-[#f5f5f7]">Domed Sapphire with Anti-reflective coating</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-4">
                <span>Strap</span>
                <span className="text-[#f5f5f7]">FKM Rubber with deployant clasp</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
