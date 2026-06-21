"use client";

import { motion } from "framer-motion";
import { Building2, ChefHat, Dumbbell, Hotel, Scissors, School, Sparkles, Trees } from "lucide-react";

const targets = [
  { label: "ホテル・旅館", icon: Hotel },
  { label: "ゴルフ場", icon: Trees },
  { label: "美容室", icon: Scissors },
  { label: "サロン", icon: Sparkles },
  { label: "整体院", icon: Dumbbell },
  { label: "飲食店", icon: ChefHat },
  { label: "スクール", icon: School },
  { label: "レジャー施設", icon: Building2 },
];

const cases = [
  { industry: "ホテル・旅館", title: "宿泊後にクーポン配信", text: "チェックアウト後も接点を保ち、次回宿泊や館内サービスの利用につなげます。" },
  { industry: "ゴルフ場", title: "平日利用キャンペーン", text: "空き枠の多い曜日に合わせて案内し、予約導線までスムーズに誘導します。" },
  { industry: "美容室", title: "次回来店案内", text: "前回来店からの期間に合わせて、自然なタイミングで再来店を促します。" },
  { industry: "飲食店", title: "季節イベント告知", text: "限定メニューやイベント情報を届け、来店のきっかけをつくります。" },
];

export default function CaseSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-bold text-brand-500">Use Cases</p>
            <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">予約・来店型ビジネスに広く対応</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              業種ごとの来店サイクルや予約行動に合わせ、LINEの接点を設計します。
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {targets.map((target) => (
                <div key={target.label} className="flex items-center gap-3 rounded-2xl bg-brand-50 px-4 py-3">
                  <target.icon className="shrink-0 text-brand-500" aria-hidden="true" size={19} />
                  <span className="text-sm font-bold text-brand-900">{target.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {cases.map((item, index) => (
              <motion.article
                key={item.industry}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex aspect-[16/10] items-center justify-center rounded-3xl bg-gradient-to-br from-brand-50 via-white to-cyan-50">
                  <span className="text-sm font-bold text-brand-500">Placeholder</span>
                </div>
                <p className="text-sm font-bold text-brand-500">{item.industry}</p>
                <h3 className="mt-2 text-xl font-bold text-brand-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
