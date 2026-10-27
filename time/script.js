/* ============ 配置 ============ */
// 实习 / 学业结束日期（含当天）
const END_DATE = new Date(2027, 2, 8, 23, 59, 59); // 2027年3月8日（实习开始）
// 上课截止：实习当天不上课，所以最后一节课到 3月7日为止
const END_TEACHING = new Date(2027, 2, 7, 23, 59, 59);

// 时间段
const PERIODS = [
  { start:"08:30", end:"09:25" },
  { start:"09:25", end:"10:20" },
  { start:"10:20", end:"11:15" },
  { start:"11:15", end:"11:45", break:true }, // 课间
  { start:"11:45", end:"12:40" },
  { start:"12:40", end:"13:35" },
  { start:"13:35", end:"14:30" },
];

// 课表：列顺序 = 周一..周五；break 时段为 null
const TIMETABLE = [
  // 周一
  ["Sostenibilidad","DWES","DWES",null,"Arq","Arq","Ingles"],
  // 周二
  ["Interfaces","Interfaces","DWEC",null,"DWEC","Despliegue","Despliegue"],
  // 周三
  ["DWEC","DWEC","DWES",null,"DWES","Despliegue","Ingles"],
  // 周四
  ["IPE","DWEC","DWEC",null,"DWES","DWES","Digitalizacion"],
  // 周五
  ["Arq","IPE","Interfaces",null,"Interfaces","DWES","DWES"],
];

// 科目完整信息（用于表格展示与统计）
// done:true 表示该科目已通过证书/免修等方式完成，不再计算上课节数
const SUBJECTS = [
  { key:"Sostenibilidad", name:"Sostenibilidad", zh:"可持续性",   total:32  },
  { key:"DWES",           name:"DWES",           zh:"服务端开发", total:224 },
  { key:"Arq",            name:"Arq",            zh:"架构",       total:96  },
  { key:"Ingles",         name:"Inglés",         zh:"英语",       total:64  },
  { key:"Interfaces",     name:"Interfaces",     zh:"界面设计",   total:128 },
  { key:"DWEC",           name:"DWEC",           zh:"客户端开发", total:160 },
  { key:"Despliegue",     name:"Despliegue",     zh:"部署",       total:96  },
  { key:"IPE",            name:"IPE",            zh:"IPE",        total:64, done:true, note:"证书通过，免修" },
  { key:"Digitalizacion", name:"Digitalización", zh:"数字化",     total:32  },
];

// 假期（工作日不上课）：每年重复生效
// 单日假期 / 假期区间（含首尾）。区间跨年时可写跨年区间，如 12-23 至 01-08
// 假期：全部工作日中不上课的日期（精确日期，不含周末）
const HOLIDAYS = [
  "2026-10-12",                                   // 10月12日
  "2026-11-02",                                   // 11月2日
  "2026-12-07", "2026-12-08",                     // 12月7、8日
  "2026-12-23", "2026-12-24", "2026-12-25",       // 圣诞
  "2026-12-28", "2026-12-29", "2026-12-30", "2026-12-31",
  "2027-01-01",                                   // 元旦
  "2027-01-04", "2027-01-05", "2027-01-06", "2027-01-07", "2027-01-08", // 三王节假期
  "2027-02-12", "2027-02-15",                     // 2月12、15日
];

// 开学日期（计算"已上"节数的起点）
const START_DATE = new Date(2026, 8, 14, 0, 0, 0); // 2026年9月14日

const WEEKDAYS = ["周日","周一","周二","周三","周四","周五","周六"];
const STORE_KEY = "board_events_v1";

/* ============ 工具函数 ============ */
function pad(n){ return String(n).padStart(2,"0"); }

function toMinutes(hhmm){
  const [h,m] = hhmm.split(":").map(Number);
  return h*60 + m;
}

// 当前时刻对应的分钟数（含秒的小数）
function nowMinutes(d){
  return d.getHours()*60 + d.getMinutes() + d.getSeconds()/60;
}

// 周几（0=周日 ... 6=周六）→ 课表列索引（0=周一 ... 4=周五）
function dayIndex(d){
  const w = d.getDay();
  return (w >= 1 && w <= 5) ? w - 1 : -1;
}

function norm(s){ return (s||"").trim().toLowerCase(); }

// 规范化课程名用于比较（去空格、转小写、去重音）
function canon(s){
  return norm(s).normalize("NFD").replace(/[\u0300-\u036f]/g,"");
}

function addDays(d, n){
  const x = new Date(d.getTime());
  x.setDate(x.getDate()+n);
  return x;
}

function startOfDay(d){ return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }

/* ============ 时钟 ============ */
function renderClock(){
  const d = new Date();
  document.getElementById("time").textContent =
    `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  document.getElementById("weekday").textContent = WEEKDAYS[d.getDay()];
  document.getElementById("date").textContent =
    `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日`;
}

/* ============ 当前 / 下一节 ============ */
function getScheduleForDay(di){
  if (di < 0) return null; // 周末
  return TIMETABLE[di];
}

// 找到当前时段与下一时段
function findNowNext(d){
  const di = dayIndex(d);
  const row = getScheduleForDay(di);
  const cur = nowMinutes(d);

  // 周末
  if (!row){
    return { now: null, next: null, weekend: true };
  }

  // 假期（工作日但放假）
  if (isHoliday(d)){
    const h = holidayOf(d);
    return { now: null, next: null, holiday: true, holidayName: h ? h.name : "假期" };
  }

  let nowIdx = -1;
  for (let i=0;i<PERIODS.length;i++){
    const p = PERIODS[i];
    if (cur >= toMinutes(p.start) && cur < toMinutes(p.end)){
      nowIdx = i; break;
    }
  }

  // 若当前时段是已完成科目（如 IPE），视为"空闲"而非上课
  const nowIsDone = nowIdx >= 0 && isDoneSubject(row[nowIdx]);
  const nowInfo = (nowIdx >= 0 && !nowIsDone) ? {
    idx: nowIdx,
    subject: row[nowIdx],
    period: PERIODS[nowIdx],
    isBreak: !!PERIODS[nowIdx].break,
    endMin: toMinutes(PERIODS[nowIdx].end),
  } : null;

  // 下一节课（跳过课间与空节）
  let nextInfo = null;
  let searchStart = nowIdx >= 0 ? nowIdx+1 : 0;
  for (let i=searchStart;i<PERIODS.length;i++){
    if (i === nowIdx) continue;
    const p = PERIODS[i];
    if (toMinutes(p.start) < cur) continue;
    if (p.break) continue;
    if (!row[i]) continue;
    if (isDoneSubject(row[i])) continue; // 已完成科目不算下一节
    nextInfo = { idx:i, subject:row[i], period:p };
    break;
  }

  // 今天没有更多课 → 找下一个上课日
  let nextDayInfo = null;
  if (!nextInfo){
    for (let step=1; step<=7; step++){
      const nd = addDays(d, step);
      const ndi = dayIndex(nd);
      if (ndi < 0) continue;
      if (isHoliday(nd)) continue; // 假期不上课
      const nrow = TIMETABLE[ndi];
      for (let i=0;i<PERIODS.length;i++){
        if (PERIODS[i].break || !nrow[i]) continue;
        if (isDoneSubject(nrow[i])) continue; // 已完成科目不算
        nextDayInfo = {
          subject: nrow[i],
          period: PERIODS[i],
          dayLabel: WEEKDAYS[nd.getDay()],
          date: nd,
        };
        break;
      }
      if (nextDayInfo) break;
    }
  }

  return { now: nowInfo, next: nextInfo, nextDay: nextDayInfo, weekend:false };
}

function renderNowNext(){
  const d = new Date();
  const info = findNowNext(d);

  const nowSubject = document.getElementById("nowSubject");
  const nowSub = document.getElementById("nowSub");
  const nowBar = document.getElementById("nowBar");
  const nextSubject = document.getElementById("nextSubject");
  const nextSub = document.getElementById("nextSub");

  if (info.weekend){
    nowSubject.textContent = "周末休息";
    nowSubject.classList.add("free");
    nowSub.textContent = "今天没有课程安排";
    nowBar.style.width = "0%";
  } else if (info.holiday){
    nowSubject.textContent = "假期休息";
    nowSubject.classList.add("free");
    nowSub.textContent = `${info.holidayName || "假期"} · 今天不上课`;
    nowBar.style.width = "0%";
  } else if (info.now && info.now.isBreak){
    nowSubject.textContent = "课间休息";
    nowSubject.classList.add("free");
    const leftSec = Math.max(0, Math.ceil((info.now.endMin - nowMinutes(d)) * 60));
    const mm = Math.floor(leftSec / 60);
    const ss = leftSec % 60;
    nowSub.textContent = `休息中 · 还剩 ${mm}:${pad(ss)}`;
    nowBar.style.width = "0%";
  } else if (info.now && info.now.subject){
    nowSubject.textContent = info.now.subject;
    nowSubject.classList.remove("free");
    const p = info.now.period;
    const startM = toMinutes(p.start), endM = toMinutes(p.end);
    const curM = nowMinutes(d);          // 含秒的小数分钟
    const left = endM - curM;
    const total = endM - startM;
    // 剩余百分比（秒级精度，保留 3 位小数，每秒都在减少）
    const leftPct = Math.max(0, Math.min(100, (left / total) * 100));
    const donePct = 100 - leftPct;
    nowBar.style.width = donePct.toFixed(2) + "%";
    // 剩余时间精确到秒
    const leftSec = Math.max(0, Math.ceil(left * 60));
    const mm = Math.floor(leftSec / 60);
    const ss = leftSec % 60;
    nowSub.textContent =
      `${p.start}–${p.end} · 还剩 ${mm}:${pad(ss)} (${leftPct.toFixed(3)}%)`;
  } else {
    nowSubject.textContent = "空闲";
    nowSubject.classList.add("free");
    nowSub.textContent = "当前没有正在进行的课程";
    nowBar.style.width = "0%";
  }

  if (info.next){
    nextSubject.textContent = info.next.subject;
    nextSubject.classList.remove("free");
    const p = info.next.period;
    const diff = toMinutes(p.start) - nowMinutes(d);
    const mins = Math.max(0, Math.ceil(diff));
    nextSub.textContent = `今天 ${p.start}–${p.end} · ${mins < 60 ? mins + " 分钟后开始" : Math.floor(mins/60)+" 小时 "+ (mins%60) +" 分钟后开始"}`;
  } else if (info.nextDay){
    nextSubject.textContent = info.nextDay.subject;
    nextSubject.classList.remove("free");
    const p = info.nextDay.period;
    const days = Math.round((startOfDay(info.nextDay.date) - startOfDay(d))/86400000);
    nextSub.textContent = `${info.nextDay.dayLabel} ${p.start}–${p.end} · ${days} 天后`;
  } else {
    nextSubject.textContent = "—";
    nextSub.textContent = "无后续课程";
  }
}

/* ============ 事件 ============ */
function loadEvents(){
  try{
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return JSON.parse(raw);
  }catch(e){}
  return [
    { id:"seed-end", name:"结束学业（实习开始）", date:"2027-03-08", pinned:true },
  ];
}

function saveEvents(list){
  localStorage.setItem(STORE_KEY, JSON.stringify(list));
}

function daysBetween(a, b){
  return Math.round((startOfDay(b) - startOfDay(a))/86400000);
}

function renderEvents(){
  const list = loadEvents();
  const box = document.getElementById("evList");
  box.innerHTML = "";

  if (!list.length){
    box.innerHTML = `<div style="color:var(--dim);font-size:14px;padding:6px 2px">还没有事件，请在上方添加。</div>`;
    return;
  }

  const today = new Date();
  const enriched = list.map(ev => {
    const dt = new Date(ev.date + "T00:00:00");
    return { ...ev, dt, days: daysBetween(today, dt) };
  }).sort((a,b)=> a.dt - b.dt);

  // 取最近 3 个（优先未过期 / 今天，过期排最后）
  const upcoming = enriched.filter(e => e.days >= 0);
  const past = enriched.filter(e => e.days < 0).sort((a,b)=> b.dt - a.dt);
  const top3 = [...upcoming.slice(0,3), ...(upcoming.length < 3 ? past.slice(0, 3-upcoming.length) : [])];

  top3.forEach(ev => {
    const row = document.createElement("div");
    row.className = "ev" + (ev.pinned ? " pinned" : "");

    let countText, countClass;
    if (ev.days === 0){ countText = "今天"; countClass = "c-today"; }
    else if (ev.days > 0){ countText = `${ev.days} 天`; countClass = "c-future"; }
    else { countText = `已过 ${-ev.days} 天`; countClass = "c-past"; }

    row.innerHTML = `
      <div class="name">${ev.name}</div>
      <div class="d">${ev.date}</div>
      <div class="count ${countClass}">${countText}</div>
    `;

    if (!ev.pinned){
      const btn = document.createElement("button");
      btn.className = "ghost";
      btn.textContent = "×";
      btn.style.padding = "6px 10px";
      btn.style.fontSize = "14px";
      btn.onclick = () => {
        const l = loadEvents().filter(x => x.id !== ev.id);
        saveEvents(l);
        renderEvents();
      };
      row.appendChild(btn);
    }
    box.appendChild(row);
  });

  if (!top3.length){
    box.innerHTML = `<div style="color:var(--dim);font-size:14px;padding:6px 2px">没有即将到来的事件。</div>`;
  }
}

function addEvent(){
  const name = document.getElementById("evName").value.trim();
  const date = document.getElementById("evDate").value;
  if (!name || !date){
    alert("请填写事件名称和日期");
    return;
  }
  const list = loadEvents();
  list.push({ id: "ev-" + Date.now() + "-" + Math.random().toString(36).slice(2,7), name, date });
  saveEvents(list);
  document.getElementById("evName").value = "";
  document.getElementById("evDate").value = "";
  renderEvents();
}

/* ============ 已完成科目判断 ============ */
// 某课程名（如 "IPE"）是否已标记为完成
function isDoneSubject(subject){
  if (!subject) return false;
  const found = SUBJECTS.find(s => canon(s.key) === canon(subject));
  return !!(found && found.done);
}

/* ============ 假期判断 ============ */
// 日期 → "YYYY-MM-DD"
function ymd(d){
  return d.getFullYear() + "-" + pad(d.getMonth()+1) + "-" + pad(d.getDate());
}

// 某天是否为假期（精确日期匹配）
function isHoliday(dateObj){
  return HOLIDAYS.indexOf(ymd(dateObj)) !== -1;
}

// 为了兼容旧的调用处，返回一个简单的假期信息对象
function holidayOf(dateObj){
  return isHoliday(dateObj) ? { name: "假期" } : null;
}

/* ============ 节数统计 ============ */
// 通用：统计 [fromDate, END_DATE] 之间每个科目的上课节数
// 排除：周末、假期、空节、已完成科目
function countSessions(fromDate){
  const counts = {};
  SUBJECTS.forEach(s => counts[s.key] = 0);

  const from = startOfDay(fromDate);
  const end = startOfDay(END_TEACHING);
  if (from > end) return counts;

  for (let d = new Date(from); d <= end; d = addDays(d, 1)){
    const di = dayIndex(d);
    if (di < 0) continue;        // 周末
    if (isHoliday(d)) continue;  // 假期
    const row = TIMETABLE[di];
    for (let i = 0; i < PERIODS.length; i++){
      const p = PERIODS[i];
      if (p.break) continue;     // 课间
      const subject = row[i];
      if (!subject) continue;
      if (isDoneSubject(subject)) continue; // 已完成科目
      const found = SUBJECTS.find(s => canon(s.key) === canon(subject));
      if (found) counts[found.key]++;
    }
  }
  return counts;
}

// 剩余节数：从今天（含）到 END_DATE
function computeRemaining(){
  const now = new Date();
  // 今天已结束的时段不计
  const counts = {};
  SUBJECTS.forEach(s => counts[s.key] = 0);

  const today = startOfDay(now);
  const end = startOfDay(END_TEACHING);
  if (today > end) return counts;

  const curMin = nowMinutes(now);

  for (let d = new Date(today); d <= end; d = addDays(d, 1)){
    const di = dayIndex(d);
    if (di < 0) continue;
    if (isHoliday(d)) continue;
    const row = TIMETABLE[di];
    for (let i = 0; i < PERIODS.length; i++){
      const p = PERIODS[i];
      if (p.break) continue;
      const subject = row[i];
      if (!subject) continue;
      if (isDoneSubject(subject)) continue;
      if (daysBetween(today, d) === 0 && toMinutes(p.end) <= curMin) continue;
      const found = SUBJECTS.find(s => canon(s.key) === canon(subject));
      if (found) counts[found.key]++;
    }
  }
  return counts;
}

// 已上节数：从开学到昨天（不含今天）
function computeDone(){
  const yesterday = addDays(startOfDay(new Date()), -1);
  if (yesterday < startOfDay(START_DATE)) {
    const empty = {};
    SUBJECTS.forEach(s => empty[s.key] = 0);
    return empty;
  }
  return countSessionsRange(START_DATE, yesterday);
}

// 统计 [fromDate, toDate] 区间（含首尾）的节数
function countSessionsRange(fromDate, toDate){
  const counts = {};
  SUBJECTS.forEach(s => counts[s.key] = 0);

  const from = startOfDay(fromDate);
  const end = startOfDay(toDate);
  if (from > end) return counts;

  for (let d = new Date(from); d <= end; d = addDays(d, 1)){
    const di = dayIndex(d);
    if (di < 0) continue;
    if (isHoliday(d)) continue;
    const row = TIMETABLE[di];
    for (let i = 0; i < PERIODS.length; i++){
      const p = PERIODS[i];
      if (p.break) continue;
      const subject = row[i];
      if (!subject) continue;
      if (isDoneSubject(subject)) continue;
      const found = SUBJECTS.find(s => canon(s.key) === canon(subject));
      if (found) counts[found.key]++;
    }
  }
  return counts;
}

function renderStats(){
  const body = document.getElementById("statBody");
  body.innerHTML = "";

  const remain = computeRemaining();  // 今天 → 3/8
  const done   = computeDone();       // 开学 → 昨天
  const all    = countSessions(START_DATE); // 开学 → 3/8 总计

  // 每周节数统计
  const perWeek = {};
  SUBJECTS.forEach(s => perWeek[s.key] = 0);
  for (const row of TIMETABLE){
    for (let i = 0; i < PERIODS.length; i++){
      if (PERIODS[i].break) continue;
      const subj = row[i];
      if (!subj) continue;
      const found = SUBJECTS.find(s => canon(s.key) === canon(subj));
      if (found) perWeek[found.key]++;
    }
  }

  const entries = SUBJECTS.map(s => ({
    ...s,
    totalAll: all[s.key] || 0,
    doneN: done[s.key] || 0,
    remain: remain[s.key] || 0,
    perWeek: perWeek[s.key] || 0,
  }));

  // 排序：剩余多的在前
  entries.sort((a, b) => b.remain - a.remain);

  const maxRemain = Math.max(1, ...entries.map(e => e.remain));

  entries.forEach((e, i) => {
    const tr = document.createElement("tr");

    // 已完成科目（如 IPE 证书免修）
    if (e.done){
      tr.className = "is-done";
      tr.innerHTML = `
        <td class="col-idx">${i+1}</td>
        <td>
          <div class="course-name">
            <b>${e.name}</b>
            <span>${e.zh || ""}</span>
          </div>
        </td>
        <td class="num muted">—</td>
        <td class="num"><span class="pill pill-done">已完成</span></td>
        <td class="num muted">—</td>
        <td class="num muted">${e.note || "免修"}</td>
        <td><div class="bar bar-done"><i style="width:100%"></i></div></td>
      `;
      body.appendChild(tr);
      return;
    }

    if (e.remain === 0) tr.className = "hl";
    const pct = (e.remain / maxRemain * 100).toFixed(0);
    const pillClass = e.remain === 0 ? "pill pill-zero" : "pill";
    tr.innerHTML = `
      <td class="col-idx">${i+1}</td>
      <td>
        <div class="course-name">
          <b>${e.name}</b>
          <span>${e.zh}</span>
        </div>
      </td>
      <td class="num">${e.perWeek}</td>
      <td class="num"><span class="pill">${e.totalAll}</span></td>
      <td class="num"><span class="muted">${e.doneN}</span></td>
      <td class="num"><span class="${pillClass}">${e.remain}</span></td>
      <td><div class="bar"><i style="width:${pct}%"></i></div></td>
    `;
    body.appendChild(tr);
  });
}

/* ============ 历史事件面板 ============ */
function openHistory(){
  const panel = document.getElementById("historyPanel");
  if (!panel) return;
  renderHistory();
  panel.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeHistory(){
  const panel = document.getElementById("historyPanel");
  if (!panel) return;
  panel.classList.remove("open");
  document.body.style.overflow = "";
}

function renderHistory(){
  const body = document.getElementById("historyBody");
  const countEl = document.getElementById("historyCount");
  if (!body) return;
  body.innerHTML = "";

  const list = loadEvents();
  const today = new Date();

  const enriched = list.map(ev => {
    const dt = new Date(ev.date + "T00:00:00");
    return { ...ev, dt, days: daysBetween(today, dt) };
  });

  if (countEl) countEl.textContent = `共 ${enriched.length} 个`;

  if (!enriched.length){
    body.innerHTML = `<div class="history-empty">还没有任何事件。</div>`;
    return;
  }

  // 分组：即将到来 / 今天 / 已过去
  const upcoming = enriched.filter(e => e.days > 0).sort((a,b)=> a.dt - b.dt);
  const todayEv  = enriched.filter(e => e.days === 0).sort((a,b)=> b.dt - a.dt);
  const past     = enriched.filter(e => e.days < 0).sort((a,b)=> b.dt - a.dt);

  const groups = [
    { title: "今天", items: todayEv, cls: "is-today" },
    { title: "即将到来", items: upcoming, cls: "" },
    { title: "已过去", items: past, cls: "is-past" },
  ];

  groups.forEach(g => {
    if (!g.items.length) return;

    const title = document.createElement("div");
    title.className = "history-group-title";
    title.textContent = `${g.title}（${g.items.length}）`;
    body.appendChild(title);

    g.items.forEach(ev => {
      const row = document.createElement("div");
      row.className = "history-item" + (ev.pinned ? " pinned" : "") + (g.cls ? " " + g.cls : "");

      let countText;
      if (ev.days === 0) countText = "今天";
      else if (ev.days > 0) countText = `${ev.days} 天后`;
      else countText = `已过 ${-ev.days} 天`;

      row.innerHTML = `
        <div class="h-name">${ev.name}</div>
        <div class="h-date">${ev.date}</div>
        <div class="h-count ${ev.days === 0 ? 'c-today' : ev.days > 0 ? 'c-future' : 'c-past'}">${countText}</div>
      `;

      if (!ev.pinned){
        const btn = document.createElement("button");
        btn.className = "ghost";
        btn.textContent = "×";
        btn.style.padding = "4px 9px";
        btn.style.fontSize = "13px";
        btn.title = "删除该事件";
        btn.onclick = () => {
          if (!confirm(`删除事件「${ev.name}」？`)) return;
          const l = loadEvents().filter(x => x.id !== ev.id);
          saveEvents(l);
          renderHistory();
          renderEvents();
        };
        row.appendChild(btn);
      }
      body.appendChild(row);
    });
  });
}

/* ============ 时钟置顶（始终显示，不可隐藏） ============ */
function initClockSticky(){
  const card = document.getElementById("clockCard");
  if (!card) return;
  // 用哨兵元素检测是否已吸顶
  const sentinel = document.createElement("div");
  sentinel.style.cssText = "position:absolute;top:0;height:1px;width:1px;";
  card.parentNode.insertBefore(sentinel, card);

  if ("IntersectionObserver" in window){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        card.classList.toggle("is-stuck", !en.isIntersecting);
      });
    }, { threshold: 0 });
    io.observe(sentinel);
  } else {
    window.addEventListener("scroll", () => {
      const stuck = card.getBoundingClientRect().top <= 0;
      card.classList.toggle("is-stuck", stuck);
    }, { passive: true });
  }

  // 清理历史遗留的"隐藏时钟"状态，保证时钟永远可见
  try{ localStorage.removeItem("board_clock_visible_v1"); }catch(e){}
  if (card) card.style.display = "";
}

function initHistory(){
  const openBtn = document.getElementById("historyBtn");
  const closeBtn = document.getElementById("historyClose");
  const panel = document.getElementById("historyPanel");
  if (openBtn) openBtn.addEventListener("click", openHistory);
  if (closeBtn) closeBtn.addEventListener("click", closeHistory);
  if (panel){
    panel.addEventListener("click", e => {
      if (e.target === panel) closeHistory();
    });
  }
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeHistory();
  });
}

/* ============ 主循环 ============ */
function tick(){
  renderClock();
  renderNowNext();
}

function init(){
  document.getElementById("endDateLabel").textContent =
    `${END_DATE.getFullYear()}年${END_DATE.getMonth()+1}月${END_DATE.getDate()}日`;

  document.getElementById("evDate").valueAsDate = new Date();

  document.getElementById("evAdd").addEventListener("click", addEvent);
  document.getElementById("evName").addEventListener("keydown", e => {
    if (e.key === "Enter") addEvent();
  });

  tick();
  renderEvents();
  renderStats();
  initClockSticky();
  initHistory();

  setInterval(tick, 1000);
  // 事件与统计每分钟刷新一次（跨天/跨时段自动更新）
  setInterval(() => { renderEvents(); renderStats(); }, 60000);
}

init();
