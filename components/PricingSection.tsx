"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    number: "01",
    name: "LINE START",
    title: "LINE運用をはじめたい",
    type: "初期設定 制作",
    price: "¥20,000",
    description: "LINE公式アカウントをこれから活用したい方向け 運用をはじめるために必要なところをまとめて整えます",
    features: ["LINE公式アカウント初期設定", "プロフィール設定", "あいさつメッセージ設定", "リッチメニュー設計 制作", "クーポン設定", "基本的な導線設定"],
  },
  {
    number: "02",
    name: "LINE SUPPORT",
    title: "LINE運用をおまかせ",
    type: "運用代行",
    price: "月額 ¥30,000〜",
    description: "LINEはあるけどなかなか運用できない そんな方向けに日々の配信や改善をサポートします",
    features: ["配信内容の企画", "配信文章の作成", "画像 バナー制作", "クーポン キャンペーン設定", "リッチメニュー更新", "配信設定"],
  },
  {
    number: "03",
    name: "commo.",
    title: "お客様を知って次の利用へ",
    type: "LINE × 顧客管理 × AI",
    price: "月額 50,000円",
    description: "LINEを運用するだけでなく一人ひとりのお客様を知りその後のコミュニケーションまでつなげたい方向け",
    features: ["顧客管理画面", "セグメント配信", "LINEミニページ", "予約 問い合わせ導線", "配信 反応分析", "AI顧客分析", "AIチャット文章作成", "運用サポート"],
    recommended: true,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" data-page-reveal className="bg-slate-50 py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-5 border-b border-slate-200 pb-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-500">Pricing</p>
            <h2 className="mt-3 text-2xl font-bold leading-snug text-brand-900 sm:text-3xl">目的に合わせて選べる3つのプラン</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-600 lg:justify-self-end">
            LINEをはじめたい方から運用を任せたい方顧客データまで活用したい方まで 今の状況に合わせて選べます
          </p>
        </div>
        <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className={`motion-card relative flex min-h-[410px] overflow-hidden rounded-lg border bg-white text-brand-900 ${
                plan.recommended ? "border-brand-500 shadow-[0_18px_60px_rgba(43,26,58,0.10)]" : "border-slate-200"
              }`}
            >
              {plan.recommended && <p className="absolute right-5 top-5 z-20 bg-brand-500 px-3 py-1 text-xs font-bold text-white">commo.</p>}
              <div className="relative z-10 flex w-full flex-col p-6 sm:p-7">
                <div>
                  <p className="text-xs font-bold text-brand-500">{plan.number}｜{plan.name}</p>
                  <h3 className="mt-3 pr-12 text-lg font-bold leading-snug">{plan.title}</h3>
                  <p className="mt-4 inline-flex w-fit bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">{plan.type}</p>
                  <p className="mt-4 min-h-[96px] text-sm leading-7 text-slate-600">{plan.description}</p>
                </div>
                <div className="mt-5 border-y border-slate-200 py-5">
                  <p className="text-xs font-bold text-brand-500">料金</p>
                  <p className="mt-2 min-h-[44px] text-2xl font-normal tracking-normal text-brand-900 sm:text-3xl">{plan.price}</p>
                </div>
                <div className="mt-5 flex-1">
                  <p className="text-xs font-bold text-slate-500">含まれるもの</p>
                  <ul className="mt-3 space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm font-bold text-brand-900">
                        <Check className="shrink-0 text-brand-500" aria-hidden="true" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="/contact"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-bold transition ${
                    plan.recommended ? "bg-brand-500 text-white hover:bg-brand-400" : "border border-brand-200 bg-white text-brand-900 hover:bg-brand-50"
                  }`}
                >
                  このプランで相談する
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
