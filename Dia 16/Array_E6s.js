// Nova forma de percorrer dados em um array 
const lista = [1, 2, 3, 4, 5, 6]

//Ele percorre cada dados inserido na lista e faz uma multiplicação com exemplo de percorrer dados um por vez 
const novaLista = lista.map(function (item) {
    return item * 10
})

console.log(novaLista)


// reduce somando todos os item da lista
const soma = lista.reduce(function (total, proximo) {
    return total + proximo
})
console.log(soma)



// find encontra um dado na lista e retorna se achou e não achou não retorna nada

const find = lista.find(function (item) {
    return item === 10;
})

console.log(find)


// Procurando um dado dentro de uma array, devolve um true ouo falso
const listaDeNomes = ["cleber", "marcio", "jessica"]
console.log(listaDeNomes.includes("cleber"))



//classes
class Produtos {
    constructor(name, price) {
        this.name = name
        this.price
    }

    prudutosComDescontos(descontos){
        return this.price = ((100 - descontos ) /100)
    }
}   

const camisa = new Produtos("Camisetas gola - V", 250)

console.log(camisa)
console.log(camisa.prudutosComDescontos(15))