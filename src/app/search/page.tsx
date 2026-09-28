"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const watches = [
  { id: "nova-v1-titanium", name: "Nova V1 Titanium", price: "$2,400", image: "/watches/ezgif-frame-001.jpg" },
  { id: "nova-v1-carbon", name: "Nova V1 Carbon", price: "$2,800", image: "/watches/ezgif-frame-100.jpg" },
  { id: "nova-v1-gold", name: "Nova V1 Rose Gold", price: "$4,200", image: "/watches/ezgif-frame-200.jpg" },
  { id: "nova-v1-stealth", name: "Nova V1 Stealth", price: "$2,600", image: "/watches/ezgif-frame-050.jpg" },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  
  const filtered = query.length > 0 
    ? watches.filter(w => w.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f7] pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative max-w-3xl mx-auto mb-16">
          <input 
            type="text" 
            placeholder="Search collections, models, materials..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent border-b-2 border-white/20 pb-4 text-3xl md:text-5xl font-bold tracking-tight focus:outline-none focus:border-white transition-colors"
            autoFocus
          />
          <div className="absolute right-0 top-2 text-[#86868b]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
        </div>

        {query && (
          <div>
            <h2 className="text-[#86868b] font-medium mb-8">Results for "{query}"</h2>
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {filtered.map(watch => (
                  <Link href={`/shop/${watch.id}`} key={watch.id} className="group">
                    <div className="relative aspect-square bg-[#111] rounded-2xl overflow-hidden mb-4">
                      <Image src={watch.image} alt={watch.name} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    </div>
                    <h3 className="font-semibold text-lg">{watch.name}</h3>
                    <p className="text-[#86868b]">{watch.price}</p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <p className="text-2xl font-medium text-[#86868b]">No results found.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}