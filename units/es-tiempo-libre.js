UNIT("es-tiempo-libre", {
  icon:"🎮", title:"Mi tiempo libre",
  sub:{en:"En mi tiempo libre juego… / Me gusta jugar…", sv:"En mi tiempo libre juego… / Me gusta jugar…"},
  topics:{
    infinitivo:{icon:"🎯", name:{en:"Activities (infinitive)", sv:"Aktiviteter (infinitiv)"}, items:[
      ["dormir","😴"],["jugar videojuegos","🎮"],["estar con amigos","👫"],["entrenar","🏋️"],["montar a caballo","🐴"],
      ["tocar un instrumento","🎻"],["leer libros","📖"],["ver series","📺"],["escuchar música","🎧"],["bailar","💃"],
      ["dibujar","🎨"],["cocinar","🍳"],["nadar","🏊"],["chatear","📱"]]},
    yo:{icon:"🙋", name:{en:"What I do (yo)", sv:"Det jag gör (yo)"}, items:[
      ["duermo","😴"],["juego videojuegos","🎮"],["estoy con amigos","👫"],["entreno","🏋️"],["monto a caballo","🐴"],
      ["toco la guitarra","🎸"],["leo libros","📖"],["veo series","📺"],["escucho música","🎧"],["bailo","💃"],
      ["dibujo","🎨"],["cocino","🍳"],["nado","🏊"],["chateo","📱"]]},
    entreno:{icon:"⚽", name:{en:"Entreno… (sports)", sv:"Entreno… (sporter)"}, items:[
      ["entreno fútbol","⚽"],["entreno baloncesto","🏀"],["entreno innebandy",M("I train floorball","jag tränar innebandy")],
      ["entreno hockey","🏒"],["entreno karate","🥋"],["entreno tenis","🎾"],["entreno balonmano","🤾"],["entreno atletismo","🏃"]]},
    toco:{icon:"🎸", name:{en:"Toco… (instruments)", sv:"Toco… (instrument)"}, items:[
      ["toco la guitarra","🎸"],["toco la batería","🥁"],["toco el piano","🎹"],["toco el violín","🎻"],
      ["toco el trombón","🎺"],["toco la trompeta","🎺"],["toco la flauta",M("I play the flute","jag spelar flöjt")],["toco el saxofón","🎷"]]}
  },
  sentences:[
    ["En mi tiempo libre leo libros .","📖"],["En mi tiempo libre me gusta jugar videojuegos .","🎮"],
    ["En mi tiempo libre entreno fútbol .","⚽"],["Me gusta tocar la guitarra .","🎸"],
    ["En mi tiempo libre estoy con amigos .","👫"],["Me gusta mucho dormir .","😴"],
    ["En mi tiempo libre monto a caballo .","🐴"],["Toco la batería y me gusta mucho .","🥁"],
    ["¿Qué haces en tu tiempo libre ?","❓"],["No me gusta entrenar .","🙅"]
  ],
  gaps:[
    ["En mi tiempo libre ___ libros.",["leo","leer"],"leo","📖",M("In my free time I read books.","På min fritid läser jag böcker.")],
    ["En mi tiempo libre me gusta ___ libros.",["leo","leer"],"leer","📖",M("In my free time I like reading books.","På min fritid gillar jag att läsa böcker.")],
    ["En mi tiempo libre ___ videojuegos.",["juego","jugar"],"juego","🎮",M("In my free time I play video games.","På min fritid spelar jag datorspel.")],
    ["Me gusta ___ videojuegos.",["juego","jugar"],"jugar","🎮",M("I like playing video games.","Jag gillar att spela datorspel.")],
    ["En mi tiempo libre ___ mucho.",["duermo","dormir"],"duermo","😴",M("In my free time I sleep a lot.","På min fritid sover jag mycket.")],
    ["Me gusta ___ con amigos.",["estoy","estar"],"estar","👫",M("I like being with friends.","Jag gillar att vara med kompisar.")],
    ["En mi tiempo libre ___ con amigos.",["estoy","estar"],"estoy","👫",M("In my free time I'm with friends.","På min fritid är jag med kompisar.")],
    ["Yo ___ hockey dos veces a la semana.",["entreno","entrenar"],"entreno","🏒",M("I train hockey twice a week.","Jag tränar hockey två gånger i veckan.")],
    ["Me gusta ___ a caballo.",["monto","montar"],"montar","🐴",M("I like horse riding.","Jag gillar att rida.")],
    ["En mi tiempo libre ___ el piano.",["toco","juego"],"toco","🎹",M("In my free time I play the piano.","På min fritid spelar jag piano.")],
    ["En mi tiempo libre ___ innebandy.",["toco","entreno"],"entreno","🏑",M("In my free time I train floorball.","På min fritid tränar jag innebandy.")],
    ["Toco ___ batería.",["el","la"],"la","🥁",M("I play the drums.","Jag spelar trummor.")],
    ["Toco ___ violín.",["el","la"],"el","🎻",M("I play the violin.","Jag spelar fiol.")],
    ["¿Qué ___ en tu tiempo libre?",["haces","hago"],"haces","❓",M("What do you do in your free time?","Vad gör du på din fritid?")]
  ],
  qa:[
    ["¿Qué haces en tu tiempo libre?","En mi tiempo libre juego videojuegos."],
    ["¿Qué te gusta hacer en tu tiempo libre?","Me gusta estar con amigos."],
    ["¿Tocas algún instrumento?","Sí, toco la batería."],
    ["¿Entrenas algún deporte?","Sí, entreno karate dos veces a la semana."],
    ["¿Te gusta montar a caballo?","No, no me gusta."],
    ["¿Qué haces los fines de semana?","Duermo mucho y veo series."]
  ]
});
