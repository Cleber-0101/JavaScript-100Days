// Listas
let nomes = ["Pedro", 2, "José", "Maria", "Ana", 100, true];


//Adiciona um item no final da lista
nomes.push("Eu sou dev Pleno")
console.log(nomes)

//Remover o ultimo item da Fila
nomes.pop()
console.log(nomes)

//Adiciona um item no começo da lista
nomes.unshift("Eu sou DEV Senior")
console.log(nomes)

//Remove um item do começo da fila
nomes.shift()
console.log(nomes)

//Localiza qual indexador(POSIÇÃO) do item
const posicao = nomes.indexOf(2)
if (posicao === 1) {
    console.log("achei a posição")
} else {
    console.log("deu errado")
}

//Metodo INCLUDES verifica a existencia de um item 
if (nomes.includes("Eu Sou dev junior")) {
    console.log("Achei o dado")
} else {
    console.log("Não esta na lista")
}

//Metodo SCLICE() fatia os elementos da ARRAY e cria um novo ARRAY
// No exemplo ele pega o indice 0  A 4 da lista (fatia) e cria um novo array
let corteiEsseDados = nomes.slice(0, 4)
console.log(corteiEsseDados)





