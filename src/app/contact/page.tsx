"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f7] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="py-24 text-center border-b border-white/10 mb-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl font-medium text-[#86868b] text-balance">
            For inquiries regarding the Nova V1 series, bespoke orders, or general support.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-[#111] p-12 rounded-2xl text-center border border-white/10">
            <h2 className="text-3xl font-bold mb-4">Message Received</h2>
            <p className="text-[#86868b] text-lg">
              Thank you for contacting Nova. A concierge specialist will respond to your inquiry within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 bg-[#111] p-8 md:p-12 rounded-2xl border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#86868b]">First Name</label>
                <input required type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#86868b]">Last Name</label>
                <input required type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#86868b]">Email Address</label>
              <input required type="email" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#86868b]">Message</label>
              <textarea required rows={4} className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors resize-none"></textarea>
            </div>
            <button 
              type="submit" 
              disabled={status === "submitting"}
              className="w-full py-4 rounded-full bg-[#f5f5f7] text-[#1d1d1f] font-semibold text-lg hover:scale-[1.02] transition-transform duration-300 disabled:opacity-50 disabled:scale-100"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}