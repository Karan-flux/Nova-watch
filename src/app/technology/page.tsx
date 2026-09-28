import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TechnologyPage() {
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
              The Engine Inside.
            </h1>
            <p className="text-xl md:text-2xl text-[#86868b] max-w-2xl font-medium">
              A masterclass in micro-mechanics. The Caliber V1 movement redefines what is possible in an automatic watch.
            </p>
          </div>

          <div className="space-y-12 text-left pt-8">
            <div className="bg-[#1d1d1f]/40 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0050FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#f5f5f7] relative z-10 tracking-tight">Multi-Axis Tourbillon</h2>
              <p className="text-[#86868b] text-xl leading-relaxed font-medium relative z-10">
                Unlike traditional tourbillons that rotate on a single axis, our proprietary mechanism rotates across three dimensions. It actively counteracts the effects of gravity on the escapement regardless of your wrist's orientation, ensuring chronometer-level precision at all times.
              </p>
            </div>

            <div className="bg-[#1d1d1f]/40 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D6FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#f5f5f7] relative z-10 tracking-tight">Silicon Escapement</h2>
              <p className="text-[#86868b] text-xl leading-relaxed font-medium relative z-10">
                Crafted from frictionless silicon components, the escapement requires no lubrication and is completely anti-magnetic. This guarantees consistent energy transfer over the lifetime of the watch, unaffected by modern magnetic fields or extreme temperature variations.
              </p>
            </div>
          </div>
          
          <div className="pt-16 flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/craftsmanship" 
              className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg text-center hover:scale-105 transition-transform"
            >
              Explore Craftsmanship
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
