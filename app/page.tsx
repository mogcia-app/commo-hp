import Image from "next/image";
import BrandName from "@/components/BrandName";
import CaseSection from "@/components/CaseSection";
import CapabilitySection from "@/components/CapabilitySection";
import CTASection from "@/components/CTASection";
import DifferenceSection from "@/components/DifferenceSection";
import FaqSection from "@/components/FaqSection";
import Hero from "@/components/Hero";
import HeroBanner from "@/components/HeroBanner";
import MiniPageSection from "@/components/MiniPageSection";
import PageAnimations from "@/components/PageAnimations";
import PricingSection from "@/components/PricingSection";
import ProblemSection from "@/components/ProblemSection";
import SimulationSection from "@/components/SimulationSection";
import SiteHeader from "@/components/SiteHeader";
import SupportSection from "@/components/SupportSection";
import UseExampleSection from "@/components/UseExampleSection";
import VoiceSection from "@/components/VoiceSection";

export default function Home() {
  return (
    <main>
      <PageAnimations />
      <SiteHeader />
      <Hero />
      <HeroBanner />
      <ProblemSection />
      <section id="about" data-page-reveal className="relative overflow-hidden bg-white py-16 sm:py-20">
        <Image src="/heroco.png" alt="" fill sizes="100vw" className="object-cover object-[center_44%]" />
        <div className="section-shell relative">
          <div className="max-w-2xl py-8 sm:py-12">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-500">About</p>
            <h2 className="mt-4 text-2xl font-bold leading-snug text-brand-900 sm:text-3xl">
              せっかくつながったお客様とその先もつながっていくために
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700 sm:text-[15px] sm:leading-8">
              <p>LINEで友だちになってもその人がどんな人で何に興味があるのかまではなかなか見えてきません</p>
              <p>
                <BrandName className="font-bold text-brand-900" />はつながったお客様を知るところからはじまります
              </p>
              <p>アンケートやLINEでの反応から一人ひとりの興味や目的を知りその人に合った情報を届け次の来店や予約につなげていく</p>
              <p>友だちを増やして終わりではなくその後の関係を育てていくためのサービスです</p>
            </div>
          </div>
        </div>
      </section>
      <CapabilitySection />
      <MiniPageSection />
      <SimulationSection />
      <UseExampleSection />
      <CaseSection />
      <VoiceSection />
      <DifferenceSection />
      <PricingSection />
      <SupportSection />
      <FaqSection />
      <CTASection />
      <footer data-page-reveal className="bg-white py-10">
        <div className="section-shell grid gap-8 border-t border-slate-100 pt-10 lg:grid-cols-[1fr_auto]">
          <div>
            <a href="#" className="focus-ring inline-flex items-center gap-2 text-xl font-bold tracking-normal text-brand-900" aria-label="commo トップへ">
              <Image src="/commonewlogo.png" alt="" width={40} height={40} className="h-10 w-10 object-contain" />
              <BrandName />
            </a>
            <p className="mt-4 text-sm font-bold text-brand-600">顧客は集めるより育てる時代へ</p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">
              LINEでつながったお客様を知り届けて次の行動へつなげるためのサービスです
            </p>
            <div className="mt-6 flex items-end gap-5">
              <Image
                src="/commonewlogo.png"
                alt=""
                width={82}
                height={82}
                className="ui-float h-20 w-20 object-contain opacity-95 drop-shadow-[0_10px_18px_rgba(43,26,58,0.10)]"
                aria-hidden="true"
              />
              <div className="grid gap-2 pb-2 text-xs font-bold text-brand-700">
                <span className="rounded-full bg-brand-50 px-3 py-1">知る</span>
                <span className="rounded-full bg-brand-50 px-3 py-1">届ける</span>
                <span className="rounded-full bg-brand-50 px-3 py-1">つなげる</span>
              </div>
            </div>
          </div>
          <div className="text-sm leading-7 text-slate-600 lg:text-right">
            <p className="font-bold text-brand-900">お問い合わせ</p>
            <p className="mt-2">平日 10:00〜17:00</p>
            <p>翌営業日にご連絡いたします</p>
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
