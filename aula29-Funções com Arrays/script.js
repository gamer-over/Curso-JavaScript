//length

var arr =[1,2,3,4,5];

console.log(arr.length);

//push-adiciona elementos na array

arr.push(6);

console.log(arr);

//pop-tira o ultimo elemento da array

arr.pop();

console.log(arr);

//unshift-adiciona um elemento no inico da array

arr.unshift(0);
arr.unshift('teste');

console.log(arr);

//shift-Remove um elemento do final da array

arr.shift();

console.log(arr);

//Acessar o ultimo elemento usando length - 1

console.log(arr[arr.length - 1]);

//isArray-Verificar se é ua array

console.log(Array.isArray(5));

console.log(Array.isArray(arr));





