# HR Helper 官网

HR Helper 产品官网（独立 Next.js 站点）。从主仓库 `boss-extension` 的 marketing 分支抽出，做成独立项目。

页面：
- `/` 落地页（`src/app/Landing.tsx`）
- `/download` 下载与安装（`src/app/download/`）
- `/guide` 扩展安装图文教程（`src/app/guide/`）

可编辑配置都在 [`src/app/site.ts`](src/app/site.ts)：下载链接、客服微信、更新日志（changelog）。

## 本地开发

```bash
npm install
npm run dev      # http://localhost:3100
```

## 构建/部署

```bash
npm run build && npm start   # next start -p 3100
```
部署时建议放在 `helper-hr.com`（落地页），与 `admin.helper-hr.com`（管控后台，在 boss-extension/server）分开。nginx 反代到 3100。

## 静态资源

- `public/downloads/hr-helper-<版本>.zip` —— 浏览器扩展压缩包。**扩展源码在另一个仓库 `boss-extension/sensor`**；
  由 boss-extension 的同步 workflow 在发版时自动打包推送，并自动改写 `site.ts` 的 `EXTENSION_URL` 指向最新版本，无需手动替换。
  > 当前架构为**纯浏览器**：所有操作（打招呼、翻页）都在浏览器内用可信输入完成，无需桌面端、无需校准。
- `public/downloads/ChromeSetup.exe` —— Chrome 安装包（方便国内用户）。如不想托管，可在 `site.ts` 把
  `CHROME_WIN_URL` 改成官方链接并删除此文件。
- `public/wechat-qr.png` —— 客服微信二维码。
