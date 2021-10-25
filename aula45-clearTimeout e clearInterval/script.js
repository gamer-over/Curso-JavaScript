//clearTimeout-Não deixa repetir 
var x = 0;

var myTimer = setTimeout(function(){

    console.log("0 x é 0");
    
},1500);

x = 5;

if(x > 0){

    clearTimeout(myTimer);

    console.log("O x passou de 0");
}

//clearInterval-para o setInterval

var myInterval = setInterval(function(){

    console.log("interval");

},500);

setTimeout(function(){

console.log("Não precisamos mais  repetir");

clearInterval(myInterval);

},1500);