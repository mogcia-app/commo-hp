"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BrandName from "@/components/BrandName";

const steps = [
  {
    title: "新規集客",
    image: "/mechanism-attract.png",
    imageName: "mechanism-attract.png",
  },
  {
    title: "初来店・初利用",
    image: "/mechanism-first-visit.png",
    imageName: "mechanism-first-visit.png",
  },
  {
    title: (
      <>
        commo.
        でリピーター化
      </>
    ),
    repeatSteps: [
      { label: "LINE登録", image: "/mechanism-line-register.png" },
      { label: "クーポン・情報配信", image: "/mechanism-coupon-delivery.png", labelClassName: "text-xs" },
      { label: "再来店・予約", image: "/mechanism-return-booking.png" },
      { label: "リピート化へ", image: "/mechanism-repeat.png" },
    ],
  },
];

export default function FlowSection() {
  return (
    <section id="flow" className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold text-brand-500">Mechanism</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">
            <BrandName />
            の仕組み
          </h2>
          <p className="mt-6 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            一度来てくれたお客様との関係づくりが、これからの店舗経営には欠かせません
            <br />
            新規集客は外部媒体、リピーター育成は<BrandName className="font-bold text-brand-900" />
            <br />
            それぞれの役割を活かすことで安定した集客と継続的な関係構築を実現します
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1320px] gap-6 lg:grid-cols-[0.95fr_auto_0.95fr_auto_2.15fr] lg:items-center">
          {steps.map((step, index) => (
            <div key={index} className="contents">
              <motion.article
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className={`rounded-[2rem] bg-white text-center ${
                  step.repeatSteps ? "p-6 lg:p-8" : "p-5 lg:p-6"
                }`}
              >
                <h3
                  className={`rounded-full bg-brand-500 px-6 py-3.5 font-bold text-white ${
                    step.repeatSteps ? "text-xl lg:text-2xl" : "text-lg"
                  }`}
                >
                  {step.title}
                </h3>
                {step.repeatSteps ? (
                  <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] sm:items-start">
                    {step.repeatSteps.map((item, repeatIndex) => (
                      <div key={item.label} className="contents">
                        <div>
                          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-neutral-100">
                            <img
                              src={item.image}
                              alt=""
                              className="h-full w-full object-contain p-3"
                              onError={(event) => {
                                event.currentTarget.style.display = "none";
                              }}
                            />
                          </div>
                          <p className={`mt-3 font-normal leading-5 text-brand-900 ${item.labelClassName ?? "text-sm"}`}>
                            {item.label}
                          </p>
                        </div>
                        {repeatIndex < step.repeatSteps.length - 1 && (
                          <div className="flex justify-center pt-0 sm:pt-8">
                            <ArrowRight className="rotate-90 text-brand-500 sm:rotate-0" aria-hidden="true" size={30} strokeWidth={2.5} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative mt-5 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-neutral-100">
                    <img
                      src={step.image}
                      alt=""
                      className="h-full w-full object-contain p-5"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                )}
              </motion.article>
              {index < steps.length - 1 && (
                <div className="flex justify-center">
                  <ArrowRight className="rotate-90 text-brand-500 lg:rotate-0" aria-hidden="true" size={34} strokeWidth={2.5} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
