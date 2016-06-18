/**
 * Inserta mis frases favoritas en el HTML
 * Las frases se montan en el elemento de ID frases-app
 */

var misFrases = [
  "It's a rare person who wants to hear what he doesn't want to hear. – Dick Cavett",
  "A mind troubled by doubt cannot focus on the course to victory. – Arthur Golden, Memoirs of a Geisha",
  "Have you heard that it was good to gain the day? I also say it is good to fall, battles are lost in the same spirit in which they are won. – Walt Whitman ",
  "When you can't have what you want, it's time to start wanting what you have. – Kathleen A. Sutton.",
  "The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka!' I found it!) but 'That's funny ...' – Isaac Asimov ",
  "Behind the phony tinsel of Hollywood lies the real tinsel. – Oscar Levant"
];
var frasesElement = document.getElementById('frases-app');

// Insertamos un nueva elemento de lista
var lista = document.createElement('UL');
frasesElement.appendChild(lista);

// Recorremos todas las frases para mostrarlas como una lista
var i = 0;
for (i; i < misFrases.length; i++) {
  var item = document.createElement('LI');
  item.textContent = misFrases[i];
  lista.appendChild(item);
}
