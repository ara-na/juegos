/* English units for the class challenge – generated from english-basics/index.html */
(function(){
const T = {
  animals:{name:"🐾 Animals", items:[
    ["cat","🐱"],["dog","🐶"],["fish","🐟"],["bird","🐦"],["horse","🐴"],["cow","🐮"],["pig","🐷"],["rabbit","🐰"],["lion","🦁"],["elephant","🐘"],["frog","🐸"],["mouse","🐭"],["duck","🦆"],["sheep","🐑"]]},
  food:{name:"🍎 Food", items:[
    ["apple","🍎"],["banana","🍌"],["bread","🍞"],["milk","🥛"],["cheese","🧀"],["egg","🥚"],["pizza","🍕"],["cake","🍰"],["carrot","🥕"],["orange","🍊"],["ice cream","🍦"],["grapes","🍇"],["juice","🧃"],["chicken","🍗"]]},
  clothes:{name:"👕 Clothes", items:[
    ["cap","🧢"],["shirt","👕"],["trousers","👖"],["dress","👗"],["shoes","👟"],["socks","🧦"],["jacket","🧥"],["gloves","🧤"],["scarf","🧣"],["boots","🥾"],["glasses","👓"]]},
  school:{name:"✏️ School", items:[
    ["book","📖"],["pencil","✏️"],["bag","🎒"],["computer","💻"],["scissors","✂️"],["ruler","📏"],["clock","🕐"],["paint","🎨"],["teacher","🧑‍🏫"],["bus","🚌"],["ball","⚽"],["school","🏫"]]},
  things:{name:"🏠 Things", items:[
    ["house","🏠"],["car","🚗"],["bike","🚲"],["phone","📱"],["sun","☀️"],["moon","🌙"],["tree","🌳"],["flower","🌸"],["star","⭐"],["key","🔑"],["door","🚪"],["bed","🛏️"],["cup","☕"],["rain","🌧️"]]},
  colors:{name:"🎨 Colours", items:[
    ["red",{c:"#e53935"}],["blue",{c:"#1e63ff"}],["green",{c:"#2e9e4f"}],["yellow",{c:"#ffd400"}],["black",{c:"#1b1b1b"}],["white",{c:"#ffffff"}],["orange",{c:"#ff8a1f"}],["purple",{c:"#8b3fd9"}],["pink",{c:"#ff7eb6"}],["brown",{c:"#8a5a2b"}],["grey",{c:"#9a9a9a"}]]},
  numbers:{name:"🔢 Numbers", items:[
    ["one",{n:1}],["two",{n:2}],["three",{n:3}],["four",{n:4}],["five",{n:5}],["six",{n:6}],["seven",{n:7}],["eight",{n:8}],["nine",{n:9}],["ten",{n:10}],["eleven",{n:11}],["twelve",{n:12}]]},
  body:{name:"🖐️ Body", items:[
    ["eye","👁️"],["ear","👂"],["nose","👃"],["mouth","👄"],["hand","✋"],["foot","🦶"],["leg","🦵"],["arm","💪"],["tooth","🦷"],["hair","💇"]]}
};
const GP = [
  ["I ___ happy.",["am","is","are"],"am","😀"],
  ["The dog ___ big.",["am","is","are"],"is","🐶"],
  ["They ___ friends.",["am","is","are"],"are","👫"],
  ["You ___ my friend.",["am","is","are"],"are","🤝"],
  ["She ___ a cat.",["have","has"],"has","👧🐱"],
  ["I ___ a bike.",["have","has"],"have","🚲"],
  ["This is ___ apple.",["a","an"],"an","🍎"],
  ["This is ___ banana.",["a","an"],"a","🍌"],
  ["It is ___ egg.",["a","an"],"an","🥚"],
  ["I can see two ___.",["cat","cats"],"cats","🐱🐱"],
  ["I have one ___.",["dog","dogs"],"dog","🐶"],
  ["The sun is ___.",["yellow","blue","green"],"yellow","☀️"],
  ["The grass is ___.",["red","green","black"],"green","🌱"],
  ["We ___ football.",["play","plays"],"play","⚽"],
  ["He ___ pizza.",["like","likes"],"likes","👦🍕"],
  ["The fish is ___ the water.",["in","on","under"],"in","🐟💧"],
  ["The cat is ___ the bed.",["in","on","under"],"on","🐱🛏️"],
  ["The ball is ___ the table.",["in","on","under"],"under","⚽"],
  ["___ is my mum.",["She","He"],"She","👩"],
  ["___ is my dad.",["She","He"],"He","👨"]
];
const conv = keys => { const o={}; keys.forEach(k=>{ const v=T[k]; const sp=v.name.indexOf(" "); o[k]={icon:v.name.slice(0,sp), name:{en:v.name.slice(sp+1), sv:v.name.slice(sp+1)}, items:v.items}; }); return o; };
const gaps = GP.map(([s,o,a,p])=>[s,o,a,p]);
UNIT("en-1", {icon:"🐾", title:"Animals, food, colours, numbers", target:"en",
  sub:{en:"English basics 1", sv:"Engelska 1"}, topics:conv(["animals","food","colors","numbers"]), gaps, qa:[]});
UNIT("en-2", {icon:"👕", title:"Clothes, school, things, body", target:"en",
  sub:{en:"English basics 2", sv:"Engelska 2"}, topics:conv(["clothes","school","things","body"]), gaps, qa:[]});
const RG = [
  ["I would ___ a pizza, please.",["like","likes"],"like","🍕"],
  ["Can I ___ the bill, please?",["have","has"],"have","🧾"],
  ["Here ___ your soup.",["is","are"],"is","🍲"],
  ["Here ___ your chips.",["is","are"],"are","🍟"],
  ["The chef ___ in the kitchen.",["work","works"],"works","🧑‍🍳"],
  ["The milk is ___ the fridge.",["in","on","under"],"in","🥛"],
  ["Put the fork ___ the table.",["in","on","under"],"on","🍴"],
  ["I eat soup with a ___.",["spoon","knife","chair"],"spoon","🥄🍲"],
  ["I cut the bread with a ___.",["knife","spoon","cup"],"knife","🔪🍞"],
  ["Can I take your ___?",["order","cat","sun"],"order","📋"],
  ["___ you like a drink?",["Would","Are","Is"],"Would","🥤"],
  ["I would like ___ orange juice.",["a","an"],"an","🍊"],
  ["The coffee is ___ hot!",["too","two"],"too","☕"],
  ["There is a fly ___ my soup!",["in","on","under"],"in","🪰🍲"]
];
const TR = {
  kitchen:{name:"🍳 Kitchen", items:[
    ["knife","🔪"],["fork","🍴"],["spoon","🥄"],["plate","🍽️"],["bowl","🥣"],["glass","🥃"],["pan","🍳"],["chef","🧑‍🍳"],["salt","🧂"],["chopsticks","🥢"],["teapot","🫖"],["menu","📋"],["bill","🧾"],["bell","🛎️"]]},
  menu:{name:"🍔 Menu", items:[
    ["burger","🍔"],["chips","🍟"],["pasta","🍝"],["soup","🍲"],["salad","🥗"],["sandwich","🥪"],["rice","🍚"],["steak","🥩"],["taco","🌮"],["pancakes","🥞"],["hot dog","🌭"],["sushi","🍣"],["noodles","🍜"],["egg","🍳"]]},
  cafe:{name:"🧁 Café", items:[
    ["water","💧"],["coffee","☕"],["tea","🍵"],["soda","🥤"],["lemon","🍋"],["cookie","🍪"],["cupcake","🧁"],["chocolate","🍫"],["donut","🍩"],["pie","🥧"],["popcorn","🍿"],["waffle","🧇"]]}
};
const convR = () => { const o={}; Object.keys(TR).forEach(k=>{ const v=TR[k]; const sp=v.name.indexOf(" "); o[k]={icon:v.name.slice(0,sp), name:{en:v.name.slice(sp+1), sv:v.name.slice(sp+1)}, items:v.items}; }); return o; };
UNIT("en-3", {icon:"🍽️", title:"Restaurant: kitchen, menu, café", target:"en",
  sub:{en:"English 3 · Restaurant", sv:"Engelska 3 · Restaurang"}, topics:convR(), gaps:RG, qa:[]});
const RG4 = [
  ["Always ___ a helmet.",["wear","eat","sing"],"wear","⛑️"],
  ["Stop at the ___ light.",["red","green","blue"],"red","🚦"],
  ["The train is ___ than the bike.",["faster","slower"],"faster","🚆🚲"],
  ["I ___ my scooter every day.",["ride","rides"],"ride","🛴"],
  ["He ___ video games.",["play","plays"],"plays","🎮"],
  ["Yesterday we ___ the game!",["won","win"],"won","🏆"],
  ["Look left and right ___ you cross.",["before","after"],"before","🚸"],
  ["___ down near the school.",["Slow","Fast"],"Slow","🚸"],
  ["The bus stops ___ the bus stop.",["at","under"],"at","🚌"],
  ["Turn ___ your light at night.",["on","off"],"on","🔦"],
  ["It is dangerous to use a phone ___ you ride.",["when","what"],"when","📱"],
  ["I need a new ___ for my game.",["controller","helmet","bridge"],"controller","🎮"]
];
const T4 = {
  wheels:{name:"🛴 On wheels", items:[
    ["scooter","🛴"],["bike","🚲"],["skateboard","🛹"],["motorbike","🏍️"],["car","🚗"],["bus","🚌"],["train","🚆"],["truck","🚚"],["tractor","🚜"],["taxi","🚕"],["ambulance","🚑"],["police car","🚓"],["plane","✈️"],["boat","⛵"]]},
  gaming:{name:"🎮 Gaming", items:[
    ["controller","🎮"],["joystick","🕹️"],["headphones","🎧"],["screen","🖥️"],["keyboard","⌨️"],["mouse","🖱️"],["trophy","🏆"],["monster","👾"],["sword","🗡️"],["shield","🛡️"],["gem","💎"],["coin","🪙"],["heart","❤️"],["dice","🎲"]]},
  road:{name:"🚦 Road safety", items:[
    ["helmet","⛑️"],["traffic light","🚦"],["stop sign","🛑"],["crossing","🚸"],["road","🛣️"],["bridge","🌉"],["map","🗺️"],["torch","🔦"],["bell","🔔"],["parking","🅿️"],["warning","⚠️"],["petrol","⛽"]]}
};
const conv4 = () => { const o={}; Object.keys(T4).forEach(k=>{ const v=T4[k]; const sp=v.name.indexOf(" "); o[k]={icon:v.name.slice(0,sp), name:{en:v.name.slice(sp+1), sv:v.name.slice(sp+1)}, items:v.items}; }); return o; };
UNIT("en-4", {icon:"🛴", title:"On the move: vehicles, gaming, road safety", target:"en",
  sub:{en:"English 4 · On the move", sv:"Engelska 4 · På väg"}, topics:conv4(), gaps:RG4, qa:[]});
})();
