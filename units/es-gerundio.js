UNIT("es-gerundio", {
  icon:"🎬", title:"¿Qué están haciendo?",
  sub:{en:"estar + gerund, jobs, dreams and plans for the future", sv:"estar + gerundium, yrken, drömmar och framtidsplaner"},
  topics:{
    gerundios:{icon:"🏃", name:{en:"-ando / -iendo", sv:"-ando / -iendo"}, items:[
      ["hablando","🗣️"],["comiendo","🍽️"],["bebiendo","🥤"],["leyendo","📖"],["escribiendo","✍️"],["durmiendo","😴"],
      ["corriendo","🏃"],["nadando","🏊"],["bailando","💃"],["cantando","🎤"],["jugando","🎮"],["cocinando","🍳"],
      ["estudiando","📚"],["trabajando","💼"],["viendo la tele","📺"]]},
    profesiones:{icon:"🧑‍⚕️", name:{en:"Jobs", sv:"Yrken"}, items:[
      ["el médico","🧑‍⚕️"],["el profesor","🧑‍🏫"],["el cocinero","🧑‍🍳"],["el policía","👮"],["el bombero","🧑‍🚒"],
      ["el piloto","🧑‍✈️"],["el agricultor","🧑‍🌾"],["el mecánico","🧑‍🔧"],["el científico","🧑‍🔬"],["el artista","🧑‍🎨"],
      ["el cantante","🧑‍🎤"],["el futbolista","⚽"],["el periodista","📰"],["el programador","💻"],["el veterinario","🐾"]]},
    futuro:{icon:"💭", name:{en:"Dreams & plans", sv:"Drömmar & planer"}, items:[
      ["me gustaría",M("I would like to","jag skulle vilja")],["voy a",M("I'm going to","jag ska")],["quiero ser",M("I want to be","jag vill bli")],
      ["en el futuro",M("in the future","i framtiden")],["este verano",M("this summer","i sommar")],["el sueño","💭"],
      ["viajar","✈️"],["la universidad","🎓"],["el trabajo",M("job / work","jobb")],["estudiar","📚"]]}
  },
  sentences:[
    ["Estoy leyendo un libro .","📖"],["¿Qué estás haciendo ?","❓"],["Mi madre está cocinando .","🍳"],
    ["Los niños están jugando en el parque .","🌳"],["En el futuro quiero ser médica .","🧑‍⚕️"],["Me gustaría viajar a México .","✈️"],
    ["Este verano voy a trabajar .","💼"],["Estamos viendo una película .","🎬"],["Mi sueño es ser futbolista .","⚽"],["El perro está durmiendo .","😴"]
  ],
  gaps:[
    ["Yo ___ estudiando.",["estoy","estás","está"],"estoy","📚",M("I am studying.","Jag pluggar.")],
    ["¿Qué ___ haciendo tú?",["estoy","estás"],"estás","❓",M("What are you doing?","Vad håller du på med?")],
    ["Ellos están ___.",["comiendo","comendo"],"comiendo","🍽️",M("They are eating.","De äter.")],
    ["Ella está ___ un libro.",["leyendo","leiendo"],"leyendo","📖",M("She is reading a book.","Hon läser en bok.")],
    ["Mi padre está ___.",["durmiendo","dormiendo"],"durmiendo","😴",M("My father is sleeping.","Min pappa sover.")],
    ["Estamos ___ en la piscina.",["nadando","nadiendo"],"nadando","🏊",M("We are swimming in the pool.","Vi simmar i bassängen.")],
    ["Me ___ ser piloto.",["gustaría","gusto"],"gustaría","🧑‍✈️",M("I would like to be a pilot.","Jag skulle vilja bli pilot.")],
    ["Este verano ___ a viajar a España.",["voy","vas"],"voy","✈️",M("This summer I'm going to travel to Spain.","I sommar ska jag resa till Spanien.")],
    ["Quiero ___ veterinaria.",["ser","estar"],"ser","🐾",M("I want to be a vet.","Jag vill bli veterinär.")],
    ["Un ___ trabaja en un restaurante.",["cocinero","bombero"],"cocinero","🧑‍🍳",M("A cook works in a restaurant.","En kock jobbar på en restaurang.")]
  ],
  qa:[
    ["¿Qué estás haciendo?","Estoy haciendo los deberes."],["¿Qué quieres ser en el futuro?","Quiero ser profesora."],
    ["¿Qué vas a hacer este verano?","Voy a viajar con mi familia."],["¿Qué te gustaría estudiar?","Me gustaría estudiar medicina."],
    ["¿Qué están haciendo tus amigos?","Están jugando al fútbol."],["¿Cuál es tu sueño?","Mi sueño es vivir en Barcelona."]
  ]
});
