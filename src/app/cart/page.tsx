"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f7] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12">Shopping Bag</h1>

        {cart.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-2xl font-medium text-[#86868b] mb-8">Your bag is empty.</p>
            <Link href="/shop" className="inline-block px-8 py-4 rounded-full bg-[#f5f5f7] text-[#1d1d1f] font-semibold text-lg hover:scale-105 transition-transform duration-300">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-8">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-6 pb-8 border-b border-white/10">
                  <div className="relative w-32 h-32 bg-[#111] rounded-xl overflow-hidden flex-shrink-0">
                    <Image 
                      src={item.image} 
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-grow justify-between">
                    <div className="flex justify-between">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <p className="text-xl font-medium">{item.price}</p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center space-x-4">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10"
                        >-</button>
                        <span className="font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10"
                        >+</button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm text-[#86868b] hover:text-white underline underline-offset-4"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-[#111] p-8 rounded-2xl h-fit">
              <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6 border-b border-white/10 pb-6">
                <div className="flex justify-between text-[#86868b]">
                  <span>Subtotal</span>
                  <span>${cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#86868b]">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              </div>
              <div className="flex justify-between text-xl font-semibold mb-8">
                <span>Total</span>
                <span>${cartTotal.toLocaleString()}</span>
              </div>
              <Link href="/checkout" className="block w-full text-center py-4 rounded-full bg-[#f5f5f7] text-[#1d1d1f] font-semibold text-lg hover:scale-[1.02] transition-transform duration-300">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}