import type { Metadata } from "next";
import Image from "next/image";
import BrandName from "@/components/BrandName";

export const metadata: Metadata = {
  title: "プライバシーポリシー | commo.",
  description: "株式会社MOGCIAが運営するcommo.のプライバシーポリシーです",
};

const sections = [
  {
    title: "1. 個人情報の取得",
    body: "当社はお問い合わせ資料請求サービスのお申し込み打ち合わせサポート対応等に際し氏名会社名店舗名電話番号メールアドレスその他必要な情報を適正な手段により取得します",
  },
  {
    title: "2. 個人情報の利用目的",
    body: "取得した個人情報はお問い合わせへの回答サービスの提案・提供・運用支援本人確認請求・契約管理サービス改善重要なお知らせの連絡法令に基づく対応のために利用します",
  },
  {
    title: "3. 個人情報の第三者提供",
    body: "当社は法令に基づく場合本人の同意がある場合業務委託先に必要な範囲で提供する場合を除き個人情報を第三者に提供しません",
  },
  {
    title: "4. 業務委託",
    body: "当社はサービス提供や運用に必要な範囲で個人情報の取り扱いを外部事業者に委託することがありますこの場合適切な委託先を選定し必要な管理を行います",
  },
  {
    title: "5. 安全管理",
    body: "当社は個人情報の漏えい滅失毀損不正アクセス等を防止するため合理的な安全管理措置を講じます",
  },
  {
    title: "6. 開示・訂正・利用停止等",
    body: "本人から個人情報の開示訂正追加削除利用停止等の請求があった場合法令に従い適切に対応します",
  },
  {
    title: "7. Cookie等の利用",
    body: "当社サイトでは利便性向上やアクセス解析のためCookie等を利用する場合がありますブラウザ設定によりCookieを無効にできますが一部機能が利用できない場合があります",
  },
  {
    title: "8. 改定",
    body: "当社は必要に応じて本ポリシーを変更することがあります変更後の内容は本サイト上に掲載した時点で効力を生じます",
  },
  {
    title: "9. お問い合わせ",
    body: "本ポリシーに関するお問い合わせはinfo@mogcia.jp までご連絡ください",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <header className="border-b border-slate-100">
        <div className="section-shell flex h-20 items-center">
          <a href="/" className="focus-ring inline-flex items-center gap-2 rounded-full text-2xl font-bold text-brand-900" aria-label="commo. トップへ">
            <Image src="/commo.logo.png" alt="" width={32} height={32} className="h-8 w-8" />
            <BrandName />
          </a>
        </div>
      </header>
      <section className="section-shell py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold text-brand-500">Privacy Policy</p>
          <h1 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">プライバシーポリシー</h1>
          <p className="mt-6 text-sm leading-7 text-slate-600">
            株式会社MOGCIA（以下「当社」といいます）は当社が提供するLINE活用支援サービス「<BrandName className="font-bold text-brand-900" />」および関連サービスにおいて取り扱う個人情報について以下のとおりプライバシーポリシーを定めます
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
