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
})();
