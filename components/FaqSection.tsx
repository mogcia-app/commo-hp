import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "既にLINEがあります", a: "既存のLINE公式アカウントを活かせます。現在の設定や配信状況を確認し、顧客育成に必要な導線やコンテンツを整えます。" },
  { q: "予約サイトがあります", a: "問題ありません。commo.は予約サイトを置き換える前提ではなく、既存の導線と組み合わせて継続接点をつくる設計です。" },
  { q: "どこまで運用してくれますか？", a: "配信企画、配信文作成、画像制作、改善提案まで支援します。LINE運用+ミニページではLINEミニページ制作も含みます。" },
  { q: "自分たちでもできますか？", a: "はい。運用定着を見据えて、毎月続けやすい配信テーマや改善の型を一緒に整えます。" },
  { q: "成果は保証されますか？", a: "売上やリピート数の保証はしていません。反応を見ながら改善し、継続利用につながる接点を増やす支援を行います。" },
  { q: "どんな業種が対象ですか？", a: "ホテル、ゴルフ場、飲食店、美容室など、一度利用・来店したお客様と継続的につながりたい業種が対象です。" },
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
