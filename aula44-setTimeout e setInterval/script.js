//setTimeout-aciona o comando após o tempo estaelecido.
console.log("antes do teste");

setTimeout(function(){

console.log("testando");

},2000);

console.log("depois do teste");

//setInterval-repete a ação de tempo em tempo, sendo ele determinado pelo programador.
setInterval(function(){

    console.log("testando");

},1000);