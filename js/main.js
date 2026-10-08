/* ==========================================
   keaidang.com · 名侦探柯南分享站
   数据渲染 + 交互
   ========================================== */

/* ---------- 角色数据 ---------- */
const CHARACTERS = [
  {
    name: "江户川柯南",
    en: "EDOGAWA CONAN",
    avatar: "🕵️",
    desc: "身体变小的工藤新一。戴着眼镜的小学生侦探，用蝴蝶结变声器模仿毛利小五郎破案。",
    tag: "主角",
  },
  {
    name: "毛利兰",
    en: "MORI RAN",
    avatar: "🥋",
    desc: "新一的青梅竹马，空手道高手。一直在等待「去而不回」的新一。",
    tag: "女主角",
  },
  {
    name: "灰原哀",
    en: "HAIBARA AI",
    avatar: "🧪",
    desc: "原黑衣组织科学家宫野志保。APTX4869 的研究者，柯南最重要的伙伴。",
    tag: "核心成员",
  },
  {
    name: "毛利小五郎",
    en: "MORI KOGORO",
    avatar: "😴",
    desc: "沉睡的小五郎——其实是被变声器操控的「名侦探」。私家侦探事务所老板。",
    tag: "沉睡侦探",
  },
  {
    name: "怪盗基德",
    en: "KAITO KID",
    avatar: "🎩",
    desc: "月光下的魔术师，神出鬼没的怪盗。与柯南的巅峰对决是系列名场面。",
    tag: "宿敌?盟友?",
  },
  {
    name: "服部平次",
    en: "HATTORI HEIJI",
    avatar: "🏀",
    desc: "大阪的高中生侦探，与新一齐名的「关东工藤，关西服部」。",
    tag: "好友兼对手",
  },
  {
    name: "赤井秀一",
    en: "AKAI SHUICHI",
    avatar: "🎯",
    desc: "FBI 王牌搜查官，「银色子弹」。假死潜入后化名冲矢昴继续行动。",
    tag: "FBI",
  },
  {
    name: "安室透",
    en: "AMURO TOORU",
    avatar: "☕",
    desc: "波洛咖啡店服务生，真实身份是公安警察降谷零，三重身份的男人。",
    tag: "公安",
  },
];

/* ---------- 剧场版数据 ---------- */
const MOVIES = [
  { no: "M1", year: 1997, title: "引爆摩天楼", tag: "romance", score: "★ 8.2", desc: "系列起点。小兰在电话亭里的抉择，与新一隔着电话数的三分钟。" },
  { no: "M3", year: 1999, title: "世纪末的魔术师", tag: "classic", score: "★ 8.3", desc: "怪盗基德高光之作，罗曼诺夫彩蛋与回忆的宝物。" },
  { no: "M5", year: 2001, title: "通往天国的倒计时", tag: "classic", score: "★ 8.3", desc: "少年侦探团开车飞跃摩天楼，灰原与组织的正面纠缠。" },
  { no: "M6", year: 2002, title: "贝克街的亡灵", tag: "classic", score: "★ 9.0", desc: "公认神作。虚拟游戏中的开膛手杰克，IT 王国世袭的隐喻。" },
  { no: "M13", year: 2009, title: "漆黑的追迹者", tag: "action", score: "★ 8.1", desc: "黑衣组织核心成员琴酒与伏特加正面登场，紧张感拉满。" },
  { no: "M14", year: 2010, title: "天空的遇难船", tag: "action", score: "★ 7.9", desc: "飞艇上的基德与炸弹危机，空中大逃亡名场面。" },
  { no: "M18", year: 2014, title: "异次元的狙击手", tag: "action", score: "★ 8.0", desc: "狙击手与 600 米超远射击，赤井秀一传奇延伸。" },
  { no: "M21", year: 2017, title: "唐红的恋歌", tag: "romance", score: "★ 8.6", desc: "百人一首与和歌山爆炸案，平次与和叶的感情线巅峰。" },
  { no: "M23", year: 2019, title: "绀青之拳", tag: "action", score: "★ 8.0", desc: "新加坡篇，基德与京极真的搏斗，史上最爽动作戏之一。" },
  { no: "M25", year: 2022, title: "万圣节的新娘", tag: "action", score: "★ 8.6", desc: "警校五人组泪点炸弹，松田阵平的最后一课。" },
  { no: "M27", year: 2024, title: "百万美元的五棱星", tag: "action", score: "★ 8.1", desc: "函馆宝藏与怪盗基德，服部平次身份大揭秘。" },
  { no: "M28", year: 2025, title: "独眼的残像", tag: "romance", score: "★ 8.3", desc: "长野三人组登场，诸伏高明的过去与大和敢助的独眼之谜。" },
];

/* ---------- 经典剧集 ---------- */
const EPISODES = [
  { code: "TV 001", title: "云霄飞车杀人事件", note: "一切的起点：新一变小，柯南诞生。" },
  { code: "TV 128", title: "黑衣组织10亿日元抢劫事件", note: "宫野明美事件，首次触及组织核心。" },
  { code: "TV 129", title: "来自黑衣组织的女子", note: "灰原哀登场，改写全作走向的一集。" },
  { code: "TV 190", title: "危命的复活 第三集", note: "柯南短暂变回新一，小兰的告白。" },
  { code: "TV 230", title: "充满神秘的乘客", note: "赤井秀一首次登场，狙击名场面。" },
  { code: "TV 304", title: "震动的警视厅 1200万人质", note: "松田阵平与佐藤警官，全系列最强泪点之一。" },
  { code: "TV 345", title: "与黑衣组织直面对决 满月之夜的双重谜案", note: "贝尔摩德、灰原、基德三方对决的里程碑。" },
  { code: "TV 425", title: "黑色的冲击！组织魔爪伸来的瞬间", note: "赤井秀一假死名场面，组织线最大转折。" },
  { code: "TV 667", title: "婚礼的前夜", note: "佐藤与高木的求婚，警视厅罗曼史收尾。" },
  { code: "TV 1281", title: "羽田浩司事件篇", note: "近年的组织线高能篇章，朗姆之谜推进。" },
];

/* ---------- 台词 ---------- */
const QUOTES = [
  { text: "真相只有一个！", from: "江户川柯南" },
  { text: "犯人就是你！", from: "江户川柯南" },
  { text: "不可能，绝对不可能！", from: "毛利小五郎（被柯南操控时）" },
  { text: "我会陪着你的，永远都在。", from: "毛利兰" },
  { text: "真是不好意思，我可是个懒得解毒的天才呢。", from: "灰原哀" },
  { text: "A secret makes a woman woman.", from: "贝尔摩德" },
  { text: "如果因为害怕就逃避的话，梦想可就真的无法实现了。", from: "工藤新一" },
  { text: "我不管你是哪一国的魔王，我都绝对会逮捕你的！", from: "服部平次" },
  { text: "月光下的魔术师，最终会在月光的注视下消失。", from: "怪盗基德" },
  { text: "生命因为有限所以宝贵；因为有限，所以才要不断努力。", from: "服部平藏" },
];

/* ---------- 渲染 ---------- */
function render() {
  document.getElementById("charGrid").innerHTML = CHARACTERS.map((c) => `
    <article class="char-card">
      <div class="char-avatar">${c.avatar}</div>
      <h3>${c.name}</h3>
      <span class="en">${c.en}</span>
      <p>${c.desc}</p>
      <span class="char-tag">${c.tag}</span>
    </article>
  `).join("");

  document.getElementById("movieList").innerHTML = MOVIES.map((m) => `
    <article class="movie-item" data-tag="${m.tag}">
      <div class="movie-no">${m.no}</div>
      <div class="movie-info">
        <h3>${m.title} <small>(${m.year})</small></h3>
        <p class="meta">${{ classic: "殿堂级", action: "动作大片", romance: "感情线" }[m.tag]}</p>
        <p>${m.desc}</p>
      </div>
      <div class="movie-score">${m.score}</div>
    </article>
  `).join("");

  document.getElementById("epList").innerHTML = EPISODES.map((e) => `
    <div class="ep-item">
      <span class="ep-code">${e.code}</span>
      <strong>${e.title}</strong>
      <span>—— ${e.note}</span>
    </div>
  `).join("");
}
render();

/* ---------- 剧场版筛选 ---------- */
document.getElementById("movieFilter").addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
  btn.classList.add("active");
  const f = btn.dataset.filter;
  document.querySelectorAll(".movie-item").forEach((item) => {
    item.classList.toggle("hidden", f !== "all" && item.dataset.tag !== f);
  });
});

/* ---------- 台词墙 ---------- */
let quoteIndex = 0;
function showQuote(i) {
  const q = QUOTES[i];
  document.getElementById("quoteWall").innerHTML =
    `<blockquote>"${q.text}"<cite>—— ${q.from}</cite></blockquote>`;
}
showQuote(0);
document.getElementById("quoteBtn").addEventListener("click", () => {
  quoteIndex = (quoteIndex + 1) % QUOTES.length;
  showQuote(quoteIndex);
});

/* ---------- 移动端菜单 ---------- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") navLinks.classList.remove("open");
});

/* ---------- 滚动渐入 ---------- */
const io = new IntersectionObserver(
  (entries) => entries.forEach((en) => {
    if (en.isIntersecting) {
      en.target.classList.add("visible");
      io.unobserve(en.target);
    }
  }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
