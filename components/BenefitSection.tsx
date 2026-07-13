"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const nurtureSteps = [
  "友達追加",
  "自動配信",
  "魅力を知る",
  "アンケート",
  "興味を知る",
  "興味別配信",
  "分析",
  "改善",
  "また利用したい",
];

export default function BenefitSection() {
  return (
    <section id="benefits" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold text-brand-500">Nurture Flow</p>
          <h2 className="mt-3 text-[22.5px] font-bold text-brand-900 sm:text-4xl">友達追加はゴールではありません。</h2>
          <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            追加後の体験設計、興味の把握、配信の改善までをつなげて、継続利用のきっかけを増やします。
          </p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] xl:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]">
          {nurtureSteps.map((item, index) => (
            <div key={item} className="contents">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                className="rounded-3xl bg-neutral-100 p-4 text-center shadow-sm"
              >
                <p className="text-xs font-black text-brand-500">0{index + 1}</p>
                <h3 className="mt-2 flex min-h-12 items-center justify-center text-sm font-bold leading-5 text-brand-900">
                  {item}
                </h3>
              </motion.article>
              {index < nurtureSteps.length - 1 && (
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
