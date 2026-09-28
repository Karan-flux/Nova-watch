"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import WatchCanvas from "@/components/WatchCanvas";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Section 1: Hero (0% - 18%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.10, 0.15, 0.18], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.18], [0, -40]);

  // Section 2: Explosion (18% - 32%)
  const opacity2 = useTransform(scrollYProgress, [0.18, 0.22, 0.28, 0.32], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.18, 0.22, 0.32], [30, 0, -30]);

  // Section 3: Exploded View Labels (32% - 48%)
  const opacity3 = useTransform(scrollYProgress, [0.32, 0.36, 0.44, 0.48], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.32, 0.36, 0.48], [20, 0, -20]);

  // Section 4: Material Story (48% - 68%)
  const opacity4 = useTransform(scrollYProgress, [0.48, 0.52, 0.64, 0.68], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.48, 0.54, 0.68], [30, 0, -30]);

  // Section 5: Movement (68% - 85%)
  const opacity5 = useTransform(scrollYProgress, [0.68, 0.72, 0.81, 0.85], [0, 1, 1, 0]);
  const y5 = useTransform(scrollYProgress, [0.68, 0.74, 0.85], [30, 0, -30]);

  // Section 6: Reassembly (85% - 100%)
  const opacity6 = useTransform(scrollYProgress, [0.85, 0.90, 0.95, 1], [0, 1, 1, 1]);
  const y6 = useTransform(scrollYProgress, [0.85, 0.95, 1], [40, 0, 0]);

  return (
    <>
    <main className="relative w-full" style={{ height: "600vh" }}>
      {/* Sticky Canvas Container */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#050505]">
        {/* Extremely subtle radial gradient background to simulate rim light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0A0A0C] via-[#050505] to-[#050505] opacity-80 pointer-events-none" />
        
        {/* Render Canvas */}
        <WatchCanvas />

        {/* Text Overlays - Fixed within the viewport */}
        <div className="absolute inset-0 pointer-events-none">
          
          {/* Section 1: Hero */}
          <motion.div 
            style={{ opacity: opacity1, y: y1 }}
            className="absolute top-[12vh] md:top-[15vh] w-full flex flex-col items-center text-center px-4"
          >
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter mb-2 text-[rgba(255,255,255,0.92)] leading-none">
              NOVA WATCH
            </h1>
            <p className="text-xl md:text-3xl font-medium text-[rgba(255,255,255,0.60)] tracking-tight mb-4">
              Time, perfected.
            </p>
          </motion.div>

          {/* Section 2: Engineering Reveal */}
          <motion.div 
            style={{ opacity: opacity2, y: y2 }}
            className="absolute top-[25%] left-[5%] md:left-[10%] max-w-xl px-4"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-4 text-[rgba(255,255,255,0.92)] leading-tight text-balance">
              PRECISION,<br className="hidden md:block"/> REDEFINED.
            </h2>
            <div className="space-y-4 text-[rgba(255,255,255,0.60)] text-lg md:text-xl font-medium leading-relaxed max-w-md">
              <p>Every component exists for a reason.</p>
            </div>
          </motion.div>

          {/* Section 3: Exploded View Labels */}
          <motion.div 
            style={{ opacity: opacity3, y: y3 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Left Side Labels */}
            <div className="absolute top-[25%] left-[5%] md:left-[15%] flex items-center gap-3">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-white/50 font-medium">SAPPHIRE CRYSTAL</span>
              <div className="hidden md:block w-12 lg:w-20 h-[1px] bg-white/20"></div>
            </div>
            
            <div className="absolute top-[45%] left-[5%] md:left-[10%] flex items-center gap-3">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-white/50 font-medium">DIAL & HANDS</span>
              <div className="hidden md:block w-10 lg:w-16 h-[1px] bg-white/20"></div>
            </div>

            <div className="absolute top-[65%] left-[5%] md:left-[18%] flex items-center gap-3">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-white/50 font-medium">MOVEMENT</span>
              <div className="hidden md:block w-16 lg:w-24 h-[1px] bg-white/20"></div>
            </div>

            {/* Right Side Labels */}
            <div className="absolute top-[35%] right-[5%] md:right-[15%] flex items-center gap-3">
              <div className="hidden md:block w-12 lg:w-16 h-[1px] bg-white/20"></div>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-white/50 font-medium">PRECISION CASE</span>
            </div>

            <div className="absolute top-[55%] right-[5%] md:right-[10%] flex items-center gap-3">
              <div className="hidden md:block w-8 lg:w-12 h-[1px] bg-white/20"></div>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-white/50 font-medium">CROWN</span>
            </div>

            <div className="absolute top-[75%] right-[5%] md:right-[18%] flex items-center gap-3">
              <div className="hidden md:block w-12 lg:w-20 h-[1px] bg-white/20"></div>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-white/50 font-medium">CASEBACK & STRAP</span>
            </div>
          </motion.div>

          {/* Section 4: Material Story */}
          <motion.div 
            style={{ opacity: opacity4, y: y4 }}
            className="absolute top-[40%] right-[5%] md:right-[10%] max-w-xl text-right px-4 flex flex-col items-end"
          >
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-4 text-[rgba(255,255,255,0.92)] leading-tight text-balance">
              CRAFTED<br className="hidden md:block"/> WITH PURPOSE.
            </h2>
          </motion.div>

          {/* Section 5: Movement */}
          <motion.div 
            style={{ opacity: opacity5, y: y5 }}
            className="absolute bottom-[20%] left-[5%] md:left-[10%] max-w-xl px-4"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-4 text-[rgba(255,255,255,0.92)] leading-tight text-balance">
              THE HEART<br className="hidden md:block"/> OF EVERY SECOND.
            </h2>
            <div className="space-y-4 text-[rgba(255,255,255,0.60)] text-lg md:text-xl font-medium leading-relaxed max-w-md">
              <p>Precision engineering, refined to the smallest detail.</p>
            </div>
          </motion.div>

          {/* Section 6: Reassembly & CTA */}
          <motion.div 
            style={{ opacity: opacity6, y: y6 }}
            className="absolute bottom-[10vh] md:bottom-[15vh] w-full flex flex-col items-center text-center pointer-events-auto px-4"
          >
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-4 text-[rgba(255,255,255,0.92)] leading-tight text-balance">
              EVERY SECOND.<br className="hidden md:block"/> ELEVATED.
            </h2>
            <p className="text-lg md:text-2xl font-medium text-[rgba(255,255,255,0.60)] mb-10 tracking-tight">
              Nova Watch. Designed for precision, crafted for presence.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="px-8 py-3 md:py-4 rounded-full bg-[rgba(255,255,255,0.92)] text-[#050505] font-semibold text-base md:text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                Experience Nova Watch
              </button>
              <Link href="/specs" className="text-[rgba(255,255,255,0.60)] hover:text-white transition-colors text-lg md:text-xl font-medium group flex items-center gap-2">
                See full specs 
                <span className="group-hover:translate-x-1 transition-transform">›</span>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </main>

    {/* Render the rest of the homepage content below the 600vh sticky container */}
    <HomeContent />
    </>
  );
}
