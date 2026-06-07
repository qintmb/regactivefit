import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AFT Training Class — Open Registration",
  description:
    "Daftar sekarang! AFT membuka 2 kelas training lari: Private Coaching & Menu Only. Latihan lebih terarah bersama Active Fit Training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
        <footer className="bg-slate-900 text-white/40 text-center py-5 text-xs">
          <div className="container-main">
            &copy; {new Date().getFullYear()}{" "}
            <a href="#" className="text-aft-400 hover:text-aft-300 transition-colors">
              AFT &mdash; Active Fit Training
            </a>
            . All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
