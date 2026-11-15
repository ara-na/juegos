UNIT("es-describir", {
  icon:"🕵️", title:"¿Cómo es?",
  sub:{en:"Describing people: es / tiene / lleva", sv:"Beskriva personer: es / tiene / lleva"},
  topics:{
    personas:{icon:"👥", name:{en:"People", sv:"Personer"}, items:[
      ["el chico","👦"],["la chica","👧"],["el hombre","👨"],["la mujer","👩"],["el niño","🧒"],["el señor mayor","👴"],
      ["la señora mayor","👵"],["el policía","👮"],["el ladrón","🦹"],["el detective","🕵️"]]},
    como:{icon:"🧍", name:{en:"What is he/she like? (es)", sv:"Hur är hen? (es)"}, items:[
      ["alto",M("tall","lång")],["bajo",M("short","kort")],["delgado",M("slim","smal")],["fuerte",M("strong","stark")],
      ["joven",M("young","ung")],["mayor",M("old","gammal")],["guapo",M("good-looking","snygg")],["rubio",M("blond","blond")],
      ["moreno",M("dark-haired","mörkhårig")],["pelirrojo",M("red-haired","rödhårig")],["simpático",M("nice","trevlig")]]},
    tiene:{icon:"🧔", name:{en:"Hair, eyes, face (tiene / lleva)", sv:"Hår, ögon, ansikte (tiene / lleva)"}, items:[
      ["el pelo largo",M("long hair","långt hår")],["el pelo corto",M("short hair","kort hår")],["el pelo rizado",M("curly hair","lockigt hår")],
      ["el pelo liso",M("straight hair","rakt hår")],["los ojos azules",M("blue eyes","blå ögon")],["los ojos marrones",M("brown eyes","bruna ögon")],
      ["la barba","🧔"],["el bigote",M("moustache","mustasch")],["las gafas","👓"],["la nariz","👃"],["la boca","👄"],["las orejas","👂"]]}
  },
  sentences:[
    ["Es alto y delgado .","🧍"],["Tiene el pelo largo .","👩"],["Tiene los ojos azules .","👁️"],["Lleva gafas .","👓"],
    ["El ladrón tiene barba .","🧔"],["La chica es rubia .","👱‍♀️"],["Mi padre es bajo y fuerte .","👨"],
    ["Lleva una gorra negra .","🧢"],["¿Cómo es tu hermana ?","❓"],["Ella tiene el pelo rizado .","👩‍🦱"]
  ],
  gaps:[
    ["Pablo ___ alto.",["es","tiene","lleva"],"es","🧍",M("Pablo is tall.","Pablo är lång.")],
    ["Lucía ___ el pelo corto.",["es","tiene","lleva"],"tiene","👩",M("Lucía has short hair.","Lucía har kort hår.")],
    ["Marta ___ gafas.",["es","tiene","lleva"],"lleva","👓",M("Marta wears glasses.","Marta har glasögon.")],
    ["El ladrón ___ barba.",["es","tiene"],"tiene","🧔",M("The thief has a beard.","Tjuven har skägg.")],
    ["Ella es ___.",["rubio","rubia"],"rubia","👱‍♀️",M("She is blond.","Hon är blond.")],
    ["Los chicos son ___.",["alto","altos"],"altos","👦👦",M("The boys are tall.","Pojkarna är långa.")],
    ["Tiene los ojos ___.",["azul","azules"],"azules","👁️",M("He/she has blue eyes.","Hen har blå ögon.")],
    ["Es una chica muy ___.",["alta","alto"],"alta","👧",M("She is a very tall girl.","Hon är en väldigt lång tjej.")],
    ["___ hombre lleva un sombrero.",["El","La"],"El","🎩",M("The man is wearing a hat.","Mannen har en hatt.")],
    ["Mi madre ___ joven.",["es","tiene"],"es","👩",M("My mother is young.","Min mamma är ung.")]
  ],
  qa:[
    ["¿Cómo es el ladrón?","Es alto y tiene barba."],["¿De qué color tiene los ojos?","Tiene los ojos marrones."],
    ["¿Cómo tiene el pelo?","Tiene el pelo largo y rizado."],["¿Qué lleva?","Lleva una chaqueta negra y gafas."],
    ["¿Es alta tu hermana?","No, es bastante baja."],["¿Cómo eres tú?","Soy moreno y tengo los ojos verdes."]
  ]
});
