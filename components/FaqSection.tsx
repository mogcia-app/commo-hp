import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "既存LINEは使えますか？", a: "はい。現在のLINE公式アカウントを活かしながら、必要な設定や導線を整えます。" },
  { q: "LINEを持っていなくても大丈夫ですか？", a: "はい。アカウントの開設準備から初期設定までサポートします。" },
  { q: "配信内容も考えてもらえますか？", a: "はい。業種や来店サイクルに合わせて、クーポンやキャンペーン内容をご提案します。" },
  { q: "外部媒体をやめる必要がありますか？", a: "いいえ。外部媒体で出会ったお客様とLINEでつながり、再来店につなげる設計です。" },
];

export default function FaqSection() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold text-brand-500">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">よくある質問</h2>
        </div>
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-brand-900">
                {faq.q}
                <ChevronDown className="shrink-0 text-brand-500 transition group-open:rotate-180" aria-hidden="true" size={22} />
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
