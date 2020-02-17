var nome;
var cognome;
var colore;
const venti = 20;
var delimiter = ';';

var currDate = new Date;
var currYear = currDate.getFullYear();

nome = prompt('Per favore, scrivi il tuo Nome:');
cognome = prompt('Per favore, scrivi il tuo Cognome:');
colore = prompt('Per favore, scrivi il tuo colore preferito:');

document.getElementById('pwd1').innerHTML = nome + cognome + colore + currYear;

document.getElementById('pwd2').innerHTML = nome + ';' + cognome + ';' + colore + ';' + currYear;

document.getElementById('pwd3').innerHTML = nome + ';' + cognome + ';' + colore + ';' + venti;

document.getElementById('pwd1').setAttribute('class','font-blue');
document.getElementById('pwd2').setAttribute('class','font-italic');
document.getElementById('pwd3').setAttribute('class','font-underline');
