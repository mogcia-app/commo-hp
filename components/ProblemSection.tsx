"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const problems = [
  {
    id: "kadai-1",
    image: "/kadai1.png",
    label: "01",
    title: "お客様のことが見えていない",
    text: "誰がなぜ来てくれたのか 次に何を届ければいいのかが見えていない",
  },
  {
    id: "kadai-2",
    image: "/kadai2.png",
    label: "02",
    title: "LINEをうまく活かせていない",
    text: "とりあえず配信しているだけで 来店や予約につながっている実感がない",
  },
  {
    id: "kadai-3",
    image: "/kadai3.png",
    label: "03",
    title: "リピーター施策が後回しになっている",
    text: "新規集客に追われて また来てもらうための接点づくりまで手が回らない",
  },
  {
    id: "kadai-4",
    image: "/kadai4.png",
    label: "04",
    title: "何を配信すればいいか分からない",
    text: "キャンペーン 予約導線 地域の情報 打ち手は必要でも企画に落とし込めない",
  },
];

export default function ProblemSection() {
  return (
    <section id="problems" data-page-reveal className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-500">Problem</p>
          <h2 className="mt-4 text-2xl font-bold leading-snug text-brand-900 sm:text-3xl">
            こんなお悩みありませんか？
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            LINEも予約導線もある けれどお客様のことが見えていないと次の一手はどうしても勘に頼りがちです
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {problems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="grid min-h-[180px] gap-5 rounded-lg border border-slate-200 bg-white p-5 shadow-[0_14px_40px_rgba(43,26,58,0.05)] sm:grid-cols-[140px_1fr] sm:items-center"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-brand-50 sm:aspect-square">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="140px"
                  className="object-contain p-3"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-500">{item.label}</p>
                <h3 className="mt-2 text-lg font-bold leading-7 text-brand-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
