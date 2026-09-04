import { ArrowRight } from "lucide-react";
import Image from "next/image";
import BrandName from "@/components/BrandName";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Mini Page", href: "#mini-page" },
  { label: "Why LINE", href: "#why-line" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-100/80 bg-white/88 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <a href="#" className="focus-ring inline-flex shrink-0 items-center gap-2 text-xl font-bold tracking-normal text-brand-900" aria-label="commo トップへ">
          <Image src="/commonewlogo.png" alt="" width={40} height={40} className="h-10 w-10 object-contain" priority />
          <BrandName />
        </a>
        <div className="ml-auto flex items-center gap-3">
          <nav
            className="hidden items-center justify-end rounded-full border border-slate-200 bg-white/78 p-1 shadow-[0_10px_30px_rgba(43,26,58,0.05)] xl:flex"
            aria-label="メインナビゲーション"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-[11px] font-bold text-slate-600 transition hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="/contact"
            className="focus-ring inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg bg-brand-500 px-3 py-2 text-xs font-bold text-white transition hover:bg-brand-600 sm:px-4"
          >
            相談する
            <ArrowRight aria-hidden="true" size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}
