"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const richMenuWorks = ["/1.png", "/3.png", "/4.png", "/10.png"];

export default function WorksSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold text-brand-500">Works</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">制作実績</h2>
        </div>

        <div className="mt-12">
          <div className="text-center">
            <h3 className="inline-flex rounded-full bg-brand-500 px-6 py-2 text-xl font-normal text-white sm:text-2xl">
              リッチメニュー
            </h3>
          </div>
          <div className="mx-auto mt-8 grid max-w-5xl gap-5 sm:grid-cols-2">
            {richMenuWorks.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-[2rem] bg-white"
              >
                <Image
                  src={item}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-contain p-4"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
