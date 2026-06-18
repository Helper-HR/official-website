import type { Metadata } from "next";
import Guide from "./Guide";

export const metadata: Metadata = {
  title: "扩展安装图文教程",
  description: "图文教程：如何把 HR Helper 浏览器扩展加载到 Chrome —— 解压、开启开发者模式、加载已解压的扩展程序。",
};

export default function GuidePage() {
  return <Guide />;
}
