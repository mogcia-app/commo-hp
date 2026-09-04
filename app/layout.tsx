import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "commo. | 顧客は集めるより育てる時代へ",
  description: "LINEでつながった顧客を理解し分類し必要な情報を届け次の行動につなげる顧客コミュニケーションツールです",
  openGraph: {
    title: "commo. | 顧客は集めるより育てる時代へ",
    description: "LINEでつながった顧客を知り分けて届けて予約や問い合わせ購入再利用などの次の行動へつなげるcommo.の公式サイトです",
  },
  icons: {
    icon: "/commonewlogo.png",
    shortcut: "/commonewlogo.png",
    apple: "/commonewlogo.png",
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
