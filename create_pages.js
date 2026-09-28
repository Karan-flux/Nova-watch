const fs = require('fs');
const path = require('path');

const pages = [
  { path: 'shop', title: 'Shop Nova Watches', description: 'Explore our collection of meticulously crafted timepieces.' },
  { path: 'collections', title: 'Collections', description: 'Curated series of our finest horological achievements.' },
  { path: 'about', title: 'Our Story', description: 'A legacy of precision, forged in time.' },
  { path: 'contact', title: 'Contact Us', description: 'Get in touch with our concierge.' },
  { path: 'cart', title: 'Your Bag', description: 'Review your selected timepieces.' },
  { path: 'checkout', title: 'Secure Checkout', description: 'Complete your acquisition.' },
  { path: 'search', title: 'Search', description: 'Find the perfect piece.' },
  { path: 'wishlist', title: 'Wishlist', description: 'Your saved masterpieces.' },
  { path: 'faq', title: 'Frequently Asked Questions', description: 'Everything you need to know about Nova.' },
  { path: 'privacy-policy', title: 'Privacy Policy', description: 'How we protect your data.' },
  { path: 'terms', title: 'Terms & Conditions', description: 'The terms of our service.' },
  { path: 'shipping', title: 'Shipping & Delivery', description: 'Secure, insured global delivery.' },
  { path: 'returns', title: 'Returns & Refunds', description: 'Our commitment to your satisfaction.' }
];

const template = (title, description) => `
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
`.trim();

const basePath = path.join(__dirname, 'src', 'app');

pages.forEach(p => {
  const dir = path.join(basePath, p.path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(path.join(dir, 'page.tsx'), template(p.title, p.description));
  console.log(`Created ${p.path}/page.tsx`);
});
