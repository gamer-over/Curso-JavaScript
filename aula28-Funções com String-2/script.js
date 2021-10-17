//toLowerCase-Letra minúscula e toUpperCase-Letra maiúscula

var frase = 'Esta é a Frase'

var frase = 'caixa alta';

console.log(frase.toUpperCase());

console.log(frase.toLowerCase());

//trim-Tira todos os espaçoes feitos.

var nome = '           Dã          ';

var nometrin = nome.trim();

console.log(nome);

console.log(nometrin);

//split-Transforma a string em array

console.log(frase.split(" "));

var tags = 'PHP , js, HTML, CSS';

console.log(tags.split(" "));

//lastIndexOf-Se houver duas palavras iguais,e quisermos a ultima devemos usar o lastIndexOf, para localizar a ultima.

var frasedois = "Tenho um teste hoje e um teste amanha"

console.log(frasedois.indexOf('teste'));

console.log(frasedois.lastIndexOf('teste'));