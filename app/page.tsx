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
import SiteFooter from "@/components/SiteFooter";
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
      <SiteFooter />
    </main>
  );
}
