"use client";

import { motion } from "framer-motion";
import BrandName from "@/components/BrandName";

const capabilities = [
  {
    title: "自社独自予約サイト",
    text: "外部媒体だけに頼らず、自社で予約を受けられる導線を整えます。",
    images: [
      "/apability-reservation-site-1.png",
      "/apability-reservation-site-2.png",
      "/apability-reservation-site-3.png",
    ],
    adminImage: "/capability-admin-dashboard.png",
  },
  {
    title: "メッセージ配信",
    text: "お知らせやキャンペーン情報を、友だち登録済みのお客様へ直接届けます。",
    images: ["/capability-message-delivery.png"],
  },
  {
    title: "個別チャット",
    text: "予約前の相談やお問い合わせにも対応しやすく、お客様との距離を近づけます。",
    images: ["/capability-chat.png"],
  },
  {
    title: "リッチメニューの作成",
    text: "予約、クーポン、問い合わせなど、必要な導線をLINE内でわかりやすく整理します。",
    images: ["/capability-rich-menu.png"],
  },
  {
    title: "クーポン・キャンペーン配信",
    text: "再来店につながる特典や企画を配信し、継続的な来店のきっかけをつくります。",
    images: ["/capability-coupon-campaign.png"],
  },
];

const otherSupports = [
  {
    title: "公式LINE初期設定サポート",
    text: (
      <>
        アカウント開設後の基本設定やプロフィール整備など
        <br />
        運用を始める前の準備をサポートします
      </>
    ),
    image: "/support-line-setup.png",
  },
  {
    title: "登録チラシと配布カード提供",
    text: (
      <>
        店頭や受付で友だち登録を案内しやすいよう
        <br />
        チラシや配布カードの制作もご用意できます
      </>
    ),
    image: "/support-flyer-card.png",
  },
];

export default function CapabilitySection() {
  return (
    <section id="features" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold text-brand-500">Service</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">
            <BrandName />
            でできること
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            公式LINEを作るだけで終わらせず、予約・配信・再来店までつながる導線をまとめて整えます。
            店舗ごとの課題に合わせて、必要な仕組みを無理なく導入できます。
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {capabilities.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className={`rounded-[2rem] bg-neutral-100 p-6 shadow-sm ${
                item.images.length === 3 ? "lg:col-span-2" : ""
              }`}
            >
              {item.images.length === 3 ? (
                <>
                  <div className="grid gap-6 lg:grid-cols-[1fr_220px] lg:items-center">
                    <div>
                      <h3 className="text-xl font-bold text-brand-900">{item.title}</h3>
                      <div className="my-5 grid aspect-[16/7] grid-cols-3 gap-3 rounded-3xl bg-white p-3">
                        {item.images.map((image) => (
                          <div key={image} className="relative flex items-center justify-center overflow-hidden rounded-2xl bg-neutral-100">
                            <img
                              src={image}
                              alt=""
                              className="h-full w-full scale-125 object-contain p-0"
                              onError={(event) => {
                                event.currentTarget.style.display = "none";
                              }}
                            />
                          </div>
                        ))}
                      </div>
                      <p className="text-sm leading-7 text-slate-600">{item.text}</p>
                    </div>
                    <div className="text-center">
                      <div className="mx-auto flex aspect-square max-w-[220px] items-center justify-center overflow-hidden rounded-full bg-white">
                        <img
                          src={item.adminImage}
                          alt=""
                          className="h-full w-full object-contain p-6"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                      <p className="mt-3 text-sm font-bold text-brand-900">管理画面付き</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="grid gap-5 sm:grid-cols-[1fr_220px] sm:items-center">
                  <div>
                    <h3 className="text-xl font-bold text-brand-900">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                  <div className="relative flex aspect-square items-center justify-center overflow-hidden">
                    <img
                      src={item.images[0]}
                      alt=""
                      className="h-full w-full object-contain p-0"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                </div>
              )}
            </motion.article>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-brand-900 sm:text-3xl">
            ＼ その他にも ／
          </h3>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {otherSupports.map((item) => (
              <article key={item.title} className="grid gap-5 rounded-[2rem] bg-neutral-100 p-6 shadow-sm sm:grid-cols-[160px_1fr] sm:items-center">
                <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-white">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-contain p-4"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-900">{item.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
