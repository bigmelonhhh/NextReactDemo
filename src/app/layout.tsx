import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "卓繁信息",
  description:
    "上海卓繁信息技术股份有限公司，专注数字政府、一网通办、一网统管、数字乡村和智慧园区解决方案。",
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
