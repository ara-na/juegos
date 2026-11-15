/* Loaded before the unit files. Helpers for writing units. */
window.UNITS = window.UNITS || {};
function UNIT(id, data){ window.UNITS[id] = Object.assign({id}, data); }
/* meaning shown instead of a picture: M("English","Svenska") */
function M(en, sv){ return {t:{en, sv: sv || en}}; }
/* colour swatch */
function C(hex){ return {c:hex}; }
const COLORES = [
  ["rojo",C("#e53935")],["azul",C("#1e63ff")],["verde",C("#2e9e4f")],["amarillo",C("#ffd400")],["negro",C("#1b1b1b")],
  ["blanco",C("#ffffff")],["naranja",C("#ff8a1f")],["morado",C("#8b3fd9")],["rosa",C("#ff7eb6")],["marrón",C("#8a5a2b")],["gris",C("#9a9a9a")]
];
