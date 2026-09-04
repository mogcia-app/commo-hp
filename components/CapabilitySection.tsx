"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BrandName from "@/components/BrandName";

const items = [
  ["01", "お客様のことをもっと知る", "LINEから気軽に回答してもらい属性や興味や利用目的を知るきっかけに"],
  ["02", "一人ひとりの違いが見えてくる", "アンケートの回答などをもとにお客様を属性や興味ごとに整理"],
  ["03", "届けたい人に届けたい情報を", "全員に同じ内容ではなく対象を分けてLINEで情報を届ける"],
  ["04", "LINEの中にもう1ページ", "メッセージだけでは伝えきれない情報をLINEから見られる専用ページで"],
  ["05", "届けたあとの反応も見る", "配信やお客様の反応を確認し次のコミュニケーションへ"],
  ["06", "次の行動につなげる", "予約や問い合わせ来店や購入などお客様の次に自然につながる導線をつくる"],
];

export default function CapabilitySection() {
  return (
    <section id="features" data-page-reveal className="bg-slate-50 py-16 sm:py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-500">Features</p>
          <h2 className="mt-4 text-2xl font-bold leading-snug text-brand-900 sm:text-3xl">
            知って分けて届けて次の行動へ
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-[15px]">
            <BrandName className="font-bold text-brand-900" />はLINEでつながったお客様との関係づくりをひとつの流れで整えます
          </p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(([number, title, text], index) => (
            <motion.article
              key={number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="rounded-lg border border-slate-200 bg-white p-5"
            >
              <p className="text-xs font-bold text-brand-500">{number}</p>
              <h3 className="mt-3 text-base font-bold leading-snug text-brand-900">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </motion.article>
          ))}
        </div>
        <div className="mt-10 grid gap-6 rounded-lg border border-brand-100 bg-white p-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-500">AI Assist</p>
            <h3 className="mt-3 text-xl font-bold leading-snug text-brand-900">AIが顧客ごとのコミュニケーションをサポート</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              アンケートや顧客情報これまでの反応をAIが分析し一人ひとりに合った次のアプローチやチャット文章づくりを支援します
            </p>
          </div>
          <div className="relative min-h-[240px] overflow-hidden rounded-lg bg-white">
            <Image src="/aicommo.png" alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
