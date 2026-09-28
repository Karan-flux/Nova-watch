import Link from "next/link";
import Image from "next/image";

const watches = [
  { id: "nova-v1-titanium", name: "Nova V1 Titanium", price: "$2,400", image: "/watches/ezgif-frame-001.jpg", description: "Grade 5 Titanium, Skeletonized Dial." },
  { id: "nova-v1-carbon", name: "Nova V1 Carbon", price: "$2,800", image: "/watches/ezgif-frame-100.jpg", description: "Forged Carbon Fiber, Red Accents." },
  { id: "nova-v1-gold", name: "Nova V1 Rose Gold", price: "$4,200", image: "/watches/ezgif-frame-200.jpg", description: "18k Rose Gold, Classic Elegance." },
  { id: "nova-v1-stealth", name: "Nova V1 Stealth", price: "$2,600", image: "/watches/ezgif-frame-050.jpg", description: "DLC Coated, All-Black Aesthetic." },
];

export default function Shop() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f7] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="py-24 border-b border-white/10 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">The Collection</h1>
          <p className="text-xl md:text-2xl font-medium text-[#86868b] max-w-2xl text-balance">
            Precision engineering meets uncompromising aesthetics. Discover the Nova V1 series.
          </p>
        </div>
        
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {watches.map((watch) => (
            <Link href={`/shop/${watch.id}`} key={watch.id} className="group cursor-pointer">
              <div className="relative aspect-square w-full bg-[#111] overflow-hidden rounded-2xl mb-6">
                <Image 
                  src={watch.image} 
                  alt={watch.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight mb-2">{watch.name}</h3>
                  <p className="text-[#86868b] font-medium">{watch.description}</p>
                </div>
                <span className="text-xl font-medium">{watch.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}