import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "HR Helper · 智能招聘助手", template: "%s · HR Helper" },
  description: "智能招聘助手 · 自动打招呼 · 拟人化操作 · 提效 10 倍",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.31.0/dist/tabler-icons.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
