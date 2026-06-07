"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pb-20 pt-24 overflow-hidden bg-gradient-to-br from-white to-aft-50">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-48 -right-32 w-[500px] h-[500px] rounded-full bg-aft-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 w-[400px] h-[400px] rounded-full bg-aft-600/5 blur-3xl" />

      <div ref={ref} className="reveal visible flex flex-col items-center">
        <Image
          src="/image/02 LOGO ACTIVE 1 - Transparant.png"
          alt="AFT Logo"
          width={220}
          height={20}
          className="h-10 mb-10 drop-shadow-sm"
          priority
        />

        <h1 className="font-display italic font-black text-[clamp(2.5rem,7vw,5rem)] leading-[1.05] uppercase text-slate-900 tracking-tight mb-4">
          <span className="bg-gradient-to-r from-aft-600 to-aft-400 bg-clip-text text-transparent">
            OPEN REGISTRATION
          </span>
          <br />
          AFT TRAINING CLASS
        </h1>

        <p className="max-w-[600px] mx-auto text-slate-500 text-base sm:text-lg leading-relaxed mb-8">
          Saatnya berlatih lebih presisi, terarah dan mencapai target lari
          bersama <strong className="text-slate-800">AFT</strong>!
        </p>
        <p className="max-w-[540px] mx-auto text-slate-400 text-sm sm:text-base leading-relaxed">
          AFT membuka 2 pilihan kelas yang dapat disesuaikan dengan kebutuhan
          dan tujuan latihan Anda.
        </p>

        <button
          type="button"
          onClick={() =>
            document
              .getElementById("classes")
              ?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          className="inline-flex items-center gap-3 mt-8 font-display italic font-semibold text-base uppercase tracking-wide text-white bg-aft-600 hover:bg-aft-700 px-10 py-4 rounded-full transition-all duration-300 shadow-lg shadow-aft-600/25 hover:shadow-xl hover:shadow-aft-600/35 hover:-translate-y-0.5 cursor-pointer"
        >
          Lihat Kelas
          <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
        </button>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 text-[0.65rem] tracking-widest uppercase animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent" />
      </div>
    </section>
  );
}
