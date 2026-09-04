"use client";

import { useMemo, useState } from "react";

const voices = [
  [
    "hotel",
    "宿泊施設",
    "運用までお願いできるので本業に集中できています",
    "選ばれるホテルづくりの施策のひとつとして導入しました 自社での運用は難しいと思っていましたが運用までお願いできるので助かっています こちらに寄り添いながら提案していただけるのも安心です 以前と比べてリピート率も上がっています",
  ],
  [
    "hotel",
    "宿泊施設",
    "SNSだけでは難しかった自社予約への導線ができました",
    "OTA手数料が負担になりSNSなどを活用して自社予約へ促していましたがなかなかうまくいきませんでした commo.では一度宿泊されたお客様とLINEでその後もつながれるためSNSだけで発信していた頃よりスムーズに自社予約へご案内できています",
  ],
  [
    "hotel",
    "宿泊施設",
    "急な空き枠もLINEから埋まるようになりました",
    "以前は急な空き枠が出ても特に施策ができていませんでした commo.を導入してからは空き状況をLINEから発信でき実際にLINEから予約が入るようになりました 最初は使い方もよく分かりませんでしたがサポートが手厚いので助かっています",
  ],
  [
    "golf",
    "ゴルフ場",
    "メンバー様への情報発信はLINEの方が届けやすかった",
    "これまではSNSを中心に発信していましたがご年配のメンバー様も多くなかなか見てもらえないことが課題でした 幅広い年代が利用しているLINEならメンバー様へ直接情報を届けやすくとても助かっています",
  ],
  [
    "golf",
    "ゴルフ場",
    "LINEミニページが導入の決め手でした",
    "以前他社サービスを利用して思うような結果が出ず導入には少し不安がありました 忙しくHPもなかなか更新できていなかったためLINEミニページを活用できることが導入の決め手に 今では「LINEを見て来たよ」と言っていただけることも多く助かっています",
  ],
  [
    "restaurant",
    "飲食店",
    "なんとなく分かっていたお客様がデータで見えるようになりました",
    "アンケートをオリジナルの内容にカスタマイズできるので知りたい情報をそのまま集められるのがいいですね これまで感覚的に把握していたお客様の傾向も管理画面で見えるようになり新商品の開発にも役立っています",
  ],
  [
    "restaurant",
    "飲食店",
    "まさかLINEから求人応募が来るとは思いませんでした",
    "季節限定メニューなどの発信だけでなく求人募集も配信してみたところ実際に応募がありました 面接で理由を聞くと「以前来店したことがありお店の雰囲気を知っていたのでここなら働けそうだと思った」という声が多くありました LINEでお客様とつながっておくことが採用にも活かせるとは驚きました",
  ],
  [
    "other",
    "地域 町おこし",
    "「LINEを見て来ました」という声が増えています",
    "町おこしの一環として利用しています 小さな村ですが毎月お店やイベントの情報をLINEミニページで発信しています SNSは難しく感じていましたがLINEなら地域の方にも情報を見てもらいやすいです 夏祭りなどのイベントでも例年より来場者が増えています",
  ],
  [
    "other",
    "政治 後援会活動",
    "当選したあともつながりを持ち続けられています",
    "有権者を年代や性別などで分類しLINEミニページを使って政策や後援会の情報を発信しています 若い世代にも政策を知ってもらうためSNSも活用していましたが公式LINEが一番手応えを感じています 当選後も活動報告を年代別などに分けて届けられるのでその後もつながりを持ち続けられています",
  ],
  [
    "other",
    "セミナー イベント",
    "1回の配信でも相手に合わせて伝え方を変えられる",
    "セミナーの予約や情報発信にLINEを活用しています ただ発信するだけではなく複数のターゲットに対してそれぞれ違う角度から情報を届けられるのがいいですね 特にLINEミニページが便利でセミナー前とセミナー後で見せる情報を分けられるのも助かっています",
  ],
  [
    "other",
    "BtoB 顧客フォロー",
    "契約後のお客様とも定期的に接点を持てるようになりました",
    "お問い合わせやご契約いただいた企業様への情報発信にLINEを活用しています 自社の魅力や新しい情報を定期的に届けられるのがありがたいです HPやSNSは定期的に見てもらえるとは限りませんがLINEなら情報を届けやすくそのままお問い合わせにつながることも増えています",
  ],
  [
    "other",
    "自動車関連",
    "電話やメールだけだった顧客との接点がLINEに変わりました",
    "メンテナンス情報などを定期的に発信するために活用しています 以前から顧客管理システムはありましたがその後の連絡手段は電話かメール 電話はつながらないこともあり忙しいと連絡する時間も取れませんでした 今では管理画面で次回来店日を確認し来店時期の少し前にLINEでご案内できるのでとても助かっています",
  ],
];

const tabs = [
  ["all", "すべて"],
  ["hotel", "ホテル"],
  ["golf", "ゴルフ場"],
  ["restaurant", "飲食店"],
  ["other", "その他"],
] as const;

export default function VoiceSection() {
  const [active, setActive] = useState<(typeof tabs)[number][0]>("all");
  const filtered = useMemo(() => voices.filter((voice) => active === "all" || voice[0] === active), [active]);

  return (
    <section data-page-reveal className="bg-slate-50 py-16 sm:py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-500">Voice</p>
          <h2 className="mt-4 text-2xl font-bold leading-snug text-brand-900 sm:text-3xl">いろんな場所でいろんな使い方</h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-[15px]">
            commo.の使い方は業種や目的によってさまざま 実際にご利用いただいている皆さまの声をご紹介します
          </p>
        </div>
        <div className="mt-7 flex flex-wrap gap-2">
          {tabs.map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActive(key)}
              className={`rounded-lg border px-4 py-2 text-xs font-bold transition ${
                active === key ? "border-brand-500 bg-brand-500 text-white" : "border-slate-200 bg-white text-slate-600 hover:border-brand-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((voice, index) => (
            <article key={`${voice[1]}-${index}`} className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-xs font-bold text-brand-500">{String(index + 1).padStart(2, "0")}｜{voice[1]}</p>
              <h3 className="mt-3 text-base font-bold leading-7 text-brand-900">「{voice[2]}」</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{voice[3]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
