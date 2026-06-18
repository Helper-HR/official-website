/* ===== 站点可编辑配置：填上真实链接即可生效，留空则显示占位/敬请期待 ===== */

// 浏览器扩展 = 仓库里的 sensor/ 文件夹（所有操作都在浏览器内完成，无需桌面端）。
// 发布新版后用 sensor/ 重新打包替换 public/downloads/sensor.zip 即可。
export const EXTENSION_URL = "/downloads/sensor.zip";

// Chrome 浏览器安装包（用户的前置条件，已就绪）
export const CHROME_WIN_URL = "/downloads/ChromeSetup.exe";
export const CHROME_MAC_URL =
  "https://dl.google.com/tag/s/appguid%3DCOM.GOOGLE.CHROME%26iid%3D%7BD39D1232-3096-0F59-1660-CD3020631483%7D%26brand%3DGGRO/chrome/mac/universal/stable/googlechrome.dmg";
export const CHROME_OFFICIAL = "https://www.google.cn/chrome/";

// 演示视频（录好后填，按钮自动可点）
export const DEMO_VIDEO_URL = "";

// 客服微信号（手机端无法扫码时复制添加）
export const WECHAT_ID = "";

/* ===== 版本更新日志：在最前面加新版本即可（请改成真实内容） ===== */
export const CHANGELOG: { ver: string; date: string; tag?: string; items: string[] }[] = [
  {
    ver: "v1.2.0",
    date: "2026-06-18",
    tag: "最新",
    items: [
      "纯浏览器架构：免装桌面端，安装扩展即可用",
      "列表页一键开场：自动点开可视区候选人进详情",
      "今日额度实时显示，每打一个即时扣减",
    ],
  },
  {
    ver: "v1.1.0",
    date: "2026-06-03",
    items: [
      "详情页阅读式工作流：滚动阅读 → 斟酌 → 沟通",
      "打招呼节奏更拟人，随机停顿、游走与休息优化",
      "授权与每日额度管控，远程续期/调额",
    ],
  },
  {
    ver: "v1.0.0",
    date: "2026-05-20",
    items: [
      "首个正式版：浏览器内可信输入打招呼 + 自动翻页",
      "侧边栏显示在线额度与运行日志",
      "Chrome 全支持，一键加载扩展",
    ],
  },
];
