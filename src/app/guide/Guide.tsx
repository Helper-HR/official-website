"use client";

import { useEffect } from "react";
import { EXTENSION_URL } from "../site";
import "../landing.css";

export default function Guide() {
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
            <a href="/download">下载安装</a>
            <a className="lp-btn lp-btn--primary lp-btn--sm" href={EXTENSION_URL} download>
              下载扩展
            </a>
          </div>
        </div>
      </nav>

      {/* ===== 标题 ===== */}
      <header className="lp-hero" style={{ padding: "56px 0 30px" }}>
        <div className="lp-wrap">
          <span className="lp-pill">
            <i className="ti ti-book" aria-hidden="true" />
            图文教程 · 约 2 分钟
          </span>
          <h1 className="lp-h1" style={{ fontSize: 36 }}>
            把扩展装进 Chrome
          </h1>
          <p className="lp-hero-sub">跟着下面 6 步操作，照着图做就行，不需要任何技术基础。</p>
        </div>
      </header>

      {/* ===== 步骤 ===== */}
      <section className="lp-section" style={{ paddingTop: 16 }}>
        <div className="lp-wrap">
          <div className="lp-guide">
            {/* 1 解压 */}
            <div className="lp-guide-step lp-reveal">
              <div className="lp-guide-head">
                <span className="lp-guide-n">1</span>
                <div>
                  <div className="lp-guide-t">下载并解压压缩包</div>
                  <div className="lp-guide-d">
                    下载压缩包（<code>hr-helper-版本号.zip</code>）后右键解压，得到一个 <code>sensor</code> 文件夹。
                    <b> 记住它的位置、别删除</b>——扩展要一直读它。
                  </div>
                </div>
              </div>
              <div className="lp-fig">
                <div className="lp-chip zip">
                  <i className="ti ti-file-zip" aria-hidden="true" />
                  hr-helper.zip
                </div>
                <i className="ti ti-arrow-right lp-fig-arrow" aria-hidden="true" />
                <div className="lp-chip folder">
                  <i className="ti ti-folder" aria-hidden="true" />
                  sensor
                </div>
              </div>
            </div>

            {/* 2 打开扩展页 */}
            <div className="lp-guide-step lp-reveal">
              <div className="lp-guide-head">
                <span className="lp-guide-n">2</span>
                <div>
                  <div className="lp-guide-t">打开扩展管理页</div>
                  <div className="lp-guide-d">
                    在 Chrome 地址栏输入 <code>chrome://extensions</code> 回车；或点右上角
                    <i className="ti ti-dots-vertical" style={{ margin: "0 3px" }} aria-hidden="true" />→
                    扩展程序 → 管理扩展程序。
                  </div>
                </div>
              </div>
              <div className="lp-fig">
                <div className="lp-omnibox">
                  <i className="ti ti-lock" aria-hidden="true" />
                  <span className="lp-omnibox-url">chrome://extensions</span>
                  <span className="lp-kbd">Enter</span>
                </div>
              </div>
            </div>

            {/* 3 开发者模式 */}
            <div className="lp-guide-step lp-reveal">
              <div className="lp-guide-head">
                <span className="lp-guide-n">3</span>
                <div>
                  <div className="lp-guide-t">打开「开发者模式」</div>
                  <div className="lp-guide-d">
                    在扩展页<b>右上角</b>，把「开发者模式」开关打开（变蓝）。
                  </div>
                </div>
              </div>
              <div className="lp-fig">
                <div className="lp-browserbar">
                  <span className="lp-bb-title">扩展程序</span>
                  <span className="lp-bb-spacer" />
                  <span className="lp-bb-devlabel">开发者模式</span>
                  <span className="lp-toggle on" aria-hidden="true">
                    <span className="lp-toggle-knob" />
                  </span>
                  <span className="lp-pulse-ring" aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* 4 加载已解压 */}
            <div className="lp-guide-step lp-reveal">
              <div className="lp-guide-head">
                <span className="lp-guide-n">4</span>
                <div>
                  <div className="lp-guide-t">点「加载已解压的扩展程序」</div>
                  <div className="lp-guide-d">
                    开发者模式打开后，<b>左上角</b>会出现三个按钮，点第一个「加载已解压的扩展程序」。
                  </div>
                </div>
              </div>
              <div className="lp-fig">
                <div className="lp-devbar">
                  <span className="lp-devbtn hi">
                    <i className="ti ti-folder-plus" aria-hidden="true" /> 加载已解压的扩展程序
                  </span>
                  <span className="lp-devbtn">打包扩展程序</span>
                  <span className="lp-devbtn">更新</span>
                </div>
              </div>
            </div>

            {/* 5 选文件夹 */}
            <div className="lp-guide-step lp-reveal">
              <div className="lp-guide-head">
                <span className="lp-guide-n">5</span>
                <div>
                  <div className="lp-guide-t">选中 sensor 文件夹</div>
                  <div className="lp-guide-d">
                    在弹出的窗口里，选中第 1 步解压出来的 <code>sensor</code> 文件夹，点「选择 / 打开」。
                  </div>
                </div>
              </div>
              <div className="lp-fig">
                <div className="lp-picker">
                  <div className="lp-picker-bar">
                    <span className="lp-picker-dot" style={{ background: "#f09595" }} />
                    <span className="lp-picker-dot" style={{ background: "#fac775" }} />
                    <span className="lp-picker-dot" style={{ background: "#97c459" }} />
                    <span className="lp-picker-title">选择扩展程序文件夹</span>
                  </div>
                  <div className="lp-picker-body">
                    <div className="lp-picker-row">
                      <i className="ti ti-folder" aria-hidden="true" /> downloads
                    </div>
                    <div className="lp-picker-row sel">
                      <i className="ti ti-folder" aria-hidden="true" /> sensor
                    </div>
                    <div className="lp-picker-row">
                      <i className="ti ti-folder" aria-hidden="true" /> 其它文件夹
                    </div>
                  </div>
                  <div className="lp-picker-foot">
                    <span className="lp-devbtn hi">选择</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 6 成功 */}
            <div className="lp-guide-step lp-reveal">
              <div className="lp-guide-head">
                <span className="lp-guide-n">6</span>
                <div>
                  <div className="lp-guide-t">安装成功，固定到工具栏</div>
                  <div className="lp-guide-d">
                    出现 <b>HR Helper</b> 卡片即成功。点 Chrome 工具栏的
                    <i className="ti ti-puzzle" style={{ margin: "0 3px" }} aria-hidden="true" />
                    拼图图标，把它<b>固定</b>到工具栏，方便随时打开。
                  </div>
                </div>
              </div>
              <div className="lp-fig">
                <div className="lp-extcard">
                  <span className="lp-extcard-ico">HR</span>
                  <div className="lp-extcard-body">
                    <div className="lp-extcard-name">
                      HR Helper <span className="lp-extcard-on">已启用</span>
                    </div>
                    <div className="lp-extcard-d">智能招聘助手 · 浏览器扩展</div>
                  </div>
                  <i className="ti ti-pin lp-extcard-pin" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>

          {/* 提示 */}
          <div className="lp-tip lp-reveal">
            <i className="ti ti-bulb" aria-hidden="true" />
            <span className="lp-tip-text">
              以后每次开 Chrome 若提示「是否停用开发者模式扩展」，点<b>取消 / 保留</b>（别点停用）。解压出的 <code>sensor</code> 文件夹请保留别删。
            </span>
          </div>

          {/* CTA */}
          <div className="lp-center" style={{ marginTop: 40 }}>
            <a className="lp-btn lp-btn--primary" href={EXTENSION_URL} download style={{ marginRight: 10 }}>
              <i className="ti ti-download" aria-hidden="true" /> 下载扩展压缩包
            </a>
            <a className="lp-btn lp-btn--ghost" href="/download">
              返回下载页
            </a>
          </div>
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
