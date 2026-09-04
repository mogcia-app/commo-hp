"use client";

import Image from "next/image";

export default function UseExampleSection() {
  return (
    <section id="why-line" data-page-reveal className="relative overflow-hidden bg-white py-16 sm:py-20">
      <Image src="/whyline.png" alt="" fill sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/88 via-white/62 to-white/10" aria-hidden="true" />
      <div className="section-shell relative">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-500">Why LINE?</p>
          <h2 className="mt-4 text-2xl font-bold leading-snug text-brand-900 sm:text-3xl">
            知ってもらう場所からつながり続ける場所へ
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-[15px]">
            SNSやWebサイトは知ってもらう大切なきっかけ LINEはそこから一歩先へ進み一度つながったお客様とその後もコミュニケーションを続けられます
          </p>
        </div>
        <div className="mt-8 grid max-w-3xl gap-3 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-white/70 bg-white/86 p-5 backdrop-blur">
            <p className="text-xs font-bold text-brand-900">01｜すでに多くの人が使っている</p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div>
                <p className="text-3xl font-bold text-brand-900">1億人</p>
                <p className="mt-2 text-xs font-bold text-slate-500">国内月間利用者数</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-900">81.3%</p>
                <p className="mt-2 text-xs font-bold text-slate-500">日本の総人口に対する利用率</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-white/70 bg-white/86 p-5 backdrop-blur">
            <p className="text-xs font-bold text-brand-900">02｜届いた情報を見てもらいやすい</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-[150px_1fr] sm:items-center">
              <Image src="/notification.png" alt="" width={180} height={180} className="mx-auto w-36 object-contain" />
              <div>
                <p className="text-3xl font-bold text-brand-900">約8割</p>
                <p className="mt-2 text-sm font-bold leading-7 text-brand-900">
                  LINE公式アカウントから届いたメッセージをその日のうちに見る
                </p>
                <p className="mt-2 text-xs leading-6 text-slate-500">せっかく届けるなら普段から目にする場所へ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
