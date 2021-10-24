var teste= 5;

console.log(this);
console.log(this.teste);
console.log(teste);


alert("olá");

let pessoa = {
    nome: 'Dã',
    idade: 15,
    falar:function(){
        console.log('Olá cazé');
    },
    dizerNome:function(){
        console.log("meu nome é " + this.nome);
        },
        aniversario:function(){
            this.idade += 1;
        },
saudacao:function(){
    return'sr.' +this.nome
}
};

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();

console.log(pessoa.idade);

console.log(pessoa.saudacao());