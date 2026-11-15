UNIT("es-verbos", {
  icon:"🔧", title:"Los verbos en presente",
  sub:{en:"Present tense -ar / -er / -ir, ser, estar, tener, ir, ir a + infinitive", sv:"Presens -ar / -er / -ir, ser, estar, tener, ir, ir a + infinitiv"},
  topics:{
    ar:{icon:"🗣️", name:{en:"-ar verbs", sv:"-ar-verb"}, items:[
      ["hablar","🗣️"],["escuchar","🎧"],["bailar","💃"],["cantar","🎤"],["nadar","🏊"],["estudiar","📚"],
      ["trabajar","💼"],["cocinar","🍳"],["comprar","🛒"],["jugar","⚽"],["mirar","👀"],["tocar la guitarra","🎸"]]},
    erir:{icon:"🍽️", name:{en:"-er / -ir verbs", sv:"-er / -ir-verb"}, items:[
      ["comer","🍽️"],["beber","🥤"],["leer","📖"],["correr","🏃"],["aprender","🧠"],["vivir","🏠"],
      ["escribir","✍️"],["abrir","🚪"],["dormir","😴"],["ver la tele","📺"]]},
    lugares:{icon:"📍", name:{en:"Places (ir a…)", sv:"Platser (ir a…)"}, items:[
      ["el colegio","🏫"],["el cine","🎬"],["la playa","🏖️"],["el parque","🌳"],["la piscina","🏊"],["la tienda","🏪"],
      ["el restaurante","🍴"],["el centro",M("town centre","centrum")],["el estadio","🏟️"],["casa","🏠"]]}
  },
  sentences:[
    ["Yo hablo español .","🗣️"],["Mi hermano come una pizza .","🍕"],["Vivimos en Suecia .","🏠"],["¿Dónde estás ?","📍"],
    ["Voy al cine .","🎬"],["Vamos a la playa .","🏖️"],["Voy a jugar al fútbol .","⚽"],["¿Qué vas a hacer el sábado ?","📅"],
    ["Ellos escriben un correo .","✍️"],["Estoy en el colegio .","🏫"]
  ],
  gaps:[
    ["Yo ___ español.",["hablo","hablas","habla"],"hablo","🗣️",M("I speak Spanish.","Jag pratar spanska.")],
    ["Tú ___ mucho.",["como","comes","come"],"comes","🍽️",M("You eat a lot.","Du äter mycket.")],
    ["Nosotros ___ en Karlskrona.",["vivo","vivimos","viven"],"vivimos","🏠",M("We live in Karlskrona.","Vi bor i Karlskrona.")],
    ["Ana y Pablo ___ música.",["escuchamos","escuchan"],"escuchan","🎧",M("Ana and Pablo listen to music.","Ana och Pablo lyssnar på musik.")],
    ["Ella ___ en casa.",["es","está"],"está","🏠",M("She is at home.","Hon är hemma.")],
    ["Yo ___ sueco.",["soy","estoy"],"soy","🙋",M("I am Swedish.","Jag är svensk.")],
    ["Ellos ___ dos perros.",["tenemos","tienen"],"tienen","🐶🐶",M("They have two dogs.","De har två hundar.")],
    ["Voy ___ cine.",["al","a la"],"al","🎬",M("I'm going to the cinema.","Jag går på bio.")],
    ["Vamos ___ playa.",["al","a la"],"a la","🏖️",M("We're going to the beach.","Vi går till stranden.")],
    ["Mañana voy ___ nadar.",["a","de"],"a","🏊",M("Tomorrow I'm going to swim.","I morgon ska jag simma.")],
    ["¿Qué ___ a hacer tú?",["voy","vas"],"vas","❓",M("What are you going to do?","Vad ska du göra?")]
  ],
  qa:[
    ["¿Adónde vas el sábado?","Voy al cine con mis amigos."],["¿Qué vas a hacer el fin de semana?","Voy a jugar al fútbol."],
    ["¿Dónde vives?","Vivo en Karlskrona."],["¿Dónde estás?","Estoy en casa."],["¿Qué comes hoy?","Como pasta con tomate."],
    ["¿Qué lees?","Leo un libro de aventuras."]
  ]
});
