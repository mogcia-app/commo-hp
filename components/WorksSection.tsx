"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const steps = [
  "初回配信 + LINEミニページ",
  "魅力紹介",
  "アンケート",
  "興味を知る",
  "興味別配信",
  "継続配信",
  "また利用したい",
  "リピーター",
];

export default function WorksSection() {
  return (
    <section className="bg-brand-50 py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold text-brand-500">Customer Growth</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">顧客育成イメージ</h2>
          <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            一方的に情報を送るのではなく、相手を知り、興味に合わせて届け方を変え、関係を育てていきます。
          </p>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] xl:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]">
          {steps.map((step, index) => (
            <div key={step} className="contents">
              <motion.article
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                className={`rounded-[2rem] p-5 text-center shadow-sm ${
                  index === steps.length - 1 ? "bg-brand-500 text-white" : "bg-white text-brand-900"
                }`}
              >
                <p className={`text-xs font-black ${index === steps.length - 1 ? "text-white/80" : "text-brand-500"}`}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 flex min-h-14 items-center justify-center text-sm font-bold leading-6">
                  {step}
                </h3>
              </motion.article>
              {index < steps.length - 1 && (
                <div className="flex items-center justify-center">
                  <ArrowRight className="hidden text-brand-500 md:block" aria-hidden="true" size={22} strokeWidth={2.5} />
                  <ArrowDown className="text-brand-500 md:hidden" aria-hidden="true" size={22} strokeWidth={2.5} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
