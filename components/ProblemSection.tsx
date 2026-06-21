"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const problems = [
  {
    id: "line-official",
    image: "/kadai1.png",
    imageClassName: "scale-100",
    title: (
      <>
        公式LINEを
        <br />
        活用したいと思っている
      </>
    ),
  },
  {
    id: "repeat-idea",
    image: "/kadai2.png",
    imageClassName: "scale-125",
    title: (
      <>
        リピーターを増やしたいが
        <br />
        何をすればいいかわからない
      </>
    ),
  },
  {
    id: "reservation-site",
    image: "/kadai3.png",
    imageClassName: "scale-100",
    title: (
      <>
        自社独自の
        <br />
        予約サイトが欲しい
      </>
    ),
  },
  {
    id: "ota-fee",
    image: "/kadai4.png",
    imageClassName: "scale-100",
    title: (
      <>
        OTAの手数料が
        <br />
        年々重荷になっている
      </>
    ),
  },
];

export default function ProblemSection() {
  return (
    <section id="problems" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brand-900 sm:text-4xl">
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
              className="rounded-3xl border border-slate-100 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <p className="text-lg font-black text-brand-500">{String(index + 1).padStart(2, "0")}</p>
              <div className="relative my-5 aspect-[4/3] overflow-hidden rounded-3xl bg-white">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className={`object-contain p-1 ${item.imageClassName}`}
                />
              </div>
              <h3 className="text-sm font-normal leading-6 text-brand-900 sm:text-base">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
