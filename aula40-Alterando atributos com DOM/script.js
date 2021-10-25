//adicionar atributo
var title = document.querySelector('#title');

title.setAttribute("class", 'testando');

console.log(title);

var btn = document.querySelector('#btn');

btn.setAttribute("disabled", "disabled");

var subtitle = document.querySelector('#subtitle');

subtitle.setAttribute("id", "titulo-2");

//remover atributo
var list = document.querySelector('#list');

list.removeAttribute("id");