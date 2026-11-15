UNIT("es-peru", {
  icon:"🦙", title:"¿Qué has hecho? De viaje por Perú",
  sub:{en:"Landscapes, Peru, the present perfect (he comido, has visto…)", sv:"Landskap, Peru, perfekt (he comido, has visto…)"},
  topics:{
    paisaje:{icon:"⛰️", name:{en:"Geography & landscapes", sv:"Geografi & landskap"}, items:[
      ["la montaña","⛰️"],["el río",M("river","flod")],["el lago",M("lake","sjö")],["el mar","🌊"],["la playa","🏖️"],
      ["el desierto","🏜️"],["la selva",M("rainforest","regnskog")],["el volcán","🌋"],["la isla","🏝️"],["la costa",M("coast","kust")],
      ["el valle",M("valley","dal")],["la ciudad","🏙️"],["el pueblo",M("village","by")]]},
    peru:{icon:"🦙", name:{en:"Peru", sv:"Peru"}, items:[
      ["la llama","🦙"],["el cóndor","🦅"],["el maíz","🌽"],["la patata","🥔"],["el pescado","🐟"],["el limón","🍋"],
      ["Lima",M("the capital of Peru","Perus huvudstad")],["el quechua",M("Quechua (language)","quechua (språk)")],
      ["la cerámica","🏺"],["el sol","☀️"]]},
    perfecto:{icon:"✅", name:{en:"Present perfect", sv:"Perfekt"}, items:[
      ["he comido",M("I have eaten","jag har ätit")],["he visto",M("I have seen","jag har sett")],["he hecho",M("I have done","jag har gjort")],
      ["he ido",M("I have gone","jag har åkt")],["he estado",M("I have been","jag har varit")],["he jugado",M("I have played","jag har spelat")],
      ["he leído",M("I have read","jag har läst")],["he escrito",M("I have written","jag har skrivit")],["he dormido",M("I have slept","jag har sovit")],
      ["he hablado",M("I have spoken","jag har pratat")],["he vuelto",M("I have come back","jag har kommit tillbaka")],["he abierto",M("I have opened","jag har öppnat")]]}
  },
  sentences:[
    ["Este fin de semana he jugado al fútbol .","⚽"],["Hoy he comido ceviche .","🐟"],["¿Has estado en Perú ?","🦙"],
    ["Nunca he visto un volcán .","🌋"],["Hemos visitado Lima .","🏙️"],["Mi hermano ha leído un libro .","📖"],
    ["¿Qué has hecho hoy ?","❓"],["Ya he hecho los deberes .","📓"],["Perú tiene montañas , selva y desierto .","⛰️"],
    ["Esta mañana he ido al colegio .","🏫"]
  ],
  gaps:[
    ["Yo ___ comido pizza.",["he","has","ha"],"he","🍕",M("I have eaten pizza.","Jag har ätit pizza.")],
    ["¿Tú ___ estado en Lima?",["he","has","ha"],"has","🏙️",M("Have you been to Lima?","Har du varit i Lima?")],
    ["Ella ___ visto la película.",["ha","han"],"ha","🎬",M("She has seen the film.","Hon har sett filmen.")],
    ["Nosotros ___ jugado al tenis.",["hemos","habéis"],"hemos","🎾",M("We have played tennis.","Vi har spelat tennis.")],
    ["Ellos ___ vuelto a casa.",["ha","han"],"han","🏠",M("They have come home.","De har kommit hem.")],
    ["Hoy he ___ un libro.",["leído","leer"],"leído","📖",M("Today I have read a book.","I dag har jag läst en bok.")],
    ["¿Qué has ___ este fin de semana?",["hecho","hacido"],"hecho","❓",M("What have you done this weekend?","Vad har du gjort i helgen?")],
    ["He ___ una carta.",["escrito","escribido"],"escrito","✍️",M("I have written a letter.","Jag har skrivit ett brev.")],
    ["Nunca he ___ un cóndor.",["visto","veído"],"visto","🦅",M("I have never seen a condor.","Jag har aldrig sett en kondor.")],
    ["Lima es la ___ de Perú.",["capital","montaña"],"capital","🏙️",M("Lima is the capital of Peru.","Lima är Perus huvudstad.")]
  ],
  qa:[
    ["¿Qué has hecho este fin de semana?","He jugado al fútbol y he visto una película."],["¿Has estado en Perú?","No, nunca he estado en Perú."],
    ["¿Qué has comido hoy?","He comido pescado con patatas."],["¿Cuál es la capital de Perú?","La capital de Perú es Lima."],
    ["¿Qué animales hay en los Andes?","Hay llamas y cóndores."],["¿Has hecho los deberes?","Sí, ya los he hecho."]
  ]
});
