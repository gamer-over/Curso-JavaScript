let pessoa = {
nome: 'Dã',
idade: 15,
falar:function(){
    console.log('Olá cazé')
 },
 soma:function(a, b){
     return a + b;
 }
}

console.log(pessoa.nome)

pessoa.falar();

var soma = pessoa.soma(2, 2);

console.log(soma);