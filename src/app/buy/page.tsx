"use client";

import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Buy() {
  const { addToCart } = useCart();
  const [status, setStatus] = useState<"idle" | "adding" | "added">("idle");
  const router = useRouter();

  const handleBuy = () => {
    setStatus("adding");
    addToCart({
      id: "nova-v1-titanium",
      name: "Nova V1 Titanium",
      price: "$2,400",
      image: "/watches/ezgif-frame-001.jpg",
      quantity: 1
    });
    setTimeout(() => {
      setStatus("added");
      router.push("/cart");
    }, 800);
  };

  return (
    <main className="min-h-screen pt-32 pb-16 px-6 flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-md w-full bg-[#1d1d1f]/40 backdrop-blur-md p-10 md:p-12 rounded-3xl border border-white/5 hover:border-white/10 transition-colors text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 text-[#f5f5f7]">
          Nova V1 Titanium
        </h1>
        <p className="text-[#86868b] font-medium mb-10 text-lg">Flagship Automatic Tourbillon</p>
        
        <div className="text-5xl font-light text-[#f5f5f7] mb-10 tracking-tight">
          $2,400
        </div>

        <div className="space-y-6 mb-10 text-left">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <span className="text-[#86868b] font-medium">Strap Material</span>
            <div className="flex gap-4">
              <button className="w-8 h-8 rounded-full bg-[#1d1d1f] border-2 border-[#f5f5f7] shadow-[0_0_10px_rgba(255,255,255,0.1)]" aria-label="Rubber" title="Rubber" />
              <button className="w-8 h-8 rounded-full bg-[#444] border border-white/20 hover:scale-105 transition-transform" aria-label="Titanium" title="Titanium" />
            </div>
          </div>
          <div className="flex items-center justify-between border-b border-white/5 pb-4 font-medium">
            <span className="text-[#86868b]">Engraving</span>
            <span className="text-[#00D6FF] cursor-pointer hover:text-[#f5f5f7] transition-colors">Add</span>
          </div>
        </div>

        <button 
          onClick={handleBuy}
          disabled={status !== "idle"}
          className="w-full py-5 rounded-full bg-[#f5f5f7] text-[#1d1d1f] font-semibold text-xl hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(255,255,255,0.1)] disabled:scale-100 disabled:opacity-80"
        >
          {status === "idle" ? "Add to Bag" : status === "adding" ? "Adding..." : "Added!"}
        </button>
        
        <p className="mt-8 text-sm font-medium text-[#86868b]/60">
          Free shipping and returns. Ships in 2-3 business days.
        </p>
      </motion.div>
    </main>
  );
}
