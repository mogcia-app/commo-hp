"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import BrandName from "@/components/BrandName";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16">
      <Image
        src="/hiro.co2.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_45%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/82 to-white/6" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-white/0" aria-hidden="true" />
      <div className="section-shell relative grid min-h-[560px] items-center pb-12 pt-10 lg:min-h-[600px]">
        <motion.div
          className="max-w-2xl text-left"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="inline-flex rounded-full border border-brand-100 bg-white/84 px-4 py-2 text-xs font-bold text-brand-600 shadow-[0_10px_30px_rgba(43,26,58,0.05)] backdrop-blur">
            LINE × 顧客管理 × AI
          </p>
          <h1 className="mt-6 max-w-2xl text-3xl font-normal leading-[1.18] tracking-normal text-brand-900 sm:text-4xl lg:text-[46px]">
            顧客とのつながりを
            <span className="mt-2 block">LINEから育てる</span>
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-700 sm:text-[15px] sm:leading-8">
            <BrandName className="font-bold text-brand-900" />はお客様を知り必要な情報を届け次の来店や予約へつなげるLINE活用サービスです
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-600"
            >
              無料で相談する
              <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a
              href="#features"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-lg border border-brand-100 bg-white/80 px-6 py-3 text-sm font-bold text-brand-900 transition hover:bg-white"
            >
              できることを見る
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
