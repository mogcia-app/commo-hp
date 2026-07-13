"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-background relative min-h-[760px] overflow-hidden pb-16 pt-28 sm:pb-24 lg:min-h-[820px] lg:pt-36">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          className="mt-6 max-w-3xl text-left sm:mt-14 lg:mt-36"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="text-sm font-bold leading-6 text-brand-600 sm:text-base lg:text-xl">
            顧客は、集めるより育てる時代へ
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-[1.2] tracking-normal text-brand-900 sm:text-4xl lg:mt-4 lg:text-6xl">
            一度の出会いを
            <br />
            継続する関係へ
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base lg:mt-6 lg:max-w-2xl lg:text-lg lg:leading-8">
            LINEを活用し、
            <br />
            顧客との継続的な接点をつくり、
            <br />
            業種に合わせた情報発信と運用改善で、
            <br className="hidden sm:block" />
            リピーターづくりを支援する伴走型プラットフォームです。
          </p>
        </motion.div>
        <div aria-hidden="true" className="hidden lg:block" />
      </div>
    </section>
  );
}
