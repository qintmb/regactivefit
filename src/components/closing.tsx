"use client";

import { useEffect, useRef } from "react";

export default function ClosingSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-[#0a2a33] py-20 sm:py-28 text-center text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_600px_300px_at_30%_70%,rgba(16,99,118,0.15),transparent_70%),radial-gradient(ellipse_500px_500px_at_80%_20%,rgba(16,99,118,0.08),transparent_70%)]" />

      <div ref={ref} className="relative z-10 container-main reveal">
        <h2 className="font-display italic font-black text-[clamp(2.0rem,4vw,2.7rem)] uppercase leading-tight mb-3">
          Train Smart &bull; <span className="text-aft-400">Run Strong</span>{" "}
          &bull; Finish Proud
        </h2>

        <p className="max-w-xl mx-auto text-white/60 text-sm sm:text-base leading-relaxed mb-10">
          Karena setiap langkah yang terencana akan membawa Anda lebih dekat
          dengan garis finish dan target terbaik Anda.
        </p>
        <p className="mt-10 font-display italic font-medium text-[0.7rem] tracking-[0.15em] uppercase text-white/20">
          AFT &mdash; Active Fit Training
        </p>
      </div>
    </section>
  );
}
