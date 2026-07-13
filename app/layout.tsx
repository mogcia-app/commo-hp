import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "commo. | 顧客は、集めるより育てる時代へ",
  description:
    "LINEを活用し、顧客との継続的な接点づくり、情報発信、運用改善を通じてリピーター化を支援する伴走型の顧客育成プラットフォームです。",
  openGraph: {
    title: "commo. | 顧客は、集めるより育てる時代へ",
    description:
      "一度利用・来店したお客様と継続的につながり、関係を育て、また利用したくなる流れをつくるLINE運用プラットフォームです。",
    type: "website",
    locale: "ja_JP",
    siteName: "commo.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/commo.logo.png",
    shortcut: "/commo.logo.png",
    apple: "/commo.logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
