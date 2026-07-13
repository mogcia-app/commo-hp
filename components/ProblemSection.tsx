"use client";

import { motion } from "framer-motion";
import { BarChart3, Clock, Database, MessageCircle, RefreshCw, Send, Sparkles } from "lucide-react";

const problems = [
  {
    id: "line-official",
    icon: MessageCircle,
    title: "LINEを開設しただけで活用できていない",
  },
  {
    id: "content",
    icon: Sparkles,
    title: "何を配信したら良いか分からない",
  },
  {
    id: "repeat",
    icon: RefreshCw,
    title: "リピーターが増えない",
  },
  {
    id: "data",
    icon: Database,
    title: "顧客情報を活かせていない",
  },
  {
    id: "time",
    icon: Clock,
    title: "毎月運用する時間がない",
  },
  {
    id: "send",
    icon: Send,
    title: "配信して終わっている",
  },
  {
    id: "touchpoint",
    icon: BarChart3,
    title: "お客様との接点が続かない",
  },
];

export default function ProblemSection() {
  return (
    <section id="problems" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="text-center">
          <h2 className="text-[15px] font-bold text-brand-900 sm:text-4xl">
            ＼ こんなお悩み ありませんか？ ／
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="rounded-3xl border border-slate-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
                  <item.icon aria-hidden="true" size={21} strokeWidth={2.4} />
                </span>
                <p className="text-sm font-black text-brand-500">{String(index + 1).padStart(2, "0")}</p>
              </div>
              <h3 className="mt-5 text-base font-bold leading-7 text-brand-900">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
