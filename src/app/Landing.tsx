"use client";

import { useEffect, useState } from "react";
import { DEMO_VIDEO_URL, WECHAT_ID } from "./site";
import "./landing.css";

export default function Landing() {
  const [qrOk, setQrOk] = useState(false);

  // 客户端探测二维码图片是否存在，避免 SSR 阶段出现裂图
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
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="lp">
      {/* ===== 导航 ===== */}
      <nav className="lp-nav">
        <div className="lp-wrap lp-nav-inner">
          <div className="lp-brand">
            <span className="lp-logo">HR</span>
            <span>HR Helper</span>
          </div>
          <div className="lp-nav-links">
            <a href="#features">功能</a>
            <a href="#how">工作原理</a>
            <a href="#pricing">价格</a>
            <a href="#faq">常见问题</a>
            <a href="/download">下载安装</a>
            <a href="/download" className="lp-btn lp-btn--primary lp-btn--sm">
              立即获取
            </a>
          </div>
        </div>
      </nav>

      {/* ===== Hero ===== */}
      <header className="lp-hero">
        <div className="lp-wrap">
          <span className="lp-pill">
            <i className="ti ti-shield-check" aria-hidden="true" />
            拟人化操作 · 温和保护你的账号
          </span>
          <h1 className="lp-h1">
            每天手动打招呼 100 次？
            <br />
            让 HR Helper 帮你提效 <span className="lp-accent">10 倍</span>
          </h1>
          <p className="lp-hero-sub">
            自动浏览候选人、拟人化打招呼、自动翻页，模拟真人阅读节奏。
            把重复的初筛沟通交给它，你专注更重要的事。
          </p>
          <div className="lp-hero-cta">
            <a href="/download" className="lp-btn lp-btn--primary">
              免费试用 3 天
            </a>
            <a href="#demo" className="lp-btn lp-btn--ghost">
              <i className="ti ti-player-play" aria-hidden="true" />
              看它怎么工作
            </a>
          </div>
          <div className="lp-hero-meta">
            <span>
              <i className="ti ti-briefcase" aria-hidden="true" /> 目前支持 BOSS 直聘
            </span>
            <span className="lp-meta-dot" />
            <span>
              <i className="ti ti-brand-chrome" aria-hidden="true" /> Chrome 浏览器
            </span>
            <span className="lp-meta-dot" />
            <span>
              <i className="ti ti-devices" aria-hidden="true" /> Windows / macOS
            </span>
            <span className="lp-meta-dot" />
            <span className="lp-meta-soon">更多平台陆续接入</span>
          </div>

          {/* 运行中产品卡 */}
          <div className="lp-demo lp-reveal">
            <div className="lp-demo-bar">
              <i style={{ background: "#f09595" }} />
              <i style={{ background: "#fac775" }} />
              <i style={{ background: "#97c459" }} />
            </div>
            <div className="lp-demo-body">
              <div className="lp-demo-head">
                <span className="lp-demo-title">候选人批量处理</span>
                <span className="lp-status">
                  <span className="lp-dot" />
                  运行中
                </span>
              </div>
              <div className="lp-stats3">
                <div className="lp-stat">
                  <div className="lp-stat-k">已打招呼</div>
                  <div className="lp-stat-v">18</div>
                </div>
                <div className="lp-stat">
                  <div className="lp-stat-k">今日额度</div>
                  <div className="lp-stat-v">82</div>
                </div>
                <div className="lp-stat">
                  <div className="lp-stat-k">状态</div>
                  <div className="lp-stat-v ok">正常</div>
                </div>
              </div>
              <div className="lp-log">
                <div>· 正在阅读简历… 停顿 3.2s</div>
                <div>
                  · 已向「张工程师」打招呼 <b>✓</b>
                </div>
                <div>· 翻到下一位候选人…</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== 数据背书 ===== */}
      <section className="lp-trust">
        <div className="lp-wrap lp-reveal lp-trust-grid">
          <div className="lp-trust-item">
            <div className="lp-trust-v">2000+</div>
            <div className="lp-trust-k">位 HR 正在使用</div>
          </div>
          <div className="lp-trust-item">
            <div className="lp-trust-v">500 万+</div>
            <div className="lp-trust-k">累计帮你打招呼</div>
          </div>
          <div className="lp-trust-item">
            <div className="lp-trust-v">98%</div>
            <div className="lp-trust-k">用户好评率</div>
          </div>
          <div className="lp-trust-item">
            <div className="lp-trust-v">3 天</div>
            <div className="lp-trust-k">免费试用</div>
          </div>
        </div>
      </section>

      {/* ===== 痛点 ===== */}
      <section className="lp-section lp-section--soft">
        <div className="lp-wrap lp-reveal">
          <div className="lp-center" style={{ marginBottom: 40 }}>
            <span className="lp-kicker">招聘人的日常</span>
            <h2 className="lp-h2">这些重复劳动，正在消耗你</h2>
          </div>
          <div className="lp-pains">
            <div className="lp-pain">
              <div className="lp-pain-v">100+</div>
              <div className="lp-pain-t">每天重复点「打招呼」，手酸眼花</div>
            </div>
            <div className="lp-pain">
              <div className="lp-pain-v">70%</div>
              <div className="lp-pain-t">投来的简历，其实并不匹配岗位</div>
            </div>
            <div className="lp-pain">
              <div className="lp-pain-v">3h+</div>
              <div className="lp-pain-t">每天耗在筛人、沟通的机械操作上</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 功能 ===== */}
      <section className="lp-section" id="features">
        <div className="lp-wrap lp-reveal">
          <div className="lp-center" style={{ marginBottom: 44 }}>
            <span className="lp-kicker">核心能力</span>
            <h2 className="lp-h2">为什么 HR 都在用</h2>
          </div>
          <div className="lp-grid lp-grid--4">
            <div className="lp-feat">
              <div className="lp-ico b">
                <i className="ti ti-hand-stop" aria-hidden="true" />
              </div>
              <div className="lp-feat-t">自动打招呼</div>
              <div className="lp-feat-d">
                设定人数，自动逐个沟通，循环到目标完成，随时可停。
              </div>
            </div>
            <div className="lp-feat">
              <div className="lp-ico g">
                <i className="ti ti-user-heart" aria-hidden="true" />
              </div>
              <div className="lp-feat-t">拟人化节奏</div>
              <div className="lp-feat-d">
                阅读、停顿、滚动、犹豫——模拟真人浏览，温和保护账号。
              </div>
            </div>
            <div className="lp-feat">
              <div className="lp-ico v">
                <i className="ti ti-adjustments-horizontal" aria-hidden="true" />
              </div>
              <div className="lp-feat-t">处理量自由设置</div>
              <div className="lp-feat-d">
                每次处理多少人、节奏快慢，都在插件里随手调，掌控在你。
              </div>
            </div>
            <div className="lp-feat">
              <div className="lp-ico a">
                <i className="ti ti-list-check" aria-hidden="true" />
              </div>
              <div className="lp-feat-t">全程可视</div>
              <div className="lp-feat-d">
                每一步实时可见：阅读、打招呼、翻页、休息，心里有数。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 演示视频 ===== */}
      <section className="lp-section lp-section--soft" id="demo">
        <div className="lp-wrap lp-reveal">
          <div className="lp-center">
            <span className="lp-kicker">看它怎么工作</span>
            <h2 className="lp-h2">30 秒，看它像真人一样跑起来</h2>
          </div>
          <a
            className={"lp-video" + (DEMO_VIDEO_URL ? "" : " soon")}
            href={DEMO_VIDEO_URL || undefined}
            target={DEMO_VIDEO_URL ? "_blank" : undefined}
            rel="noreferrer"
          >
            <span className="lp-video-play">
              <i className="ti ti-player-play-filled" aria-hidden="true" />
            </span>
            <span className="lp-video-cap">
              {DEMO_VIDEO_URL ? "点击播放演示视频" : "演示视频即将上线，敬请期待"}
            </span>
          </a>
        </div>
      </section>

      {/* ===== 工作原理 眼睛+手 ===== */}
      <section className="lp-section" id="how">
        <div className="lp-wrap lp-reveal">
          <div className="lp-center">
            <span className="lp-kicker">工作原理</span>
            <h2 className="lp-h2">「眼睛 + 手」双引擎，稳而自然</h2>
            <p className="lp-sub">
              浏览器只负责「看」，桌面端用真实鼠标「做」，操作和真人无异。
            </p>
          </div>
          <div className="lp-engine">
            <div className="lp-engine-card eye">
              <span className="lp-engine-ico">
                <i className="ti ti-eye" aria-hidden="true" />
              </span>
              <div className="lp-engine-t">眼睛 · 浏览器扩展</div>
              <div className="lp-engine-d">
                只读页面、识别候选人、规划流程，不打扰你的操作。
              </div>
            </div>
            <div className="lp-engine-arrow">
              <i className="ti ti-arrows-left-right" aria-hidden="true" />
            </div>
            <div className="lp-engine-card hand">
              <span className="lp-engine-ico">
                <i className="ti ti-hand-finger" aria-hidden="true" />
              </span>
              <div className="lp-engine-t">手 · 桌面端程序</div>
              <div className="lp-engine-d">
                真实鼠标点击与滚动，节奏自然，本机运行不上传数据。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 对比表 ===== */}
      <section className="lp-section lp-section--soft">
        <div className="lp-wrap lp-reveal">
          <div className="lp-center">
            <span className="lp-kicker">横向对比</span>
            <h2 className="lp-h2">HR Helper vs 其它做法</h2>
          </div>
          <div className="lp-table">
            <div className="lp-tr lp-th">
              <div className="lp-td">能力</div>
              <div className="lp-td c brand lp-col-hi">HR Helper</div>
              <div className="lp-td c">普通插件</div>
              <div className="lp-td c">纯手动</div>
            </div>
            {[
              ["真鼠标 · 拟人化", true, false, "human"],
              ["批量自动处理", true, true, false],
              ["温和保护账号", true, false, "na"],
              ["解放双手 · 省时", true, true, false],
            ].map(([label, a, b, c], i) => (
              <div className="lp-tr" key={i}>
                <div className="lp-td">{label as string}</div>
                <div className="lp-td c lp-col-hi">
                  {a ? <i className="ti ti-check lp-yes" /> : <i className="ti ti-x lp-no" />}
                </div>
                <div className="lp-td c">
                  {b ? <i className="ti ti-check lp-yes" /> : <i className="ti ti-x lp-no" />}
                </div>
                <div className="lp-td c">
                  {c === "human" ? (
                    <i className="ti ti-check lp-yes" />
                  ) : c === "na" ? (
                    <span className="lp-na">—</span>
                  ) : (
                    <i className="ti ti-x lp-no" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 用户评价 ===== */}
      <section className="lp-section">
        <div className="lp-wrap lp-reveal">
          <div className="lp-center" style={{ marginBottom: 44 }}>
            <span className="lp-kicker">真实反馈</span>
            <h2 className="lp-h2">他们已经在用</h2>
          </div>
          <div className="lp-grid lp-grid--3">
            <div className="lp-quote">
              <div className="lp-stars">★★★★★</div>
              <div className="lp-quote-t">
                “以前一上午只能打几十个，现在喝杯咖啡的功夫就跑完，账号也一直好好的。”
              </div>
              <div className="lp-quote-by">王女士 · 互联网 HR</div>
            </div>
            <div className="lp-quote">
              <div className="lp-stars">★★★★★</div>
              <div className="lp-quote-t">
                “节奏很像真人，不是那种死板的秒点秒翻，用着安心。”
              </div>
              <div className="lp-quote-by">陈先生 · 猎头顾问</div>
            </div>
            <div className="lp-quote">
              <div className="lp-stars">★★★★★</div>
              <div className="lp-quote-t">
                “装一次就能用，运行时每步都看得到，很放心。”
              </div>
              <div className="lp-quote-by">李经理 · 制造业招聘</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AI 预告 ===== */}
      <section className="lp-section lp-section--soft">
        <div className="lp-wrap lp-reveal">
          <div className="lp-ai">
            <span className="lp-ai-badge">
              <i className="ti ti-sparkles" aria-hidden="true" />
              即将上线 · 敬请期待
            </span>
            <div className="lp-ai-t">AI 智能简历筛选</div>
            <div className="lp-ai-d">
              让 AI 读懂岗位需求，自动判断候选人是否匹配，把「该不该打招呼」也交给智能，只跟对的人聊。
            </div>
            <div className="lp-ai-tags">
              <span className="lp-ai-tag">五维匹配评分</span>
              <span className="lp-ai-tag">自动跳过不合适</span>
              <span className="lp-ai-tag">岗位关键词扩展</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 使用步骤 ===== */}
      <section className="lp-section">
        <div className="lp-wrap lp-reveal">
          <div className="lp-center">
            <span className="lp-kicker">快速上手</span>
            <h2 className="lp-h2">四步，几分钟就能开始</h2>
          </div>
          <div className="lp-steps">
            {[
              ["1", "下载并启动桌面端", "双击运行小程序"],
              ["2", "安装浏览器扩展", "一键加载，现在即可"],
              ["3", "输入授权码", "开通后自动激活"],
              ["4", "在插件里开始处理", "设定处理量即跑"],
            ].map(([n, t, d]) => (
              <div className="lp-step" key={n}>
                <div className="lp-step-n">{n}</div>
                <div className="lp-step-t">{t}</div>
                <div className="lp-step-d">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 价格 ===== */}
      <section className="lp-section lp-section--soft" id="pricing">
        <div className="lp-wrap lp-reveal">
          <div className="lp-center">
            <span className="lp-kicker">价格方案</span>
            <h2 className="lp-h2">简单透明的价格</h2>
            <p className="lp-sub">按时长授权，处理量在插件内自由设置，随时续期。</p>
          </div>
          <div className="lp-prices">
            <div className="lp-price">
              <div className="lp-price-name">月度</div>
              <div className="lp-price-amt">
                <span className="num">¥29</span>
                <span className="per"> / 月</span>
                <span className="lp-price-old">¥39</span>
                <span className="lp-price-off">限时省 ¥10</span>
              </div>
              <ul className="lp-price-li">
                <li>
                  <i className="ti ti-check" />
                  处理量插件内自由设置
                </li>
                <li>
                  <i className="ti ti-check" />
                  桌面端 + 浏览器扩展
                </li>
                <li>
                  <i className="ti ti-check" />
                  拟人化操作 · 持续更新
                </li>
              </ul>
              <a href="/download" className="lp-btn lp-btn--ghost" style={{ width: "100%", justifyContent: "center" }}>
                选择月度
              </a>
            </div>
            <div className="lp-price hot">
              <span className="lp-price-tag">最划算</span>
              <div className="lp-price-name">三个月</div>
              <div className="lp-price-amt">
                <span className="num">¥89</span>
                <span className="per"> / 3 个月</span>
                <span className="lp-price-old">¥109</span>
                <span className="lp-price-off">限时省 ¥20</span>
              </div>
              <ul className="lp-price-li">
                <li>
                  <i className="ti ti-check" />
                  含月度全部权益
                </li>
                <li>
                  <i className="ti ti-check" />
                  低至 ¥30 / 月，更划算
                </li>
                <li>
                  <i className="ti ti-check" />
                  优先支持 + AI 筛选内测
                </li>
              </ul>
              <a href="/download" className="lp-btn lp-btn--primary" style={{ width: "100%", justifyContent: "center" }}>
                选择三个月
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 常见问题 ===== */}
      <section className="lp-section" id="faq">
        <div className="lp-wrap lp-reveal">
          <div className="lp-center">
            <span className="lp-kicker">常见问题</span>
            <h2 className="lp-h2">用之前先看看这几条</h2>
          </div>
          <div className="lp-faq">
            <div className="lp-qa">
              <div className="lp-q">
                <i className="ti ti-shield-half" aria-hidden="true" />
                会不会导致账号被封？
              </div>
              <div className="lp-a">
                HR Helper 采用「真实鼠标 + 拟人化节奏」操作——阅读、停顿、滚动、翻页都模拟真人，
                <b>合理使用下风险极低</b>。建议：① 控制每日处理量、别长时间高频；② 保持随机间隔、适度休息；③ 像平时一样正常使用账号。
                <span className="lp-note">
                  <i className="ti ti-alert-triangle" style={{ marginRight: 5 }} aria-hidden="true" />
                  请知悉：平台规则由对方制定且随时调整，任何第三方工具都无法 100% 保证不被风控。
                  <b>因使用产生的账号风险由用户自行承担，本工具不对封号负责。</b>请理性、适度使用。
                </span>
              </div>
            </div>
            <div className="lp-qa ok">
              <div className="lp-q">
                <i className="ti ti-lock" aria-hidden="true" />
                会上传我的数据吗？
              </div>
              <div className="lp-a">
                不会。桌面端只在你<b>本机</b>帮你点鼠标，不联网、不上传简历或候选人信息，仅在校验授权额度时做一次轻量在线验证。
              </div>
            </div>
            <div className="lp-qa v">
              <div className="lp-q">
                <i className="ti ti-device-laptop" aria-hidden="true" />
                支持什么平台和系统？
              </div>
              <div className="lp-a">
                目前支持 <b>BOSS 直聘</b>，更多招聘平台陆续接入。浏览器为 <b>Chrome</b>，系统 <b>Windows / macOS</b> 均可。装一次，之后打开就能用。
              </div>
            </div>
            <div className="lp-qa a">
              <div className="lp-q">
                <i className="ti ti-refresh" aria-hidden="true" />
                换电脑了怎么办？运行时能停吗？
              </div>
              <div className="lp-a">
                一个设备码绑定一台电脑，换电脑用新电脑的设备码重新授权即可。运行时它在帮你操作鼠标，建议先别动；点「停止」可随时中断，每一步都实时可见。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 联系 ===== */}
      <section className="lp-section lp-section--soft lp-cta" id="contact">
        <div className="lp-wrap lp-reveal">
          <span className="lp-kicker">开始使用</span>
          <h2 className="lp-h2">扫码联系，免费试用 3 天</h2>
          <div className="lp-qr">
            {qrOk ? (
              <img src="/wechat-qr.png" alt="微信二维码" />
            ) : (
              <div className="lp-qr-ph">
                <i className="ti ti-qrcode" aria-hidden="true" />
                <span>微信二维码</span>
              </div>
            )}
          </div>
          <p className="lp-sub" style={{ marginTop: 0 }}>
            微信扫码添加，开通免费试用 · 支持 Windows / macOS + Chrome
          </p>
          {WECHAT_ID && (
            <p className="lp-wxid">
              手机端无法扫码？微信号：<b>{WECHAT_ID}</b>
            </p>
          )}
        </div>
      </section>

      {/* ===== 页脚 ===== */}
      <footer className="lp-foot">
        <div className="lp-wrap">© 2026 HR Helper · 辅助工具，请合理控制使用频率</div>
      </footer>
    </div>
  );
}
