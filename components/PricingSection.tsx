"use client";

import { motion } from "framer-motion";

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-brand-50 py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold text-brand-500">Pricing</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">料金</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            導入から運用まで、必要な支援範囲に合わせてご提案します。
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="w-full max-w-xl rounded-[2rem] bg-white p-8 text-center text-brand-900 shadow-sm"
          >
            <p className="text-3xl font-bold">お問い合わせください</p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
