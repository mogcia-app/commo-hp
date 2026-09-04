import BrandName from "@/components/BrandName";

const faqs = [
  ["すでに使っているLINE公式アカウントでも利用できますか？", <>はい 現在お使いのLINE公式アカウントを活用して<BrandName className="font-bold text-brand-900" />を導入できます 新しくアカウントを作り直す必要はありません</>],
  ["LINE公式アカウントだけを使う場合と何が違いますか？", <><BrandName className="font-bold text-brand-900" />ではアンケートからお客様を知り属性や興味などで整理して相手に合わせた情報を届けられます LINEミニページや分析AIによるサポートなどその後のコミュニケーションまでまとめて活用できます</>],
  ["他社やLINE拡張ツールとは何が違いますか？", <>アンケートや顧客管理やセグメント配信など共通する機能もありますが<BrandName className="font-bold text-brand-900" />は顧客を知るところからLINEミニページで詳しく伝え予約や来店や購入など次の行動につなげるところまでをひとつの流れで設計しています</>],
  ["LINEミニページではどんなページが作れますか？", "キャンペーンやイベントや商品サービス紹介や予約申込みなど目的に合わせたページを作成できます LINEのメッセージだけでは伝えきれない情報をひとつのページにまとめられます"],
  ["AIでは何ができますか？", "アンケートや顧客情報やこれまでの反応などをもとに顧客の傾向を分析し次のアプローチを提案します 分析結果をもとに一人ひとりに合わせたチャット文章の作成もできます"],
  ["自分たちで運用できるか不安ですか？", "導入時の設定だけでなくアンケート内容や顧客の分け方や配信内容なども一緒に考えます 運用までお任せいただくこともできます"],
  ["どんな業種で利用できますか？", "ホテル旅館ゴルフ場飲食店店舗施設をはじめイベント地域活動セミナーなどでもご利用いただいています"],
  ["LINEの友だちがまだ少なくても導入できますか？", "はい 友だち数が多くなってから始める必要はありません 友だちを増やす導線づくりも含めて現在の状況に合わせた使い方をご提案します"],
  ["まずは話を聞くだけでも大丈夫ですか？", <>もちろんです 現在のLINE運用やお悩みを伺いながら<BrandName className="font-bold text-brand-900" />でできることをご案内します 導入を前提としたご相談でなくても大丈夫です</>],
];

export default function FaqSection() {
  return (
    <section id="faq" data-page-reveal className="bg-slate-50 py-16 sm:py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-500">FAQ</p>
          <h2 className="mt-4 text-2xl font-bold leading-snug text-brand-900 sm:text-3xl">よくあるご質問</h2>
        </div>
        <div className="mt-8 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
          {faqs.map(([q, a]) => (
            <details key={String(q)} className="group p-5">
              <summary className="cursor-pointer list-none text-sm font-bold leading-7 text-brand-900">
                Q {q}
              </summary>
              <div className="mt-3 text-sm leading-7 text-slate-600">A {a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
