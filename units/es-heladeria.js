UNIT("es-heladeria", {
  icon:"🍦", title:"¡Un helado, por favor!",
  sub:{en:"Ice cream, colours, buying things, prices", sv:"Glass, färger, handla, priser"},
  topics:{
    colores:{icon:"🎨", name:{en:"Colours", sv:"Färger"}, items:COLORES},
    helados:{icon:"🍦", name:{en:"Ice cream & snacks", sv:"Glass & fika"}, items:[
      ["el helado","🍦"],["el cucurucho",M("cone","strut")],["la tarrina",M("tub / cup","bägare")],["la fresa","🍓"],
      ["el chocolate","🍫"],["la vainilla",M("vanilla","vanilj")],["el limón","🍋"],["el plátano","🍌"],["la naranja","🍊"],
      ["el agua","💧"],["el refresco","🥤"],["el zumo","🧃"],["la galleta","🍪"]]},
    comprar:{icon:"🛒", name:{en:"Shopping", sv:"Handla"}, items:[
      ["quiero",M("I want","jag vill ha")],["¿cuánto cuesta?",M("How much is it?","Hur mycket kostar det?")],
      ["cuesta",M("it costs","det kostar")],["el euro","💶"],["por favor",M("please","snälla")],["gracias",M("thank you","tack")],
      ["aquí tienes",M("here you are","varsågod")],["¿algo más?",M("anything else?","något mer?")],
      ["nada más",M("nothing else","inget mer")],["grande",M("big","stor")],["pequeño",M("small","liten")]]}
  },
  sentences:[
    ["Quiero un helado de fresa .","🍓"],["¿Cuánto cuesta ?","💶"],["Cuesta dos euros .","💶"],
    ["Un cucurucho de chocolate , por favor .","🍫"],["Mi color favorito es el azul .","💙"],["El limón es amarillo .","🍋"],
    ["¿Quieres una tarrina ?","❓"],["Aquí tienes .","🤲"],["Nada más , gracias .","🙂"],["Quiero un zumo de naranja .","🧃"]
  ],
  gaps:[
    ["Quiero ___ helado.",["un","una"],"un","🍦",M("I want an ice cream.","Jag vill ha en glass.")],
    ["Quiero ___ tarrina.",["un","una"],"una","🍨",M("I want a tub.","Jag vill ha en bägare.")],
    ["Un helado ___ chocolate.",["de","la","es"],"de","🍫",M("A chocolate ice cream.","En chokladglass.")],
    ["El limón es ___.",["amarillo","azul","negro"],"amarillo","🍋",M("The lemon is yellow.","Citronen är gul.")],
    ["La fresa es ___.",["roja","rojo"],"roja","🍓",M("The strawberry is red.","Jordgubben är röd.")],
    ["Yo ___ un cucurucho.",["quiero","quieres"],"quiero","🙋",M("I want a cone.","Jag vill ha en strut.")],
    ["¿___ una galleta?",["Quieres","Quiero"],"Quieres","🍪",M("Do you want a biscuit?","Vill du ha en kaka?")],
    ["Cuesta tres ___.",["euros","euro"],"euros","💶",M("It costs three euros.","Det kostar tre euro.")],
    ["¿Cuánto ___ el helado?",["cuesta","quiero"],"cuesta","💶",M("How much is the ice cream?","Hur mycket kostar glassen?")],
    ["No, nada ___, gracias.",["más","menos"],"más","🙂",M("No, nothing else, thanks.","Nej, inget mer, tack.")]
  ],
  qa:[
    ["¿Qué quieres?","Quiero un helado de vainilla."],["¿Cuánto cuesta?","Cuesta dos euros."],
    ["¿Tarrina o cucurucho?","Un cucurucho, por favor."],["¿Algo más?","No, nada más, gracias."],
    ["¿Cuál es tu color favorito?","Mi color favorito es el verde."],["¿De qué sabor?","De fresa y chocolate."]
  ]
});
