"use client";

import { useEffect, useRef, useState } from "react";
import { Flame, Users, ChevronDown } from "lucide-react";

const privateBenefits = [
  "Program latihan yang disesuaikan dengan target dan kemampuan individu.",
  "Strength & Running Drill 2–3 kali setiap minggu.",
  "Penyesuaian program apabila ada kendala atau perubahan jadwal.",
  "Evaluasi progres latihan secara berkala.",
  "Analisis hasil latihan dan race.",
  "Konsultasi dan komunikasi 2 arah dengan coach.",
  "Pendampingan menuju target event (5K, 10K, HM, atau FM).",
  "Edukasi tentang pacing, zona latihan, strategi race, dan recovery.",
  "Panduan pengaturan beban latihan untuk meminimalkan risiko cedera.",
  "Pendampingan menuju target Personal Best (PB).",
  "Akses ke grup eksklusif peserta AFT.",
];

const umumBenefits = [
  "Program latihan bulanan (Running Plan).",
  "Menu latihan disusun berdasarkan target.",
  "Update menu latihan secara berkala.",
  "Akses ke grup peserta AFT untuk mendapatkan informasi dan update program.",
  "Dapat mengikuti diskusi umum terkait latihan di grup.",
  "Panduan dasar mengenai intensitas latihan (Easy, Tempo, Interval, Long Run).",
  "Cocok untuk pemula hingga intermediate yang ingin berlatih lebih terarah dengan biaya terjangkau.",
];

const tagTargets = ["5K", "10K", "Half Marathon (21K)", "Full Marathon (42K)"];

const suitableItems = [
  "Pemula yang ingin mulai berlari dengan benar.",
  "Pelari yang ingin meningkatkan performa.",
  "Persiapan event 5K, 10K, HM, dan FM.",
  "Pelari yang ingin menyelesaikan race atau mengejar Personal Best.",
];

type OpenKey = "private" | "umum";

export default function ClassesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<OpenKey | null>(null);

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
      { threshold: 0.1 },
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const toggle = (key: OpenKey) =>
    setOpen((prev) => (prev === key ? null : key));

  const btnBase =
    "w-full flex items-center gap-4 text-left p-5 rounded-2xl border transition-all duration-200 font-display italic";

  const btnActive = (isOpen: boolean) =>
    isOpen
      ? "border-aft-500 bg-aft-50/60 shadow-md shadow-aft-500/5"
      : "border-slate-200 bg-white hover:bg-aft-50 hover:border-aft-400 hover:shadow-md";

  return (
    <section id="classes">
      {/* ── header banner ── */}
      <div className="relative overflow-hidden bg-aft-600 pt-14 sm:pt-20 pb-10 sm:pb-10 text-center text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 20px, white 20px, white 40px)",
          }}
        />
        <div ref={headerRef} className="reveal relative z-10 container-main">
          <h2 className="font-display italic font-black text-[clamp(1.9rem,5vw,3.2rem)] uppercase tracking-tight mb-5">
            PILIH KELAS SESUAI KEBUTUHANMU
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto">
            Dua kategori kelas latihan yang dirancang untuk membantumu mencapai
            target
          </p>
        </div>
      </div>

      {/* ── accordion content ── */}
      <div className="bg-aft-600 pb-12 sm:pb-20 px-5 sm:px-0">
        <div className="max-w-3xl mx-auto flex flex-col gap-4 sm:gap-3">
          {/* ===== KELAS EKSKLUSIF ===== */}
          <button
            type="button"
            onClick={() => toggle("private")}
            className={`${btnBase} ${btnActive(open === "private")}`}
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-aft-50 flex items-center justify-center text-aft-600">
              <Flame className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="block font-black text-base uppercase text-slate-900">
                KELAS EKSKLUSIF
              </span>
              <span className="block text-xs text-slate-400 mt-0.5">
                PRIVATE COACHING
              </span>
              <span className="block text-sm font-black  text-slate-500 mt-0.5">
                Rp350.000/bulan
              </span>
            </div>
            <ChevronDown
              className={`flex-shrink-0 w-5 h-5 text-slate-400 transition-transform duration-300 ${
                open === "private" ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-400 ease-in-out ${
              open === "private"
                ? "max-h-[1500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mt-1">
              <p className="font-semibold text-aft-700 text-sm uppercase tracking-wide mb-3">
                Best Seller &middot; Pendampingan Personal
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                Program pendampingan personal dengan monitoring dan evaluasi
                langsung dari coach.
              </p>
              <ul className="flex flex-col gap-2.5 mb-2">
                {privateBenefits.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed"
                  >
                    <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-aft-50 text-aft-600 text-[0.55rem] font-bold mt-0.5">
                      &#10003;
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="https://chat.whatsapp.com/IoO9LZslKsRAzTIx8KLJrl"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2.5 w-full font-display italic font-semibold text-sm uppercase tracking-wide text-white bg-aft-600 hover:bg-aft-700 py-3.5 px-6 rounded-full transition-all duration-300 shadow-lg shadow-aft-600/20 hover:shadow-xl hover:shadow-aft-600/30 hover:-translate-y-0.5"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Gabung Grup WhatsApp
                <span className="block font-body text-[0.65rem] font-normal uppercase tracking-normal opacity-80">
                  KELAS PRIVATE
                </span>
              </a>
            </div>
          </div>

          {/* ===== KELAS UMUM ===== */}
          <button
            type="button"
            onClick={() => toggle("umum")}
            className={`${btnBase} ${btnActive(open === "umum")}`}
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-aft-50 flex items-center justify-center text-aft-600">
              <Users className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="block font-black text-base uppercase text-slate-900">
                KELAS UMUM
              </span>
              <span className="block text-xs text-slate-400 mt-0.5">
                MENU ONLY
              </span>
              <span className="block text-sm font-black  text-slate-500 mt-0.5">
                Rp100.000/bulan
              </span>
            </div>
            <ChevronDown
              className={`flex-shrink-0 w-5 h-5 text-slate-400 transition-transform duration-300 ${
                open === "umum" ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-400 ease-in-out ${
              open === "umum"
                ? "max-h-[1500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mt-1">
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                Program latihan terstruktur untuk Anda yang ingin berlatih
                secara mandiri.
              </p>
              <ul className="flex flex-col gap-2.5 mb-2">
                {umumBenefits.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed"
                  >
                    <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-aft-50 text-aft-600 text-[0.55rem] font-bold mt-0.5">
                      &#10003;
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* target tags */}
              <div className="flex flex-wrap gap-2 mt-4 mb-3">
                {tagTargets.map((t) => (
                  <span
                    key={t}
                    className="font-display italic font-medium text-[0.7rem] uppercase tracking-wide text-aft-600 bg-aft-50 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* suitable for */}
              <div className="pt-4 border-t border-slate-200">
                <p className="font-semibold text-sm text-slate-800 mb-2 flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-aft-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Cocok untuk:
                </p>
                <ul className="flex flex-col gap-1.5">
                  {suitableItems.map((s, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-aft-600 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://chat.whatsapp.com/If7rYD96bX40jCRM8Mnjhw"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2.5 w-full font-display italic font-semibold text-sm uppercase tracking-wide text-white bg-wa hover:bg-green-600 py-3.5 px-6 rounded-full transition-all duration-300 shadow-lg shadow-wa/20 hover:shadow-xl hover:shadow-wa/30 hover:-translate-y-0.5"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Gabung Grup WhatsApp
                <span className="block font-body text-[0.65rem] font-normal uppercase tracking-normal opacity-80">
                  KELAS UMUM
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
