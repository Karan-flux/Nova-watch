import Link from "next/link";
import Image from "next/image";

const collections = [
  { id: "nova-v1", name: "Nova V1 Series", description: "The flagship automatic tourbillon.", image: "/watches/ezgif-frame-001.jpg" },
  { id: "stealth", name: "Stealth Editions", description: "DLC coated cases and dials.", image: "/watches/ezgif-frame-050.jpg" },
  { id: "carbon", name: "Forged Carbon", description: "Ultra-lightweight composites.", image: "/watches/ezgif-frame-100.jpg" },
  { id: "gold", name: "Precious Metals", description: "18k Rose Gold and Platinum.", image: "/watches/ezgif-frame-200.jpg" },
];

export default function Collections() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f7] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="py-24 border-b border-white/10 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Collections</h1>
          <p className="text-xl md:text-2xl font-medium text-[#86868b] max-w-2xl text-balance">
            Explore timepieces engineered for every domain.
          </p>
        </div>
        
        <div className="py-16 grid grid-cols-1 gap-y-16">
          {collections.map((collection) => (
            <Link href={`/shop?collection=${collection.id}`} key={collection.id} className="group relative block w-full h-[50vh] min-h-[400px] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
              <Image 
                src={collection.image} 
                alt={collection.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute bottom-12 left-12 z-20">
                <h3 className="text-4xl font-bold mb-4">{collection.name}</h3>
                <p className="text-xl text-[#86868b]">{collection.description}</p>
                <div className="mt-6 flex items-center text-[#f5f5f7] font-medium group-hover:translate-x-2 transition-transform">
                  Explore Collection <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}