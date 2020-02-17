var nome;
var cognome;
var colore;
const venti = 20;

nome = prompt('Please enter your name');
cognome = prompt('Please enter your last name');
colore = prompt('Please enter your favorite color');

document.getElementById('pwd').innerHTML = nome + cognome + colore + venti;
