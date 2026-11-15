UNIT("es-restaurante", {
  icon:"🍽️", title:"¡Buen provecho!",
  sub:{en:"Food, ordering in a restaurant, recipes, soler + infinitive", sv:"Mat, beställa på restaurang, recept, soler + infinitiv"},
  topics:{
    comida:{icon:"🥘", name:{en:"Food & drink", sv:"Mat & dryck"}, items:[
      ["el pan","🍞"],["el queso","🧀"],["la carne","🍖"],["el pollo","🍗"],["el pescado","🐟"],["el arroz","🍚"],["la ensalada","🥗"],
      ["la sopa","🍲"],["las patatas fritas","🍟"],["el huevo","🥚"],["el tomate","🍅"],["la paella","🥘"],["el postre","🍰"],
      ["el zumo","🧃"],["el café","☕"]]},
    restaurante:{icon:"🍽️", name:{en:"At the restaurant", sv:"På restaurangen"}, items:[
      ["la carta",M("the menu","menyn")],["la cuenta",M("the bill","notan")],["el camarero",M("waiter","servitör")],
      ["de primero",M("as a starter","till förrätt")],["de segundo",M("as a main course","till huvudrätt")],["de postre",M("for dessert","till efterrätt")],
      ["para beber",M("to drink","att dricka")],["quisiera",M("I would like","jag skulle vilja ha")],["la mesa",M("table","bord")],
      ["el plato",M("dish / plate","rätt / tallrik")],["¡Buen provecho!",M("Enjoy your meal!","Smaklig måltid!")],["está muy rico",M("it's delicious","det är jättegott")]]},
    receta:{icon:"🔪", name:{en:"Recipe verbs", sv:"Verb i recept"}, items:[
      ["cortar","🔪"],["mezclar",M("to mix","blanda")],["freír","🍳"],["hervir",M("to boil","koka")],["añadir",M("to add","tillsätta")],
      ["pelar",M("to peel","skala")],["poner",M("to put","lägga")],["servir",M("to serve","servera")]]}
  },
  sentences:[
    ["Quisiera una mesa para dos , por favor .","🍽️"],["De primero quiero sopa .","🍲"],["¿Qué vas a tomar ?","❓"],
    ["La cuenta , por favor .","💶"],["Para beber , agua sin gas .","💧"],["Suelo desayunar pan con tomate .","🍞"],
    ["Tienes que cortar las patatas .","🔪"],["La paella está muy rica .","🥘"],["No como carne , soy vegetariano .","🥗"],
    ["¿Me trae la carta , por favor ?","📋"]
  ],
  gaps:[
    ["___ una ensalada, por favor.",["Quisiera","Quisieras"],"Quisiera","🥗",M("I would like a salad, please.","Jag skulle vilja ha en sallad, tack.")],
    ["De ___ quiero pollo con patatas.",["segundo","postre"],"segundo","🍗",M("As a main course I want chicken and potatoes.","Till huvudrätt vill jag ha kyckling med potatis.")],
    ["La ___, por favor.",["cuenta","carta"],"cuenta","💶",M("The bill, please.","Notan, tack.")],
    ["Yo ___ cenar a las ocho.",["suelo","suele"],"suelo","🕗",M("I usually have dinner at eight.","Jag brukar äta middag klockan åtta.")],
    ["Mis padres ___ comer pescado.",["solemos","suelen"],"suelen","🐟",M("My parents usually eat fish.","Mina föräldrar brukar äta fisk.")],
    ["Primero tienes que ___ las patatas.",["pelar","pelas"],"pelar","🥔",M("First you have to peel the potatoes.","Först måste du skala potatisen.")],
    ["La sopa ___ muy rica.",["es","está"],"está","🍲",M("The soup is delicious.","Soppan är jättegod.")],
    ["¿Qué ___ de postre?",["quieres","quiero"],"quieres","🍰",M("What do you want for dessert?","Vad vill du ha till efterrätt?")],
    ["Me ___ mucho la paella.",["gusta","gustan"],"gusta","🥘",M("I really like paella.","Jag gillar paella jättemycket.")],
    ["Me encantan ___ patatas fritas.",["los","las"],"las","🍟",M("I love chips.","Jag älskar pommes frites.")]
  ],
  qa:[
    ["¿Qué va a tomar de primero?","De primero, una ensalada mixta."],["¿Y para beber?","Agua sin gas, por favor."],
    ["¿Qué sueles desayunar?","Suelo desayunar cereales con leche."],["¿Algo de postre?","Sí, un flan, por favor."],
    ["¿Qué tal la comida?","¡Está muy rica, gracias!"],["¿Cómo se hace la tortilla?","Tienes que freír patatas y huevos."]
  ]
});
