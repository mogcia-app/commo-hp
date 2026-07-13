"use client";

import { motion } from "framer-motion";
import { Bot, Database, LineChart, MessagesSquare, Tags, Users } from "lucide-react";
import BrandName from "@/components/BrandName";

const miniPageItems = [
  { title: "3分でわかる施設紹介", image: "/a.png" },
  { title: "朝食へのこだわり", image: "/b.png" },
  { title: "客室タイプ", image: "/c.png" },
  { title: "周辺情報", image: "/d.png" },
  { title: "イベント情報", image: "/e.png" },
  { title: "LINE限定特典", image: "/a6.png", imageClassName: "object-[center_33%]" },
];

const adminFeatures = [
  { title: "LINEユーザー", icon: Users },
  { title: "アンケート", icon: MessagesSquare },
  { title: "タグ", icon: Tags },
  { title: "セグメント", icon: Database },
  { title: "分析", icon: LineChart },
  { title: "AI改善提案", icon: Bot },
];

export default function CapabilitySection() {
  return (
    <section id="features" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold text-brand-500">LINE Mini Page</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">LINEミニページ</h2>
          <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            ホームページの代わりではなく、今この人に届けたい内容だけを切り出したスマホ専用コンテンツ。
            店舗・施設の魅力を資産として蓄積し、必要なタイミングで届けます。
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {miniPageItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm"
            >
              <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                <img src={item.image} alt="" className={`h-full w-full object-cover ${item.imageClassName ?? ""}`} />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-brand-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  お客様の興味や利用タイミングに合わせて、LINE配信から自然に案内できます。
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="rounded-[2rem] border border-slate-100 bg-white p-2 shadow-soft">
            <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[1.5rem] bg-neutral-100">
              <img
                src="/capability-admin-dashboard.png"
                alt="管理画面のイメージ"
                className="h-full w-full object-contain p-1"
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-brand-500">Dashboard</p>
            <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">管理画面</h2>
            <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
              顧客を知り、配信を分け、反応を見て改善するための管理画面を用意します。
              管理画面は予約サイト作成時のみ付属し、LINEミニページのみの制作には含まれません。
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {adminFeatures.map((item) => (
                <div key={item.title} className="flex items-center gap-3 rounded-2xl bg-neutral-100 p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-500">
                    <item.icon aria-hidden="true" size={20} />
                  </span>
                  <span className="text-sm font-bold text-brand-900">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-[2rem] bg-brand-50 p-7 text-center">
          <p className="text-sm font-bold leading-7 text-brand-900 sm:text-base">
            <BrandName />
            は、LINEで情報を届けるだけではなく、魅力を蓄積し、顧客理解と改善につなげるための運用基盤です。
          </p>
        </div>
      </div>
    </section>
  );
}
