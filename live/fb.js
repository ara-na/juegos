// Firebase connection for the live quiz. These keys are public by design; security lives in the database rules.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInAnonymously, setPersistence, browserSessionPersistence } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase, ref, set, get, update, remove, onValue, onDisconnect, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const app = initializeApp({
  apiKey: "AIzaSyAoImRwS0HhiCfZs0tG9M_KcUOosNEG1bw",
  authDomain: "juegos-en-espanol.firebaseapp.com",
  databaseURL: "https://juegos-en-espanol-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "juegos-en-espanol",
  appId: "1:555115035879:web:a71d4790f06516701d7642"
});
export const auth = getAuth(app);
export const db = getDatabase(app);
// one anonymous identity per browser tab, forgotten when the tab closes
export async function login(){ await setPersistence(auth, browserSessionPersistence); return (await signInAnonymously(auth)).user.uid; }
export let offset = 0;
onValue(ref(db, ".info/serverTimeOffset"), s => { offset = s.val() || 0; });
export const now = () => Date.now() + offset;
export const R = p => ref(db, p);
export { set, get, update, remove, onValue, onDisconnect, serverTimestamp };

export const PJ = {fresca:"Fresca",arandano:"Arándano",banana:"Banana",coco:"Coco",durian:"Durián",manzana:"Manzana",pera:"Pera",pina:"Piña"};
export const esc = s => String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;");
