var el = document.createElement('h3');

el.classList = 'testando-classe';

var texto = document.createTextNode('este e o texto NOVO');

el.appendChild(texto);

console.log(el);

//selecionar o elemento que quero Trocar

var title = document.querySelector('#title');

console.log(title);

//selecionar o pai do elemento

var pai = title.parentNode;//parentNode-invoca o pai do elemento, exemplo se uma tag, ex:h1-estiver dentro do body ele irá invocar automáticamente o body,ou seja, o elemento pai.

//troca os elementos
pai.replaceChild(el,title);

