/* =========================================================
   VIDEOTECA DE «WATCH & THINK»
   =========================================================
   CÓMO AÑADIR UN VÍDEO (una línea basta):

   {id:"XXXXXXXXXXX", t:"Título del vídeo", ch:"Canal", cat:"animals", added:"2026-12-01"},

   · id    = lo que va después de "watch?v=" en el enlace de YouTube
             (https://www.youtube.com/watch?v=7__r4FVj-EI  →  7__r4FVj-EI)
   · cat   = "animals", "film", "minds", "science" o "fun"
   · added = fecha de hoy. Durante 14 días el vídeo sale con «NEW» y se propone primero.

   OPCIONAL:
   · min:"4:35"      duración
   · long:true       aviso de verlo en dos partes
   · teacher:true    «with teacher»: no sale entre los propuestos al azar
   · hidden:true     lo esconde sin borrarlo (para retirar vídeos ya vistos)
   · pre:["Pregunta antes (inglés)","La misma en sueco"]
   · think:[["Pregunta 1","Fråga 1"],["Pregunta 2","Fråga 2"],["Pregunta 3","Fråga 3"]]
     Si no pones pre/think, se usan las preguntas generales de la categoría (abajo).

   Cuidado: cada línea termina en coma, y los textos van entre comillas "…".
   Si un texto lleva comillas dobles dentro, usa comillas simples en el texto.
   ========================================================= */
const CATS = {animals:"🐾 Animals & nature", film:"🎬 Movies & games", minds:"🧠 People & minds", science:"🔬 Weird science", fun:"😂 Funny & strange"};

const DEFAULT_Q = {
  animals:{pre:["Look at the title. What will happen? Guess!","Titta på titeln. Vad kommer att hända? Gissa!"],
    think:[["Which animal or moment surprised you most? Why?","Vilket djur eller ögonblick överraskade dig mest? Varför?"],
           ["Describe one animal: how does it look and how does it move?","Beskriv ett djur: hur ser det ut och hur rör det sig?"],
           ["Imagine you are that animal for one day. What do you do?","Tänk dig att du är det djuret en dag. Vad gör du?"]]},
  film:{pre:["Look at the title. What do you think the video is about?","Titta på titeln. Vad tror du att videon handlar om?"],
    think:[["What was the most interesting idea in the video?","Vilken var den mest intressanta idén i videon?"],
           ["Think of a film or game you know. How does this idea fit it?","Tänk på en film eller ett spel du känner till. Hur passar idén där?"],
           ["If you made your own film or game, what would you take from this video?","Om du gjorde en egen film eller ett eget spel, vad skulle du ta från videon?"]]},
  minds:{pre:["Look at the title. Do you agree with it before you watch?","Titta på titeln. Håller du med innan du tittar?"],
    think:[["What is one idea from the video you agree with?","Vilken idé i videon håller du med om?"],
           ["Is there something you don't agree with? Why?","Finns det något du inte håller med om? Varför?"],
           ["What would you tell a friend about this video?","Vad skulle du berätta för en kompis om videon?"]]},
  science:{pre:["Predict: what is the answer to the question in the title?","Gissa: vad är svaret på frågan i titeln?"],
    think:[["Was your guess right? What was the real answer?","Gissade du rätt? Vad var det riktiga svaret?"],
           ["Explain the main idea in one or two sentences.","Förklara huvudidén med en eller två meningar."],
           ["What if it was the other way round? What would happen?","Tänk om det var tvärtom? Vad skulle hända?"]]},
  fun:{pre:["Look at the title. What do you think happens?","Titta på titeln. Vad tror du händer?"],
    think:[["What was the funniest or strangest moment?","Vilket var det roligaste eller konstigaste ögonblicket?"],
           ["Tell what happened in three steps: first, then, at the end.","Berätta vad som hände i tre steg: först, sen, till slut."],
           ["Write a short news headline for the video.","Skriv en kort nyhetsrubrik till videon."]]}
};

const VIDEOS = [
  {id:"qWG2f9DwwpY", t:"Why animals help each other", ch:"TED-Ed", added:"2026-11-21", cat:"animals", lvl:"B1–B2",
   pre:["Why would an animal help another animal? Guess!","Varför skulle ett djur hjälpa ett annat djur? Gissa!"],
   think:[["Which example in the video surprised you most?","Vilket exempel i videon överraskade dig mest?"],
          ["Do animals help for free, or do they get something back? What do you think?","Hjälper djur gratis, eller får de något tillbaka? Vad tror du?"],
          ["Is there an animal that would never help others? Why?","Finns det ett djur som aldrig skulle hjälpa andra? Varför?"]]},
  {id:"3uTmcG7CgdI", t:"How do animals regrow their limbs? And why can't humans do it?", ch:"TED-Ed", added:"2026-11-21", cat:"animals", lvl:"B1–B2",
   pre:["Which animals can grow a new leg or tail? Guess!","Vilka djur kan få ett nytt ben eller en ny svans? Gissa!"],
   think:[["Which animal in the video was the most amazing? Why?","Vilket djur i videon var mest fantastiskt? Varför?"],
          ["Imagine humans could regrow an arm. What would change?","Tänk om människor kunde få en ny arm. Vad skulle ändras?"],
          ["Would it be good or bad if we could regrow everything? Give two reasons.","Vore det bra eller dåligt om vi kunde återskapa allt? Ge två skäl."]]},
  {id:"y6u1GPpJuR4", t:"Why do animals form swarms?", ch:"TED-Ed", added:"2026-11-21", cat:"animals", lvl:"B1–B2",
   pre:["Why do birds and fish move in big groups? Guess!","Varför rör sig fåglar och fiskar i stora grupper? Gissa!"],
   think:[["Is it safer to be alone or in a big group? Why?","Är det säkrare att vara ensam eller i en stor grupp? Varför?"],
          ["Who decides where the swarm goes? Is there a boss?","Vem bestämmer vart svärmen går? Finns det en chef?"],
          ["Do people sometimes act like a swarm? When?","Beter sig människor ibland som en svärm? När?"]]},
  {id:"9bEjYunwByw", t:"Turret Spiders Launch Sneak Attacks From Tiny Towers", ch:"Deep Look (KQED)", added:"2026-11-21", cat:"animals", min:"4:35", lvl:"B1",
   pre:["A spider that lives in a tiny tower. How does it catch food? Guess!","En spindel som bor i ett litet torn. Hur fångar den mat? Gissa!"],
   think:[["Describe the spider: how does it look and how does it move?","Beskriv spindeln: hur ser den ut och hur rör den sig?"],
          ["Why is a tower a good idea for a spider?","Varför är ett torn en bra idé för en spindel?"],
          ["If you were an insect, how would you escape?","Om du var en insekt, hur skulle du fly?"]]},
  {id:"7__r4FVj-EI", t:"Octopus vs Underwater Maze", ch:"Mark Rober", added:"2026-11-21", cat:"animals", min:"17:13", lvl:"B1", long:true,
   pre:["Can an octopus solve a maze? Predict: yes or no?","Kan en bläckfisk lösa en labyrint? Gissa: ja eller nej?"],
   think:[["Which part of the maze was the hardest? Why?","Vilken del av labyrinten var svårast? Varför?"],
          ["Is an octopus smart? Give two reasons.","Är en bläckfisk smart? Ge två skäl."],
          ["Design a new obstacle for the octopus. Draw it if you want!","Hitta på ett nytt hinder för bläckfisken. Rita det om du vill!"]]},
  {id:"hFZFjoX2cGg", t:"Backyard Squirrel Maze 1.0 – Ninja Warrior Course", ch:"Mark Rober", added:"2026-11-21", cat:"animals", min:"21:40", lvl:"B1", long:true,
   pre:["How would you stop squirrels from stealing bird food?","Hur skulle du stoppa ekorrar från att stjäla fågelmat?"],
   think:[["Which obstacle was the best? Why?","Vilket hinder var bäst? Varför?"],
          ["What are squirrels really good at?","Vad är ekorrar riktigt bra på?"],
          ["Invent one more obstacle. Draw it if you want!","Hitta på ett hinder till. Rita det om du vill!"]]},
  {id:"9dfCQx81i8g", t:"VFX Artists React to Bad & Great CGi 221", ch:"Corridor Crew", added:"2026-11-21", cat:"film", lvl:"B1–B2",
   pre:["Can you always see if something in a film is CGI?","Kan man alltid se om något i en film är datoranimerat?"],
   think:[["Which effect looked real, and which looked fake? Why?","Vilken effekt såg äkta ut, och vilken såg falsk ut? Varför?"],
          ["Why do some CGI effects look bad?","Varför ser vissa datoreffekter dåliga ut?"],
          ["If you made a film, which effect would you want? How would you make it?","Om du gjorde en film, vilken effekt skulle du vilja ha? Hur skulle du göra den?"]]},
  {id:"iIOIT3dCy5w", t:"How To Think Like A Game Designer", ch:"Game Maker's Toolkit", added:"2026-11-21", cat:"film", lvl:"B1–B2",
   pre:["What makes a game fun? Name one thing.","Vad gör ett spel roligt? Nämn en sak."],
   think:[["What is one idea from the video you never thought about before?","Vilken idé i videon hade du aldrig tänkt på förut?"],
          ["Think of a game you know. What makes it fun or boring?","Tänk på ett spel du känner till. Vad gör det roligt eller tråkigt?"],
          ["Design a tiny game: what is the goal, the problem and the reward?","Hitta på ett litet spel: vad är målet, problemet och belöningen?"]]},
  {id:"I9hJ_Rux9y0", t:"How To Make Friends", ch:"Kurzgesagt – In a Nutshell", added:"2026-11-21", cat:"minds", lvl:"B1–B2", teacher:true,
   pre:["Is it easy or hard to make friends? Why?","Är det lätt eller svårt att få vänner? Varför?"],
   think:[["What is one idea from the video you agree with?","Vilken idé i videon håller du med om?"],
          ["Is there something in the video you don't agree with?","Finns det något i videon du inte håller med om?"],
          ["What makes a good friend? Name two things.","Vad gör en bra vän? Nämn två saker."]]}
];
