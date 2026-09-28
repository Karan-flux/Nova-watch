import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function OverviewPage() {
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
              The Nova Overview.
            </h1>
            <p className="text-xl md:text-2xl text-[#86868b] max-w-2xl font-medium">
              A quick look at what makes the Nova V1 Titanium a flagship timepiece.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 pt-8">
            <div className="bg-[#0a0a0c] p-8 md:p-12 rounded-2xl border border-white/5 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-semibold text-white">A New Standard of Precision</h3>
                <p className="text-[#86868b] leading-relaxed">
                  The Nova V1 Titanium represents our relentless pursuit of perfection. By marrying aerospace-grade materials with centuries-old horological traditions, we've created a watch that thrives in both the boardroom and the extreme depths of the ocean.
                </p>
                <ul className="text-[#86868b] space-y-2 list-disc list-inside pt-4">
                  <li>Automatic Caliber V1 Movement</li>
                  <li>Grade 5 Titanium Construction</li>
                  <li>300m (1,000ft) Water Resistance</li>
                  <li>72-Hour Power Reserve</li>
                  <li>Scratch-Resistant Sapphire Crystal</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-[#0a0a0c] p-8 md:p-12 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-semibold mb-4 text-white">Uncompromising Comfort</h3>
              <p className="text-[#86868b] leading-relaxed">
                Despite its robust capabilities, the Nova V1 is remarkably comfortable. The titanium case is 40% lighter than stainless steel, reducing wrist fatigue. Paired with our custom fluorocarbon rubber strap or the micro-adjusting titanium bracelet, the watch wears incredibly close to the skin, conforming to your wrist for all-day wearability.
              </p>
            </div>
          </div>
          
          <div className="pt-16 flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/buy" 
              className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg text-center hover:scale-105 transition-transform"
            >
              Configure & Buy
            </Link>
            <Link 
              href="/specs" 
              className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-semibold text-lg text-center hover:bg-white/5 transition-colors"
            >
              See Full Specifications
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
