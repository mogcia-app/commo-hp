import { ArrowRight } from "lucide-react";
import BrandName from "@/components/BrandName";

export default function CTASection() {
  return (
    <section id="contact" className="bg-white px-5 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-brand-100 bg-white p-8 shadow-sm sm:p-12 lg:p-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-900 sm:text-4xl">
              <BrandName />
              のお問い合わせ・ご相談はこちらから
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              お気軽にご連絡ください
            </p>
          </div>
          <a
            href="/contact"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-4 text-base font-bold text-white shadow-sm transition hover:bg-brand-600"
          >
            お問い合わせはコチラ
            <ArrowRight aria-hidden="true" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
