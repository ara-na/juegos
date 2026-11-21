/* =========================================================
   VIDEOTECA EN ESPAÑOL · «Mira y piensa» (watch/?lang=es)
   Primera selección para revisar (21 nov 2026). Mismo formato que videos.js.
   Preguntas: [español, svenska, English].
   · cat: "historias", "gente", "animales", "cultura"
   · lvl: nivel aproximado (A1, A2, B1…)
   · noembed:true si el canal no deja verlo dentro de la página (se abre en YouTube)
   · hidden:true para retirar un vídeo sin borrarlo
   ========================================================= */
CATS = {historias:"🧩 Historias fáciles", gente:"🎤 En la calle", animales:"🐾 Animales y ciencia", cultura:"🌎 Cultura"};

DEFAULT_Q = {
  historias:{pre:["Mira el título y la imagen. ¿De qué trata el vídeo?","Titta på titeln och bilden. Vad handlar videon om?","Look at the title and the picture. What is the video about?"],
    think:[["¿Qué palabras en español has entendido? Escribe tres.","Vilka spanska ord förstod du? Skriv tre.","Which Spanish words did you understand? Write three."],
           ["¿Qué pasa en el vídeo? Cuéntalo en tres pasos.","Vad händer i videon? Berätta i tre steg.","What happens in the video? Tell it in three steps."],
           ["¿Te ha gustado? ¿Por qué?","Gillade du den? Varför?","Did you like it? Why?"]]},
  gente:{pre:["¿Qué crees que van a responder las personas?","Vad tror du att personerna svarar?","What do you think the people will answer?"],
    think:[["Escribe dos cosas que dicen las personas.","Skriv två saker som personerna säger.","Write two things the people say."],
           ["¿Qué respuesta se parece a la tuya?","Vilket svar liknar ditt?","Which answer is like yours?"],
           ["Responde tú a la pregunta del vídeo, en español.","Svara själv på frågan i videon, på spanska.","Answer the question in the video yourself, in Spanish."]]},
  animales:{pre:["¿Qué animal crees que vas a ver?","Vilket djur tror du att du får se?","Which animal do you think you will see?"],
    think:[["¿Qué animal te ha gustado más? ¿Cómo es?","Vilket djur gillade du mest? Hur ser det ut?","Which animal did you like most? What is it like?"],
           ["Escribe una palabra nueva en español.","Skriv ett nytt spanskt ord.","Write a new Spanish word."],
           ["¿Qué dato te ha sorprendido?","Vilken fakta överraskade dig?","Which fact surprised you?"]]},
  cultura:{pre:["¿Qué sabes de este tema?","Vad vet du om det här?","What do you know about this?"],
    think:[["¿Qué es diferente en Suecia?","Vad är annorlunda i Sverige?","What is different in Sweden?"],
           ["¿Qué te ha sorprendido?","Vad överraskade dig?","What surprised you?"],
           ["Escribe una frase útil del vídeo.","Skriv en användbar mening från videon.","Write a useful sentence from the video."]]}
};

VIDEOS = [
  /* Dreaming Spanish · Superbeginner: el significado va en las imágenes y los gestos (A1) */
  {id:"HUH85APB9PM", t:"Fast Things – Superbeginner Spanish", ch:"Dreaming Spanish", noembed:true, cat:"historias", min:"3:11", lvl:"A1", added:"2026-11-21",
   pre:["¿Qué cosas son rápidas? Di tres.","Vilka saker är snabba? Säg tre.","Which things are fast? Say three."]},
  {id:"TvU1vLowwYk", t:"My Head – Superbeginner Spanish", ch:"Dreaming Spanish", noembed:true, cat:"historias", min:"3:19", lvl:"A1", added:"2026-11-21",
   pre:["¿Qué partes de la cabeza sabes decir en español?","Vilka delar av huvudet kan du säga på spanska?","Which parts of the head can you say in Spanish?"]},
  {id:"4tUEXGXmTng", t:"My Daily Routine – Superbeginner Spanish", ch:"Dreaming Spanish", noembed:true, cat:"historias", min:"5:25", lvl:"A1", added:"2026-11-21",
   pre:["¿Qué haces tú por la mañana?","Vad gör du på morgonen?","What do you do in the morning?"],
   think:[["¿Qué hace la persona por la mañana? Escribe dos verbos.","Vad gör personen på morgonen? Skriv två verb.","What does the person do in the morning? Write two verbs."],
          ["¿Qué hace igual que tú?","Vad gör hen likadant som du?","What does the person do the same as you?"],
          ["Cuenta tu rutina en tres frases: «Me levanto…»","Berätta om din rutin i tre meningar.","Tell your routine in three sentences."]]},
  {id:"jDPGnj1DAg4", t:"Easy Spanish Story: The Coffee Shop", ch:"Dreaming Spanish", noembed:true, cat:"historias", min:"7:53", lvl:"A1", added:"2026-11-21"},
  {id:"aelWcJxodNw", t:"A1 Spanish Story: A smart idea for an even smarter monkey", ch:"Dreaming Spanish", noembed:true, cat:"historias", min:"5:14", lvl:"A1", added:"2026-11-21"},
  {id:"OrszUmEdk4Y", t:"Guess who's older: Celebrity Edition", ch:"Dreaming Spanish", noembed:true, cat:"historias", min:"8:29", lvl:"A1–A2", added:"2026-11-21",
   pre:["¿Cómo se dice «Hur gammal är hon?» en español?","Hur säger man «Hur gammal är hon?» på spanska?","How do you say «How old is she?» in Spanish?"],
   think:[["¿Has adivinado bien? ¿Cuántas veces?","Gissade du rätt? Hur många gånger?","Did you guess right? How many times?"],
          ["Escribe un número grande que has oído.","Skriv ett stort tal som du hörde.","Write a big number you heard."],
          ["¿Cuántos años tiene tu famoso favorito? Escríbelo en español.","Hur gammal är din favoritkändis? Skriv på spanska.","How old is your favourite celebrity? Write it in Spanish."]]},
  {id:"rYAeNmqj2Y8", t:"What's Longer? – Superbeginner Spanish", ch:"Dreaming Spanish", noembed:true, cat:"historias", min:"10:04", lvl:"A1", added:"2026-11-21", long:true},
  {id:"Iup1-H1ryes", t:"Polite and Impolite in Spain – Spanish Culture #28", ch:"Dreaming Spanish", noembed:true, cat:"cultura", min:"5:08", lvl:"A1–A2", added:"2026-11-21",
   pre:["¿Qué es «educado» en Suecia? Da un ejemplo.","Vad är artigt i Sverige? Ge ett exempel.","What is polite in Sweden? Give an example."]},
  /* Easy Spanish · entrevistas en la calle con subtítulos en español e inglés en la imagen */
  {id:"Py3pD4_B9lg", t:"HOBBIES | Easy Spanish 84", ch:"Easy Spanish", cat:"gente", min:"9:19", lvl:"A2", added:"2026-11-21",
   pre:["¿Qué hobbies crees que van a decir?","Vilka hobbyer tror du att de säger?","Which hobbies do you think they will say?"]},
  {id:"2WGnDrVPG8A", t:"How Do Barcelona Locals Spend their Free Time? | Easy Spanish 375", ch:"Easy Spanish", cat:"gente", min:"10:50", lvl:"B1", added:"2026-11-21", long:true},
  {id:"fcYeXCacyrk", t:"Do Barcelona Locals Prefer Coffee or Tea? | Easy Spanish 354", ch:"Easy Spanish", cat:"gente", min:"9:41", lvl:"B1", added:"2026-11-21",
   pre:["¿Café o té? ¿Qué crees que prefiere la gente en Barcelona?","Kaffe eller te? Vad tror du att folk i Barcelona föredrar?","Coffee or tea? What do you think people in Barcelona prefer?"]},
  /* CuriosaMente · divulgación animada, habla nativa rápida, subtítulos en español (B1–B2: MYP3–4, åk9) */
  {id:"lXtDWYcPbXY", t:"Los 12 animales más curiosos", ch:"CuriosaMente", cat:"animales", min:"6:45", lvl:"B1–B2", added:"2026-11-21"},
  {id:"4BqijA_VZbA", t:"12 animales chistosos (que parecen una broma de la naturaleza)", ch:"CuriosaMente", cat:"animales", min:"8:37", lvl:"B1–B2", added:"2026-11-21"},
  {id:"VbN31G-TOnA", t:"¿Te ama tu mascota?", ch:"CuriosaMente", cat:"animales", min:"7:18", lvl:"B1–B2", added:"2026-11-21",
   pre:["¿Tu mascota te quiere? ¿Cómo lo sabes?","Älskar ditt husdjur dig? Hur vet du det?","Does your pet love you? How do you know?"],
   think:[["¿Qué mascotas salen en el vídeo?","Vilka husdjur är med i videon?","Which pets are in the video?"],
          ["Escribe una palabra nueva en español.","Skriv ett nytt spanskt ord.","Write a new Spanish word."],
          ["Describe una mascota que conoces: «Mi perro es…»","Beskriv ett husdjur du känner.","Describe a pet you know."]]},
  {id:"1qARSFf6DhE", t:"¿Cómo cambian de color los animales?", ch:"CuriosaMente", cat:"animales", min:"7:33", lvl:"B1–B2", added:"2026-11-21",
   pre:["¿Qué animal cambia de color? Di uno.","Vilket djur byter färg? Säg ett.","Which animal changes colour? Say one."],
   think:[["¿Qué colores has oído en español?","Vilka färger hörde du på spanska?","Which colours did you hear in Spanish?"],
          ["¿Por qué cambian de color los animales?","Varför byter djuren färg?","Why do animals change colour?"],
          ["Si pudieras cambiar de color, ¿qué color elegirías?","Om du kunde byta färg, vilken skulle du välja?","If you could change colour, which would you choose?"]]}
];
