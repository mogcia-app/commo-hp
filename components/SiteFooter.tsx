import Image from "next/image";
import BrandName from "@/components/BrandName";

export default function SiteFooter() {
  return (
    <footer data-page-reveal className="bg-white py-10">
      <div className="section-shell grid gap-8 border-t border-slate-100 pt-10 lg:grid-cols-[1fr_auto]">
        <div>
          <a href="/" className="focus-ring inline-flex items-center gap-2 text-xl font-bold tracking-normal text-brand-900" aria-label="commo トップへ">
            <Image src="/commonewlogo.png" alt="" width={40} height={40} className="h-10 w-10 object-contain" />
            <BrandName />
          </a>
          <p className="mt-4 text-sm font-bold text-brand-600">顧客は集めるより育てる時代へ</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">
            LINEでつながったお客様を知り届けて次の行動へつなげるためのサービスです
          </p>
          <div className="mt-6 flex items-end gap-5">
            <Image
              src="/commonewlogo.png"
              alt=""
              width={82}
              height={82}
              className="ui-float h-20 w-20 object-contain opacity-95 drop-shadow-[0_10px_18px_rgba(43,26,58,0.10)]"
              aria-hidden="true"
            />
            <div className="grid gap-2 pb-2 text-xs font-bold text-brand-700">
              <span className="rounded-full bg-brand-50 px-3 py-1">知る</span>
              <span className="rounded-full bg-brand-50 px-3 py-1">届ける</span>
              <span className="rounded-full bg-brand-50 px-3 py-1">つなげる</span>
            </div>
          </div>
        </div>
        <div className="text-sm leading-7 text-slate-600 lg:text-right">
          <p className="font-bold text-brand-900">お問い合わせ</p>
          <p className="mt-2">平日 10:00〜17:00</p>
          <p>翌営業日にご連絡いたします</p>
          <p className="mt-3">TEL: 092-517-9804</p>
          <p>
            <a href="mailto:info@mogcia.jp" className="transition hover:text-brand-600">
              info@mogcia.jp
            </a>
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 lg:justify-end">
            <a href="https://www.mogcia.net/" className="transition hover:text-brand-600" target="_blank" rel="noreferrer">
              運営会社
            </a>
            <a href="/privacy-policy" className="transition hover:text-brand-600">
              プライバシーポリシー
            </a>
            <a href="/terms" className="transition hover:text-brand-600">
              利用規約
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
