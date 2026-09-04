"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

const purposes = ["予約", "来店", "購入", "申込み", "イベント参加", "その他"] as const;

const labels: Record<(typeof purposes)[number], string> = {
  予約: "次の予約につながる",
  来店: "次の来店につながる",
  購入: "次の購入につながる",
  申込み: "申込みにつながる",
  イベント参加: "イベント参加につながる",
  その他: "次の行動につながる",
};

const formatNumber = (value: number) => Math.round(value).toLocaleString("ja-JP");

export default function SimulationSection() {
  const [purpose, setPurpose] = useState<(typeof purposes)[number]>("予約");
  const [open, setOpen] = useState(false);
  const [monthlyCustomers, setMonthlyCustomers] = useState(1000);
  const [lineAddRate, setLineAddRate] = useState(30);

  const result = useMemo(() => {
    const customers = Math.max(0, monthlyCustomers || 0);
    const addRate = Math.min(100, Math.max(0, lineAddRate || 0));
    const lineUsers = customers * (addRate / 100);
    const actionUsers = lineUsers * 0.2 * 0.1;
    return {
      lineUsers,
      actionUsers,
      annualLineUsers: lineUsers * 12,
      annualActionUsers: actionUsers * 12,
    };
  }, [lineAddRate, monthlyCustomers]);

  return (
    <section data-page-reveal className="bg-slate-50 py-16 sm:py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-500">Simulation</p>
          <h2 className="mt-4 text-2xl font-bold leading-snug text-brand-900 sm:text-3xl">
            commo.を使ったらどのくらい変わる？
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-[15px]">
            今のお客様の数や利用状況を入力すると活用したときのイメージをかんたんに確認できます
          </p>
        </div>
        <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <p className="text-sm font-bold text-brand-900">入力内容</p>
            <div className="mt-5 space-y-5">
              <label className="block">
                <span className="text-xs font-bold text-slate-500">月間の顧客接点数</span>
                <input
                  type="number"
                  min={0}
                  value={monthlyCustomers}
                  onChange={(event) => setMonthlyCustomers(Math.max(0, Number(event.target.value)))}
                  className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm font-bold text-brand-900 outline-none focus:border-brand-500"
                />
              </label>
              <label className="block">
                <span className="text-xs font-bold text-slate-500">LINE友だち追加率</span>
                <div className="mt-2 flex items-center gap-3">
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={lineAddRate}
                    onChange={(event) => setLineAddRate(Number(event.target.value))}
                    className="w-full accent-brand-500"
                  />
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={lineAddRate}
                    onChange={(event) => setLineAddRate(Math.min(100, Math.max(0, Number(event.target.value))))}
                    className="w-20 rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold outline-none focus:border-brand-500"
                  />
                </div>
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setOpen((value) => !value)}
                  className="flex w-full items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-left text-sm font-bold text-brand-900"
                >
                  利用目的 {purpose}
                  <ChevronDown size={16} aria-hidden="true" />
                </button>
                {open && (
                  <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
                    {purposes.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => {
                          setPurpose(item);
                          setOpen(false);
                        }}
                        className="block w-full px-4 py-3 text-left text-sm font-bold text-brand-900 hover:bg-brand-50"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <p className="text-sm font-bold text-brand-900">シミュレーション結果</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-brand-50 p-4">
                <p className="text-xs font-bold text-slate-500">LINEでつながる</p>
                <p className="mt-2 text-2xl font-bold text-brand-900">{formatNumber(result.lineUsers)}人</p>
              </div>
              <div className="rounded-lg bg-brand-50 p-4">
                <p className="text-xs font-bold text-slate-500">{labels[purpose]}</p>
                <p className="mt-2 text-2xl font-bold text-brand-900">{formatNumber(result.actionUsers)}人</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <p className="text-xs font-bold text-slate-500">年間LINE接点数</p>
                <p className="mt-2 text-xl font-bold text-brand-900">{formatNumber(result.annualLineUsers)}人</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <p className="text-xs font-bold text-slate-500">年間の次の行動人数</p>
                <p className="mt-2 text-xl font-bold text-brand-900">{formatNumber(result.annualActionUsers)}人</p>
              </div>
            </div>
            <p className="mt-5 text-xs leading-6 text-slate-500">
              入力いただいた数値をもとにした簡易シミュレーションです 実際の成果を保証するものではありません
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
