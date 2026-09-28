import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function WaterProofPage() {
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
              Engineered for the Abyss.
            </h1>
            <p className="text-xl md:text-2xl text-[#86868b] max-w-2xl font-medium">
              A masterclass in pressure resistance. Built to withstand the crushing depths of the ocean.
            </p>
          </div>

          <div className="bg-[#1d1d1f]/40 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-t from-[#00D6FF]/5 to-transparent pointer-events-none group-hover:from-[#00D6FF]/10 transition-colors duration-500" />
            
            <div className="flex flex-col md:flex-row items-center gap-12 text-left relative z-10">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#f5f5f7] tracking-tight">300m Water Resistance</h2>
                <p className="text-[#86868b] text-xl leading-relaxed font-medium mb-8">
                  The Nova Watch is built with rigorous sealing techniques. A triple-gasket screw-down crown and a reinforced sapphire crystal ensure the core mechanics are housed in a fully impenetrable inner chassis.
                </p>
                <ul className="space-y-4 text-[#f5f5f7] font-medium text-lg">
                  <li className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#00D6FF] shadow-[0_0_10px_#00D6FF]" />
                    Submersible up to 300 meters (1,000 feet)
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#00D6FF] shadow-[0_0_10px_#00D6FF]" />
                    Helium escape valve for saturation diving
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#00D6FF] shadow-[0_0_10px_#00D6FF]" />
                    Saltwater and corrosion resistant Grade 5 Titanium
                  </li>
                </ul>
              </div>
              <div className="flex-1 w-full flex justify-center">
                {/* Abstract representation of a water droplet or seal */}
                <div className="w-48 h-48 rounded-full border border-nova-cyan/30 flex items-center justify-center shadow-[0_0_50px_rgba(0,214,255,0.1)]">
                  <div className="w-32 h-32 rounded-full border border-nova-cyan/50 flex items-center justify-center shadow-[0_0_30px_rgba(0,214,255,0.2)]">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-nova-cyan to-nova-blue blur-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
