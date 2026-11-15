/* ¡A jugar! – shared game engine
   A group page defines:  window.GROUP = {id, name, lang:"en"|"sv", units:[unitIds], current:unitId}
   and loads unit files (units/*.js) that call UNIT(id, {...}) before this script.

   Unit format:
   UNIT("es-mi-familia", {
     icon:"👨‍👩‍👧", title:"Mi familia", sub:{en:"…", sv:"…"},
     topics:{ key:{icon:"👪", name:{en:"Family", sv:"Familj"}, items:[ ["la madre","👩"], ["hola", M("Hello","Hej")], ["diez",{n:10}] ]} },
     sentences:[ ["Tengo un hermano .", "👦"] ],                 // words separated by spaces, punctuation as its own word
     gaps:[ ["Tengo ___ hermana.", ["un","una"], "una", "👧", M("I have a sister.","Jag har en syster.")] ],
     qa:[ ["¿Tienes hermanos?", "Sí, tengo una hermana."] ]
   });
*/
window.UNITS = window.UNITS || {};

(function(){
const G = window.GROUP;
const L = G.lang || "en";
const S = {
  en:{ practice:"Spanish practice", chooseUnit:"Choose a unit", now:"NOW", units:"← Units", back:"← Menu",
       chooseTopic:"1. Choose a topic", chooseGame:"2. Choose a game",
       topicNote:"The topic is used in the first five games. The last three mix the whole unit.",
       stickers:"🏅 My stickers", toNext:n=>`${n} ⭐ to the next sticker`, meaning:"ENGLISH", gloss:"EN:",
       help:"💡 Help", showWord:"👀 Show the word", tryAgain:"¡Otra vez! Try again 🙂", listenAgain:"¡Escucha otra vez! Listen again 👂",
       youGot:n=>`You got ${n} ⭐`, newSticker:"¡Nueva pegatina! New sticker!", again:"🔁 Otra vez", menu:"🏠 Menu",
       hello:"¡Hola! I'm Fresca. Choose a unit!", pick:"¡Vamos! Pick a topic and a game.",
       footer:"No accounts, no personal data. Your stars are saved only on this computer.",
       g:{ match:["Match it","Pair the Spanish word with its meaning","Click a meaning, then the Spanish word"],
           choose:["¿Qué es?","Choose the right Spanish word","Choose the right Spanish word"],
           listen:["Escucha","Listen and click the meaning","Listen and click the right meaning"],
           spell:["Spell it","Write the word letter by letter","Click the letters in the right order (watch the accents: á é í ó ú ñ)"],
           memory:["Memory","Find the pairs","Find the Spanish word and its meaning"],
           sentence:["Make a sentence","Put the words in order","Click the words in the right order"],
           gap:["Fill the gap","Choose the missing word","Choose the word that completes the sentence"],
           qa:["Question & answer","Find the right answer","Read (or listen to) the question and choose the best answer"] } },
  sv:{ practice:"Spanska", chooseUnit:"Välj ett tema", now:"NU", units:"← Teman", back:"← Meny",
       chooseTopic:"1. Välj ett område", chooseGame:"2. Välj ett spel",
       topicNote:"Området används i de fem första spelen. De tre sista blandar hela temat.",
       stickers:"🏅 Mina klistermärken", toNext:n=>`${n} ⭐ till nästa klistermärke`, meaning:"SVENSKA", gloss:"SV:",
       help:"💡 Hjälp", showWord:"👀 Visa ordet", tryAgain:"¡Otra vez! Försök igen 🙂", listenAgain:"¡Escucha otra vez! Lyssna igen 👂",
       youGot:n=>`Du fick ${n} ⭐`, newSticker:"¡Nueva pegatina! Nytt klistermärke!", again:"🔁 Otra vez", menu:"🏠 Meny",
       hello:"¡Hola! Jag heter Fresca. Välj ett tema!", pick:"¡Vamos! Välj ett område och ett spel.",
       footer:"Inga konton, inga personuppgifter. Dina stjärnor sparas bara på den här datorn.",
       g:{ match:["Para ihop","Para ihop det spanska ordet med betydelsen","Klicka på en betydelse och sedan på det spanska ordet"],
           choose:["¿Qué es?","Välj rätt spanskt ord","Välj rätt spanskt ord"],
           listen:["Escucha","Lyssna och klicka på betydelsen","Lyssna och klicka på rätt betydelse"],
           spell:["Stava","Skriv ordet bokstav för bokstav","Klicka på bokstäverna i rätt ordning (tänk på accenterna: á é í ó ú ñ)"],
           memory:["Memory","Hitta paren","Hitta det spanska ordet och betydelsen"],
           sentence:["Bygg en mening","Sätt orden i rätt ordning","Klicka på orden i rätt ordning"],
           gap:["Fyll i luckan","Välj ordet som saknas","Välj ordet som fattas i meningen"],
           qa:["Fråga & svar","Hitta rätt svar","Läs (eller lyssna på) frågan och välj det bästa svaret"] } }
}[L];

const STICKERS = ["🌮","🪅","🦜","🌵","🎸","💃","⚽","🦙","🌶️","🏖️","🐂","🥘","🎺","🌞","🦩","🍉","🏆","👑","🚀","🌈","🐬","🦄","🎧","🛹","💎","🐢","🌋","🍦","🎮","🛸"];
const PER = 10;
const IMG = (G.base || "../") + "img/";
const POPS = ["vamos","planazo","quefuerte","todobien"];
const PRAISE = ["¡Muy bien!","¡Genial!","¡Perfecto!","¡Fenomenal!","¡Bravo!","¡Excelente!","¡Fantástico!"];
const KEY = "aJugar-" + G.id;

let state = {stars:0, topics:{}};
try{ const s = JSON.parse(localStorage.getItem(KEY)||"null"); if(s) state = Object.assign(state, s); }catch(e){}
const save = () => { try{ localStorage.setItem(KEY, JSON.stringify(state)); }catch(e){} };

const app = document.getElementById("app");
const rnd = a => a[Math.floor(Math.random()*a.length)];
const shuffle = a => { a=[...a]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };
const esc = s => String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;");
const tr = v => (v && typeof v === "object") ? (v[L] || v.en) : v;

let U = null;          // current unit
const items = () => U.topics[state.topics[U.id] || Object.keys(U.topics)[0]].items;

function picHTML(p, size){
  if(typeof p === "string") return p;
  if(p.c) { const z=size||110; return `<span style="display:inline-block;width:${z}px;height:${z}px;border-radius:50%;background:${p.c};border:4px solid #d9d4c8"></span>`; }
  if(p.n !== undefined) return `<span class="num" style="font-size:${size||110}px">${p.n}</span>`;
  if(p.t) return `<span class="en" style="font-size:${size?Math.round(size*.5):44}px"><small>${S.meaning}</small>${esc(tr(p.t))}</span>`;
}

/* speech */
let voice = null;
function pickVoice(){ try{ const v = speechSynthesis.getVoices(); voice = v.find(x=>/es[-_]ES/i.test(x.lang)) || v.find(x=>/^es/i.test(x.lang)) || null; }catch(e){} }
try{ pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }catch(e){}
const canSpeak = (()=>{ try{ return "speechSynthesis" in window; }catch(e){ return false; } })();
function say(text){ try{ speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text.replace(/ ([.?!])/g,"$1").replace("…","")); u.lang="es-ES"; u.rate=.8; if(voice) u.voice=voice; speechSynthesis.speak(u); }catch(e){} }
function addStar(){ const b = Math.floor(state.stars/PER); state.stars++; save(); const el=document.getElementById("starCount"); if(el) el.textContent=state.stars; return Math.floor(state.stars/PER) > b; }
const starsHTML = () => `<div class="stars">⭐ <span id="starCount">${state.stars}</span></div>`;

/* ---------- group home: list of units ---------- */
function home(){
  U = null; if(location.hash) history.replaceState(null,"",location.pathname);
  const unlocked = Math.min(STICKERS.length, Math.floor(state.stars/PER));
  const units = G.units.filter(id=>window.UNITS[id]);
  app.innerHTML = `
  <a class="home" href="../index.html">🏠 ¡A jugar!</a>
  <header><h1 class="outline"><span class="w1">¡Juega</span> <span class="w2">en</span> <span class="w3">español!</span><span class="sub">${esc(G.name)} · ${S.practice}</span></h1>${starsHTML()}</header>
  <div class="fresca-row"><img class="fresca" src="${IMG}fresca.webp" alt="Fresca"><div class="bubble">${S.hello}</div></div>
  <div class="panel"><p class="label">${S.chooseUnit}</p>
    <div class="units">${units.map(id=>{const u=window.UNITS[id]; return `<button class="unitcard ${id===G.current?'now':''}" data-u="${id}">${id===G.current?`<i class="badge">${S.now}</i>`:""}<span class="ico">${u.icon}</span>${G.labels&&G.labels[id]?`<i class="kap">${esc(G.labels[id])}</i>`:""}<b>${esc(u.title)}</b><span>${esc(tr(u.sub))}</span></button>`;}).join("")}</div>
  </div>
  <div class="panel"><p class="label">${S.stickers} <span class="sub">${S.toNext(PER - state.stars % PER)}</span></p>
    <div class="shelf">${STICKERS.map((s,i)=>`<span class="${i<unlocked?'':'locked'}">${s}</span>`).join("")}</div></div>
  <footer>${S.footer}</footer>`;
  app.querySelectorAll(".unitcard").forEach(b=>b.onclick=()=>{ location.hash = b.dataset.u; });
}

/* ---------- unit menu ---------- */
const ACTS = [
  {id:"match", ico:"🧩", col:"var(--blue)"}, {id:"choose", ico:"🤔", col:"var(--terra)"},
  {id:"listen", ico:"👂", col:"var(--lime)"}, {id:"spell", ico:"🔤", col:"var(--pink)"},
  {id:"memory", ico:"🃏", col:"var(--purple)"}, {id:"sentence", ico:"🧱", col:"var(--green)", need:"sentences"},
  {id:"gap", ico:"✍️", col:"var(--orange)", need:"gaps"}, {id:"qa", ico:"💬", col:"var(--red)", need:"qa", min:3}
];
function unitMenu(){
  const cur = state.topics[U.id] || Object.keys(U.topics)[0];
  const acts = ACTS.filter(a=>!a.need || (U[a.need] && U[a.need].length >= (a.min||1)));
  app.innerHTML = `
  <div class="topbar"><button class="back" id="toUnits">${S.units}</button><div style="flex:1"></div>${starsHTML()}</div>
  <header><h1 class="outline"><span class="w1">${esc(U.title)}</span><span class="sub">${U.icon} ${esc(G.name)} · ${esc(tr(U.sub))}</span></h1></header>
  <div class="fresca-row"><img class="fresca" src="${IMG}fresca.webp" alt="Fresca"><div class="bubble">${S.pick}</div></div>
  <div class="panel"><p class="label">${S.chooseTopic}</p>
    <div class="topics">${Object.entries(U.topics).map(([k,v])=>`<button class="topic ${k===cur?'on':''}" data-t="${k}">${v.icon} ${esc(tr(v.name))}</button>`).join("")}</div>
    <p class="note">${S.topicNote}</p></div>
  <div class="panel"><p class="label">${S.chooseGame}</p>
    <div class="grid">${acts.map(a=>`<button class="act" style="background:${a.col}" data-a="${a.id}"><span class="ico">${a.ico}</span><span>${S.g[a.id][0]}<span class="sub">${S.g[a.id][1]}</span></span></button>`).join("")}</div></div>`;
  document.getElementById("toUnits").onclick = ()=>{ location.hash = ""; };
  app.querySelectorAll(".topic").forEach(b=>b.onclick=()=>{ state.topics[U.id]=b.dataset.t; save(); unitMenu(); });
  app.querySelectorAll(".act").forEach(b=>b.onclick=()=>GAMES[b.dataset.a]());
}

/* ---------- shell ---------- */
function shell(id){
  app.innerHTML = `
  <div class="topbar"><button class="back" id="back">${S.back}</button><div class="bar"><i style="width:0%"></i></div>${starsHTML()}</div>
  <div class="task outline">${S.g[id][0]}<span class="sub">${S.g[id][2]}</span></div>
  <div class="stage" id="stage"></div>`;
  document.getElementById("back").onclick = ()=>{ try{speechSynthesis.cancel();}catch(e){} unitMenu(); };
  return document.getElementById("stage");
}
function setBar(d,t){ const i=app.querySelector(".bar i"); if(i) i.style.width = Math.round(d/t*100)+"%"; }
function finish(again, earned, newSticker){
  confetti();
  const st = newSticker ? STICKERS[Math.min(STICKERS.length, Math.floor(state.stars/PER))-1] : null;
  app.innerHTML = `
  <div class="topbar"><button class="back" id="back">${S.back}</button><div style="flex:1"></div>${starsHTML()}</div>
  <div class="stage end"><img src="${IMG}${rnd(["todobien","quefuerte","planazo"])}.webp" style="width:min(300px,70%)" alt=""><br><img class="fresca" src="${IMG}fresca.webp" alt="Fresca"><h2 class="outline">${rnd(PRAISE)}</h2>
    <div style="font-size:24px;font-weight:800">${S.youGot(earned)}</div>
    ${st?`<div class="newsticker">${S.newSticker}<span>${st}</span></div>`:""}
    <div class="opts" style="margin-top:22px"><button class="next" id="again">${S.again}</button>
    <button class="next" id="tomenu" style="background:var(--green);box-shadow:0 4px 0 #1f8a5d">${S.menu}</button></div></div>`;
  document.getElementById("back").onclick = unitMenu;
  document.getElementById("tomenu").onclick = unitMenu;
  document.getElementById("again").onclick = again;
  say(st ? "¡Nueva pegatina!" : "¡Muy bien!");
}
function confetti(){ const e=["⭐","🎉","✨","🌟","🎊"]; for(let i=0;i<26;i++){ const s=document.createElement("div"); s.className="confetti"; s.textContent=rnd(e); s.style.left=Math.random()*100+"vw"; s.style.animationDuration=(1.6+Math.random()*1.8)+"s"; document.body.appendChild(s); setTimeout(()=>s.remove(),3600); } }
function run(id, again, qs, renderQ){
  let i=0, earned=0, sticker=false; const stage = shell(id);
  const next = () => { if(i>=qs.length){ finish(again, earned, sticker); return; } setBar(i, qs.length);
    renderQ(stage, qs[i], ok=>{ if(ok){ earned++; if(addStar()) sticker=true; } i++; setTimeout(next, 1300); }); };
  next();
}
function oops(fb, msg){ fb.innerHTML = `<img src="${IMG}fresca.webp" alt=""> ${msg || S.tryAgain}`; }
let lastPop = 0;
function praise(fb, extra){
  fb.textContent = rnd(PRAISE) + (extra ? " " + extra : "");
  if(Date.now() - lastPop < 900) return; lastPop = Date.now();
  const im = document.createElement("img"); im.className = "pop"; im.src = IMG + rnd(POPS) + ".webp"; im.alt = "";
  document.body.appendChild(im); setTimeout(()=>im.remove(), 1200);
}
function wrong(b, stage, msg){ b.classList.add("bad"); setTimeout(()=>{b.classList.remove("bad");b.classList.add("faded");},400); oops(stage.querySelector("#fb"), msg); }

/* ---------- games ---------- */
const GAMES = {};
GAMES.match = function(){
  const set = shuffle(items()).slice(0,6); const stage = shell("match");
  stage.innerHTML = `<div class="match">
    <div class="col">${shuffle(set).map(([w,p])=>`<button class="tile pic" data-w="${esc(w)}">${picHTML(p,46)}</button>`).join("")}</div>
    <div class="col">${shuffle(set).map(([w])=>`<button class="tile wd" data-w="${esc(w)}">${w}</button>`).join("")}</div></div><div class="feedback" id="fb"></div>`;
  let sp=null, sw=null, matched=0, earned=0, sticker=false, miss=0; const fb = stage.querySelector("#fb");
  const check = () => { if(!sp||!sw) return;
    if(sp.dataset.w===sw.dataset.w){ [sp,sw].forEach(t=>{t.classList.remove("sel");t.classList.add("ok");t.disabled=true;});
      say(sw.dataset.w); matched++; setBar(matched,set.length); if(!miss){ earned++; if(addStar()) sticker=true; } miss=0; praise(fb);
      if(matched===set.length) setTimeout(()=>finish(GAMES.match,earned,sticker),1300);
    } else { miss++; [sp,sw].forEach(t=>{t.classList.remove("sel");t.classList.add("bad");setTimeout(()=>t.classList.remove("bad"),450);}); oops(fb); }
    sp=sw=null; };
  stage.querySelectorAll(".tile.pic").forEach(t=>t.onclick=()=>{ stage.querySelectorAll(".tile.pic").forEach(x=>x.classList.remove("sel")); sp=t; t.classList.add("sel"); check(); });
  stage.querySelectorAll(".tile.wd").forEach(t=>t.onclick=()=>{ stage.querySelectorAll(".tile.wd").forEach(x=>x.classList.remove("sel")); sw=t; t.classList.add("sel"); check(); });
};
GAMES.choose = function(){
  run("choose", GAMES.choose, shuffle(items()).slice(0,8), (stage,[w,p],done)=>{
    const opts = shuffle([w, ...shuffle(items().filter(x=>x[0]!==w)).slice(0,2).map(x=>x[0])]);
    stage.innerHTML = `<div class="bigpic">${picHTML(p)}</div><div class="opts">${opts.map(o=>`<button class="opt" data-o="${esc(o)}">${o}</button>`).join("")}</div><div class="feedback" id="fb"></div>`;
    let first=true;
    stage.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{ if(b.dataset.o===w){ b.classList.add("ok"); stage.querySelectorAll(".opt").forEach(x=>x.disabled=true); say(w); praise(stage.querySelector("#fb")); done(first); } else { first=false; wrong(b,stage); } });
  });
};
GAMES.listen = function(){
  run("listen", GAMES.listen, shuffle(items()).slice(0,8), (stage,[w,p],done)=>{
    const opts = shuffle([[w,p], ...shuffle(items().filter(x=>x[0]!==w)).slice(0,3)]);
    stage.innerHTML = `${canSpeak?`<button class="speak" id="play" style="font-size:32px;padding:12px 28px">🔊 Escucha</button>`:""}
      <div id="showw" style="font-size:40px;font-weight:900;margin-top:8px;${canSpeak?'visibility:hidden':''}">${w}</div>
      ${canSpeak?`<button class="hint" id="showbtn">${S.showWord}</button>`:""}
      <div class="pics">${opts.map(([ow,op])=>`<button class="picbtn" data-o="${esc(ow)}">${picHTML(op,80)}</button>`).join("")}</div><div class="feedback" id="fb"></div>`;
    let first=true;
    if(canSpeak){ stage.querySelector("#play").onclick=()=>say(w); stage.querySelector("#showbtn").onclick=()=>{ first=false; stage.querySelector("#showw").style.visibility="visible"; }; setTimeout(()=>say(w),350); }
    stage.querySelectorAll(".picbtn").forEach(b=>b.onclick=()=>{ if(b.dataset.o===w){ b.classList.add("ok"); stage.querySelectorAll(".picbtn").forEach(x=>x.disabled=true); stage.querySelector("#showw").style.visibility="visible"; praise(stage.querySelector("#fb")); done(first); } else { first=false; wrong(b,stage,S.listenAgain); } });
  });
};
GAMES.spell = function(){
  const strip = w => w.replace(/^(el|la|los|las) /,"");
  const pool = items().map(([w,p])=>[strip(w),p,w]).filter(([w])=>/^[a-záéíóúñü]+$/i.test(w) && w.length<=10);
  run("spell", GAMES.spell, shuffle(pool).slice(0,6), (stage,[w,p,full],done)=>{
    stage.innerHTML = `<div class="bigpic">${picHTML(p)}</div>${full!==w?`<div class="gloss">${full.split(" ")[0]} …</div>`:""}
      <div class="slots">${w.split("").map(()=>`<div class="slot"></div>`).join("")}</div>
      <div class="tiles">${shuffle(w.split("")).map(l=>`<button class="letter" data-l="${l}">${l}</button>`).join("")}</div>
      <button class="hint" id="hint">${S.help}</button><div class="feedback" id="fb"></div>`;
    let pos=0, first=true; const slots = stage.querySelectorAll(".slot");
    stage.querySelector("#hint").onclick=()=>{ first=false; say(full); const fb=stage.querySelector("#fb"); fb.textContent=w; setTimeout(()=>{ if(pos<w.length) fb.textContent=""; },1800); };
    stage.querySelectorAll(".letter").forEach(b=>b.onclick=()=>{ if(b.dataset.l===w[pos]){ slots[pos].textContent=w[pos]; slots[pos].classList.add("filled"); b.classList.add("used"); pos++; if(pos===w.length){ say(full); praise(stage.querySelector("#fb"), full); done(first); } } else { first=false; b.classList.add("bad"); setTimeout(()=>b.classList.remove("bad"),400); } });
  });
};
GAMES.memory = function(){
  const set = shuffle(items()).slice(0,6); const stage = shell("memory");
  const cards = shuffle([...set.map(([w,p])=>({w,p,type:"pic"})), ...set.map(([w])=>({w,type:"word"}))]);
  stage.innerHTML = `<div class="mem">${cards.map((c,i)=>`<button class="card" data-i="${i}">?</button>`).join("")}</div><div class="feedback" id="fb"></div>`;
  let open=[], found=0, lock=false, tries=0; const els = stage.querySelectorAll(".card");
  const show = i=>{ const c=cards[i], el=els[i]; el.classList.add("open"); if(c.type==="word"){ el.classList.add("w"); el.textContent=c.w; } else el.innerHTML=picHTML(c.p,52); };
  const hide = i=>{ els[i].classList.remove("open","w"); els[i].textContent="?"; };
  els.forEach(el=>el.onclick=()=>{ const i=+el.dataset.i; if(lock||open.includes(i)||el.classList.contains("done")) return; show(i); open.push(i);
    if(open.length===2){ const [a,b]=open; tries++;
      if(cards[a].w===cards[b].w && cards[a].type!==cards[b].type){ els[a].classList.add("done"); els[b].classList.add("done"); say(cards[a].w); found++; setBar(found,set.length); open=[]; praise(stage.querySelector("#fb"));
        if(found===set.length){ const earned = tries<=10?6:tries<=14?5:4; let st=false; for(let k=0;k<earned;k++) if(addStar()) st=true; setTimeout(()=>finish(GAMES.memory,earned,st),1300); }
      } else { lock=true; setTimeout(()=>{ hide(a); hide(b); open=[]; lock=false; },1100); } } });
};
GAMES.sentence = function(){
  run("sentence", GAMES.sentence, shuffle(U.sentences).slice(0,6), (stage,[s,p],done)=>{
    const words = s.split(" ");
    stage.innerHTML = `<div class="bigpic" style="font-size:90px;min-height:110px">${picHTML(p,90)}</div>
      <div class="slots">${words.map(()=>`<div class="slot wslot"></div>`).join("")}</div>
      <div class="tiles">${shuffle(words).map(t=>`<button class="word" data-w="${esc(t)}">${t}</button>`).join("")}</div>
      <button class="hint" id="hint">${S.help}</button><div class="feedback" id="fb"></div>`;
    let pos=0, first=true; const slots = stage.querySelectorAll(".slot");
    stage.querySelector("#hint").onclick=()=>{ first=false; say(s); const btn=[...stage.querySelectorAll(".word")].find(b=>!b.classList.contains("used")&&b.dataset.w===words[pos]); if(btn){ btn.classList.add("ok"); setTimeout(()=>btn.classList.remove("ok"),900); } };
    stage.querySelectorAll(".word").forEach(b=>b.onclick=()=>{ if(b.dataset.w===words[pos]){ slots[pos].textContent=words[pos]; slots[pos].classList.add("filled"); b.classList.add("used"); pos++; if(pos===words.length){ say(s); praise(stage.querySelector("#fb")); done(first); } } else { first=false; b.classList.add("bad"); setTimeout(()=>b.classList.remove("bad"),400); } });
  });
};
GAMES.gap = function(){
  run("gap", GAMES.gap, shuffle(U.gaps).slice(0,8), (stage,[s,opts,ans,p,gl],done)=>{
    stage.innerHTML = `<div class="bigpic" style="font-size:80px;min-height:100px">${picHTML(p,80)}</div>
      <div class="gapline" id="line">${s.replace("___","<b>&nbsp;?&nbsp;</b>")}</div>
      ${gl?`<div class="gloss">${S.gloss} ${esc(tr(gl.t))}</div>`:""}
      <div class="opts">${opts.map(o=>`<button class="opt" data-o="${esc(o)}">${o}</button>`).join("")}</div><div class="feedback" id="fb"></div>`;
    let first=true;
    stage.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{ if(b.dataset.o===ans){ b.classList.add("ok"); stage.querySelectorAll(".opt").forEach(x=>x.disabled=true); stage.querySelector("#line").innerHTML=s.replace("___",`<b>${ans}</b>`); say(s.replace("___",ans)); praise(stage.querySelector("#fb")); done(first); } else { first=false; wrong(b,stage); } });
  });
};
GAMES.qa = function(){
  run("qa", GAMES.qa, shuffle(U.qa).slice(0,8), (stage,[q,a],done)=>{
    const opts = shuffle([a, ...shuffle(U.qa.filter(x=>x[1]!==a)).slice(0,2).map(x=>x[1])]);
    stage.innerHTML = `<div class="question">💬 ${q}</div>${canSpeak?`<button class="speak" id="play">🔊</button>`:""}
      <div class="opts" style="flex-direction:column;align-items:center">${opts.map(o=>`<button class="opt long" data-o="${esc(o)}">${o}</button>`).join("")}</div><div class="feedback" id="fb"></div>`;
    if(canSpeak) stage.querySelector("#play").onclick=()=>say(q);
    let first=true;
    stage.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{ if(b.dataset.o===a){ b.classList.add("ok"); stage.querySelectorAll(".opt").forEach(x=>x.disabled=true); say(q+" "+a); praise(stage.querySelector("#fb")); done(first); } else { first=false; wrong(b,stage); } });
  });
};

/* ---------- routing: #unit-id opens a unit directly (good for QR codes) ---------- */
function route(){
  const id = location.hash.slice(1);
  if(id && window.UNITS[id] && G.units.includes(id)){ U = window.UNITS[id]; if(!U.topics[state.topics[U.id]]) state.topics[U.id] = Object.keys(U.topics)[0]; unitMenu(); }
  else home();
  window.scrollTo(0,0);
}
window.addEventListener("hashchange", route);
route();
})();
