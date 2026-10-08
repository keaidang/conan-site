# keaidang.com · 名侦探柯南动漫分享站 🕵️

一个关于《名侦探柯南》的动漫分享网站，纯静态构建（HTML + CSS + 原生 JavaScript），零依赖、零框架，托管在 **keaidang.com**。

## 站点内容

- 🏠 **首页 Hero** — 系列简介与数据概览（TV 集数 / 剧场版数量 / 连载信息）
- 👥 **角色档案** — 柯南、小兰、灰原哀、基德、安室透等 8 位核心角色卡片
- 🎬 **剧场版盘点** — M1~M28 精选 12 部，支持「殿堂级 / 动作大片 / 感情线」标签筛选
- 📺 **经典剧集** — 从 TV001 云霄飞车杀人事件到近年的组织线高能篇章，入坑补番指南
- 💬 **名言台词墙** — 「真相只有一个」等经典台词，点击随机切换

## 技术栈

| 层 | 选型 |
|---|---|
| 结构 | HTML5 单页 |
| 样式 | CSS3（CSS 变量、Grid、响应式，深色主题） |
| 交互 | 原生 JS（数据驱动渲染、标签筛选、IntersectionObserver 滚动渐入） |
| 部署 | 任意静态托管 / Nginx，域名 keaidang.com |

## 本地运行

直接用浏览器打开 `index.html`，或启动一个本地服务器：

```bash
# Python
python -m http.server 8080

# Node
npx serve .
```

访问 http://localhost:8080 即可预览。

## 目录结构

```
conan-site/
├── index.html      # 页面结构
├── css/style.css   # 深色主题样式
├── js/main.js      # 数据与交互逻辑
└── README.md
```

## 免责声明

本站为非官方粉丝站点，仅供交流分享。《名侦探柯南》版权归 青山刚昌 / 小学馆 / TMS Entertainment 所有。

---

TRUTH IS ALWAYS ONLY ONE.
