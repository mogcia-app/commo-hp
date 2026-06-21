"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const examples = [
  {
    number: "01",
    title: "ホテル業界",
    image: "/8.png",
    text: "宿泊後のお客様とLINEでつながり、次回予約や館内サービスの案内につなげます。",
    flow: [
      { title: "友だち追加", text: "館内POPや受付でLINE登録" },
      {
        title: (
          <>
            宿泊プラン
            <br />
            クーポン配信
          </>
        ),
        text: "おすすめプランや特典を案内",
      },
      { title: "宿泊予約", text: "予約ページへスムーズに誘導" },
      { title: "ご宿泊", text: "滞在中も必要な情報を届ける" },
      { title: "お礼メッセージ", text: "宿泊後も接点を継続" },
      {
        title: (
          <>
            次回宿泊
            <br />
            クーポン
          </>
        ),
        text: "再予約のきっかけをつくる",
      },
      { title: "再来館", text: "継続利用につなげる" },
    ],
  },
  {
    number: "02",
    title: "ゴルフ業界",
    image: "/7.png",
    text: "平日利用や空き枠の案内を届け、再予約やキャンペーン参加につなげます。",
    flow: [
      { title: "友だち追加", text: "受付や精算時にLINE登録" },
      {
        title: (
          <>
            平日割引
            <br />
            イベント配信
          </>
        ),
        text: "空き枠や企画を直接案内",
      },
      { title: "プレー予約", text: "予約導線へスムーズに誘導" },
      { title: "来場", text: "プレー当日の接点をつくる" },
      { title: "お礼メッセージ", text: "来場後も関係を継続" },
      { title: "次回予約案内", text: "再予約のきっかけを届ける" },
      { title: "再来場", text: "継続利用につなげる" },
    ],
  },
  {
    number: "03",
    title: "美容業界",
    image: "/5.png",
    text: "来店周期に合わせた案内やクーポン配信で、次回来店のきっかけをつくります。",
    flow: [
      { title: "友だち追加", text: "来店時にLINE登録を案内" },
      { title: "スタイル提案", text: "おすすめメニューを案内" },
      { title: "来店予約", text: "LINEから予約へ誘導" },
      { title: "施術", text: "来店時の体験につなげる" },
      { title: "お礼メッセージ", text: "施術後も接点を継続" },
      {
        title: (
          <>
            来店周期に
            <br />
            合わせて配信
          </>
        ),
        text: "次回来店の時期に案内",
      },
      { title: "再来店", text: "定期利用につなげる" },
    ],
  },
  {
    number: "04",
    title: "飲食店など",
    image: "/6.png",
    text: "季節メニューやイベント情報を直接届け、再来店や予約につながる接点を増やします。",
    flow: [
      { title: "友だち追加", text: "店頭POPや会計時にLINE登録" },
      {
        title: (
          <>
            新メニュー
            <br />
            クーポン配信
          </>
        ),
        text: "来店理由になる情報を届ける",
      },
      { title: "来店", text: "LINEから来店につなげる" },
      { title: "お食事", text: "店舗での体験をつくる" },
      { title: "お礼メッセージ", text: "食後も接点を継続" },
      { title: "限定クーポン", text: "次回来店のきっかけを届ける" },
      { title: "再来店", text: "継続的な来店を促す" },
    ],
  },
];

export default function UseExampleSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold text-brand-500">Scene</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">活用事例</h2>
          <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            業種や来店サイクルに合わせて、LINEを再来店につながる接点として活用できます。
          </p>
        </div>

        <div className="mt-10 space-y-5">
          {examples.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="rounded-[2rem] bg-neutral-100 p-6 shadow-sm"
            >
              <div className="grid gap-6 lg:grid-cols-[320px_1fr] lg:items-center">
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-contain p-0"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div>
                  <p className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-500">
                    CASE {item.number}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-brand-900">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{item.text}</p>
                </div>
              </div>
              <div className="mt-6 border-t border-neutral-300 pt-5">
                <p className="text-sm font-bold text-brand-500">活用の流れ</p>
                <div className="mt-4 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] xl:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]">
                  {item.flow.map((flowItem, flowIndex) => (
                    <div key={flowIndex} className="contents">
                      <div className="rounded-3xl bg-white p-3 text-center">
                        <p className="text-xs font-bold text-brand-500">0{flowIndex + 1}</p>
                        <h4 className="mt-2 flex min-h-10 items-center justify-center text-sm font-normal leading-5 text-brand-900">
                          {flowItem.title}
                        </h4>
                      </div>
                      {flowIndex < item.flow.length - 1 && (
                        <div className="flex items-center justify-center">
                          <ArrowRight className="rotate-90 text-brand-500 md:rotate-0" aria-hidden="true" size={24} strokeWidth={2.5} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
