UNIT("es-de-donde-eres", {
  icon:"🌍", title:"¿De dónde eres?",
  sub:{en:"Greetings, countries, languages, numbers 0–20", sv:"Hälsningar, länder, språk, siffror 0–20"},
  topics:{
    saludos:{icon:"👋", name:{en:"Greetings", sv:"Hälsningar"}, items:[
      ["hola",M("Hello","Hej")],["adiós",M("Goodbye","Hej då")],["buenos días",M("Good morning","God morgon")],
      ["buenas tardes",M("Good afternoon","God eftermiddag")],["buenas noches",M("Good night","God natt")],
      ["hasta luego",M("See you later","Vi ses")],["gracias",M("Thank you","Tack")],["por favor",M("Please","Snälla")],
      ["¿qué tal?",M("How are you?","Hur mår du?")],["muy bien",M("Very good","Mycket bra")],
      ["me llamo…",M("My name is…","Jag heter…")],["sí",M("Yes","Ja")],["no",M("No","Nej")]]},
    paises:{icon:"🌍", name:{en:"Countries", sv:"Länder"}, items:[
      ["Suecia",M("Sweden","Sverige")],["España",M("Spain","Spanien")],["México",M("Mexico","Mexiko")],
      ["Argentina",M("Argentina","Argentina")],["Colombia",M("Colombia","Colombia")],["Perú",M("Peru","Peru")],
      ["Chile",M("Chile","Chile")],["Cuba",M("Cuba","Kuba")],["Inglaterra",M("England","England")],
      ["Francia",M("France","Frankrike")],["Alemania",M("Germany","Tyskland")],["Noruega",M("Norway","Norge")],
      ["Estados Unidos",M("USA","USA")]]},
    idiomas:{icon:"🗣️", name:{en:"Languages", sv:"Språk"}, items:[
      ["sueco",M("Swedish","svenska")],["español",M("Spanish","spanska")],["inglés",M("English","engelska")],
      ["francés",M("French","franska")],["alemán",M("German","tyska")],["árabe",M("Arabic","arabiska")],
      ["noruego",M("Norwegian","norska")],["chino",M("Chinese","kinesiska")],["italiano",M("Italian","italienska")],
      ["portugués",M("Portuguese","portugisiska")]]},
    numeros:{icon:"🔢", name:{en:"Numbers 0–20", sv:"Siffror 0–20"}, items:[
      ["cero",{n:0}],["uno",{n:1}],["dos",{n:2}],["tres",{n:3}],["cuatro",{n:4}],["cinco",{n:5}],["seis",{n:6}],
      ["siete",{n:7}],["ocho",{n:8}],["nueve",{n:9}],["diez",{n:10}],["once",{n:11}],["doce",{n:12}],["trece",{n:13}],
      ["catorce",{n:14}],["quince",{n:15}],["dieciséis",{n:16}],["diecisiete",{n:17}],["dieciocho",{n:18}],
      ["diecinueve",{n:19}],["veinte",{n:20}]]}
  },
  sentences:[
    ["Me llamo Ana .","👋"],["¿Cómo te llamas ?","❓"],["Soy de Suecia .",M("I'm from Sweden.","Jag kommer från Sverige.")],
    ["¿De dónde eres ?","🌍"],["Tengo doce años .",{n:12}],["¿Cuántos años tienes ?","🎂"],
    ["Hablo sueco e inglés .","🗣️"],["Ella es de México .","👩"],["No hablo francés .","🙅"],["Vivo en Karlskrona .","🏠"]
  ],
  gaps:[
    ["Me ___ Lucas.",["llamo","llamas"],"llamo","👦",M("My name is Lucas.","Jag heter Lucas.")],
    ["¿Cómo te ___?",["llamo","llamas"],"llamas","❓",M("What's your name?","Vad heter du?")],
    ["Yo ___ de Suecia.",["soy","eres","es"],"soy","🙋",M("I'm from Sweden.","Jag kommer från Sverige.")],
    ["¿De dónde ___ tú?",["soy","eres","es"],"eres","🌍",M("Where are you from?","Var kommer du ifrån?")],
    ["Ella ___ de México.",["soy","eres","es"],"es","👩",M("She is from Mexico.","Hon kommer från Mexiko.")],
    ["Yo ___ trece años.",["tengo","tienes","tiene"],"tengo","🎂",M("I am 13.","Jag är 13 år.")],
    ["¿Cuántos años ___ tú?",["tengo","tienes","tiene"],"tienes","❓",M("How old are you?","Hur gammal är du?")],
    ["Hablo ___.",["sueco","Suecia"],"sueco","🗣️",M("I speak Swedish.","Jag pratar svenska.")],
    ["Soy de ___.",["España","español"],"España","🌍",M("I'm from Spain.","Jag kommer från Spanien.")],
    ["Yo ___ hablo chino.",["no","sí"],"no","🙅",M("I don't speak Chinese.","Jag pratar inte kinesiska.")]
  ],
  qa:[
    ["¿Cómo te llamas?","Me llamo Leo."],["¿De dónde eres?","Soy de Suecia."],["¿Cuántos años tienes?","Tengo trece años."],
    ["¿Qué tal?","Muy bien, gracias."],["¿Qué idiomas hablas?","Hablo sueco e inglés."],["¿Dónde vives?","Vivo en Karlskrona."]
  ]
});
