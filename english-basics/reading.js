/* 📖 Read and answer: 3-sentence texts, picture answers, "show me where" hint.
   Each question knows which sentence (s) holds its answer. pack: matches a topic pack (focus mode). */
const READS = [
  {t:"Max the dog", pic:"🐶", text:["Max is a big brown dog.","He lives on a farm with two cats.","Every morning he runs to the river."], qs:[
    ["What colour is Max?",[["brown","🟫"],["white","⬜"],["black","⬛"]],0,0],
    ["Who lives with Max?",[["two cats","🐱🐱"],["a horse","🐴"],["a bird","🐦"]],0,1],
    ["Where does Max run?",[["to the river","🏞️"],["to school","🏫"],["to the shop","🏪"]],0,2]]},
  {t:"Lunch time", pic:"🍝", text:["Mia is very hungry.","She eats pasta and an apple.","She drinks a glass of milk."], qs:[
    ["How does Mia feel?",[["hungry","🤤"],["tired","😴"],["sad","😢"]],0,0],
    ["Which fruit does she eat?",[["an apple","🍎"],["a banana","🍌"],["grapes","🍇"]],0,1],
    ["What does she drink?",[["milk","🥛"],["juice","🧃"],["water","💧"]],0,2]]},
  {t:"A new pencil", pic:"✏️", text:["Leo goes to school by bus.","In his bag he has a book and a new pencil.","His favourite lesson is art."], qs:[
    ["How does Leo go to school?",[["by bus","🚌"],["by bike","🚲"],["by car","🚗"]],0,0],
    ["What is new?",[["a pencil","✏️"],["a book","📖"],["a bag","🎒"]],0,1],
    ["What is his favourite lesson?",[["art","🎨"],["maths","🔢"],["music","🎵"]],0,2]]},
  {t:"Fast and slow", pic:"🐆🦥", text:["The cheetah is the fastest animal on land.","The sloth is very slow and lives in the trees.","They live on different continents, so they never meet."], qs:[
    ["Which animal is fast?",[["the cheetah","🐆"],["the sloth","🦥"],["the cow","🐮"]],0,0],
    ["Where does the sloth live?",[["in the trees","🌳"],["in the water","🌊"],["in the desert","🏜️"]],0,1],
    ["Do they meet?",[["no, never","🚫"],["yes, every day","✅"],["sometimes","🤷"]],0,2]]},
  {t:"A rainy day", pic:"🌧️", text:["It is raining today.","Ella takes her jacket and her boots.","She stays at home and reads a book."], qs:[
    ["What is the weather like?",[["rain","🌧️"],["sun","☀️"],["snow","❄️"]],0,0],
    ["What does Ella take?",[["her jacket and boots","🧥🥾"],["her cap","🧢"],["her glasses","👓"]],0,1],
    ["What does she do?",[["she reads a book","📖"],["she plays football","⚽"],["she swims","🏊"]],0,2]]},
  {t:"After the run", pic:"🏃", text:["Noah runs for twenty minutes.","After that, his legs are very tired.","He drinks some water and rests."], qs:[
    ["How long does Noah run?",[["twenty minutes","⏱️"],["two hours","🕑"],["one minute","1️⃣"]],0,0],
    ["What is tired?",[["his legs","🦵"],["his eyes","👁️"],["his hands","✋"]],0,1],
    ["What does he drink?",[["water","💧"],["milk","🥛"],["juice","🧃"]],0,2]]},
  {t:"At the café", pic:"☕", pack:"restaurant", text:["Anna works in a small café.","She makes coffee and cuts the cake with a knife.","At five o'clock she cleans the tables."], qs:[
    ["Where does Anna work?",[["in a café","☕"],["in a school","🏫"],["in a shop","🏪"]],0,0],
    ["What does she cut the cake with?",[["a knife","🔪"],["a spoon","🥄"],["a fork","🍴"]],0,1],
    ["When does she clean the tables?",[["at five o'clock","🕔"],["at nine o'clock","🕘"],["at twelve o'clock","🕛"]],0,2]]},
  {t:"The order", pic:"📋", pack:"restaurant", text:["A man sits down at table four.","He orders a burger and chips.","He wants water, not soda."], qs:[
    ["Which table is it?",[["table four","4️⃣"],["table two","2️⃣"],["table six","6️⃣"]],0,0],
    ["What does he eat?",[["a burger and chips","🍔🍟"],["soup","🍲"],["a salad","🥗"]],0,1],
    ["What does he drink?",[["water","💧"],["soda","🥤"],["coffee","☕"]],0,2]]},
  {t:"In the kitchen", pic:"🧑‍🍳", pack:"restaurant", text:["The chef washes his hands first.","Then he puts the pan on the hot stove.","He cooks eggs for the guests."], qs:[
    ["What does the chef do first?",[["he washes his hands","🧼"],["he eats","😋"],["he sleeps","😴"]],0,0],
    ["What goes on the stove?",[["the pan","🍳"],["the plate","🍽️"],["the glass","🥃"]],0,1],
    ["What does he cook?",[["eggs","🥚"],["pizza","🍕"],["fish","🐟"]],0,2]]},
  {t:"My scooter", pic:"🛴", pack:"ride", text:["Sam has a black electric scooter.","He rides it to school every day.","He always wears his blue helmet."], qs:[
    ["What colour is the scooter?",[["black","⬛"],["red","🟥"],["white","⬜"]],0,0],
    ["Where does Sam ride?",[["to school","🏫"],["to the beach","🏖️"],["to the café","☕"]],0,1],
    ["What does he always wear?",[["a helmet","⛑️"],["a cap","🧢"],["glasses","👓"]],0,2]]},
  {t:"Red light", pic:"🚦", pack:"ride", text:["Lisa rides her bike to the shop.","The traffic light is red, so she stops.","When it is green, she looks left and right."], qs:[
    ["Where does Lisa go?",[["to the shop","🏪"],["to school","🏫"],["home","🏠"]],0,0],
    ["Why does she stop?",[["the light is red","🔴"],["she is tired","😴"],["it is raining","🌧️"]],0,1],
    ["What does she do at the green light?",[["she looks left and right","👀"],["she runs","🏃"],["she sings","🎵"]],0,2]]},
  {t:"Game night", pic:"🎮", pack:"ride", text:["On Friday, Omar plays a game with his friends.","They must beat a big monster.","They have three lives, and they win!"], qs:[
    ["Who does Omar play with?",[["his friends","👫"],["his dog","🐶"],["his teacher","🧑‍🏫"]],0,0],
    ["What must they beat?",[["a monster","👾"],["a dragon","🐉"],["a robot","🤖"]],0,1],
    ["How many lives do they have?",[["three","❤️❤️❤️"],["one","❤️"],["five","🖐️"]],0,2]]},
  {t:"Level five", pic:"🕹️", pack:"ride", text:["Level five is very hard.","You need a key to open the big door.","The key is under the bridge."], qs:[
    ["Which level is hard?",[["level five","5️⃣"],["level two","2️⃣"],["level nine","9️⃣"]],0,0],
    ["What opens the door?",[["a key","🔑"],["a sword","🗡️"],["a coin","🪙"]],0,1],
    ["Where is the key?",[["under the bridge","🌉"],["in a tree","🌳"],["in the house","🏠"]],0,2]]}
];

ACTS.push({id:"read", ico:"📖", t:"Read and answer", sv:"Läs och svara", col:"var(--cyan)"});

GAMES.read = function(){
  const pack = TOPICS[state.topic] && TOPICS[state.topic].pack;
  let pool = shuffle(READS.filter(r => pack ? r.pack===pack : !r.pack));
  if(pool.length<2) pool = pool.concat(shuffle(READS.filter(r=>!r.pack)));
  const picked = pool.slice(0,2);
  const qs = []; picked.forEach(r => shuffle(r.qs).slice(0,2).forEach(q => qs.push({r,q})));
  runQuestions(GAMES.read, "Read and answer", "Läs texten och svara – tryck 💡 om du vill se var svaret finns", qs, (stage,{r,q},done)=>{
    const [question, opts, ans, s] = q;
    const order = shuffle(opts.map((o,i)=>({o,i})));
    stage.innerHTML = `
      <div class="readbox">
        <div class="rtitle"><span class="rpic">${r.pic}</span><b>${r.t}</b><button class="hint" id="rsay" style="margin-left:auto">🔊</button></div>
        <p class="rtext">${r.text.map((x,k)=>`<span class="rs" data-s="${k}">${x}</span>`).join(" ")}</p>
      </div>
      <div class="gapline" style="margin-top:10px">${question}</div>
      <div class="ropts">${order.map(({o,i})=>`<button class="ropt" data-i="${i}"><span class="rp">${o[1]}</span><span>${o[0]}</span></button>`).join("")}</div>
      <button class="hint" id="where">💡 Where is the answer? / Var står svaret?</button>
      <div class="feedback" id="fb"></div>`;
    let first = true;
    stage.querySelector("#rsay").onclick = () => say(r.text.join(" "));
    stage.querySelector("#where").onclick = () => { const el = stage.querySelector(`.rs[data-s="${s}"]`); el.classList.add("lit"); say(r.text[s]); };
    stage.querySelectorAll(".ropt").forEach(b => b.onclick = () => {
      if(+b.dataset.i === ans){
        b.classList.add("ok"); stage.querySelectorAll(".ropt").forEach(x=>x.disabled=true);
        stage.querySelector(`.rs[data-s="${s}"]`).classList.add("lit");
        say(opts[ans][0]); stage.querySelector("#fb").textContent = rnd(PRAISE); done(first);
      } else {
        first = false; b.classList.add("bad"); setTimeout(()=>{ b.classList.remove("bad"); b.classList.add("faded"); }, 400);
        stage.querySelector("#fb").innerHTML = `<img src="../img/pj/pera_icon.webp" alt=""> Try again! Look at the text. / Läs texten igen.`;
      }
    });
  });
};

(function(){ const st=document.createElement("style"); st.textContent=`
  .readbox{background:#fff;border:3px solid var(--ink);border-radius:16px;padding:12px 16px;text-align:left}
  .rtitle{display:flex;align-items:center;gap:10px;font-size:20px}.rpic{font-size:40px}
  .rtext{font-size:22px;line-height:1.6;font-weight:700;margin:8px 0 0}
  .rs{border-radius:6px;padding:1px 2px;transition:background .3s}.rs.lit{background:var(--yellow);box-shadow:0 0 0 3px var(--yellow)}
  .ropts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-top:10px}
  .ropt{display:flex;flex-direction:column;align-items:center;gap:4px;background:#fff;border:3px solid var(--ink);border-radius:14px;padding:10px 6px;font-weight:900;font-size:17px;box-shadow:var(--sh);overflow-wrap:anywhere}
  .ropt .rp{font-size:40px;line-height:1.1}.ropt.ok{background:var(--lime)}.ropt.bad{animation:shake .3s}.ropt.faded{opacity:.35}
  @media (max-width:560px){ .rtext{font-size:18px} .ropt{font-size:14px} .ropt .rp{font-size:30px} }`; document.head.appendChild(st); })();
