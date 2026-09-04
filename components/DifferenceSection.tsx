"use client";

import { motion } from "framer-motion";
import BrandName from "@/components/BrandName";

const rows = [
  ["LINE機能の拡張", "◎", "◎"],
  ["アンケート 顧客管理", "◎", "◎"],
  ["セグメント配信", "◎", "◎"],
  ["予約 導線", "◎", "◎"],
  ["LINEミニページ", "ツールにより異なる", "◎"],
  ["顧客データのAI分析", "ツールにより異なる", "◎"],
  ["顧客別のAI文章作成", "ツールにより異なる", "◎"],
  ["初期設計", "基本は自社で設定", "一緒に設計"],
  ["リッチメニュー制作", "基本は自社で作成", "制作まで対応"],
  ["アンケート設計", "自社で作成", "内容から一緒に設計"],
  ["ミニページ制作", "自社で作成 設定", "制作まで対応"],
  ["配信 運用", "自社運用が中心", "運用支援あり"],
  ["分析 改善", "データを自社で活用", "AI＋運用支援で改善"],
];

export default function DifferenceSection() {
  return (
    <section data-page-reveal className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-500">Difference</p>
          <h2 className="mt-4 text-2xl font-bold leading-snug text-brand-900 sm:text-3xl">
            <BrandName />だからできること
          </h2>
          <div className="mt-5 space-y-2 text-sm leading-7 text-slate-700 sm:text-[15px]">
            <p>LINE拡張ツールはたくさんあります</p>
            <p>
              <BrandName className="font-bold text-brand-900" />は機能だけでなく設計 制作 運用まで一緒に進められることを大切にしています
            </p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mt-10 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_18px_55px_rgba(43,26,58,0.06)]"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="w-[30%] px-5 py-4 text-sm font-bold text-brand-900" scope="col" />
                  <th className="w-[34%] px-5 py-4 text-sm font-bold text-slate-500" scope="col">一般的なLINE拡張ツール</th>
                  <th className="w-[36%] bg-brand-50 px-5 py-4 text-sm font-bold text-brand-900" scope="col"><BrandName /></th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([point, typical, commo]) => (
                  <tr key={point} className="border-b border-slate-100 last:border-b-0">
                    <th className="px-5 py-3.5 text-sm font-bold leading-6 text-brand-900" scope="row">{point}</th>
                    <td className="px-5 py-3.5 text-sm leading-7 text-slate-500">{typical}</td>
                    <td className="bg-brand-50/70 px-5 py-3.5 text-sm font-bold leading-7 text-brand-900">{commo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
