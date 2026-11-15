UNIT("es-mi-familia", {
  icon:"👨‍👩‍👧", title:"Mi familia",
  sub:{en:"Family, age, pets", sv:"Familj, ålder, husdjur"},
  topics:{
    familia:{icon:"👪", name:{en:"Family", sv:"Familj"}, items:[
      ["el padre","👨"],["la madre","👩"],["el hermano","👦"],["la hermana","👧"],["el abuelo","👴"],["la abuela","👵"],
      ["el bebé","👶"],["los padres","👫"],["el tío",M("uncle","farbror/morbror")],["la tía",M("aunt","faster/moster")],
      ["el primo",M("cousin (boy)","kusin (pojke)")],["la prima",M("cousin (girl)","kusin (flicka)")]]},
    mascotas:{icon:"🐶", name:{en:"Pets", sv:"Husdjur"}, items:[
      ["el perro","🐶"],["el gato","🐱"],["el pez","🐟"],["el pájaro","🐦"],["el hámster","🐹"],["el conejo","🐰"],
      ["el caballo","🐴"],["la tortuga","🐢"],["la serpiente","🐍"],["el ratón","🐭"]]},
    numeros:{icon:"🔢", name:{en:"Numbers 0–20", sv:"Siffror 0–20"}, items:[
      ["uno",{n:1}],["tres",{n:3}],["cinco",{n:5}],["siete",{n:7}],["nueve",{n:9}],["diez",{n:10}],["once",{n:11}],
      ["doce",{n:12}],["trece",{n:13}],["catorce",{n:14}],["quince",{n:15}],["dieciséis",{n:16}],["dieciocho",{n:18}],["veinte",{n:20}]]}
  },
  sentences:[
    ["Tengo un hermano .","👦"],["Mi madre se llama Rosa .","👩"],["Tengo una hermana y un perro .","👧🐶"],
    ["Es el gato de Pablo .","🐱"],["Mi hermana tiene quince años .","👧"],["Mis abuelos son de España .","👴👵"],
    ["Su perro se llama Max .","🐶"],["No tengo hermanos .","🙅"],["¿Tienes mascota ?","🐹"],["Mi padre tiene un caballo .","👨🐴"]
  ],
  gaps:[
    ["Tengo ___ hermana.",["un","una"],"una","👧",M("I have a sister.","Jag har en syster.")],
    ["Tengo ___ perro.",["un","una"],"un","🐶",M("I have a dog.","Jag har en hund.")],
    ["___ padre se llama Juan.",["Mi","Tu","Su"],"Mi","👨",M("MY father is called Juan.","MIN pappa heter Juan.")],
    ["¿Cómo se llama ___ madre?",["mi","tu","su"],"tu","👩",M("What is YOUR mother called?","Vad heter DIN mamma?")],
    ["Pablo y ___ gato.",["mi","tu","su"],"su","🐱",M("Pablo and HIS cat.","Pablo och HANS katt.")],
    ["___ abuela es de Chile.",["El","La"],"La","👵",M("The grandmother is from Chile.","Mormor/farmor kommer från Chile.")],
    ["___ abuelo tiene un perro.",["El","La"],"El","👴",M("The grandfather has a dog.","Morfar/farfar har en hund.")],
    ["Es el perro ___ Ana.",["de","la","es"],"de","🐶",M("It's Ana's dog.","Det är Anas hund.")],
    ["Mi hermano ___ diez años.",["tengo","tienes","tiene"],"tiene","👦",M("My brother is 10.","Min bror är 10 år.")],
    ["¿___ hermanos?",["Tienes","Tengo"],"Tienes","❓",M("Do you have brothers or sisters?","Har du syskon?")]
  ],
  qa:[
    ["¿Tienes hermanos?","Sí, tengo una hermana."],["¿Tienes mascota?","Sí, tengo un gato."],
    ["¿Cómo se llama tu madre?","Se llama Eva."],["¿Cuántos años tiene tu hermano?","Tiene nueve años."],
    ["¿Cómo se llama tu perro?","Mi perro se llama Max."],["¿De dónde son tus abuelos?","Son de España."]
  ]
});
