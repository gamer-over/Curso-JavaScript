var title = document.querySelector('#title');

//Formas de alterar o conteúdo 

//textContent-->mais utilizado,mais recomendado.

var subtitle = document.querySelector("#subtitle");

console.log(subtitle);

subtitle.textContent = 'olá ';


//innerHTML

title.innerHTML = "testando a alteração";