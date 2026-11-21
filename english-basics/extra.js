/* English Fun – album, achievements and the music quiz.
   Loaded after the main script. Everything is stored only in this browser (localStorage). */
["ach","gold","played"].forEach(k=>{ if(!state[k]) state[k]={}; });
if(!state.days) state.days=[]; state.games=state.games||0; state.spellOk=state.spellOk||0;

const IMG = "../img/";
const PJN = {fresca:"Fresca",arandano:"Arándano",banana:"Banana",coco:"Coco",durian:"Durián",manzana:"Manzana",pera:"Pera",pina:"Piña"};
const ACH = [
  {id:"first",   ico:"🎮", rare:"hola",     pj:"pera",     n:"First game!",     sv:"Första spelet!",          d:"Finish a game",                 dsv:"Spela klart ett spel",            ok:()=>state.games>=1},
  {id:"perfect", ico:"💯", rare:"todobien", pj:"manzana",  n:"Perfect!",        sv:"Perfekt!",                d:"A game with no mistakes",       dsv:"Ett spel utan fel",               ok:()=>Object.keys(state.gold).length>=1},
  {id:"stars",   ico:"⭐", rare:"vamos",    pj:"banana",   n:"100 stars",       sv:"100 stjärnor",            d:"Collect 100 stars",             dsv:"Samla 100 stjärnor",              ok:()=>state.stars>=100},
  {id:"speller", ico:"🔤", rare:"planazo",  pj:"arandano", n:"Spelling star",   sv:"Stavningsstjärna",        d:"Spell 10 words right",          dsv:"Stava 10 ord rätt",               ok:()=>state.spellOk>=10},
  {id:"music",   ico:"🎧", rare:"quefuerte",pj:"coco",     n:"Music star",      sv:"Musikstjärna",            d:"Do the music quiz",             dsv:"Gör musiktestet",                 ok:()=>!!state.music},
  {id:"explorer",ico:"🌍", rare:"chao",     pj:"pina",     n:"Explorer",        sv:"Upptäckare",              d:"Play every topic",              dsv:"Spela alla teman",                ok:()=>Object.keys(TOPICS).every(t=>state.played[t])},
  {id:"fire",    ico:"🔥",                  pj:"durian",   n:"On fire",         sv:"Het som eld",             d:"Play on 5 different days",      dsv:"Spela 5 olika dagar",             ok:()=>state.days.length>=5},
  {id:"gold",    ico:"🥇",                  pj:"fresca",   n:"Golden album",    sv:"Guldalbum",               d:"Get every gold sticker",        dsv:"Få alla guldklistermärken",       ok:()=>Object.keys(TOPICS).every(t=>state.gold[t])}
];
const RARES = ACH.filter(a=>a.rare);
const TITLES = [[0,"Beginner","Nybörjare"],[50,"Explorer","Upptäckare"],[150,"Expert","Expert"],[300,"English Master","Engelskamästare"]];
function titleInfo(){ let t=TITLES[0], nx=null; TITLES.forEach((x,i)=>{ if(state.stars>=x[0]){ t=x; nx=TITLES[i+1]||null; } }); return {t: state.ach.gold?["👑 Legend","Legend"]:[t[1],t[2]], next:nx}; }
function checkAch(){ const fresh=[]; ACH.forEach(a=>{ if(!state.ach[a.id] && a.ok()){ state.ach[a.id]=new Date().toISOString().slice(0,10); fresh.push(a); } }); if(fresh.length) save(); return fresh; }
const topicIcon = k => TOPICS[k].name.split(" ")[0];
function goldBadge(k, on){ return `<span class="goldst ${on?"on":""}" style="width:72px;height:72px;font-size:34px">${on?topicIcon(k):"?"}</span>`; }

/* called by finish(): bookkeeping + banners */
function recordFinish(earned, total){
  const k = state.topic, perfect = total && earned>=total, newGold = perfect && !state.gold[k];
  if(perfect) state.gold[k]=true;
  state.games++; state.played[k]=true;
  const today=new Date().toISOString().slice(0,10); if(!state.days.includes(today)) state.days.push(today);
  save(); const fresh=checkAch();
  return `${newGold?`<div class="newsticker gold">New gold sticker! / Nytt guldklistermärke!<span>${goldBadge(k,true)}</span></div>`:""}
    ${fresh.map(achBanner).join("")}`;
}
const achBanner = a => `<div class="newsticker">New achievement! / Ny prestation! ${a.ico} <b>${a.n}</b><span>${a.rare?`<img src="${IMG}${a.rare}.webp" alt="" style="width:140px">`:""}<img src="${IMG}pj/${a.pj}_card.webp" alt="" style="width:110px;margin-left:8px"></span></div>`;

function albumSummaryEN(){
  const ti=titleInfo(), unlocked=Math.min(STICKERS.length, Math.floor(state.stars/STARS_PER_STICKER)), tk=Object.keys(TOPICS);
  return `<div class="panel albumsum"><div><p class="label">📒 My album <span class="sv">Mitt album</span></p><div class="ttl">${ti.t[0]}</div>
    <div class="counts"><span>⭐ ${unlocked}/${STICKERS.length}</span><span>✨ ${RARES.filter(a=>state.ach[a.id]).length}/${RARES.length}</span><span>🥇 ${tk.filter(k=>state.gold[k]).length}/${tk.length}</span><span>👑 ${ACH.filter(a=>state.ach[a.id]).length}/8</span></div></div>
    <button class="next" id="toAlbum">Open my album 📒</button></div>`;
}
function album(){
  checkAch();
  const ti=titleInfo(), unlocked=Math.min(STICKERS.length, Math.floor(state.stars/STARS_PER_STICKER));
  app.innerHTML = `
  <div class="topbar"><button class="back" id="back">← Menu</button><div style="flex:1"></div><div class="stars">⭐ <span id="starCount">${state.stars}</span></div></div>
  <header><h1 class="outline"><span class="w3">My album</span><span class="sv">Mitt album</span></h1></header>
  <div class="panel titlebox"><img class="fresca" src="${IMG}pj/pera.webp" alt=""><div><span class="sv">Your title · Din titel</span><div class="ttl">${ti.t[0]}</div>
    <span class="sv">${ti.next?`Next title at ${ti.next[0]} ⭐ → ${ti.next[1]}`:"Top title! · Högsta titeln!"}</span></div></div>
  <div class="panel"><p class="label">🏅 Achievements <span class="sv">Prestationer</span></p><div class="achs">${ACH.map(a=>`<div class="achv ${state.ach[a.id]?"on":""}"><span class="ai">${a.ico}</span><b>${a.n}</b><span>${a.d}<br>${a.dsv}</span>${a.rare?"<i>✨</i>":""}</div>`).join("")}</div></div>
  <div class="panel"><p class="label">✨ Rare stickers <span class="sv">Sällsynta klistermärken</span></p><div class="rares">${RARES.map(a=>`<div class="rarest ${state.ach[a.id]?"on":""}"><img src="${IMG}${a.rare}.webp" alt=""><span>${state.ach[a.id]?"":a.ico+" "+a.n}</span></div>`).join("")}</div></div>
  <div class="panel"><p class="label">🥇 Gold stickers <span class="sv">Guldklistermärken</span></p><p class="note" style="margin-top:0">Play a perfect game (no mistakes) in a topic. · Spela en perfekt omgång (inga fel) i ett tema.</p>
    <div class="golds">${Object.keys(TOPICS).map(k=>`<div class="goldcell">${goldBadge(k,state.gold[k])}<span>${TOPICS[k].name.replace(/^\S+\s/,"")}</span></div>`).join("")}</div></div>
  <div class="panel"><p class="label">👑 Legendary <span class="sv">Legendariska</span></p><div class="legends">${ACH.map(a=>{const on=!!state.ach[a.id];
    return `<div class="legst ${on?"on":""}"><img src="${IMG}pj/${a.pj}_card.webp" alt=""><b>${on?PJN[a.pj]:"???"}</b><span>${a.ico} ${a.n}</span></div>`;}).join("")}</div></div>
  <div class="panel"><p class="label">⭐ Stickers <span class="sv">${STARS_PER_STICKER - state.stars % STARS_PER_STICKER} ⭐ to the next one / till nästa</span></p>
    <div class="shelf">${STICKERS.map((s,i)=>`<span class="${i<unlocked?'':'locked'}">${s}</span>`).join("")}</div></div>
  <footer>Complete your album and show it to your teacher 😉 · Fyll albumet och visa det för din lärare</footer>`;
  document.getElementById("back").onclick = menu; window.scrollTo(0,0);
}

/* ---------------- MUSIC QUIZ (magazine style) ---------------- */
// types: pop, rock, chill, dance, soul, kpop
const MTYPES = {
  pop:  {icon:"💖", name:"Pop Star",      sv:"Popstjärna",   col:"var(--pink)",   pj:"fresca",
         en:"You love catchy songs you can sing along to. Music makes you happy and full of energy!", svd:"Du älskar låtar som fastnar och som man kan sjunga med i. Musik gör dig glad!",
         match:["Taylor Swift","Sabrina Carpenter","Zara Larsson"]},
  rock: {icon:"🎸", name:"Rock Rebel",    sv:"Rockrebell",   col:"var(--red)",    pj:"durian",
         en:"You like loud guitars and big drums. Music makes you feel strong and free!", svd:"Du gillar höga gitarrer och stora trummor. Musik gör dig stark och fri!",
         match:["Måneskin","Imagine Dragons","Green Day"]},
  chill:{icon:"🌙", name:"Chill Dreamer", sv:"Lugn drömmare",col:"var(--cyan)",   pj:"arandano",
         en:"You like soft, calm music with headphones on. Music helps you relax and think.", svd:"Du gillar lugn musik i hörlurarna. Musik hjälper dig att slappna av och tänka.",
         match:["Billie Eilish","Laufey","Ed Sheeran"]},
  dance:{icon:"⚡", name:"Dance Machine", sv:"Dansmaskin",   col:"var(--lime)",   pj:"banana",
         en:"You can't stand still! You love a strong beat and a big party.", svd:"Du kan inte stå still! Du älskar ett starkt beat och stor fest.",
         match:["Avicii","Dua Lipa","David Guetta"]},
  soul: {icon:"🎤", name:"Soul Singer",   sv:"Soulsångare",  col:"var(--orange)", pj:"coco",
         en:"You love great voices and songs with feelings. Music touches your heart.", svd:"Du älskar fina röster och låtar med känsla. Musik berör ditt hjärta.",
         match:["Bruno Mars","Beyoncé","Alicia Keys"]},
  kpop: {icon:"✨", name:"K-pop Fan",     sv:"K-popfan",     col:"var(--purple)", pj:"pina",
         en:"You love cool dance moves, colourful videos and big fan energy!", svd:"Du älskar coola danssteg, färgglada videor och stor fan-energi!",
         match:["BTS","BLACKPINK","Stray Kids"]}
};
const MQ = [
  {q:"When do you listen to music?", sv:"När lyssnar du på musik?", o:[
    ["In the morning","På morgonen","pop"],["On the bus","På bussen","chill"],["When I do sport","När jag tränar","rock"],
    ["At a party","På fest","dance"],["In my room","I mitt rum","soul"],["All the time!","Hela tiden!","kpop"]]},
  {q:"Pick a colour.", sv:"Välj en färg.", o:[["Pink 💗","Rosa","pop"],["Black 🖤","Svart","rock"],["Blue 💙","Blå","chill"],["Yellow 💛","Gul","dance"],["Orange 🧡","Orange","soul"],["Purple 💜","Lila","kpop"]]},
  {q:"Your perfect Saturday is…", sv:"Din perfekta lördag är…", o:[
    ["Singing in my room","Sjunga i mitt rum","pop"],["A big concert","En stor konsert","rock"],["A walk with headphones","En promenad med hörlurar","chill"],
    ["Dancing with friends","Dansa med kompisar","dance"],["Karaoke!","Karaoke!","soul"],["Watching music videos","Titta på musikvideor","kpop"]]},
  {q:"Pick an instrument.", sv:"Välj ett instrument.", o:[["Microphone 🎤","Mikrofon","pop"],["Electric guitar 🎸","Elgitarr","rock"],["Piano 🎹","Piano","chill"],["Computer / DJ 🎛️","Dator / DJ","dance"],["Saxophone 🎷","Saxofon","soul"],["Drums 🥁","Trummor","kpop"]]},
  {q:"Music makes me feel…", sv:"Musik får mig att känna mig…", o:[["happy 😊","glad","pop"],["strong 💪","stark","rock"],["calm 😌","lugn","chill"],["free 🕊️","fri","dance"],["loved 🥰","älskad","soul"],["excited 🤩","peppad","kpop"]]},
  {q:"Pick an emoji.", sv:"Välj en emoji.", o:[["💖","","pop"],["🔥","","rock"],["🌙","","chill"],["⚡","","dance"],["🌹","","soul"],["✨","","kpop"]]},
  {q:"The best place for music is…", sv:"Bästa stället för musik är…", o:[["in the car","i bilen","pop"],["in a stadium","på en arena","rock"],["in bed","i sängen","chill"],["on the dance floor","på dansgolvet","dance"],["in the shower","i duschen","soul"],["on my phone","i mobilen","kpop"]]},
  {q:"Choose a word.", sv:"Välj ett ord.", o:[["Love","Kärlek","pop"],["Power","Kraft","rock"],["Dream","Dröm","chill"],["Party","Fest","dance"],["Heart","Hjärta","soul"],["Friends","Vänner","kpop"]]}
];
function musicQuiz(){
  let i=0; const score={pop:0,rock:0,chill:0,dance:0,soul:0,kpop:0}, picks=[];
  const step = () => {
    if(i>=MQ.length) return musicResult(score, picks);
    const Q=MQ[i];
    app.innerHTML = `
    <div class="topbar"><button class="back" id="back">← Menu</button><div class="bar"><i style="width:${Math.round(i/MQ.length*100)}%"></i></div><div class="stars">🎧 ${i+1}/${MQ.length}</div></div>
    <div class="task outline">Music quiz<span class="sv">Musiktest – bara för skojs skull! Inga rätt eller fel.</span></div>
    <div class="stage"><div class="question">${Q.q} ${canSpeak?`<button class="speak" id="rd">🔊</button>`:""}</div><div class="gloss">${Q.sv}</div>
      <div class="opts" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr))">${shuffle(Q.o).map(([en,sv,t])=>`<button class="opt" data-t="${t}" data-w="${en}">${en}${sv?`<span class="sv" style="font-size:14px">${sv}</span>`:""}</button>`).join("")}</div></div>`;
    document.getElementById("back").onclick = menu;
    if(canSpeak){ document.getElementById("rd").onclick=()=>say(Q.q); }
    app.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{ score[b.dataset.t]++; picks.push(b.dataset.w); b.classList.add("ok"); say(b.dataset.w.replace(/[^\w\s'/-]/g,"")); i++; setTimeout(step,450); });
  };
  step();
}
function musicResult(score, picks){
  const max=Math.max(...Object.values(score)), top=Object.keys(score).filter(k=>score[k]===max), t=rnd(top), M=MTYPES[t];
  const feel = picks[4] ? picks[4].replace(/[^\w\s]/g,"").trim() : "";
  state.music = Object.assign({}, state.music||{}, {type:t, date:new Date().toISOString().slice(0,10)}); save();
  const fresh = checkAch(); const mtick = tickMission("music");
  confetti(); say(`You are a ${M.name}!`);
  app.innerHTML = `
  <div class="topbar"><button class="back" id="back">← Menu</button><div style="flex:1"></div></div>
  <div class="stage end" style="background:${M.col}">
    <div style="font-weight:900;font-size:20px">Your music type is… <span class="sv">Din musiktyp är…</span></div>
    <img src="${IMG}pj/${M.pj}_card.webp" alt="" style="width:170px;margin:8px 0">
    <h2 class="outline" style="color:#fff">${M.icon} ${M.name}</h2>
    <div class="panel" style="max-width:560px;margin:10px auto;text-align:left">
      <p style="font-weight:900;font-size:19px;margin:0 0 4px">${M.en}</p><p class="sv" style="margin:0;font-size:15px">${M.svd}</p>
      ${feel?`<p style="font-weight:900;margin:10px 0 0">Music makes you feel <span style="color:var(--pink)">${feel}</span>.</p>`:""}
    </div>
    <div class="panel" style="max-width:560px;margin:10px auto"><p class="label">🎧 Your music match <span class="sv">Dina musikmatchningar</span></p>
      <div class="opts">${M.match.map(a=>`<span class="opt" style="cursor:default">${a}</span>`).join("")}</div>
      <p class="note">Not your style? That's OK – all music taste is cool! 😎<br>Inte din stil? Helt okej – all musiksmak är cool!</p></div>
    ${mtick}
    ${secretBox()}
    ${fresh.map(achBanner).join("")}
    <p class="note">🔒 Only on this computer. You decide if you show it to someone. · Bara på den här datorn. Du bestämmer om du visar det för någon.</p>
    <div class="opts"><button class="next" id="again">🔁 Again / Igen</button><button class="next" id="tomenu" style="background:var(--lime)">🏠 Meny</button></div>
  </div>`;
  document.getElementById("back").onclick = menu; document.getElementById("tomenu").onclick = menu; document.getElementById("again").onclick = musicQuiz;
  wireSecret(); window.scrollTo(0,0);
}

/* ---------------- MY SECRET FAVOURITE ---------------- */
// Stored only in this browser. Never shown anywhere unless she opens it herself.
const esc2 = x => String(x||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");
function secretBox(){
  const sec = (state.music && state.music.secret) || null;
  return `<div class="panel secret" style="max-width:560px;margin:12px auto;text-align:left;background:#1b1b1b;color:#fff">
    <p class="label" style="color:#fff;margin-bottom:6px">🔒 My secret favourite <span class="sv" style="color:#ccc">Min hemliga favorit</span></p>
    <p style="margin:0 0 10px;font-weight:700;font-size:15px;color:#ddd">Your favourite band or singer. Only you can see it – it stays on this computer.<br><span style="color:#aaa">Ditt favoritband eller din favoritartist. Bara du kan se det – det stannar på den här datorn.</span></p>
    <div id="secView" style="${sec?"":"display:none"}">
      <button class="next" id="secShow" style="background:var(--pink);color:#fff">👀 Show / Visa</button>
      <div id="secText" style="display:none;margin-top:10px">
        <div class="ttl" id="secName" style="color:var(--lime)">${esc2(sec&&sec.name)}</div>
        <div id="secWhy" style="font-weight:800;margin-top:4px">${sec&&sec.why?"♥ "+esc2(sec.why):""}</div>
        <button class="hint" id="secEdit" style="margin-top:10px">✏️ Change / Ändra</button>
      </div>
    </div>
    <div id="secForm" style="${sec?"display:none":""}">
      <input id="secIn" maxlength="60" placeholder="My favourite is…" value="${esc2(sec&&sec.name)}" autocomplete="off"
        style="width:100%;font-family:inherit;font-size:22px;font-weight:900;border:3px solid #fff;border-radius:14px;padding:10px 12px;background:#fff;color:#141414">
      <p style="margin:10px 0 4px;font-weight:800;font-size:15px">I like it because… <span style="color:#aaa">(optional / frivilligt)</span></p>
      <div class="opts" id="secWhyOpts" style="justify-content:flex-start;margin-top:4px">${["it makes me happy","it makes me calm","the voice","the beat","the words","it makes me strong"].map(w=>`<button class="opt" data-w="${w}" style="font-size:16px;min-width:0;padding:8px 12px;background:#fff">${w}</button>`).join("")}</div>
      <button class="next" id="secSave" style="background:var(--lime);margin-top:12px">🔒 Save secretly / Spara hemligt</button>
    </div>
  </div>`;
}
function wireSecret(){
  const $ = id => document.getElementById(id); if(!$("secSave")) return;
  let why = (state.music && state.music.secret && state.music.secret.why) || "";
  document.querySelectorAll("#secWhyOpts .opt").forEach(b=>{ if(b.dataset.w===why) b.classList.add("ok");
    b.onclick=()=>{ why = why===b.dataset.w ? "" : b.dataset.w; document.querySelectorAll("#secWhyOpts .opt").forEach(x=>x.classList.toggle("ok", x.dataset.w===why)); }; });
  $("secSave").onclick = ()=>{
    const name = $("secIn").value.trim(); if(!name){ $("secIn").focus(); return; }
    state.music = Object.assign({}, state.music||{}, {secret:{name, why}}); save();
    $("secName").textContent = name; $("secWhy").textContent = why ? "♥ "+why : "";
    $("secForm").style.display="none"; $("secView").style.display=""; $("secText").style.display="none";
    say("Saved! It's your secret."); 
  };
  $("secShow").onclick = ()=>{ const t=$("secText"); const open = t.style.display==="none"; t.style.display = open?"":"none"; $("secShow").textContent = open ? "🙈 Hide / Dölj" : "👀 Show / Visa"; };
  $("secEdit").onclick = ()=>{ $("secForm").style.display=""; $("secView").style.display="none"; $("secIn").focus(); };
}
function secretPage(){
  app.innerHTML = `<div class="topbar"><button class="back" id="back">← Menu</button></div>
    <header><h1 class="outline"><span class="w1">🔒 Secret</span></h1></header>${secretBox()}`;
  document.getElementById("back").onclick = menu; wireSecret();
}

/* ================= CHECK-IN · MISSION OF THE DAY · MY DAY =================
   Everything stays in this browser. One entry per day in state.log[YYYY-MM-DD]. */
if(!state.log) state.log = {};
const today = () => new Date().toISOString().slice(0,10);
const FEELS = [
  {id:"happy",   e:"😊", en:"happy",   sv:"glad"},
  {id:"calm",    e:"😌", en:"calm",    sv:"lugn"},
  {id:"tired",   e:"😴", en:"tired",   sv:"trött"},
  {id:"nervous", e:"😬", en:"nervous", sv:"nervös"},
  {id:"sad",     e:"😢", en:"sad",     sv:"ledsen"},
  {id:"angry",   e:"😠", en:"angry",   sv:"arg"}
];
const feel = id => FEELS.find(f=>f.id===id) || {e:"·",en:"",sv:""};
const GNAME = {match:["Match it","🧩"],choose:["What is it?","🤔"],listen:["Listen and click","👂"],spell:["Spell the word","🔤"],
  memory:["Memory","🃏"],sentence:["Make a sentence","🧱"],gap:["Fill the gap","✍️"],read:["Read and answer","📖"],music:["Music quiz","🎧"],any:["A game you choose","⭐"]};
const EASY=["match","memory","choose","listen"], HARD=["spell","sentence","gap","read"];
function makeMissions(plan, avoidTopic){
  const e=shuffle(EASY), games = plan==="calm" ? [e[0],e[1]] : [e[0],e[1],rnd(HARD),e[2]];
  const pool = Object.keys(TOPICS).filter(t=>!state.focus || TOPICS[t].pack===state.focus);
  let tps = shuffle(pool.length>3 ? pool.filter(t=>t!==avoidTopic) : pool); if(!tps.length) tps=shuffle(pool.length?pool:Object.keys(TOPICS));
  const NOTOPIC=["sentence","gap","read"]; let k=0;
  return games.map(g=>({g, t: NOTOPIC.includes(g) && !TOPICS[tps[k % tps.length]].sentences ? null : tps[(k++) % tps.length], done:false}));
}
const tname = k => k && TOPICS[k] ? TOPICS[k].name : "";
function nextMission(){ const d=day(); return d ? d.missions.find(m=>!m.done) : null; }
function startMission(m){ if(!m) return; if(m.t) { state.topic=m.t; save(); } GAMES[m.g](); }
const day = () => state.log[today()];

function checkin(){
  app.innerHTML = `
  <header><h1 class="outline"><span class="w3">Hi!</span> <span class="w1">Hej!</span></h1></header>
  <div class="fresca-row"><img class="fresca" src="${IMG}pj/pera.webp" alt="Pera"><div class="bubble">How do you feel today?<span class="sv">Hur känner du dig idag?</span></div></div>
  <div class="panel"><div class="feels">${FEELS.map(f=>`<button class="feel" data-f="${f.id}"><span class="fe">${f.e}</span><b>${f.en}</b><span class="sv">${f.sv}</span></button>`).join("")}</div></div>`;
  app.querySelectorAll(".feel").forEach(b=>b.onclick=()=>{ say("I feel "+feel(b.dataset.f).en); choosePlan(b.dataset.f); });
}
function choosePlan(f){
  const hard = ["tired","sad","angry","nervous"].includes(f);
  app.innerHTML = `
  <header><h1 class="outline"><span class="fe2">${feel(f).e}</span> <span class="w3">I feel ${feel(f).en}</span><span class="sv">Jag känner mig ${feel(f).sv}</span></h1></header>
  <div class="fresca-row"><img class="fresca" src="${IMG}pj/pera.webp" alt="Pera"><div class="bubble">${hard
     ? `That's OK. 💛 You can choose the calm plan today. Music first? 🎧<span class="sv">Det är okej. Du kan välja den lugna planen idag. Musik först?</span>`
     : `Great! Choose your plan for today.<span class="sv">Toppen! Välj din plan för idag.</span>`}</div></div>
  <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(240px,1fr))">
    <button class="act plan" data-p="calm" style="background:var(--cyan);${hard?"outline:5px solid var(--pink);outline-offset:3px":""}"><span class="ico">🌙</span><span>Calm plan<span class="sv">Lugn plan · 2 uppdrag</span></span></button>
    <button class="act plan" data-p="power" style="background:var(--lime)"><span class="ico">⚡</span><span>Power plan<span class="sv">Kraftplan · 4 uppdrag</span></span></button>
  </div>`;
  app.querySelectorAll(".plan").forEach(b=>b.onclick=()=>{
    state.log[today()] = {feel:f, plan:b.dataset.p, missions:makeMissions(b.dataset.p, state.topic), focus:state.focus||null, stars0:state.stars, games:0, done:false, blocks:0};
    save(); menu();
  });
}
function missionPanel(){
  const d=day(); if(!d) return "";
  const n=d.missions.filter(m=>m.done).length, all=d.missions.length;
  return `<div class="panel mission ${d.done?"complete":""}">
    <p class="label">🎯 Mission of the day <span class="sv">Dagens uppdrag · ${n}/${all}</span>
      <span style="float:right">${feel(d.feel).e} ${d.plan==="calm"?"🌙":"⚡"}</span></p>
    ${d.blocks?`<p class="note" style="margin:0 0 6px">🔁 Block ${d.blocks+1} · ✔ ${d.blocks} done</p>`:""}
    <div class="mlist">${d.missions.map((m,i)=>`<button class="mi ${m.done?"ok":""}" data-m="${i}" ${m.done?"disabled":""}><span class="box">${m.done?"✔":""}</span>${GNAME[m.g][1]} ${GNAME[m.g][0]}${m.t?` <span class="mt">· ${tname(m.t)}</span>`:""}</button>`).join("")}</div>
    <div class="opts" style="justify-content:flex-start;margin-top:10px">
      ${nextMission()?`<button class="next" id="goMission" style="background:var(--pink);color:#fff">▶ Start mission / Starta</button>`:""}
      ${d.done?`<button class="next" id="newBlock" style="background:var(--cyan)">🔁 New block / Nytt block</button>`:""}
      <button class="next" id="toDay" style="background:#fff">📒 My day / Min dag</button></div>
  </div>`;
}
// called when a game (or the music quiz) is finished
function tickMission(gid){
  const d=day(); if(!d) return ""; d.games=(d.games||0)+1;
  const m = d.missions.find(x=>!x.done && x.g===gid && (!x.t || x.t===state.topic)) || d.missions.find(x=>!x.done && x.g==="any");
  if(m) m.done=true;
  let html="";
  if(!d.done && d.missions.every(x=>x.done)){ d.done=true; addStar(5); html=`<div class="newsticker" style="background:var(--pink);color:#fff">🎯 Mission complete! / Uppdraget klart! +5 ⭐<span style="font-size:20px">Show your teacher! · Visa din lärare! 🙋</span></div>`; d.blocks=(d.blocks||0)+1; }
  else if(m) html=`<div class="newsticker">🎯 ${d.missions.filter(x=>x.done).length}/${d.missions.length} ✔ ${GNAME[m.g][0]}</div>`;
  save(); return html;
}
function breakTime(){
  let left=5*60;
  app.innerHTML = `<div class="stage end" style="background:var(--cyan)">
    <div style="font-size:90px">☕</div><h2 class="outline" style="color:#fff">Break time!</h2><div style="font-weight:900;font-size:20px">Paus! Rör på dig, drick vatten 💧</div>
    <div class="ttl" id="brk" style="font-size:64px;margin:12px 0">5:00</div>
    <div class="opts"><button class="next" id="brkDone" style="background:var(--lime)">🔁 I'm ready! New block / Jag är redo!</button><button class="next" id="brkMenu" style="background:#fff">🏠 Meny</button></div></div>`;
  const t=setInterval(()=>{ left--; const el=document.getElementById("brk"); if(!el){ clearInterval(t); return; } el.textContent=`${Math.floor(Math.max(0,left)/60)}:${String(Math.max(0,left)%60).padStart(2,"0")}`; if(left<=0){ clearInterval(t); say("Break is over! Let's play!"); } },1000);
  document.getElementById("brkDone").onclick=()=>{ clearInterval(t); newBlock(); };
  document.getElementById("brkMenu").onclick=()=>{ clearInterval(t); menu(); };
}
function newBlock(){ const d=day(); if(!d) return checkin(); d.missions=makeMissions(d.plan, state.topic); d.done=false; save(); menu(); }

/* videos from «Watch & think» (same computer) */
function watchLog(){ try{ return JSON.parse(localStorage.getItem("aJugar-watch")||"null")||{log:{}}; }catch(e){ return {log:{}}; } }
function watchVideo(id){ try{ const v=VIDEOS.find(x=>x.id===id); if(!v) return null; const d=(typeof DEFAULT_Q!=="undefined"&&(DEFAULT_Q[v.cat]||DEFAULT_Q.fun))||{}; return Object.assign({},v,{pre:v.pre||d.pre,think:v.think||d.think}); }catch(e){ return null; } }
const escW=s=>String(s||"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function videosOn(date){ const W=watchLog(); return Object.entries(W.log||{}).filter(([id,l])=>l.d===date).map(([id,l])=>({v:watchVideo(id),l})).filter(x=>x.v); }
function favOf(l){ const a=l.ans||[]; if(Number.isInteger(l.fav)&&a[l.fav]) return l.fav; const i=a.findIndex(x=>x); return i<0?null:i; }
function logbookBox(v,l){
  const f=favOf(l), q=(v.think||[]);
  const third = f!==null ? `${q[f]?q[f][0]:""}<br>→ <b>${escW(l.ans[f])}</b>`
    : `<i>Choose one question above and write your answer.<span class="sv">Välj en fråga ovan och skriv ditt svar.</span></i>`;
  return `<div style="margin-top:10px;background:#fff8d6;border:3px dashed var(--ink);border-radius:12px;padding:8px 12px">
    <p class="label" style="margin:0 0 6px">✏️ For your Logbook <span class="sv">Skriv i din loggbok</span></p>
    <div class="row2" style="font-size:17px"><span>1️⃣ Date + video</span><b>${l.d} · ${escW(v.t)}</b></div>
    <div class="row2" style="font-size:17px"><span>2️⃣ New word</span><b>${l.word?escW(l.word):"<i>one word you heard / ett ord du hörde</i>"}</b></div>
    <div class="row2" style="font-size:17px;border:none"><span>3️⃣ One answer</span><span style="text-align:right">${third}</span></div>
    ${f!==null&&(l.ans||[]).filter(x=>x).length>1?`<p class="note" style="margin:4px 0 0">⭐ Tap another answer to choose it. / Tryck på ett annat svar för att välja.</p>`:""}
  </div>`;
}
function videosPanel(date){
  const vs=videosOn(date);
  return `<div class="panel"><p class="label">🎬 Videos I watched <span class="sv">Videor jag tittade på · ${vs.length}</span></p>
    ${vs.length?vs.map(({v,l})=>`<div class="q" style="background:#fff;border:3px solid var(--ink);border-radius:14px;padding:10px 12px;margin:8px 0">
      <b style="font-size:18px">${escW(v.t)}</b> <span class="sv" style="display:inline;font-size:14px">${escW(v.ch)} · ${["","😐","🙂","🤩"][l.stars||0]}${l.word?" · 📝 "+escW(l.word):""}</span>
      ${l.guess?`<div class="row2"><span>🤔 ${v.pre?v.pre[0]:"My guess"}</span><b>${escW(l.guess)}</b></div>`:""}
      ${(v.think||[]).map((q,i)=>{ const has=l.ans&&l.ans[i]; return `<div class="row2 ${has?"favq":""}" ${has?`data-fav="${v.id}|${i}" style="cursor:pointer"`:""}><span>${i+1}. ${q[0]}</span><b>${has?escW(l.ans[i])+(favOf(l)===i?" ⭐":""):(l.told&&l.told[i]?"💬 told my teacher":"—")}</b></div>`; }).join("")}
      ${logbookBox(v,l)}
      ${l.chk?`<div class="note" style="color:var(--green);font-weight:900">✔ Checked by teacher · ${l.chk}</div>`:""}</div>`).join("")
      :`<p class="note">No videos yet today. / Inga videor än idag.</p>`}
    <div class="opts" style="justify-content:flex-start"><a class="next" href="../watch/" style="background:var(--pink);color:#fff;text-decoration:none">🎬 Watch & think</a></div></div>`;
}
if(!window._favWired){ window._favWired=true; document.addEventListener("click",e=>{ const r=e.target.closest("[data-fav]"); if(!r) return;
  const [id,i]=r.dataset.fav.split("|"); const W=watchLog(); if(!W.log||!W.log[id]) return; W.log[id].fav=+i; try{ localStorage.setItem("aJugar-watch",JSON.stringify(W)); }catch(err){}
  const vd=document.getElementById("vday"); if(vd&&vd.contains(r)){ const d=W.log[id].d; vd.innerHTML=`<p class="label" style="margin:8px 4px">📅 ${d}</p>`+videosPanel(d); } else myDay(); }); }
function myDay(){
  const d=day(); if(!d) return checkin();
  const earned = state.stars-(d.stars0||0);
  app.innerHTML = `
  <div class="topbar"><button class="back" id="back">← Menu</button><div style="flex:1"></div><div class="stars">⭐ <span id="starCount">${state.stars}</span></div></div>
  <header><h1 class="outline"><span class="w3">My day</span> <span class="w1">${new Date().toLocaleDateString("sv-SE",{weekday:"long",day:"numeric",month:"long"})}</span><span class="sv">Min dag – skriv det i din loggbok!</span></h1></header>
  <div class="panel myday">
    <div class="row2"><b>This morning I felt</b><span>${feel(d.feel).e} ${feel(d.feel).en} <span class="sv">(${feel(d.feel).sv})</span></span></div>
    <div class="row2"><b>My plan</b><span>${d.plan==="calm"?"🌙 Calm plan":"⚡ Power plan"}</span></div>
    <div class="row2"><b>Games I played</b><span>🎮 ${d.games||0}</span></div>
    <div class="row2"><b>Stars I won today</b><span>⭐ ${earned}</span></div>
    <div class="row2"><b>Mission blocks done</b><span>🎯 ${d.blocks||0}${d.done?"":` · now ${d.missions.filter(m=>m.done).length}/${d.missions.length}`}</span></div>
    ${d.feelEnd?`<div class="row2"><b>Now I feel</b><span>${feel(d.feelEnd).e} ${feel(d.feelEnd).en} <span class="sv">(${feel(d.feelEnd).sv})</span></span></div>`:""}
  </div>
  ${videosPanel(today())}
  <div class="panel"><p class="label">How do you feel now? <span class="sv">Hur känner du dig nu?</span></p>
    <div class="feels">${FEELS.map(f=>`<button class="feel ${d.feelEnd===f.id?"on":""}" data-f="${f.id}"><span class="fe">${f.e}</span><b>${f.en}</b></button>`).join("")}</div></div>
  <div class="opts"><button class="next" id="days" style="background:#fff">🗓️ My days / Mina dagar</button></div>`;
  document.getElementById("back").onclick = menu;
  document.getElementById("days").onclick = myDays;
  app.querySelectorAll(".feel").forEach(b=>b.onclick=()=>{ d.feelEnd=b.dataset.f; save(); say("Now I feel "+feel(b.dataset.f).en); myDay(); });
  window.scrollTo(0,0);
}
function myDays(){
  const W=watchLog(), vd={}; Object.values(W.log||{}).forEach(l=>{ vd[l.d]=(vd[l.d]||0)+1; });
  const keys=[...new Set([...Object.keys(state.log),...Object.keys(vd)])].sort().reverse();
  app.innerHTML = `
  <div class="topbar"><button class="back" id="back">← My day</button></div>
  <header><h1 class="outline"><span class="w3">My days</span><span class="sv">Mina dagar · bara på den här datorn</span></h1></header>
  <div class="panel">${keys.map(k=>{ const d=state.log[k]; return `<div class="row2"><b>${k}</b><span>${d?`${feel(d.feel).e}${d.feelEnd?" → "+feel(d.feelEnd).e:""} · ${d.plan==="calm"?"🌙":"⚡"} · 🎮 ${d.games||0} · 🎯 ${d.blocks||0}`:""}${vd[k]?` · <button class="next" data-vd="${k}" style="background:var(--pink);color:#fff;font-size:15px;padding:2px 10px">🎬 ${vd[k]}</button>`:""}</span></div>`; }).join("")}</div>
  <div id="vday"></div>`;
  document.getElementById("back").onclick = myDay;
  app.querySelectorAll("[data-vd]").forEach(b=>b.onclick=()=>{ document.getElementById("vday").innerHTML=`<p class="label" style="margin:8px 4px">📅 ${b.dataset.vd}</p>`+videosPanel(b.dataset.vd); document.getElementById("vday").scrollIntoView({behavior:"smooth"}); });
}

if(state.focus){ const ft=Object.keys(TOPICS).filter(t=>TOPICS[t].pack===state.focus); if(!ft.length) state.focus=null; else if(!ft.includes(state.topic)) state.topic=ft[0]; }
{ const d=state.log[today()]; if(d && (d.focus||null)!==(state.focus||null) && !d.missions.some(m=>m.done)){ d.missions=makeMissions(d.plan,null); d.focus=state.focus||null; } }
save();
if(!state.log[today()]) checkin(); else menu();
