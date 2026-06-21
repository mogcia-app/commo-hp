import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "commo. | 顧客は、集めるより育てる時代へ",
  description:
    "LINE公式アカウントの構築から予約導線づくり、配信運用、リピーター施策まで、commo.がまるっとサポートします。",
  openGraph: {
    title: "commo. | 顧客は、集めるより育てる時代へ",
    description:
      "予約・来店型ビジネスのLINE公式アカウント活用、予約導線、クーポン配信、リピーター施策を支援します。",
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
