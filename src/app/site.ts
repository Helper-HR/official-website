/* ===== 站点可编辑配置：填上真实链接即可生效，留空则显示占位/敬请期待 ===== */

// 浏览器扩展（眼睛）= 仓库里的 sensor/ 文件夹。
// 由 scripts/pack-extension.mjs 在每次构建时从仓库重新打包，故此链接永远是最新版。
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
      "新增「AI 智能筛选」预告入口",
      "打招呼节奏更拟人，随机停顿与游走优化",
      "侧边栏显示在线额度与运行日志",
    ],
  },
  {
    ver: "v1.1.0",
    date: "2026-06-03",
    items: [
      "详情页阅读式工作流：滚动阅读 → 斟酌 → 沟通",
      "授权与每日额度管控，远程续期/调额",
      "多屏与系统缩放下的坐标校准更稳",
    ],
  },
  {
    ver: "v1.0.0",
    date: "2026-05-20",
    items: [
      "首个正式版：真实鼠标打招呼 + 自动翻页",
      "「眼睛 + 手」双引擎架构上线",
      "Windows / macOS + Chrome 全支持",
    ],
  },
];
