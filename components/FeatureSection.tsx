"use client";

import { motion } from "framer-motion";
import { BarChart3, BellRing, CalendarCheck, Gift, LineChart, MessageSquareText, PanelsTopLeft, UsersRound } from "lucide-react";
import BrandName from "@/components/BrandName";

const features = [
  {
    title: "自社予約導線構築",
    icon: CalendarCheck,
    tags: ["LINE予約", "自社予約サイト", "リッチメニュー", "予約フォーム", "予約リマインド"],
    text: "予約までの導線を整備し、スムーズな予約体験を実現します。",
  },
  {
    title: "顧客管理",
    icon: UsersRound,
    tags: ["顧客管理", "利用履歴管理", "セグメント管理", "来店分析", "再来店分析"],
    text: "お客様情報をまとめて管理し、継続的な関係づくりをサポートします。",
  },
  {
    title: "LINE運用支援",
    icon: MessageSquareText,
    tags: ["配信代行", "クーポン配信", "キャンペーン企画", "ステップ配信", "再来店施策"],
    text: "運用までサポートし、リピーターづくりを支援します。",
  },
];

const productionItems = [
  { name: "リッチメニュー", icon: PanelsTopLeft },
  { name: "クーポン画像", icon: Gift },
  { name: "配信用バナー", icon: BellRing },
  { name: "予約ページ", icon: CalendarCheck },
  { name: "友だち追加POP", icon: LineChart },
  { name: "QRカード", icon: BarChart3 },
];

export default function FeatureSection() {
  return (
    <section id="features" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-bold text-brand-500">What We Build</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">
            <BrandName />
            が提供する3つの仕組み
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-cyan-400 text-white shadow-glow">
                  <feature.icon aria-hidden="true" size={26} />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-500">0{index + 1}</p>
                  <h3 className="text-xl font-bold text-brand-900">{feature.title}</h3>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-600">{feature.text}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {feature.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-900">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] bg-slate-950 p-6 text-white shadow-soft sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold text-brand-100">Creative Assets</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">制作物イメージ</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                店頭・Web・LINE内で使う接点をまとめて整え、登録から予約まで迷いのない体験にします。
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {productionItems.map((item) => (
                <div key={item.name} className="rounded-3xl bg-white/10 p-3 ring-1 ring-white/10">
                  <div className="mb-3 flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-white/25 to-white/5">
                    <item.icon className="text-white/80" aria-hidden="true" size={30} />
                  </div>
                  <p className="text-sm font-bold">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
