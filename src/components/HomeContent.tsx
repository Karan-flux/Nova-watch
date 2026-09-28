import Image from "next/image";
import Link from "next/link";

export default function HomeContent() {
  return (
    <div className="bg-[#050505] text-[#f5f5f7] relative z-10 w-full overflow-hidden">
      {/* Features Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Designed to endure.</h2>
          <p className="text-xl md:text-2xl font-medium text-[#86868b] max-w-2xl mx-auto text-balance">
            Every material chosen for maximum strength and minimum weight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#111] p-12 rounded-3xl h-[500px] flex flex-col justify-between overflow-hidden relative group">
            <div className="z-10 relative">
              <h3 className="text-3xl font-bold mb-4">Grade 5 Titanium</h3>
              <p className="text-[#86868b] text-lg max-w-sm">Aerospace-grade durability that sits incredibly light on the wrist.</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0" />
            <Image src="/watches/ezgif-frame-001.jpg" alt="Titanium" fill className="object-cover object-center opacity-50 group-hover:scale-105 transition-transform duration-700" />
          </div>
          
          <div className="bg-[#111] p-12 rounded-3xl h-[500px] flex flex-col justify-between overflow-hidden relative group">
            <div className="z-10 relative">
              <h3 className="text-3xl font-bold mb-4">Sapphire Crystal</h3>
              <p className="text-[#86868b] text-lg max-w-sm">Virtually unscratchable optics with anti-reflective coating.</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0" />
            <Image src="/watches/ezgif-frame-200.jpg" alt="Sapphire Crystal" fill className="object-cover object-center opacity-50 group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* Tech Showcase */}
      <section className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-balance">
            The beating heart of <br className="hidden md:block" /> Nova V1.
          </h2>
          <p className="text-xl text-[#86868b] max-w-2xl mx-auto mb-16 leading-relaxed text-balance">
            Our proprietary Caliber V1 automatic movement boasts a 72-hour power reserve and is visible through the exhibition case back. Hand-finished with Geneva stripes and perlage.
          </p>
          
          <div className="relative aspect-video w-full rounded-2xl bg-[#111] overflow-hidden border border-white/10 max-w-5xl mx-auto group cursor-pointer flex items-center justify-center">
             <Image src="/watches/ezgif-frame-100.jpg" alt="Movement" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" />
             <div className="absolute w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
               <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-white ml-2"><path d="M5 3l14 9-14 9V3z"/></svg>
             </div>
          </div>
        </div>
      </section>

      {/* Product Gallery Carousel (CSS Scroll Snap) */}
      <section className="py-32 overflow-hidden">
        <div className="px-6 mb-16 max-w-7xl mx-auto flex items-end justify-between">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">Discover the Lineup.</h2>
            <p className="text-xl text-[#86868b]">A model for every aesthetic.</p>
          </div>
          <Link href="/shop" className="hidden md:block text-[#f5f5f7] border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
            View All Watches
          </Link>
        </div>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 px-6 gap-6 max-w-7xl mx-auto">
          {["Titanium", "Carbon", "Rose Gold", "Stealth"].map((model, i) => (
            <Link href="/shop" key={i} className="snap-center shrink-0 w-[85vw] md:w-[400px] block group">
              <div className="bg-[#111] aspect-[4/5] rounded-2xl overflow-hidden relative mb-6">
                <Image src={`/watches/ezgif-frame-0${i === 0 ? "01" : i === 1 ? "50" : i === 2 ? "00" : "50"}.jpg`} alt={model} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Nova V1 {model}</h3>
              <p className="text-[#86868b]">From $2,400</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#111] px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16 text-center">Acclaimed by Experts.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "A masterclass in modern horology. The Nova V1 redefines what an independent brand can achieve.", author: "Hodinkee" },
              { quote: "The tourbillon execution at this price point is simply unheard of. Truly remarkable engineering.", author: "A Blog To Watch" },
              { quote: "It wears like a second skin. The Grade 5 Titanium case is perfectly balanced.", author: "GQ Magazine" }
            ].map((review, i) => (
              <div key={i} className="p-10 border border-white/10 rounded-3xl bg-[#1d1d1f]/50">
                <div className="flex mb-6 text-yellow-500">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-xl font-medium leading-relaxed mb-8">"{review.quote}"</p>
                <p className="text-[#86868b] font-semibold tracking-wide uppercase text-sm">{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
