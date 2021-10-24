//splice-Adiciona ou remove elementos no meio da array

var arr = [1,2,3,4,5];

arr.splice(2, 0, 999);

console.log(arr);

arr.splice(4, 1);

console.log(arr);

//indexOf-Acha o índice do elemento

console.log(arr.indexOf(5));

//join-Transformas os elementos em Strings

var arr2 = ['O', 'rato', 'roeu', 'a', 'roupa']

console.log(arr2.join())

//reverse-Inverte a ordem dos elementos da array

console.log(arr2.reverse())
