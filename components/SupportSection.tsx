"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BrandName from "@/components/BrandName";

const supportItems = [
  ["01", "導入サポート", "最初の設定から一緒に", "LINE公式アカウントとの連携やcommo.の初期設定など利用開始までをサポートします"],
  ["02", "設計サポート", "何を聞く どう分けるも", "アンケートの内容や顧客分類や配信の考え方など目的に合わせて一緒に設計します"],
  ["03", "運用サポート", "使いながら出てくる疑問にも", "操作方法や設定変更や日々の運用についても気軽にご相談いただけます"],
  ["04", "改善サポート", "届けたあとの反応も次に活かす", "配信や顧客の反応を見ながら次にできることや改善方法をご提案します"],
];

export default function SupportSection() {
  return (
    <section data-page-reveal className="relative overflow-hidden bg-white py-16 sm:py-20">
      <Image src="/support.png" alt="" fill sizes="100vw" className="object-cover object-center" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/88 to-white/34" aria-hidden="true" />
      <div className="absolute inset-0 bg-white/18" aria-hidden="true" />
      <div className="section-shell relative">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-500">Support</p>
          <h2 className="mt-4 text-2xl font-bold leading-snug text-brand-900 sm:text-3xl">はじめるときも使いはじめてからも</h2>
          <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-[15px]">
            LINEや<BrandName className="font-bold text-brand-900" />は導入して終わりではありません 設定や使い方はもちろん運用していく中で出てくる「これどうしよう？」にも一緒に対応します
          </p>
        </div>
        <div className="mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
          {supportItems.map(([number, title, heading, text], index) => (
            <motion.article
              key={number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="rounded-lg border border-white/70 bg-white/82 p-5 shadow-[0_18px_55px_rgba(43,26,58,0.07)] backdrop-blur"
            >
              <p className="text-xs font-bold text-brand-500">{number}｜{title}</p>
              <h3 className="mt-3 text-base font-bold leading-snug text-brand-900">{heading}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </motion.article>
          ))}
        </div>
        <div className="mt-8 max-w-4xl rounded-lg border border-brand-100 bg-white/88 p-5 shadow-[0_18px_55px_rgba(43,26,58,0.07)] backdrop-blur">
          <p className="text-sm font-bold leading-7 text-brand-900">
            「使いこなせるか不安」な方もご安心ください <BrandName />を実際の運用に活かせるところまでサポートします
          </p>
        </div>
      </div>
    </section>
  );
}
