import type { Metadata } from "next";
import Download from "./Download";

export const metadata: Metadata = {
  title: "下载与安装",
  description:
    "下载 HR Helper 桌面端与浏览器扩展，安装 Chrome 浏览器，几步装好即可免费试用 3 天。支持 Windows / macOS。",
};

export default function DownloadPage() {
  return <Download />;
}
