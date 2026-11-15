/* El mazo de Fresca – card data
   Each deck = 8 characters × 4 parts = 32 part cards + 8 special cards.
   Colour of a part card = (character + part) % 4, so every character has one card of each colour
   and every colour has 8 cards (2 of each part) – balanced for ¡Chao pescao! (Uno).
   Challenge types:  {q:"question", h:"hint"}  ·  {v:"person · verb", t:"tense", a:"answer"}
   own:true = new challenge written by Claude (not from Ara's "Conversacionales Cartas") – please review. */

const PARTS = [
  {id:"cabeza", es:"la cabeza", sym:"●"},
  {id:"cuerpo", es:"el cuerpo", sym:"■"},
  {id:"piernas", es:"las piernas", sym:"▲"},
  {id:"complemento", es:"el complemento", sym:"★"}
];

/* Placeholder characters until Elliot's drawings arrive */
const CHARACTERS = [
  {name:"Fresca", img:"../img/fresca.webp"},
  {name:"Personaje 2"},{name:"Personaje 3"},{name:"Personaje 4"},
  {name:"Personaje 5"},{name:"Personaje 6"},{name:"Personaje 7"},{name:"Personaje 8"}
];

const DECKS = {
  A: {
    name:"Mazo A", level:"Åk 6–7 · MYP 1-2",
    colors:[
      {id:"lima", hex:"#e4f21c", name:{sv:"Lime – jag och min familj", en:"Lime – me and my family"}, cards:[
        {q:"¿Cómo te llamas?"},{q:"¿Cuántos años tienes?"},{q:"¿De dónde eres?"},{q:"¿Dónde vives?"},
        {q:"¿Qué idiomas hablas?"},{q:"¿Cuándo es tu cumpleaños?"},{q:"¿Tienes hermanos?",h:"¿Cómo se llaman?"},
        {q:"¿Cómo se llama tu madre / padre?"}]},
      {id:"rosa", hex:"#ff2fa0", name:{sv:"Rosa – ser, estar, tener, ir", en:"Pink – ser, estar, tener, ir"}, cards:[
        {q:"¿Cómo estás?"},{q:"¿Tienes hambre?"},{q:"¿Tienes frío o calor?"},{q:"¿Tienes animales / mascotas?",h:"¿Cómo se llaman?"},
        {v:"yo · ser", t:"presente", a:"soy"},{v:"nosotros · ir", t:"presente", a:"vamos"},
        {v:"ella · estar", t:"presente", a:"está"},{v:"ellos · tener", t:"presente", a:"tienen"}]},
      {id:"cian", hex:"#33d4f2", name:{sv:"Cyan – fritid och futurum", en:"Cyan – free time and future"}, cards:[
        {q:"¿Qué haces en tu tiempo libre?"},{q:"¿Cuál es tu comida favorita?"},{q:"¿De qué equipo eres?",h:"fútbol, baloncesto, hockey…"},
        {q:"¿Cuál es tu asignatura favorita?",h:"¿Por qué?"},{q:"¿Qué vas a hacer mañana?"},{q:"¿Qué vas a hacer el fin de semana?"},
        {v:"tú · comer", t:"futuro", a:"vas a comer"},{v:"nosotros · jugar", t:"futuro", a:"vamos a jugar"}]},
      {id:"morado", hex:"#9b3cf0", name:{sv:"Lila – säg…!", en:"Purple – say…!"}, cards:[
        {q:"Di los días de la semana",h:"en el orden correcto"},{q:"Di los meses",h:"en el orden correcto"},
        {q:"Di los números hasta 25",h:"1, 2, 3…"},{q:"Di tres animales"},{q:"Di cinco cosas que hay en la clase",h:"libros, lápices…"},
        {q:"¿Qué ropa llevas?"},{q:"¿Qué tiempo hace hoy?"},{q:"¿Qué hora es?"}]}
    ]
  },
  B: {
    name:"Mazo B", level:"Åk 8–9 · MYP 3-4",
    colors:[
      {id:"lima", hex:"#e4f21c", name:{sv:"Lime – jag och min vardag", en:"Lime – me and my everyday life"}, cards:[
        {q:"Habla de ti mismo / misma",h:"nombre, edad, familia, escuela, intereses…"},{q:"¿Cómo eres?",h:"divertido/a, alto/a, amable…"},
        {q:"¿Cómo es tu habitación?",h:"¿Qué colores tiene? ¿Qué muebles hay?"},{q:"¿Qué desayunas normalmente?",h:"zumo, fruta, bocadillo…"},
        {q:"¿Qué tiene tu pizza favorita?",h:"queso, tomate…"},{q:"¿Cuál es la capital de España?"},
        {q:"¿Dónde está Estocolmo?"},{q:"¿A qué hora terminan las clases mañana?"}]},
      {id:"cian", hex:"#33d4f2", name:{sv:"Cyan – futurum: ir a + infinitiv", en:"Cyan – future: ir a + infinitive"}, cards:[
        {q:"¿Qué vas a hacer el fin de semana?"},{q:"¿Qué vas a hacer en las vacaciones?"},
        {q:"¿Qué planes tienes para el futuro?",h:"¿Dónde? ¿Con quién?"},{q:"¿Qué vas a hacer después de clase?",own:true},
        {v:"yo · viajar", t:"futuro", a:"voy a viajar"},{v:"ellos · comer", t:"futuro", a:"van a comer"},
        {v:"nosotros · ver una película", t:"futuro", a:"vamos a ver una película"},{v:"tú · estudiar", t:"futuro", a:"vas a estudiar"}]},
      {id:"naranja", hex:"#ff9a1f", name:{sv:"Orange – perfekt: haber + particip", en:"Orange – perfect: haber + participle"}, cards:[
        {q:"¿Qué no has hecho nunca?"},{q:"¿Qué has hecho hoy?",own:true},{q:"¿Has estado en España?",h:"¿Dónde?",own:true},
        {q:"¿Qué has comido hoy?",own:true},
        {v:"yo · hacer", t:"perfecto", a:"he hecho"},{v:"tú · ver", t:"perfecto", a:"has visto"},
        {v:"ella · escribir", t:"perfecto", a:"ha escrito"},{v:"nosotros · volver", t:"perfecto", a:"hemos vuelto"}]},
      {id:"morado", hex:"#9b3cf0", name:{sv:"Lila – estar + gerundium", en:"Purple – estar + gerund"}, cards:[
        {q:"¿Qué estás haciendo ahora?",own:true},{q:"¿Qué está haciendo tu familia ahora?",h:"Imagina…",own:true},
        {q:"Mira la clase: ¿qué están haciendo tus compañeros?",own:true},{q:"Haz una mímica: los demás dicen qué estás haciendo",own:true},
        {v:"yo · leer", t:"gerundio", a:"estoy leyendo"},{v:"él · dormir", t:"gerundio", a:"está durmiendo"},
        {v:"nosotros · comer", t:"gerundio", a:"estamos comiendo"},{v:"ellos · decir", t:"gerundio", a:"están diciendo"}]}
    ]
  }
};

/* Special cards (2 of each per deck). Colourless: in ¡Chao pescao! they can be played on anything. */
const SPECIALS = [
  {id:"quefuerte", img:"../img/quefuerte.webp", es:"Roba una parte a otro jugador", uno:"El siguiente roba 2 cartas"},
  {id:"todobien",  img:"../img/todobien.webp",  es:"¡Escudo! Nadie te roba", uno:"Elige el color"},
  {id:"planazo",   img:"../img/planazo.webp",   es:"Cambia una parte con otro jugador", uno:"Cambia de dirección"},
  {id:"vamos",     img:"../img/vamos.webp",     es:"Juega otra carta", uno:"El siguiente pierde el turno"}
];

function buildDeck(key){
  const d = DECKS[key], cards = [];
  const used = [0,0,0,0];
  CHARACTERS.forEach((ch,i)=>PARTS.forEach((pt,j)=>{
    const c = (i + j) % 4, col = d.colors[c];
    cards.push({type:"part", ch, ci:i, part:pt, color:col, challenge:col.cards[used[c]++]});
  }));
  SPECIALS.forEach(s=>{ cards.push({type:"special", sp:s}); cards.push({type:"special", sp:s}); });
  return cards;
}
