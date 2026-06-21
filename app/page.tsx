import { ArrowRight } from "lucide-react";
import Image from "next/image";
import BenefitSection from "@/components/BenefitSection";
import BrandName from "@/components/BrandName";
import CapabilitySection from "@/components/CapabilitySection";
import CTASection from "@/components/CTASection";
import FaqSection from "@/components/FaqSection";
import FlowSection from "@/components/FlowSection";
import Hero from "@/components/Hero";
import PricingSection from "@/components/PricingSection";
import ProblemSection from "@/components/ProblemSection";
import UseExampleSection from "@/components/UseExampleSection";
import WorksSection from "@/components/WorksSection";

const navItems = [
  { label: "メリット", href: "#benefits" },
  { label: "できること", href: "#features" },
  { label: "仕組み", href: "#flow" },
  { label: "料金", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Home() {
  return (
    <main>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <div className="section-shell flex h-20 items-center justify-between gap-4">
          <a href="#" className="focus-ring flex items-center gap-2 rounded-full text-2xl font-black tracking-normal text-brand-900" aria-label="commo. トップへ">
            <Image src="/commo.logo.png" alt="" width={32} height={32} className="h-8 w-8" priority />
            <BrandName />
          </a>
          <div className="ml-auto flex items-center gap-5">
            <nav className="hidden items-center justify-end gap-7 lg:flex" aria-label="メインナビゲーション">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-bold text-slate-600 transition hover:text-brand-600">
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="/contact"
              className="focus-ring inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-500 px-3 py-1.5 text-[7.5px] font-bold text-white shadow-sm transition hover:bg-brand-600 sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
            >
              お問い合わせはコチラ
              <ArrowRight aria-hidden="true" className="h-2.5 w-2.5 sm:h-[17px] sm:w-[17px]" />
            </a>
          </div>
        </div>
      </header>

      <Hero />
      <ProblemSection />
      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-brand-500">Market Shift</p>
            <h2 className="mt-3 text-[22.5px] font-bold leading-tight text-brand-900 sm:text-4xl">
              今、多くの店舗で
              <span className="mx-1 bg-gradient-to-t from-brand-100 via-brand-100 to-transparent px-1">
                公式LINE
              </span>
              活用が進んでいます
            </h2>
            <p className="mt-6 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
              公式LINEは単なる連絡ツールではありません。
              <br />
              予約受付やお問い合わせ対応、クーポン配信、キャンペーン案内などを通じて
              <br />
              お客様との継続的な関係づくりができます。
            </p>
            <p className="mt-5 text-base font-bold leading-8 text-brand-900">
              一度来店したお客様とつながり続けられることが、LINE最大の魅力です。
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white">
            <Image
              src="/mar.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="scale-110 object-contain p-0"
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-brand-500">About</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-brand-900 sm:text-4xl">
              <BrandName />
              とは？
            </h2>
            <p className="mt-6 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
              <BrandName className="font-bold text-brand-900" />
              は、LINE公式アカウントを活用して、お客様とのつながりを育てるための仕組みづくりをサポートするサービスです。
            </p>
            <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
              公式LINEからの直接予約や既存の予約サイトとの連携も可能
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
              さらに、お知らせやキャンペーン情報を定期的配信することでSNSよりも直接的にお客様にアプローチできます
            </p>
            <p className="mt-5 text-base font-bold leading-8 text-brand-900">
              「一度きりのご利用」を、「続くつながり」に変えていく
            </p>
            <p className="mt-3 text-base font-normal leading-8 text-brand-900">
              それが、<BrandName className="font-bold" />です
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white">
            <Image
              src="/mak.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain p-6"
            />
          </div>
        </div>
      </section>
      <BenefitSection />
      <FlowSection />
      <CapabilitySection />
      <WorksSection />
      <UseExampleSection />
      <PricingSection />
      <FaqSection />
      <CTASection />
      <footer className="bg-white py-10">
        <div className="section-shell grid gap-8 border-t border-slate-100 pt-10 lg:grid-cols-[1fr_auto]">
          <div>
            <a href="#" className="focus-ring inline-flex items-center gap-2 rounded-full text-2xl font-black tracking-normal text-brand-900" aria-label="commo. トップへ">
              <Image src="/commo.logo.png" alt="" width={36} height={36} className="h-9 w-9" />
              <BrandName />
            </a>
            <p className="mt-4 text-sm font-bold text-brand-600">顧客は、集めるより育てる時代へ</p>
          </div>
          <div className="text-sm leading-7 text-slate-600 lg:text-right">
            <p className="font-bold text-brand-900">お問い合わせ</p>
            <p className="mt-2">平日 10:00〜17:00</p>
            <p>翌営業日にご連絡いたします。</p>
            <p className="mt-3">TEL: 092-517-9804</p>
            <p>
              <a href="mailto:info@mogcia.jp" className="transition hover:text-brand-600">
                info@mogcia.jp
              </a>
            </p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 lg:justify-end">
              <a href="https://www.mogcia.net/" className="transition hover:text-brand-600" target="_blank" rel="noreferrer">
                運営会社
              </a>
              <a href="/privacy-policy" className="transition hover:text-brand-600">
                プライバシーポリシー
              </a>
              <a href="/terms" className="transition hover:text-brand-600">
                利用規約
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
