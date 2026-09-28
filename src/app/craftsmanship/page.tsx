import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CraftsmanshipPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f7] pt-24 px-6 md:px-12 pb-24">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center text-[#86868b] hover:text-white mb-12 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Crafted With Purpose.
            </h1>
            <p className="text-xl md:text-2xl text-[#86868b] max-w-2xl font-medium">
              Every detail is engineered for precision, blending premium materials with timeless design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="bg-[#0a0a0c] p-8 md:p-12 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-semibold mb-4 text-white">Grade 5 Titanium Case</h3>
              <p className="text-[#86868b] leading-relaxed">
                Machined from a single block of aerospace-grade titanium, providing exceptional strength-to-weight ratio and corrosion resistance. The brushed finish absorbs light while projecting a quietly confident aesthetic.
              </p>
            </div>
            
            <div className="bg-[#0a0a0c] p-8 md:p-12 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-semibold mb-4 text-white">Domed Sapphire Crystal</h3>
              <p className="text-[#86868b] leading-relaxed">
                Sculpted from nearly scratch-proof sapphire crystal. Our proprietary anti-reflective coating ensures perfect legibility from any angle, removing glare while enhancing the depth of the dial.
              </p>
            </div>

            <div className="bg-[#0a0a0c] p-8 md:p-12 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-semibold mb-4 text-white">Hand-Polished Movement</h3>
              <p className="text-[#86868b] leading-relaxed">
                Visible through the exhibition case back, the Caliber V1 movement features hand-polished chamfers, perlage finishing on the mainplate, and a skeletonized rotor crafted in Geneva.
              </p>
            </div>

            <div className="bg-[#0a0a0c] p-8 md:p-12 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-semibold mb-4 text-white">Fluorocarbon Rubber Strap</h3>
              <p className="text-[#86868b] leading-relaxed">
                Our bespoke strap is injection-molded from high-performance fluorocarbon rubber. It resists UV degradation, saltwater, and extreme temperatures, offering unparalleled comfort that conforms instantly to your wrist.
              </p>
            </div>
          </div>
          
          <div className="pt-16 flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/shop" 
              className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg text-center hover:scale-105 transition-transform"
            >
              Explore Collection
            </Link>
            <Link 
              href="/technology" 
              className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-semibold text-lg text-center hover:bg-white/5 transition-colors"
            >
              View Technology
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
