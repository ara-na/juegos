/* =========================================================
   VIDEOTECA EN ESPAÑOL · «Mira y piensa» (watch/?lang=es)
   Segunda versión (21 nov 2026): solo A1–A2, por edad. Mismo formato que videos.js.
   Preguntas: [español, svenska, English].
   · cat: "historias", "palabras", "gente", "cultura"
   · lvl: nivel aproximado (máximo A2 en grundskolan)
   · edad: "jr" = åk6–7 y MYP1–2 (11–13 años) · "sr" = åk8–9 y MYP3–4 (14–16) · sin edad = para todos
   · noembed:true si el canal no deja verlo dentro de la página (se abre en YouTube)
   · hidden:true para retirar un vídeo sin borrarlo
   ========================================================= */
CATS = {historias:"🧩 Historias fáciles", palabras:"📚 Palabras útiles", gente:"🎤 Gente real", cultura:"🌎 Cultura"};

DEFAULT_Q = {
  historias:{pre:["Mira el título y la imagen. ¿De qué trata el vídeo?","Titta på titeln och bilden. Vad handlar videon om?","Look at the title and the picture. What is the video about?"],
    think:[["¿Qué palabras en español has entendido? Escribe tres.","Vilka spanska ord förstod du? Skriv tre.","Which Spanish words did you understand? Write three."],
           ["¿Qué pasa en el vídeo? Cuéntalo en tres pasos.","Vad händer i videon? Berätta i tre steg.","What happens in the video? Tell it in three steps."],
           ["¿Te ha gustado? ¿Por qué?","Gillade du den? Varför?","Did you like it? Why?"]]},
  gente:{pre:["¿Qué crees que van a responder las personas?","Vad tror du att personerna svarar?","What do you think the people will answer?"],
    think:[["Escribe dos cosas que dicen las personas.","Skriv två saker som personerna säger.","Write two things the people say."],
           ["¿Qué respuesta se parece a la tuya?","Vilket svar liknar ditt?","Which answer is like yours?"],
           ["Responde tú a la pregunta del vídeo, en español.","Svara själv på frågan i videon, på spanska.","Answer the question in the video yourself, in Spanish."]]},
  palabras:{pre:["¿Qué palabras de este tema sabes ya? Escribe tres.","Vilka ord om ämnet kan du redan? Skriv tre.","Which words on this topic do you already know? Write three."],
    think:[["Escribe cinco palabras nuevas del vídeo.","Skriv fem nya ord från videon.","Write five new words from the video."],
           ["¿Qué palabra se parece al sueco o al inglés?","Vilket ord liknar svenska eller engelska?","Which word looks like Swedish or English?"],
           ["Escribe una frase sobre ti con dos palabras nuevas.","Skriv en mening om dig själv med två nya ord.","Write a sentence about yourself with two new words."]]},
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
  /* ===== 🧒 11–13 años (åk6–7, MYP1–2) ===== */
  /* Dreaming Spanish · Superbeginner: el significado va en las imágenes y los gestos. Se abren en YouTube. */
  {id:"5JqCG5mKt38", t:"Meet Calcetín, Andrea's old friend", ch:"Dreaming Spanish", noembed:true, cat:"historias", min:"11:23", lvl:"A1", edad:"jr", long:true, added:"2026-11-21",
   pre:["¿Qué es un calcetín? ¿Cómo puede ser un amigo?","Vad är en «calcetín»? Hur kan den vara en vän?","What is a «calcetín»? How can it be a friend?"],
   think:[["¿Cómo es Calcetín? Escribe dos adjetivos.","Hur är Calcetín? Skriv två adjektiv.","What is Calcetín like? Write two adjectives."],
          ["¿Qué hacen Andrea y Calcetín? Cuéntalo en tres pasos.","Vad gör Andrea och Calcetín? Berätta i tre steg.","What do Andrea and Calcetín do? Tell it in three steps."],
          ["Dibuja tu propio calcetín-amigo y escribe su nombre y su edad.","Rita din egen strumpkompis och skriv namn och ålder.","Draw your own sock friend and write its name and age."]]},
  {id:"HUH85APB9PM", t:"Fast Things – Superbeginner Spanish", ch:"Dreaming Spanish", noembed:true, cat:"historias", min:"3:11", lvl:"A1", edad:"jr", added:"2026-11-21",
   pre:["¿Qué cosas son rápidas? Di tres.","Vilka saker är snabba? Säg tre.","Which things are fast? Say three."]},
  {id:"TvU1vLowwYk", t:"My Head – Superbeginner Spanish", ch:"Dreaming Spanish", noembed:true, cat:"historias", min:"3:19", lvl:"A1", edad:"jr", added:"2026-11-21",
   pre:["¿Qué partes de la cabeza sabes decir en español?","Vilka delar av huvudet kan du säga på spanska?","Which parts of the head can you say in Spanish?"]},
  {id:"aelWcJxodNw", t:"A smart idea for an even smarter monkey", ch:"Dreaming Spanish", noembed:true, cat:"historias", min:"5:14", lvl:"A1", edad:"jr", added:"2026-11-21"},
  {id:"rYAeNmqj2Y8", t:"What's Longer? – Superbeginner Spanish", ch:"Dreaming Spanish", noembed:true, cat:"historias", min:"10:04", lvl:"A1", edad:"jr", long:true, added:"2026-11-21"},
  {id:"HsyLh2H7-Hw", t:"Carlitos's bedtime story", ch:"Dreaming Spanish", noembed:true, cat:"historias", min:"9:58", lvl:"A1–A2", edad:"jr", added:"2026-11-21"},
  /* Easy Spanish · Super Easy Spanish: despacio, subtítulos en español e inglés en la imagen. Se ven dentro de la página. */
  {id:"SB0C-V1TuBI", t:"How to Say All the Colors in Spanish", ch:"Easy Spanish", cat:"palabras", min:"6:40", lvl:"A1", edad:"jr", added:"2026-11-21"},
  {id:"4EGgvSHmd5k", t:"Parts of the Body in Spanish", ch:"Easy Spanish", cat:"palabras", min:"5:26", lvl:"A1", edad:"jr", added:"2026-11-21"},

  /* ===== 🌍 Para todos ===== */
  {id:"4tUEXGXmTng", t:"My Daily Routine – Superbeginner Spanish", ch:"Dreaming Spanish", noembed:true, cat:"historias", min:"5:25", lvl:"A1", added:"2026-11-21",
   pre:["¿Qué haces tú por la mañana?","Vad gör du på morgonen?","What do you do in the morning?"],
   think:[["¿Qué hace la persona por la mañana? Escribe dos verbos.","Vad gör personen på morgonen? Skriv två verb.","What does the person do in the morning? Write two verbs."],
          ["¿Qué hace igual que tú?","Vad gör hen likadant som du?","What does the person do the same as you?"],
          ["Cuenta tu rutina en tres frases: «Me levanto…»","Berätta om din rutin i tre meningar.","Tell your routine in three sentences."]]},
  {id:"jDPGnj1DAg4", t:"Easy Spanish Story: The Coffee Shop", ch:"Dreaming Spanish", noembed:true, cat:"historias", min:"7:53", lvl:"A1", added:"2026-11-21"},
  {id:"OrszUmEdk4Y", t:"Guess who's older: Celebrity Edition", ch:"Dreaming Spanish", noembed:true, cat:"historias", min:"8:29", lvl:"A1–A2", added:"2026-11-21",
   pre:["¿Cómo se dice «Hur gammal är hon?» en español?","Hur säger man «Hur gammal är hon?» på spanska?","How do you say «How old is she?» in Spanish?"],
   think:[["¿Has adivinado bien? ¿Cuántas veces?","Gissade du rätt? Hur många gånger?","Did you guess right? How many times?"],
          ["Escribe un número grande que has oído.","Skriv ett stort tal som du hörde.","Write a big number you heard."],
          ["¿Cuántos años tiene tu famoso favorito? Escríbelo en español.","Hur gammal är din favoritkändis? Skriv på spanska.","How old is your favourite celebrity? Write it in Spanish."]]},
  {id:"S3sONA8UUDQ", t:"Counting in Spanish from 1 to 1000", ch:"Easy Spanish", cat:"palabras", min:"7:10", lvl:"A1", added:"2026-11-21",
   pre:["¿Hasta qué número sabes contar en español?","Hur långt kan du räkna på spanska?","How far can you count in Spanish?"]},
  {id:"A7diU_Sj1go", t:"Spanish Words You Didn't Realize You Knew!", ch:"Dreaming Spanish", noembed:true, cat:"palabras", min:"14:57", lvl:"A1–A2", long:true, added:"2026-11-21",
   pre:["¿Qué palabras en español usas ya sin saberlo? Di dos.","Vilka spanska ord använder du redan utan att veta det? Säg två.","Which Spanish words do you already use without knowing? Say two."]},

  /* ===== 🧑 14–16 años (åk8–9, MYP3–4) ===== */
  {id:"5YrrZ2RPmx4", t:"Andrea's life: Then vs Now", ch:"Dreaming Spanish", noembed:true, cat:"historias", min:"11:35", lvl:"A1–A2", edad:"sr", long:true, added:"2026-11-21",
   pre:["¿Cómo era tu vida hace cinco años? ¿Qué es diferente ahora?","Hur var ditt liv för fem år sedan? Vad är annorlunda nu?","What was your life like five years ago? What is different now?"],
   think:[["Escribe una cosa de «antes» y una de «ahora» de Andrea.","Skriv en sak från «förr» och en från «nu» om Andrea.","Write one «then» and one «now» thing about Andrea."],
          ["¿Qué ha cambiado más en su vida?","Vad har förändrats mest i hennes liv?","What has changed most in her life?"],
          ["Escribe sobre ti: «Antes… y ahora…»","Skriv om dig själv: «Antes… y ahora…»","Write about yourself: «Antes… y ahora…»"]]},
  {id:"SLgVwNulYhc", t:"Beginner Spanish Story: \"I Can't Go to School!\"", ch:"Dreaming Spanish", noembed:true, cat:"historias", min:"10:48", lvl:"A1–A2", edad:"sr", long:true, added:"2026-11-21",
   pre:["¿Por qué alguien no puede ir al colegio? Da una idea.","Varför kan någon inte gå till skolan? Ge en idé.","Why can't someone go to school? Give one idea."]},
  {id:"_7aY3qy1eEY", t:"I Had a Hater (But I Dealt With Him)", ch:"Dreaming Spanish", noembed:true, cat:"historias", min:"12:25", lvl:"A2", edad:"sr", long:true, added:"2026-11-21",
   pre:["¿Qué es un «hater»? ¿Qué harías tú?","Vad är en «hater»? Vad skulle du göra?","What is a «hater»? What would you do?"],
   think:[["¿Qué problema tiene la persona del vídeo?","Vilket problem har personen i videon?","What problem does the person in the video have?"],
          ["¿Qué hace para solucionarlo?","Vad gör hen för att lösa det?","What does the person do to solve it?"],
          ["¿Qué consejo darías tú? Escribe una frase en español.","Vilket råd skulle du ge? Skriv en mening på spanska.","What advice would you give? Write one sentence in Spanish."]]},
  {id:"JsGQizTuPSo", t:"Introduce Yourself in Slow Spanish", ch:"Easy Spanish", cat:"gente", min:"11:48", lvl:"A1", edad:"sr", long:true, added:"2026-11-21",
   think:[["Escribe tres datos de una persona del vídeo.","Skriv tre saker om en person i videon.","Write three facts about one person in the video."],
          ["¿Qué pregunta te parece más útil?","Vilken fråga verkar mest användbar?","Which question seems most useful?"],
          ["Preséntate tú en cuatro frases.","Presentera dig själv i fyra meningar.","Introduce yourself in four sentences."]]},
  {id:"_BY4j-QCbdU", t:"How Do Spanish Speakers Really Introduce Themselves?", ch:"Easy Spanish", cat:"gente", min:"7:15", lvl:"A1–A2", edad:"sr", added:"2026-11-21"},
  {id:"obRbyVMIQLo", t:"Pau's Morning Routine in Slow Spanish", ch:"Easy Spanish", cat:"gente", min:"6:36", lvl:"A1–A2", edad:"sr", added:"2026-11-21",
   pre:["¿Cómo es tu mañana un día de colegio?","Hur ser din morgon ut en skoldag?","What is your morning like on a school day?"]},
  {id:"oYBl3CcVmZ4", t:"Breakfast in Slow Spanish", ch:"Easy Spanish", cat:"cultura", min:"7:13", lvl:"A1–A2", edad:"sr", added:"2026-11-21",
   pre:["¿Qué desayunas tú? ¿Y qué crees que desayunan en España o México?","Vad äter du till frukost? Och i Spanien eller Mexiko?","What do you have for breakfast? And in Spain or Mexico?"]},
  {id:"bOshKjz0WsQ", t:"Clothes and Accessories in Slow Mexican Spanish", ch:"Easy Spanish", cat:"palabras", min:"6:35", lvl:"A1–A2", edad:"sr", added:"2026-11-21"},
  {id:"TXBxGtOqBps", t:"Slow Spanish Tour of a Small Town in Mexico", ch:"Easy Spanish", cat:"cultura", min:"7:20", lvl:"A1–A2", edad:"sr", added:"2026-11-21",
   pre:["¿Qué hay en un pueblo pequeño? Di tres lugares.","Vad finns i en liten stad? Säg tre platser.","What is there in a small town? Say three places."]},
  {id:"Iup1-H1ryes", t:"Polite and Impolite in Spain – Spanish Culture", ch:"Dreaming Spanish", noembed:true, cat:"cultura", min:"5:08", lvl:"A1–A2", edad:"sr", added:"2026-11-21",
   pre:["¿Qué es «educado» en Suecia? Da un ejemplo.","Vad är artigt i Sverige? Ge ett exempel.","What is polite in Sweden? Give an example."]}
];
