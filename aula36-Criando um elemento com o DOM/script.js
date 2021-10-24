//creatElement()-Cria elementos no HTML
var novoparagrafo = document.createElement('p');

console.log(novoparagrafo);

var texto = document.createTextNode('Olá');

novoparagrafo.appendChild(texto);

console.log(novoparagrafo);

var body = document.querySelector('body');

console.log(body);

body.appendChild(novoparagrafo);

//inserir em um container

var container = document.getElementById('container');

console.log(container);

var el = document.createElement('span')

el.appendChild(document.createTextNode('teste'));

console.log(el);

container.appendChild(el);
