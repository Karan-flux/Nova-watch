import Link from "next/link";

export default function WishlistPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f7] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12">Your Wishlist</h1>

        <div className="py-24 text-center">
          <div className="w-24 h-24 mx-auto border-2 border-white/10 rounded-full flex items-center justify-center mb-8 text-white/20">
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </div>
          <p className="text-2xl font-medium text-[#86868b] mb-8 max-w-md mx-auto">
            You haven't saved any timepieces yet.
          </p>
          <Link href="/shop" className="inline-block px-8 py-4 rounded-full bg-[#f5f5f7] text-[#1d1d1f] font-semibold text-lg hover:scale-105 transition-transform duration-300">
            Explore Collections
          </Link>
        </div>
      </div>
    </main>
  );
}