"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount } = useCart();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <motion.nav
        layout
        className={`pointer-events-auto flex items-center justify-between transition-colors duration-500 overflow-hidden ${
          isScrolled 
            ? "w-full max-w-4xl bg-[#0a0a0c]/80 backdrop-blur-2xl border border-white/[0.08] rounded-full py-3 px-6 md:px-8 shadow-[0_16px_40px_rgba(0,0,0,0.5)]" 
            : "w-full max-w-7xl bg-transparent border border-transparent py-4 px-2 md:px-6"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div layout className="flex-shrink-0">
          <Link href="/" className="text-[rgba(255,255,255,0.92)] font-semibold text-base tracking-[0.15em] uppercase">
            NOVA
          </Link>
        </motion.div>
        
        <motion.div layout className="hidden md:flex items-center space-x-8 text-xs font-medium text-[rgba(255,255,255,0.60)] tracking-wide">
          <Link href="/overview" className="hover:text-white transition-colors">Overview</Link>
          <Link href="/technology" className="hover:text-white transition-colors">Technology</Link>
          <Link href="/craftsmanship" className="hover:text-white transition-colors">Craftsmanship</Link>
          <Link href="/specs" className="hover:text-white transition-colors">Specs</Link>
          <Link href="/buy" className="hover:text-white transition-colors">Buy</Link>
        </motion.div>

        <motion.div layout className="flex items-center space-x-5 md:space-x-6 flex-shrink-0">
          <Link href="/cart" className="relative text-[rgba(255,255,255,0.60)] hover:text-white transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-white text-black text-[9px] font-bold h-3.5 w-3.5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <Link href="/buy" className={`hidden md:flex relative px-4 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-semibold text-white transition-all duration-300 ${isScrolled ? 'bg-white/10 hover:bg-white/20 border border-white/10' : 'bg-transparent border border-white/20 hover:bg-white/10'}`}>
            Buy Now
          </Link>
        </motion.div>
      </motion.nav>
    </div>
  );
}
