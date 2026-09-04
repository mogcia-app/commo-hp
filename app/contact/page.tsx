import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import BrandName from "@/components/BrandName";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "お問い合わせ | commo.",
  description: "commo.へのお問い合わせ・ご相談はこちらからご連絡ください",
};

const fields = [
  { label: "会社名", name: "会社名", type: "text", required: false },
  { label: "担当者名", name: "担当者名", type: "text", required: false },
  { label: "部署", name: "部署", type: "text", required: false },
  { label: "電話番号", name: "電話番号", type: "tel", required: false },
  { label: "メールアドレス", name: "メールアドレス", type: "text", required: true },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfc]">
      <header className="border-b border-slate-100 bg-white/88 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between">
          <a href="/" className="focus-ring inline-flex items-center gap-2 text-xl font-bold text-brand-900" aria-label="commo トップへ">
            <Image src="/commonewlogo.png" alt="" width={40} height={40} className="h-10 w-10 object-contain" />
            <BrandName />
          </a>
          <a href="/" className="text-xs font-bold text-slate-500 transition hover:text-brand-600">
            トップへ戻る
          </a>
        </div>
      </header>

      <section className="py-14 sm:py-18">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="max-w-lg lg:sticky lg:top-24">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-500">Contact</p>
              <h1 className="mt-4 text-2xl font-normal leading-snug text-brand-900 sm:text-3xl">
                今のLINE活用を一緒に整理します
              </h1>
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-[15px]">
                友だち追加の導線 配信内容 予約や来店につなげる流れまで 現在の状況を伺いながら<BrandName className="font-bold text-brand-900" />でできることをご案内します
              </p>
              <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200 text-sm">
                {["LINE公式アカウントをこれから整えたい", "配信や運用を相談したい", "commo.で顧客管理やAI分析まで活用したい"].map((item) => (
                  <p key={item} className="py-4 font-bold leading-6 text-brand-900">
                    {item}
                  </p>
                ))}
              </div>
              <div className="mt-8">
                <Image
                  src="/commonewlogo.png"
                  alt=""
                  width={96}
                  height={96}
                  className="ui-float-slow h-24 w-24 object-contain drop-shadow-[0_14px_22px_rgba(43,26,58,0.12)]"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-[0_18px_55px_rgba(43,26,58,0.06)] sm:p-7">
              {/* class, action, method are required by form.run. */}
              <form className="formrun" action="https://form.run/api/v1/r/zr9v2ocam37mj5zv415nevel" method="post">
                <div className="grid gap-5">
                {fields.map((field) => (
                  <label key={field.name} className="block">
                    <span className="text-sm font-bold text-brand-900">
                      {field.label}
                      {field.required && <span className="ml-2 text-brand-500">[必須]</span>}
                    </span>
                    <input
                      name={field.name}
                      type={field.type}
                      data-formrun-type={field.name === "メールアドレス" ? "email" : undefined}
                      data-formrun-required={field.required ? "" : undefined}
                      className="focus-ring mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-brand-900"
                    />
                    {field.name === "メールアドレス" && (
                      <div data-formrun-show-if-error="メールアドレス" className="mt-2 text-sm font-bold text-red-500">
                        メールアドレスを正しく入力してください
                      </div>
                    )}
                  </label>
                ))}

                <label className="block">
                  <span className="text-sm font-bold text-brand-900">
                    お問い合わせ内容<span className="ml-2 text-brand-500">[必須]</span>
                  </span>
                  <textarea
                    name="お問い合わせ内容"
                    data-formrun-required=""
                    rows={7}
                    className="focus-ring mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-brand-900"
                  />
                  <div data-formrun-show-if-error="お問い合わせ内容" className="mt-2 text-sm font-bold text-red-500">
                    お問い合わせ内容を入力してください
                  </div>
                </label>

                <label className="flex items-start gap-3 rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                  <input type="checkbox" name="個人情報利用同意" data-formrun-required="" className="mt-1 h-4 w-4 accent-brand-500" />
                  <span>
                    <a href="https://roomlychat.com/privacy-policy" target="_blank" rel="noreferrer" className="font-bold text-brand-600 underline-offset-4 hover:underline">
                      個人情報の取り扱い
                    </a>
                    に同意する <span className="text-brand-500">[必須]</span>
                    <span data-formrun-show-if-error="個人情報利用同意" className="mt-2 block font-bold text-red-500">
                      同意してください
                    </span>
                  </span>
                </label>

                <div className="_formrun_gotcha">
                  <style>{`._formrun_gotcha {position:absolute!important;height:1px;width:1px;overflow:hidden;}`}</style>
                  <label htmlFor="_formrun_gotcha">
                    If you are a human ignore this field
                  </label>
                  <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabIndex={-1} />
                </div>

                <button
                  type="submit"
                  data-formrun-error-text="未入力の項目があります"
                  data-formrun-submitting-text="送信中..."
                  className="focus-ring inline-flex w-full items-center justify-center rounded-lg bg-brand-500 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-brand-600 sm:w-auto"
                >
                  送信する
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
      <Script src="https://sdk.form.run/js/v2/formrun.js" strategy="afterInteractive" />
    </main>
  );
}
