import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "智医康 - 基于AI与智能硬件的肺癌数字化康复管理",
  description:
    "智医康连接患者与医生，通过AI与医疗级物联网硬件实现肺癌院外康复数字化管理。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
