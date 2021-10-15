var x = 1; //ESCOPO GLOBAL
            /*
            Podemos acessar o valor da variavel de qualquer lugar do código.
            */
var y = 3;

console.log(x,y);

function teste(){

  var z = 0;

  console.log(z); //ESCOPO LOCAL
                  /*
                  Só podemos acessar o valor da variavel dentro da function.
                  */
  console.log(x);
}

teste();

function testando(){

var z = 5; /*
            Não se mistura com a outra variavel Z da outra função, por ser justamente uma variavel local.
            */
  console.log(z);
}

testando();

