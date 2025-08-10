let numeros = [10, 20, 30, 40];

// Use o forEach para imprimir cada número da lista
numeros.forEach(function(numero) {
  console.log(numero);
});


let letras = ['a', 'b', 'c', 'd'];

// Use forEach para imprimir o índice e o valor
letras.forEach(function(letra, indice) {
  console.log("indice: " + indice,"Letra: " + letra);
});


let valores = [1, 2, 3, 4];
let soma = 0;

// Use forEach para somar os valores na variável soma
valores.forEach(function(valor) {
  soma += valor;
});

console.log("A soma dos itens da litsa = " + soma); // Deve mostrar 10
