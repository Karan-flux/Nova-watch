import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f7] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl font-medium text-[#86868b] max-w-2xl mx-auto text-balance">
            Re-engineering time for the modern era.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-16">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#111]">
            <Image 
              src="/watches/ezgif-frame-001.jpg" 
              alt="Watch Craftsmanship" 
              fill 
              className="object-cover opacity-80"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">The Pursuit of Precision</h2>
            <p className="text-[#86868b] text-lg leading-relaxed mb-6">
              Founded by a collective of aerospace engineers and master watchmakers, Nova was born from a singular obsession: to create a timepiece that bridges the gap between traditional mechanical artistry and cutting-edge materials.
            </p>
            <p className="text-[#86868b] text-lg leading-relaxed">
              Every component, from the tourbillon cage to the sapphire crystal, is machined to microscopic tolerances. We don't just build watches; we engineer instruments of time.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}