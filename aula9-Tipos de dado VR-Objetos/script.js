var obj = {
    nome: 'Dã',
    idade: 15,
    profissao: 'estudante',
    estoutrabalhando: true,
};
console.log(obj);

console.log(typeof obj);

console.log(obj.idade);
console.log(obj.profissao);
console.log('Meu nome é ' +obj.nome);
console.log('Estou trabalhando ' +obj.estoutrabalhando);
 //Para acessar a propriedade do objeto usamos o ponto (.), e podemos concatenar também.
obj.idade = 59;
console.log(obj.idade);
console.log(obj);

//Podemos criar  outros também
obj.sexo ='Masculino';
console.log(obj);




