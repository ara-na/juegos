UNIT("es-ropa", {
  icon:"👕", title:"La ropa y los colores",
  sub:{en:"Clothes, colours, me gusta / me gustan, adjective agreement", sv:"Kläder, färger, me gusta / me gustan, adjektivens böjning"},
  topics:{
    ropa:{icon:"👕", name:{en:"Clothes", sv:"Kläder"}, items:[
      ["la camiseta","👕"],["los pantalones","👖"],["el vestido","👗"],["la falda",M("skirt","kjol")],["los zapatos","👞"],
      ["las zapatillas","👟"],["los calcetines","🧦"],["la chaqueta","🧥"],["la gorra","🧢"],["el sombrero","🎩"],
      ["la bufanda","🧣"],["los guantes","🧤"],["el jersey",M("jumper","tröja")],["las gafas","👓"],["el bolso","👜"]]},
    colores:{icon:"🎨", name:{en:"Colours", sv:"Färger"}, items:COLORES},
    numeros:{icon:"🔢", name:{en:"Numbers 20–100", sv:"Siffror 20–100"}, items:[
      ["veinte",{n:20}],["veinticinco",{n:25}],["treinta",{n:30}],["treinta y dos",{n:32}],["cuarenta",{n:40}],["cincuenta",{n:50}],
      ["sesenta",{n:60}],["setenta",{n:70}],["setenta y siete",{n:77}],["ochenta",{n:80}],["noventa",{n:90}],["cien",{n:100}]]}
  },
  sentences:[
    ["Me gusta la camiseta roja .","👕"],["Me gustan los zapatos negros .","👞"],["Llevo unos pantalones azules .","👖"],
    ["¿Te gusta el vestido ?","👗"],["No me gustan las gorras .","🧢"],["La chaqueta es verde .","🧥"],
    ["Los calcetines son blancos .","🧦"],["¿Cuánto cuesta la falda ?","💶"],["Mi color favorito es el morado .","💜"],
    ["Las zapatillas son nuevas .","👟"]
  ],
  gaps:[
    ["Me ___ la chaqueta.",["gusta","gustan"],"gusta","🧥",M("I like the jacket.","Jag gillar jackan.")],
    ["Me ___ las zapatillas.",["gusta","gustan"],"gustan","👟",M("I like the trainers.","Jag gillar gympaskorna.")],
    ["¿Te ___ los calcetines?",["gusta","gustan"],"gustan","🧦",M("Do you like the socks?","Gillar du strumporna?")],
    ["La camiseta es ___.",["rojo","roja"],"roja","👕",M("The T-shirt is red.","T-shirten är röd.")],
    ["Los pantalones son ___.",["negro","negros"],"negros","👖",M("The trousers are black.","Byxorna är svarta.")],
    ["Las gafas son ___.",["blancos","blancas"],"blancas","👓",M("The glasses are white.","Glasögonen är vita.")],
    ["El jersey es ___.",["amarilla","amarillo"],"amarillo","🟨",M("The jumper is yellow.","Tröjan är gul.")],
    ["Me gustan ___ zapatillas.",["los","las"],"las","👟",M("I like the trainers.","Jag gillar gympaskorna.")],
    ["Llevo ___ chaqueta verde.",["un","una"],"una","🧥",M("I'm wearing a green jacket.","Jag har på mig en grön jacka.")],
    ["La falda ___ azul.",["es","son"],"es","💙",M("The skirt is blue.","Kjolen är blå.")]
  ],
  qa:[
    ["¿Qué llevas hoy?","Llevo una camiseta y unos vaqueros."],["¿Te gusta la gorra?","Sí, me gusta mucho."],
    ["¿Te gustan los zapatos?","No, no me gustan."],["¿De qué color es la chaqueta?","Es verde."],
    ["¿Cuánto cuesta el vestido?","Cuesta treinta euros."],["¿Cuál es tu color favorito?","Mi color favorito es el azul."]
  ]
});
