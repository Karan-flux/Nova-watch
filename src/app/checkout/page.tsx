"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart, cartTotal } = useCart();
  const [status, setStatus] = useState<"idle" | "processing" | "success">("idle");

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("processing");
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  if (cart.length === 0 && status !== "success") {
    return (
      <main className="min-h-screen bg-[#050505] text-[#f5f5f7] pt-32 pb-16 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">Your bag is empty</h1>
        <p className="text-[#86868b] mb-8">Add items to your cart to proceed to checkout.</p>
        <Link href="/shop" className="px-8 py-4 rounded-full bg-[#f5f5f7] text-[#1d1d1f] font-semibold text-lg hover:scale-105 transition-transform">
          Return to Shop
        </Link>
      </main>
    );
  }

  if (status === "success") {
    return (
      <main className="min-h-screen bg-[#050505] text-[#f5f5f7] pt-32 pb-16 px-6 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-8">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Order Confirmed</h1>
        <p className="text-xl text-[#86868b] mb-8 max-w-lg">
          Thank you for choosing Nova. Your timepiece is being prepared for dispatch.
        </p>
        <Link href="/" className="px-8 py-4 rounded-full bg-[#f5f5f7] text-[#1d1d1f] font-semibold text-lg hover:scale-105 transition-transform">
          Return to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f7] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold tracking-tighter mb-12 border-b border-white/10 pb-6">Secure Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <form onSubmit={handleCheckout} className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Shipping Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="First Name" className="bg-[#111] border border-white/10 rounded-lg p-4 w-full focus:outline-none focus:border-white transition-colors" />
                <input required placeholder="Last Name" className="bg-[#111] border border-white/10 rounded-lg p-4 w-full focus:outline-none focus:border-white transition-colors" />
              </div>
              <input required placeholder="Address" className="bg-[#111] border border-white/10 rounded-lg p-4 w-full focus:outline-none focus:border-white transition-colors" />
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="City" className="bg-[#111] border border-white/10 rounded-lg p-4 w-full focus:outline-none focus:border-white transition-colors" />
                <input required placeholder="Postal Code" className="bg-[#111] border border-white/10 rounded-lg p-4 w-full focus:outline-none focus:border-white transition-colors" />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Payment Details</h2>
              <input required placeholder="Card Number" className="bg-[#111] border border-white/10 rounded-lg p-4 w-full focus:outline-none focus:border-white transition-colors" />
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="MM/YY" className="bg-[#111] border border-white/10 rounded-lg p-4 w-full focus:outline-none focus:border-white transition-colors" />
                <input required placeholder="CVC" type="password" maxLength={4} className="bg-[#111] border border-white/10 rounded-lg p-4 w-full focus:outline-none focus:border-white transition-colors" />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={status === "processing"}
              className="w-full py-4 rounded-full bg-[#f5f5f7] text-[#1d1d1f] font-semibold text-lg hover:scale-[1.02] transition-transform duration-300 disabled:opacity-50"
            >
              {status === "processing" ? "Processing..." : `Pay $${cartTotal.toLocaleString()}`}
            </button>
          </form>

          <div className="bg-[#111] p-8 rounded-2xl h-fit border border-white/10">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 relative rounded-md overflow-hidden bg-black/50">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-[#86868b]">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-medium">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 pt-4 flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>${cartTotal.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}