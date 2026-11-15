UNIT("es-mi-barrio", {
  icon:"🏘️", title:"Mi barrio",
  sub:{en:"Places in town, school things, querer / poder / tener que, invitations", sv:"Platser i stan, skolsaker, querer / poder / tener que, inbjudningar"},
  topics:{
    lugares:{icon:"🏘️", name:{en:"Places in town", sv:"Platser i stan"}, items:[
      ["el parque","🌳"],["la tienda","🏪"],["el supermercado","🧺"],["la biblioteca","📚"],["el cine","🎬"],["la piscina","🏊"],
      ["el restaurante","🍴"],["la estación","🚉"],["el hospital","🏥"],["la iglesia","⛪"],["la plaza","⛲"],["el museo","🏛️"],
      ["la farmacia","💊"],["el polideportivo","🏟️"],["la parada de autobús","🚏"]]},
    colegio:{icon:"🎒", name:{en:"School things", sv:"Skolsaker"}, items:[
      ["el lápiz","✏️"],["el bolígrafo","🖊️"],["la mochila","🎒"],["el cuaderno","📓"],["el libro","📖"],["la regla","📏"],
      ["las tijeras","✂️"],["el ordenador","💻"],["la calculadora","🧮"],["la goma",M("eraser","suddgummi")],
      ["la pizarra",M("whiteboard","tavla")],["el estuche",M("pencil case","pennskrin")]]},
    verbos:{icon:"🔁", name:{en:"Stem-changing verbs", sv:"Verb med vokaländring"}, items:[
      ["querer",M("to want","vilja")],["poder",M("can / to be able to","kunna")],["tener que",M("to have to","måste")],
      ["dormir","😴"],["volver",M("to come back","komma tillbaka")],["empezar",M("to start","börja")],["pensar","🤔"],
      ["entender",M("to understand","förstå")],["preferir",M("to prefer","föredra")],["jugar","⚽"]]}
  },
  sentences:[
    ["¿Quieres ir al cine ?","🎬"],["No puedo , tengo que estudiar .","📚"],["En mi barrio hay un parque .","🌳"],
    ["La farmacia está cerca .","💊"],["¿Puedes venir a mi casa ?","🏠"],["Vale , ¡qué buena idea !","👍"],
    ["Tengo que hacer los deberes .","📓"],["Quiero una mochila nueva .","🎒"],["Mi hermano duerme mucho .","😴"],["No entiendo la pregunta .","❓"]
  ],
  gaps:[
    ["¿___ ir al parque?",["Quieres","Quiero"],"Quieres","🌳",M("Do you want to go to the park?","Vill du gå till parken?")],
    ["No ___ ir, estoy enfermo.",["puedo","puedes"],"puedo","🤒",M("I can't go, I'm ill.","Jag kan inte gå, jag är sjuk.")],
    ["Tengo ___ estudiar.",["que","de"],"que","📚",M("I have to study.","Jag måste plugga.")],
    ["Yo ___ ocho horas.",["duermo","dormo"],"duermo","😴",M("I sleep eight hours.","Jag sover åtta timmar.")],
    ["¿___ jugar al fútbol?",["Puedes","Podes"],"Puedes","⚽",M("Can you play football?","Kan du spela fotboll?")],
    ["Nosotros ___ ir a la playa.",["queremos","quieremos"],"queremos","🏖️",M("We want to go to the beach.","Vi vill åka till stranden.")],
    ["Ella ___ a casa a las cinco.",["vuelve","volve"],"vuelve","🏠",M("She comes home at five.","Hon kommer hem klockan fem.")],
    ["En mi barrio ___ una piscina.",["hay","está"],"hay","🏊",M("There is a pool in my neighbourhood.","Det finns en simhall i mitt område.")],
    ["La estación ___ cerca.",["hay","está"],"está","🚉",M("The station is close.","Stationen ligger nära.")],
    ["La clase ___ a las ocho.",["empieza","empeza"],"empieza","🏫",M("The lesson starts at eight.","Lektionen börjar klockan åtta.")]
  ],
  qa:[
    ["¿Quieres ir al cine el sábado?","Lo siento, no puedo."],["¿Qué hay en tu barrio?","Hay un parque y un supermercado."],
    ["¿Dónde está la biblioteca?","Está al lado de la plaza."],["¿Qué tienes que hacer hoy?","Tengo que hacer los deberes."],
    ["¿Puedes venir a mi fiesta?","¡Sí, claro! ¡Qué buena idea!"],["¿Qué hay en tu mochila?","Hay un libro, un cuaderno y un estuche."]
  ]
});
