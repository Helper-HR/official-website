import type { Metadata } from "next";
import Landing from "./Landing";

export const metadata: Metadata = {
  title: "HR Helper · 智能招聘助手｜自动打招呼 · 拟人化 · 提效 10 倍",
  description:
    "HR Helper 帮你在 BOSS 直聘自动浏览候选人、拟人化打招呼、自动翻页，温和保护账号。免费试用 3 天，支持 Windows / macOS + Chrome。",
};

export default function Home() {
  return <Landing />;
}
