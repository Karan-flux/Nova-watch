import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-[#86868b] border-t border-white/10 pt-16 pb-8 text-sm font-medium">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="text-[#f5f5f7] font-semibold mb-4 text-base tracking-tight">Shop</h4>
            <ul className="space-y-3">
              <li><Link href="/shop" className="hover:text-[#f5f5f7] transition-colors">All Watches</Link></li>
              <li><Link href="/collections" className="hover:text-[#f5f5f7] transition-colors">Collections</Link></li>
              <li><Link href="/buy" className="hover:text-[#f5f5f7] transition-colors">Buy Now</Link></li>
              <li><Link href="/specs" className="hover:text-[#f5f5f7] transition-colors">Technical Specs</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#f5f5f7] font-semibold mb-4 text-base tracking-tight">Discover</h4>
            <ul className="space-y-3">
              <li><Link href="/overview" className="hover:text-[#f5f5f7] transition-colors">Overview</Link></li>
              <li><Link href="/technology" className="hover:text-[#f5f5f7] transition-colors">Innovation & Tech</Link></li>
              <li><Link href="/water-proof" className="hover:text-[#f5f5f7] transition-colors">Craftsmanship</Link></li>
              <li><Link href="/about" className="hover:text-[#f5f5f7] transition-colors">Our Story</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#f5f5f7] font-semibold mb-4 text-base tracking-tight">Support</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="hover:text-[#f5f5f7] transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-[#f5f5f7] transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-[#f5f5f7] transition-colors">Shipping & Delivery</Link></li>
              <li><Link href="/returns" className="hover:text-[#f5f5f7] transition-colors">Returns & Refunds</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#f5f5f7] font-semibold mb-4 text-base tracking-tight">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="hover:text-[#f5f5f7] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#f5f5f7] transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>Copyright © {new Date().getFullYear()} Nova Timepieces Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-[#f5f5f7] transition-colors">Instagram</Link>
            <Link href="/" className="hover:text-[#f5f5f7] transition-colors">Twitter</Link>
            <Link href="/" className="hover:text-[#f5f5f7] transition-colors">YouTube</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
