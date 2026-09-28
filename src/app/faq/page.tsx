import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f7] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="py-24 border-b border-white/10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">{title}</h1>
          <p className="text-xl md:text-2xl font-medium text-[#86868b] max-w-2xl text-balance">
            {description}
          </p>
        </div>
        <div className="py-16 min-h-[40vh] flex flex-col items-center justify-center text-[#86868b]">
          <p className="text-lg">This section is currently being curated.</p>
          <Link href="/" className="mt-8 px-6 py-3 rounded-full bg-[#f5f5f7] text-[#1d1d1f] font-semibold text-sm hover:scale-105 transition-transform">
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}