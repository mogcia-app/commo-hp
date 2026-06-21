import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import BrandName from "@/components/BrandName";

export const metadata: Metadata = {
  title: "お問い合わせ | commo.",
  description: "commo.へのお問い合わせ・ご相談はこちらからご連絡ください。",
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
    <main className="bg-white">
      <header className="border-b border-slate-100">
        <div className="section-shell flex h-20 items-center">
          <a href="/" className="focus-ring inline-flex items-center gap-2 rounded-full text-2xl font-black text-brand-900" aria-label="commo. トップへ">
            <Image src="/commo.logo.png" alt="" width={32} height={32} className="h-8 w-8" />
            <BrandName />
          </a>
        </div>
      </header>

      <section className="section-shell py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold text-brand-500">Contact</p>
          <h1 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">お問い合わせ</h1>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            commo<span className="text-brand-500">.</span>に関するご相談・お問い合わせは、以下のフォームよりご連絡ください。
          </p>

          <div className="mt-10 rounded-[2rem] bg-neutral-100 p-6 sm:p-8">
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
                    className="focus-ring mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-brand-900"
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
                  className="focus-ring mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-brand-900"
                />
                <div data-formrun-show-if-error="お問い合わせ内容" className="mt-2 text-sm font-bold text-red-500">
                  お問い合わせ内容を入力してください
                </div>
              </label>

              <label className="flex items-start gap-3 rounded-2xl bg-white p-4 text-sm leading-6 text-slate-700">
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
                  If you are a human, ignore this field
                </label>
                <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabIndex={-1} />
              </div>

              <button
                type="submit"
                data-formrun-error-text="未入力の項目があります"
                data-formrun-submitting-text="送信中..."
                className="focus-ring inline-flex w-full items-center justify-center rounded-full bg-brand-500 px-7 py-4 text-base font-bold text-white shadow-sm transition hover:bg-brand-600 sm:w-auto"
              >
                送信
              </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Script src="https://sdk.form.run/js/v2/formrun.js" strategy="afterInteractive" />
    </main>
  );
}
