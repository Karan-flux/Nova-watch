"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useCart } from "@/context/CartContext";

const watches = [
  { id: "nova-v1-titanium", name: "Nova V1 Titanium", price: "$2,400", image: "/watches/ezgif-frame-001.jpg", description: "Grade 5 Titanium, Skeletonized Dial." },
  { id: "nova-v1-carbon", name: "Nova V1 Carbon", price: "$2,800", image: "/watches/ezgif-frame-100.jpg", description: "Forged Carbon Fiber, Red Accents." },
  { id: "nova-v1-gold", name: "Nova V1 Rose Gold", price: "$4,200", image: "/watches/ezgif-frame-200.jpg", description: "18k Rose Gold, Classic Elegance." },
  { id: "nova-v1-stealth", name: "Nova V1 Stealth", price: "$2,600", image: "/watches/ezgif-frame-050.jpg", description: "DLC Coated, All-Black Aesthetic." },
];

export default function ProductDetail({ params }: { params: { id: string } }) {
  const watch = watches.find(w => w.id === params.id);
  const { addToCart } = useCart();
  
  if (!watch) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart({
      id: watch.id,
      name: watch.name,
      price: watch.price,
      image: watch.image,
      quantity: 1
    });
    // Visual feedback could be added here
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f7] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="py-12 border-b border-white/10 mb-12">
          <Link href="/shop" className="text-[#86868b] hover:text-[#f5f5f7] transition-colors font-medium">
            ← Back to Collection
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Image */}
          <div className="relative aspect-square w-full bg-[#111] rounded-2xl overflow-hidden">
            <Image 
              src={watch.image} 
              alt={watch.name}
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">{watch.name}</h1>
            <p className="text-2xl font-medium text-[#86868b] mb-8">{watch.price}</p>
            
            <p className="text-lg md:text-xl font-medium text-[#86868b] leading-relaxed mb-12">
              The {watch.name} represents the pinnacle of modern horology. {watch.description} Engineered with a multi-axis tourbillon and a 72-hour power reserve, this timepiece is built for those who demand uncompromising performance and aesthetic brilliance.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="font-medium text-[#86868b]">Case Size</span>
                <span className="font-semibold text-[#f5f5f7]">42mm</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="font-medium text-[#86868b]">Water Resistance</span>
                <span className="font-semibold text-[#f5f5f7]">100m (10 ATM)</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="font-medium text-[#86868b]">Movement</span>
                <span className="font-semibold text-[#f5f5f7]">Automatic Caliber V1</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleAddToCart}
                className="flex-1 py-4 rounded-full bg-[#f5f5f7] text-[#1d1d1f] font-semibold text-lg hover:scale-[1.02] transition-transform duration-300"
              >
                Add to Cart
              </button>
              <button className="flex-1 py-4 rounded-full bg-transparent border border-white/20 text-[#f5f5f7] font-semibold text-lg hover:bg-white/5 transition-colors duration-300">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
