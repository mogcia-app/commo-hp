import { CalendarDays, FileQuestion, MousePointerClick, PanelsTopLeft } from "lucide-react";
import Image from "next/image";

const pageTypes = [
  {
    icon: FileQuestion,
    title: "アンケートページ",
    text: "興味や目的や利用状況をLINEからそのまま回答してもらえるページに",
    image: "/page1.png",
  },
  {
    icon: CalendarDays,
    title: "イベント案内",
    text: "開催日時やイベント内容や参加方法などをひとつのページに",
    image: "/page2.png",
  },
  {
    icon: PanelsTopLeft,
    title: "商品 サービス紹介",
    text: "商品やサービスやプランの特徴や料金を写真と一緒にわかりやすく",
    image: "/page3.png",
  },
  {
    icon: MousePointerClick,
    title: "予約 問い合わせ導線",
    text: "詳しく見たその流れで予約や問い合わせなど次の行動へ",
    image: "/page4.png",
  },
];

const pageUseTags = ["施設紹介", "メニュー", "特典", "イベント案内", "予約導線"];

export default function MiniPageSection() {
  return (
    <section id="mini-page" data-page-reveal className="bg-white pb-16 sm:pb-20">
      <div className="relative min-h-[520px] overflow-hidden bg-white lg:min-h-[560px]">
        <Image
          src="/lineminiPage.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[62%_18%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/82 to-white/0" aria-hidden="true" />
        <div className="section-shell relative">
          <div className="flex min-h-[520px] items-center py-12 lg:min-h-[560px]">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-500">LINE Mini Page</p>
              <h2 className="mt-4 text-2xl font-bold leading-snug text-brand-900 sm:text-3xl">
                LINEの中に伝わるページを
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700 sm:text-[15px] sm:leading-8">
                <p>お知らせだけでは伝えきれないことをもっと見やすくもっとわかりやすく</p>
                <p>LINEからそのまま開ける専用ページで詳しい情報から次のアクションまでひとつにつなげます</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-14 sm:py-16">
        <div className="section-shell">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-5 h-px w-24 bg-brand-300" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-500">Mini Page Examples</p>
            <h3 className="mt-3 text-2xl font-bold leading-snug text-brand-900">
              こんなページがつくれます
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              写真や詳しい情報をまとめてLINEからそのまま見てもらえるページに
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {pageTypes.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="grid gap-5 rounded-lg border border-slate-200 bg-white p-5 shadow-[0_14px_40px_rgba(43,26,58,0.04)] sm:grid-cols-[150px_1fr] sm:items-center"
                >
                  <div className="relative mx-auto h-56 w-40 overflow-hidden bg-white" aria-hidden="true">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="160px"
                        className="scale-125 object-contain"
                      />
                    ) : (
                      <div className="flex h-[78%] w-[72%] items-center justify-center border border-dashed border-brand-100 bg-white/60 text-brand-300">
                        <Icon aria-hidden="true" size={28} />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="text-base font-bold leading-7 text-brand-900">{item.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mx-auto mt-8 max-w-3xl border-t border-slate-100 pt-6 text-center">
            <div className="flex flex-wrap justify-center gap-2">
              {pageUseTags.map((tag) => (
                <span key={tag} className="rounded-full bg-brand-50 px-4 py-2 text-sm font-bold text-brand-900">
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm font-bold leading-7 text-brand-900">
              業種や目的に合わせてLINEの中に必要なページを用意できます
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
