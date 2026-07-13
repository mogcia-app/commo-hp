"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, HeartHandshake } from "lucide-react";
import BrandName from "@/components/BrandName";

const steps = [
  "集客",
  "友達追加",
  "魅力を伝える",
  "顧客を知る",
  "関係を育てる",
  "また利用してもらう",
];

export default function FlowSection() {
  return (
    <section id="flow" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold text-brand-500">Purpose</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">
            <BrandName />
            が目指すこと
          </h2>
          <p className="mt-6 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            LINEは手段であり、目的ではありません。
            <br />
            一度の接点からお客様を知り、魅力を届け、また利用したくなる関係を育てます。
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] xl:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]">
          {steps.map((step, index) => (
            <div key={index} className="contents">
              <motion.article
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[2rem] border border-slate-100 bg-white p-5 text-center shadow-sm"
              >
                <p className="text-xs font-black text-brand-500">STEP {index + 1}</p>
                <h3 className="mt-3 flex min-h-14 items-center justify-center text-base font-bold leading-6 text-brand-900">
                  {step}
                </h3>
              </motion.article>
              {index < steps.length - 1 && (
                <div className="flex items-center justify-center">
                  <ArrowRight className="hidden text-brand-500 md:block" aria-hidden="true" size={26} strokeWidth={2.5} />
                  <ArrowDown className="text-brand-500 md:hidden" aria-hidden="true" size={26} strokeWidth={2.5} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl items-start gap-4 rounded-[2rem] bg-brand-50 p-6 text-brand-900">
          <HeartHandshake className="mt-1 shrink-0 text-brand-500" aria-hidden="true" size={26} />
          <p className="text-sm font-light leading-7 sm:text-base">
            集めた友だち数ではなく、関係が深まり、また利用したいと思ってもらえる状態をつくることがゴールです。
          </p>
        </div>
      </div>
    </section>
  );
}
