UNIT("es-tiempo-libre", {
  icon:"🎮", title:"Mi tiempo libre",
  sub:{en:"Free-time activities, how often, where", sv:"Fritidsaktiviteter, hur ofta, var"},
  topics:{
    actividades:{icon:"🎸", name:{en:"Activities", sv:"Aktiviteter"}, items:[
      ["jugar al fútbol","⚽"],["jugar a los videojuegos","🎮"],["tocar la guitarra","🎸"],["escuchar música","🎧"],
      ["ver series","📺"],["salir con amigos","👫"],["ir al cine","🎬"],["ir de compras","🛍️"],["hacer deporte","🏋️"],
      ["montar en bici","🚴"],["nadar","🏊"],["bailar","💃"],["leer","📖"],["chatear","📱"],["sacar fotos","📸"],
      ["pasear al perro","🐕"],["dibujar","🎨"],["cocinar","🍳"]]},
    frecuencia:{icon:"🔁", name:{en:"How often?", sv:"Hur ofta?"}, items:[
      ["siempre",M("always","alltid")],["a menudo",M("often","ofta")],["a veces",M("sometimes","ibland")],["nunca",M("never","aldrig")],
      ["todos los días",M("every day","varje dag")],["los fines de semana",M("at weekends","på helgerna")],
      ["por la tarde",M("in the afternoon / evening","på eftermiddagen / kvällen")],["después del colegio",M("after school","efter skolan")],
      ["una vez a la semana",M("once a week","en gång i veckan")],["dos veces a la semana",M("twice a week","två gånger i veckan")]]},
    lugares:{icon:"📍", name:{en:"Where?", sv:"Var?"}, items:[
      ["el parque","🌳"],["el cine","🎬"],["el centro comercial","🛍️"],["la piscina","🏊"],["el polideportivo","🏟️"],
      ["la biblioteca","📚"],["la playa","🏖️"],["casa de un amigo","🏠"],["el bosque","🌲"]]}
  },
  sentences:[
    ["En mi tiempo libre juego a los videojuegos .","🎮"],["¿Qué haces en tu tiempo libre ?","❓"],
    ["Los fines de semana salgo con mis amigos .","👫"],["Toco la guitarra dos veces a la semana .","🎸"],
    ["Nunca voy de compras .","🛍️"],["A veces voy al cine con mi familia .","🎬"],
    ["Después del colegio hago deporte .","🏋️"],["Mi hermana juega al baloncesto .","🏀"],
    ["Me gusta mucho escuchar música .","🎧"],["Por la tarde veo series .","📺"]
  ],
  gaps:[
    ["Yo ___ al fútbol.",["juego","toco","hago"],"juego","⚽",M("I play football.","Jag spelar fotboll.")],
    ["Yo ___ la guitarra.",["juego","toco","hago"],"toco","🎸",M("I play the guitar.","Jag spelar gitarr.")],
    ["Yo ___ deporte.",["juego","toco","hago"],"hago","🏋️",M("I do sport.","Jag tränar.")],
    ["Juego ___ videojuegos.",["al","a los"],"a los","🎮",M("I play video games.","Jag spelar datorspel.")],
    ["Juego ___ tenis.",["al","a la"],"al","🎾",M("I play tennis.","Jag spelar tennis.")],
    ["Voy ___ cine.",["al","a la"],"al","🎬",M("I go to the cinema.","Jag går på bio.")],
    ["Voy ___ piscina.",["al","a la"],"a la","🏊",M("I go to the swimming pool.","Jag går till simhallen.")],
    ["Los sábados ___ con mis amigos.",["salgo","sale"],"salgo","👫",M("On Saturdays I go out with my friends.","På lördagar går jag ut med mina kompisar.")],
    ["¿Qué ___ en tu tiempo libre?",["haces","hago"],"haces","❓",M("What do you do in your free time?","Vad gör du på din fritid?")],
    ["Mi hermano ___ series todos los días.",["ve","veo"],"ve","📺",M("My brother watches series every day.","Min bror tittar på serier varje dag.")],
    ["___ voy de compras. ¡No me gusta!",["Nunca","Siempre"],"Nunca","🙅",M("I never go shopping. I don't like it!","Jag shoppar aldrig. Jag gillar det inte!")],
    ["Nado ___ veces a la semana.",["dos","dos vez"],"dos","🏊",M("I swim twice a week.","Jag simmar två gånger i veckan.")]
  ],
  qa:[
    ["¿Qué haces en tu tiempo libre?","En mi tiempo libre juego a los videojuegos."],
    ["¿Qué haces los fines de semana?","Los sábados salgo con mis amigos."],
    ["¿Tocas algún instrumento?","Sí, toco el piano."],
    ["¿Con qué frecuencia vas al cine?","Una vez al mes, más o menos."],
    ["¿Practicas algún deporte?","Juego al hockey dos veces a la semana."],
    ["¿Dónde quedas con tus amigos?","Quedamos en el centro comercial."],
    ["¿Te gusta leer?","No, prefiero ver series."],
    ["¿Qué haces después del colegio?","Primero como algo y luego hago los deberes."]
  ]
});
