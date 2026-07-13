"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "LINE運用支援",
    price: "30,000円",
    description: "毎月の配信運用と改善提案を任せたい方向け",
    features: ["配信企画", "配信文作成", "画像制作", "改善提案"],
  },
  {
    name: "LINE運用+ミニページ",
    price: "50,000円",
    description: "魅力を伝えるコンテンツまで整えたい方向け",
    features: ["配信企画", "配信文作成", "画像制作", "改善提案", "LINEミニページ制作（5ページ）"],
    recommended: true,
  },
];

const rows = ["配信企画", "配信文作成", "画像制作", "改善提案", "LINEミニページ制作（5ページ）"];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-brand-50 py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold text-brand-500">Pricing</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">料金</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            LINE運用だけでなく、顧客育成に必要なコンテンツ制作まで支援できます。
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className={`relative rounded-[2rem] bg-white p-8 text-brand-900 shadow-sm ${
                plan.recommended ? "ring-2 ring-brand-500" : ""
              }`}
            >
              {plan.recommended && (
                <p className="absolute right-6 top-6 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white">
                  おすすめ
                </p>
              )}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{plan.description}</p>
              <p className="mt-6 text-sm font-bold text-brand-500">月額</p>
              <p className="mt-1 text-3xl font-normal sm:text-4xl">{plan.price}</p>
              <ul className="mt-7 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-bold text-brand-900">
                    <Check className="shrink-0 text-brand-500" aria-hidden="true" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-[2rem] bg-white shadow-sm">
          <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-slate-100 bg-neutral-100 text-sm font-bold text-brand-900">
            <div className="p-4">内容</div>
            <div className="p-4 text-center">LINE運用支援</div>
            <div className="p-4 text-center">LINE運用+ミニページ</div>
          </div>
          {rows.map((row) => (
            <div key={row} className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-slate-100 text-sm last:border-b-0">
              <div className="p-4 font-bold text-brand-900">{row}</div>
              <div className="flex items-center justify-center p-4 text-brand-500">
                {plans[0].features.includes(row) ? <Check aria-label="含まれます" size={19} /> : <span className="text-slate-300">-</span>}
              </div>
              <div className="flex items-center justify-center p-4 text-brand-500">
                {plans[1].features.includes(row) ? <Check aria-label="含まれます" size={19} /> : <span className="text-slate-300">-</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
