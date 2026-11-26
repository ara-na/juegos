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
       album:"📒 My album", seeAlbum:"Open my album 📒", title:"Your title", ach:"🏅 Achievements", rare:"✨ Rare stickers", gold:"🥇 Gold stickers", legend:"👑 Legendary", common:"⭐ Common stickers",
       goldHow:"Play a perfect game (no mistakes) in a unit to get its gold sticker.", soon:"Coming soon", newAch:"New achievement!", newGold:"New gold sticker!",
       showTeacher:"Complete the album and show it to your teacher 😉", next:"next title at", maxTitle:"Top title!",
       escape:"Escape room: present, ser/estar/tener/ir, future, perfect, gerund", hello:"¡Hola! I'm %N, Fresca's friend. Choose a unit!", pick:"¡Vamos! Pick a topic and a game.",
       footer:"No accounts, no personal data. Your stars are saved only on this computer.",
       g:{ match:["Match it","Pair the Spanish word with its meaning","Click a meaning, then the Spanish word"],
           choose:["¿Qué es?","Choose the right Spanish word","Choose the right Spanish word"],
           listen:["Escucha","Listen and click the meaning","Listen and click the right meaning"],
           spell:["Spell it","Write the word letter by letter","Click the letters in the right order (watch the accents: á é í ó ú ñ)"],
           memory:["Memory","Find the pairs","Find the Spanish word and its meaning"],
           sentence:["Make a sentence","Put the words in order","Click the words in the right order"],
           gap:["Fill the gap","Choose the missing word","Choose the word that completes the sentence"],
           qa:["Question & answer","Find the right answer","Read (or listen to) the question and choose the best answer"],
           read:["Lee y responde","Read a short text and answer","Read the text and choose the answer – 💡 shows where it is"] }, trBtn:"👀 Translation", where:"💡 Where is the answer?" },
  sv:{ practice:"Spanska", chooseUnit:"Välj ett tema", now:"NU", units:"← Teman", back:"← Meny",
       chooseTopic:"1. Välj ett område", chooseGame:"2. Välj ett spel",
       topicNote:"Området används i de fem första spelen. De tre sista blandar hela temat.",
       stickers:"🏅 Mina klistermärken", toNext:n=>`${n} ⭐ till nästa klistermärke`, meaning:"SVENSKA", gloss:"SV:",
       help:"💡 Hjälp", showWord:"👀 Visa ordet", tryAgain:"¡Otra vez! Försök igen 🙂", listenAgain:"¡Escucha otra vez! Lyssna igen 👂",
       youGot:n=>`Du fick ${n} ⭐`, newSticker:"¡Nueva pegatina! Nytt klistermärke!", again:"🔁 Otra vez", menu:"🏠 Meny",
       album:"📒 Mitt album", seeAlbum:"Öppna mitt album 📒", title:"Din titel", ach:"🏅 Prestationer", rare:"✨ Sällsynta klistermärken", gold:"🥇 Guldklistermärken", legend:"👑 Legendariska", common:"⭐ Vanliga klistermärken",
       goldHow:"Spela en perfekt omgång (inga fel) i ett tema för att få dess guldklistermärke.", soon:"Kommer snart", newAch:"Ny prestation!", newGold:"Nytt guldklistermärke!",
       showTeacher:"Fyll albumet och visa det för din lärare 😉", next:"nästa titel vid", maxTitle:"Högsta titeln!",
       escape:"Escape room: presens, ser/estar/tener/ir, futurum, perfekt, gerundium", hello:"¡Hola! Jag heter %N och är Frescas kompis. Välj ett tema!", pick:"¡Vamos! Välj ett område och ett spel.",
       footer:"Inga konton, inga personuppgifter. Dina stjärnor sparas bara på den här datorn.",
       g:{ match:["Para ihop","Para ihop det spanska ordet med betydelsen","Klicka på en betydelse och sedan på det spanska ordet"],
           choose:["¿Qué es?","Välj rätt spanskt ord","Välj rätt spanskt ord"],
           listen:["Escucha","Lyssna och klicka på betydelsen","Lyssna och klicka på rätt betydelse"],
           spell:["Stava","Skriv ordet bokstav för bokstav","Klicka på bokstäverna i rätt ordning (tänk på accenterna: á é í ó ú ñ)"],
           memory:["Memory","Hitta paren","Hitta det spanska ordet och betydelsen"],
           sentence:["Bygg en mening","Sätt orden i rätt ordning","Klicka på orden i rätt ordning"],
           gap:["Fyll i luckan","Välj ordet som saknas","Välj ordet som fattas i meningen"],
           qa:["Fråga & svar","Hitta rätt svar","Läs (eller lyssna på) frågan och välj det bästa svaret"],
           read:["Lee y responde","Läs en kort text och svara","Läs texten och välj svaret – 💡 visar var det står"] }, trBtn:"👀 Översättning", where:"💡 Var står svaret?" }
}[L];

const STICKERS = ["🌮","🪅","🦜","🌵","🎸","💃","⚽","🦙","🌶️","🏖️","🐂","🥘","🎺","🌞","🦩","🍉","🏆","👑","🚀","🌈","🐬","🦄","🎧","🛹","💎","🐢","🌋","🍦","🎮","🛸"];
const PER = 10;
const IMG = (G.base || "../") + "img/";
const PJ = {fresca:"Fresca",arandano:"Arándano",banana:"Banana",coco:"Coco",durian:"Durián",manzana:"Manzana",pera:"Pera",pina:"Piña"};
const MASC = PJ[G.mascot] ? G.mascot : "fresca";
const guide = (cls="fresca") => `<img class="${cls}" src="${IMG}pj/${MASC}.webp" alt="${PJ[MASC]}">`;
const POPS = ["vamos","planazo","quefuerte","todobien"];
const PRAISE = ["¡Muy bien!","¡Genial!","¡Perfecto!","¡Fenomenal!","¡Bravo!","¡Excelente!","¡Fantástico!"];
const KEY = "aJugar-" + G.id;

let state = {stars:0, topics:{}, ach:{}, gold:{}, played:{}, days:[], games:0, spellOk:0};
try{ const s = JSON.parse(localStorage.getItem(KEY)||"null"); if(s) state = Object.assign(state, s); }catch(e){}
["ach","gold","played"].forEach(k=>{ if(!state[k]) state[k]={}; }); if(!state.days) state.days=[]; state.games=state.games||0; state.spellOk=state.spellOk||0;
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

/* ---------- album: achievements, rare, gold, legendary ---------- */
const escapeSave = () => { try{ return JSON.parse(localStorage.getItem("aJugar-verbos")||"{}"); }catch(e){ return {}; } };
const groupUnits = () => G.units.filter(id=>window.UNITS[id]);
const ACH = [
  {id:"primera", ico:"🎮", rare:"hola",     n:{en:"First game!",sv:"Första spelet!"},          d:{en:"Finish a game",sv:"Spela klart ett spel"}, ok:()=>state.games>=1},
  {id:"perfecto",ico:"💯", rare:"todobien", n:{en:"Perfect!",sv:"Perfekt!"},                   d:{en:"A game with no mistakes",sv:"Ett spel utan fel"}, ok:()=>Object.keys(state.gold).length>=1},
  {id:"cien",    ico:"⭐", rare:"vamos",    n:{en:"100 stars",sv:"100 stjärnor"},              d:{en:"Collect 100 stars",sv:"Samla 100 stjärnor"}, ok:()=>state.stars>=100},
  {id:"deletreo",ico:"🔤", rare:"planazo",  n:{en:"Spelling ace",sv:"Stavningsproffs"},        d:{en:"Spell 10 words right first time",sv:"Stava 10 ord rätt på första försöket"}, ok:()=>state.spellOk>=10},
  {id:"detective",ico:"🔐",rare:"quefuerte",n:{en:"Verb detective",sv:"Verbdetektiv"},         d:{en:"Escape from the 5 verb rooms",sv:"Rym från de 5 verbrummen"}, ok:()=>{const e=escapeSave(); return ["presente","irregulares","futuro","perfecto","gerundio"].every(k=>e[k]);}},
  {id:"poliglota",ico:"🌍",rare:"chao",     n:{en:"Explorer",sv:"Upptäckare"},                d:{en:"Play every unit",sv:"Spela alla teman"}, ok:()=>groupUnits().every(u=>state.played[u])},
  {id:"racha",   ico:"🔥", n:{en:"On fire",sv:"Het som eld"},                                  d:{en:"Play on 5 different days",sv:"Spela 5 olika dagar"}, ok:()=>state.days.length>=5},
  {id:"llave",   ico:"🗝️", n:{en:"Master key",sv:"Huvudnyckel"},                               d:{en:"Escape from the secret room",sv:"Rym från det hemliga rummet"}, ok:()=>!!escapeSave().secreto},
  {id:"oro",     ico:"🥇", n:{en:"Golden album",sv:"Guldalbum"},                               d:{en:"Get every gold sticker",sv:"Få alla guldklistermärken"}, ok:()=>groupUnits().every(u=>state.gold[u])}
];
const RARES = ACH.filter(a=>a.rare);
const LEGEND = {primera:"manzana", perfecto:"pera", cien:"banana", deletreo:"arandano", detective:"durian", poliglota:"pina", racha:"coco", oro:"fresca"};
const TITLES = [[0,"Aprendiz"],[50,"Explorador/a"],[150,"Experto/a"],[300,"Maestro/a del español"]];
const isPro=()=>{ try{ return !!localStorage.getItem("aJugar-pro"); }catch(e){ return false; } };
/* puerta secreta: 5 clics en la mascota de la portada */
let proClicks=0, proTimer=null;
function proDoor(){ const f=app.querySelector(".fresca-row .fresca"); if(!f) return; f.style.cursor="pointer";
  f.onclick=()=>{ proClicks++; f.animate([{transform:"rotate(0)"},{transform:"rotate(-12deg)"},{transform:"rotate(0)"}],{duration:250}); clearTimeout(proTimer); proTimer=setTimeout(()=>proClicks=0,2500); if(proClicks>=5) location.href="../pro/"; }; }
try{ console.log("%c¿Hacker? 🕵️","font:bold 20px monospace;color:#39ff88;background:#141414;padding:4px 8px","\nHay una puerta secreta en esta página. Busca a la mascota y haz clic cinco veces.\n(Det finns en hemlig dörr. Klicka fem gånger på maskoten.)"); }catch(e){}
function titleInfo(){ let t=TITLES[0], nx=null; TITLES.forEach((x,i)=>{ if(state.stars>=x[0]){ t=x; nx=TITLES[i+1]||null; } }); return {name: state.ach.oro ? "👑 Leyenda" : (isPro()? "🕶️ PRO · "+t[1] : t[1]), next: nx}; }
function checkAch(){ const fresh=[]; ACH.forEach(a=>{ if(!state.ach[a.id] && a.ok()){ state.ach[a.id]=new Date().toISOString().slice(0,10); fresh.push(a); } }); if(fresh.length) save(); return fresh; }
function goldBadge(u, on, big){ const z = big?78:58; return `<span class="goldst ${on?"on":""}" style="width:${z}px;height:${z}px;font-size:${Math.round(z*.5)}px" title="${esc(u.title)}">${on?u.icon:"?"}</span>`; }
function albumSummary(){
  const ti=titleInfo(), unlocked=Math.min(STICKERS.length, Math.floor(state.stars/PER)), us=groupUnits();
  const nRare=RARES.filter(a=>state.ach[a.id]).length, nGold=us.filter(u=>state.gold[u]).length;
  return `<div class="panel albumsum"><div><p class="label">${S.album}</p><div class="ttl">${ti.name}</div>
     <div class="counts"><span>⭐ ${unlocked}/${STICKERS.length}</span><span>✨ ${nRare}/${RARES.length}</span><span>🥇 ${nGold}/${us.length}</span><span>👑 ${Object.keys(LEGEND).filter(k=>state.ach[k]).length}/8</span></div></div>
     <button class="next" id="toAlbum">${S.seeAlbum}</button></div>`;
}
function album(){
  checkAch();
  const ti=titleInfo(), unlocked=Math.min(STICKERS.length, Math.floor(state.stars/PER)), us=groupUnits();
  app.innerHTML = `
  <div class="topbar"><button class="back" id="toUnits">${S.units}</button><div style="flex:1"></div>${starsHTML()}</div>
  <header><h1 class="outline"><span class="w2">${S.album.replace("📒 ","")}</span><span class="sub">📒 ${esc(G.name)}</span></h1></header>
  <div class="panel titlebox">${guide()}<div><span class="sub">${S.title}</span><div class="ttl">${ti.name}</div>
    <span class="sub">${ti.next?`${S.next} ${ti.next[0]} ⭐ → ${ti.next[1]}`:S.maxTitle}</span></div></div>
  ${isPro()?`<div class="panel" style="background:#141414;color:#39ff88;text-align:center"><p class="label" style="color:#39ff88">🕶️ ${L==="sv"?"Hemligt klistermärke":"Secret sticker"}</p><div class="probadge"><img src="${IMG}pj/fresca_icon.webp" alt=""><b>PRO</b></div><p style="font-weight:800">${L==="sv"?"Du hittade den hemliga dörren!":"You found the secret door!"}</p></div>`:""}
  <div class="panel"><p class="label">${S.ach}</p><div class="achs">${ACH.map(a=>`<div class="achv ${state.ach[a.id]?"on":""}"><span class="ai">${a.ico}</span><b>${a.n[L]}</b><span>${a.d[L]}</span>${a.rare?`<i>✨</i>`:""}</div>`).join("")}</div></div>
  <div class="panel"><p class="label">${S.rare}</p><div class="rares">${RARES.map(a=>`<div class="rarest ${state.ach[a.id]?"on":""}"><img src="${IMG}${a.rare}.webp" alt=""><span>${state.ach[a.id]?"":a.ico+" "+a.n[L]}</span></div>`).join("")}</div></div>
  <div class="panel"><p class="label">${S.gold}</p><p class="note" style="margin-top:0">${S.goldHow}</p><div class="golds">${us.map(id=>`<div class="goldcell">${goldBadge(UNITS[id], state.gold[id], true)}<span>${esc(UNITS[id].title)}</span></div>`).join("")}</div></div>
  <div class="panel"><p class="label">${S.legend}</p><div class="legends">${Object.entries(LEGEND).map(([aid,pj])=>{const a=ACH.find(x=>x.id===aid), on=!!state.ach[aid];
     return `<div class="legst ${on?"on":""}"><img src="${IMG}pj/${pj}_card.webp" alt="${PJ[pj]}"><b>${on?PJ[pj]:"???"}</b><span>${a.ico} ${a.n[L]}</span></div>`;}).join("")}</div></div>
  <div class="panel"><p class="label">${S.common} <span class="sub">${S.toNext(PER - state.stars % PER)}</span></p>
    <div class="shelf">${STICKERS.map((s,i)=>`<span class="${i<unlocked?'':'locked'}">${s}</span>`).join("")}</div></div>
  <footer>${S.showTeacher}</footer>`;
  document.getElementById("toUnits").onclick = ()=>{ location.hash = ""; };
}

/* ---------- group home: list of units ---------- */
function home(){
  U = null; if(location.hash) history.replaceState(null,"",location.pathname);
  const unlocked = Math.min(STICKERS.length, Math.floor(state.stars/PER));
  const units = G.units.filter(id=>window.UNITS[id]);
  app.innerHTML = `
  <a class="home" href="../index.html">🏠 ¡A jugar!</a>
  <header><h1 class="outline"><span class="w1">¡Juega</span> <span class="w2">en</span> <span class="w3">español!</span><span class="sub">${esc(G.name)} · ${S.practice}</span></h1>${starsHTML()}</header>
  <div class="fresca-row">${guide()}<div class="bubble">${S.hello.replace("%N",PJ[MASC])}</div></div>
  <div class="panel"><p class="label">${S.chooseUnit}</p>
    <div class="units">${units.map(id=>{const u=window.UNITS[id]; return `<button class="unitcard ${id===G.current?'now':''}" data-u="${id}">${id===G.current?`<i class="badge">${S.now}</i>`:""}<span class="ico">${u.icon}${state.gold[id]?` <i class="goldmini">🥇</i>`:""}</span>${G.labels&&G.labels[id]?`<i class="kap">${esc(G.labels[id])}</i>`:""}<b>${esc(u.title)}</b><span>${esc(tr(u.sub))}</span></button>`;}).join("")}</div>
  </div>
  <a class="unitcard" href="../verbos/?lang=${L}" style="background:var(--purple);color:#fff;text-decoration:none;margin-bottom:18px;display:flex"><span class="ico">🔐</span><b>¡Escapa de los verbos!</b><span style="color:#fff">${S.escape}</span></a>
  <a class="unitcard" href="../watch/?lang=es&ui=${L}&edad=${/Åk ?[67]\b|MYP ?1/.test(G.name)?"jr":"sr"}" style="background:var(--pink);color:#fff;text-decoration:none;margin-bottom:18px;display:flex"><span class="ico">🎬</span><b>Mira y piensa</b><span style="color:#fff">${L==="sv"?"Korta videor på spanska med frågor":"Short videos in Spanish with questions"}</span></a>
  ${albumSummary()}
  <footer>✏️ Fresca: diseño original de Elliot · ${S.footer}</footer>`;
  app.querySelectorAll(".unitcard[data-u]").forEach(b=>b.onclick=()=>{ location.hash = b.dataset.u; });
  document.getElementById("toAlbum").onclick = ()=>{ location.hash = "album"; };
  proDoor();
}

/* ---------- unit menu ---------- */
const ACTS = [
  {id:"match", ico:"🧩", col:"var(--blue)"}, {id:"choose", ico:"🤔", col:"var(--terra)"},
  {id:"listen", ico:"👂", col:"var(--lime)"}, {id:"spell", ico:"🔤", col:"var(--pink)"},
  {id:"memory", ico:"🃏", col:"var(--purple)"}, {id:"sentence", ico:"🧱", col:"var(--green)", need:"sentences"},
  {id:"gap", ico:"✍️", col:"var(--orange)", need:"gaps"}, {id:"qa", ico:"💬", col:"var(--red)", need:"qa", min:3},
  {id:"read", ico:"📖", col:"var(--cyan)", need:"readings"}
];
function unitMenu(){
  const cur = state.topics[U.id] || Object.keys(U.topics)[0];
  const acts = ACTS.filter(a=>!a.need || (U[a.need] && U[a.need].length >= (a.min||1)));
  app.innerHTML = `
  <div class="topbar"><button class="back" id="toUnits">${S.units}</button><div style="flex:1"></div>${starsHTML()}</div>
  <header><h1 class="outline"><span class="w1">${esc(U.title)}</span><span class="sub">${U.icon} ${esc(G.name)} · ${esc(tr(U.sub))}</span></h1></header>
  <div class="fresca-row">${guide()}<div class="bubble">${S.pick}</div></div>
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
function finish(again, earned, newSticker, total){
  confetti();
  const perfect = total && earned>=total, newGold = perfect && !state.gold[U.id];
  if(perfect) state.gold[U.id]=true;
  state.games++; state.played[U.id]=true;
  const today=new Date().toISOString().slice(0,10); if(!state.days.includes(today)) state.days.push(today);
  save(); const fresh = checkAch();
  const st = newSticker ? STICKERS[Math.min(STICKERS.length, Math.floor(state.stars/PER))-1] : null;
  app.innerHTML = `
  <div class="topbar"><button class="back" id="back">${S.back}</button><div style="flex:1"></div>${starsHTML()}</div>
  <div class="stage end"><img src="${IMG}chao.webp" style="width:min(320px,75%);transform:rotate(-3deg)" alt="¡Chao pescao!"><br>${guide()}<h2 class="outline">${rnd(PRAISE)}</h2>
    <div style="font-size:24px;font-weight:800">${S.youGot(earned)}</div>
    ${st?`<div class="newsticker">${S.newSticker}<span>${st}</span></div>`:""}
    ${newGold?`<div class="newsticker gold">${S.newGold}<span>${goldBadge(U,true,true)}</span></div>`:""}
    ${fresh.map(a=>`<div class="newsticker">${S.newAch} ${a.ico} <b>${a.n[L]}</b><span>${a.rare?`<img src="${IMG}${a.rare}.webp" alt="" style="width:150px">`:""}${LEGEND[a.id]?`<img src="${IMG}pj/${LEGEND[a.id]}_card.webp" alt="" style="width:120px;margin-left:8px">`:""}</span></div>`).join("")}
    <div class="opts" style="margin-top:22px"><button class="next" id="again">${S.again}</button>
    <button class="next" id="tomenu" style="background:var(--green);box-shadow:0 4px 0 #1f8a5d">${S.menu}</button>${(fresh.length||newGold)?`<button class="next" id="toAlb" style="background:var(--lime)">${S.album}</button>`:""}</div></div>`;
  const ta=document.getElementById("toAlb"); if(ta) ta.onclick=()=>{ location.hash="album"; };
  document.getElementById("back").onclick = unitMenu;
  document.getElementById("tomenu").onclick = unitMenu;
  document.getElementById("again").onclick = again;
  say(fresh.length||newGold ? "¡Qué fuerte! ¡Nueva pegatina!" : st ? "¡Nueva pegatina! ¡Chao pescao!" : "¡Muy bien! ¡Chao pescao!");
}
function confetti(){ const e=["⭐","🎉","✨","🌟","🎊"]; for(let i=0;i<26;i++){ const s=document.createElement("div"); s.className="confetti"; s.textContent=rnd(e); s.style.left=Math.random()*100+"vw"; s.style.animationDuration=(1.6+Math.random()*1.8)+"s"; document.body.appendChild(s); setTimeout(()=>s.remove(),3600); } }
function run(id, again, qs, renderQ){
  let i=0, earned=0, sticker=false; const stage = shell(id);
  const next = () => { if(i>=qs.length){ finish(again, earned, sticker, qs.length); return; } setBar(i, qs.length);
    renderQ(stage, qs[i], ok=>{ if(ok){ earned++; if(id==="spell"){ state.spellOk++; save(); } if(addStar()) sticker=true; } i++; setTimeout(next, 1300); }); };
  next();
}
function oops(fb, msg){ fb.innerHTML = `<img src="${IMG}pj/${MASC}_icon.webp" alt=""> ${msg || S.tryAgain}`; }
let lastPop = 0;
function praise(fb, extra){
  fb.textContent = rnd(PRAISE) + (extra ? " " + extra : "");
  if(Date.now() - lastPop < 900) return; lastPop = Date.now();
  const im = document.createElement("img"); im.className = "pop"; im.src = IMG + rnd(POPS) + ".webp"; im.alt = "";
  document.body.appendChild(im); setTimeout(()=>im.remove(), 1200);
}
function wrong(b, stage, msg){ b.classList.add("bad"); setTimeout(()=>{b.classList.remove("bad");b.classList.add("faded");},400); oops(stage.querySelector("#fb"), msg); }

const fw = s => s.toLowerCase().replace(/[¿?¡!.,]/g,"").split(" ")[0];
const qaWrong = (list, a, n) => { const ok=list.filter(x=>x[1]!==a && fw(x[1])!==fw(a)); return (ok.length>=n?ok:list.filter(x=>x[1]!==a)); };
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
      if(matched===set.length) setTimeout(()=>finish(GAMES.match,earned,sticker,set.length),1300);
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
        if(found===set.length){ const earned = tries<=10?6:tries<=14?5:4; let st=false; for(let k=0;k<earned;k++) if(addStar()) st=true; setTimeout(()=>finish(GAMES.memory,earned,st,tries<=8?earned:99),1300); }
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
    const opts = shuffle([a, ...shuffle(qaWrong(U.qa,a,2)).slice(0,2).map(x=>x[1])]);
    stage.innerHTML = `<div class="question">💬 ${q}</div>${canSpeak?`<button class="speak" id="play">🔊</button>`:""}
      <div class="opts" style="flex-direction:column;align-items:center">${opts.map(o=>`<button class="opt long" data-o="${esc(o)}">${o}</button>`).join("")}</div><div class="feedback" id="fb"></div>`;
    if(canSpeak) stage.querySelector("#play").onclick=()=>say(q);
    let first=true;
    stage.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{ if(b.dataset.o===a){ b.classList.add("ok"); stage.querySelectorAll(".opt").forEach(x=>x.disabled=true); say(q+" "+a); praise(stage.querySelector("#fb")); done(first); } else { first=false; wrong(b,stage); } });
  });
};

GAMES.read = function(){
  const qs=[]; shuffle(U.readings).slice(0,2).forEach(r=>shuffle(r.qs).slice(0,2).forEach(q=>qs.push({r,q})));
  run("read", GAMES.read, qs, (stage,{r,q},done)=>{
    const [question, opts, ans, si] = q; const order = shuffle(opts.map((o,i)=>({o,i})));
    stage.innerHTML = `<div class="readbox"><div class="rtitle"><span class="rpic">${r.pic}</span><b>${esc(r.t)}</b>${canSpeak?`<button class="hint" id="rsay" style="margin-left:auto">🔊</button>`:""}</div>
      <p class="rtext">${r.text.map((x,k)=>`<span class="rs" data-s="${k}">${esc(x)}</span>`).join(" ")}</p>
      ${r.tr?`<button class="hint" id="rtr" style="font-size:14px">${S.trBtn}</button><div class="gloss" id="rtrt" style="display:none">${esc(tr(r.tr.t))}</div>`:""}</div>
      <div class="gapline" style="margin-top:10px">${esc(question)}</div>
      <div class="ropts">${order.map(({o,i})=>`<button class="ropt" data-i="${i}"><span class="rp">${o[1]}</span><span>${esc(o[0])}</span></button>`).join("")}</div>
      <button class="hint" id="where">${S.where}</button><div class="feedback" id="fb"></div>`;
    let first=true; const lit=()=>stage.querySelector(`.rs[data-s="${si}"]`).classList.add("lit");
    if(canSpeak) stage.querySelector("#rsay").onclick=()=>say(r.text.join(" "));
    if(r.tr) stage.querySelector("#rtr").onclick=()=>{ const t=stage.querySelector("#rtrt"); t.style.display=t.style.display==="none"?"block":"none"; };
    stage.querySelector("#where").onclick=()=>{ lit(); say(r.text[si]); };
    stage.querySelectorAll(".ropt").forEach(b=>b.onclick=()=>{ if(+b.dataset.i===ans){ b.classList.add("ok"); stage.querySelectorAll(".ropt").forEach(x=>x.disabled=true); lit(); say(opts[ans][0]); praise(stage.querySelector("#fb")); done(first); } else { first=false; wrong(b,stage); } });
  });
};

/* ---------- routing: #unit-id opens a unit directly (good for QR codes) ---------- */
function route(){
  const id = location.hash.slice(1);
  if(id==="album"){ U=null; album(); window.scrollTo(0,0); return; }
  if(id && window.UNITS[id] && G.units.includes(id)){ U = window.UNITS[id]; if(!U.topics[state.topics[U.id]]) state.topics[U.id] = Object.keys(U.topics)[0]; unitMenu(); }
  else home();
  window.scrollTo(0,0);
}
window.addEventListener("hashchange", route);
route();
})();
