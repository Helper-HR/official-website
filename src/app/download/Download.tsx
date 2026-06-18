"use client";

import { useEffect, useState } from "react";
import { CHROME_WIN_URL, CHROME_MAC_URL, CHROME_OFFICIAL, EXTENSION_URL, WECHAT_ID, CHANGELOG } from "../site";
import "../landing.css";

export default function Download() {
  const [qrOk, setQrOk] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => setQrOk(true);
    img.onerror = () => setQrOk(false);
    img.src = "/wechat-qr.png";
  }, []);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".lp-reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("lp-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("lp-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="lp">
      {/* ===== 导航 ===== */}
      <nav className="lp-nav">
        <div className="lp-wrap lp-nav-inner">
          <a className="lp-brand" href="/">
            <span className="lp-logo">HR</span>
            <span>HR Helper</span>
          </a>
          <div className="lp-nav-links">
            <a href="/">返回首页</a>
            <a href="/#pricing">价格</a>
            <a href="/#faq">常见问题</a>
            <a href="#trial" className="lp-btn lp-btn--primary lp-btn--sm">
              开通试用
            </a>
          </div>
        </div>
      </nav>

      {/* ===== 标题 ===== */}
      <header className="lp-hero" style={{ padding: "56px 0 36px" }}>
        <div className="lp-wrap">
          <span className="lp-pill">
            <i className="ti ti-download" aria-hidden="true" />
            免费试用 3 天
          </span>
          <h1 className="lp-h1" style={{ fontSize: 38 }}>
            下载与安装
          </h1>
          <p className="lp-hero-sub">
            按下面三步装好即可开始。支持 Chrome 浏览器，Windows / macOS 均可。
          </p>
        </div>
      </header>

      {/* ===== 安装步骤 ===== */}
      <section className="lp-section" style={{ paddingTop: 20 }}>
        <div className="lp-wrap lp-reveal">
          <div className="lp-install">
            {/* Step 1：Chrome */}
            <div className="lp-install-card">
              <div className="lp-install-n">1</div>
              <div className="lp-install-body">
                <div className="lp-install-t">安装 Chrome 浏览器</div>
                <div className="lp-install-d">
                  HR Helper 运行在 Chrome 上。已安装可<b>直接跳过这步</b>。
                </div>
                <div className="lp-install-btns">
                  <a className="lp-btn lp-btn--ghost" href={CHROME_WIN_URL} download>
                    <i className="ti ti-brand-windows" aria-hidden="true" /> Windows 版
                  </a>
                  <a className="lp-btn lp-btn--ghost" href={CHROME_MAC_URL}>
                    <i className="ti ti-brand-apple" aria-hidden="true" /> macOS 版
                  </a>
                </div>
                <div className="lp-install-note">
                  也可
                  <a href={CHROME_OFFICIAL} target="_blank" rel="noreferrer">
                    前往 Chrome 官网
                  </a>
                  自行下载安装。
                </div>
              </div>
            </div>

            {/* Step 2：扩展 */}
            <div className="lp-install-card">
              <div className="lp-install-n">2</div>
              <div className="lp-install-body">
                <div className="lp-install-t">下载并安装浏览器扩展</div>
                <div className="lp-install-d">
                  下载压缩包后<b>解压</b>，得到一个 <code>sensor</code> 文件夹。在 Chrome 里
                  <a href="/guide">按图文教程</a>加载这个文件夹即可（下载的永远是最新版）。
                </div>
                <div className="lp-install-btns">
                  <a className="lp-btn lp-btn--primary" href={EXTENSION_URL} download>
                    <i className="ti ti-download" aria-hidden="true" /> 下载扩展压缩包
                  </a>
                  <a className="lp-btn lp-btn--ghost" href="/guide">
                    <i className="ti ti-book" aria-hidden="true" /> 安装图文教程
                  </a>
                </div>
              </div>
            </div>

            {/* Step 3：授权 */}
            <div className="lp-install-card">
              <div className="lp-install-n">3</div>
              <div className="lp-install-body">
                <div className="lp-install-t">授权激活，开始使用</div>
                <div className="lp-install-d">
                  打开扩展侧边栏，复制<b>设备码</b>发给客服，填入收到的<b>授权码</b>即可激活，免费试用 3 天。
                </div>
                <div className="lp-install-btns">
                  <a className="lp-btn lp-btn--primary" href="#trial">
                    <i className="ti ti-qrcode" aria-hidden="true" /> 扫码开通试用
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 更新日志 ===== */}
      <section className="lp-section lp-section--soft" id="changelog">
        <div className="lp-wrap lp-reveal">
          <div className="lp-center">
            <span className="lp-kicker">持续进化</span>
            <h2 className="lp-h2">更新日志</h2>
            <p className="lp-sub">我们一直在打磨，每个版本都更稳、更像真人。</p>
          </div>
          <div className="lp-log-list">
            {CHANGELOG.map((c) => (
              <div className="lp-ver" key={c.ver}>
                <div className="lp-ver-side">
                  <span className="lp-ver-num">
                    {c.ver}
                    {c.tag && <span className="lp-ver-tag">{c.tag}</span>}
                  </span>
                  <span className="lp-ver-date">{c.date}</span>
                </div>
                <ul className="lp-ver-items">
                  {c.items.map((it, i) => (
                    <li key={i}>
                      <i className="ti ti-point" aria-hidden="true" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 试用联系 ===== */}
      <section className="lp-section lp-cta" id="trial">
        <div className="lp-wrap lp-reveal">
          <span className="lp-kicker">开通试用</span>
          <h2 className="lp-h2">扫码联系客服</h2>
          <p className="lp-sub">微信扫码添加，获取扩展与授权码，免费试用 3 天。</p>
          <div className="lp-qr">
            {qrOk ? (
              <img src="/wechat-qr.png" alt="客服微信二维码" />
            ) : (
              <div className="lp-qr-ph">
                <i className="ti ti-qrcode" aria-hidden="true" />
                <span>微信二维码</span>
              </div>
            )}
          </div>
          {WECHAT_ID && (
            <p className="lp-wxid">
              手机端无法扫码？微信号：<b>{WECHAT_ID}</b>
            </p>
          )}
        </div>
      </section>

      {/* ===== 页脚 ===== */}
      <footer className="lp-foot">
        <div className="lp-wrap">
          © 2026 HR Helper · 辅助工具，请合理控制使用频率 · <a href="/">返回首页</a>
        </div>
      </footer>
    </div>
  );
}
