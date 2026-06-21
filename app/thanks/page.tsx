import type { Metadata } from "next";
import Image from "next/image";
import BrandName from "@/components/BrandName";

export const metadata: Metadata = {
  title: "お問い合わせありがとうございました | commo.",
  description: "commo.へのお問い合わせを受け付けました。",
};

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-slate-100">
        <div className="section-shell flex h-20 items-center">
          <a href="/" className="focus-ring inline-flex items-center gap-2 rounded-full text-2xl font-black text-brand-900" aria-label="commo. トップへ">
            <Image src="/commo.logo.png" alt="" width={32} height={32} className="h-8 w-8" />
            <BrandName />
          </a>
        </div>
      </header>

      <section className="section-shell flex min-h-[calc(100vh-5rem)] items-center justify-center py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold text-brand-500">Thank You</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-brand-900 sm:text-4xl">
            お問い合わせありがとうございました
          </h1>
          <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            内容を確認のうえ、担当者より翌営業日以降にご連絡いたします。
          </p>
          <a
            href="/"
            className="focus-ring mt-10 inline-flex items-center justify-center rounded-full bg-brand-500 px-7 py-4 text-base font-bold text-white shadow-sm transition hover:bg-brand-600"
          >
            トップへ戻る
          </a>
        </div>
      </section>
    </main>
  );
}
