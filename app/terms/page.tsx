import type { Metadata } from "next";
import Image from "next/image";
import BrandName from "@/components/BrandName";

export const metadata: Metadata = {
  title: "利用規約 | commo.",
  description: "株式会社MOGCIAが運営するcommo.の利用規約です。",
};

const sections = [
  {
    title: "1. 適用",
    body: "本規約は、株式会社MOGCIA（以下「当社」といいます。）が提供するLINE活用支援サービス「commo.」および関連サービスの利用条件を定めるものです。利用者は、本規約に同意のうえ本サービスを利用するものとします。",
  },
  {
    title: "2. サービス内容",
    body: "本サービスは、LINE公式アカウントの構築支援、予約導線の設計、配信運用支援、リピーター施策、制作物の提供、その他これらに付随する支援を行うものです。具体的な提供範囲は、個別の契約または合意内容に従います。",
  },
  {
    title: "3. 利用料金",
    body: "利用料金、支払方法、支払期日等は、当社と利用者の間で別途定めるものとします。利用者は、合意した条件に従い料金を支払うものとします。",
  },
  {
    title: "4. 禁止事項",
    body: "利用者は、法令または公序良俗に反する行為、第三者の権利を侵害する行為、虚偽情報の提供、不正アクセス、当社または第三者に損害を与える行為、本サービスの運営を妨げる行為を行ってはなりません。",
  },
  {
    title: "5. 知的財産権",
    body: "本サービスに関連して当社が作成または提供する資料、デザイン、文章、画像、ノウハウ等の知的財産権は、別段の定めがない限り当社または正当な権利者に帰属します。",
  },
  {
    title: "6. 外部サービス",
    body: "本サービスでは、LINEその他の外部サービスを利用する場合があります。外部サービスの仕様変更、停止、制限等により本サービスの一部に影響が生じる場合があります。",
  },
  {
    title: "7. 免責事項",
    body: "当社は、本サービスの利用により特定の売上、予約数、来店数、成果が発生することを保証しません。当社の責めに帰すべき事由がある場合を除き、利用者に生じた損害について責任を負いません。",
  },
  {
    title: "8. 契約の停止・解除",
    body: "利用者が本規約または個別契約に違反した場合、当社は本サービスの提供停止または契約解除を行うことができます。",
  },
  {
    title: "9. 規約の変更",
    body: "当社は、必要に応じて本規約を変更することがあります。変更後の規約は、本サイト上に掲載した時点で効力を生じます。",
  },
  {
    title: "10. 準拠法・管轄",
    body: "本規約は日本法に準拠します。本サービスに関して紛争が生じた場合、当社所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。",
  },
  {
    title: "11. お問い合わせ",
    body: "本規約に関するお問い合わせは、info@mogcia.jp までご連絡ください。",
  },
];

export default function TermsPage() {
  return (
    <main className="bg-white">
      <header className="border-b border-slate-100">
        <div className="section-shell flex h-20 items-center">
          <a href="/" className="focus-ring inline-flex items-center gap-2 rounded-full text-2xl font-black text-brand-900" aria-label="commo. トップへ">
            <Image src="/commo.logo.png" alt="" width={32} height={32} className="h-8 w-8" />
            <BrandName />
          </a>
        </div>
      </header>
      <section className="section-shell py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold text-brand-500">Terms</p>
          <h1 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">利用規約</h1>
          <p className="mt-6 text-sm leading-7 text-slate-600">
            本利用規約は、株式会社MOGCIAが提供するLINE活用支援サービス「commo.」および関連サービスの利用条件を定めるものです。
          </p>
          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-bold text-brand-900">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{section.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-10 text-sm text-slate-500">制定日: 2026年6月22日</p>
          <p className="mt-2 text-sm text-slate-500">株式会社MOGCIA</p>
        </div>
      </section>
    </main>
  );
}
