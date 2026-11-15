UNIT("es-que-te-gusta", {
  icon:"⚽", title:"¿Qué te gusta hacer?",
  sub:{en:"Free time, sports, days of the week, numbers 40–59", sv:"Fritid, sport, veckodagar, siffror 40–59"},
  topics:{
    ocio:{icon:"⚽", name:{en:"Free time", sv:"Fritid"}, items:[
      ["el fútbol","⚽"],["el baloncesto","🏀"],["el tenis","🎾"],["el hockey","🏒"],["nadar","🏊"],["bailar","💃"],
      ["leer","📖"],["dibujar","🎨"],["cantar","🎤"],["la música","🎵"],["los videojuegos","🎮"],["montar en bici","🚴"],
      ["ver la tele","📺"],["cocinar","🍳"],["correr","🏃"]]},
    dias:{icon:"📅", name:{en:"Days", sv:"Veckodagar"}, items:[
      ["lunes",M("Monday","måndag")],["martes",M("Tuesday","tisdag")],["miércoles",M("Wednesday","onsdag")],
      ["jueves",M("Thursday","torsdag")],["viernes",M("Friday","fredag")],["sábado",M("Saturday","lördag")],
      ["domingo",M("Sunday","söndag")],["hoy",M("today","idag")],["el fin de semana",M("the weekend","helgen")]]},
    numeros:{icon:"🔢", name:{en:"Numbers 40–59", sv:"Siffror 40–59"}, items:[
      ["cuarenta",{n:40}],["cuarenta y uno",{n:41}],["cuarenta y dos",{n:42}],["cuarenta y cinco",{n:45}],
      ["cuarenta y ocho",{n:48}],["cincuenta",{n:50}],["cincuenta y uno",{n:51}],["cincuenta y tres",{n:53}],
      ["cincuenta y seis",{n:56}],["cincuenta y nueve",{n:59}]]}
  },
  sentences:[
    ["Me gusta el fútbol .","⚽"],["No me gusta nadar .","🏊"],["Me gustan los videojuegos .","🎮"],["¿Te gusta bailar ?","💃"],
    ["Hoy es lunes .","📅"],["Los sábados juego al tenis .","🎾"],["Me gusta mucho leer .","📖"],["¿Qué te gusta hacer ?","🤔"],
    ["Me gustan los perros y los gatos .","🐶🐱"],["El fin de semana veo la tele .","📺"]
  ],
  gaps:[
    ["Me ___ el fútbol.",["gusta","gustan"],"gusta","⚽",M("I like football.","Jag gillar fotboll.")],
    ["Me ___ los gatos.",["gusta","gustan"],"gustan","🐱🐱",M("I like cats.","Jag gillar katter.")],
    ["¿Te ___ bailar?",["gusta","gustan"],"gusta","💃",M("Do you like dancing?","Gillar du att dansa?")],
    ["Me ___ los videojuegos.",["gusta","gustan"],"gustan","🎮",M("I like video games.","Jag gillar datorspel.")],
    ["___ me gusta el tenis.",["No","Sí"],"No","🎾",M("I DON'T like tennis.","Jag gillar INTE tennis.")],
    ["___ fútbol es mi deporte favorito.",["El","La"],"El","⚽",M("Football is my favourite sport.","Fotboll är min favoritsport.")],
    ["Me gusta ___ música.",["el","la"],"la","🎵",M("I like music.","Jag gillar musik.")],
    ["Me gustan ___ perros.",["los","las"],"los","🐶🐶",M("I like dogs.","Jag gillar hundar.")],
    ["El sábado y el domingo son el ___.",["fin de semana","lunes"],"fin de semana","📅",M("Saturday and Sunday are the weekend.","Lördag och söndag är helgen.")],
    ["Después del lunes viene el ___.",["martes","jueves"],"martes","📅",M("After Monday comes Tuesday.","Efter måndag kommer tisdag.")]
  ],
  qa:[
    ["¿Te gusta el fútbol?","Sí, me gusta mucho."],["¿Qué día es hoy?","Hoy es lunes."],["¿Qué deporte te gusta?","Me gusta el baloncesto."],
    ["¿Qué te gusta hacer?","Me gusta leer y dibujar."],["¿Te gustan los gatos?","No, no me gustan."],
    ["¿Qué haces el fin de semana?","Juego al fútbol y veo la tele."]
  ]
});
