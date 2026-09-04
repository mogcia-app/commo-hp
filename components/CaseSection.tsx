"use client";

import Image from "next/image";

const cases = [
  ["ホテル旅館", "また泊まりたいにつなげる", "観光やビジネスや家族旅行など宿泊の目的を知り次の予約へ", "/usecase-hotel.png"],
  ["ゴルフ場", "次のラウンドのきっかけを", "曜日やプレースタイルに合わせてプランやイベント情報を届ける", "/usecase-golf.png"],
  ["飲食店店舗", "また行きたいをつくる", "興味や利用目的を知って新商品やキャンペーンを届ける", "/usecase-shop.png"],
  ["その他", "届けたい人にきちんと届ける", "イベント地域活動政治活動など関心に合わせた情報発信にも", "/usecase-other.png"],
];

export default function CaseSection() {
  return (
    <section id="use-cases" data-page-reveal className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-500">Use Cases</p>
          <h2 className="mt-4 text-2xl font-bold leading-snug text-brand-900 sm:text-3xl">いろんな場所でこんなふうに</h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-[15px]">
            業種や業態を問わずLINEでつながったお客様との関係づくりに活用できます
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map(([label, title, text, image]) => (
            <article key={label} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="relative aspect-[4/3] bg-slate-50">
                <Image src={image} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs font-bold text-brand-500">{label}</p>
                <h3 className="mt-3 text-base font-bold leading-snug text-brand-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
