"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const roadmap = [
  {
    month: "Month 1",
    title: "設計",
    text: "目的、顧客導線、配信テーマ、必要なコンテンツを整理します。",
  },
  {
    month: "Month 2",
    title: "コンテンツ制作",
    text: "店舗・施設の魅力を届けるLINEミニページと初回配信を整えます。",
  },
  {
    month: "Month 3",
    title: "アンケート",
    text: "興味、利用目的、来店周期などを把握する質問設計を行います。",
  },
  {
    month: "Month 4",
    title: "分析",
    text: "反応、回答、セグメント別の傾向を見て、次の打ち手を整理します。",
  },
  {
    month: "Month 5",
    title: "改善",
    text: "配信内容、導線、セグメントを見直し、より届きやすい運用へ調整します。",
  },
  {
    month: "Month 6",
    title: "運用定着",
    text: "毎月続けられる配信サイクルと改善の型を店舗側に残します。",
  },
];

export default function UseExampleSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold text-brand-500">Operation Support</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">導入して終わりではありません。</h2>
          <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            設計、制作、顧客理解、分析、改善、運用定着まで伴走します。
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] xl:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]">
          {roadmap.map((item, index) => (
            <div key={item.month} className="contents">
              <motion.article
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-black text-brand-500">{item.month}</p>
                <h3 className="mt-3 text-xl font-bold text-brand-900">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
              </motion.article>
              {index < roadmap.length - 1 && (
                <div className="flex items-center justify-center">
                  <ArrowRight className="hidden text-brand-500 lg:block" aria-hidden="true" size={24} strokeWidth={2.5} />
                  <ArrowDown className="text-brand-500 lg:hidden" aria-hidden="true" size={24} strokeWidth={2.5} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
