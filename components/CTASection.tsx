import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CTASection() {
  return (
    <section id="contact" data-page-reveal className="bg-white py-12 sm:py-16">
      <div className="section-shell">
        <div className="border-y border-brand-100 bg-[#fbf8ff] px-5 py-8 sm:px-8 lg:grid lg:grid-cols-[1fr_auto_auto] lg:items-center lg:gap-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-500">Contact</p>
            <h2 className="mt-3 text-2xl font-bold leading-snug text-brand-900 sm:text-3xl">
              LINEの活用 今の状況から一緒に整理します
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-[15px]">
              友だち追加の導線 配信内容 予約や来店につなげる流れまで まずは今の使い方をもとにできることをご提案します
            </p>
          </div>
          <div className="mt-6 flex justify-center lg:mt-0">
            <Image
              src="/commonewlogo.png"
              alt=""
              width={104}
              height={104}
              className="ui-float-slow h-20 w-20 object-contain drop-shadow-[0_14px_22px_rgba(43,26,58,0.12)] sm:h-24 sm:w-24 lg:h-28 lg:w-28"
              aria-hidden="true"
            />
          </div>
          <a
            href="/contact"
            className="focus-ring mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-600 lg:mt-0 lg:w-auto"
          >
            commo.について相談する
            <ArrowRight aria-hidden="true" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
