"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "お客様へ直接情報を届けられる",
    lines: ["SNSのように", "埋もれることなく", "情報を届けやすいことが", "特徴です"],
    dot: "bg-red-500",
  },
  {
    title: "リピーター施策が行える",
    lines: ["クーポン配信やキャンペーン案内などを通じて", "再来店を促進できます"],
    dot: "bg-blue-500",
  },
  {
    title: "開封率が高い",
    lines: ["その日のうちに約8割が", "メッセージ開封をするため", "メールやSNSよりも", "即効性が高いです"],
    dot: "bg-green-500",
  },
  {
    title: "予約導線を作れる",
    lines: ["その日のうちに約8割が", "メッセージ開封をするため", "メールやSNSよりも", "即効性が高いです"],
    dot: "bg-yellow-400",
  },
  {
    title: "自動化できる",
    lines: ["予約完了通知や", "来店後フォローキャンペーン配信などを自動化でき", "業務負担を削減できます"],
    dot: "bg-neutral-400",
  },
  {
    title: "反応・行動に直結",
    lines: ["友だち登録を行うお客様は", "既にサービスへ興味を", "持っているため", "集客施策の成果に", "つながりやすい傾向があります"],
    dot: "bg-orange-500",
  },
];

export default function BenefitSection() {
  return (
    <section id="benefits" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-bold text-brand-500">Merit</p>
          <h2 className="mt-3 text-[22.5px] font-bold text-brand-900 sm:text-4xl">LINE友だち登録のメリット</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-3xl bg-neutral-100 p-6 text-center shadow-sm"
            >
              <h3 className="flex items-start justify-center gap-3 text-lg font-bold leading-7 text-brand-900">
                <span className={`mt-2 h-3 w-3 shrink-0 rounded-full ${item.dot}`} />
                <span>{item.title}</span>
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
